import { info, registerWrapper } from './module.js'

const PREPARE_WEAPON_DATA = 'CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData'
const PREPARE_WEAPON_DERIVED_DATA = 'CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareDerivedData'
const PREPARE_ARMOR_DATA = 'CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData'
const PREPARE_Armor_DERIVED_DATA = 'CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareDerivedData'

Hooks.once('init', () => {
    registerWrapper(PREPARE_WEAPON_DATA, onPrepareWeaponData, 'WRAPPER')
    registerWrapper(PREPARE_WEAPON_DERIVED_DATA, onPrepareWeaponDerivedData, 'WRAPPER')
    registerWrapper(PREPARE_ARMOR_DATA, onPrepareArmorData, 'WRAPPER')
    registerWrapper(PREPARE_Armor_DERIVED_DATA, onPrepareArmorDerivedData, 'WRAPPER')
})

Hooks.once('ready', () => {
    if (!game.user.isGM) return
    if (game.settings.get('pf2e', 'automaticBonusVariant') !== 'noABP') {
        game.settings.set('pf2e', 'automaticBonusVariant', 'noABP')
        info('forceVariant')
    }
})

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

function onPrepareWeaponDerivedData(wrapped) {
    wrapped()

    const level = this.actor?.level
    if (this.system.specific?.value || level == null || level < 2) return

    const traits = this._source.system.traits.value
    if (traits.includes('alchemical') && traits.includes('bomb')) return

    let gp = this.price.value.goldValue
    gp -= level >= 16 ? 8935 : level >= 10 ? 935 : 35

    if (!this.system.runes.property.length) {
        gp += new game.pf2e.Coins(this._source.system.price.value).goldValue
    }

    if (level < 4) {
        this.system.price.value = new game.pf2e.Coins({ gp })
        return
    }

    gp -= level >= 19 ? 31065 : level >= 12 ? 1065 : 65
    this.system.price.value = new game.pf2e.Coins({ gp })
}

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

function onPrepareArmorDerivedData(wrapped) {
    wrapped()

    const level = this.actor?.level
    if (this.isShield || this.system.specific?.value || level == null || level < 5) return

    let gp = this.price.value.goldValue
    gp -= level >= 18 ? 20560 : level >= 11 ? 1060 : 160

    if (!this.system.runes.property.length) {
        gp += new game.pf2e.Coins(this._source.system.price.value).goldValue
    }

    if (level < 8) {
        this.system.price.value = new game.pf2e.Coins({ gp })
        return
    }

    gp -= level >= 20 ? 49440 : level >= 14 ? 3440 : 340
    this.system.price.value = new game.pf2e.Coins({ gp })
}
