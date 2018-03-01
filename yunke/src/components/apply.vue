<template>
  <div class="apply">
  		<div class="product-pic">
  			<img src="../assets/img/banner.png"/>
  		</div>
			<div class="apply-wrap">
					<div class="container">
							<h2 class="text-center">申请试用</h2>
							<form class="form-group" action="###" method="#">
										<input class="form-control btn-block" type="text" placeholder="First Name" />
										<input class="form-control btn-block" type="text" placeholder="Last Name" />
										<input class="form-control btn-block" type="text" placeholder="Phone+1XX-XXXX-XXXX" />
										<input class="form-control btn-block" type="text" placeholder="E-mail" />
										<input class="form-control btn-block" type="text" placeholder="Company" />
										<textarea name="" placeholder="What's on your mind" rows="" cols=""></textarea>
											
									<input class="btn btn-block btn-danger" type="submit" value="提交"/>
							</form>
					</div>
			</div>
	
			
  </div>
</template>

<script>
export default {
  name: 'apply',
  data () {
    return {
      msg: '申请试用页面'
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
		.form-group{
				padding: 30px 100px;
				input{
						height: 50px;
						margin-bottom: 15px;
						font-size: 16px;
						
				}
				textarea{
						width: 100%;
						resize: none;
						height: 200px;
						padding: 5px 10px;
				}
				.btn{
						width: 80%;
						margin: 30px auto 0;
				}
		}
		
		@media only screen and (max-width: 640px) {
				.form-group{
					padding: 15px 0;
				}
		}
</style>
