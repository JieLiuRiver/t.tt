<template>
    <div class="b-n-container">
        <ul class="b-n-list">
            <li class="b-n-item" v-for="(o, i) in bottomTabLists">
                <router-link class="f-ib f-wf b-n-link f-pr" :to="o.route">
                    <img class="b-n-icon f-pa f-ib" :src="`${$route.path === o.route ? o.selectedBase64 : o.base64}`" alt="图标"/>
                    <h4 class="b-n-title">{{o.name}}</h4>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Bus from '@/bus'
    export default {
        data () {
            return {
                bottomTabLists: Bus.bottomTabLists
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">
@import '../style/components/bottom_navbar.less';
</style>