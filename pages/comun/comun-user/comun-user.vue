<template>
	<view>
		<uniNavBar
			left-icon="back"
			statusBar
			:border="false"
			@click-left="goBack"
			backgroundColor="#F6F6F6"
		>
		<view  class="flex align-center justify-center w-100">
			<text class="">Username</text>
		</view>
		</uniNavBar>
		
		<view class="flex justify-start align-center p-3">
			<image class="rounded-circle m-2" style="width: 100rpx;height: 100rpx;"  src="/static/avatar2.jpg"  mode="aspectFill" ></image>
			<view class="flex  flex-direction justify-start" style="width: 65%;">
				<text class="font-md">Naraku</text>
				<view class="flex">
					<view class="text-gray user-inner font-sm" @click="tofollow">
						<text class="mr-1">关注</text> 
						<text style="color: #999999;">24</text> 
					</view>
					<view class="text-gray user-inner font-sm" @click="tofollow">
						<text class="mr-1">粉丝</text>
						<text style="color: #999999;">66</text> 
					</view>
					<view class="text-gray user-inner font-sm">
						<text class="mr-1">动态</text> 
						<text style="color: #999999;">4</text>  
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white comun-wapper pt-2" >
				<block v-for="(item,index) in list" :key="index">
					<narakuComunItem
						 @follow="follow"
						:item="item" 
						:index="index"
						@doSupport="doSupport"
						:isfollow="true"
						:ismy="true"
						:ishim="false"
					>
					
					</narakuComunItem>
					<divider></divider>
				</block>
		</view>
		
			
	</view>
	
</template>

<script>
	const demo = [{
		username:"昵称",
		userpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
		newstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
		support:{
			type:"support",
			support_count:3,
			unsupport_count:1
		},
		
		comment_count:2,
		share_num:2
	},
	{
		username:"昵称",
		userpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
		newstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
		support:{
			type:"support",
			support_count:3,
			unsupport_count:1
		},
		comment_count:2,
		share_num:2
	},
	{
		username:"昵称",
		userpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
		newstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"测试文章标题",
		titlepic:"",
		support:{
			type:"support",
			support_count:1,
			unsupport_count:2
		},
		comment_count:0,
		share_num:2
	}];
	import narakuComunItem from "@/components/naraku-ui/naraku-comun-item.vue"
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		data() {
			return {
				scrollH:250,
				list:[],
				ismy:true
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			})
			this.list = demo
		},
		components:{
			uniNavBar,
			narakuComunItem
		},
		methods: {
			goBack(){
				uni.navigateBack({
					data:1
				})
			},
			doSupport(e){
				// 拿到当前对象
				let item = this.list[e.index]
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (item.support.type === '') {
					item.support[e.type+'_count']++
				} else if (item.support.type ==='support' && e.type === 'unsupport') {
					// 顶 - 1
					item.support.support_count--;
					// 踩 + 1
					item.support.unsupport_count++;
				} else if(item.support.type ==='unsupport' && e.type === 'support'){ 					// 之前踩了
					// 顶 + 1
					item.support.support_count++;
					// 踩 - 1
					item.support.unsupport_count--;
				}
				item.support.type = e.type
				uni.showToast({ title: msg + '成功' });
			},
		}
	}
</script>

<style>
.user-inner{
	flex: 1;
	text-align: left;
}
.comun-wapper{
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
</style>
