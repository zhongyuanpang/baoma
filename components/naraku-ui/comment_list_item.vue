<template>
	<view class="uni-comment-list">
		<view>
			<image class="rounded-circle mr-2"
			:src="item.avatar"
			style="width:65rpx;height: 65rpx;"
			mode="aspectFill"
			>
		</view>
		<view class="uni-comment-body">
			<view class="uni-comment-top">
				<view class="flex justify-between mr-1">
					<text style="color: #aaaaaa;">{{item.nickname}}</text>
					<text style="color: #aaaaaa;">{{item.data_time}}</text>
				</view>
			</view>
			<view class="uni-comment-content">{{item.content}}</view>
			<view style="height: 1rpx; background-color: #F5F5F5;" class="w-100"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		data(){
			return{
				
			}
		},
		onLoad(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
