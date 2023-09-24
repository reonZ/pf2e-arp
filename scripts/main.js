(()=>{var m=Object.defineProperty;var n=(s,t)=>m(s,"name",{value:t,configurable:!0});var a="pf2e-arp";function f(...s){let[t,e]=s;return t=`${a}.${t}`,e?game.i18n.format(t,e):game.i18n.localize(t)}n(f,"localize");function R(s,t,e,i){let o=typeof t=="string"?t:"info",u=typeof t=="object"?t:typeof e=="object"?e:void 0,p=typeof t=="boolean"?t:typeof e=="boolean"?e:i??!1;ui.notifications.notify(f(s,u),o,{permanent:p})}n(R,"notify");function c(...s){let[t,e,i]=s;R(t,"info",e,i)}n(c,"info");function r(s,t,e="WRAPPER"){return libWrapper.register(a,s,t,e)}n(r,"registerWrapper");var y="CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData",P="CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareDerivedData",h="CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData",E="CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareDerivedData",l=["Compendium.pf2e.equipment-srd.Item.ZhxxqYpVdVx0jSMm"];Hooks.once("init",()=>{r(y,g,"WRAPPER"),r(P,v,"WRAPPER"),r(h,_,"WRAPPER"),r(E,C,"WRAPPER")});Hooks.once("ready",()=>{game.user.isGM&&game.settings.get("pf2e","automaticBonusVariant")!=="noABP"&&(game.settings.set("pf2e","automaticBonusVariant","noABP"),c("forceVariant"))});function g(s){let t=this.actor;if(!t||!t.isOfType("character")||l.includes(this.sourceId))return s();let e=t.level,i=this._source.system.traits.value;if(i.includes("alchemical")&&i.includes("bomb"))return s();this.system.potencyRune.value=e<2?null:e<10?1:e<16?2:3,this.system.strikingRune.value=e<4?null:e<12?"striking":e<19?"greaterStriking":"majorStriking",s()}n(g,"onPrepareWeaponData");var A={1:35,2:935,3:8935,4:8935},d={striking:65,greaterStriking:1065,majorStriking:31065};function v(s){s();let t=this._source.system.traits.value;if(!this.actor||this.isSpecific||t.includes("alchemical")&&t.includes("bomb")||l.includes(this.sourceId))return;let e=this.price.value.goldValue,i=this.system.potencyRune.value;i&&(e-=A[i]);let o=this.system.strikingRune.value;o&&(e-=d[o]),(i||o)&&!this.system.runes.property.length&&(e+=new game.pf2e.Coins(this._source.system.price.value).goldValue),this.system.price.value=new game.pf2e.Coins({gp:e})}n(v,"onPrepareWeaponDerivedData");function _(s){if(this.isShield)return s();let t=this.actor;if(!t||!t.isOfType("character"))return s();let e=t.level;this.system.potencyRune.value=e<5?null:e<11?1:e<18?2:3,this.system.resiliencyRune.value=e<8?null:e<14?"resilient":e<20?"greaterResilient":"majorResilient",s()}n(_,"onPrepareArmorData");var D={1:160,2:1060,3:20560,4:20560},I={resilient:340,greaterResilient:3440,majorResilient:49440};function C(s){if(s(),!this.actor||this.isSpecific||this.isShield)return;let t=this.price.value.goldValue,e=this.system.potencyRune.value;e&&(t-=D[e]);let i=this.system.resiliencyRune.value;i&&(t-=I[i]),(e||i)&&!this.system.runes.property.length&&(t+=new game.pf2e.Coins(this._source.system.price.value).goldValue),this.system.price.value=new game.pf2e.Coins({gp:t})}n(C,"onPrepareArmorDerivedData");})();
//# sourceMappingURL=main.js.map
