<template>
	<view>
		<!-- 登录注册 -->
		<view class="auth-wapper" v-if="!islogin" >
			<!-- 动态 背景色  -->
			<view class="auth-inner" @tap="showModal" data-target="Modal">
				<view class="auth-blok">
					<view>
						<text class="auth-title">未登录/注册</text>
						<text class="auth-subtitle">点击头像可登录/注册</text>
					</view>
				</view>
				<view class="auth-avatar">
					<view class="cu-avatar xl round margin-left" :style="{backgroundImage:'url('+ avatarUrl +')'}">
					</view>
				</view>
			</view>
		</view>
		<view class="auth-wapper" v-else data-target="Modal">
			<!-- 动态 背景色  -->
			<view class="auth-inner" @click="info">
				
				<view class="auth-avatar">
					<view class="cu-avatar xl round margin-left" :style="{backgroundImage:'url('+ userInfo.avatarUrl +')'}">
					</view>
				</view>
				<view style="width: 40rpx;"></view>
				<view class="auth-blok">
					<view>
						<text class="auth-title">{{ userInfo.nickName }}</text>
						<!-- <text class="auth-subtitle cuIcon-edit"> 我的在线简历</text> -->
					</view>
					
				</view>
		

			</view>
		</view>
		<!-- 模态登录框 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''" v-show="!islogin">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">登录/注册</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-black"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-cyan lg" @click="getUserInfo">
							<text class="cuIcon-weixin lg "></text>
							微信账号快速登录
						</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 完善简历 -->
		<view class="perfect_resume">
			<view class="perfect_text">
				<view>完善简历</view>
				<view>完善简历可提高36%录取率</view>
			</view>
			<view class="perfect_btn">
				<button @tap="toResume">去完善</button>
			</view>
		</view>
		<!-- <view class="auth-layout shadow shadow-lg bg-white">
			<view class="grid auth-content col-4">
				<view class="block-item">
					<view class="">
						<image src="/static/images/auth/from.png" width="100%" />
					</view>
					<text class="block-title">
						求职简历
					</text>
				</view>

				<view class="block-item">
					<view class="">
						<image src="/static/images/auth/frombase2.png" width="100%" />
					</view>
					<text class="block-title">
						职位预定
					</text>
				</view>

				<view class="block-item">
					<view class="">
						<image src="/static/images/auth/spend.png" width="100%" />
					</view>
					<text class="block-title">
						求职进度
					</text>
				</view>

				<view class="block-item">
					<view class="">
						<image src="/static/images/auth/frombase.png" width="100%" />
					</view>
					<text class="block-title">
						求职简历
					</text>
				</view>
			</view>
		</view> -->

		<!-- 报名list -->
		<view class="enroll_list" @tap="toDeliveryList">
			<view>
				<view><text v-show="enroll_list!=null">{{ enroll_list.count }}</text> 0</view>
				<view>全部</view>
			</view>
			<view>
				<view><text v-show="enroll_list!=null"></text> 0</view>
				<view>已报名</view>
			</view>
			<view>
				<view><text v-show="enroll_list!=null">{{ enroll_list.status.count }}</text> 0</view>
				<view>进行中</view>
			</view>
			<view>
				<view><text v-show="enroll_list!=null"></text> 0</view>
				<view>已完成</view>
			</view>
		</view>
		<!-- 列表子项 -->
		<view class="cu-list menu radius">

			<view class="cu-item arrow" @tap="toCollect">
				<view class="content">
					<text class="cuIcon-like text-black"></text>
					<text class="text-black">我的收藏</text>
				</view>
				<view>5</view>
			</view>
			
			<view class="cu-item arrow" @tap="toFeedback">
				<view class="content">
					<text class="cuIcon-emoji text-black"></text>
					<text class="text-black">意见反馈</text>
				</view>
			</view>
			
			<view class="cu-item arrow" @tap="toSetting">
				<view class="content">
					<text class="cuIcon-settings text-black"></text>
					<text class="text-black">用户设置</text>
				</view>
			</view>
			
			<view class="cu-item arrow" @click="logout">
				<view class="content">
					<text class="cuIcon-service text-black"></text>
					<text class="text-black">退出账号</text>
				</view>
			</view>


			<view class="cu-item arrow " @tap="toSetInfo">
				<view class="content">
					<text class="cuIcon-edit text-black"></text>
					<text class="text-black">修改个人信息</text>
				</view>
			</view>


		</view>

		<!-- 退出登录 -->
		<!-- <view class="padding flex flex-direction" >
			<button class="cu-btn bg-green shadow shadow-lg lg" @click="logout">退出登录</button>
			<button  open-type="share" @click="share">分享</button>
		</view> -->
	</view>
	</view>
</template>

