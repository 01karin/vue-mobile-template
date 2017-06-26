<template>
	<div class="leftbar">
		<!-- <router-link to="/invioce">金融管理</router-link>
		<router-link to="/order">订单管理</router-link>
		<router-link to="/hetong">合同管理</router-link> -->
		<ul>
			<li v-for="(relation,index) in relations" :id="relation.id"  @click="a(index)"><a href="##" :class="{checked:index==nowIndex}">{{relation.text}}</a></li>
		</ul>
		<keep-alive>
			<component :is="currentView">
			</component>
		</keep-alive>
	</div>
</template>
<script>
	export default {
		name:'leftbar',
		data (){
			return {
				relations:[
				{'text':'金融管理',id:'invioce'},
				{'text':'合同管理',id:'hetong'},
				{'text':'订单管理',id:'order'}
				],
				nowIndex:-1,
				currentView:'inviove'
			}
		},
		components:{
			'hetong':require('../../views/menue/hetong'),
			'invioce':require('../../views/menue/invoice'),
			'order':require('../../views/menue/order')
		},
		methods:{
			a:function(index){
				this.nowIndex=index;
			}
		}
	}
</script>
<style>
	*{margin:0;padding:0;}
	a{
		text-decoration: none;
		color:#000;
		text-align:center;
		display:block;
		padding:5px 25px;
		border-bottom:1px solid green;
	}
	ul li{
		list-style: none;
	}
	.checked{
	    background:#38ADFF !important;
	    color:#fff!important;
	}
	.leftbar{
		position:absolute;
		left:0;
		top:50px;
	}
</style>