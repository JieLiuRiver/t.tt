<template>
    <div>
        <div class="placeholder-box f-wf">
        </div>
        <div class="h-container f-pr">
            <div class="h-menu-icon f-hf f-pa" @click="toggleNavMenu">
            </div>
            <div class="h-logo">
            </div>
        </div>
        <nav class="nav-drawer" :style="navDrawerStyles">
            <ul class="nav-aside">
                <li class="nav-shop f-pr f-fl" v-for="(o,i) in navshopList" :key="i">
                    <router-link class="f-ib f-hf f-wf nav-link" to="/login">
                        <span class="f-ib f-pr" style="top: -10px">{{o.shopname}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
    import Bus from '@/bus'
    const NAVHEIGHT = Bus.headerHeight, BARHEIGHT = 93;
    export default {
        data() {
            return {
                navHeight: 0,
                navshopList: Bus.navshopList
            }
        },
        mounted() {
            this.$nextTick(() => this.calcNavHeight())
            window.addEventListener('resize', () => this.calcNavHeight)
        },
        methods: {
            calcNavHeight() {
                this.navHeight = window.screen.height - NAVHEIGHT
            },
            toggleNavMenu() {
                Bus.menuOpenFlag = !Bus.menuOpenFlag
            }
        },
        computed: {
            navDrawerStyles() {
                return {
                    height: `${this.navHeight}px`,
                    transform: this.menuOpenFlag ? "translate3d(0,0,0)" : "translate3d(0,-100%,0)"
                }
            },
            menuOpenFlag() {
                return Bus.menuOpenFlag
            }
        }
    }
</script>

<style scoped lang="less">
@import '../style/components/header';
</style>