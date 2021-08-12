<template>
	<view class="detail">
		<view class="detailBox">
			<view class="detail_title">
				<view>{{ cardList.project_name }}</view>
			</view>
			<view class="detail_money">
				<view>200元/天</view>
			</view>
			<view class="detail_tag">
				<text>日结</text>
				<text>牛牛牛牛牛女女女女</text>
			</view>
			<view class="company_info">
				<text class="cuIcon-calendar"> 2021-07-15</text>
				<text class="cuIcon-time">09:00-18:00</text>
			</view>
			
			<!-- 职位详情区域 -->
			<view class="position_details">
				<view style="font-size: 1.2em;font-weight: bolder;"><text class="y_line"></text>岗位详情</view>
				<view class="describe">【工作内容】</view>
				<view class="desc_info" v-for="(item,index) in detail" :key="index">{{ index+1}}、{{ item }}</view>
				<!-- 已报名 -->
				<view class="registered">
					<view class="registered_number">3人已报名</view>
					<view class="registered_user">
						<view class="cu-avatar sm round registered_user_avatar" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
						<view class="cu-avatar sm round registered_user_avatar" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
						<view class="cu-avatar sm round registered_user_avatar" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
					</view>
				</view>
			</view>

			<!-- 商家信息 -->
			<view class="Business_information">
				<view style="font-size: 1.2em;font-weight: bolder;"><text class="y_line"></text>商家信息</view>
			</view>

			<!-- 公司 -->
			<view class="the_company" @click="to_Business_information">
				<view>
					<view class="company_avatar">
						<view class="cu-avatar lg round" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
					</view>
					<view class="the_company_info">
						<view>宝德融资租赁（上海）有限公司</view>
						<view>互联网金融-A轮-1000-99999人</view>
					</view>
				</view>
				<view>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			
			<!-- map -->
			<view class="map">
				<map  style="width: 100%; height: 150px;" class="radius" :latitude="latitude" :longitude="longitude" :markers="markers" :scale="scale"></map>
			</view>
			
			<!-- hr -->
			<view class="hr"></view>
			
			<!-- 公司其他岗位 -->
			<view class="other_positions">
				<view style="font-size: 1.2em;font-weight: bold;"><text class="y_line"></text>相关推荐</view>
				<view class="other_positions_list">
					<view class="positions_list_title">
						<view>{{ cardList.project_name }}</view>
						<view>{{ cardList.money }}</view>
					</view>
					<view class="positions_list_info">长沙 | 湖南爱上大健康有限公司</view>
					<view class="positions_list_tag">
						<text class="tags">3-5年</text>
						<text class="tags">大专</text>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 130rpx;"></view>
		<!-- 底部选项 -->
		<view class="btom">
			<view>
				<!-- @click="share" -->
				<view class="share" >
					<view class=" animated" hover-class="jello">
						<text class="cuIcon-forward"></text>
					</view>
					<view>分享</view>
				</view>
				<!-- @click="collection" -->
				<view class="collection" >
					<view class=" animated" hover-class="jello">
						<text class="cuIcon-favor animated" hover-class="jello text-main" ></text>
					</view>
					<view>收藏</view>
				</view>
			</view>
			<view class="btn">
				<button @click="doApply">立即报名</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				// map
				title: 'map',
				latitude: 39.909,	//纬度
				longitude: 116.39742,	//经度
				scale:16,//缩放级别
				markers: [
					{
						id:0, // 使用 marker点击事件 需要填写id
						latitude: 39.909,
						longitude: 116.39742,
						iconPath: '../../../../static/images/index/location.png',
						rotate:0,   // 旋转度数
						width:30,   //宽
						height:40,   //高
						title:'map',//标注点名
						alpha:1,   //透明度
						label:{
							// content:'文本1',
							color:'#F76350',
							// bgColor:'#fff',
							// padding:20,
							// borderRadius:20
						},
						callout:{
							// borderRadius:10,
							// borderRadius:2,
							content:'硅谷广场B座',//文本
							color:'#ffffff',//文字颜色
							fontSize:14,//文本大小
							borderRadius:2,//边框圆角
							bgColor:'#00c16f',//背景颜色
							display:'ALWAYS',//常显
							padding:5,
							borderRadius:10
							
						},
						controls:{
							clickable:false
						}
					},
				],
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
				detail:{}
				
			}
		},
		onLoad() {
			let detail = this.cardList.detail;
			let str = detail.split(/[;；]/);
			this.detail = str
		},
		methods: {
			// 分享
			share(){
				uni.share({
					//分享到微信朋友
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http:*******************",//这地址太长了，就省略了
					title: "你笑起来真好看",
					summary: "唐艺昕，你有火吗？没有,为何你点燃了我的心？",                         
					imageUrl: "http:*******************",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				})
			},
			// 跳转商家信息页
			to_Business_information(){
				uni.navigateTo({
					url:'../BusinessInformation/BusinessInformation'
				})
			},
			// 报名成功
			doApply(){
				// 提交报名请求
				
				uni.navigateTo({
					url:'../applyFinish/applyFinish'
				})
			}
		}
	}
