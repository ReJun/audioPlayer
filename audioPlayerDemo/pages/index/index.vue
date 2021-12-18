<template>
	<view class="audioPlayer">
		<view class="player" >
			<view class="coverPage animation-shake">
				<image  style="width: 90rpx; height: 90rpx; border-radius: 10rpx;" src="../../static/avatar.jpg"></image>
			</view>
			<view class="buttonGroup">
				<view class="buttonStyle icon-backward2" @click="backward()"></view>
				<view class="buttonStyle icon-play3"  @click="play()" v-if="playButtonShow"></view>
				<view class="buttonStyle icon-pause2"  @click="pause()" v-if="pauseButtonShow"></view>
				<view class="buttonStyle icon-forward3" @click="forward()"></view>
			</view>
			<view class="iconGroup">
				<view class="iconStyle icon-loop" @click="list()" v-show="listCycle"></view>
				<view class="iconStyle icon-loop2" @click="single()" v-show="singleCycle"></view>
				<view class="iconStyle icon-shuffle" @click="random()" v-show="randomCycle"></view>
				<view class="iconStyle icon-menu" @click="menuList()" v-show="menuShow"></view>
			</view>
			
			<view class="audioMessage">
				<p>{{audioName}}</p>
			</view>
			<view class="progressBar">

				<view class="duration" style="font-size: 16rpx;">
					{{timer}}
				</view>
				<slider
				min="0"
				activeColor="rgb(255, 255, 255)"
				block-size="14"
				backgroundColor="rgb(194,194,196)"
				style="margin-left: 15px;width: 80%; margin-right: 15px;"
				:max="duration"
				:value="currentTime"
				@change="sliderChange"
				>
				</slider>
				<view class="duration" style="font-size: 16rpx;">
					{{overTimer}}
				</view>
			</view>
		</view>
		<view class="audioListPopu" v-show="audioListShow" style="overflow: scroll;">
			<view v-for="item in audioList" :key="item.name" :singer="item.singer">
				<view :class="[item.class,item.isactive]" @click="playList(item.src,item.name,item.singer)">
					<p>{{item.name}}-{{item.singer}}</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import 'common/demo.mp3';
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				// innerAudioContext:null,
				playButtonShow:true,
				pauseButtonShow:false,
				duration:null,
				currentTime:0,
				seekTime:null,
				src:null,
				name:'',
				singer:'',
				singleCycle:false,
				listCycle:true,
				randomCycle:false,
				audioListShow:false,
				audioList:[
					{name:"in the end",singer:"link Park",class:"songListStyle-A",isactive:'',src:"http://zyedu.tlkjyun.com/scjg/uploadFiles/uploadImgs/1636078021904.mp3"},
					{name:"白夜",singer:"Reol",class:"songListStyle-B",isactive:'',src:"http://zyedu.tlkjyun.com/scjg/uploadFiles/uploadImgs/20211112/5890108c97e240669ecbfaa07fc1148f.mp3"},
				],
				audioName:'歌曲名称',
				menuShow:true,
				
			}
		},
		
		computed:{
			timer() {
				return calcTimer(this.currentTime)
			},
			overTimer() {
				return calcTimer(this.duration)
			}
		},
		onLoad() {
			if(this.audioList === null){
				this.listCycle = false;
				this.randomCycle = false;
				this.singleCycle = false;
				this.menuShow = false;
			};
					
					
			if(this.duration === null){
				this.duration = "100"
			};
			
			innerAudioContext.onCanplay(() => {
			    console.log(innerAudioContext.duration);
				this.duration = innerAudioContext.duration;
			});
			
			innerAudioContext.onPlay(() => {
			    console.log('开始播放')
				
			});
						
			innerAudioContext.onError((res) => {
			  console.log(res.errMsg);
			  console.log(res.errCode);
			});
			
			innerAudioContext.onTimeUpdate(() => {
			    // console.log(innerAudioContext.currentTime)
				this.currentTime = innerAudioContext.currentTime
			});
			
			innerAudioContext.onEnded(() => {			//当innerAudioContext.loop为true的时候是不会触发 onEnded callback的;
				uni.showToast({
					title:"播放结束",
					icon:"none",
					position:"top"
				});
				if(innerAudioContext.paused){
					this.playButtonShow = true;
					this.pauseButtonShow = false;
					this.currentTime = 0;
					this.seekTime = 0;
					innerAudioContext.destroy();
				};

			});
			
			innerAudioContext.onPause(() => {
			    console.log("播放暂停")
			});
			
			innerAudioContext.onError((res) => {
				console.log(res)
			})
			

		},
        methods: {  
            play() {
				if(this.audioList != null && this.src != null){
					innerAudioContext.autoplay = false;
					innerAudioContext.src = this.src
					this.audioName = this.name+'/'+this.singer
					innerAudioContext.play();
					if(this.seekTime != null){
						innerAudioContext.seek(this.seekTime)
					}
					this.playButtonShow = false
					this.pauseButtonShow = true
				}else{
					uni.showToast({
						title:"暂无播放音乐",
						icon:"error",
						duration:1000
					})
				}
            },
			
			playList(src,name,singer){
				innerAudioContext.src = src;			//这儿得加函数防抖
				this.audioName = name+'/'+singer;
				this.src = src;
				this.name = name;
				this.singer = singer;
				innerAudioContext.play();		
				this.playButtonShow = false;
				this.pauseButtonShow = true;
				for(let i in this.audioList){
					if(innerAudioContext.src === this.audioList[i].src){
						this.audioList[i].isactive = 'activeNow'
					}else{
						this.audioList[i].isactive = null
					}
				}
				
				if(this.listCycle === true){

				}
			},
			  
			pause(){
				innerAudioContext.pause();
				this.playButtonShow = true;
				this.pauseButtonShow = false;
				this.currentTime = innerAudioContext.currentTime
				if(innerAudioContext.paused){
					console.log("当前暂停时间"+innerAudioContext.currentTime);
					this.seekTime = innerAudioContext.currentTime;
				}
			},
			
			forward(){
				this.src = "1";
				console.log(this.src);
			},
			
			sliderChange(e){
				console.log("当前滑块位置"+e.detail.value)
				this.seekTime = e.detail.value;
				innerAudioContext.seek(this.seekTime)
			},
			
			
			list(){
				this.listCycle = false;
				this.singleCycle = true;
				uni.showToast({
					title:"单曲循环",
					icon:"none",
					position:"top",
					duration:1000
				});
				innerAudioContext.loop = true;
			},
			
			single(){
				this.singleCycle = false;
				this.randomCycle = true;
				uni.showToast({
					title:"随机播放",
					icon:"none",
					position:"top",
					duration:1000
				})
			},
			
			random(){
				this.randomCycle = false;
				this.listCycle = true;
				uni.showToast({
					title:"列表循环",
					icon:"none",
					position:"top",
					duration:1000
				})
			},
			
			menuList(){
				if(this.audioListShow === false){
					this.audioListShow = true;
				}else{
					this.audioListShow = false;
				}
			},			
        },
		

		

	}
	
	function calcTimer(timer) {
		if(timer === 0 || typeof timer !== 'number') {
			return '00:00'
		}
		let mm = Math.floor(timer / 60)
		let ss = Math.floor(timer % 60)
		if(mm < 10) {
			mm = '0' + mm
		}
		if(ss < 10) {
			ss = '0' + ss
		}
		return mm + ':' + ss
	}
