<template>
	<div class="login">
		<span><img src="../../assets/images/login.png"></span>
		<form action="##">
			 <div class="form-input">
			 	<span class="icon-user"></span><input id="user" minlength="6" maxlength="30" type="text" placeholder="使用邮箱或手机号登录" @blur="checkUsers">
			 </div>
			 <p class="checkuser">{{checkUser}}</p>
			 <div class="form-input" style="margin-top:0.72rem;">
			 	<span class="icon-lock-rounded"></span><input id="password" minlength="6" maxlength="20" type="password" placeholder="请输入密码" @blur="checkPasswd()">
			 </div>
			 <p class="isPasswd">{{isPasswd}}</p>
			 <div class="footer">
			 	<button type="button" id="submit"  class="submit" @click="login()">登录</button>
			 </div>
		</form>
		<div class="error" style="display:none;">
			<div class="tipsBox">
				<p>用户名或密码不正确</p>
				<p class="sure" @click="hidden()">确定</p>
			</div>
		</div>
	</div>
</template>
<script>
	import router from '../../router'
	export default{
		name:'login',
		data(){
			return{
				checkUser:"",
				isPasswd:""
			}
		},
		methods:{
			login:function(){
				router.push('/home')
			},
			hidden:function(){
				$('.error').hide();
			},
			checkUsers:function(){
				var user = $('#user').val();
				var reg= /(^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$)|(^1[3|4|5|8]\d{9}$)/;
				if(!reg.test(user)){
					$('.checkuser').show();
					this.checkUser = "无效的手机号或邮箱";
				}else{
					$('.checkuser').hide();
				}
				if(user == ""){
					$('.checkuser').show();
					this.checkUser = "用户名不能为空";
				}
			},
			checkPasswd:function(){
				var password =$('#password').val();
				var reg = /^(\w){6,20}$/; 
				if(!reg.exec(password)){
					$('.isPasswd').show()
					this.isPasswd="只能输入6-20个字母、数字、下划线"
				}else{
					$('.isPasswd').hide()
				}
				if(password == ""){
					$('.isPasswd').show();
					this.isPasswd="密码不能为空";
				}
			}
		}

	}
</script>
<style lang="less" scoped>
		.login{
			height:100%;
			width:100%;
			border:1px solid #fff;
			background-color:#fff;
			img{
				width:2.8rem;
				height:auto;
				display:block;
				margin:1.4rem auto;
			}
			form{
				p{
					width:6.6rem;
					margin:0.2rem auto;
					color:red;
					display:none;
				}
				.form-input{
					width:6.6rem;
					height:0.9rem;
					display:block;
					margin:0px auto;
					font-size:0.32rem;
					color:#666;
					border:1px solid  #C8C8C8;
					input{
						margin-top:0.2rem;
						border:0;
						height:0.5rem;
						line-height:0.5rem;
						outline: none;
						font-size:0.32rem;
					}
					input::-webkit-input-placeholder {
						color: #C8C8C8;
				        font-size: 0.32rem;
			    	}
				}
				.footer{
					width:100%;
					margin-top:0.72rem;
					.submit{
						width:6.6rem;
						height:0.9rem;
						background-color:#F3B700;
						color:#000;
						cursor: pointer;
						border:none;
						display:block;
						margin:0 auto;
						border-radius:5px;
						font-size:0.32rem;
					}
				}
			}
			.error{
				width:100%;
				height:100%;
				background:rgba(0, 0, 0, 0.3);
				position:absolute;
				z-index:9999;
				top:0;
				left:0;
				right:0;
				bottom:0;
				.tipsBox{
					width:5.4rem;
					height:2.08rem;
					margin:0 auto;
					background:#fff;
					border-radius:0.5rem;
					position:relative;
					top:50%;
					margin-top:-1.04rem;
					p{
						font-size:0.36rem;
						text-align:center;
						padding-top:0.4rem;
					}
					.sure{
						color:#0076FF;
						position:absolute;
						bottom:0.26rem;
						left:50%;
						margin-left:-0.36rem;
					}

				} 
			}
		}
</style>