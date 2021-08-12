<template>
	<view class="delivery">
		<v-tabs 
			v-model="activeTab" 
			:scroll="false" 
			lineColor="#FF5370"
			:tabs="tabs"
		></v-tabs>
		
		
		<swiper :current="activeTab" :duration="150" :style="'height:'+scrollH+'px;'" @change="onChangeTab">
			<!-- 全部 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<block v-for="(item,index) in list" :key="index" >
						<speed-card
							:item="item"
							:index="index"
						></speed-card>
					</block>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<block v-for="(item,index) in list" :key="index" >
						<speed-card
							:item="item"
							:index="index"
						></speed-card>
					</block>
				</scroll-view>
			</swiper-item>
			
		</swiper>
		
		
		
		
	</view>
</template>

<script>
	const demo=[
	{
		title:'暑假工200每天打包贴标签',
		addres:'湖南爱上大健康有限公司',
		price:200,
		type:0,
	},
	{
		title:'暑假工200每天打包贴标签',
		addres:'湖南爱上大健康有限公司',
		price:200,
		type:1,
	},{
		title:'暑假工200每天打包贴标签',
		addres:'湖南爱上大健康有限公司',
		price:200,
		type:2,
	},{
		title:'暑假工200每天打包贴标签',
		addres:'湖南爱上大健康有限公司',
		price:200,
		type:0,
	},
	]
	import speedCard from  '@/components/naraku-ui/speed-card.vue'
	export default {
		data() {
			return {
				stateBarHeight:0,
				tabBarHeight:50,
				scrollH:250,
				activeTab: 0,
				tabs:["全部","已报名","进行中","已完成"],
				loadmore:"上拉加载更多",
				newsList:[],
				list:[]
			}
		},
		components:{
			speedCard
		},
		onLoad(){
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			})
			this.list=demo;
		},
		methods: {
			onChangeTab(e){
				this.activeTab = e.detail.current
			},	
		}
	}
</script>

<style>
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 100vh;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.uni-bg-red{
		background-color: red
	}
	.uni-bg-green{
		background-color: green;
	}
	.uni-bg-blue{
		background-color: blue;
	}
	.uni-bg-cyan{
		background-color: cyan
	}
</style>
