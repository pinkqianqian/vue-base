<template>
    <div class="bangker-service">
        <div class="serviceContent">
            <div class="serviceAnimation">
                <div class="animation-one">
                    <div class="animation-oneHeader"></div>
                    <div class="animation-oneBody" id="box1"></div>
                    <div class="animation-oneFooter"></div>
                </div>
                <div class="animation-two">
                    <div class="animation-twoHeader"></div>
                    <div class="animation-twoBody" id="box2"></div>
                    <div class="animation-twoFooter"></div>
                </div>
                <div class="animation-three">
                    <div class="animation-threeHeader"></div>
                    <div class="animation-threeBody" id="box3"></div>
                    <div class="animation-threeFooter"></div>
                </div>
                <div class="animation-four">
                    <div class="animation-fourHeader"></div>
                    <div class="animation-fourBody" id="box4"></div>
                    <div class="animation-fourFooter"></div>
                </div>
                <div class="animation-five">
                    <div class="animation-fiveHeader"></div>
                    <div class="animation-fiveBody" id="box5"></div>
                    <div class="animation-fiveFooter"></div>
                </div>
                <div class="animation-six">
                    <div class="animation-sixHeader"></div>
                    <div class="animation-sixBody" id="box6"></div>
                    <div class="animation-sixFooter"></div>
                </div>
            </div>
            <div class="serviceExplain">
                <h3>产品和服务</h3>
                <p class="content">基于区块链的奖励性旅行分享社区和商城</p>
                <p class="explain">Bangker Travel Community：一个在区块链上实现的、自驱动的、持续生成优质旅行内容并且具有版权保护的旅行内</p>
                <p class="explain">Bangker Travel Store: 一个基于区块链技术实现的可信、透明和安全的旅行产品商城</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dataOne: 0,
                dataTwo: 0,
                dataThree: 0
            }
        },
        computed: {
            dataThreeComputed() {
                return this.dataThree.length > 3 ? `${this.dataThree.slice(0, 1)},${this.dataThree.slice(1, 4)}` : this.dataThree
            }
        },
        mounted() {
            new ScrollMagic.Scene({ triggerElement: "#service", offset:100 })
                .setTween(this.makeTween('#box1', 19))
                .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#service", offset:100 })
                .setTween(this.makeTween('#box2', 116))
                .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#service", offset:100 })
                .setTween(this.makeTween('#box3', 68))
                .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#service", offset:100 })
                .setTween(this.makeTween('#box4', 23))
                .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#service", offset:100 })
                .setTween(this.makeTween('#box5', 67))
                .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#service", offset:100 })
                .setTween(this.makeTween('#box6', 32))
                .addTo(controller);

        },
        methods: {
            makeTween(target, height) {
                return TweenMax.to(target, height/24, {
                    height: `${height}px`,
                    // ease: 'easeOutBounce'
                    ease: 'easeIn'
                })
            }
        }
    }
</script>
