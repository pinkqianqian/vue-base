<template>
    <div class="bangker-bannerContent">
        <div class="bannerContent-video">
            <video muted="muted" preload="auto" loop="loop" ref="video">
                <source src="/static/video/home/23827870.mp4" type="video/mp4">
                <!-- <source src="https://ccm.ddcdn.com/cms/site/branding/videos/tahiti/video.mp4" type="video/mp4"> -->
            </video>
        </div>
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
            this.$refs.video.oncanplay = ()=>{
                this.$refs.video.play()
            }
        }
    }
</script>
