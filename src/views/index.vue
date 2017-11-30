<template>
    <section class="app-container">
        <v-header></v-header>
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
        components: {
            vHeader,
            vBottomNavbar
        }
    }
</script>



<style scoped lang="less">
    @import '../style/views/index.less';
</style>