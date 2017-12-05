<template>
    <section class="login-container">
        <v-screen-layout>
            <v-normal-header title="登录官网"></v-normal-header>
            <div class="form-box">
                <form class="form-container">
                    <div class="form-item f-wf">
                        <div class="form-item-inner f-wf f-hf f-pr" :class="formItemInnerAccountClasses" ref="formItemAccount">
                            <span class="ccc f-pa f-ib f-hf" v-if="this.loginWay !== 'normal'">86</span>
                            <span class="country f-ib f-hf f-pa f-fs12" v-if="this.loginWay !== 'normal'" @click.stop="toggleCountry">{{currentCountry.label}}</span>
                            <input type="text" v-model="form.account" :placeholder="form.acountPlacholder" class="f-ib f-pa f-wf f-hf input-account" :style="inputAccountStyles"/>
                        </div>
                    </div>
                    <div class="form-item f-wf">
                        <div class="form-item-inner f-wf f-hf f-pr" :class="formItemInnerPasswordClasses" ref="formItemPassword">
                            <input type="password" v-model="form.password" placeholder="密码" class="f-ib f-wf f-hf f-pa input-password"/>
                        </div>
                    </div>
                    <div class="form-item-remember f-wf">
                        <div class="r-left">
                            <div class="f-ib checkbox-icon" :class="checkboxIconClasses" @click="checkboxflag=!checkboxflag">
                            </div>
                            <span class="f-ib f-fs12 text">自动登录</span>
                        </div>
                        <div class="r-right">
                            <router-link href="javascript:;" class="f-ib f-fs12" :to="{name: 'register'}">注册</router-link>
                            <router-link href="javascript:;" class="f-ib f-fs12" :to="{name: 'forgotPassword'}">忘记密码</router-link>
                        </div>
                    </div>
                    <div class="btn-wrapper f-wf f-pr">
                        <div class="btn btn-primary f-fs12 f-pa" @click="loginAction">
                            登录
                        </div>
                    </div>
                    <div class="info-wrapper f-wf f-pr">
                        <span class="f-ib f-fs12 f-pa other" @click="switchLoginWay">{{loginWay==='normal' ? '国际手机号登录' : '普通登录'}}</span>
                    </div>
                </form>
                <div class="country-list shadow f-pa" v-show="isNeedSwitchCountry">
                    <div class="delta-country"></div>
                    <ul class="f-wf f-hf">
                        <li v-for="(o, i) in countrynamelist" :key="i" :class="countryItemClasses(o.value)"
                            @click="switchCountry(o)">
                            {{o.label}}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="other-loginway">
                <ul class="login-three f-hf">
                    <li class="weibo" @click="weibologin"></li>
                    <li class="qq" @click="qqlogin"></li>
                </ul>
                <span class="error-tip" v-show="isNeedWarnTip">{{ warnText }}</span>
            </div>
            
        </v-screen-layout>
        
    </section>
</template>


