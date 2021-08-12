<template>
	<view>
		<!--自定义顶部导航-->
		<view class="bg-white w-100">
			<view>
				<view :style="{height: stateBarHeight + 'px'}"></view>
				<view :style="{height: tabBarHeight + 'px'}" class="header-tabBar">
					<view class="flex  justify-start align-center pt-2 pl-4">
						<view style="width: 56rpx; height: 56rpx;">
							<image src="https://z3.ax1x.com/2021/08/12/fdN0cd.png"  style="height: 100%;"></image>
						</view>
						<text class="text-main ml-1 mt-1 font-weight-bold font-sm ">宝妈兼职</text>
					</view>
				</view>
			</view>
		</view>


		
		<naraku-search-bar
			:city="city"
		 />
		
		<!-- 卡片详情组件 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
		@scrolltolower="loadmoreEvent"
		>
		
		<view class="auth-layout  bg-white rounded">			
			<!-- 暂时固定四个顶部 -->
			<view class="grid auth-content padding-sm col-4"> 
				<view class="block-item ">
					<view class="">
					  <image src="https://z3.ax1x.com/2021/08/12/fdUCE6.png" width="100%"/>
					</view>
					<text class="block-title">
					  附近工作
					</text>
				</view>  
				<view class="block-item">
					<view class="">
					  <image src="https://z3.ax1x.com/2021/08/12/fdUMUf.png" width="100%"/>
					</view>
					<text class="block-title">
					  简单易做
					</text>
				</view>  
				<view class="block-item">
					<view class="">
					  <image src="https://z3.ax1x.com/2021/08/12/fdU38g.png" width="100%"/>
					</view>
					<text class="block-title">
					  附近兼职
					</text>
				</view>  
				<view class="block-item">
					<view class="">
					  <image src="https://z3.ax1x.com/2021/08/12/fdUGvj.png" width="100%"/>
					</view>
					<text class="block-title text-gray">
					  极速上岗
					</text>
				</view>  
				
				
			</view>
			
			<view class="banner margin-sm padding-sm">
				<image src="https://z3.ax1x.com/2021/08/12/fdUBPU.png"  style="height: 170rpx;"></image>
			</view>
		</view>
	
		

		<!-- 预留位置 -->
		<view class="list-title  margin-sm margin-tb-sm flex justify-between">
			<view class="imag">
				<image src="https://z3.ax1x.com/2021/08/12/fdUtrn.png" mode='aspectFit' style="height: 55rpx;"></image>
			</view>
			<view>
				<text style="color:#999999;">更多</text>
				<text class="cuIcon-right" style="color:#999999;"></text>
			</view>
			
		</view>
		
		  <template v-if="cardList.length > 0">
			<block  v-for="(item,index) in cardList" :key="index">
				<naraku-item
					:item="item" 
					:index="index"
				/>
			</block>
			<load-more
				:loadmore="loadmore"
			></load-more>
		  </template>
		  <template v-else>
			  <noThing  :url="ontingPic" :title="ontingTitle">
			  </noThing>
		  </template>
		</scroll-view>
	</view>
</template>

