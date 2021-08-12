<template>
	<view  class="bg-white w-100"  style="height: 100vh;">
		<!-- 搜索 -->
		<view class="cu-bar search bg-white">
			<view class="action">
				<text>长沙</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input   :adjust-position="false" v-model="searchKey" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			<view class="action">
				<button @click="doSearch" class="cu-btn bg-main shadow-blur text-white round">搜索</button>
			</view>
		</view>
		
		<template v-if="searchList.length === 0">
			<view class="py-2 font-sm text-gray px-2 ">
				<text class="ml-1">搜索历史</text>
				<template v-if="list.length > 0">
					<view  class="flex flex-wrap">
						<view class="border rounded font mx-2 my-1 px-3" 
						v-for="(item,index) in list" :key="index"
						hover-class="bg-light" @click="clickSearchHistory(item)"
						>{{item}}</view>
					</view>
				</template>
				<template v-else>
					<no-thing :url="ontingPic" :title="ontingTitle"></no-thing>
				</template>
			</view>
		</template>
		<template v-else>
			<block v-for="(item,index) in searchList" :key="index">
				<naraku-item
					:item="item" 
					:index="index"
				/>
				<divider></divider>
			</block>
		</template>
	</view>
	
</template>

<script>
	//测试数据
	const demo =[
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
	import narakuItem from "@/components/naraku-ui/naraku-item.vue"
	export default {
		components:{
			narakuItem,
			noThing
		},
		data() {
			return {
				list:[],
				searchKey:'',
				searchList:[],
				ontingPic:"https://z3.ax1x.com/2021/08/12/fdweKJ.png",
				ontingTitle:"内容空空如也~",
				ontingSerchPic:"https://z3.ax1x.com/2021/08/12/fdw1PK.png",
				ontingSerchTitle:"没有找到相关结果",
			}
		},
		methods: {
			doSearch(){
				console.log(this.searchKey)
				// 收起软键盘
				uni.hideKeyboard()
				// 显示loading状态
				uni.showLoading({
					title: '加载中...',
					mask: false
				})
				// 请求搜索
				setTimeout(()=>{
					this.searchList = demo
					// 隐藏loading
					uni.hideLoading()
					
				},300)
				console.log(this.searchList)
			},
			// 点击搜索历史
			clickSearchHistory(text){
				console.log(text)
				// 赋值
				this.searchKey=text
				this.doSearch()
			},
			goBack(){
				uni.navigateBack({
					data:-1
				})
			}
			
		}
	}
</script>

<style>

</style>
