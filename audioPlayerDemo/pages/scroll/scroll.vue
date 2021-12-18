<template>
    <view>
		{{"当前URL为:"+URL}}
        <web-view  :src="src" :webview-styles="webviewStyles"></web-view>
		<button type="primary" @click="getUrl()">url</button>
    </view>
</template>

<script>
let wv;
export default {
	data(){
		return{
			webviewStyles:{
				progress:false
			},
			URL:'',
			src:'http://www.baidu.com/'
		}
	},
	
	onShow() {

	},
	
	
	onUnload() {
	},
	
    onLoad() {
		// #ifdef APP-PLUS
		let currentWebview = this.$scope.$getAppWebview() 
		setTimeout(function() {
		wv = currentWebview.children()[0]	//获取当前webview页面
		console.log("当前webview窗口:"+wv.getURL())	
			
		wv.addEventListener('loading',function(){
			console.log("开始加载:"+wv.getURL())
			uni.showLoading({
				title:"加载中"
			})
		},false)
			
		wv.addEventListener('loaded',function(){
			uni.hideLoading()
		},false);
		
		}, 1500); //如果是页面初始化调用时，需要延时一下
		// #endif
    },
		
		methods:{
			getUrl(){
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];  
				var currentWebview = page.$getAppWebview();  
				let url = currentWebview.children()[0].getURL(); 
				this.URL = url
				console.log("当前URL:"+this.URL)
				console.log("当前src:"+this.src)
			},
			
	
		}
    };
</script>

<style>

</style>