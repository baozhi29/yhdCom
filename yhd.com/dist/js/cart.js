"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}new(function(){function i(t,e){_classCallCheck(this,i),this.container=document.getElementById(t),this.shopList=document.getElementsByClassName("product")[0],this.cartList=document.getElementsByClassName("cart")[0],this.products=e,this.cartProducts=this.getStorage()||[],this.container.appendChild(this.shopList),this.container.appendChild(this.cartList)}return _createClass(i,[{key:"setStorage",value:function(t){localStorage.setItem("cart",JSON.stringify(t))}},{key:"getStorage",value:function(){return JSON.parse(localStorage.getItem("cart"))||[]}},{key:"init",value:function(){this.initShopList(),0<this.getStorage().length&&this.renderCartList()}},{key:"initShopList",value:function(){var e="<h2>请选择您喜欢的商品</h2>";e+='<div class="shoplist">',this.products.forEach(function(t){e+='<figure>\n\t\t\t\t\t<div><img src="'.concat(t.pic,'"><span class="pro-id">').concat(t.id,"</span></div>\n\t\t\t\t\t<figcaption>\n\t\t\t\t\t\t<h3>").concat(t.price,"</h3>\n\t\t\t\t\t\t<p>").concat(t.name,'</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<a href="javascript:;" class="addcartBtn">加入购物车</a>\n\t\t\t\t\t</figcaption>\n\t\t\t\t</figure>')}),e+="</div>",this.shopList.innerHTML=e,this.addCartListEvent()}},{key:"addCartListEvent",value:function(){var i=this;this.container.querySelectorAll(".addcartBtn").forEach(function(t){t.onclick=function(){var t=this.parentNode.parentNode,e={id:t.children[0].children[1].innerHTML,name:t.children[1].children[1].innerHTML,pic:t.children[0].children[0].src,price:t.children[1].children[0].innerHTML};i.addToCartProducts(e),i.renderCartList()}})}},{key:"addToCartProducts",value:function(t){this.cartProducts=this.getStorage();for(var e=0;e<this.cartProducts.length;e++)if(this.cartProducts[e].id==t.id)return this.cartProducts[e].num++,void this.setStorage(this.cartProducts);t.num=1,this.cartProducts.push(t),this.setStorage(this.cartProducts)}},{key:"renderCartList",value:function(){var e="<div>\n\t\t\t\t\t\t\t<span>商品ID</span>\n\t\t\t\t\t\t\t<span>商品信息</span>\n\t\t\t\t\t\t\t<span>单价（元）</span>\n\t\t\t\t\t\t\t<span>数量</span>\n\t\t\t\t\t\t\t<span>操作</span>\n\t\t\t\t\t\t</div>";e+='<table class="cart_container"><tbody>',this.getStorage().forEach(function(t){e+="<tr>\n\t\t\t\t\t<td>".concat(t.id,'</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div><img src="').concat(t.pic,'"></div>\n\t\t\t\t\t\t<span>').concat(t.name,"</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>").concat(t.price,'</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class="change">\n\t\t\t\t\t\t\t<span class="jian">-</span>\n\t\t\t\t\t\t\t<span>').concat(t.num,'</span>\n\t\t\t\t\t\t\t<span class="jia">+</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><a href="javascript:;" class="del">删除</a></td>\n\t\t\t\t</tr>')}),e+="</tbody></table>",this.cartList.innerHTML=e,this.deleteProductEvent(),this.changeNumEvent()}},{key:"changeNumEvent",value:function(){var i=this;this.container.querySelectorAll(".change").forEach(function(t){t.onclick=function(t){t.target;var e=this.parentNode.parentNode.children[0].innerHTML;"jian"==t.target.className&&i.jianNum(e),"jia"==t.target.className&&(i.jiaNum(e),i.renderCartList())}})}},{key:"jianNum",value:function(t){for(var e=this.getStorage(),i=0;i<e.length;i++)if(e[i].id==t)return e[i].num--,this.setStorage(e),this.renderCartList(),e[i].num<=0?void this.deleteFromCartProduct(t):void 0}},{key:"jiaNum",value:function(t){for(var e=this.getStorage(),i=0;i<e.length;i++)if(e[i].id==t)return e[i].num++,void this.setStorage(e)}},{key:"deleteProductEvent",value:function(){var e=this;this.container.querySelectorAll(".del").forEach(function(t){t.onclick=function(){var t=this.parentNode.parentNode.children[0].innerHTML;e.deleteFromCartProduct(t)}})}},{key:"deleteFromCartProduct",value:function(e){this.cartProducts=this.getStorage(),this.cartProducts=this.cartProducts.filter(function(t){return t.id!=e}),this.setStorage(this.cartProducts),this.renderCartList(),this.getStorage().length<1&&(this.cartList.innerHTML="")}}]),i}())("shopping_container",[{name:"新款 秋冬儿童宝宝帽子 ...",pic:"../img/waterfall/img10104.jpg",price:"￥240.0",id:"#11111"},{name:"秋冬包包 女士 新韩版 ...",pic:"../img/waterfall/img10106.jpg",price:"￥168.0",id:"#11112"},{name:"手提宝宝女 2019新款 ...",pic:"../img/waterfall/img10107.jpg",price:"￥159.0",id:"#11113"},{name:"荷兰乳牛 法国原装进口 ...",pic:"./img/waterfall/img10108.jpg",price:"￥39.0",id:"#11114"},{name:"戴尔（DELL）MS116 ...",pic:"../img/waterfall/img10109.jpg",price:"￥22.9",id:"#11115"},{name:"米家 声波电动牙刷 T300 ...",pic:"../img/waterfall/img10110.jpg",price:"￥99.0",id:"#11116"},{name:"现代翼蛇 HY-KA7键盘 ...",pic:"../img/waterfall/img10111.jpg",price:"￥17.8",id:"#11117"},{name:"协和 维生素E乳 100ml*1...",pic:"../img/waterfall/img10113.jpg",price:"￥15.8",id:"#11118"},{name:"费加罗 糖果巧克力 ...",pic:"../img/waterfall/img10114.jpg",price:"￥139.0",id:"#11119"},{name:"俄罗斯进口 巧克力夹心糖...",pic:"../img/waterfall/img10115.jpg",price:"￥21.8",id:"#11120"}]).init();