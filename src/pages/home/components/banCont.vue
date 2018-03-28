<template>
    <div class="bangker-bannerContent">
<vue-particles
        class="particles-js"
        color="#FFFFFF"
        :particleOpacity="0.4"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="2"
        linesColor="#8527fa"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="Grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        <!--<div class="bannerContent-video" style="width: 100%;overflow:hidden">
            <video muted="muted" width="100%" preload="auto" loop="loop" ref="video">
                <source src="/static/video/home/23827870.mp4" type="video/mp4">
            </video>
        </div>-->
        <div class="bannerContent-text">
            <p class="p1">Bangker Travel</p>
            <p class="p2">在线旅行革命性创新</p>
            <p class="p3">基于区块链技术&中国最大的定制旅行生态</p>
            <button>
                <p>阅读白皮书</p>
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            // this.$refs.video.oncanplay = ()=>{
            //     this.$refs.video.play()
            // }
        }
    }
</script>
<style>
.particles-js {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.bangker-bannerContent{
    text-align:center;
}
</style>
