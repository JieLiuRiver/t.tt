<template>
    <section class="app-container">
        <section class="section-floor layout-banner">
            <div class="banner-container" v-if="typeof resourceJson.banner !== 'undefined' && resourceJson.banner.dataList.length">
                <swiper :options="swiperOption" class="swiper-box f-hf">
                    <swiper-slide class="swiper-item f-wf" v-for="(o, i) in resourceJson.banner.dataList" :key="o.src">
                        <a :href="o.linkUrl" class="f-ib swiper-link">
                            <img width="100%" height="100%" :src="o.src"/>
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>

            <div class="short-cut-container">
                <div class="short-cut" v-for="(o, i) in resourceJson.shortcut.dataList" :key="o.linkUrl">
                    <a :href="o.linkUrl" class="f-ib f-wf short-cut-link f-flex f-drc f-aic">
                        <img class="f-b" :src="o.src" :alt="o.labelTitle"/>
                        <p class="f-ellipsis f-fs12">{{ o.labelTitle }}</p>
                    </a>
                </div>
            </div>
        </section>

        <section class="section-floor">
            <v-title-header title="热门商品" :arrow="true" route="login"></v-title-header>
            <v-swiper-static>
                <swiper-slide class="hot-swiper-item f-flex f-drr f-jc-start f-nowrap" v-for="(o, i) in hotProductList" :key="o.src">
                    <div class="hot-product-item f-wf ">
                        <a href="javascript:;" class="f-b f-hf f-wf link f-pr app-1px">
                            <img width="99%" height="99%" :src="o.shop_info.ali_image"/>
                        </a>
                        <div class="item-content">
                            <h4 class="f-fs12 title">{{ o.product_info.product_name }}</h4>
                            <p class="f-fs12 f-ellipsis desc">{{o.shop_info.sub_title}}</p>
                            <p class="price">
                                <span class="f-ib symbol">¥</span><span class="f-ib">{{o.price}}</span>
                            </p> 
                        </div>
                    </div>
                </swiper-slide>
            </v-swiper-static>
        </section>

        <section class="section-floor" >
            <v-title-header title="热销机型" :arrow="false" route="login"></v-title-header>
            <swiper :options="hotSaleSwiperOption" class="hotsale-swiper-box f-hf">
                <swiper-slide class="hotsale-swiper-item" v-for="(o, i) in hotSalePhoneList" :key="o.shop_info.ali_image">
                    <a :href="o.linkUrl" class="f-ib hotsale-swiper-link f-wf f-hf">
                        <img width="100%" height="100%" :src="o.shop_info.ali_image"/>
                    </a>
                    <div class="item-content f-flex f-drc f-jcc f-aic">
                        <h4 class="f-fs12 title">{{ o.shop_info.title }}</h4>
                        <p class="f-fs12 f-ellipsis desc">{{o.shop_info.sub_title}}</p>
                        <p class="price">
                            <span class="f-ib symbol">¥</span><span class="f-ib">{{o.price}}</span>
                        </p> 
                    </div>
                </swiper-slide>
                <div class="hotsale-swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>

        <section class="section-floor">
             <v-title-header title="净化器配件" :arrow="true" route="login"></v-title-header>
             <swiper :options="carouseSwiperOption" class="carouse-swiper-box f-hf f-bottom-line">
                <swiper-slide class="carouse-swiper-item" v-for="(o, i) in carouseList" :key="o.shop_info.ali_image">
                    <a :href="o.linkUrl" class="f-ib carouse-swiper-link f-wf f-hf">
                        <img width="100%" height="100%" :src="o.shop_info.ali_image"/>
                    </a>
                    <div class="item-content f-flex f-drc f-jcc f-aic">
                        <h4 class="f-fs12 title">{{ o.shop_info.title }}</h4>
                        <p class="f-fs12 f-ellipsis desc">{{o.shop_info.sub_title}}</p>
                        <p class="price">
                            <span class="f-ib symbol">¥</span><span class="f-ib">{{o.price}}</span>
                        </p> 
                    </div>
                </swiper-slide>
            </swiper>
            <ul class="goods-list f-flex f-drr f-aic f-wrap">
                <li class="goods-item f-fs12 f-flex f-drr f-nowrap f-aic f-pr" v-for="(row, index) in goodsList" :key="index"
                    :class="{['f-bottom-line']: index < 2, ['f-right-line']: (index=== 0 || index === 2)}">
                   <img class="f-b goods-image" :src="row.shop_info.ali_image"/>
                   <p class="f-ellipsis">{{row.product_info.goods_name}}</p>
                   <i class="f-b ion-ios-arrow-right"></i>
                </li>
            </ul>
        </section>

        <section class="section-floor">
             <v-title-header title="官方精选" :arrow="true" route="login"></v-title-header>
             <div class="careful-chose-wrap">
                <ul class="careful-chose-list f-flex f-drr f-wrap faic f-jc-between">
                    <li class="careful-chose-item" v-for="(o, i) in carefulChoseList" :key="i">
                        <div class="f-wf careful-chose-inner">
                           <router-link to="/login" class="f-ib f-wf link f-pr app-1px">
                                <img class="f-pa" width="100%" height="100%" :src="o.shop_info.ali_image"/>
                            </router-link>
                        </div>
                        <div class="item-content">
                            <h4 class="f-fs12 title">{{ o.product_info.product_name }}</h4>
                            <p class="f-fs12 f-ellipsis desc">{{o.shop_info.sub_title}}</p>
                            <p class="price">
                                <span class="f-ib symbol">¥</span><span class="f-ib">{{o.price}}</span>
                            </p> 
                        </div>
                    </li>
                </ul>
             </div>
        </section>

        <section class="section-floor layout-image f-flex f-drc f-aic">
            <div class="layout-image-item" v-for="(o, i) in layoutImageList" :key="i">
                <a :href="o.linkUrl" class="f-ib f-wf f-hf">
                    <img width="100%" height="100%" :src="o.src"/>
                </a>
            </div>
        </section>

        <section class="section-floor">
        </section>

        <section class="section-floor">
             <v-title-header title="品牌精选" :arrow="true" route="login"></v-title-header>
             <div class="careful-chose-wrap">
                <ul class="careful-chose-list f-flex f-drr f-wrap faic f-jc-between">
                    <li class="careful-chose-item" v-for="(o, i) in brandList" :key="i">
                        <div class="f-wf careful-chose-inner">
                           <router-link to="/login" class="f-ib f-wf link f-pr app-1px">
                                <img class="f-pa" width="100%" height="100%" :src="o.shop_info.ali_image"/>
                            </router-link>
                        </div>
                        <div class="item-content">
                            <h4 class="f-fs12 title">{{ o.product_info.product_name }}</h4>
                            <p class="f-fs12 f-ellipsis desc">{{o.shop_info.sub_title}}</p>
                            <p class="price">
                                <span class="f-ib symbol">¥</span><span class="f-ib">{{o.price}}</span>
                            </p> 
                        </div>
                    </li>
                </ul>
             </div>
        </section>
    </section>
