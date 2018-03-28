<template>
<!--<div>-->
        <!--<div id="test" style="width: 100%;height:100px;background:red;">test</div>-->
    <div class="bangker-nav bangker-nav-action">
        <div class="navContent">
            <div class="logo">
                <div></div>
            </div>
            <div class="navRight">
                <div class="item">
                    <span class="current"><a href="JavaScript:;">产品与服务</a></span>
                    <span><a href="JavaScript:;">团队介绍</a></span>
                    <span><a href="JavaScript:;">合作伙伴</a></span>
                    <span><a href="JavaScript:;">规划</a></span>
                    <span><a href="JavaScript:;">联系我们</a></span>
                </div>
                <div class="language">
                    <div @click="showLanguage">
                        <p>简体中文</p>
                    </div>
                    <ul class="language-item" :class="{ 'disB': languageIsShow, 'disN': !languageIsShow  }">
                    <!-- <ul class="language-item {{ languageIsShow ? 'disB' : 'disNo' }}"> -->
                        <li>English</li>
                        <li class="currentLag">日本語</li>
                        <li>한국어.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--</div>-->
</template>

<script>
    export default {
        data() {
            return {
                languageIsShow: false
            }
        },
        methods: {
            showLanguage(){
                this.languageIsShow = !this.languageIsShow
            }
        },
        mounted() {
            let $nav = this.$refs

            let scene = new ScrollMagic.Scene({ triggerElement: '#service', duration: 725, offset: -200})
                .setTween('#nav', { backgroundColor: '#8527fa' })
                .addTo(controller)

                new ScrollMagic.Scene({ triggerElement: '#productData', duration: 30, offset: -200})
                .setTween('#nav', { boxShadow: "0 1px 5px black" })
                .addTo(controller)
        }
    }
</script>
