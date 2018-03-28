<template>
    <div class="bangker-bannerContent">
<vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
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
