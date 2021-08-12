<template>	
	<view class="bg-white" style="height: 100vh;">
		<uni-nav-bar left-icon="back"  statusBar :border="false" @click-left="goBack">
			<view class="flex align-center justify-center w-100">
				<text class="">发布</text>
			</view>
		</uni-nav-bar>
		
		<!-- 文章标题 -->
		<view class="cu-form-group">
			<view class="title">标题</view>
			<input placeholder="文章标题" name="input"></input>
		</view>
		
		<view class="border margin-lr-sm mt-1 pt-1 rounded">
			<textarea 
				v-model="content" 
				placeholder="说一说..." 
				class="uni-textarea px-2 bg-gray"/>
		</view>
		<view class="padding-lr-sm  flex">
			<view class="cuIcon-apps footer-btn animated jello" hover-class="jello"></view>
			<view class="cuIcon-emoji footer-btn animated jello" hover-class="jello"></view>
			<view class="cuIcon-album footer-btn animated jello" @click="iconClickEvent('uploadImage')" hover-class="jello"></view>
		</view>
		
		<upload-image :show="show" ref="uploadImage" :list="imageList" @change="changeImage"></upload-image>		<!-- 底部操作条 -->
		<view style="height: 155rpx;"></view>
		<view class="fixed-bottom bg-white flex align-center justify-center" style="height: 150rpx;">
			<!-- <view class="bg-main text-white ml-auto flex justify-center align-center radius mr-2" 
			 style="width: 140rpx;height: 60rpx;">发送</view> -->
			 <view @click="doComunAdd" class="border send-btn p-2  flex justify-center" style="width: 88%;border-radius: 50rpx;" >
				 <text class="text-white font-md text-center">发送</text>
			 </view>
		</view>
	
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import uploadImage from '@/components/common/upload-image.vue';
	// 删除图片
	export default {
		components: {
			uploadImage,
			uniNavBar
		},
		data() {
			return {
				content:"",
				imageList:[],
				showBack:false
			}
		},
		computed: {
			show() {
				return this.imageList.length > 0 
			}
		},
		// 监听返回
		onBackPress(e) {
			console.log(e);
			if ((this.content !== '' || this.imageList.length > 0) && !this.showBack ) {
				uni.showModal({
					content: '是否要保存为草稿？',
					showCancel: true,
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						// 点击确认
						if(res.confirm) {this.store()}else{
							uni.removeStorage({
								key:"add-input"
							})
						}
						// 手动执行返回
						uni.navigateBack({ delta: -1 });
					},
				});
				this.showBack = true
				return true
			}
		},
		// 页面加载时
		onLoad() {
			uni.getStorage({
				key:"add-input",
				success:(res)=>{
					if (res.data) {
						let result = JSON.parse(res.data)
						this.content = result.content
						this.imageList = result.imageList
					}
				}
			})
		},
		methods: {
			// 底部图片点击事件
			iconClickEvent(e){
				switch (e){
					case 'uploadImage':
					this.$refs.uploadImage.chooseImage()
						break;
				}
			},
			goBack(){
				uni.navigateBack({ delta: 1 });
			},
			// 选中图片
			changeImage(e){
				this.imageList = e
			},
			// 保存操作
			store(){
				// 保存为本地存储
				let obj = {
					content:this.content,
					imageList:this.imageList
				}
				uni.setStorage({
					key:'add-input',
					data:JSON.stringify(obj)
				})
			},
			doComunAdd(){
				console.log(this.imageList)
			}
		}
	}
</script>

<style>
.footer-btn{
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 50rpx;
}
.send-btn{
	background-image: linear-gradient(to right,#FF748C,#FF8BB1);
	border-radius: 10rpx;
}
</style>
