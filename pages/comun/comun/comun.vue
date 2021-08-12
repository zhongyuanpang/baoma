<template>
	<view class="">
	<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
	@scrolltolower="loadmoreEvent"
	>
		<narakuComunItem :item="info" isdetail
		@doComment="doComment" @doShare="doShare"
		@follow = "follow"
		@doSupport="doSupport"
		>
			<view>{{info.content}}</view>
			<view>
				<image v-for="(item,index) in info.images" @click="preview(index)"
				:src="item.url" class="w-100" mode="widthFix"></image>
			</view>
		</narakuComunItem>
		
		<divider></divider>
		
	 <view class="bg-white">
			<view class="p-2 font-md ">
				最新评论
			</view>
			
			<view class="flex justify-between padding-lr-sm" >
				<view class="flex justify-center align-center">
					<image class="rounded-circle "
					src="/static/avatar2.jpg" 
					style="width: 65rpx;height: 65rpx;"
					mode="aspectFill"
					>
					</image>
				</view>
				<view class="w-100  margin-sm">
					<view class="p-2  rounded-circle" style="background-color: #F6F6F6;">
						<text class="ml-2 text-gray">写条评论吧~</text>
					</view>
				</view>
			</view>
			<view class="px-2">
				<template v-if="commentList.length > 0">
					<block v-for="(item,index) in  commentList" :key="index">
						<comment-list-item
							:item="item"
							:index="index"
						></comment-list-item>
					</block>
					<load-more
						:loadmore="loadmore"
					></load-more>
					<!-- <view class="flex justify-center align-center p-3">
						<text class="text-gray">没有更多评论了</text>	
					</view> -->
				</template>
				<template v-else>
					<notThing
						:isfill="isfill"
						:url="ontingPic"
						:title="ontingTitle"
					></notThing>
				</template>
				</view>
			
			
<!-- 			<view style="height: 120rpx;"></view>
 -->		</view>
		
		
		<bottom-input
			@submit="submit"
		/>
		</scroll-view>
	</view>
</template>

<script>
	const demo = [
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员1',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员2',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员3',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员3',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员3',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员3',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		{
			avatar:"/static/avatar2.jpg",
			nickname:'测试人员3',
			content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
			data_time:1628643739
		},
		
		
	]
	
	import narakuComunItem from "@/components/naraku-ui/naraku-comun-item.vue"
	import bottomInput from "@/components/naraku-ui/bottom-input.vue"
	import commentListItem from "@/components/naraku-ui/comment_list_item.vue"
	import notThing from "@/components/common/no-thing.vue"
	import loadMore from '@/components/common/load-more.vue';
	
	export default {
		data() {
			return {
				//当前帖子信息
				info:{
					username:"昵称",
					userpic:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					newstime:"2019-10-20 下午04:30",
					isFollow:false,
					title:"我是标题",
					titlepic:"/static/demo/datapic/11.jpg",
					support:{
						type:"support", // 顶
						support_count:1,
						unsupport_count:2
					},
					comment_count:2,
					share_num:2,
					content:"文章简介描述",
					images:[{
						url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/4.jpg"
					},{
						url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/5.jpg"
					}],
					comment_list:[
						{
							avatar:"/static/avatar2.jpg",
							nickname:'测试人员',
							content:'我也是，从朋友圈看到的，没想到发现一个这么好的平台。',
							data_time:1628643739
						},
					]
				},
				comentItem:{
					
				},
				commentList:[],
				isfill:false,
				scrollH:250,
				loadmore:"上拉加载更多",
				ontingPic:"../../static/images/null/comment_null.png",
				ontingTitle:"还没有人评论"
			}
		},
		components:{
			narakuComunItem,
			bottomInput,
			commentListItem,
			notThing,
			loadMore
		},
		onLoad(e) {
			// 初始化
			if (e.detail) {
				this.__init(JSON.parse(e.detail))
			}
			
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			})
			this.commentList = demo
		},
		methods: {
			__init(data){
				// 修改标题
				uni.setNavigationBarTitle({
					title:data.title
				})
				// 请求api
			},
			// 点击评论
			doComment(){
				
			},
			// 点击分享
			doShare(){
				
			},
			follow(){
				this.info.isFollow = true
				uni.showToast({
					title:"关注成功"
				})
			},
			// 顶踩操作
			doSupport(e){
				// 之前操作过
				if (this.info.support.type === e.type) {
					return uni.showToast({
						title: '你已经操作过了',
						icon: 'none'
					});
				}
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (this.info.support.type === '') {
					this.info.support[e.type+'_count']++
				}else if(this.info.support.type === 'support' && e.type === 'unsupport'){				
					// 顶 - 1
					this.info.support.support_count--;
					// 踩 + 1
					this.info.support.unsupport_count++;
				}else if(this.info.support.type === 'unsupport' && e.type === 'support'){			   
					// 顶 + 1
					this.info.support.support_count++;
					// 踩 - 1
					this.info.support.unsupport_count--;
				}
				this.info.support.type = e.type
				uni.showToast({
					title: msg
				});
			},
			// 预览图片
			preview(index){
				// 预览图片
				uni.previewImage({
					current:index,
					urls:this.imagesList
				});
			},
			loadmoreEvent(){
				if (this.loadmore !== '上拉加载更多') return;
				this.loadmore = '加载中...'
				setTimeout(()=>{
					this.commentList = [...this.commentList,...this.commentList]
					this.loadmore = '上拉加载更多'
				},2000)
			},
			submit(data){
				console.log(data)
			}
		}
	}
</script>

<style>

</style>
