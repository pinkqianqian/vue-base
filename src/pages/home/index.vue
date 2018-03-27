<template>
    <div class="bangker bangker-home">
        <bangker-nav id="nav"></bangker-nav>
        <!-- <div class="header"> -->
        <banner-content id="content"></banner-content>
        <!-- </div> -->
        <service id="service"></service>
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
        created() {
            window.controller = new ScrollMagic.Controller()
        }
    }

</script>
