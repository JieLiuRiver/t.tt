<template>
    <div>
        <router-link class="f-ib t-h-container f-wf f-flex f-drr f-jcc f-aic f-pr f-bottom-line f-top-line" :to={name:route}>
            <h2 class="f-hf f-wf">{{title}}</h2>
            <i v-if="arrow" class="ion-ios-arrow-right icon"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['title', 'arrow', 'route'],
        data () {
            return {

            }
        }
    }
</script>

<style scope lang="less">
@import '../style/variable.less'; 
.t-h-container{
    height: 0.41rem;
    padding: 0 0.1rem;
    h2{
        font-weight: 700;
        color: #666;
        font-size: 0.16rem;
        line-height: 0.41rem;
    }
    .icon{
        font-size: 0.16rem;
        color: #666;
        font-weight: bolder;
    }
}
</style>