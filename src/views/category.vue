<template>
    <section class="app-container">
        <section class="section-floor section-phone">
            <v-title-header title="手机" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper">
                <a :href="phoneData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="phoneData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="list f-flex f-drc f-aic">
                <li class="item f-fs12 f-flex f-drr f-nowrap f-aic f-pr f-wf f-top-line" v-for="(row, index) in phoneData.layout.dataList" :key="index"
                    >
                   <img class="f-b img" :src="row.detail.shop_info.ali_image"/>
                   <p class="f-ellipsis" style="flex: 1">{{ row.detail.shop_info.title }}</p>
                   <i class="f-b ion-ios-arrow-right"></i>
                </li>
            </ul>
        </section>

        <section class="section-floor section-purfyer">
            <v-title-header title="空气净化器" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="purifyData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="purifyData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="list f-flex f-drr f-aic f-wrap">
                <li class="item f-fs12 f-flex f-drr f-nowrap f-aic f-pr" v-for="(row, index) in purifyData.layout.dataList" :key="index"
                    :class="{['f-bottom-line']: index < 2, ['f-right-line']: (index=== 0 || index === 2)}">
                   <img class="f-b image" :src="row.detail.shop_info.ali_image"/>
                   <p class="f-ellipsis">{{row.detail.product_info.goods_name}}</p>
                   <i class="f-b ion-ios-arrow-right"></i> 
                </li>
            </ul>
        </section>

        <section class="section-floor section-purfyer">
            <v-title-header title="壳套膜" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="partData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="partData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="list f-flex f-drr f-aic f-wrap">
                <li class="item f-fs12 f-flex f-drr f-nowrap f-aic f-pr" v-for="(row, index) in partData.layout.dataList" :key="index"
                    :class="{['f-bottom-line']: index < 2, ['f-right-line']: (index=== 0 || index === 2)}">
                   <img class="f-b image" :src="row.detail.shop_info.ali_image"/>
                   <p class="f-ellipsis">{{row.detail.product_info.goods_name}}</p>
                   <i class="f-b ion-ios-arrow-right"></i> 
                </li>
            </ul>
        </section>

        <section class="section-floor section-line">
            <v-title-header title="充电线材" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="lineData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="lineData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="line-list f-flex f-drr f-aic f-wrap">
                <li class="line-item f-fs12 f-flex f-drc f-aic f-pr" v-for="(row, index) in lineData.layout.dataList" :key="index">
                   <a href="javascript:;" class="f-ib f-wf app-1px line-link">
                       <img class="f-b image" width="100%" :src="row.detail.shop_info.ali_image"/>
                   </a>
                   <p class="f-ellipsis f-b">{{row.detail.shop_info.sku_mobile_title}}</p>
                </li>
            </ul>
        </section>

        <section class="section-floor section-line">
            <v-title-header title="耳机" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="earphoneData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="earphoneData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="line-list f-flex f-drr f-aic f-wrap">
                <li class="line-item f-fs12 f-flex f-drc f-aic f-pr" v-for="(row, index) in earphoneData.layout.dataList" :key="index">
                   <a href="javascript:;" class="f-ib f-wf app-1px line-link">
                       <img class="f-b image" width="100%" :src="row.detail.shop_info.ali_image"/>
                   </a>
                   <p class="f-ellipsis f-b">{{row.detail.shop_info.sku_mobile_title}}</p>
                </li>
            </ul>
        </section>

        <section class="section-floor section-line">
            <v-title-header title="服装" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="dressData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="dressData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="line-list f-flex f-drr f-aic f-wrap">
                <li class="line-item f-fs12 f-flex f-drc f-aic f-pr" v-for="(row, index) in dressData.layout.dataList" :key="index">
                   <a href="javascript:;" class="f-ib f-wf app-1px line-link">
                       <img class="f-b image" width="100%" :src="row.detail.shop_info.ali_image"/>
                   </a>
                   <p class="f-ellipsis f-b">{{row.detail.shop_info.sku_mobile_title}}</p>
                </li>
            </ul>
        </section>



        <section class="section-floor section-line">
            <v-title-header title="图书" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="bookData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="bookData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="line-list f-flex f-drr f-aic f-wrap">
                <li class="line-item f-fs12 f-flex f-drc f-aic f-pr" v-for="(row, index) in bookData.layout.dataList" :key="index">
                   <a href="javascript:;" class="f-ib f-wf app-1px line-link">
                       <img class="f-b image" width="100%" :src="row.detail.shop_info.ali_image"/>
                   </a>
                   <p class="f-ellipsis f-b">{{row.detail.shop_info.sku_mobile_title}}</p>
                </li>
            </ul>
        </section>

        <section class="section-floor section-purfyer">
            <v-title-header title="文具" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="stationeryData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="stationeryData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="list f-flex f-drr f-aic f-wrap">
                <li class="item f-fs12 f-flex f-drr f-nowrap f-aic f-pr" v-for="(row, index) in stationeryData.layout.dataList" :key="index"
                    :class="{['f-bottom-line']: index < 2, ['f-right-line']: (index=== 0 || index === 2)}">
                   <img class="f-b image" :src="row.detail.shop_info.ali_image"/>
                   <p class="f-ellipsis">{{row.detail.product_info.goods_name}}</p>
                   <i class="f-b ion-ios-arrow-right"></i> 
                </li>
            </ul>
        </section>


        <section class="section-floor section-purfyer">
            <v-title-header title="文具" :arrow="false" route="login"></v-title-header>
            <div class="image-wrapper f-pr f-bottom-line">
                <a :href="shadowData.image.linkUrl" class="f-ib f-wf link">
                    <img :src="shadowData.image.src" width="100%" height="100%"/>
                </a>
            </div>
            <ul class="list f-flex f-drr f-aic f-wrap">
                <li class="item f-fs12 f-flex f-drr f-nowrap f-aic f-pr" v-for="(row, index) in shadowData.layout.dataList" :key="index"
                    :class="{['f-bottom-line']: index < 2, ['f-right-line']: (index=== 0 || index === 2)}">
                   <img class="f-b image" :src="row.detail.shop_info.ali_image"/>
                   <p class="f-ellipsis">{{row.detail.product_info.goods_name}}</p>
                   <i class="f-b ion-ios-arrow-right"></i> 
                </li>
            </ul>
        </section>

    </section>
