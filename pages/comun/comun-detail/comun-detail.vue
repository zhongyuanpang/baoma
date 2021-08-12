<template>
	<view class="bg-white">
		<uni-nav-bar
			left-icon="back"
			statusBar
			:border="false"
			@click-left="goBack"
			
		>
		<view  class="flex align-center justify-center w-100">
			<text class="">Username</text>
		</view>
		</uni-nav-bar>
		
		
		<!-- 自定义列表项 -->
		<v-tabs
			v-model="activeTab"
			:scroll="false"
			:tabs="tabs"
			lineColor="#333333"
			lineScale="0.7"
			activeColor="#333333"
			fontSize="30rpx"
		>
		</v-tabs>
		<swiper :current="activeTab" :duration="150" :style="'height:'+scrollH+'px;'"  @change="onChangeTab" >
			<!-- 关注列表 -->
			<swiper-item>
				<scroll-view scroll-y="true"  :style="'height:'+scrollH+'px;'">
					<block v-for="(item,index) in list" :key="index">
						<commun-follow-item
							:item="item"
							:index="index"
						>
						</commun-follow-item>
						<view style="height: 1rpx; background-color: #F5F5F5;" class="w-100"></view>
					</block>
				</scroll-view>
			</swiper-item>
			
			<!-- 粉丝列表 -->
			<swiper-item >
				<scroll-view scroll-y="true"  :style="'height:'+scrollH+'px;'">
					<commun-follow-item></commun-follow-item>	
					<view style="height: 1rpx; background-color: #F5F5F5;" class="w-100"></view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	// 0 关注 1未关注  2互关
	const demo=[
		{
			avatar:"/static/avatar.jpg",
			nickname:'Naraku',
			isfollowStatus:1,
		},
		{
			avatar:"/static/avatar.jpg",
			nickname:'Sakula',
			isfollowStatus:0,
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'Faisyle',
			isfollowStatus:0,
		},
		{
			avatar:"/static/avatar.jpg",
			nickname:'FuckBich',
			isfollowStatus:1,
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'LideGrou',
			isfollowStatus:2,
		},
	]
	import communFollowItem from '@/components/naraku-ui/comun-follow-item.vue'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				activeTab: 0,
				tabs:["关注","粉丝"],
				scrollH:250,
				list:[]
			}
		},
		components:{
			uniNavBar,
			communFollowItem
		},
		onLoad(){
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			}),
			this.list = demo
		},
	
		methods: {
			onChangeTab(e){
				this.activeTab = e.detail.current
			},
			goBack(){
				uni.navigateBack({ delta: 1 });
			},
		}
	}
</script>

<style>

</style>
