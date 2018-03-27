<template>
    <div class="bangker-nav" id="nav">
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
                    <ul class="language-item">
                        <li>简体中文</li>
                        <li>English</li>
                        <li>日本语</li>
                        <li>한국어.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
                console.log(this.languageIsShow, 'languageIsShow')
            }
        },
        mounted() {
            window.controller = new ScrollMagic.Controller()
            let $nav = this.$refs

            new ScrollMagic.Scene({ triggerElement: '#sr1', duration: 400, offset: -50})
                .setPin('#nav')
                .setTween('#nav', { backgroundColor: '#8527fa', position: 'fixed', boxShadow: "0 1px 1px grey", })
                .addTo(controller)



        //     box - shadow: 0 1px 5px #888;
        //     z - index: 1;
        // .logo div {
        //         background: url('Assets/image/home/logo_02.png') no - repeat;
        //     }
        // .navRight {
        //     .item span a {
        //             color: #333;
        //         }
        //     .item span.current a {
        //             color: #8527fa;
        //         }
        //     .language {
        //             background: #f5f6f9;
        //         }
        //     }
        }
    }
</script>
<style>
    .box1 {
        width: 100%;
        height: 200px;
        background: transparent;
        /*opacity: 0;*/
    }
</style>