</template>


<script>
    import vTitleHeader from '@/components/title_header'
    import Bus from '@/bus'
    import _ from 'underscore'
    export default {
        data() {
            return {
            }
        },
        methods: {
            findList(key) {
                const data = _.clone(Bus.categoryList[key])
                data.layout.dataList.forEach(item => {
                    Bus.skulist.forEach(l => {
                        if (item.sku == l.id) {
                            item.detail = l
                        }
                    })
                })  
                return data
            }
        },
        computed: {
            phoneData() {
                return this.findList(0)
            },
            purifyData() {
                return this.findList(1)
            },
            partData() {
                return this.findList(2)
            },
            lineData() {
                return this.findList(3)
            },
            earphoneData() {
                return this.findList(4)
            },
            dressData(){
                return this.findList(5)
            },
            bookData(){
                return this.findList(6)
            },
            stationeryData() {
                return this.findList(7)
            },
            shadowData() {
                return this.findList(8)
            }
        },
        components: {
            vTitleHeader
        }
    }
</script>



<style scoped lang="less">
@import '../style/index.less';
.app-container{
    padding-bottom: 0rem;
    .section-floor{
        position: relative;
        box-shadow: 0 5px 13px rgba(0,0,0,.18);
        margin-bottom: 8px;
        background: #fff;
        .image-wrapper{
            padding: 0.16rem 0.14rem 0.08rem;
        }
        .line-list{
            padding: 0.2rem 0.14rem;
            .line-item{
                width: 1.11rem;
                margin-right: 0.05rem;
                margin-bottom: .1rem;
                .line-link{
                    margin-bottom: .06rem;
                }
                &:nth-of-type(3n){
                    margin-right: 0;
                }
                p{
                    font-weight: 700;
                    font-size: 0.12rem;
                    color: #666;
                    -webkit-transform: scale(.83333);
                    transform: scale(.83333);
                }
            }
        }
    }
    .section-phone{
        .link{
        }
        .list{
            .item{
                padding: 0.12rem 0;
                .img{
                    width: 0.375rem;
                    height: 0.375rem;
                    margin: 0 0.1rem;
                }
                p{
                    font-weight: 700;
                    color: #666;
                }
                i{
                    padding: 0 0.2rem;
                    font-size: .15rem;
                }
            }
        }
    }
    .section-purfyer{
        .list{
            .item{
                width: 50%;
                height:0.625rem;
                .image{
                    width: 0.375rem;
                    height: 0.375rem;
                    margin: 0 0.1rem;
                }
                i{
                    padding: 0 0.1rem;
                }
            }
        }
    }
}
</style>