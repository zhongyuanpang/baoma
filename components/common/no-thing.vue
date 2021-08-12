<template>
	<view class="w-100 bg-white pt-5" :style="isfill?'height:100vh;':'height:auto;'">
		<view
		class="flex flex-direction align-center  justify-center pt-5">
			<image :src="url?url:''" mode="widthFix" style="width: 350rpx;"></image>
			<text class="mt-5 mb-5 text-gray font-sm">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			url:String,
			title:String,
			isfill:{
				type:Boolean,
				default:true
			}
		}
		
	}
</script>

<style>
</style>
