<template>
	<view class="index">
			<view class="edit_info">
				<view class="uni-padding-wrap uni-common-mt">
					<view class="desc_title">
						<view>请填写个人信息</view>
						<view>Please fill in your personal information</view>
					</view>
					<form @submit="formSubmit" @reset="formReset">
						<view class="uni-form-item uni-column">
							<view class="title">姓名</view>
							<input class="uni-input" name="nickname" placeholder="请输入姓名" />
						</view>
						<view class="uni-form-item uni-column">
							<view class="title">年龄</view>
							<slider value="20" name="age" show-value></slider>
						</view>
						<view class="uni-form-item uni-column">
							<view class="title">地址</view>
							<!-- <input class="uni-input" @click="handleGetRegion"  name="city" placeholder="请选择地址" /> -->
							<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
							    <!-- <view style="flex: 1;">点击选择省市区</view> -->
								<!-- <view>{{regionName}}</view> -->
								<input type="text" name="address" :value="regionName" placeholder="请选择地址" disabled/>
							</pick-regions>
						</view>
						<view class="uni-form-item uni-column">
							<view class="title">手机</view>
							<input class="uni-input" name="phone" placeholder="请输入您的手机号" />
						</view>
	
						<view class="uni-btn-v">
							<button form-type="submit" type="primary">完成</button>
						</view>
					</form>
				</view>
			</view>
		</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue'
	var graceChecker = require("../../../../common/graceChecker.js");
	export default {
		components:{ pickRegions },
		data() {
			return {
				// 表单验证
				rule: [{
					name: "nickname",
					checkType: "string",
					checkRule: "1,3",
					errorMsg: "姓名应为1-3个字符"
				},{
					name:"phone",
					checkType: "string",
					checkRule:"1,100",
					errorMsg: "手机号不能为空"
				},
				{
					name:"phone",
					checkType: "phoneno",
					errorMsg: "手机号格式不正确"
				}],
				// 城市选择器
				region:[],
				//默认行政区划代码、湖南省，长沙市，雨花区
				defaultRegionCode:'430111'
			}
		},
		methods: {
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
						url:'../me'
					})
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			// 重置表单
			// formReset: function(e) {
			// 	console.log('清空数据')
			// },
			// 获取选择的地区
			handleGetRegion(region){
			    this.region = region
			}
		},
		computed:{
            regionName(){
                // 转为字符串
                return this.region.map(item=>item.name).join(' ')
            }
        },
	}
</script>

<style>
	html{
		background-color: white
	}
	.edit_info {
		margin: 20rpx;
		padding: 20rpx;
		border-radius:20rpx;
		box-shadow: 0 5rpx 20rpx rgba(0, 0, 0, 0.2);
	}
	.desc_title{margin-bottom: 40rpx;}
	.desc_title>view:nth-child(1){padding: 10rpx 0rpx; font-size: 1.8em;font-weight: bold;}
	.desc_title>view:nth-child(2){font-size: 0.8em;}
	.uni-form-item .title {padding: 20rpx 0;}
	.uni-column{border-bottom: 1px solid #a9a9a9;border-radius: 10rpx;}
	.uni-column input{height: 60rpx;margin-bottom: 10rpx;}
	.uni-btn-v{margin: 150rpx 0rpx 30rpx 0rpx;}
</style>
