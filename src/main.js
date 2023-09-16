import { info, registerWrapper } from './module.js'

const PREPARE_WEAPON_DATA = 'CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData'
const PREPARE_ARMOR_DATA = 'CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData'

Hooks.once('init', () => {
    registerWrapper(PREPARE_WEAPON_DATA, onPrepareWeaponData, 'WRAPPER')
    registerWrapper(PREPARE_ARMOR_DATA, onPrepareArmorData, 'WRAPPER')
})

Hooks.once('ready', () => {
    if (!game.user.isGM) return
    if (game.settings.get('pf2e', 'automaticBonusVariant') !== 'noABP') {
        game.settings.set('pf2e', 'automaticBonusVariant', 'noABP')
        info('forceVariant')
    }
})

function onPrepareArmorData(wrapped) {
    if (this.isShield) return wrapped()

    const actor = this.actor
    if (!actor || !actor.isOfType('character')) return wrapped()

    const level = actor.level

    this.system.potencyRune.value = level < 5 ? null : level < 11 ? 1 : level < 18 ? 2 : 3
    this.system.resiliencyRune.value =
        level < 8 ? null : level < 14 ? 'resilient' : level < 20 ? 'greaterResilient' : 'majorResilient'

    wrapped()
}

function onPrepareWeaponData(wrapped) {
    const actor = this.actor
    if (!actor || !actor.isOfType('character')) return wrapped()

    const level = actor.level

    const traits = this._source.system.traits.value
    if (traits.includes('alchemical') && traits.includes('bomb')) return wrapped()

    this.system.potencyRune.value = level < 2 ? null : level < 10 ? 1 : level < 16 ? 2 : 3
    this.system.strikingRune.value = level < 4 ? null : level < 12 ? 'striking' : level < 19 ? 'greaterStriking' : 'majorStriking'

    wrapped()
}
