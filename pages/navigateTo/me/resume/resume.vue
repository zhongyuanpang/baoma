<template>
	<view class="header-content">
		<view :style="{height: stateBarHeight + 'px'}"></view>
		<view :style="{height: tabBarHeight + 'px'}" class="header-tabBar">
			<view :style="{height: searchHearch + 'px', width: windowWidth + 'px'}">
				<view class="goBlack"><text class="cuIcon-back" @click="goBack"></text></view>
				<view class="title">完善简历</view>
			</view>
		</view>
		<view class="content">
			<view>
				<image :src="avatarUrl" @error="imageError"></image>
				<view>更改头像</view>
			</view>
		</view>
		<view class="from_submit">
			<form @submit="formSubmit" @reset="formReset">
				<!-- 姓名 -->
				<view class="uni-form-item uni-column">
					<view class="label">姓名</view>
					<input class="input" name="nickname" placeholder="请输入您的真实名字" />
				</view>
				<!-- 生日 -->
				<view class="uni-form-item uni-column">
					<view class="label">生日</view>
					<view class="date_picker input">
						<view>
							<picker mode="date" :value="date" start="1970" end="2021" @change="bindDateChange">
								<view class="picker">
									{{date}}
								</view>
							</picker>
						</view>
						<view><text class="cuIcon-unfold"></text></view>
					</view>
				</view>
				<!-- 学校 -->
				<view class="uni-form-item uni-column">
					<view class="label">学校</view>
					<input class="input" name="school" placeholder="请输您的学校名称" />
				</view>
				<!-- 学历 -->
				<view class="uni-form-item uni-column">
					<view class="label">学历</view>
					<picker class="input" @change="bindPickerChange" :value="index" :range="array">
						<view>{{array[index]}}</view>
					</picker>
				</view>
				<!-- 入学年份 -->
				<view class="uni-form-item uni-column">
					<view class="label">入学年份</view>
					<!-- <input class="input" name="nickname" placeholder="请选择您的学历" /> -->
<!-- 					<picker class="input" @change="bindPickerChange" fields="year" :value="index" :range="array">
						<view>{{array[index]}}</view>
					</picker> -->
					<picker mode="date" class="input" :value="year" fields="year" start="1970" end="2021" @change="bindYearChange">
						<view class="picker">
							{{year}}
						</view>
					</picker>
				</view>
				<!-- 专业 -->
				<view class="uni-form-item uni-column">
					<view class="label">专业</view>
					<input class="input" name="major" placeholder="请输入您的专业" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit" class="submit_btn">完成</button>
				</view>
			</form>
		</view>
	</view>

</template>

<script>
	var graceChecker = require("../../../../common/graceChecker.js");
	export default {
		data() {
			return {
				stateBarHeight: 0,
				tabBarHeight: 50,
				searchHearch: 30,
				windowWidth: 0,
				avatarUrl: 'https://img0.baidu.com/it/u=2547746174,548823622&fm=26&fmt=auto&gp=0.jpg',
				date: '请选择您的生日',
				array: ['中专/中技', '高中', '大专', '本科', '硕士', '博士'],
				index: 0,
				year:'请选择入学年份',
				// 表单验证
				rule: [{
					name: "nickname",
					checkType: "string",
					checkRule: "1,3",
					errorMsg: "姓名应为1-3个字符"
				}],
			}
		},
		created() {
			// 获取设备信息
			this.getStateBarHeight();

			// 获取小程序右侧悬浮按钮
			// #ifdef MP-WEIXIN
			this.getMenuButtonInfo();
			// #endif
		},
		methods: {
			getStateBarHeight() {
				let info = uni.getSystemInfoSync()
				this.stateBarHeight = info.statusBarHeight
				this.windowWidth = info.windowWidth
			},
			getMenuButtonInfo() {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()

				let paddingSize = menuButtonInfo.top - this.stateBarHeight
				this.searchHearch = menuButtonInfo.height


				this.tabBarHeight =
					(menuButtonInfo.bottom - this.stateBarHeight) +
					paddingSize

				this.windowWidth = menuButtonInfo.left
			},
			// 返回上一页
			goBack(){
				uni.navigateBack({})
			},
			// 提交表单
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				//进行表单检查
				let formData = e.detail.value;
				let checkRes = graceChecker.check(formData, this.rule);
				if (checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "success"
					});
					uni.navigateTo({
						url: '../me'
					})
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			// 日期选择
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			// 年份选择
			bindYearChange: function(e) {
				this.year = e.target.value
			},
			// 学历选择
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>
	.header-content {
		background-image: linear-gradient(to right, #FF5370, #FF99B1);

		.header-tabBar {
			width: 100%;
			display: flex;
			align-items: center;

			&>view {
				display: flex;
				flex-direction: row;
				color: white;
				align-items: center;

				.goBlack {
					font-size: 1.2em;
					flex: 1;
					padding: 0rpx 20rpx;
				}

				.title {
					font-size: 1.1em;
					flex: 3;
					display: flex;
					justify-content: center;
				}
			}
		}

		.content {
			background-image: linear-gradient(to right, #FF5370, #FF99B1);
			height: 300rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;

			&>view {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				&>image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 50%;
				}

				&>view {
					margin-top: 10rpx;
				}
			}
		}

		.from_submit {
			background-color: white;
			border-top-right-radius: 30rpx;
			border-top-left-radius: 30rpx;
			padding: 20rpx 40rpx;

			.label {
				color: #333333;
				padding: 10rpx 0rpx;
				font-size: 1em;
				font-weight:600;
			}

			.input {
				background-color: #F6F6F6;
				height: 100rpx;
				border-radius: 15rpx;
				font-size: 1.1em;
				padding-left: 20rpx;
				display: flex;
				align-items: center;
				flex-direction: row;

			}

			.date_picker {
				display: flex;
				flex-direction: row;

				&>view:nth-child(1) {
					flex: 1;
				}

				&>view:nth-child(2) {
					padding-right: 20rpx;
					font-size: 1.1em;
					color: #333333;
				}
			}
			.submit_btn{
				background-image: linear-gradient(to right,#FF748C,#FF8BB1);
				color: white;
				border-radius: 20rpx;
				padding: 10rpx 0rpx;
			}
		}
	}
</style>
