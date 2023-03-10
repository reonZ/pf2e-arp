import { info } from '@utils/foundry/notification'
import { registerWrapper } from '@utils/libwrapper'
import { setModuleID } from '@utils/module'

export const MODULE_ID = 'pf2e-arp'
setModuleID(MODULE_ID)

Hooks.once('libWrapper.Ready', () => {})

Hooks.once('ready', () => {
    registerWrapper('CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData', onPrapareWeaponData)
    registerWrapper('CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData', onPrepareArmorData)

    if (!game.user.isGM) return
    if (game.settings.get('pf2e', 'automaticBonusVariant') !== 'noABP') {
        game.settings.set('pf2e', 'automaticBonusVariant', 'noABP')
        info('forceVariant')
    }
})

async function onPrepareArmorData(this: ArmorPF2e, wrapped: libWrapper.WrappedFunction) {
    if (this.isShield) return wrapped()

    const actor = this.actor
    if (!actor || !actor.isOfType('character')) return wrapped()

    const level = actor.level

    this.system.potencyRune.value = level < 5 ? null : level < 11 ? 1 : level < 18 ? 2 : 3
    this.system.resiliencyRune.value =
        level < 8 ? null : level < 14 ? 'resilient' : level < 20 ? 'greaterResilient' : 'majorResilient'

    wrapped()
}

async function onPrapareWeaponData(this: WeaponPF2e, wrapped: libWrapper.WrappedFunction) {
    const actor = this.actor
    if (!actor || !actor.isOfType('character')) return wrapped()

    const level = actor.level

    if (this._source.system.temporary) {
        const traits = this._source.system.traits.value
        if (traits.includes('alchemical') && traits.includes('bomb')) return wrapped()
    }

    this.system.potencyRune.value = level < 2 ? null : level < 10 ? 1 : level < 16 ? 2 : 3
    this.system.strikingRune.value = level < 4 ? null : level < 12 ? 'striking' : level < 19 ? 'greaterStriking' : 'majorStriking'

    wrapped()
}
