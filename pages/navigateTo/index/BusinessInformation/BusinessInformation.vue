<template>
	<view>
		<view class="businessInformation">
			<view class="companyDetails">
				<view class="works_logo">
					<view class="cu-avatar xl round" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
				</view>
				<view class="works_info">
					<view>湖南哈吉斯有限公司</view>
					<view>联系电话：13873648292</view>
				</view>
			</view>
			
			<!-- hr -->
			<view class="hr"></view>
			
			<!-- 在招岗位 -->
			<view class="recruitingPositions">
				<view style="font-size: 1.2em;font-weight: bolder;"><text class="y_line"></text>在招岗位</view>
				<view class="post_list">
					<view class="post_list_title">
						<view>暑假工200每天打包贴标签</view>
						<view>200元/天</view>
					</view>
					<view class="post_list_info">长沙 | 湖南爱上大健康有限公司</view>
					<view class="post_list_tag">
						<text class="tags">3-5年</text>
						<text class="tags">大专</text>
					</view>
				</view>
			</view>
		</view>	
		<!-- 分割线 -->
		<view class="segmentation"></view>
		
		<!-- 评论区域 -->
		<view class="Evaluation">
			<view style="font-size: 1.2em;font-weight: bolder;"><text class="y_line"></text>企业评价</view>
			<!-- 评论人 -->
			<view class="comment">
				<view class="comment_avatar">
					<view class="cu-avatar bg round" :style="{backgroundImage:'url('+ avatarUrl +')'}"></view>
				</view>
				<view class="comment_info">
					<view class="comment_user">
						<view>-徐小婧-</view>
						<view>23人阅读</view>
					</view>
					<view class="comment_content">
						这家公司工作内容轻松，老板人很亲和，认真做每天能赚不少，每天时间也不长，带娃闲暇做一做赚零花钱，大家可以踊跃报名了哦。
					</view>
					<view class="comment_time">
						2021-04-25  18:23
					</view>
				</view>
			</view>
		</view>
		<!-- 没有更多评论了 -->
		<view class="no_comment">
			没有更多评价了~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: 'https://img0.baidu.com/it/u=2547746174,548823622&fm=26&fmt=auto&gp=0.jpg',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
html{
	background-color: white;
}
.hr{border-bottom: 1px solid #EEEEEE;margin: 50rpx 0rpx;}
.y_line{border: 6rpx solid #FF5370;background-color: #FF5370;border-radius: 50rpx; margin-right: 20rpx;}
.businessInformation{
	padding: 30rpx;
	// 公司信息
	.companyDetails{
		display: flex;
		flex-direction: row;
		align-items: center;
		.works_logo{
		}
		.works_info{
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			&>view:nth-child(1){
				font-size: 1.1em;
				font-weight: bold;
				padding: 5rpx;
			}
			&>view:nth-child(2){
				font-size: 0.9em;
				color: #999999;
				padding: 5rpx;
			}
		}
	}
	// 其他岗位
	.recruitingPositions{
		.post_list{
			margin-top: 30rpx;
			border-bottom: 1px solid #EEEEEE;
			padding: 15rpx;
			.post_list_title{
				display: flex;
				flex-direction: row;
				align-items: center;
				&>view:nth-child(1){
					flex: 1;
					font-size: 1.1em;
					font-weight: bold;
				}
				&>view:nth-child(2){
					font-size: 0.9em;
					font-weight: 600;
					color: #FF5F5F;
				}
			}
			.post_list_info{
				margin-top: 15rpx;
				color: #999999;
				font-size: 0.9em;
			}
			.post_list_tag{
				margin: 20rpx 0rpx;
				.tags{
					padding: 10rpx;
					background-color: #FFF2E4;
					margin-right: 10rpx;
					color: #DB9654;
					border-radius: 10rpx;
					font-size: 0.8em;
				}
			}
		}
	}
}
// 分割
.segmentation{
	height: 20rpx;
	background-color: #F6F6F6;
}

// 评论
.Evaluation{
	padding: 30rpx;
	.comment{
		margin: 40rpx 0rpx;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #EEEEEE;
		.comment_avatar{
		}
		.comment_info{
			padding: 20rpx;
			flex: 1;
			.comment_user{
				display: flex;
				flex-direction: row;
				margin-bottom: 10rpx;
				color: #666666;
				font-size: 0.9em;
				&>view:nth-child(1){
					flex: 1;
				}
				&>view:nth-child(2){
					
				}
			}
			.comment_content{
				margin: 10rpx 0rpx;
			}
			.comment_time{
				margin: 20rpx 0rpx;
			}
		}
		
	}
}

// 没有评论了
.no_comment{
	text-align: center;
	color: #999999;
	font-size: 0.9em;
}
</style>