</script>

<style>

/* 
配色方案：
 background-image: linear-gradient(25deg, #1d2357, #3e4178, #5e629a, #7f84be);
 background-image: linear-gradient(25deg, #0015d2, #2534e1, #364cf0, #4364ff);
 background-image: linear-gradient(25deg, #6f0e6a, #816473, #85a778, #75ec79);
 background-image: linear-gradient(25deg, #3a6257, #745b71, #a44b8c, #d21da7);
 background-image: linear-gradient(25deg, #0a455d, #196b6f, #1f9382, #1fbe94);
 background-image: linear-gradient(25deg, #4e6ad9, #608ccb, #66adbc, #62cfab);
 background-image: linear-gradient(25deg, #007e73, #01a08d, #01c3a8, #00e8c3);
 background-image: linear-gradient(25deg, #bc81fc, #d9a0d8, #eebfb3, #fcde8a);
 background-image: linear-gradient(25deg, #d92060, #e25466, #e9786c, #ef9871);
 
 */
	
page{
	background: #f8f8f8;
}
	
[class*=animation-] {
    animation-duration: .5s;
    animation-timing-function: ease-out;
    animation-fill-mode: both
}



	
.animation-shake{
    animation-name: shake
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0)
    }

    10% {
        transform: translateX(-9px)
    }

    20% {
        transform: translateX(8px)
    }

    30% {
        transform: translateX(-7px)
    }

    40% {
        transform: translateX(6px)
    }

    50% {
        transform: translateX(-5px)
    }

    60% {
        transform: translateX(4px)
    }

    70% {
        transform: translateX(-3px)
    }

    80% {
        transform: translateX(2px)
    }

    90% {
        transform: translateX(-1px)
    }
}