</script>

<style>
	html{background-color: #fff}
.detail{}
.detailBox{margin:20rpx 30rpx;}
/* 职位详情 */
.detail_title{height: 80rpx;display: flex;align-items: center;}
.detail_title>view:nth-child(1){font-size: 1.5em;font-weight: bolder;}

.detail_money{color:#FF9A34;font-size: 1.2em;font-weight: bold;}

.detail_tag{height: 60rpx;margin: 10rpx 0rpx;display: flex;flex-direction: row;align-items: center;}
.detail_tag>text{background-color: #FFF2E4;color: #DB9654;padding:8rpx 20rpx; margin-right:10rpx;border-radius: 10rpx;font-size: 0.9em;}

/* 公司招聘详情 */
.company_info{font-size: 0.9em;letter-spacing: 3rpx;font-weight: 500;border-bottom: 3rpx solid #eaeaea;padding: 10rpx 0rpx 50rpx 0rpx;}
.company_info>text{margin-right: 20rpx;color: #999999;}

/* 横线 */
.hr{border-bottom: 3rpx solid #eaeaea;margin-top: 50rpx;}

/* 职位详情 */
.position_details{margin-top: 30rpx;}
.describe{margin-top: 30rpx;font-size: 0.9em;color: #545454;}
.desc_info{margin-top: 10rpx;letter-spacing: 3rpx;font-size: 0.9em;color: #666666;}
.y_line{border: 6rpx solid #FF5370;background-color: #FF5370;border-radius: 50rpx; margin-right: 20rpx;}
.registered{margin: 30rpx 0rpx;}
.registered_number{color: #999999;}
.registered_user{}
.registered_user_avatar{margin: 10rpx 10rpx 10rpx 0rpx;}


/* 商家信息 */
.Business_information{margin: 50rpx 0rpx;}

/* 该公司 */
.the_company{margin: 40rpx 0rpx;display: flex;flex-direction: row;align-items: center;}
.the_company>view:nth-child(1){flex: 1;display: flex;flex-direction: row;align-items: center;}
.the_company>view:nth-child(1)>.company_avatar{}
.the_company>view:nth-child(1)>.the_company_info{margin-left: 20rpx;}
.the_company>view:nth-child(1)>.the_company_info>view:nth-child(1){font-size: 1em;font-weight: 500;padding: 5rpx;font-weight: Medium;color: #000000;}
.the_company>view:nth-child(1)>.the_company_info>view:nth-child(2){font-size: 0.8em;padding: 5rpx;color: #999999;}
.the_company>view:nth-child(2){font-size: 0.9em;color:#999999 ;}

/* map */
.map{margin-bottom: 50rpx;border-radius: 10rpx;}

/* 公司其他职位 */
.other_positions{margin-top: 50rpx;}
.other_positions_list{margin-top: 30rpx; border-bottom: 2px solid #EEEEEE; padding: 15rpx;}
.positions_list_title{display: flex;flex-direction: row;align-items: center;}
.positions_list_title>view:nth-child(1){flex: 1;font-size: 1.1em;font-weight: bold;}
.positions_list_title>view:nth-child(2){font-size: 0.9em;font-weight: 600;color: #FF5F5F;}
.positions_list_info{margin-top: 10rpx;color: #999999;font-size: 0.9em;}
.positions_list_tag{margin: 20rpx 0rpx;}
.tags{padding: 10rpx;background-color: #FFF2E4;margin-right: 10rpx;font-size: 0.8em;color: #DB9654;border-radius: 10rpx;}

/* 最底部 */
.btom{height: 130rpx;background-color: white;position: fixed;bottom: 0;width: 100%;display: flex;flex-direction: row;align-items: center;}
.btom>view:nth-child(1){display: flex;flex-direction: row;}
.btom>view:nth-child(1)>view{justify-content: center;align-items: center;text-align: center;padding:0rpx 20rpx;}
.share{margin-left: 10rpx;}
.share>view:nth-child(1){font-size: 1.4em;color: #999999;font-weight: 500;}
.share>view:nth-child(2){color: #999999;font-size: 0.9em;}
.collection>view:nth-child(1){font-size: 1.4em;color: #999999;font-weight: 500;}
.collection>view:nth-child(2){color: #999999;font-size: 0.9em;}
.btn{flex: 1;padding: 20rpx;}
.btn>button{background: linear-gradient(to right,#FF748C,#FF8BB1); color: white;border-radius: 22rpx;}
</style>
