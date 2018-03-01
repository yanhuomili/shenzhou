<template>
  <div class="skin">
  		<!--<button class="btn btn-success" href="#myModal" data-toggle="modal" data-target="">打开模态框</button>-->
				<!-- 模态框（Modal） -->
					<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
										&times;
									</button>
								</div>
								<div class="modal-body">
									<div class="swiper-container" id="skin">
					              <div class="swiper-wrapper">
						              	<div v-for="item in sometext" class="swiper-slide">
						              			<img :src="item.src"/>
						              			<p>{{item.text}}</p>
						              	</div>
						              	<!--<div class="swiper-slide"><img src="../assets/img/i-pic2.png"/></div>
						              	<div class="swiper-slide"><img src="../assets/img/i-pic3.png"/></div>
						              	<div class="swiper-slide"><img src="../assets/img/i-pic4.png"/></div>
						              	<div class="swiper-slide"><img src="../assets/img/i-pic5.png"/></div>
						              	<div class="swiper-slide"><img src="../assets/img/i-pic6.png"/></div>
						              	<div class="swiper-slide"><img src="../assets/img/i-pic7.png"/></div>
						              	<div class="swiper-slide"><img src="../assets/img/i-pic8.png"/></div>-->
					              </div>
					              <div class="swiper-pagination"></div>
					        </div>
								</div>
							</div><!-- /.modal-content -->
						</div><!-- /.modal -->
					</div>
  </div>
</template>

<script>
export default {
  name: 'skin',
  props:['sometext'],//父组件传来的参数
  data () {
    return {
      msg: '图片预览'
    }
  },
  mounted(){
  	console.log(this.sometext)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
		.modal{
				.swiper-slide{
					position:relative;
						img{
								width: 100%;
						}
						p{
							position: absolute;
							bottom: 30px;
							left: 0;
							display: block;
							width: 100%;
							text-align: center;
							color: deepskyblue;
							font-size: 20px;
						}
				}
				.close{
					margin-top: -10px;
				}
		} 
</style>
