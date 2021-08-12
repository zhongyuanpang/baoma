<template>
	
	
	  <form>
	    <view class="cu-form-group margin-top">
	      <view class="title">修改头像</view>
	      <view class="cu-avatar radius bg-gray">
	        <image class="" src="" mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload="" />
	      </view>
	    </view>
	
	    <view class="cu-form-group">
	      <view class="title">姓名</view>
	      <input placeholder="请输入真实姓名"></input>
	    </view>
	
	    <view class="cu-form-group">
	      <view class="title">年龄</view>
	      <input type="number" placeholder="请输入年龄"></input>
	    </view>
	
	
	   	<view class="cu-form-group">
	      <view class="title">联系方式</view>
	      <input placeholder="请输入手机号"></input>
	      <view class="cu-capsule radius">
	        <view class="cu-tag bg-blue">
	          +86
	        </view>
	        <view class="cu-tag line-blue">
	          中国大陆
	        </view>
	      </view>
	    </view>
	
	    <!-- 请选择您的地址 -->
	    
	
	    <!--  -->
	    <view class="cu-form-group margin-top">
	      <textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="修改个人介绍"></textarea>
	    </view>
	    
	    <!-- 提交表单-->
	    <view class="padding flex flex-direction">
	      <button class="cu-btn bg-cyan lg">
	          保存修改
	      </button>
	    </view>
	      
	    
	  </form>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			}
		},
		methods: {
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style>

</style>
