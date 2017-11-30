<template>
    <section class="register-container">
        <v-screen-layout>
            <v-normal-header title="注册 Smartisan ID"></v-normal-header>
            <div class="form-box">
                <form class="form-container">
                    <div class="form-item f-wf">
                        <div class="form-item-inner f-wf f-hf f-pr" :class="formItemInnerAccountClasses" ref="formItemAccount">
                            <span class="ccc f-pa f-ib f-hf">86</span>
                            <span class="country f-ib f-hf f-pa f-fs12" @click.stop="toggleCountry">{{currentCountry.label}}</span>
                            <input type="text" v-model="form.account" :placeholder="form.acountPlacholder" class="f-ib f-pa f-wf f-hf input-account f-pl60"/>
                        </div>
                    </div>

                    <div class="form-item-code f-wf">
                        <div class="form-item f-pr">
                            <input type="text" ref="inputCode" :class="formItemInnerCodeClasses" v-model="form.code" :placeholder="form.codePlaceholder" class="f-ib f-pa f-wf f-hf input-account"/>
                        </div>
                        <div class="form-item form-itembtn" @click="obtainCode">
                            <div class="form-code-btn" v-if="!timing">获取验证码</div>
                            <div class="form-code-btn" v-else>重新获取 {{ timingTime }}</div>
                        </div>
                    </div>

                    <div class="form-item f-wf">
                        <div class="form-item-inner f-wf f-hf f-pr" :class="formItemInnerPasswordClasses" ref="formItemPassword">
                            <input type="password" v-model="form.password" placeholder="密码" class="f-ib f-wf f-hf f-pa input-password"/>
                        </div>
                    </div>

                    <div class="form-item f-wf" style="margin-bottom: 0;">
                        <div class="form-item-inner f-wf f-hf f-pr" :class="formItemInnerRepeatPasswordClasses" ref="formItemRepeatPassword">
                            <input type="password" v-model="form.repeatPassword" placeholder="重复密码" class="f-ib f-wf f-hf f-pa input-password"/>
                        </div>
                    </div>

                    <div class="form-item-remember f-wf">
                        <div class="r-left">
                            <div class="f-ib checkbox-icon" :class="checkboxIconClasses" @click="checkboxflag=!checkboxflag">
                            </div>
                            <span class="f-ib f-fs12 text">我已阅读并同意遵守<a href="http://www.smartisan.com/support/#/agreement" target="_blank">法律声明</a>和<a href="http://www.smartisan.com/support/#/privacy" target="_blank">隐私条款</a></span>
                        </div>
                    </div>
                    <div class="btn-wrapper f-wf f-pr">
                        <div class="btn btn-primary f-fs12 f-pa" @click="registerAction">
                            注册
                        </div>
                    </div>
                    <p class="tologin">
                        <span class="f-ib">如果您已拥有 Smartisan ID，则可在此<router-link to="/login">登录</router-link></span>
                    </p>
                    
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

                <div class="tip-wrpper">
                    <span class="error-tip" v-show="isNeedWarnTip">{{ warnText }}</span>
                </div>
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
        data () {
            return {
                timingTimer: null,
                timingTime: 60,
                timing: false,
                warnTimer: null,
                isNeedWarnTip: false,
                warnText: '',
                checkboxflag: false,
                form: {
                    shakeAccount: false,
                    shakePassword: false,
                    shakeCode: false,
                    shakeRepeatPassword: false,
                    codePlaceholder: '短信验证码',
                    code: '',
                    account: '',
                    password: '',
                    repeatPassword: '',
                    warnArr: ['请输入手机号', '手机号格式错误', '请填入验证码', '验证码错误', '请输入密码', '请再次输入秘密', '两次密码输入不一致']
                },
                currentCountry: {
                    value: 'CN',
                    label: '中国'
                },
                isNeedSwitchCountry: false,
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
        mounted() {
            document.addEventListener('click', this.hiddenCountryModal.bind(this), false)
            this.$refs.formItemAccount.addEventListener('webkitAnimationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemAccount.addEventListener('animationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.inputCode.addEventListener('webkitAnimationEnd', e => this.form.shakeCode = false, false)
            this.$refs.inputCode.addEventListener('animationEnd', e => this.form.shakeCode = false, false)
            this.$refs.formItemPassword.addEventListener('webkitAnimationEnd', e => this.form.shakePassword = false, false)
            this.$refs.formItemPassword.addEventListener('animationEnd', e => this.form.shakePassword = false, false)
            this.$refs.formItemRepeatPassword.addEventListener('webkitAnimationEnd', e => this.form.shakeRepeatPassword = false, false)
            this.$refs.formItemRepeatPassword.addEventListener('animationEnd', e => this.form.shakeRepeatPassword = false, false)
        },
        computed: {
            formItemInnerAccountClasses() {
                return {
                    ['animate-shake']: this.form.shakeAccount
                }
            },
            formItemInnerPasswordClasses() {
                return {
                    ['animate-shake']: this.form.shakePassword
                }
            },
            formItemInnerRepeatPasswordClasses() {
                return {
                    ['animate-shake']: this.form.shakeRepeatPassword
                } 
            },
            formItemInnerCodeClasses() {
                return {
                    ['animate-shake']: this.form.shakeCode
                } 
            },
            checkboxIconClasses() {
                return {
                    ['unselected']: !this.checkboxflag
                }
            },
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
            toggleCountry() {
                this.isNeedSwitchCountry = !this.isNeedSwitchCountry
            },
            switchCountry(o) {
                this.currentCountry.value = o.value
                this.currentCountry.label = o.label
            },
            obtainCode() {
                if (this.timing) return
                if (this.form.account === '') {
                    this.form.shakeAccount = true
                    this.warnIndex(0)
                    return
                }
                if (!this.frequentlyUsedRegular.phone.test(this.form.account)) {
                    this.form.shakeAccount = true
                    this.warnIndex(1)
                    return
                }
                this.startCalculagraph()
            },
            startCalculagraph() {
              this.timing = true
              this.timingTimer && clearInterval(this.timingTimer)
              this.timingTimer = setInterval(() => {
                  if (this.timingTime === 0) {
                      clearInterval(this.timingTimer)
                      this.timing = false
                      this.timingTime = 60
                      return
                  }
                  this.timingTime -= 1
              }, 1000)
            },
            verifyParams() {
                return new Promise((resolve, reject) => {
                    if (this.form.account === '') {
                        this.form.shakeAccount = true
                        reject(0)
                        return
                    }
                    if (!this.frequentlyUsedRegular.phone.test(this.form.account)) {
                        this.form.shakeAccount = true
                        reject(1)
                        return
                    }
                    if (this.form.code === '') {
                        this.form.shakeCode = true
                        reject(2)
                        return
                    }
                    if (this.form.code.length !== 4) {
                        this.form.shakeCode = true
                        reject(3)
                        return
                    }
                    if (this.form.password === '') {
                        this.form.shakePassword = true
                        reject(4)
                        return
                    }
                    if (this.form.repeatPassword === '') {
                        this.form.shakeRepeatPassword = true
                        reject(5)
                        return
                    }
                    if (this.form.repeatPassword !== this.form.password) {
                        this.form.shakeRepeatPassword = true
                        reject(6)
                        return 
                    }
                    resolve()
                })
            },
            registerAction() {
                this.verifyParams()
                    .then(() => {
                        alert('注册成功')
                    }).catch(index => this.warnIndex(index))
            },
            warnIndex(index) {
                this.warnText = this.form.warnArr[index]
                this.isNeedWarnTip = true
                this.warnTimer && clearTimeout(this.warnTimer)
                this.warnTimer = setTimeout(() => this.isNeedWarnTip = false, 2000)
            }
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener('click', this.hiddenCountryModal.bind(this), false)
            this.$refs.formItemAccount.removeEventListener('webkitAnimationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemAccount.removeEventListener('animationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.inputCode.removeEventListener('webkitAnimationEnd', e => this.form.shakeCode = false, false)
            this.$refs.inputCode.removeEventListener('animationEnd', e => this.form.shakeCode = false, false)
            this.$refs.formItemPassword.removeEventListener('webkitAnimationEnd', e => this.form.shakePassword = false, false)
            this.$refs.formItemPassword.removeEventListener('animationEnd', e => this.form.shakePassword = false, false)
            this.$refs.formItemRepeatPassword.removeEventListener('webkitAnimationEnd', e => this.form.shakeRepeatPassword = false, false)
            this.$refs.formItemRepeatPassword.removeEventListener('animationEnd', e => this.form.shakeRepeatPassword = false, false)
            this.timingTimer && clearInterval(this.timingTimer)
            next()
        },
        components: {
            vScreenLayout,
            vNormalHeader
        }
    }
</script>


<style scoped lang="less">
 @import '../style/views/register.less';
</style>