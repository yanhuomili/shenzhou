<template>
  <div class="top">
		<nav class="navbar navbar-default navbar-fixed-top topNav">
			<div class="container">
				<div class="navbar-header">
					<a href="###" class="navbar-brand logo"><img src="../assets/img/logo-about.png"/></a>
					<button id="toggle-btn" @click="showcollapse" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div	 class="collapse navbar-collapse" id="navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
								
								<li @click="clickTap" :class="{'active':istrue}">
									<router-link to='./shouye'>首页</router-link>
									<!--<a href="###">首页</a>-->
								</li>
								<li @click="clickTap" class="introduce">
									<router-link class="introduce-a" to='./introduce'>云科易服简介</router-link>
								</li>
								<li @click="clickTap" class="product">
									<router-link class="product-a" to='./product'>产品与解决方案</router-link>
								</li>
								<li @click="clickTap">
									<router-link to='./apply'>申请试用</router-link>
								</li>
								<li @click="clickTap">
									<router-link to='./talking'>论坛</router-link>
								</li>
								<li @click="clickTap">
									<router-link to='./partner'>合作伙伴</router-link>
								</li>
								<li @click="clickTap">
									<router-link to='./about'>关于我们</router-link>
								</li>
								<li @click="clickTap"><router-link to='./login'>登录</router-link></li>
						</ul>
				</div>	
				
			</div>
		</nav>
		<div class="wrap">
			<!--<router-view></router-view>-->
		</div>
		
			
  </div>
</template>

<script>
	
		
		
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      istrue:true,
      isshow:true
    }
  },
  mounted(){
  	//		var ww=$('body').get(0).offsetWidth;
		var w=document.documentElement.clientWidth;
		console.log(w);
		change(w);
		$(window).resize(function(){
			var w=document.documentElement.clientWidth;
			change(w);
		})
		function change(w){
			if(w>=767&&w<992){
				$('.introduce .introduce-a').text('简介');
				$('.product .product-a').text('产品');
				console.log(w);
			}else{
				$('.introduce .introduce-a').text('云科易服简介');
				$('.product .product-a').text('产品与解决方案');
				console.log(w);
			}
		}
//		点击导航
			$(".nav > li > a").click(function(){  
				
					$('#toggle-btn').addClass("collapsed").attr("aria-expanded",false);  
					$("#navbar-collapse").removeClass("in").attr("aria-expanded",false);  
			});  
		
	
  },
  methods:{
  	tap:function(){
  		$('.list li a').css({'color':'red'});
  		console.log($('.list').html());
  	},
  	clickTap:function(){
  		console.log(event.target);
  		var ul=$(event.target).parents('ul').find('li').removeClass('active');
  		$(event.target).parent().addClass('active');
  	},
  	showcollapse:function(){
//		$('#navbar-collapse').slideToggle();
//		this.isshow=!this.isshow;
  	}
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.wrap{
		margin-top: 80px;
		text-align: center;
	}
		.navbar-aa{
			background-color: #ccc;
  		border-color: cornflowerblue;
  		.navbar-brand{
  			color: red;
  		}
  		.navbar-brand:hover,
  		.navbar-brand:focus{
  			color: pink;
  			background-color: transparent;
  		}
  		.navbar-text{
  			color: blue;
  		}
		}

		
		.logo{
			padding: 0;
			img{
				  max-width: 180px;
    			max-height: 50px;
			}
		}
		.list{
			li{
				background: #ccc;
				a{
					color: blue;
				}
			}
			height: 50px;
			display: flex;
			justify-content: space-between;
		}
		@media only screen and (min-width: 768px) and (max-width: 991px) {
			.navbar .introduce,.navbar .product{
					a{
						/*color: red;*/
					}
				}
		}
</style>
