<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">

      <h2 class="brand-text text-primary ml-1">
        TPSAPP
      </h2>
    </b-link>

    <div class="container">
      <!-- radio button -->

      <!-- types -->
      <div class="col-md-10 mx-auto">
        <app-collapse
          accordion
          :type="'shadow'"
        >

          <app-collapse-item
            v-for="contract in contracts"
            :key="contract.id"
            :title="contract.contractDescription"

           @change="alert('ser')"
       
          >
          <button      @click="getLots(contract.contractID)" class="btn btn-primary text-center">load lots</button>
            <table class="table table-responsive">
              <tbody>
                <tr v-for="lot in lots" :key="lot.id">
                  <td style="width: 90px;" class="">
                    {{ lot.lotDescription }}
                  </td>
                  <td>
                    <a class="btn btn-primary btn-sm" :href="'https://api.tpsapp.net/api/Supervisions/DownLoadSupervisionExcel/'+lot.lotID">download supervision</a>
                  </td>

                  <td>
                    <a class="btn btn-primary btn-sm" :href="'https://api.tpsapp.net/api/Supervisions/DownLoadCheckSupervisionExcel/'+lot.lotID">download checklist</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </app-collapse-item>

        </app-collapse>
      </div>
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
    this.getContracts()
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

    getLots(contractID) {

      axios({
        url: `https://api.tpsapp.net/api/Supervisions/GetSupervisionLots/${contractID}`,
        method: 'get',

      }).then(response => {
        this.lots = response.data
        console.log(response)
        console.log('got it')
      }).catch(err => {
        console.log(err)
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
