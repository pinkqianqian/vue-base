<template>
    <div class="bangker-nav bangker-nav-action">
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
                <div @click="languageIsShow = !languageIsShow">
                    <p>简体中文</p>
                </div>
                <ul class="language-item disN { languageIsShow ? 'disB' : 'disN' }">
                    <li>简体中文</li>
                    <li>English</li>
                    <li>日本语</li>
                    <li>한국어.</li>
                </ul>
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
        }
    }
</script>
