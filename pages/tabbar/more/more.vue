<template>
	<view class="bg-white" style="height: 100%;">
		<!-- 搜索组件 -->
		<naraku-search-bar
			:city="city"
		 />
		
		
		<!-- 筛选分类 -->
		<view class="grid auth-content text-center padding-sm col-3">
			<view class="">
				<text>类型</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>
				
			<view class="">
				<text>区域</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>	
			
			<view class="">
				<text>排序</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>	
		</view>
		
		<!-- 下方列表项 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
		@scrolltolower="loadmoreEvent"
		>
			<template v-if="list.length">
				<block v-for="(item,index) in list"  :key="index">
					<naraku-more-item  :item="item" :index="index"/>
					<view style="height: 1rpx; background-color: #F5F5F5;" class="w-100"></view>
				</block>
				<load-more
					:loadmore="loadmore"
				></load-more>
			</template>
			<template v-else>
				<noThing :url="ontingPic" :title="ontingTitle">
				</noThing>
			</template>
		</scroll-view>
		
	</view>
</template>

<script>
	const demo = [
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住'],
			price:'450',
			date:'刚刚' //需转换
			
		},
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住','日结','日结'],
			price:'450',
			date:'刚刚' //需转换
			
		},
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住'],
			price:'450',
			date:'刚刚' //需转换
			
		},
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住'],
			price:'450',
			date:'刚刚' //需转换
			
		},
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住'],
			price:'450',
			date:'刚刚' //需转换
			
		},
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住'],
			price:'450',
			date:'刚刚' //需转换
			
		},
		{
			title:'猫娘CosPlay咖啡店',
			addres:'长沙 | 湖南 长沙cosplay约拍 猫娘乐园长沙',
			tag:['日结','不包吃不包住'],
			price:'450',
			date:'刚刚' //需转换
			
		},
	]
	import noThing from '@/components/common/no-thing.vue';
	import narakuSearchBar from "@/components/naraku-ui/naraku-search-bar.vue"
	import narakuMoreItem from "@/components/naraku-ui/naraku-more-item.vue"
	import loadMore from '@/components/common/load-more.vue';
	export default {
	  data () {
		return {
			list:[],
			city:'',
			ontingPic:"../../static/images/null/wanlo_null.png",
			ontingTitle:"网络开小差了~",
			scrollH:250,
			loadmore:"上拉加载更多",
			
		};
	  },
	
	  components: {
		  narakuSearchBar,
		  narakuMoreItem,
		  loadMore,
		  noThing
	  },
	  created() {
	  	// 获取设备信息
	  	this.getStateBarHeight();
	  	// #ifdef MP-WEIXIN
	  	this.getMenuButtonInfo();
	  	// #endif
	  },
	  onLoad(){	
		  uni.getLocation({
		      type: 'gcj02', //返回可以用于uni.openLocation的经纬度
		      success:(res)=>{
		  		let that=this
		          const latitude = res.latitude;
		          const longitude = res.longitude;
		          uni.request({
		  			header:{
		  				"Content-Type": "application/text"
		  			},
		  			//注意:这里的key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
		  			url:'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location='+res.longitude+','+res.latitude+'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
		  			success(re) {
		  				if(re.statusCode===200){
		  					that.citydata=re.data.regeocode.addressComponent.city
		  					that.city = that.citydata
		  					that.$store.commit('setCity',that.citydata)
		  					that.city = that.$store.state.city
		  					// console.log(that.$store.state.city,"vuex取值")
		  					// console.log("获取中文街道地理位置成功",that.citydata)
		  					
		  				}else{
		  					console.log("获取信息失败，请重试！")
		  				}
		  			 }
		  		});
		      }
		  });
		  uni.getSystemInfo({
		  	success:res=>{
		  		this.scrollH = res.windowHeight - res.statusBarHeight - 44
		  	}
		  })
		  this.list = demo
	  },
	  methods:{
		// 上拉加载
		loadmoreEvent(){
			// 验证是否处于可加载
			if (this.loadmore !== '上拉加载更多') return;
			// 设置加载状态
			this.loadmore = '加载中...'
			setTimeout(()=>{
				// 加载数据
				this.list = [...this.list,...this.list]
				// 设置加载状态
				this.loadmore = '上拉加载更多'
			},2000)
		},
	  },
	
	 
	}
</script>

<style>
</style>
