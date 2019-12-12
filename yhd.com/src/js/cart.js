(function(){
	var products = [
		{
			name:"新款 秋冬儿童宝宝帽子 ...",
			pic:"./img/waterfall/img10104.jpg",
			price:"￥240.0",
			id:"#11111"
		},
		{
			name:"秋冬包包 女士 新韩版 ...",
			pic:"./img/waterfall/img10106.jpg",
			price:"￥168.0",
			id:"#11112"
		},
		{
			name:"手提宝宝女 2019新款 ...",
			pic:"./img/waterfall/img10107.jpg",
			price:"￥159.0",
			id:"#11113"
		},
		{
			name:"荷兰乳牛 法国原装进口 ...",
			pic:"./img/waterfall/img10108.jpg",
			price:"￥39.0",
			id:"#11114"
		},
		{
			name:"戴尔（DELL）MS116 ...",
			pic:"./img/waterfall/img10109.jpg",
			price:"￥22.9",
			id:"#11115"
		},
		{
			name:"米家 声波电动牙刷 T300 ...",
			pic:"./img/waterfall/img10110.jpg",
			price:"￥99.0",
			id:"#11116"
		},
		{
			name:"现代翼蛇 HY-KA7键盘 ...",
			pic:"./img/waterfall/img10111.jpg",
			price:"￥17.8",
			id:"#11117"
		},
		{
			name:"协和 维生素E乳 100ml*1...",
			pic:"./img/waterfall/img10113.jpg",
			price:"￥15.8",
			id:"#11118"
		},
		{
			name:"费加罗 糖果巧克力 ...",
			pic:"./img/waterfall/img10114.jpg",
			price:"￥139.0",
			id:"#11119"
		},
		{
			name:"俄罗斯进口 巧克力夹心糖...",
			pic:"./img/waterfall/img10115.jpg",
			price:"￥21.8",
			id:"#11120"
		}
	]
	
	class ShoppingCart{
		constructor(containerId,products) {
			this.container = document.getElementById(containerId);
 			this.shopList = document.getElementsByClassName('product')[0];
			this.cartList = document.getElementsByClassName('cart')[0];
			this.products = products;
			this.cartProducts = this.getStorage()||[];
			this.container.appendChild(this.shopList);
			this.container.appendChild(this.cartList);
		}
		setStorage(json){
			localStorage.setItem("cart",JSON.stringify(json));
		}
		getStorage(){
			return JSON.parse(localStorage.getItem("cart"))||[];
		}
		init(){
			this.initShopList();
			if(this.getStorage().length>0){
				this.renderCartList();
			}
		}
		
		initShopList(){
			var str = `<h2>请选择您喜欢的商品</h2>`;
			str +='<div class="shoplist">';
			this.products.forEach((value)=>{
				str += `<figure>
					<div><img src="${value.pic}"><span class="pro-id">${value.id}</span></div>
					<figcaption>
						<h3>${value.price}</h3>
						<p>${value.name}</p>								
						<a href="javascript:;" class="addcartBtn">加入购物车</a>
					</figcaption>
				</figure>`;
			})
			str += '</div>';
			this.shopList.innerHTML = str;
			this.addCartListEvent()
		}
		
		addCartListEvent(){
			var that = this;
			var addCartBtnArr = this.container.querySelectorAll('.addcartBtn');
			addCartBtnArr.forEach((addCartBtn)=>{
				addCartBtn.onclick = function(){
					var figure = this.parentNode.parentNode;
					var currentProduct = {
						id:figure.children[0].children[1].innerHTML,
						name:figure.children[1].children[1].innerHTML,
						pic:figure.children[0].children[0].src,
						price:figure.children[1].children[0].innerHTML
					}
					that.addToCartProducts(currentProduct);
					that.renderCartList();
				}
			})
		}
		
		addToCartProducts(currentProduct){
			this.cartProducts = this.getStorage();
			for(var i=0;i<this.cartProducts.length;i++){
				if(this.cartProducts[i].id==currentProduct.id){
					this.cartProducts[i].num++;
					this.setStorage(this.cartProducts);
					return;
				}
			}
			currentProduct.num = 1;
			this.cartProducts.push(currentProduct);
			this.setStorage(this.cartProducts);
		}
		renderCartList(){
			var str = `<div>
							<span>商品ID</span>
							<span>商品信息</span>
							<span>单价（元）</span>
							<span>数量</span>
							<span>操作</span>
						</div>`;
			str +='<table class="cart_container"><tbody>';
			this.getStorage().forEach((product)=>{
				str += `<tr>
					<td>${product.id}</td>
					<td>
						<div><img src="${product.pic}"></div>
						<span>${product.name}</span>
					</td>
					<td>${product.price}</td>
					<td>
						<div class="change">
							<span class="jian">-</span>
							<span>${product.num}</span>
							<span class="jia">+</span>
						</div>
					</td>
					<td><a href="javascript:;" class="del">删除</a></td>
				</tr>`
			});
			str +='</tbody></table>';
			this.cartList.innerHTML = str;
			this.deleteProductEvent();
			this.changeNumEvent();
		}
		
		changeNumEvent(){
			var that = this;
			var changeNumTdArr = this.container.querySelectorAll('.change');
			changeNumTdArr.forEach((changeNumTd)=>{
				changeNumTd.onclick = function(e){
					var target = e.target;
					var id = this.parentNode.parentNode.children[0].innerHTML;
					if(e.target.className=='jian'){
						that.jianNum(id);
					}
					if(e.target.className=='jia'){
						that.jiaNum(id);
						that.renderCartList();
					}
				}
			})
		}
		jianNum(id){
			var arr = this.getStorage();
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==id){
					arr[i].num--;
					this.setStorage(arr);
					this.renderCartList();
					if(arr[i].num<=0){
						this.deleteFromCartProduct(id);
						return;
					}
					return;
				}
			}
		}
		jiaNum(id){
			var arr = this.getStorage();
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==id){
					arr[i].num++;
					this.setStorage(arr);
					return;
				}
			}
		}
		deleteProductEvent(){
			var that = this;
			var delBtnArr = this.container.querySelectorAll('.del');
			delBtnArr.forEach((delBtn)=>{
				delBtn.onclick = function(){
					var id = this.parentNode.parentNode.children[0].innerHTML;
					that.deleteFromCartProduct(id);
				}
			})
		}
		deleteFromCartProduct(id){
			this.cartProducts = this.getStorage();
			this.cartProducts = this.cartProducts.filter((product)=>{
				if(product.id==id){
					return false;
				}else{
					return true;
				}
			});
			this.setStorage(this.cartProducts);
			this.renderCartList();
			if(this.getStorage().length<1){
				this.cartList.innerHTML='';
			}
		}
	}
	var car = new ShoppingCart("shopping_container",products)
	car.init()	
})()