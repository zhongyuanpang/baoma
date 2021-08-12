<template>
	<view>
		<view class="suggest">
			<view>问题和意见<text style="color: red;">*</text></view>
			<view>{{textareaVal.length}}/100</view>
		</view>
		<!-- 填写意见 -->
		<view class="edit-suggest">
			<textarea @input="textareaAInput" maxlength="100" placeholder="请填写您的功能建议，感谢您的支持~"></textarea>
		</view>
		<view style="padding: 10rpx 40rpx;color: #999999;font-size: 0.9em;">
			图片（选填，提供问题截图）
		</view>
		<!-- 图片上传 -->
		<view class="upload-image">
			<view class='upload-image-view'>
				<block v-for="(image,index) in imageList" :key="index">
					<view class='image-view'>
						<image :src="image" :data-src="image" @tap="previewImage"></image>
						<view class='del-btn' :data-index="index" @tap='deleteImage(index)'>
							<view class='baicha'></view>
						</view>
					</view>
				</block>
				<view class='add-view' v-if="imageList.length < imageLength" @tap="chooseImage">
					<!-- 十字架 -->
					<view class="cross">
						<view class="transverse-line"></view>
						<view class="vertical-line"></view>
					</view>
				</view>
			</view>
		</view>

		<view style="padding: 10rpx 40rpx;color: #999999;font-size: 0.9em;">
			联系方式
		</view>

		<view class="connect">
			<input class="uni-input" @input="onKeyInput" placeholder="填写您的手机或邮箱" />
		</view>

		<!-- 提交按钮 -->
		<view class="submit-btn">
			<button>提交</button>
		</view>
	</view>
</template>

<script>
	var sourceType = [
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
	]
	var sizeType = [
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
	]
	export default {
		data() {
			return {
				textareaVal: '',
				imageList: [], //保存图片路径集合
				imageLength: 3, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				inputValue: '',

			};
		},
		methods: {
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			textareaAInput(e) {
				this.textareaVal = e.detail.value
			},
			//选择图片
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// #endif
					count: this.imageLength - this.imageList.length,
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
					}
				})
			},
			//预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			//删除图片
			deleteImage: function(e) {
				var index = e;
				var that = this;
				var images = that.imageList;
				images.splice(index, 1);
				that.imageList = images;
			}
		}
	}
</script>

<style lang="less">
	.suggest {
		padding: 10rpx 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #999999;
	}

	.edit-suggest {
		padding: 10rpx 30rpx;

		&>textarea {
			background-color: white;
			width: 100%;
			border-radius: 20rpx;
			padding: 20rpx 0rpx 0rpx 20rpx;
			height: 400rpx;
		}
	}

	.upload-image {
		padding: 0rpx 30rpx;

		/* 第一套图片上传样式（内部图标相机） */
		.upload-image-view {
			border-radius: 20rpx;
			padding: 20rpx 30rpx;
			width: 100%;
			margin: 20rpx 0 20rpx 0;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			background-color: white;
		}

		.upload-image-view .title {
			width: 100%;
			font-family: PingFang-SC-Regular;
			font-size: 24upx;
			color: #4a4a4a;
			margin-bottom: 15upx;
			line-height: 100%;
		}

		.upload-image-view .info {
			width: 100%;
			font-family: PingFang-SC-Regular;
			font-size: 24upx;
			color: #ff4259;
			height: 24upx;
			margin-top: 15upx;
			line-height: 24upx;
		}

		.upload-image-view .image-view {
			height: 130upx;
			width: 130upx;
			position: relative;
			margin: 15upx 15upx 15upx 0upx;
			border-radius: 8upx;
		}

		.upload-image-view .image-view image {
			height: 100%;
			width: 100%;
			border-radius: 8upx;
		}

		.upload-image-view .image-view .del-btn {
			background-color: #f67371;
			border-radius: 50%;
			width: 25upx;
			height: 25upx;
			position: absolute;
			top: -12upx;
			right: -12upx;
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.upload-image-view .image-view .del-btn .baicha {
			display: inline-block;
			width: 20upx;
			height: 5upx;
			background: #fff;
			line-height: 0;
			font-size: 0;
			vertical-align: middle;
			-webkit-transform: rotate(45deg);
		}

		.upload-image-view .image-view .del-btn .baicha:after {
			content: '/';
			display: block;
			width: 20upx;
			height: 5upx;
			background: #fff;
			-webkit-transform: rotate(-90deg);
		}

		.upload-image-view .add-view {
			height: 115upx;
			width: 115upx;
			margin: 15upx 15upx 15upx 0upx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: rgba(255, 255, 255, 0.00);
			border: 3upx dashed #979797;
			border-radius: 8upx;
		}


		/* 十字架 */
		.upload-image-view .add-view .cross {
			height: 48upx;
			width: 48upx;
			display: flex;
			flex-wrap: wrap;
			position: relative;
		}

		.upload-image-view .add-view .cross .transverse-line {
			height: 100%;
			width: 48%;
			position: absolute;
			border-right: 3upx solid #5A5A5A;
			top: 0;
			left: 0;
		}

		.upload-image-view .add-view .cross .vertical-line {
			height: 48%;
			width: 100%;
			position: absolute;
			border-bottom: 3upx solid #5A5A5A;
			top: 0;
			left: 0;
		}
	}

	// 联系方式
	.connect {
		padding: 0rpx 30rpx;
		height: 100rpx;

		&>input {
			height: 100rpx;
			padding: 20rpx;
			border-radius: 20rpx;
		}
	}

	// 提价按钮
	.submit-btn {
		padding: 50rpx 30rpx 0rpx 30rpx;

		&>button {
			color: white;
			background-image: linear-gradient(to right, #FF748C, #FF8BB1);
			border-radius: 50rpx;
		}
	}
</style>
