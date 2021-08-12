<template>
	<view style="height: 150rpx;"
	class="fixed-bottom flex justify-between align-center border-top bg-white padding-lr-sm">
		<view class="padding-tb-sm" style="width: 80%;border-radius: 20rpx;background-color: #F6F6F6;">
			<input type="text" style="background-color: #F6F6F6;" v-model="content" class="text-indent rounded ml-2"  placeholder="写条评论吧~" @confirm="submit"/>
		</view>
		
		<!-- <view class="cuIcon-check align-center text-center justify-center font-lg animated" hover-class="jello text-main" style="width: 100rpx;" @click="submit"></view> -->
		<view>
			<button class="cu-btn sendBtn  text-white shadow rounded-circle">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ""
			}
		},
		methods: {
			submit() {
				// 是否为空
				if (this.content === '') {
					return uni.showToast({
						title: '消息不能为空',
						icon: 'none'
					});
				}
				this.$emit('submit',this.content)
				// 清空输入框
				this.content = ''
			}
		},
	}
</script>

<style>
	.sendBtn{
		background-image: linear-gradient(to right,#fb576b,#FF8BB1);
		padding: 20rpx 40rpx;
	}
</style>
