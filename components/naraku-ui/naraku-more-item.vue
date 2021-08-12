<template>
	<view class="flex padding-lr-lg padding-tb-sm justify-between mt-1">
		<view class="">
			<view class="m-1">
				<text class="d-block  font-weight-bold">{{item.title}}</text>
				<text class="d-block w-100 addres text-grey">
						{{item.addres}}
				</text>
			</view>
			<block v-for="(item,index) in item.tag" :key="index">
				<view class="card-tag padding-lr-md">
					<text>{{item}}</text>
				</view>
			</block>
			
		</view>
		
		
		
		<view class="">
			<text class="font-weight-bold d-block" style="color: #FF5F5F;">{{item.price}}/天</text>
			<text class="d-block text-right">{{item.date}}</text>
		</view>
	</view>
</template>

<script>
	/* 
	 {
	 	title:'猫娘CosPlay咖啡店',
	 	addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
	 	tag:['日结','不包吃不包住'],
	 	price:'450',
	 	date:'刚刚' //需转换
	 	
	 },*/
	export default {
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style  lang="less">
	.card-tag{
		display: inline-block;
		padding: 5rpx 25rpx;
		margin:1rpx;
		margin-left: 10rpx;
		background-color: #FFF2E4;
		border-radius: .2rem;
		text{
			color: #DB9654;
			font-size: .8em;
		}
	}
</style>
