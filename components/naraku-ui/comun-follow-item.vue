<template>
	<view class="bg-white w-100">
		<template v-if="item.length!=0 || item.isfollowStatus==0">
			<view class="flex justify-between  p-3">
				<view class="flex  align-center justify-start">
					<image class="rounded-circle mr-2" style="width: 100rpx;height: 100rpx;" mode="aspectFill" src="/static/avatar2.jpg"></image>
					<text>{{item.nickname}}</text>
				</view>
				
				<view
					class="flex align-center mt-3 justify-center rounded-circle border text-gray   animated faster" 
					style="width: 120rpx;height: 50rpx;"
					hover-class="jello">
					 已关注
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			
		}
	}
</script>

<style>
</style>
