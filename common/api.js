import {apiResquest} from './http.js'

/**
 * 用户登录
 * 
| 名称     | 类型   | 说明                               |
| -------- | ------ | ---------------------------------- |
| code     | String | 调用wx.login所产生的code           |
| userInfo | Object | 调用getUserProfile所产生的userInfo |
 */
export const login = (code,userInfo) => {
	return apiResquest({
		url: '/login',
		data:{
			code:code,
			userInfo:userInfo
		},
		method: 'POST',
	})
}

/**
 * 用户首页数据渲染
| 名称    | 类型   | 说明     |
| ------- | ------ | -------- |
| user_id | Number | 用户的id |
 */
export const home = (user_id) => {
	return apiResquest({
		url: '/user/home',
		data:{
			user_id:user_id,
		},
		method: 'GET',
	})
}

/**
 * 首页数据列表
| 名称      | 类型   | 说明                                                |
| --------- | ------ | --------------------------------------------------- |
| keyword   | String | 搜索时的关键字，非必需，默认为空字符串              |
| pageIndex | Number | 列表上拉加载数据使用啊(与分页一样)，非必需，默认为1 |
| pageSize  | Number | 一次展示多少条数据，非必需，默认为10                |
| city      | String | 兼职所在的城市，非必需，默认为长沙                  |
 */
export const workList = (keyword,pageIndex,pageSize,city) => {
	return apiResquest({
		url: '/work/list',
		data:{
			keyword:keyword,
			pageIndex:pageIndex,
			pageSize:pageSize,
			city:city
		},
		method: 'GET',
	})
}


/**
 *	兼职详情
| 名称    | 类型   | 说明                                            |
| ------- | ------ | ----------------------------------------------- |
| work_id | Number | 兼职的id，必须                                  |
| user_id | Number | 用户的id,用来查找用户是否收藏了这个工作，非必需 |
 */
export const workInfo = (work_id,user_id) => {
	return apiResquest({
		url: '/work/info',
		data:{
			work_id:work_id,
			user_id:user_id
		},
		method: 'GET',
	})
}

/**
 * 公司详情页
| 名称       | 类型   | 说明   |
| ---------- | ------ | ------ |
| company_id | Number | 公司id |
*/
export const companyInfo = (company_id) => {
	return apiResquest({
		url: '/company/info',
		data:{
			company_id:company_id
		},
		method: 'GET',
	})
}


/**
 * 用户报名
| 名称    | 类型   | 说明     |
| ------- | ------ | -------- |
| user_id | Number | 用户的id |
| work_id | Number | 兼职的id |
 */
export const signWork = (user_id,work_id) => {
	return apiResquest({
		url: '/user/signWork',
		data:{
			user_id:user_id,
			work_id:work_id
		},
		method: 'POST',
	})
}

/**
 * 用户收藏兼职
| 名称    | 类型   | 说明           |
| ------- | ------ | -------------- |
| work_id | Number | 要收藏的兼职id |
| user_id | Number | 用户id         |
 */
export const workCollect = (work_id,user_id) => {
	return apiResquest({
		url: '/user/work/collect`',
		data:{
			work_id:work_id,
			user_id:user_id
		},
		method: 'POST',
	})
}


/**
 * 用户取消收藏兼职 
| 名称    | 类型   | 说明             |
| ------- | ------ | ---------------- |
| work_id | Number | 取消收藏的兼职id |
| user_id | Number | 该用户id         |
 */
export const cancelCollect = (work_id,user_id) => {
	return apiResquest({
		url: '/user/work/cancelCollect',
		data:{
			work_id:work_id,
			user_id:user_id
		},
		method: 'GET',
	})
}


/**
 * 报名单 
| 名称    | 类型   | 说明                                                         |
| ------- | ------ | ------------------------------------------------------------ |
| user_id | Number | 用户id                                                       |
| status  | String | 通过报名单的状态进行查找{progress:"进行中",signup:"已报名",end:"已完成"} |
 */
export const signup = (user_id,status) => {
	return apiResquest({
		url: '/user/work/status',
		data:{
			user_id:user_id,
			status:status
		},
		method: 'GET',
	})
}


/**
 * 更新用户简历
| 名称    | 类型   | 说明       |
| ------- | ------ | ---------- |
| user_id | Number | 用户id     |
| data    | Object | 更新的数据 | 
 */
export const updateInfo = (user_id,data) => {
	return apiResquest({
		url: '/user/updateInfo',
		data:{
			user_id:user_id,
			data:data
		},
		method: 'POST',
	})
}

/**
 * 广场帖子列表
| 名称      | 类型   | 说明                                        |
| --------- | ------ | ------------------------------------------- |
| pageIndex | Number | 上拉加载数据的index 自己去计算 非必需 默认1 |
| pageSize  | Number | 一页展示多少条数据 非必需 默认10            |
 */
export const postsList = (pageIndex,pageSize) => {
	return apiResquest({
		url: '/posts/list',
		data:{
			pageIndex:pageIndex,
			pageSize:pageSize
		},
		method:'GET',
	})
}

/**
 * 帖子详情
| 名称     | 类型   | 说明     |
| -------- | ------ | -------- |
| posts_id | Number | 帖子的id |
 */
export const postsDetail = (posts_id) => {
	return apiResquest({
		url:'/posts/desc',
		data:{
			posts_id:posts_id
		},
		method:'GET',
	})
}


/**
 * 发表评论
| 名称     | 类型   | 说明        |
| -------- | ------ | ----------- |
| user_id  | Number | 用户id 必填 |
| posts_id | Number | 帖子id 必填 |
| content  | String | 内容 必填   | 
 */
export const comment = (user_id,posts_id,content) => {
	return apiResquest({
		url:'/posts/comment',
		data:{
			user_id:user_id,
			posts_id:posts_id,
			content:content
		},
		method:'POST',
	})
}

/**
 * 关注用户
| 名称           | 类型   | 说明             |
| -------------- | ------ | ---------------- |
| user_id        | Number | 用户的id         |
| follow_user_id | Number | 被关注的用户的id |
 */
export const follow = (user_id,follow_user_id) => {
	return apiResquest({
		url:'/user/follow',
		data:{
			user_id:user_id,
			follow_user_id:follow_user_id
		},
		method:'POST',
	})
}

/**
 * 取消关注
| 名称           | 类型   | 说明           |
| -------------- | ------ | -------------- |
| user_id        | Number | 用户的id       |
| Follow_user_id | Number | 被关注的人的id | 
 */
export const unFollow = (user_id,Follow_user_id) => {
	return apiResquest({
		url:'/user/unFollow',
		data:{
			user_id:user_id,
			Follow_user_id:Follow_user_id
		},
		method:'POST',
	})
}