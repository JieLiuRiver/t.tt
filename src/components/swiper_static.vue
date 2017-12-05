<template>
    <div>
        <swiper :options="swiperOption" class="swiper-static-box f-hf">
            <slot></slot>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props: {
            dataList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    freeMode: true
                }
            }
        },
        components: {
            swiper
        }
    }
</script>

<style scope lang="less">
@import '../style/variable.less'; 
.swiper-static-box{
    padding: 0.2rem 0.14rem;
}
</style>