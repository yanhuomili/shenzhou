<template>
  <div class="talking">
  		<div class="product-pic">
  			<img src="../assets/img/banner.png"/>
  		</div>
			<div class="talk-wrap">
					<div class="container">
							<h2 class="text-center">迎中秋贺国庆，云服务限时5折优惠</h2>
							<div class="talk-detail">
									<div class=" title">
											<p><span>发布时间：</span><i>2017-12-7</i></p>
											<p><span>来源：</span><i>小鸟云安全组</i></p>
									</div>
									<div class="talk-text">
											从前的自己，总是想拥有的更多，想得到的就拼命的去抓住不放，得不到的也不会轻易放下，随着年龄的增长，越来越懂得放手。
										慢慢的才知道，有些东西你越抓得紧流失的越快，不如顺其自然，要学会睿智的去生活，人生的四季，怎能永远都是春天，一季有一季的味道，
										都是岁月恩赐与馈赠，学会与时光相互包容，接纳，删繁就简的奔着自己的喜好而去，说明内心已变得成熟了。
										从前的自己，总向往鲜衣怒马，现在才懂得热闹之外才是生活，无论何时，都要在心中为安静留一个位置。
										开始学会放缓脚步，让慢下来的生活不急不缓，一杯暖茶，一本闲书，也能打发半天时光。开始学会思考，
										孤独是生命的常态，静水深流方是人生，从而审视自己，让内在变得温润，让灵魂变得丰盈，保持着内心的清宁与干净，
										不卑不亢，温暖明媚，这世间的美好，来自你对生活的温柔以待。
									</div>
							</div>
							
							<div class="change-page">
									<div class="prev">
											上一篇：<span>云科易服面向客户提供更优质的服务</span>
									</div>
									<div class="prev">
											下一篇：<span>云科易服面向客户提供更优质的服务</span>
									</div>
							</div>
					</div>
			</div>
	
			
  </div>
</template>

<script>
export default {
  name: 'talking',
  data () {
    return {
      msg: '论坛页面'
    }
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
		.product-pic{
				img{
						max-width: 100%;
				}
		}
		.talk-wrap{
			margin-top: 20px;
				h2{
					line-height: 2;
					margin-bottom: 20px;
				}
				
				.talk-detail{
						border-top: 1px solid #ccc;
						border-bottom: 1px solid #ccc;
						padding: 40px 0;
						.talk-text{
								line-height: 2;
								letter-spacing: 2px;
								margin: 15px 0;
						}
				}
				
				.title{
					display: flex;
					justify-content: center;
					align-items: center;
					p{
						margin: 10px 20px;
					}
					p:nth-child(2){
						color: #FE0000;
					}
						i{
								font-style: normal;
						}
				}
				.change-page{
						padding: 10px 0;
						div{
								margin: 30px 0;
								color: #333;
								span{
										color: #999;
								}
						}
				}
		}
		
		@media only screen and (max-width: 768px) {
				.title{
						flex-direction: column;
				}
		}
</style>
