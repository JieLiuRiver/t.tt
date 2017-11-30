<template>
    <section class="forgot-container">
        <v-screen-layout>
            <v-normal-header title="忘记密码"></v-normal-header>
             <div class="form-box">
                <form class="form-container">
                    <div class="form-item f-wf">
                        <div class="form-item-inner f-wf f-hf f-pr" :class="formItemInnerAccountClasses" ref="formItemAccount">
                            <span class="ccc f-pa f-ib f-hf" v-if="this.loginWay !== 'normal'">86</span>
                            <span class="country f-ib f-hf f-pa f-fs12" v-if="this.loginWay !== 'normal'" @click.stop="toggleCountry">{{currentCountry.label}}</span>
                            <input type="text" v-model="form.account" :placeholder="form.acountPlacholder" class="f-ib f-pa f-wf f-hf input-account" :style="inputAccountStyles"/>
                        </div>
                    </div>

                    <div class="form-item-code f-wf">
                        <div class="form-item f-pr">
                            <input type="text" ref="inputCode" :class="formItemInnerCodeClasses" v-model="form.code" :placeholder="form.codePlaceholder" class="f-ib f-pa f-wf f-hf input-account"/>
                        </div>
                        <div class="form-item form-itembtn">
                            <div class="form-code-btn">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAwCAIAAABMqgVnAAAABnRSTlMA/wD/AP83WBt9AAAO2klEQVR4nOVceVhTVxY/ISEQgoCyCQjiwqYYRC2NyCCUIlZaHbeqXZDUtkprp5u1aqppOs04dTqfdapSpTZqS62loqgVKVaWIiIiqwgiomUR2dewmjB/3OH28TaTsPab38fH9+527rn398695y4vnL6+PvjTIiEzkSlJplTIJVJiTIhP8PBrNCwwGG0FdEBCZiL+E0cEJGQmypQKpsyYIZwHFSFKGAGdhwR/ApJwtxIjEQdyiZTIE3pmYo5kWEySxyA4Y3a4Q4ZC7VnoH8qYUmmhZeaxOSSOOZJI7zU2C+35IJYllcLsPlbgmGJrDJGE6NHJPthBEqWH5DFC1YiSpNFomtqaapvrPCa7x6bG7TmxN3T+Yu/pXoY8nvY9qI0dsOD67ezz6fGTrB0q66oAwMxknFBgam85carDFA8nt0+O7UaSibWMOlUjRNLWrz66UnBVrVFnRCaLIwLQfwDYuHSDveXEQQon0Yb5RvE7w7YV3Cu8WphZ01jDIkRgJPAX+fp6iqkCgY6n7t7u7JLckorSksrSpramrp4uA47BzXu31gU9//aqN7p6uoz5xoNsF8ZIkBR1TnnkwjHapCXikCc95jEVZDEvqu9Aa2EypcLMxKy1oxXHkBxCEtydXNc8tcqAw6FNRVTl3MnzdvEKfOeZpC/imfx4obHJcv9lLy9aZy40Y6pLeww7SVduZmw5uJ1YCzYjAFjpv0w0zRM9D342Ikp4pFbHpZ3PL7vJkp+WsPkzn1zs8zStSg8ba7NLcq4VZaFWAAD7YsvOcuKeTQqXSdN0bQgJw7hOqqp7AADvH9jW19eHmoRAbNip1DjQYpp52FibnJsmUypkSsXfj3+GHgDg8Llvzl+9eOt+MVFCV0/3kZ+P87hcdoaoQMW9XbyoSdeKsuRHd0fGRSGG4HH0oPaqOlUTxlnopAMthouk7t7ubYd34SBqEpEqAHg1NJx9uaPp67t+OxsAIuOiknJSAEAukT5SP4J+I6iqr75efGOGs7uRodEvWZc7e7oA4Kfk0+W1FUTaaOVTfXEUvFJwFQdRUkLmrxcyEjR9GpIE2kYRLay1o03x7R62btIOwzLcfXJ094VrCTBwZCOBfWSTKRUTzCY0tjZqX6mpwLS9s10XNWnA4/J2hn1I0mQwAr/fdXSqnfOgdBoOSxJHBOwK346fmbLRbuGgYNHvt3lcHjtDVI7ZGRLwjX085qFS/l5+XAMuVQ4y0ztVZf0CVZ8Owg6QSf2cHq+3BIwhJqnwXhGPy8PcZEQmk0YDUueSpm65RPqg4WFM8mk0prFAp9WSo7XDm8s3hopDUJGgOQvXBq0iyiE+V9RUomBKXlrvo14mmc4TnQBg7+bPZOE7Zji7M2XLLL6hjYbsGLLhrrm9OUzx2tndMYghgZHA0mwCWjCSwDXgqjVq0l4AAOwM2/Zl7FfN7c04nt1dJoE4x2AH3ZBn+NaKTbR+MK1kDye3ovLbO8O27Tmxt7u3mygcFeFwOCv8l4mmzsRJQXMDie8lEAZ5HpeX+p9fDAwGawlDY0kajWZH1Me1zXU4Ztf67aYCU9rMRnwjqgXIJVIel6sTQ9QlEfEB/XdzdCEyhPPsjz1ElQAAjW2Ncom0rPoeYojoUyDi/Wb5EhkCxETeFWIMJuyR+lF5bQVLE7TE0JB04PSh7JJc6NfvpUXrAr39iUtIIqhLcdQXe374gmpeCBam5ksXhG5d964sfMeHL7wnl0i5BlyiW8g07tlOsKVW1NbRXtdST6xCLpH+L6lTJVMqahtrqTqg4Dy3OaSkhMxEEyMBbe0AUN/cwJSkPYaAJHFEQPSlkzg41837jWWvAUCrqo2UE3WEiZGAaiLlNZWqThWt6ViYmr+7evNc19lCYxMDDgf1CJpgSNZDqggAmtqaiPEoW2LWZVIVeOHV09sjl0gb2pqAjngB39jC1Iw6HZ64HENVG6GF4U3VCYMlqbymQmhsgp4zIpNtLKwVr8rQKKzqUpEyo+ZV1lUR99YQ7laXMVlDc3sLNfJs+gUWrbDkovvFbR3tOPKjsA/Ppcfn3S1AMdQaORwOACB/gbqA6+zpUnV1kCIbWhsz+1e4VKjVahY9tYT+jkNHV4fkn5t+rylHQR6XF/XBfo/J7gDQomoN2bIUxZOWip5TZqwOWE6VRhx5mMyC+Apr6VAgaQu9/lLfUl9aVdbd280y1ZmZmL2/5q0zaedz7uTRauI3yzd4XiAO/l5T8WNSLIvrv2eTwt9rgTZ6skN/S/r0+GcnPz6Og2n7LyGGAIA0VxObevPeLaooZfy36IHYL4iMXeu342x45kjJS9NSSSQtJe+3wvtFRG+NFkKBEACszCYAwUUkZkgrSAeAc+nxMqVi/+nD31w4TssQXnWMH4o9IdCbpO8Sf7ick4LdmOd8lxBTC+8VkfLjrveb5UujBMeAlA0/l1XfJyXdqSpLyaUh6bFOBJMJ4vwWQjMAcLB2gIEuIqkhWbezAWDz8tdJSZgb3C0OVva0mugKPYe7nDt5m794T61RI+XW/+O1r7ceNOQZ4gwZt66/8+UHtGWdbBzLaytcHaerOlXeLl7nr15kH8EERoLO7s6NSzcY8njW5lZxV35GniRot5Ci5uFxeUyLZfEMn2eeDAaAvTEHHrseYK89IzJ50fvP/fLvc+zqaQN9LKmuud7bxQsxBADiiIAQn6cNeYaxqXHfJf4QdU6576eDJy6dBLr9BQAor62QS6QlFaVV9dWavj7U1Bu3c5iq6+zuBIBDZ4/sjz0kUyowQ6D1xSBi0FRgGr74JRcH+uMDBys79BD8xFNAmQ5JwOOhwEgAlJ1WcUSAi+N0pkbpBH0s6bV/vRn1wQGkB9MWKsvWKgLiBp8ndff27I3Zj/hgL8Ieg7YzaItzOJyPw3d09nQJ+Mb7fjrYONA7R3hn1Zt4Ivk1OyU1L41aCym40n9Zwb3CkopSFCQePb+0aN3m5RtZWqQldLYkcURAQVmhOCIAccDEBIpn2VtD7UTvoEypMDLkLxGHsNRLO7ZQYxZ6+T07fzEA4C1UAHC0dljo9Rf0Ogr4xu2dKipDSNUvfjqAY4LmLFwTuNLC1IKUB1cqmuq5Zc3bommeD+ofkhqO/i/wFLO0SHvobEkNLQ2h21YypT7WgGiBXanrxTcuZPxCPbkhQcA3RkdHwOqyozwCvjHxrF2mVCz2Cb6YmUgtGzw30E/kS3Lq1BrN3QdldyrvhopDZErFVDtnKwsreys7dydXAd8YAGqa6g6eOUxV0lxoHr/n9OA37kAPS7I0t2RJpWWIdBxASn1rRQR+fsJ9rix8OwA4201mkjPNfsqLwWtpZwu5RGpH2AcS8I1RP5LuqMx2EaF9RZK7n5qf3tnTRdqa4hoYRCeeRMtVuURaVn0/VBziPV0k6N/csh1v7UN3TaNF1TIkDIF+jsPhLftZUonzJ35m6lMAMOYbkZLkEqlk8Ut/Wxkhl0jnuc3xcHJD8eiUNizkBb4hH3U3dY9VNF2EnlVdHQBwMfNSQuavMPAK0feXfiStb1DVC2aJBZR9RVJFsvAdOB676VnF2dQe4PP4LL2kE/RxHNLy07dE7hhkxc/OXyw0FgoFwsm2jrqWPZUSR3t/wZBr2KvuneM6u/xhRX3rHzubcom0pLLUddL0hMxfc+7k0g6VtuOtNy59lUt492VKxeYVG2ua6mKSYmc6e9Q21ze0NATNWegn+mOp96Dh4aGzR2iVfP25V15ZEqZr02ihjyX5iXzxC0XyO/k8vr2V3ezpIgBYF/R8WMgLxFTii28z3maGs/tkW8f+Db0H+WWF+XdvAkBOab5MqbhRkkvarcDwdvGivbzwUdhWAFi2IJTIEADIlIroxJMypSLEJwgzBAPNurm9tbGtkRgjmup58HRUTFKsXCJ9PnBFXXOdLHx74o0kmVIRm3r2amFman765RsDmk9ESu5vLGeGOkH/vbv3D263sbC2trCyMre0GW9jbW5pM956nMk4Yp7i8hJ3J1faieqtFRFW5hOgv6fmuM4mLoAw0FVTIhkVtVXRiT8Q+xr6bWKcwLSrp7tXrXPX8Li8F59eM9XemRgZfy0x41Ymbf7HLqLNhebHdhyeOPCgRG8M+727rOLszfveo0368IX38EmMTKnw9/JLHbgph/vCydZxjouXudC8o6fzTkVp3t0CJrVfDF4TnXiSNokKYl9vWLLeyXYSKUNl3YOo80qddnjxOklLHbTBsH+fhA5UqEpz+k+GEOQSKb5VQ/UAy2sqzqSdP5YQHZMUm1uaz/JiuU6aLn15q52lHbtWxI6e6eyxdd27VIYAYJK1vZujCxp1sQdBe72CuHHnaDPp/sPf2RXQCcNuSXFp53dHf06NFwqEW9e+g4OoC76K+7p64I1tbQ7RaV9wdyfX4vIS9oI/JsX6iXzRZXTqnjdCV0/30YvR1Q3VLKIQMiKT/TY/vSZw5YbQ9Sb9Z2xDgpG4C44vEeJtiH2nIs1MTO0t7UN8gkiZHzbWfnPhOPvBDxUGHINFTwTNn+lDes0raqvyy25W1FY1tzX1POrlcDgmRiatHa1yiTSnNN/N0YV68k1lS6ZU7Fq/PSU3LbPoOmkuJMJ2vM0zTy5aHbCcfSmpB0aCpPy7N0XTPDOLsqwsrGwsrK8UpLPnr26oOZVyBl1DQCCdM5HIsx1v/cZfX4eBiyHSAlYPtakFH6nV96rvV9ZXCY2FO8O2AYA4ImDtU6smWTuIpnm6OrroUYs2GJ2PyPDnfLTjOwCoNZrskpwbt3M2LXuV3Z6IV/6HClStiISN/OdKo/aln/afE7d1tH9+cp9cIj175YKqS1VcXjJr6syCssLVgSumTJwsZB399TAj9iKj8kHZaH6OqeWvMOg9XlGlMRmuNmVh9D75G/1vZqlfMg+SkkGCVoHR/SJz9H/HgdR+bRhi2i7CkUw3FJgiWRSQKRX/L9/MaoOR/9GLxw6qo04PwuhbEkaIT3CITzDpTWcP0oJ65YgJLAddSJnH1jUyGEOWRALRTdd+lmLPTDyipc0wdoghgjfaCjBC+/4idjo7B38ubjDGriVRwfJrQ+xgcsHHODcY/wVAJPxg3f6YIwAAAABJRU5ErkJggg=="/>
                            </div>
                        </div>
                    </div>

                    <div class="btn-wrapper f-wf f-pr">
                        <div class="btn btn-primary f-fs12 f-pa" @click="nextStep">
                            下一步
                        </div>
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
                <div class="tip-wrpper">
                    <span class="error-tip" v-show="isNeedWarnTip">{{ warnText }}</span>
                </div>
                <div class="info-wrapper f-pr">
                    <a class="f-ib f-hf f-pa" href="javascript:;" @click="switchMethod">{{ loginWay === 'normal' ? '国际手机号找回' : '普通找回' }} <i class="ion-ios-arrow-right"></i></a>
                </div>
            </div>
        </v-screen-layout>    
    </section>
