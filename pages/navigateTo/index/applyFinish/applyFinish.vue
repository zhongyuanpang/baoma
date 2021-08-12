<template>
	<view style="height: auto; background-color: #FFFFFF;">
		<view class="flex align-center justify-center flex-direction ">
			<image class="w-30 mt-2" src="https://z3.ax1x.com/2021/08/12/fdasFf.png" mode="widthFix"></image>
			<text class="font text-dark font-lg">报名成功</text>
		</view>
		
		<view class="btn-wapper  mt-5 mb-5  margin-lr-lg p-2  flex justify-center align-center">
			<text class="font-md text-main">拨打电话：15674635473</text>
		</view>
		
		<!-- 推介兼职 -->
		<view class="mt-2  margin-lr-lg flex justify-start">
			<view class="bg-main rounded mr-2" style="width: 10rpx; height:50rpx;"></view>
			<text class="text-bold font-md">推荐兼职</text>
		</view>		
		<!-- 渲染 列表组件 -->
		<block v-for="(item,index) in cardList" :key="index">
			<naraku-item
				:item="item"
				:index="index"
			></naraku-item>
			
			<view style="height: 1rpx; background-color: #F5F5F5;" class="w-100"></view>
		</block>
		
		
	</view>
</template>

<script>
	import narakuItem from "@/components/naraku-ui/naraku-item.vue"
	export default {
		data() {
			return {
				cardList:[
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
						money:"400",
						learn:'本科',
						tag:[
							"经验不限","本科及以上","月修七天","五险一金"
						],
						dsc:"湖南兴盛优选电子商务有限公司（简称兴盛优选），注册地为湖南长沙市高新开发区",
						detail:"熟练精通JAVA；熟悉多线程编程，分布式，缓存，消息队列等机制；深入理解JVM，有一定的JVM线上调优经验,掌握高性能的设计与编码及性能调优，有高并发应用开发经验，有很强的线上故障排查经验和能力,熟悉常见的中间件、分布式解决方案及其原理：分布式缓存、微服务架构、消息中间件，负载均衡、连接池等",
						istop:false,
					},
				]
			}
		},
		components:{
			narakuItem
		},
		methods: {
			
		}
	}
</script>

<style>
.btn-wapper {
	border: 1px solid #FF4A6A;
	border-radius: 17rpx;
}
</style>
