(()=>{"use strict";let e="",t="module";function n(t,n,i,s){const o="string"==typeof n?n:"info",a="object"==typeof n?n:"object"==typeof i?i:void 0,r="boolean"==typeof n?n:"boolean"==typeof i?i:s??!1;ui.notifications.notify(function(...t){let[n,i]=t;return n=`${e}.${n}`,i?game.i18n.format(n,i):game.i18n.localize(n)}(t,a),o,{permanent:r})}function i(t,n,i="WRAPPER"){return libWrapper.register(e,t,n,i)}async function s(e){if(this.isShield)return e();const t=this.actor;if(!t||!t.isOfType("character"))return e();const n=t.level;this.system.potencyRune.value=n<5?null:n<11?1:n<18?2:3,this.system.resiliencyRune.value=n<8?null:n<14?"resilient":n<20?"greaterResilient":"majorResilient",e()}async function o(e){const t=this.actor;if(!t||!t.isOfType("character"))return e();const n=t.level,i=this._source.system.traits.value;if(i.includes("alchemical")&&i.includes("bomb"))return e();this.system.potencyRune.value=n<2?null:n<10?1:n<16?2:3,this.system.strikingRune.value=n<4?null:n<12?"striking":n<19?"greaterStriking":"majorStriking",e()}!function(n,i=!1){e||(e="pf2e-arp"),t=i?"system":"module"}(),Hooks.once("libWrapper.Ready",(()=>{})),Hooks.once("setup",(()=>{i("CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData",o,"WRAPPER"),i("CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData",s,"WRAPPER")})),Hooks.once("ready",(()=>{game.user.isGM&&"noABP"!==game.settings.get("pf2e","automaticBonusVariant")&&(game.settings.set("pf2e","automaticBonusVariant","noABP"),function(...e){const[t,i,s]=e;n(t,"info",i,s)}("forceVariant"))}))})();
//# sourceMappingURL=main.js.map