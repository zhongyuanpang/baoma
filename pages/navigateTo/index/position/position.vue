<template>
	<view class="address-wrap" id="address">
		<!-- 搜索输入框-start -->

		<view class="search-wrap" :style="{top:windowTop+'px'}">
			<h2>选择城市</h2>
			<view class="searchInfor-input">
				<text class="cuIcon-search" style="color: #9f9f9f;"></text>
				<input type="text" confirm-type="search" class="searchInfor-text" @input="searchInputHandle"
					@confirm="searchConfirmHandle" placeholder="输入国内城市/区域查询" placeholder-style="color:#a9a9a9" />
			</view>
		</view>
		<!-- <view style="height: 12px;"></view> -->
		<!-- 搜索输入框-end -->
		<template v-if="!isSearch">
			<!-- 城市列表-start -->
			<view class="address-scroll">
				<!-- 当前城市 -->
				<view class="address-currentcity" id="start">
					<view class="address-currentcity-title">当前城市</view>
					<view class="address-currentcity-name">
						<text class="current_tcity">{{ city }}</text>
					</view>
				</view>
				<!-- 热门城市 -->
				<view class="address-popularcity">
					<view class="address-popularcity-title">热门城市</view>
					<view class="address-popularcity-name">
						<view class="popular-city" v-for="(item,index) in popularCity" :key="index">{{item.city}}</view>
					</view>
				</view>
				<!-- 选择城市 -->
				<view class="address-choosecity">
					<view class="address-choosecity-con">
						<template v-for="(item,index) in CityList">
							<view class="address-choosecity-item" :key="index" :id="index">
								<view class="choosecity-item-title">{{index}}</view>
								<template v-for="value in item">
									<view class="choosecity-item-li" :key="value.name" @click="chooseCityHandle(value)">
										{{value.name}}
									</view>
								</template>
							</view>
						</template>
					</view>
				</view>

			</view>
			<!-- 城市列表-end -->
			<!-- 对应字母 -->
			<view class="address-letter">
				<!-- 				<view class="address-letter-item" @click="scrollHandle('start')">
					<text class="iconfont">&#xe69f;</text>
				</view> -->
				<template v-for="(item,index) in CityList">
					<view class="address-letter-item" :key="index" @click="scrollHandle(index)">{{index}}</view>
				</template>
			</view>
		</template>
		<!-- 搜索 -->
		<template v-else>
			<view class="search-content">
				<block v-if="searchTotalList.length>0">
					<view class="search-con-item" v-for="item in searchTotalList" :key="item.code"
						@click="chooseCityHandle(item)">{{item.name}}</view>
				</block>
				<block v-else>
					<view class="search-total">无结果</view>
				</block>

			</view>
		</template>
	</view>
</template>

<script>
	import city_list from '@/common/cityList.json'
	import {
		pinyin
	} from 'pinyin-pro';
	export default {
		data() {
			return {
				cityData: city_list.citys,
				searchVal: '',
				SearchList: [], //查询数组
				CityList: {}, //根据拼音排序的城市数据
				windowTop: 0,
				isSearch: false, //是否显示搜索内容，默认：false
				searchTotalList: [], //搜索结果
				popularCity: {},
				city:this.$store.state.city
			};
		},
		onLoad() {
			this.popularCity = city_list.topCitys
			this.dealwithCityData();
		},
		onShow() {
			//获取手机系统信息
			const systemInfo = uni.getSystemInfoSync();
			console.log("[systemInfo]", systemInfo)
			// #ifdef H5 || APP-PLUS || MP-ALIPAY
			this.windowTop = systemInfo.windowTop
			// #endif
		},
		methods: {
			//处理城市数据
			dealwithCityData() {
				let tempCityList = {}; //临时城市数据
				const cityData = this.cityData;
				for (let i = 0; i < cityData.length; i++) {
					if (tempCityList[cityData[i].city] == undefined) {
						tempCityList[cityData[i].city] = [];
					}
					tempCityList[cityData[i].city].push({
						code: cityData[i].code,
						name: cityData[i].city
					})
					let cityList = cityData[i].cityList;
					if (cityList && cityList.length > 0) {
						for (let j = 0; j < cityList.length; j++) {
							if (tempCityList[cityList[j].city] == undefined) {
								tempCityList[cityList[j].city] = []
							}
							tempCityList[cityList[j].city].push({
								code: cityList[j].code,
								name: cityList[j].city
							})
							let areaList = cityList[j].areaList;
							if (areaList && areaList.length > 0) {
								for (let t = 0; t < areaList.length; t++) {
									if (tempCityList[areaList[t].city] == undefined) {
										tempCityList[areaList[t].city] = []
									}
									tempCityList[areaList[t].city].push({
										code: areaList[t].code,
										name: areaList[t].city
									})
								}
							}
						}
					}
				}
				//把数据转换成拼音
				let tempPinYinList = {}; //临时拼音数据
				for (let i in tempCityList) {
					let py = pinyin(i.substring(0, 1), {
						pattern: 'first',
						toneType: 'none'
					}).toUpperCase();
					if (tempPinYinList[py] == undefined) {
						tempPinYinList[py] = [];
					}
					tempPinYinList[py].push(tempCityList[i][0])
				}
				//对数据进行排序
				this.CityList = this.objKeySort(tempPinYinList);
				//生成查询数组
				let tempSearchList = [];
				for (let i in this.CityList) {
					for (let j = 0; j < this.CityList[i].length; j++) {
						tempSearchList.push(this.CityList[i][j])
					}
				}
				this.SearchList = tempSearchList;
			},
			objKeySort(obj) {
				//排序的函数
				var newkey = Object.keys(obj).sort();
				//先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
				var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
				for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
					newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
				}
				return newObj; //返回排好序的新对象
			},
			//搜索
			searchInputHandle(e) {
				let value = e.detail.value;
				if (value.length > 0) {
					this.isSearch = true
					this.searchHandle(value);
				} else {
					this.isSearch = false
				}

			},
			searchConfirmHandle(e) {
				// console.log(e.detail.value)
				let value = e.detail.value;
				if (value.length > 0) {
					this.isSearch = true
					this.searchHandle(value);
				} else {
					this.isSearch = false
				}
			},
			searchHandle(keyWord) {
				const SearchList = this.SearchList;
				let tempSearchTotal = [];
				SearchList.forEach((value, index) => {
					if (value.name.indexOf(keyWord) != -1) {
						tempSearchTotal.push(value)
					}
				})
				this.searchTotalList = tempSearchTotal;
			},
			//点击字母滚动事件
			scrollHandle(index) {
				const query = uni.createSelectorQuery().in(this);
				uni.createSelectorQuery().select("#address").boundingClientRect(data => {
					uni.createSelectorQuery().select("#" + index).boundingClientRect((res) => {
						uni.pageScrollTo({
							duration: 100,
							scrollTop: res.top - data.top - 12, //滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
						})
					}).exec()
				}).exec();
			},
			//选择城市
			chooseCityHandle(params) {
				console.log("选择城市")
				// this.$store.dispatch("user/getPositionAddress", params)
				// uni.switchTab({
				// 	url: '../../pages/game/index'
				// })
			}

		}
	}
