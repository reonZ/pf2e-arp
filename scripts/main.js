(()=>{"use strict";let e="";function t(t,n,i,s){const o="string"==typeof n?n:"info",a="object"==typeof n?n:"object"==typeof i?i:void 0,r="boolean"==typeof n?n:"boolean"==typeof i?i:s??!1;ui.notifications.notify(function(...t){let[n,i]=t;return n=`${e}.${n}`,i?game.i18n.format(n,i):game.i18n.localize(n)}(t,a),o,{permanent:r})}function n(t,n,i="WRAPPER"){libWrapper.register(e,t,n,i)}async function i(e){if(this.isShield)return e();const t=this.actor;if(!t||!t.isOfType("character"))return e();const n=t.level;this.system.potencyRune.value=n<5?null:n<11?1:n<18?2:3,this.system.resiliencyRune.value=n<8?null:n<14?"resilient":n<20?"greaterResilient":"majorResilient",e()}async function s(e){const t=this.actor;if(!t||!t.isOfType("character"))return e();const n=t.level;if(this._source.system.temporary){const t=this._source.system.traits.value;if(t.includes("alchemical")&&t.includes("bomb"))return e()}this.system.potencyRune.value=n<2?null:n<10?1:n<16?2:3,this.system.strikingRune.value=n<4?null:n<12?"striking":n<19?"greaterStriking":"majorStriking",e()}e||(e="pf2e-arp"),Hooks.once("libWrapper.Ready",(()=>{})),Hooks.once("ready",(()=>{n("CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData",s),n("CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData",i),game.user.isGM&&"noABP"!==game.settings.get("pf2e","automaticBonusVariant")&&(game.settings.set("pf2e","automaticBonusVariant","noABP"),function(...e){const[n,i,s]=e;t(n,"info",i,s)}("forceVariant"))}))})();
//# sourceMappingURL=main.js.map