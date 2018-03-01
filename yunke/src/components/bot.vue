<template>
  <div class="bot hidden-xs">
  	<div class="bot">
  		<div class="container">
  			<div class="row">
  				<div class="col-md-2 col-sm-2">
  					<h3>常见问题</h3>
  					<ul>
  						<li>试用指引</li>
  						<li>备案帮助</li>
  						<li>服务协议</li>
  					</ul>
  				</div>
  				<div class="col-md-2 col-sm-2">
  					<h3>产品帮助</h3>
  					<ul>
  						<li>充值支付问题</li>
  						<li>合同开发问题</li>
  						<li>产品问题反馈</li>
  						<li>管理功能问题</li>
  						<li>其他问题</li>
  					</ul>
  				</div>
  				<div class="col-md-2 col-sm-2">
  					<h3>快速入口</h3>
  					<ul>
  						<li>自助管理平台</li>
  						<li>网站备案中心</li>
  						<li>易服真伪查询</li>
  					</ul>
  				</div>
  				<div class="col-md-2 col-sm-2">
  					<h3>活动专区</h3>
  					<ul>
  						<li>快运VPS升级</li>
  						<li>新品上线</li>
  					</ul>
  				</div>
  				<div class="col-md-2 col-sm-2">
  					<img src="../assets/img/logo.png"/>
  				</div>
  			</div>
  		</div>
  	</div>

	
			
  </div>
</template>

<script>
export default {
  name: 'bot',
  data () {
    return {
      msg: '底部组件'
    }
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
		.bot{
			padding: 20px 0;
			text-align: center;
			h3{
				font-size: 22px;
				font-weight: normal;
				margin-top: 0;
				margin-bottom: 30px;
			}
			ul{
				list-style: none;
				margin: 0;
				padding: 0;
				
				li{
					line-height: 2;
					color: #666;
					margin-bottom: 10px;
					cursor: pointer;
				}
			}
		}
</style>
