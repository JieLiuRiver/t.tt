<template>
    <section class="app-container">
        <v-header></v-header>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <v-bottom-navbar></v-bottom-navbar>
    </section>
</template>


<script>
    import vHeader from '@/components/header'
    import vBottomNavbar from '@/components/bottom_navbar'

    export default {
        data() {
            return {
            }
        },
        mounted() {
           
        },
        methods: {
            
        },
        components: {
            vHeader, vBottomNavbar
        }
    }
</script>



<style scoped lang="less">
    @import '../style/views/index.less';
</style>