.player{
	margin-top: 10rpx;
	height: 170rpx;
	width: 90%;
	border: rgb(248,135,179) 1px solid;
	margin: 0rpx 5 rpx;
	position: relative;
	right: 5%;
	left: 5%;
	background-image: linear-gradient(25deg, #d92060, #e25466, #e9786c, #ef9871);
	box-shadow: 5px 5px 5px #dfdfdf;
	border-radius: 10rpx;
}



.icon-play3:before {
  content: "\ea1c";
  font-size: 40rpx;
  margin: 40rpx;
}

.icon-pause2:before {
  content: "\ea1d";
  font-size: 40rpx;
  margin: 40rpx;
  
}
.icon-backward2:before {
  content: "\ea1f";
  font-size: 40rpx;
  margin: 40rpx;
  
}
.icon-forward3:before {
  content: "\ea20";
 font-size: 40rpx;
 margin: 40rpx;
}

.icon-menu:before {
  content: "\e9bd";
  font-size: 16px;

}

.icon-loop:before {
  content: "\ea2d";
  font-size: 16px;

}

.buttonGroup{
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80rpx;
	margin: 5rpx;
	padding: 0;
}

.progressBar {
	margin: 0;
	position:relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25rpx;
	
}

.duration{
	margin: 4upx;
	padding: 0;
	color: #FFFFFF;
}

.coverPage{
	width: 90rpx;
	height:90rpx;
	background-color: rgb(168, 91, 122);
	position: absolute;
	left: 25rpx;
	top: 15rpx;
	border-radius: 10rpx;
	
}



.buttonStyle{
	color: rgb(254,235,252);

}

.audioMessage{
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgb(254,235,252);
	animation: finger infinite 4s;
}

.iconGroup{
	display: flex;
	position: absolute;
	margin: 20rpx;
	right: 10rpx;
	top: 10rpx;
}
.iconStyle{
	color: rgb(254,235,252);
}
.icon-loop{
	margin-right: 15rpx;
}

.icon-shuffle{
	margin-right: 15rpx;
}

.icon-loop2{
	margin-right: 10rpx;
}

.icon-menu{
	margin-left: 5rpx;
}

.audioListPopu{
	width: 90%;
	height: 250rpx;
	background: rgb(248,135,179);	position: relative;
	right: 5%;
	left: 5%;
	margin-top: 5rpx;
	box-shadow: 5px 5px 5px #dfdfdf;
	border-radius: 10rpx;
}

@keyframes finger{
	0%{
		transform: translate(-5px);
	}
	
	25%{
		transform: translate(5px);
	}
	
	50%{
		transform: translate(-5px);
	}
	
	75%{
		transform: translate(5px);
	}
	
	100%{
		transform: translate(-5px);
	}
}

.songListStyle-A{
	width: 100%;
	height: 50rpx;
	background-color: rgb(250, 153, 199);
	color: #FFFFFF;
	font-family: "Times New Roman", Times, serif;
	font-size: 32rpx;
	
}

.songListStyle-B{
	width: 100%;
	height: 50rpx;
	background-color: rgb(249, 170, 203);
	color: #FFFFFF;
	font-family: "Times New Roman", Times, serif;
	font-size: 32rpx;
}

p{
	position: relative;
	left: 15px;
}

.activeNow{
	background-color: #ff557f;
	animation:shake 0.82s cubic-bezier(.36,.07,.19,.97)both;
}
</style>
