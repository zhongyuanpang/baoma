<template>
	<view class="margin-tb-sm margin-lr-sm bg-white p-3 rounded">
		<view class="flex justify-between">
			<view class="">
				<template v-if="item.type==0">
					<text class="rounded registedTab">
						待录取
					</text>
				</template>
				<template v-else-if="item.type==1">
					<text class="rounded conductTab">
						待支付
					</text>
				</template>
				<template v-else-if="item.type==2">
					<text class="rounded finishTab">
						已完成
					</text>
				</template>
				
				
				<text class="text-bold">{{item.title}}</text>
			</view>
			
			<text class="text-bold text-main">{{item.price}}元/天</text>
		</view>
		<view class="flex justify-between mt-1">
			<text class="text-gray">{{item.addres}}</text>
			<text class="text-bold text-danger"> </text>
		</view>
		<view style="height: 1rpx; background-color: #F5F5F5;" class="w-100"></view>
		<view class="flex justify-end">
			<template v-if="item.type==2">
				<view class="comunBtn mt-2">
					<text class="text-main">去评价</text>
				</view>
			</template>
			<template v-else>
				<view class="callBtn mt-2">
					<text class="text-white">联系商家</text>
				</view>
			</template>
		</view>
		
	</view>
</template>

<script>

	export default{
		props:{
			item:Object,
			index:Number,
			//投递类型
			type:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
			
			}
		},
	
		methods:{
			
		}
		
	}
</script>

<style>
	.callBtn{
		padding: 13rpx 30rpx;
		background-image: linear-gradient(to right,#fb576b,#FF8BB1);
		border-radius: 10rpx;
	}
	.comunBtn{
		padding: 8rpx 35rpx;
		border: 1rpx solid #fb576b;
		border-radius: 10rpx;
	}
	.registedTab,.conductTab,.finishTab{
		margin: 10rpx 10rpx 10rpx 0;
		padding: 15rpx 30rpx;
	}
	.registedTab{
		background-color: #FFF2E4;
		color: #DB9654;
	}
	.conductTab{
		background-color: #FFE3E8;
		color: #E1667B;
	}
	.finishTab{
		background-color: #E3FFEE;
		color: #4ED685;
	}
</style>
