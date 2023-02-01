<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">
          TPS
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5 bg-white"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5 bg-white">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Welcome to TPS! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account by selecting supervision firm
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent
            >
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="login-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userName"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  <b-link :to="{name:'auth-forgot-password-v2'}">
                    <small>Forgot Password?</small>
                  </b-link>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <div class="form-group">
                <label for="">Supervision Firm:</label>
                <select
                  id=""
                  v-model="selFirmID"
                  name=""
                  class="form-control"
                >
                  <option value="">
                    --Select Supervising Firm--
                  </option>
                  <option
                    v-for="firm in firms"
                    :key="firm.id"
                    :value="firm.supervisingFirmID"
                  >
                    {{ firm.supervisingFirmName
                    }}
                  </option>

                </select>
              </div>

              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Remember Me
                </b-form-checkbox>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                @click="login()"
              >
                Sign in
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{name:'page-auth-register-v2'}">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text>

          <!-- divider -->

          <!-- social buttons -->

        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from 'axios'

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: '',
      userName: '',
      firms: [],
      selFirmID: '',
      sideImg: require('@/assets/images/pages/4786.jpg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/4786.jpg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  mounted() {
    this.getFirms()
  },
  methods: {
    validationForm() {
      this.$refs.loginValidation.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      })
    },
    login() {
      const bodyFormData = new FormData()

      bodyFormData.append('UserName', this.userName)

      bodyFormData.append('UserPassword', this.password)

      bodyFormData.append('SupervisingFirmID', this.selFirmID)

      bodyFormData.append('RequestType', '4')

      axios({
        url: 'https://api.tpsapp.net/api/UserProfile',
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        // data: bodyFormData,
        data: JSON.stringify({
          UserName: this.userName,
          UserPassword: this.password,
          SupervisingFirmID: this.selFirmID,
          RequestType: '4',
        }),

      }).then(response => {
        console.log(response)

        localStorage.setItem('supervisingFirm', response.data.supervisingFirm)
        localStorage.setItem('userID', response.data.newUser.userID)
        localStorage.setItem('userFullName', response.data.newUser.userFullName)
        localStorage.setItem('userEmail', response.data.newUser.userEmail)
        localStorage.setItem('defaultRole', response.data.newUser.defaultRole)

        alert('Credentials verified')

        return this.$router.push('/')
      }).catch(err => {
        console.log(err)
        return this.$router.push('/login')
      })
    },

    getFirms() {
      axios({
        url: 'https://api.tpsapp.net/api/SupervisingFirm',
        method: 'get',

      }).then(response => {
        this.firms = response.data
        console.log(response)
        // alert('got it')
      }).catch(err => {
        alert(err)
      })

      // alert(`${this.userEmail}  ${this.password}`)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
