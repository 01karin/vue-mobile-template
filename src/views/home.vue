<template>
	<div class="index">
		<header>
			首页
		</header>
		<div class="main">
			<div class="content">
				<component :is="currentView"></component>
			</div>
			<div class="footer">
				<a :class="{active:mainMsgIsActive}" @click="pageChange('mainMsg')">
					<span class="icon-home"></span>
					<span>首页</span>
				</a>
				<a :class="{active:orderIsActive}" @click="pageChange('order')">
					<span class="icon-mail-envelope-open"></span>
					<span>订单</span>
				</a>
				<a :class="{active:goodsIsActive}" @click="pageChange('goods')">
					<span class="icon-file"></span>
					<span>货单</span>
				</a>
				<a :class="{active:myIsActive}" @click="pageChange('my')">
					<span class="icon-user"></span>
					<span>我的</span>
				</a>
			</div>
		</div>
	</div>

</template>
<script>
	import mainMsg from './main/index'
	import order from './main/order'
	import goods from './main/goods'
	import my from './main/my'
	export default {
		name:'index',
		data () {
			return {
				currentView:mainMsg,
	            mainMsgIsActive:true,
	            goodsIsActive:false,
	            orderIsActive:false,
	            myIsActive:false
			}
		},
		components:{
			//'v-menue':require('../components/menuebar/leftbar'),
			mainMsg,goods,order,my
		},
		computed: {
			count () {
				return this.$store.state.count
			}
		},
		methods:{
			pageChange:function(url){
	        this.currentView=url;
	        this.goodsIsActive=false;
	        this.mainMsgIsActive=false;
	        this.orderIsActive=false;
	        this.myIsActive=false;
	        switch(url){
	          case "goods":this.goodsIsActive=true;break;
	          case "mainMsg":this.mainMsgIsActive=true;break;
	          case "order":this.orderIsActive=true;break;
	          case "my":this.myIsActive=true;break;
	        }
	      },
	      add :function(){
	      	var v = document.getElementById('num')
	      	if(v.innerHTML < 15){
	      		this.$store.state.count++
	      	}else{
	      		return 15
	      	}
	      }
		}
	}
</script>
<style lang="less" scoped>
	a:hover{cursor: pointer;}
	.active{color:#F3B700!important;}
	.index{
		width:100%;
		height:100%;
		header{
			height:50px;
			line-height:50px;
			background-color:#333;
			color:#fff;
			font-size:0.32rem;
			text-align:center;
		}
		.main{
			width:100%;
			.footer{
				position:fixed;
				left:0;
				bottom:0;
				font-size:0;
				width:100%;
				border-top:1px solid #dedede;
				a{
					display:inline-block;
					width:25%;
					font-size:0.28rem;
					text-align:center;
					color:#9A9A9A;
					padding:0.3rem 0;
					text-decoration: none;
					text-align:center;
					span{
						display:block;
					}
					span:nth-child(1){
						margin-bottom:0.1rem;
						font-size:0.32rem;
					}
				}
			}
		}	
	}
</style>