<script>
	const demo = [
		{
				project_name:"Java中高级开发工程师",
				subtitle:"兴盛优选有限公司 1000人 已上市",
				issue:'Kiven',
				addres:"长沙",
				update_time:1567704767,
				money:"400",
				learn:'本科',
				tag:[
					"经验不限","本科及以上","月修七天","五险一金"
				],
				dsc:"湖南兴盛优选电子商务有限公司（简称兴盛优选），注册地为湖南长沙市高新开发区",
				detail:"熟练精通JAVA；熟悉多线程编程，分布式，缓存，消息队列等机制；深入理解JVM，有一定的JVM线上调优经验,掌握高性能的设计与编码及性能调优，有高并发应用开发经验，有很强的线上故障排查经验和能力,熟悉常见的中间件、分布式解决方案及其原理：分布式缓存、微服务架构、消息中间件，负载均衡、连接池等",
				istop:false,
			},
			{
				project_name:"Java中高级开发工程师",
				subtitle:"兴盛优选有限公司 1000人 已上市",
				issue:'Kiven',
				addres:"长沙",
				update_time:1567704767,
				money:"300",
				learn:'本科',
				tag:[
					"经验不限","本科及以上","月修七天","五险一金"
				],
				dsc:"湖南兴盛优选电子商务有限公司（简称兴盛优选），注册地为湖南长沙市高新开发区",
				detail:"熟练精通JAVA；熟悉多线程编程，分布式，缓存，消息队列等机制；深入理解JVM，有一定的JVM线上调优经验,掌握高性能的设计与编码及性能调优，有高并发应用开发经验，有很强的线上故障排查经验和能力,熟悉常见的中间件、分布式解决方案及其原理：分布式缓存、微服务架构、消息中间件，负载均衡、连接池等",
				istop:false
			},
			{
				project_name:"Java中高级开发工程师",
				subtitle:"兴盛优选有限公司 1000人 已上市",
				issue:'Kiven',
				addres:"长沙",
				update_time:1567704767,
				money:"203",
				learn:'本科',
				tag:[
					"经验不限","本科及以上","月修七天","五险一金"
				],
				dsc:"湖南兴盛优选电子商务有限公司（简称兴盛优选），注册地为湖南长沙市高新开发区",
				detail:"熟练精通JAVA；熟悉多线程编程，分布式，缓存，消息队列等机制；深入理解JVM，有一定的JVM线上调优经验,掌握高性能的设计与编码及性能调优，有高并发应用开发经验，有很强的线上故障排查经验和能力,熟悉常见的中间件、分布式解决方案及其原理：分布式缓存、微服务架构、消息中间件，负载均衡、连接池等",
				istop:false
			},
			{
				project_name:"Java中高级开发工程师",
				subtitle:"兴盛优选有限公司 1000人 已上市",
				issue:'Kiven',
				addres:"长沙",
				update_time:1567704767,
				money:"200",
				learn:'本科',
				tag:[
					"经验不限","本科及以上","月修七天","五险一金"
				],
				dsc:"湖南兴盛优选电子商务有限公司（简称兴盛优选），注册地为湖南长沙市高新开发区",
				detail:"熟练精通JAVA；熟悉多线程编程，分布式，缓存，消息队列等机制；深入理解JVM，有一定的JVM线上调优经验,掌握高性能的设计与编码及性能调优，有高并发应用开发经验，有很强的线上故障排查经验和能力,熟悉常见的中间件、分布式解决方案及其原理：分布式缓存、微服务架构、消息中间件，负载均衡、连接池等",
				istop:false
			},
		]
	import noThing from '@/components/common/no-thing.vue';
	import loadMore from '@/components/common/load-more.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import narakuItem from "@/components/naraku-ui/naraku-item.vue"
	import narakuSearchBar from "@/components/naraku-ui/naraku-search-bar.vue"
	export default {
	  data () {
		return {
			stateBarHeight:0,
			tabBarHeight:50,
			cardList:[],
			scrollH:250,
			loadmore:"上拉加载更多",
			ontingPic:"https://z3.ax1x.com/2021/08/12/fdw82D.png",
			ontingTitle:"网络开小差了~",
			isfill:false,
			city:''
		};
	  },
	created() {
			// 获取设备信息
			this.getStateBarHeight();
			// #ifdef MP-WEIXIN
			this.getMenuButtonInfo();
			// #endif
		},
	  components: {
		  narakuItem,
		  narakuSearchBar,
		  uniNavBar,
		  loadMore,
		  noThing
	  },
	  onLoad() {
	  	uni.getLocation({
	  	    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
	  	    success:(res)=>{
	  			let that=this
	  	        const latitude = res.latitude;
	  	        const longitude = res.longitude;
	  	        uni.request({
	  				header:{
	  					"Content-Type": "application/text"
	  				},
	  				//注意:这里的key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
	  				url:'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location='+res.longitude+','+res.latitude+'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
	  				success(re) {
	  					if(re.statusCode===200){
	  						that.citydata=re.data.regeocode.addressComponent.city
	  						that.city = that.citydata
	  						that.$store.commit('setCity',that.citydata)
	  						that.city = that.$store.state.city
	  						// console.log(that.$store.state.city,"vuex取值")
	  						// console.log("获取中文街道地理位置成功",that.citydata)
	  						
	  					}else{
	  						console.log("获取信息失败，请重试！")
	  					}
	  				 }
	  			});
	  	    }
	  	});
		uni.getSystemInfo({
			success:res=>{
				this.scrollH = res.windowHeight - res.statusBarHeight - 44
			}
		})
		this.cardList = demo
		
	  },
	  methods:{
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
		  follow(e){
			  this.list[e].isFollow = true
			  uni.showToast({ title: '关注成功' })
		  },
		  // 上拉加载
		  loadmoreEvent(){
		  	// 验证是否处于可加载
		  	if (this.loadmore !== '上拉加载更多') return;
		  	// 设置加载状态
		  	this.loadmore = '加载中...'
		  	setTimeout(()=>{
		  		// 加载数据
		  		this.cardList = [...this.cardList,...this.cardList]
		  		// 设置加载状态
		  		this.loadmore = '上拉加载更多'
		  	},2000)
		  },
	  },

	 
	}
</script>

<style   scoped>
	/* 自定义顶部导航 */
	.txtstly{
		color: #FF6882;
		font-weight: bold;
		font-size: 1em;
	}
    /* 搜索 */
	.serch-wapper{
		padding: 10rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.serch-wapper .searcbox-r{
		flex: 1;
	}
	.serch-wapper .search-inner{
		border-radius: 50rpx;
		width: 100%;
		padding: 8px;
		background-color: #EEEEEE;
	}
	
	.serch-wapper .search-inner .search-text{
		display: inline-block;
		text-indent: 1em;
		font-size: .9em;
	}
	
	
	
	/* 顶部分类导航 */
	.auth-layout .auth-content{
		padding: 30rpx 20rpx 0rpx 20rpx ;
	}
	.auth-layout .banner{
		
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
	  font-size: 0.8em;
	  color: black;
	}
	.list-title {
		height: 50rpx;
	}
	.list-title .imag{
		width: 150rpx;
	}

	

</style>
