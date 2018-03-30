<template>
    <div class="bangker-nav bangker-nav-action">
        <div class="navContent">
            <div class="logo">
                <div></div>
            </div>
            <div class="navRight">
                <div class="item">
                    <span :class="{'current': anchor=== 'product'}"><a href="JavaScript:;" @click="jump('product')">产品与服务</a></span>
                    <span :class="{'current': anchor=== 'intro'}" ><a href="JavaScript:;" @click="jump('intro')">团队介绍</a></span>
                    <span :class="{'current': anchor=== 'friend'}"><a href="JavaScript:;" @click="jump('friend')">合作伙伴</a></span>
                    <span :class="{'current': anchor=== 'plan'}"><a href="JavaScript:;" @click="jump('plan')">规划</a></span>
                    <span :class="{'current': anchor=== 'contact'}"><a href="JavaScript:;" @click="jump('contact')">联系我们</a></span>
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
</template>

<script>
const jumpMap = {
    product: '#content',
    intro: '#team',
    friend: '#partner',
    plan: '#plan',
    contact: '#contact'
}
export default {
    data() {
        return {
            languageIsShow: false,
            anchor: 'product'
        }
    },
    methods: {
        showLanguage(){
            this.languageIsShow = !this.languageIsShow
        },
        jump(anchor) {
            if(this.anchor === anchor) return
            this.anchor = anchor
            document.querySelector(jumpMap[anchor]).scrollIntoView({ behavior: 'smooth' });
        }
    },
    mounted() {
        let $nav = this.$refs
    }
}
</script>
