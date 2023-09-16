(()=>{var u=Object.defineProperty;var n=(s,e)=>u(s,"name",{value:e,configurable:!0});var p="pf2e-arp";function f(s,e,t,i){let a=typeof e=="string"?e:"info",l=typeof e=="object"?e:typeof t=="object"?t:void 0,c=typeof e=="boolean"?e:typeof t=="boolean"?t:i??!1;ui.notifications.notify(localize(s,l),a,{permanent:c})}n(f,"notify");function o(...s){let[e,t,i]=s;f(e,"info",t,i)}n(o,"info");function r(s,e,t="WRAPPER"){return libWrapper.register(p,s,e,t)}n(r,"registerWrapper");var m="CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareBaseData",y="CONFIG.PF2E.Item.documentClasses.weapon.prototype.prepareDerivedData",h="CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareBaseData",P="CONFIG.PF2E.Item.documentClasses.armor.prototype.prepareDerivedData";Hooks.once("init",()=>{r(m,v,"WRAPPER"),r(y,R,"WRAPPER"),r(h,A,"WRAPPER"),r(P,g,"WRAPPER")});Hooks.once("ready",()=>{game.user.isGM&&game.settings.get("pf2e","automaticBonusVariant")!=="noABP"&&(game.settings.set("pf2e","automaticBonusVariant","noABP"),o("forceVariant"))});function v(s){let e=this.actor;if(!e||!e.isOfType("character"))return s();let t=e.level,i=this._source.system.traits.value;if(i.includes("alchemical")&&i.includes("bomb"))return s();this.system.potencyRune.value=t<2?null:t<10?1:t<16?2:3,this.system.strikingRune.value=t<4?null:t<12?"striking":t<19?"greaterStriking":"majorStriking",s()}n(v,"onPrepareWeaponData");function R(s){s();let e=this.actor?.level;if(this.system.specific?.value||e==null||e<2)return;let t=this._source.system.traits.value;if(t.includes("alchemical")&&t.includes("bomb"))return;let i=this.price.value.goldValue;if(i-=e>=16?8935:e>=10?935:35,this.system.runes.property.length||(i+=new game.pf2e.Coins(this._source.system.price.value).goldValue),e<4){this.system.price.value=new game.pf2e.Coins({gp:i});return}i-=e>=19?31065:e>=12?1065:65,this.system.price.value=new game.pf2e.Coins({gp:i})}n(R,"onPrepareWeaponDerivedData");function A(s){if(this.isShield)return s();let e=this.actor;if(!e||!e.isOfType("character"))return s();let t=e.level;this.system.potencyRune.value=t<5?null:t<11?1:t<18?2:3,this.system.resiliencyRune.value=t<8?null:t<14?"resilient":t<20?"greaterResilient":"majorResilient",s()}n(A,"onPrepareArmorData");function g(s){s();let e=this.actor?.level;if(this.isShield||this.system.specific?.value||e==null||e<5)return;let t=this.price.value.goldValue;if(t-=e>=18?20560:e>=11?1060:160,this.system.runes.property.length||(t+=new game.pf2e.Coins(this._source.system.price.value).goldValue),e<8){this.system.price.value=new game.pf2e.Coins({gp:t});return}t-=e>=20?49440:e>=14?3440:340,this.system.price.value=new game.pf2e.Coins({gp:t})}n(g,"onPrepareArmorDerivedData");})();
//# sourceMappingURL=main.js.map
