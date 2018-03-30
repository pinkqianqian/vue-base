<template>
    <div class="bangker-productData" id="productData">
        <div class="dataContent">
            <div class="dataContent-left">
                <h3>巨人的肩膀上开始新征程</h3>
                <p class="content">以中国最大的在线定制旅行 生态为基础</p>
                <p class="explain">战略合作伙伴世界邦旅行网多年专注于出国自由行市场，提供全面的出国自由行定制服务，为向往自由行的人们提供高性价比、高质量出国自由</p>
                <div class="dataStream">
                    <div class="dataItem">
                        <div class="dataText">
                            <span class="dataNum">{{dataOne}}</span>
                            <span class="dataSymbol">
                                <span class="dataSymbolOne">＋</span>
                                <span class="dataSymbolTwo">w</span>
                            </span>
                        </div>
                        <p class="dataTitle">结构化行程</p>
                    </div>
                    <div class="dataItem">
                        <div class="dataText">
                            <span class="dataNum">{{dataTwo}}</span>
                            <span class="dataSymbol">
                                <span class="dataSymbolOne">＋</span>
                                <span class="dataSymbolTwo">w</span>
                            </span>
                        </div>
                        <p class="dataTitle">精选旅行产</p>
                    </div>
                    <div class="dataItem">
                        <div class="dataText">
                            <!--<span class="dataNum">2,000</span>-->
                            <span class="dataNum">{{dataThreeComputed}}</span>
                            <span class="dataSymbol">
                                <span class="dataSymbolOne">＋</span>
                                <span class="dataSymbolTwo"></span>
                            </span>
                        </div>
                        <p class="dataTitle">全球旅行达人</p>
                    </div>
                    <div class="dataItem">
                        <div class="dataText">
                            <span class="dataNum">{{dataFour}}</span>
                            <span class="dataSymbol">
                                <span class="dataSymbolOne">＋</span>
                                <span class="dataSymbolTwo">w</span>
                            </span>
                        </div>
                        <p class="dataTitle">自由行POI</p>
                    </div>
                </div>
            </div>
            <div class="dataContent-right"></div>
        </div>
    </div>
</template>
<script>


    export default {
        

        data() {
            return {
                dataOne: 0,
                dataTwo: 0,
                dataThree: 0,
                dataFour: 0,
                stopAnimate: false
            }
        },
        computed: {


            dataThreeComputed() {
                return this.dataThree.length>3?`${this.dataThree.slice(0,1)},${this.dataThree.slice(1,4)}`:this.dataThree
            }
        },
        mounted() {
            let quene = []

            let scene1 = new ScrollMagic.Scene({ triggerElement: "#productData", offset:50})
                .setTween(this.makeTween(100, 'dataOne'))
                .addTo(controller);
            let scene2 = new ScrollMagic.Scene({ triggerElement: "#productData", offset: 50})
                .setTween(this.makeTween(230, 'dataTwo'))
                .addTo(controller);
            let scene3 = new ScrollMagic.Scene({ triggerElement: "#productData", offset: 50})
                .setTween(this.makeTween(2000, 'dataThree'))
                .addTo(controller);
            let scene4 = new ScrollMagic.Scene({ triggerElement: "#productData", offset: 50})
                .setTween(this.makeTween(50, 'dataFour'))
                .addTo(controller);


            scene1.on("progress",  ({progress}) => {
                if(this.stopAnimate) return
                if(progress === 1) {
                    this.stopAnimate = true
                    scene1.remove()
                    scene2.remove()
                    scene3.remove()
                    scene4.remove()
                }
            });

        },
        methods: {
            makeTween(num, target) {
                let self = this
                let numObject = {
                    x: 10
                }
                return new TweenMax(numObject, .3, {
                    x:num,
                    onUpdateParams: [numObject, "param"],
                    onUpdate(params){
                        self[target] = params.x.toFixed(0);
                    }
                })
            }
        }
    }
</script>
