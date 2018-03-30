<template>
    <div class="bangker-bannerContent ">

        <div class="bannerContent-video blur" style="width:60%;overflow:hidden">
            <video muted="muted" width="100%" preload="auto" loop="loop" ref="video">
                <source src="/static/video/home/chain.webm" type="video/webm">
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
<style>

.blur {    
    opacity:0.7;
    filter:alpha(opacity=70);
    -webkit-filter:brightness(2);
    -o-filter:brightness(2);
    -moz-filter:brightness(2);
    filter:brightness(2);
}
</style>
<script>
    export default {
        mounted() {
            this.$refs.video.oncanplay = ()=>{
                this.$refs.video.play()
            }
        }
    }
</script>