</template>


<script>
    import axios from 'axios'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import vScrollView from '@/components/scroll_view'
    import Bus from '@/bus'
    import vTitleHeader from '@/components/title_header'
    import vSwiperStatic from '@/components/swiper_static'
    import _ from 'underscore'
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
               hotScroll: null,
               hotSwiperWrapperHeight: 0,
               carouseSwiperOption: {

               },
               hotSaleSwiperOption: {
                  pagination: {
                    el: '.hotsale-swiper-pagination'
                  } 
               },
               swiperOption: {
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
               },
               resourceJson: Bus.indexResourcelist,
               screenHeight: 0,
               productSkusList: Bus.indexProductSkuslist
            }
        },
        mounted() {
            window.addEventListener('resize', () => this.screenHeight = window.screen.height)
            this.$nextTick(() => {
                this.screenHeight = window.screen.height
                this._initScroll()
            })
        },
        methods: {
            findList(key, attr) {
                let list = _.clone(this.productSkusList), result = []
                list.forEach(item => {
                    let _list = typeof attr === 'undefined'
                        ? this.resourceJson.floors[key].dataList
                        : this.resourceJson.floors[key].dataList[attr]
                    _list.forEach(id => {
                        if (id == item.id) {
                            result.push(item)
                        }
                    })    
                })
                return result
            },
            _initScroll() {
                // this.hotScroll = new BScroll(this.$refs.hotScrollWrapper, {
                //     scrollX: true,
                //     click: true
                // })
            },
            _loadData() {
                // axios
                //     .get('https://resource.smartisan.com/marketing/mobile/index_383aaf1d6a5fcbad0c840c1b1ef7c987.json', {})
                //     .then(resp => {
                //         if (resp.status === 200) {
                //             this.resourceJson = resp.data
                //             return axios.get('https://www.smartisan.com/product/skus', {
                //                 ids: this.getIds(),
                //                 with_stock: true,
                //                 with_spu: true
                //             })
                //         }
                //     })
                //     .then(resp => {
                //         console.log('resp', resp)
                //     }).catch(err => console.log(err))
            }
        },
        computed: {
            hotSwiperWrapperStyles() {
                return {
                    // width: this.hotSwiperWrapperHeight + 100 + 'px'
                }
            },
            hotProductList() {
                return this.findList(0) 
            },
            hotSalePhoneList() {
                return this.findList(2) 
            },
            carouseList() {
                return this.findList(3, 'carousel')
            },
            goodsList() {
                return this.findList(3, 'recommend')  
            },
            carefulChoseList() {
                return this.findList(5) 
            },
            layoutImageList() {
                return this.resourceJson.floors[6].dataList 
            },
            brandList() {
                return this.findList(7) 
            }
        },
        components: {
            swiper,
            swiperSlide,
            vScrollView,
            vTitleHeader,
            vSwiperStatic
        }
    }
</script>



<style scoped lang="less">
    @import '../style/views/index.less';
</style>