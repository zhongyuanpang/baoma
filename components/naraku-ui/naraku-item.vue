<template>
	<view class="auth-layout padding-sm  margin-sm margin-tb-sm rounded  bg-white" @click="toDetail">
		<view class="card-head flex justify-between">
			<view>
				<text class="card-title">{{item.project_name}}</text>
			</view>
			<view class="card-money">
				{{item.money}}元/天
			</view>
		</view>
		
		<view class="card-content">
			<view class="card-subtitle">
				{{item.addres}}<text class="text-gray margin-lr-md d-inline-block">|</text>  {{item.subtitle}}
			</view>
			<!-- 二次循环 -->
			<!-- <view class="card-tag">
				<text>{{item.tag}}</text>
			</view> -->
			<block v-for="(item,index) in item.tag" :key="index">
				<view  class="card-tag">
					<text>{{item}}</text>
				</view>
			</block>
			
			<view class="card-detail">
				<text>{{item.detail}}</text>
			</view>
		</view>
		<!-- <view class="card-foot flex justify-between">
			<view>发布者 {{item.issue}}</view>
			<view>{{item.addres}}</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		name:"naraku-item",
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				newTag:[]
			};
		},
		onLoad(){
			this.filterTag()
		},
		methods:{
			toDetail(){
				  uni.navigateTo({
					url: '/pages/navigateTo/index/details/details',
				  })
			},
		
		}
	}
</script>

<style lang="less">
	.auth-layout{
		border-radius: 5rpx;
		.card-title{
			font-weight: bold;
			font-size: 1.1em;
		}
		.card-money{
			font-size: 1.1em;
			font-weight: bold;
			color: #FF5F5F;
		}
		.card-content{
			.card-subtitle{
				text-indent: 5rpx;
				font-size: .9em;
			}
			.card-tag{
				display: inline-block;
				padding: 5rpx 10rpx;
				margin:1rpx  3rpx;
				background-color: #FFF2E4;
				border-radius: .2rem;
				text{
					color: #DB9654;
					font-size: .8em;
				}
			}
			.card-detail{
				text{
					display: inline-block;
					width: 90%;
					overflow:hidden;
					white-space:nowrap;
					text-overflow:ellipsis;
				}
			}
		}
		
	}
</style>
