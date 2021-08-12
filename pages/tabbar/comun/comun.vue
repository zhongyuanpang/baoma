<template>
    <view >
		<view style="background-color: #FFFFFF; width: 100%;" >
			<view>
				<view :style="{height: stateBarHeight + 'px'}"></view>
				<view :style="{height: tabBarHeight + 'px'}" class="header-tabBar">
					<v-tabs 
						v-model="activeTab" 
						:scroll="true" 
						class="border-0" 
						:tabs="tabs" 
						bold=[false]
						lineColor="#FF8BB1"
						lineScale=0.6
						activeColor="#333333"
						fontSize="30rpx"
						
					></v-tabs>
				</view>
			</view>
		</view>
		<swiper :current="activeTab" :duration="150" :style="'height:'+scrollH+'px;'" @change="onChangeTab">
			<!-- 推荐 -->
			
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
					@scrolltolower="loadmoreEvent"
				>
					<template v-if="list.length>0">
						<block v-for="(item,index) in list" :key="index">
							<narakuComunItem
								@follow="follow"
								:item="item" 
								:index="index"
								@doSupport="doSupport"
							></narakuComunItem>
							<divider/>
						</block>
						<load-more
							:loadmore="loadmore"
						></load-more>
					</template>
					<template v-else>
						<noThing :url="ontingPic" :title="ontingTitle">						
						</noThing>
					</template>
					
				</scroll-view>
			</swiper-item>
			
			
			
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
				@scrolltolower="loadmoreEvent"
				>
					<template v-if="list.length > 0">
					<block v-for="(item,index) in list" :key="index">
						<narakuComunItem
							@follow="follow"
							:item="item" 
							:index="index"
							@doSupport="doSupport"
							:isfollow="true"
							:statusbtn="true"
						></narakuComunItem>
						<divider/>
					</block>
					<load-more
							:loadmore="loadmore"
						></load-more>
					</template>
					<template v-else>
						<no-thing :url="ontingFollowPic" :title="ontingFollowTitle"></no-thing>
					</template>
					
				</scroll-view>
			</swiper-item>
			<!-- 我的 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
				@scrolltolower="loadmoreEvent">
					<view class="flex justify-start align-center p-3" style="background-color: #F6F6F6;">
						<image class="rounded-circle m-2"  style="width: 100rpx;height: 100rpx;"  src="/static/avatar2.jpg"  mode="aspectFill" ></image>
						<view class="flex  flex-direction justify-start" style="width: 65%;">
							<text class="font-md">Naraku</text>
							<view class="flex" >
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
					<view class="bg-white comun-wapper pt-2" style="height: 100vh;">
						<template v-if="list.length > 0">
							<block v-for="(item,index) in list" :key="index">
								<narakuComunItem
									@follow="follow"
									:item="item" 
									:index="index"
									@doSupport="doSupport"
									:isfollow="true"
									:ismy="false"
									:statusbtn="false"
									
								></narakuComunItem>
								<divider/>
							</block>
							<load-more
								:loadmore="loadmore"
							></load-more>
						</template>
						<template v-else>
							<no-thing :url="ontingActivePic" :title="ontingActiveTitle"></no-thing>
						</template>
					</view>
				</scroll-view>
			</swiper-item>
			
		</swiper>
		<view class="fab-btn" @click="toIssue">
			<image src="https://z3.ax1x.com/2021/08/12/fdaRyj.png" style="width: 120rpx;height: 120rpx;"></image>
		</view>
	</view>
</template>

<script>
	
	const demo = [
		{
			username:"昵称",
			userpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
			newstime:"2019-10-20 下午04:30",
			isFollow:true,
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
		},
	];
	
	import noThing from '@/components/common/no-thing.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import narakuComunItem from "@/components/naraku-ui/naraku-comun-item.vue"
	import narakuFab from "@/components/naraku-ui/naraku-fab.vue"
	import divider from "@/components/naraku-ui/divider.vue"
	import loadMore from '@/components/common/load-more.vue';
	export default {
		data() {
			return {
				stateBarHeight:0,
				tabBarHeight:50,
				scrollH:250,
				loadmore:"上拉加载更多",
				isFollow:false,
				newsList:[],
				activeTab: 0,
				tabs:["推荐","关注","我的"],
				list:[],
				ontingPic:"https://z3.ax1x.com/2021/08/12/fdweKJ.png",
				ontingTitle:"社区空空如也~",
				ontingFollowPic:"https://z3.ax1x.com/2021/08/12/fdweKJ.png",
				ontingFollowTitle:"您还没有关注用户哦~",
				ontingActivePic:"https://z3.ax1x.com/2021/08/12/fdwMUx.png",
				ontingActiveTitle:"您还没有发布过内容哦~"
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
		created() {
			// 获取设备信息
			this.getStateBarHeight();
			// #ifdef MP-WEIXIN
			this.getMenuButtonInfo();
			// #endif
		},
		components:{
			narakuComunItem,
			narakuFab,
			uniNavBar,
			loadMore,
			noThing
		},
		onPullDownRefresh() {
			this.refresh()
		},
		methods: {
			onChangeTab(e){
				this.activeTab = e.detail.current
			},
			getStateBarHeight() {
				let info = uni.getSystemInfoSync()
				this.stateBarHeight = info.statusBarHeight
				this.windowWidth = info.windowWidth
			},
			getMenuButtonInfo() {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			
				let paddingSize = menuButtonInfo.top - this.stateBarHeight
				this.searchHearch = menuButtonInfo.height
			
			
				this.tabBarHeight =
					(menuButtonInfo.bottom - this.stateBarHeight) +
					paddingSize
			
				this.windowWidth = menuButtonInfo.left
			},
			// fab start
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				console.log()
				if(e.index === 0){
					uni.navigateTo({
						url:'/pages/comun/comun-add/comun-add'
					})
				}else if(e.index === 1){
					uni.navigateTo({
						url:'/pages/comun/comun-user/comun-user'
					})
				}
			},
			toIssue(){
				uni.navigateTo({
					url:'/pages/comun/comun-add/comun-add'
				})
			},
			// 跳转粉丝关注列表
			tofollow(){
				uni.navigateTo({
					url:'/pages/comun/comun-detail/comun-detail'
				})
			},
			tofollow(){
				uni.navigateTo({
					url:'/pages/comun/comun-detail/comun-detail'
				})
			},
			// fab end)
			follow(e){
			  this.list[e].isFollow = true
			  uni.showToast({ title: '关注成功' })
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
			// 上拉加载
			loadmoreEvent(){
				// 验证是否处于可加载
				if (this.loadmore !== '上拉加载更多') return;
				// 设置加载状态
				this.loadmore = '加载中...'
				setTimeout(()=>{
					// 加载数据
					this.list = [...this.list,...this.list]
					// 设置加载状态
					this.loadmore = '上拉加载更多'
				},2000)
			},
			refresh(){
				setTimeout(()=>{
					this.list = demo
					uni.stopPullDownRefresh()
				},2000)
			}
		}
		
	}
</script>

<style>
.fab-btn{
	position: fixed;
	bottom: 70rpx;right: 20rpx;
}
.user-inner{
	flex: 1;
	text-align: left;
}
.comun-wapper{
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
</style>
