<template>
    <div class="s-l-container" :style="slContainerStyles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                screenHeight: 0
            }
        },
        computed: {
            slContainerStyles() {
                return {
                    height: this.screenHeight + 'px'
                }
            }
        },
        mounted() {
            this.$nextTick(() => this.screenHeight = window.screen.height)
            window.addEventListener('resize', () => this.screenHeight = window.screen.height)
        }
    }
</script>

<style scoped lang="less">
@import '../style/components/screen_layout.less';
</style>