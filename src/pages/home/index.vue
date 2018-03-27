<template>
    <div class="bangker bangker-home">
        <bangker-nav ref="nav"></bangker-nav>
        <!-- <div class="header"> -->
        <banner-content></banner-content>
        <div id="sr1"></div>
        <!-- </div> -->
        <service></service>
        <product-data></product-data>
        <team></team>
        <partner></partner>
        <product-plan></product-plan>
        <contact-us></contact-us>
    </div>
</template>
<script>
    import Nav from './components/nav'
    import BanCont from './components/banCont'
    import Service from './components/service'
    import ProductData from './components/productData'
    import Team from './components/team'
    import Partner from './components/partner'
    import ProductPlan from './components/productPlan'
    import ContactUs from './components/contactUs'

    export default {
        components: {
            'bangker-nav': Nav,
            'banner-content': BanCont,
            Service,
            ProductData,
            Team,
            Partner,
            ProductPlan,
            ContactUs
        },
        mounted() {
            // window.controller = new ScrollMagic.Controller()
            // let $nav = this.$refs.nav

            // new ScrollMagic.Scene({ triggerElement: '#sr1', duration: 400 })
            //     .setPin(`#nav`)
            //     .setTween('#nav', { backgroundColor: '#fff', position: 'fixed' })
            //     .addTo(controller)
        }
    }

</script>
