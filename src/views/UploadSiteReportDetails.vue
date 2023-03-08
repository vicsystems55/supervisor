<template>
  <!-- Error page-->
  <div class="">
    <div class="container py-3">
      <b-link class="brand-logo">

        <h2 class="brand-text text-primary ">
          TPSAPP
        </h2>
      </b-link>

      <h4 class="py-5">
        All Lots
      </h4>
    </div>

    <div class="container">
      <!-- radio button -->

      <div class="row d-none">
        <div
          v-for="lot in lots"
          :key="lot.id"
          class="col-md-6"
        >

          <div class="card shadow btn">
            <div class="card-body">
              <h6 class="">
                {{ lot.lotDescription }}
              </h6>
            </div>
          </div>

        </div>
      </div>

      <!-- types -->

    </div>

    <div class="col-md-10 mx-auto ">
      <app-collapse
        accordion
        :type="'shadow'"
      >

        <app-collapse-item
          v-for="lot in lots"
          :key="lot.id"
          :title="lot.lotDescription + ' ' +lot.lotID"

          @change="alert('ser')"
        >
          <button
            class="btn btn-primary text-center m-2"
            :disabled="check_loading?true:false"
            @click=" generateChecklistExcel(lot.lotID)"
          >
            {{ check_loading?'Generating excel...':'Download Checklist' }}
          </button>

          <a
            :id="'btn'+lot.lotID"
            :href="new_link"
            class="d-none"
          >check</a>

          <button
            class="btn btn-primary text-center m-2"
            :disabled="sup_loading?true:false"

            @click=" generateSupervisionExcel(lot.lotID)"
          >
            {{ sup_loading?'Generating excel...':'Download Supervision' }}
          </button>

          

          <a
            v-for="lnk in new_link"
            :id="'btn'+lot.lotID"
            :href="'https://api.tpsapp.net/'+lnk"
            class="d-non m-1 btn-block"
            target="_blank"
            download=""
          >{{ lnk }}</a> <br>

          <a
            :id="'btn2'+lot.lotID"
            :href="new_link2"
            class="d-non m-1"
            target="_blank"
          >{{new_link2}}</a>

          <hr>
          <h6 class="py-2">Upload Checklist Excel</h6>
          <div class="form-group">
          
            <input type="file" id="pu" class="form-file">
        
            </div>
            <div class="form-group"><button class="btn btn-warning">Upload Checklist</button></div>

            <hr>
          <h6 class="py-2">Upload Supervision Excel</h6>
          <div class="form-group">
          
            <input type="file" id="pu" class="form-file">
        
            </div>
            <div class="form-group"><button class="btn btn-info">Upload Supervision</button></div>

        </app-collapse-item>

      </app-collapse>
    </div>
  </div>
<!-- / Error page-->
</template>

<script>
/* eslint-disable global-require */
import axios from 'axios'
import store from '@/store/index'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {
  BFormRadioGroup, BFormRadio, BFormGroup, BLink,
} from 'bootstrap-vue'

export default {
  components: {

    BLink,

    AppCollapse,
    AppCollapseItem,

    BFormRadioGroup,
    BFormRadio,
    BFormGroup,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/error.svg'),
      contracts: [],
      lots: [],
      new_link: [],
      new_link2: '',
      check_loading: false,
      sup_loading: false,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/error-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },

  mounted() {
    this.getLots()
  },

  methods: {
    getContracts() {
      axios({
        url: 'https://api.tpsapp.net/api/Contract',
        method: 'get',

      }).then(response => {
        this.contracts = response.data
        console.log(response)
        console.log('got it')
      }).catch(err => {
        console.log(err)
      })
    },

    getLots() {
      axios({
        url: `https://api.tpsapp.net/api/Supervisions/GetSupervisionLots/${this.$route.params.id}`,
        method: 'get',

      }).then(response => {
        this.lots = response.data
        console.log(response)
        console.log('got it')
      }).catch(err => {
        console.log(err)
      })
    },

    generateLink(link, lotID) {
    //  this.new_link = `https://api.tpsapp.net/${link}`

      this.new_link = link

    //   return document.getElementById(`btn${lotID}`).click()
    },

    generateChecklistExcel(lotID) {
      this.check_loading = true
      axios({
        url: `https://api.tpsapp.net/api/Supervisions/DownLoadCheckSupervisionExcel/${lotID}`,
        method: 'get',

      }).then(async response => {
        this.check_loading = false

        console.log(response)
        console.log('got it')

        await this.generateLink(response.data, lotID)
      }).catch(err => {
        this.check_loading = false
        console.log(err)
      })
    },

    generateSupervisionExcel(lotID) {
      this.sup_loading = true

      axios({
        url: `https://api.tpsapp.net/api/Supervisions/DownLoadSupervisionExcel/${lotID}`,
        method: 'get',

      }).then(response => {
        this.sup_loading = false

        this.new_link2 = `https://api.tpsapp.net/${response.data}`

        // document.getElementById(`btn2${lotID}`).removeClass('d-none')
        console.log(response)
        console.log('got it2')
      }).catch(err => {
        this.sup_loading = false
        console.log(err)
      })
    },

    convertComma(commaStrings) {
        console.log(commaStrings)
      this.new_link = commaStrings.split(",")
    },

    uploadChecklistExcel(lotID) {
      this.check_loading = true
      axios({
        url: `https://api.tpsapp.net/api/Supervisions/DownLoadCheckSupervisionExcel/${lotID}`,
        method: 'get',

      }).then(async response => {
        this.check_loading = false

        console.log(response)
        console.log('got it')

        await this.generateLink(response.data, lotID)
      }).catch(err => {
        this.check_loading = false
        console.log(err)
      })
    },

    uploadSupervisionExcel(lotID) {
      this.sup_loading = true

      axios({
        url: `https://api.tpsapp.net/api/Supervisions/DownLoadSupervisionExcel/${lotID}`,
        method: 'get',

      }).then(response => {
        this.sup_loading = false

        this.new_link2 = `https://api.tpsapp.net/${response.data}`

        // document.getElementById(`btn2${lotID}`).removeClass('d-none')
        console.log(response)
        console.log('got it2')
      }).catch(err => {
        this.sup_loading = false
        console.log(err)
      })
    },


  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