</script>


<style lang="scss" scoped>
	.address-wrap {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;

		// 搜索输入框
		.search-wrap {
			// position: fixed;
			// left: 0;
			// right: 0;
			// z-index: 3;
			padding: 20rpx 30rpx;

			&>h2 {
				font-size: 1.7em;
				font-weight: bold;
				margin-bottom: 10rpx;
			}

			.searchInfor-input {
				padding-left: 20rpx;
				border-radius: 16px;
				height: 32px;
				display: flex;
				flex-direction: row;
				background: #f5f5f5;
				align-items: center;
				font-size: 14px;
				margin: auto;

				.search-icon {
					margin-left: 14.5px;
				}

				.searchInfor-text {
					height: 100%;
					flex: 1;
					margin: 0 16px 0 8px;
					font-weight: 400;
				}
			}
		}

		//城市筛选区
		.address-scroll {
			padding: 0rpx 30rpx;
			display: flex;
			flex-direction: column;

			.address-currentcity {
				display: flex;
				flex-direction: column;

				.address-currentcity-title {
					font-size: 1.1em;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #333333;
					margin-top: 15.5px;
				}

				.address-currentcity-name {
					margin: 20rpx 0rpx;

					.current_tcity {
						color: #333333;
						font-size: 0.9em;
						padding: 17rpx 70rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						background-color: #f5f5f5;
						border-radius: 7rpx;
						border: 1px solid #f5f5f5;
					}
				}
			}

			// 热门城市
			.address-popularcity {
				display: flex;
				flex-direction: column;

				.address-popularcity-title {
					font-size: 1.1em;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #333333;
					margin-top: 15.5px;
				}

				.address-popularcity-name {
					margin: 20rpx 0rpx;

					.popular-city {
						display: inline-block;
						margin: 0rpx 30rpx 20rpx 0rpx;
						color: #333333;
						font-size: 0.9em;
						padding: 13rpx 70rpx;
						font-family: Source Han Sans CN;
						background-color: #f5f5f5;
						border: 1px solid #f5f5f5;
						border-radius: 7rpx;
					}
				}
			}



			//选择城市
			.address-choosecity {
				display: flex;
				flex-direction: column;

				.address-choosecity-title {
					font-size: 15px;
					font-family: Source Han Sans CN;
					font-weight: 400;
					margin-top: 15.5px;
				}

				.address-choosecity-con {
					display: flex;
					flex-direction: column;

					.address-choosecity-item {
						display: flex;
						flex-direction: column;

						.choosecity-item-title {
							font-size: 1.2em;
							font-family: Source Han Sans CN;
							font-weight: bold;
							margin-top: 18.5rpx;
						}

						.choosecity-item-li {
							display: inline-block;
							margin: 0rpx 30rpx 20rpx 0rpx;
							color: #333333;
							font-size: 0.9em;
							padding: 13rpx 20rpx;
							font-family: Source Han Sans CN;
							background-color: #f5f5f5;
							border: 1px solid #f5f5f5;
							border-radius: 7rpx;
						}
					}
				}
			}

		}

		//字母
		.address-letter {
			padding: 0 !important;
			position: fixed;
			top: 100px;
			right: 7.5px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			z-index: 10;
			font-family: Source Han Sans CN;
			font-weight: bold;
			align-items: center;

			.address-letter-item {
				padding: 0;
				margin: 0;
				font-size: 0.8em;
				color: #54bab7;
			}
		}

		.search-content {
			display: flex;
			flex-direction: column;
			padding: 10rpx 30rpx;
			background-color: #FFFFFF;

			.search-con-item {
				color: #54bab7;
				border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
				padding: 15rpx 0rpx;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				margin-bottom: 20rpx;
			}

			.search-total {
				height: 100px;
				display: flex;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
