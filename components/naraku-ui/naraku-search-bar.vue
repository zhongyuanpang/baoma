<template>
	<view class="serch-wapper bg-white">
		<view class="searcbox-l margin-sm  " @tap="toPosition">
			<!-- <text class="cuIcon-locationfill padding-sm" style="color: #333333; font-size: 40rpx;"></text> -->
			<image src="https://z3.ax1x.com/2021/08/12/fdabpF.png" style="width:33rpx;height:33rpx;" mode="aspectFit"></image>
			<text style="color: #333333;">{{ city }}</text>
		</view>
		<view class="searcbox-r padding-sm" @tap="toSearch">
			<view class="padding-md search-inner" @tap="toSearch">
				<text class="text-gray cuIcon-search"></text>
				<text class="search-text" style="color: #999999;">搜索职位,公司</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"naraku-search-bar",
		props:{
			item:Object,
			index:Number,
			city:''
		},
		data() {
			return {
			}
		},
		methods:{
			toPosition(){
				uni.navigateTo({
					url:'/pages/navigateTo/index/position/position'
				})
			},
			toSearch(){
				uni.navigateTo({
				  url: '/pages/search/search',
				})
			}
		}
	}
</script>

<style>
	/* 搜索 */
	.serch-wapper{
		padding: 10rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.serch-wapper .searcbox-l{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.serch-wapper .searcbox-r{
		flex: 1;
	}
	.serch-wapper .search-inner{
		border-radius: 50rpx;
		width: 100%;
		padding: 8px;
		background-color: #F6F6F6;
	}
	
	.serch-wapper .search-inner .search-text{
		display: inline-block;
		text-indent: 1em;
		font-size: .9em;
	}
	
</style>
