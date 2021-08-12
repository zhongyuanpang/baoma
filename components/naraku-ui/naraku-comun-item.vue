<template>
	<view class="p-2 bg-white">
	
			<!-- 头像昵称 | 关注按钮 -->
			<view class="flex align-center justify-between">
				<view class="flex align-center">
					<!-- 头像 -->
					<image class="rounded-circle mr-2" 
					:src="item.userpic" 
					style="width: 65rpx;height: 65rpx;" 
					lazy-load mode="aspectFill" @click="openSpace"></image>
					<!-- 昵称发布时间 -->
					<view>
						<view class="font" style="line-height: 1.5;">
							{{item.username}}
						</view>
						<text class="font-sm text-light-muted" 
						style="line-height: 1.5;">
							{{item.newstime}}
						</text>
					</view>
				</view>
				<!-- 按钮 -->
				
				<template v-if="!isfollow">
						<view  
							@click="follow" v-if="!item.isFollow"
							class="flex align-center justify-center rounded-circle border border-main  text-main animated faster" 
							style="width: 120rpx;height: 50rpx;"
							hover-class="jello">
							 +关注
						</view>
						<view
							v-else="item.isFollow"
							class="flex align-center justify-center rounded-circle border text-gray   animated faster" 
							style="width: 120rpx;height: 50rpx;"
							hover-class="jello">
							 已关注
						</view>
					</template>
				<template v-else>
					<template v-if="statusbtn==true">
						<view
							v-if="item.isFollow"
							class="flex align-center justify-center rounded-circle border text-gray   animated faster" 
							style="width: 120rpx;height: 50rpx;"
							hover-class="jello">
							 已关注
						</view>
						<view
							@click="follow" v-else="!item.isFollow"
							class="flex align-center justify-center rounded-circle border border-main  text-main animated faster" 
							style="width: 120rpx;height: 50rpx;"
							hover-class="jello">
							 +关注
						</view>
					</template>
					<!-- 取反 -->
					<template v-else-if="!ismy">
						<view  
							class="flex align-center justify-center animated faster" 
							style="width: 120rpx;height: 50rpx;"
							hover-class="jello"
							@click="doDelete"
							>
							 <text class="cuIcon-delete text-gray"></text>
						</view>
					</template>
					<template v-else-if="!ishim">
						<view>
							<!-- 占用 -->
						</view>
					</template>
					
					
				</template>
			
				
			</view>
			<!-- 标题 -->
			<view class="font font-sm my-1" @click="openDetail">{{item.title}}</view>
			<slot> 
			<!-- 存在内容则不进行覆盖 -->
			<!-- 图片 -->
				<image @click="openDetail" v-if="item.titlepic" :src="item.titlepic" 
				style="height: 350rpx;" class="rounded w-100"></image>
			</slot>
			<!-- 图标按钮 -->
			<view class="grid auth-content text-center col-4 mt-2">
				<view class="animated faster" hover-class="jello text-main" 
					@click="doSupport('support')"
					:class="item.support.type === 'support' ? 'support-active' : ''">
					<text class="cuIcon-appreciate mr-2"></text>
					<text>{{item.support.support_count > 0 ? item.support.support_count : '支持'}}</text>
				</view>
				<view class="animated faster"  hover-class="jello text-main" 
					@click="doSupport('unsupport')"
					:class="item.support.type === 'unsupport' ? 'support-active' : ''">
					<view style="transform:rotateX(180deg); display: inline-block;">
						<text class="cuIcon-appreciate mr-2" style=""></text>
					</view>
					<text>{{item.support.unsupport_count > 0 ? item.support.unsupport_count : '反对'}}</text>
			</view>
				<view class="animated faster" hover-class="jello text-main"  @click="doComment">
					<text class="cuIcon-comment mr-2"></text>
					<text>{{item.comment_count > 0 ? item.comment_count : '评论'}}</text>
				</view>
				<view class="animated faster" hover-class="jello text-main"  @click="doShare">
					<text class="cuIcon-forward mr-2"></text>
					<text>{{item.share_num > 0 ? item.share_num : '分享'}}</text>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:{
				type:Number,
				default:-1
			},
			isdetail:{
				type:Boolean,
				default:false
			},
			isfollow:{
				type:Boolean,
				default:false
			},
			statusbtn:{
				type:Boolean,
				default:false
			},
			ismy:{
				type:Boolean,
				default:true
			},
			ishim:{
				type:Boolean,
				default:true
			}
			
		},
		onLoad(){
			console.log(this.ismy)
		},
		data() {
			return {
				
			};
		},
		methods:{
			// 打开个人空间
			openSpace() {
				if(this.ishim==false) return;
				uni.navigateTo({
					url:'/pages/comun/comun-user/comun-user'
				})
			},
			// 关注
			follow(){
				// 通知父组件
				this.$emit('follow',this.index)
				console.log(this.index)
			},
			// 进入详情页
			openDetail(){
				if(this.isdetail) return;
				uni.navigateTo({
					url:'/pages/comun/comun/comun?detail='+JSON.stringify(this.item),
				})
			},
			// 顶踩操作
			doSupport(type){
				// 通知父组件
				this.$emit('doSupport',{
					type:type,
					index:this.index
				})
			},// 评论
			doComment(){
				//二次判断
				if (!this.isdetail) {
					return this.openDetail()
				}
				this.$emit('doComment')
			},
			// 分享
			doShare(){
				console.log("分享")
				this.$emit('doShare')
			},
			doDelete(e){
				console.log(e)
				if(this.ismy==false){console.log("当前用户")}
				uni.showModal({
					content:'是否要删除当前动态',
					showCancel:true,
					cancelText:"不删除",
					confirmText:"删除",
					success:res=>{
						if(res.confirm){
							this.$emit('doDelete',{
								index:this.index
							})
							console.log(
								res.confirm,
								this.index
							)
						}else{
							console.log(res.confirm)
						}
					}
				});
				return true
			}
			


			
			
			
		}
	}
</script>

<style>
	.support-active{
		color: #FF4A6A;
	}
</style>