<script>
    import vNormalHeader from '@/components/normal_header'
    import vScreenLayout from '@/components/screen_layout'
    import Bus from '@/bus'
    import _ from 'underscore'
    export default {
        data() {
            return {
                warnTimer: null,
                isNeedWarnTip: false,
                warnText: '请输入手机号/邮箱',
                isNeedSwitchCountry: false,
                checkboxflag: true,
                loginWay: 'normal',
                currentCountry: {
                    value: 'CN',
                    label: '中国'
                },
                form: {
                    shakeAccount: false,
                    shakePassword:false,
                    account: '',
                    password: '',
                    acountPlacholder: '手机号/邮箱',
                    warnArr: ['请输入手机号/邮箱', '请输入手机号','手机号/邮箱格式错误', '手机号格式错误','手机号/邮箱不存在', '请输入密码', '密码错误']
                },
                countrynamelist: (() => {
                    let map = []
                    Bus.countrynamelist.forEach(c => {
                        map.push({
                            value: c[0],
                            label: c[1]
                        })
                    })
                    return map
                })()
            }
        },
        components: {
            vNormalHeader,
            vScreenLayout
        },
        mounted() {
            document.addEventListener('click', this.hiddenCountryModal.bind(this), false)
            this.$refs.formItemAccount.addEventListener('webkitAnimationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemAccount.addEventListener('animationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemPassword.addEventListener('webkitAnimationEnd', e => this.form.shakePassword = false, false)
            this.$refs.formItemPassword.addEventListener('animationEnd', e => this.form.shakePassword = false, false)
            
        },
        methods: {
            hiddenCountryModal() {
                if (!this.isNeedSwitchCountry)  return
                this.isNeedSwitchCountry = false
            },
            countryItemClasses(value) {
                return {
                    ['selected']: this.currentCountry.value === value
                }
            },
            verifyParams() {
                return new Promise((resolve, reject) => {
                    if (this.loginWay === 'normal') {
                        if (this.form.account === '') {
                            this.form.shakeAccount = true
                            reject(0)
                            return
                        }
                        if (!this.frequentlyUsedRegular.phone.test(this.form.account) && !this.frequentlyUsedRegular.email.test(this.form.account)) {
                            this.form.shakeAccount = true
                            reject(2)
                            return
                        }
                    } else {
                        if (this.form.account === '') {
                            this.form.shakeAccount = true
                            reject(1)
                            return
                        }
                        if (!this.frequentlyUsedRegular.phone.test(this.form.account)) {
                            this.form.shakeAccount = true
                            reject(3)
                            return
                        }
                    }
                    if (this.form.password === '') {
                        this.form.shakePassword = true
                        reject(5)
                        return
                    }
                    resolve()
                })
            },
            loginAction() {
                this.verifyParams()
                    .then(() => {
                        window.localstorage.setItem('LOGININFO', encodeURIComponent(JOSN.stringify({
                            status: true,
                            account: this.form.account,
                            password: this.form.password
                        })))
                    }).catch(index => {
                        this.warnText = this.form.warnArr[index]
                        this.isNeedWarnTip = true
                        this.warnTimer && clearTimeout(this.warnTimer)
                        this.warnTimer = setTimeout(() => {
                            this.isNeedWarnTip = false
                        }, 2000)
                    })
            },
            switchLoginWay() {
               this.form.account = ''
               this.loginWay = this.loginWay === 'normal' ? 'international' : 'normal'
               this.form.acountPlacholder = this.loginWay === 'normal' ? '手机号/邮箱' : '手机号'
            },
            toggleCountry() {
                this.isNeedSwitchCountry = !this.isNeedSwitchCountry
            },
            switchCountry(o) {
                this.currentCountry.value = o.value
                this.currentCountry.label = o.label
            },
            weibologin() {
                window.open('https://api.weibo.com/oauth2/authorize?client_id=2561537989&redirect_uri=https%3A%2F%2Faccount.smartisan.com%2Fv2%2Foauth%2Fcallback%2Fweibo&response_type=code&state=dcd7df', "_blank")
            },
            qqlogin(){
                window.open('https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101324817&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&client_id=101324817&redirect_uri=https%3A%2F%2Faccount.smartisan.com%2Fv2%2Foauth%2Fcallback%2Fqq&response_type=code&state=d3589a', "_blank")
            }
        },
        computed: {
            checkboxIconClasses() {
                return {
                    ['unselected']: !this.checkboxflag
                }
            },
            inputAccountStyles() {
                return {
                    paddingLeft: this.loginWay === 'normal' ? '6px' : '60px'
                }
            },
            formItemInnerAccountClasses() {
                return {
                    ['animate-shake']: this.form.shakeAccount
                }
            },
            formItemInnerPasswordClasses() {
                return {
                    ['animate-shake']: this.form.shakePassword
                }
            }
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener('click', this.hiddenCountryModal.bind(this), false)
            this.$refs.formItemAccount.removeEventListener('webkitAnimationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemAccount.removeEventListener('animationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemPassword.removeEventListener('webkitAnimationEnd', e => this.form.shakePassword = false, false)
            this.$refs.formItemPassword.removeEventListener('animationEnd', e => this.form.shakePassword = false, false)
            next()
        }
    }
</script>



<style scoped lang="less">
@import '../style/views/login.less';
</style>