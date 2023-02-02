<template>
  <div>

    <h4>{{ contract.contractDescription }}</h4>

    <div class="card">
      <div class="card-body table-responsive">

        <div class="row">
          <div class="col-md-6">
            <h6>Active Facilities:</h6>
            <div
              v-for="contractFacility in contractFacilities"
              :key="contractFacility.id"
              class="form-group"
            >
              <button class="btn btn-primary btn-block">
                {{ contractFacility.facilityName }}
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Select Facility Type</label>

              <select
                id=""
                v-model="selFacilityTypeID"
                name=""
                class="form-control"
              >
                <option
                  v-for="facility in facilities"
                  :key="facility.id"
                  :value="facility.facilityTypeID"
                >
                  {{ facility.facilityName }}
                </option>
              </select>

              <!-- <div
                v-for="facility in facilities"
                :key="facility.id"
                class="form-check"
              >
                <input
                  id="defaultCheck1"
                  v-model="facilities"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  class="form-check-label"
                  for="defaultCheck1"
                >
                  {{ facility.facilityName }}
                </label>
              </div> -->

            </div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                @click="mapFacility()"
              >
                Add Facility
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="card ">
      <div class="card-body">
        <b-tabs
          content-class="pt-1"
        >
          <b-tab
            v-for="contractFacility in contractFacilities"
            :key="contractFacility.id"
            :title="(contractFacility.facilityName) + contractFacility.contractFacilityTypeID"
          >

            <div class="col-md-6 py-3">
              <div>

                <!-- Accept specific image formats by extension -->
                <label
                  for="extension"
                  class="mt-1"
                >Upload BOQ</label> <br>
                <div class="">
                  <input
                    :id="'customFile'+contractFacility.contractFacilityTypeID"
                    :ref="'file'+contractFacility.contractFacilityTypeID"
                    type="file"
                    @change="previewFile4"
                  >
                </div>
              </div>

              <div class="form-group py-2">
                <button
                  class="btn btn-primary"
                  @click="uploadBOQ(contractFacility.contractFacilityTypeID)"
                >
                  Upload
                </button>
              </div>
            </div>

            <app-collapse accordion>
              <app-collapse-item
                title="Review Sites"
                class="border"
              >
                <div class="table-responsive">
                  <table class="table py-3 table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Site Name</th>
                        <th>LGA</th>

                        <th>STATE</th>
                        <th />

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                          >
                        </td>
                        <td>
                          <select class="form-control">
                            <option
                              v-for="lga in lgas"
                              :key="lga.id"
                              value=""
                            >
                              {{ lga.lgaName }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <div class="form-group">

                            <select
                              id=""
                              name=""
                              class="form-control"
                            >
                              <option
                                v-for="state in states"
                                :key="state.id"
                                value=""
                              >
                                {{ state.stateName }}
                              </option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <button class="btn btn-sm btn-primary p-1">
                              update
                            </button>
                          </div>
                        </td>

                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="card border">
                  <div class="card-body">
                    <h6>Add Site</h6>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Site Name</label>
                          <input
                            type="text"
                            class="form-control"
                          >
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">LGA</label>
                          <select
                            id=""
                            name=""
                            class="form-control"
                          >
                            <option
                              v-for="lga in lgas"
                              :key="lga.id"
                              value=""
                            >
                              {{ lga.lgaName }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">LGA</label>
                          <select
                            id=""
                            name=""
                            class="form-control"
                          >
                            <option
                              v-for="state in states"
                              :key="state.id"
                              value=""
                            >
                              {{ state.stateName }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="py-2 float-right">
                          <button class="btn btn-warning">
                            Add Site
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </app-collapse-item>
              <app-collapse-item
                title="Review BOQ Items"
                class="border"
              >

                <div class="py-2">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Unit</th>
                        <th>Rate</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            :value="'Preliminaries: Clearing'"
                          >
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            :value="'L'"
                          >
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            :value="'400'"
                          >
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            :value="'80000'"
                          >
                        </td>
                        <td>
                          <button class="btn btn-sm btn-primary">
                            update
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </app-collapse-item>

            </app-collapse>

          </b-tab>

        </b-tabs>
      </div>
    </div>

    <!-- <h6>Contractor Details</h6> -->

  </div>
</template>

<script>

import axios from 'axios'
import {
  BTabs, BTab, BCardText, BFormFile,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BTabs,
    BCardText,
    BTab,
    BFormFile,
    AppCollapse,
    AppCollapseItem,

  },
  data() {
    return {

      contract: '',

      facilities: [],

      selFacilityTypeID: '',

      contractFacilities: [],

      lgas: [],

      states: [],

      file: '',

    }
  },
  mounted() {
    this.getContract()
    this.getFacility()
    this.getContractFacilities()
    this.getLGAs()
    this.getStates()
  },
  methods: {
    getContract() {
      axios({
        url: `https://api.tpsapp.net/api/Contract/${this.$route.params.id}`,
        method: 'get',

      }).then(response => {
        this.contract = response.data
        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },
    getFacility() {
      axios({
        url: 'https://api.tpsapp.net/api/Facility',
        method: 'get',
      }).then(response => {
        this.facilities = response.data

        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },

    getContractFacilities() {
      // const bodyFormData = new FormData()

      // bodyFormData.append('ContractID', this.$route.params.id)

      axios({
        url: `https://api.tpsapp.net/api/Contract/GetContactFacilities/${this.$route.params.id}`,
        method: 'post',
        // data: bodyFormData

      }).then(response => {
        this.contractFacilities = response.data
        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },

    getLGAs() {
      axios({
        url: 'https://api.tpsapp.net/api/LGA',
        method: 'get',
      }).then(response => {
        this.lgas = response.data
        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },

    getStates() {
      axios({
        url: 'https://api.tpsapp.net/api/State',
        method: 'get',
      }).then(response => {
        this.states = response.data
        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },

    mapFacility() {
      alert(this.selFacilityTypeID)
      alert(this.$route.params.id)
      const bodyFormData = new FormData()

      bodyFormData.append('ContractID', this.$route.params.id)

      bodyFormData.append('FacilityTypeID', this.selFacilityTypeID)

      axios({
        url: 'https://api.tpsapp.net/api/Contract/MapFacilityToContract',
        method: 'post',
        data: bodyFormData,
      }).then(response => {
        this.getContractFacilities()
        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },

    uploadBOQ(ContractFacilityTypeID) {

      alert(ContractFacilityTypeID)
      
      const bodyFormData = new FormData()
      bodyFormData.append('formFile', this.file)
      bodyFormData.append('ContractFacilityTypeID', ContractFacilityTypeID)
      axios({
        url: 'https://api.tpsapp.net/api/BOQImport',
        method: 'post',
        data: bodyFormData,
      }).then(response => {
        // this.getContractFacilities()
        console.log(response)
      }).catch(err => {
        alert(err)
      })
    },

    previewFile4(event) {
      console.log(event.target.files[0])

      // console.log(this.$refs.f)

      if (event.target.files.length > 0) {
        // const src = URL.createObjectURL(event.target.files[0])

        // preview.style.display = "block";
      }

      // eslint-disable-next-line prefer-destructuring
      this.file = event.target.files[0]
    },

  },
}
</script>

<style>

</style>
