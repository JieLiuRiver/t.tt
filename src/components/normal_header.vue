<template>
    <div class="n-h-container f-wf">
        <div class="f-hf f-wf n-h-title">{{title}}</div>
    </div>
</template>


<script>
    export default {
        props: ['title'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
@import '../style/components/noraml_header.less';
</style>