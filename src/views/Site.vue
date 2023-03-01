<template>
  <div>

    <h6>  {{ communityName }}</h6>

    <div class="row">
      <div class="col-md-12 p-1">

        <div class="card">
          <div class="card-bod">
            <table class="table">
              <tr>
                <td>LOCATION:</td>
                <td class="font-weight-bold">
                  {{ communityName }}
                </td>
              </tr>
              <tr>
                <td>LGA:</td>
                <td class="font-weight-bold">
                  {{ localGovtName }}
                </td>
              </tr>
              <tr>
                <td>FACILITY TYPE:</td>
                <td class="font-weight-bold">
                  {{ facilityTypeCode }}
                </td>
              </tr>
              <tr>
                <td>LOT CODE:</td>
                <td class="font-weight-bold">
                  {{ lotDescription }}
                </td>
              </tr>
              <tr>
                <td>CONTRACTOR:</td>
                <td class="font-weight-bold">
                  {{ contractorName }}
                </td>
              </tr>

            </table>
          </div>
        </div>

      </div>
      <div class="col-md-6 p-1">
        <div class="card">
          <div class="card-body">
            <h6>Supervision</h6>
            <hr>
            <div>

              <div
                v-for="siteSupervision in siteSupervions"
                :key="siteSupervision.id"
                class="form-check mb-1"
              >
                <input

                  :id="siteSupervision.fielsCheckBoxName"
                  class="form-check-input"
                  type="checkbox"
                  :name="siteSupervision.fielsCheckBoxName"
                  :value="siteSupervision.fielsCheckBoxName"
                  :checked="siteSupervision.isCompleted?1:0"

                  @click="collectSiteIds(siteSupervision.fielsCheckBoxName)"
                >
                <label
                  class="form-check-label"
                  for="defaultCheck1"
                >
                  {{ siteSupervision.stage }}
                </label>
              </div>

              <div class="form-group">
                <button
                  class="btn btn-primary"
                  :disabled="site_supervision_loading?true:false"

                  @click="submitForm()"
                >

                  {{ site_supervision_loading?'Please wait...':'Submit' }}

                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="col-md-6 p-1">
        <div class="card">
          <div class="card-body">

            <h6>Comments</h6>
            <hr>

            <div
              v-for="siteComment in siteComments"
              :key="siteComment.id"
              class="form-check mb-1"
            >
              <input
                :id="siteComment.fieldCheckBoxName"
                class="form-check-input"
                type="checkbox"
                :name="siteComment.fieldCheckBoxName"
                :value="siteComment.fieldCheckBoxName"
                :checked="siteComment.added?1:0"

                @click="collectCommentsIds(siteComment.fieldCheckBoxName)"
              >
              <label
                class="form-check-label"
                for="defaultCheck1"
              >
                {{ siteComment.description }}
              </label>
            </div>

            <div class="form-group">
              <button
                class="btn btn-primary"
                @click="submitCommentsForm()"
              >
                {{ site_comments_loading?'Please wait...':'Submit' }}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h6 class="text-center">
          CRITICAL STAGES
        </h6>
        <b-tabs
          pills
          align="center"
        >
          <b-tab
            title="1"
            active
          >
            <b-card-text>
              <div class="row">

                <div
                  v-for="siteCheck in sortCheckList('CRITICALSTAGE1')"
                  :key="siteCheck.id"
                  class="col-md-6"
                >

                  <div
                    v-if="siteCheck.responseDataType=='Select'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <select
                      id=""
                      :id="siteCheck.fieldAttributeName"
                      name=""
                      class="form-control"
                      :name="siteCheck.fieldAttributeName"
                      :value="siteCheck.responses"
                    >
                      <option value="">
                        Yes
                      </option>
                      <option value="">
                        No
                      </option>
                    </select>
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Select '"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <select
                      id=""
                      :id="siteCheck.fieldAttributeName"
                      name=""
                      class="form-control"
                      :name="siteCheck.fieldAttributeName"
                      :value="siteCheck.responses"
                    >
                      <option value="">
                        Yes
                      </option>
                      <option value="">
                        No
                      </option>
                    </select>
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Text'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      :id="siteCheck.fieldAttributeName"
                      type="text"
                      class="form-control"
                      :name="siteCheck.fieldAttributeName"
                      :value="siteCheck.responses"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Text '"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      :id="siteCheck.fieldAttributeName"
                      type="text"
                      class="form-control"
                      :name="siteCheck.fieldAttributeName"
                      :value="siteCheck.responses"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Number'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      :id="siteCheck.fieldAttributeName"
                      type="number"
                      class="form-control"
                      :name="siteCheck.fieldAttributeName"
                      :value="siteCheck.responses"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='FILE'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label><br>
                    <input
                      :id="siteCheck.fieldAttributeName"
                      type="file"
                      class="form-file"
                      :name="siteCheck.fieldAttributeName"
                    >
                  </div>
                </div>

              </div>

              <div class="form-group">
                <button
                  class="btn btn-primary"
                  @click="submitChecklist('CRITICALSTAGE1')"
                >
                  {{ check_list_loading?'Just chill...':'Submit Checklist' }}
                </button>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="2">
            <b-card-text>
              <div class="row">

                <div
                  v-for="siteCheck in sortCheckList('CRITICALSTAGE2')"
                  :key="siteCheck.id"
                  class="col-md-6"
                >

                  <div
                    v-if="siteCheck.responseDataType=='Select'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <select
                      id=""
                      name=""
                      class="form-control"
                    >
                      <option value="">
                        Yes
                      </option>
                      <option value="">
                        No
                      </option>
                    </select>
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Select '"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <select
                      id=""
                      name=""
                      class="form-control"
                    >
                      <option value="">
                        Yes
                      </option>
                      <option value="">
                        No
                      </option>
                    </select>
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Text'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Text '"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Number'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      type="number"
                      class="form-control"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='FILE'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label><br>
                    <input
                      type="file"
                      class="form-file"
                    >
                  </div>
                </div>

              </div>
            </b-card-text>
          </b-tab>

          <b-tab title="3">
            <b-card-text>
              <div class="row">

                <div
                  v-for="siteCheck in sortCheckList('CRITICALSTAGE3')"
                  :key="siteCheck.id"
                  class="col-md-6"
                >

                  <div
                    v-if="siteCheck.responseDataType=='Select'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <select
                      id=""
                      name=""
                      class="form-control"
                    >
                      <option value="">
                        Yes
                      </option>
                      <option value="">
                        No
                      </option>
                    </select>
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Select '"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <select
                      id=""
                      name=""
                      class="form-control"
                    >
                      <option value="">
                        Yes
                      </option>
                      <option value="">
                        No
                      </option>
                    </select>
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Text'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Text '"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='Number'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label>
                    <input
                      type="number"
                      class="form-control"
                    >
                  </div>

                  <div
                    v-if="siteCheck.responseDataType=='FILE'"
                    class="form-group"
                  >
                    <label for="">{{ siteCheck.reportQuestion }}</label><br>
                    <input
                      type="file"
                      class="form-file"
                    >
                  </div>
                </div>

              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="4">
            <b-card-text>
              4 Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar
              liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
              fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake
              halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame
              snaps sugar plum candy canes.
            </b-card-text>
          </b-tab>

          <b-tab title="5">
            <b-card-text>
              5 Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar
              liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
              fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake
              halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame
              snaps sugar plum candy canes.
            </b-card-text>
          </b-tab>

          <b-tab title="6">
            <b-card-text>
              6 Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar
              liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
              fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake
              halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame
              snaps sugar plum candy canes.
            </b-card-text>
          </b-tab>

          <b-tab title="7">
            <b-card-text>
              6 Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar
              liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
              fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake
              halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame
              snaps sugar plum candy canes.
            </b-card-text>
          </b-tab>
        </b-tabs>
      </div>
    </div>

  </div>
