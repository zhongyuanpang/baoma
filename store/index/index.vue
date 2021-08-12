<template>
	
	<view class="bg-white" style="height: 100vh;">
		<view class="flex align-center justify-between p-3 border-bottom ">
			<image src="../../../static/avatar2.jpg" mode="aspectFill"  style="width: 180rpx;height: 150rpx;"
			class="rounded-circle"></image>
			<view class=" w-100  flex flex-direction">
					<view class="grid auth-content padding-sm col-3">
						<view class="flex justify-center flex-direction align-center">
							<text class="font-lg mr-1 font-weight-bold">
								1
							</text>
							<text class="font text-muted">
								获赞
							</text>
						</view>
						<view class="flex justify-center flex-direction align-center">
							<text class="font-lg  mr-1  font-weight-bold">
								1
							</text>
							<text class="font text-muted">
								关注
							</text>
						</view>
						<view class="flex justify-center flex-direction align-center">
							<text class="font-lg  mr-1  font-weight-bold">
								1
							</text>
							<text class="font text-muted">
								粉丝
							</text>
						</view>
					</view>
					
					<view class="flex justify-start align-start">
						<button size="mini" class="bg-main text-white" style="width: 85%;">关注</button>
					</view>
			</view>
		</view>
	 
		
		<!-- tab -->
		<view class="flex align-center" style="height: 100rpx;">
			<view class="flex-1 flex align-center justify-center"
			v-for="(item,index) in tabBars" :key="index"
			:class="index === tabIndex ? 'font-lg font-weight-bold text-main':'font-md'"
			@click="changeTab(index)">
			{{item.name}}</view>
		</view>
		<template v-if=""></template>
		<template></template>
		<template></template>
	</view>
	


</template>

<script>
	const demo = [{
		username:"昵称",
		userpic:"/static/default.jpg",
		newstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"/static/demo/datapic/11.jpg",
		support:{
			type:"support", // 顶
			support_count:1,
			unsupport_count:2
		},
		comment_count:2,
		share_num:2
	},
	{
		username:"昵称",
		userpic:"/static/default.jpg",
		newstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"",
		support:{
			type:"unsupport", // 踩
			support_count:1,
			unsupport_count:2
		},
		comment_count:2,
		share_num:2
	},
	{
		username:"昵称",
		userpic:"/static/default.jpg",
		newstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"",
		support:{
			type:"", // 未操作
			support_count:1,
			unsupport_count:2
		},
		comment_count:2,
		share_num:2
	}];
	
	export default {
		data() {
			return {
				tabIndex:0,
				tabBars:[{
					name:"主页",
				},{
					name:"帖子",
					list:demo,
					// 1.上拉加载更多  2.加载中... 3.没有更多了
					loadmore:"上拉加载更多",
				},{
					name:"动态",
					list:demo,
					// 1.上拉加载更多  2.加载中... 3.没有更多了
					loadmore:"上拉加载更多",
				}],
			}
		},
		methods: {
			changeTab(index){
				this.tabIndex=index;
			}
		}
	}
</script>

<style>

</style>