<script>
	import {login,home} from '../../../common/api.js'
	import {decodeToken} from '@/common/jsrsasign.js'
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: null,
				userInfo: null,
				avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
				islogin: false,
				
				// 用户id
				uId: '',
				
				// 报名列表
				enroll_list: []
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			},
			// 设置用户信息
			toSetInfo(e) {
				uni.navigateTo({
					url: '/pages/navigateTo/me/setUserInfo/setUserInfo',
				})
			},
			// 我的收藏
			toCollect(e) {
				uni.navigateTo({
					url: '/pages/navigateTo/me/collection/collection',
				})
			},
			info(){
				uni.navigateTo({
					url:'../../navigateTo/me/resume/resume'
				})
			},
			// 完善简历
			toResume(){
				uni.navigateTo({
					url:'../../navigateTo/me/resume/resume'
				})
			},
			//意见反馈
			toFeedback(){
				uni.navigateTo({
					url:'../../navigateTo/me/feedback/feedback'
				})
			},
			// 设置
			toSetting(){
				uni.navigateTo({
					url:'../../navigateTo/me/setting/setting'
				})
			},
			//报名单列表
			toDeliveryList(){
				uni.navigateTo({
					url:'../../navigateTo/me/deliveryList/deliveryList'
				})
			},
			// 用户登录
			getUserInfo() {
				let that = this
				uni.getUserProfile({
					desc: 'Wexin', // 这个参数是必须的
					success: res => {
						that.userInfo = res.userInfo;
						// localStorage.setItem('userInfo',res.userInfo);
						that.islogin = true;
						// this.avatarUrl = res.userInfo.avatarUrl;
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								let code = loginRes.code;
								let userInfo = JSON.stringify(res.userInfo)
								// 登录接口
								login(code,userInfo).then((rs)=>{
									uni.setStorageSync('token', rs.data);
									let user = decodeToken(uni.getStorageSync('token'));
									that.uId = user.data._id.id;
									let user_id = user.data._id.id
								// 主页列表渲染
									home(user_id).then(res=>{
										that.enroll_list = res.data
									})
								})
							}
						});
			
			
						uni.navigateTo({
							url: "../../navigateTo/me/userInfo/userInfo"
						})
					},
					fail: () => {
						console.log("未授权");
					},
				})
			},
			// 用户退出
			logout(){
				uni.showModal({
					title: '提示',
					content: '是否退出？',
					success: (res) => {
						if (res.confirm) {
							uni.showLoading({
								
							})
							setTimeout(()=>{
								uni.hideLoading();
								uni.showToast({
									icon:'success',
									success: () => {
										this.islogin = false;
										this.hideModal();
									}
								})
							},700);
						
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 分享
			share(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 1,
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			}

		}
	}
</script>

<style>
	html{
		background: #F6F6F6;
	}
	.auth-wapper{
		padding: 20rpx 20rpx 30rpx 20rpx;
		/* background-color: #37c4bb */
	}
	.auth-wapper .auth-inner {
		display: flex;
		flex-direction: row;
		/* padding: 155rpx 18rpx 18rpx 18rpx; */
	}

	.auth-wapper .auth-inner .auth-blok {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
	}

	.auth-wapper .auth-inner .auth-blok view {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
	}

	.auth-wapper .auth-inner .auth-blok .auth-title {
		/* color: #fff; */
		font-size: 1.7em;
		letter-spacing: 3rpx;
		font-weight: bold;
	}

	.auth-wapper .auth-inner .auth-blok .auth-subtitle {
		/* color: #fff; */
		font-size: 0.8em;
		letter-spacing: 2rpx;
	}

	/* .auth-layout {
		margin: 10px 5px;
	}

	.auth-layout .auth-content {
		padding: 10px;
	}

	.auth-layout .auth-content .block-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.auth-layout .auth-content .block-item image {
		width: 35px;
		height: 35px;
	}

	.auth-layout .auth-content .block-item .block-title {
		font-size: 0.9em;
		color: black;
	}
 */
/* ******************完善简历 start **********************/
	.perfect_resume{
		margin: 20rpx;
		background-image: linear-gradient(to right,#fb576b,#ffb077);
		border-radius: 10rpx;
		display: flex;
		flex-direction: row;
		padding: 20rpx;
		align-items: center;
	}
	.perfect_text{
		flex: 1;
	}
	.perfect_text>view:nth-child(1){color: white;font-weight: bold;font-size: 1.3em;padding: 5rpx;}
	.perfect_text>view:nth-child(2){color: #ffdde1;font-size: 0.9em;}
	.perfect_btn{
		color: #FF8247;
	}
	.perfect_btn>button{color: #FF8247;}
/* ******************完善简历 end **********************/


/* ******************报名list start **********************/
	.enroll_list{
		margin: 20rpx;
		background-color: white;
		border-radius: 20rpx;
		display: flex;
		flex-direction: row;
		padding: 40rpx 20rpx;
	}
	.enroll_list>view{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* height: 60rpx; */
	}
	.enroll_list>view:nth-child(1),
	.enroll_list>view:nth-child(2),
	.enroll_list>view:nth-child(3){border-right: 1px solid #EEEEEE;}
	.enroll_list>view>view:nth-child(1){color: #252525;font-size: 1.3em;font-weight: bolder;padding: 10rpx;}
	.enroll_list>view>view:nth-child(2){color: #999999;font-size: 0.9em;}
/* ******************报名list end **********************/	
	
	
/* ******************菜单列表 start **********************/	
	.cu-list{
		margin: 20rpx;
		border-radius: 20rpx;
	}



/* ******************菜单列表 end **********************/	
	.cuIcon-weixin {
		font-size: large;
		margin: 5px;
	}
</style>