</template>

<script>
import {
  BCardText, BTab, BTabs,
} from 'bootstrap-vue'
import axios from 'axios'
import { forEach } from 'postcss-rtl/lib/affected-props'

export default {
  components: {

    BCardText,

    BTab,
    BTabs,
  },
  data() {
    return {
      sideImg: require('@/assets/images/pages/4786.jpg'),
      siteSupervions: [],
      siteComments: [],
      siteChecklist: [],
      communityName: '',
      contractDescription: '',
      contractorName: '',
      facilityTypeCode: '',
      localGovtName: '',
      lotDescription: '',
      locationID: '',

      check_list_loading: false,

      siteSupervionsItems: [],

      siteCommentsItems: [],

      site_supervision_loading: false,

      site_comments_loading: false,

    }
  },
  mounted() {
    this.getSiteDetails()

    this.getChecklist()
  },
  methods: {
    getSiteDetails() {
      // alert(`https://api.tpsapp.net/api/Supervisions/GetSiteCheckList/${this.$route.params.id}/${localStorage.getItem('userID')}`)
      axios({
        url: `https://api.tpsapp.net/api/Supervisions/GetSiteSupervision/${this.$route.params.id}/${localStorage.getItem('userID')}`,
        // url: 'https://api.tpsapp.net/api/Supervisions/GetSiteSupervision/1/2',

        method: 'get',

      }).then(response => {
        console.log(response)
        this.siteSupervions = response.data.siteSupervions
        this.siteComments = response.data.siteComments

        const siteSupervionsItemsj = this.siteSupervions
          .filter(element => (element.isCompleted
                    === true))

        console.log(siteSupervionsItemsj)

        // eslint-disable-next-line no-unused-expressions
        siteSupervionsItemsj.forEach(siteSupervisionItem => {
          this.siteSupervionsItems.push(siteSupervisionItem.fielsCheckBoxName)
        })

        console.log(this.siteSupervionsItems)

        //   this.siteSupervions.forEach(siteSupervision => {
        //   bodyFormData.append(siteSupervision.fielsCheckBoxName, 'OFF')
        // })
      }).catch(err => {
        alert(err)
      })
    },

    getChecklist() {
      axios({
        // alert(`https://api.tpsapp.net/api/Supervisions/GetSiteCheckList/${this.$route.params.id}/${localStorage.getItem('userID')}`)
        url: `https://api.tpsapp.net/api/Supervisions/GetSiteCheckList/${this.$route.params.id}/${localStorage.getItem('userID')}`,

        method: 'get',

      }).then(response => {
        console.log(response)
        this.siteChecklist = response.data.siteSupervions

        this.communityName = response.data.communityName

        this.contractDescription = response.data.contractDescription

        this.contractorName = response.data.contractorName

        this.facilityTypeCode = response.data.facilityTypeCode

        this.localGovtName = response.data.localGovtName

        this.lotDescription = response.data.lotDescription

        this.locationID = response.data.locationID
      }).catch(err => {
        alert(err)
      })
    },

    sortCheckList(criticalStage) {
      let questions = []
      questions = this.siteChecklist.filter(element => (element.criticalStageName
                    == criticalStage))
      return questions
    },
    // invoicesystem_backend/publicv
    collectSiteIds(checkItem) {
      // alert(checkItem)

      // populate siteSupervionsItems

      if (document.getElementById(checkItem).checked) {
        this.siteSupervionsItems.push(checkItem)

        console.log(this.siteSupervionsItems)
      } else {
        const lock = this.siteSupervionsItems.indexOf(checkItem)

        this.siteSupervionsItems.splice(lock, 1)

        console.log(this.siteSupervionsItems)
      }
    },

    collectCommentsIds(checkItem) {
      // alert(checkItem)

      // populate siteSupervionsItems

      if (document.getElementById(checkItem).checked) {
        this.siteCommentsItems.push(checkItem)

        console.log(this.siteCommentsItems)
      } else {
        const lock = this.siteCommentsItems.indexOf(checkItem)

        this.siteCommentsItems.splice(lock, 1)

        console.log(this.siteCommentsItems)
      }
    },

    async clearSiteSupervisionAnswers() {
      const SupervisionDate = '2023-02-20'
      const WorkCommencementDate = '2023-02-20'
      const LocationID = this.$route.params.id
      const UserID = localStorage.getItem('userID')

      const bodyFormData = new FormData()

      bodyFormData.append('SupervisionDate', SupervisionDate)

      bodyFormData.append('WorkCommencementDate', WorkCommencementDate)

      bodyFormData.append('LocationID', LocationID)

      bodyFormData.append('UserID', UserID)

      // for (let index = 0; index < this.siteSupervionsItems.length; index++) {
      //   bodyFormData.append(this.siteSupervionsItems[index], 'ON')

      //   console.log(this.siteSupervions[index].fielsCheckBoxName)
      // }

      this.siteSupervions.forEach(siteSupervision => {
        bodyFormData.append(siteSupervision.fielsCheckBoxName, 'OFF')
      })

      console.log(this.siteSupervions[0].fielsCheckBoxName)

      await axios({
        url: 'https://api.tpsapp.net/api/Supervisions/SubmitSiteSupervision',
        method: 'post',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-type': 'application/json',
        //   'Accept': 'application/json',
        // },
        data: bodyFormData,
        // data: JSON.stringify({
        //   UserName: this.userName,
        //   UserPassword: this.password,
        //   SupervisingFirmID: this.selFirmID,
        //   RequestType: '4',
        // }),

      }).then(response => {
        console.log(response)
        console.log('former records cleared')
      }).catch(err => {
        console.log(err)
      })
    },

    async clearSiteCommentsAnswers() {
      const SupervisionDate = '2023-02-20'
      const WorkCommencementDate = '2023-02-20'
      const LocationID = this.$route.params.id
      const UserID = localStorage.getItem('userID')

      const bodyFormData = new FormData()

      bodyFormData.append('SupervisionDate', SupervisionDate)

      bodyFormData.append('WorkCommencementDate', WorkCommencementDate)

      bodyFormData.append('LocationID', LocationID)

      bodyFormData.append('UserID', UserID)

      // for (let index = 0; index < this.siteSupervionsItems.length; index++) {
      //   bodyFormData.append(this.siteSupervionsItems[index], 'ON')

      //   console.log(this.siteSupervions[index].fielsCheckBoxName)
      // }

      this.siteComments.forEach(siteComment => {
        bodyFormData.append(siteComment.fielsCheckBoxName, 'OFF')
      })

      // console.log(this.siteComments[0].fielsCheckBoxName)

      await axios({
        url: 'https://api.tpsapp.net/api/Supervisions/SubmitSiteSupervision',
        method: 'post',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-type': 'application/json',
        //   'Accept': 'application/json',
        // },
        data: bodyFormData,
        // data: JSON.stringify({
        //   UserName: this.userName,
        //   UserPassword: this.password,
        //   SupervisingFirmID: this.selFirmID,
        //   RequestType: '4',
        // }),

      }).then(response => {
        console.log(response)
        console.log('former records cleared')
      }).catch(err => {
        console.log(err)
      })
    },

    async submitForm() {
      this.site_supervision_loading = true
      await this.clearSiteSupervisionAnswers()
      const SupervisionDate = '2023-02-20'
      const WorkCommencementDate = '2023-02-20'
      const LocationID = this.$route.params.id
      const UserID = localStorage.getItem('userID')

      const bodyFormData = new FormData()

      bodyFormData.append('SupervisionDate', SupervisionDate)

      bodyFormData.append('WorkCommencementDate', WorkCommencementDate)

      bodyFormData.append('LocationID', LocationID)

      bodyFormData.append('UserID', UserID)

      for (let index = 0; index < this.siteSupervionsItems.length; index++) {
        bodyFormData.append(this.siteSupervionsItems[index], 'ON')

        console.log(this.siteSupervions[index].fielsCheckBoxName)
      }

      // this.siteSupervisions.forEach(siteSupervision => {
      //   bodyFormData.append(siteSupervision.fielsCheckBoxName, siteSupervision.fielsCheckBoxName)
      // })

      console.log(this.siteSupervions[0].fielsCheckBoxName)

      axios({
        url: 'https://api.tpsapp.net/api/Supervisions/SubmitSiteSupervision',
        method: 'post',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-type': 'application/json',
        //   'Accept': 'application/json',
        // },
        data: bodyFormData,
        // data: JSON.stringify({
        //   UserName: this.userName,
        //   UserPassword: this.password,
        //   SupervisingFirmID: this.selFirmID,
        //   RequestType: '4',
        // }),

      }).then(response => {
        console.log(response)

        this.getSiteDetails()

        alert('Site Supervision Updated!!')

        this.site_supervision_loading = false
      }).catch(err => {
        console.log(err)
      })
    },

    async submitCommentsForm() {
      this.site_comments_loading = true
      await this.clearSiteCommentsAnswers()
      const SupervisionDate = '2023-02-20'
      const WorkCommencementDate = '2023-02-20'
      const LocationID = this.$route.params.id
      const UserID = localStorage.getItem('userID')

      const bodyFormData = new FormData()

      bodyFormData.append('SupervisionDate', SupervisionDate)

      bodyFormData.append('WorkCommencementDate', WorkCommencementDate)

      bodyFormData.append('LocationID', LocationID)

      bodyFormData.append('UserID', UserID)

      console.log(this.siteCommentsItems.length)

      for (let index = 0; index < this.siteCommentsItems.length; index++) {
        bodyFormData.append(this.siteCommentsItems[index], 'ON')

        console.log(this.siteCommentsItems[index])
      }

      // this.siteSupervisions.forEach(siteSupervision => {
      //   bodyFormData.append(siteSupervision.fielsCheckBoxName, siteSupervision.fielsCheckBoxName)
      // })

      // console.log(this.siteSupervions[0].fielsCheckBoxName)

      axios({
        url: 'https://api.tpsapp.net/api/Supervisions/SubmitSiteSupervision',
        method: 'post',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-type': 'application/json',
        //   'Accept': 'application/json',
        // },
        data: bodyFormData,
        // data: JSON.stringify({
        //   UserName: this.userName,
        //   UserPassword: this.password,
        //   SupervisingFirmID: this.selFirmID,
        //   RequestType: '4',
        // }),

      }).then(response => {
        console.log(response)

        alert('Site Comments Updated!!')
        this.getSiteDetails()

        this.site_comments_loading = false
      }).catch(err => {
        console.log(err)
        this.site_comments_loading = false
      })
    },

    async submitChecklist(stage) {
      const SupervisionDate = '2023-02-20'
      const WorkCommencementDate = '2023-02-20'
      const LocationID = this.$route.params.id
      const UserID = localStorage.getItem('userID')

      const bodyFormData = new FormData()

      bodyFormData.append('SupervisionDate', SupervisionDate)

      bodyFormData.append('WorkCommencementDate', WorkCommencementDate)

      bodyFormData.append('LocationID', LocationID)

      bodyFormData.append('UserID', UserID)

      let questions = []
      questions = this.siteChecklist.filter(element => (element.criticalStageName
                    == stage))

      questions.forEach(element => {
        if (element.responseDataType == 'FILE') {
          bodyFormData.append(element.fieldAttributeName, document.getElementById(element.fieldAttributeName).file.files[0])
        } else {
          bodyFormData.append(element.fieldAttributeName, document.getElementById(element.fieldAttributeName).value)
        }
      })

      this.check_list_loading = true

      await axios({
        url: 'http://api.tpsapp.net/api/Supervisions/SubmitSiteCheckList',
        method: 'post',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-type': 'application/json',
        //   'Accept': 'application/json',
        // },
        data: bodyFormData,
        // data: JSON.stringify({
        //   UserName: this.userName,
        //   UserPassword: this.password,
        //   SupervisingFirmID: this.selFirmID,
        //   RequestType: '4',
        // }),

      }).then(response => {
        console.log(response)

        this.check_list_loading = false

        alert('Site Checklist Updated!!')
      }).catch(err => {
        console.log(err)

        this.check_list_loading = false
      })
    },

    previewFile4(event) {
      console.log(event)

      if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0])
        const preview = document.getElementById('previewImg')
        preview.src = src
        // preview.style.display = "block";
      }

      this.file = this.$refs.file.files[0]
    },

  },
}
</script>

<style>

</style>
