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

          <div
            class="dat"
            style="max-width: 340px;"
          >
            <div class="form-group">
              <label for="">Date Modified</label>
              <input
                type="date"
                class="form-control"
                v-model="dateMeasured"
              >
            </div>

            <div class="form-group">
              Upload Excel Measurement:
              <input
                type="file"
                class="form-control"
                @change="previewFile4"
              >
            </div>

            <div class="form-group">
              <button
                class="btn btn-warning"
                @click="uploadSiteMeasurement(lot.lotID)"
              >
                Upload Measurement
              </button>
            </div>
          </div>

          <div
            v-if="current_lot==lot.lotID"
            class="showz"
          >
            <p>Links to checklists</p>
            <a
              v-for="lnk in new_link"
              :id="'btn'+lot.lotID"
              :key="lnk.index"
              :href="'https://api.tpsapp.net/'+lnk"
              class="d-non m-1 btn-block"
              target="_blank"
              download=""
            >https://api.tpsapp.net/{{ lnk }}</a> <br>

            <p>Link to supervision</p>

            <a
              :id="'btn2'+lot.lotID"
              :href="new_link2"
              class="d-non m-1"
              target="_blank"
            >{{ new_link2 }}</a>
            <hr>
            <h6 class="py-2">
              Upload Checklist Excel
            </h6>
            <div class="form-group">

              <input
                id="pu"
                type="file"
                class="form-file"
                @change="previewChecklistFile"
              >

            </div>
            <div class="form-group">
              <button
                class="btn btn-warning"
                :disabled="uploading_checklist?true:false"
                @click="uploadChecklistExcel"
              >
                {{ uploading_checklist?'Uploading...':'Upload Checklist' }}
              </button>
            </div>

            <hr>
            <h6 class="py-2">
              Upload Supervision Excel
            </h6>
            <div class="form-group">

              <input
                id="pu"
                type="file"
                class="form-file"
                @change="previewSupervisionFile"
              >

            </div>
            <div class="form-group">
              <button
                class="btn btn-info"
                :disabled="uploading_supervision?true:false"
                @click="uploadSupervisionExcel"
              >
                {{ uploading_supervision?'Uploading...':'Upload Supervision' }}
              </button>
            </div>
          </div>

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
      current_lot: '',
      current_checklist_excel: '',
      current_supervision_excel: '',

      dateMeasured: '',

      uploading_checklist: false,
      uploading_supervision: false,

      measurementExcel: null,
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

    previewFile4(event) {
      console.log(event)

      if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0])
        // const preview = document.getElementById('previewImg2')
        // preview.src = src
        // preview.style.display = "block";
        // eslint-disable-next-line prefer-destructuring
        this.measurementExcel = event.target.files[0]
      }
    },

    uploadSiteMeasurement(lotId) {

      // alert(lotId)

      if(this.measurementExcel == null){

        alert('No excel doc selected')

      }
      const bodyFormData = new FormData()

      bodyFormData.append('LotID ', lotId)
      bodyFormData.append('DateMeasured', this.dateMeasured)
      bodyFormData.append('formFile', this.measurementExcel)

      axios({
        url: `https://api.tpsapp.net/api/Supervisions/UploadSiteMeasurementExcel/${lotId}`,
        method: 'post',
        data: bodyFormData,
      }).then(response => {
   
        console.log(response)
      }).catch(err => {
        alert(err)
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

      this.current_lot = lotID
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
      this.current_lot = lotID

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
      this.new_link = commaStrings.split(',')
    },

    previewChecklistFile(event) {
      [this.current_checklist_excel] = event.target.files
      console.log(this.current_checklist_excel)
    },

    previewSupervisionFile(event) {
      [this.current_supervision_excel] = event.target.files
      console.log(this.current_supervision_excel)
    },

    uploadChecklistExcel() {
      this.uploading_checklist = true
      const bodyFormData = new FormData()

      bodyFormData.append('formFile', this.current_checklist_excel)

      axios({
        url: 'https://api.tpsapp.net/api/Supervisions/UploadCheckListSupervisionExcel',
        method: 'post',
        data: bodyFormData,

      }).then(response => {
        this.uploading_checklist = false
        console.log(response)
      }).catch(err => {
        this.uploading_checklist = false

        console.log(err)
      })
    },

    uploadSupervisionExcel() {
      this.uploading_supervision = true
      const bodyFormData = new FormData()

      bodyFormData.append('formFile', this.current_supervision_excel)

      axios({
        url: 'https://api.tpsapp.net/api/Supervisions/UploadSupervisionExcel',
        method: 'post',
        data: bodyFormData,

      }).then(response => {
        this.uploading_supervision = false
        console.log(response)
      }).catch(err => {
        this.uploading_supervision = false

        console.log(err)
      })
    },

  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
