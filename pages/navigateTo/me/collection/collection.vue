<template>
	<view class="collection">
		<view class="me_collection" v-if="false">
			<view class="other_positions_list">
				<view class="positions_list_title">
					<view>{{ cardList.project_name }}</view>
					<view>{{ cardList.money }}</view>
				</view>
				<view class="positions_list_info">德意 1000-9999人 A轮</view>
				<view class="positions_list_tag">
					<text class="tags">3-5年</text>
					<text class="tags">大专</text>
				</view>
				<view class="positions_list_recruitment_user">
					<view>
						<view class="cu-avatar sm round" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
						<text>南先生 金融科技事业部总经理</text>
					</view>
					<view>上海 浦东新区</view>
				</view>
			</view>
		</view>
		<view class="null_collection">
				<view><image src="https://z3.ax1x.com/2021/08/12/fddV0I.png" mode="aspectFit" ></image></view>
				<view>您还没有收藏过兼职哦~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList:{
						project_name:"java中高级开发工程师",
						subtitle:"1000人 已上市",
						issue:'Kiven',
						addres:"长沙",
						update_time:1567704767,
						money:"15-25K",
						learn:'本科',
						tag:'经验不限,本科及以上,月修七天,五险一金',
						dsc:"湖南兴盛优选电子商务有限公司（简称兴盛优选），注册地为湖南长沙市高新开发区",
						detail:"精通JAVA；熟悉多线程编程，分布式，缓存，消息队列等机制;深入理解JVM，有一定的JVM线上调优经验,掌握高性能的设计与编码及性能调优，有高并发应用开发经验，有很强的线上故障排查经验和能力,熟悉常见的中间件、分布式解决方案及其原理：分布式缓存、微服务架构、消息中间件，负载均衡、连接池等",
						istop:false
					},
				avatarUrl: 'https://img0.baidu.com/it/u=2547746174,548823622&fm=26&fmt=auto&gp=0.jpg',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
html{background-color: #fff}
.collection{}	
/* 收藏列表 */
.me_collection{margin:0rpx 15rpx 15rpx 15rpx;}	
.other_positions_list{margin-top: 15rpx; box-shadow: 5rpx 5rpx 15rpx rgba(0,0,0,0.2);padding: 20rpx;border-radius: 20rpx;}
.positions_list_title{display: flex;flex-direction: row;align-items: center;}
.positions_list_title>view:nth-child(1){flex: 1;font-size: 1.2em;font-weight: 600;}
.positions_list_title>view:nth-child(2){font-size: 0.9em;font-weight: 600;color: #2eb6a9;}
.positions_list_info{margin-top: 10rpx;color: #646464;font-size: 0.9em;}
.positions_list_tag{margin: 20rpx 0rpx;}
.tags{padding: 10rpx;background-color: #f5f5f5;margin-right: 10rpx;font-size: 0.8em;color: #646464;}
.positions_list_recruitment_user{display: flex;flex-direction: row;margin: 10rpx 0rpx;align-items: center;}
.positions_list_recruitment_user>view:nth-child(1){flex:1;font-size: 0.8em;}
.positions_list_recruitment_user>view:nth-child(1)>text{margin-left: 10rpx;}
.positions_list_recruitment_user>view:nth-child(2){font-size: 0.8em;}


/* 空数据提示 */
.null_collection{height: 100vh;display: flex;flex-direction: column; align-items: center;justify-content: center;}
.null_collection>view:nth-child(1){padding: 10rpx;}
.null_collection>view:nth-child(2){font-size: 0.9em;color: #999999;}
</style>