</template>


<script>
    import vNormalHeader from '@/components/normal_header'
    import vScreenLayout from '@/components/screen_layout'
    import Bus from '@/bus'
    export default {
        data() {
            return {
                isNeedWarnTip: false,
                warnText: '',
                isNeedSwitchCountry: false,
                loginWay: 'normal',
                currentCountry: {
                    value: 'CN',
                    label: '中国'
                },
                form: {
                    shakeAccount: false,
                    shakeCode: false,
                    acountPlacholder: '手机号/邮箱',
                    codePlaceholder: '验证码',
                    account: '',
                    code: '',
                    warnArr: ['请输入手机号/邮箱','请输入手机号','手机号/邮箱格式错误', '手机号格式错误','手机号/邮箱不存在', '请输入验证码', '验证码错误']
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
            this.$refs.inputCode.addEventListener('webkitAnimationEnd', e => this.form.shakeCode = false, false)
            this.$refs.inputCode.addEventListener('animationEnd', e => this.form.shakeCode = false, false)
        },
        methods: {
            switchMethod() {
               this.form.account = ''
               this.loginWay = this.loginWay === 'normal' ? 'international' : 'normal'
               this.form.acountPlacholder = this.loginWay === 'normal' ? '手机号/邮箱' : '手机号'
            },
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
                    if (this.form.code === '') {
                        this.form.shakeCode = true
                        reject(5)
                        return
                    } else if (this.form.code.length !== 4) {
                        this.form.shakeCode = true
                        reject(6)
                        return
                    }
                    resolve()
                })
            },
            nextStep() {
                this.verifyParams()
                    .then(() => {
                        alert('下一步')
                    }).catch(index => this.warnIndex(index))
            },
            toggleCountry() {
                this.isNeedSwitchCountry = !this.isNeedSwitchCountry
            },
            warnIndex(index) {
                this.warnText = this.form.warnArr[index]
                this.isNeedWarnTip = true
                this.warnTimer && clearTimeout(this.warnTimer)
                this.warnTimer = setTimeout(() => this.isNeedWarnTip = false, 2000)
            }
        },
        computed: {
            formItemInnerAccountClasses() {
                return {
                    ['animate-shake']: this.form.shakeAccount
                }
            },
            inputAccountStyles() {
                return {
                    paddingLeft: this.loginWay === 'normal' ? '6px' : '60px'
                }
            },
            formItemInnerCodeClasses() {
                return {
                    ['animate-shake']: this.form.shakeCode
                } 
            }
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener('click', this.hiddenCountryModal.bind(this), false)
            this.$refs.formItemAccount.removeEventListener('webkitAnimationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.formItemAccount.removeEventListener('animationEnd', e => this.form.shakeAccount = false, false)
            this.$refs.inputCode.removeEventListener('webkitAnimationEnd', e => this.form.shakeCode = false, false)
            this.$refs.inputCode.removeEventListener('animationEnd', e => this.form.shakeCode = false, false)
            next()
        }
    }
</script>

<style scoped lang="less">
@import '../style/views/forgot_password.less';
</style>