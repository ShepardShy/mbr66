import{y as m,o as r,c as u,a as e,t as o,u as f,g as c,w as a,b as g,d as i,e as h}from"./entry.1f11dde8.js";import{A as p}from"./AppButton.5c0762f5.js";const y={class:"card",itemscope:"",itemtype:"https://schema.org/Product"},k={class:"ibg card__image",itemprop:"image"},B=["src","alt"],C={class:"card__title",itemprop:"name"},x={class:"card__price",itemprop:"offers",itemscope:"",itemtype:"https://schema.org/Offer"},b=e("meta",{itemprop:"priceCurrency",content:"RUB"},null,-1),v={class:"card__price-text",itemprop:"price"},w={__name:"Card",props:{isLink:{default:!1,type:Boolean},parentPage:{default:"/",type:String},card:{default:{id:0,title:null,price:0,preview:null},type:Object}},setup(n){const t=n,d=m(()=>t.card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "));return(_,s)=>{const l=h;return r(),u("div",y,[e("figure",k,[e("img",{src:t.card.preview,alt:t.card.title},null,8,B)]),e("div",C,o(t.card.title),1),e("div",x,[b,e("span",v," от "+o(f(d))+" руб. ",1)]),t.isLink?(r(),c(l,{key:0,to:`/${t.parentPage}/${t.card.id}`,itemprop:"url"},{default:a(()=>[g(p,{class:"card__button"},{default:a(()=>[i(" Подробнее ")]),_:1})]),_:1},8,["to"])):(r(),c(p,{key:1,class:"card__button",onClick:s[0]||(s[0]=()=>_.$emit("showMoreCard",t.card.id))},{default:a(()=>[i(" Подробнее ")]),_:1}))])}}},P=w;export{P as A};