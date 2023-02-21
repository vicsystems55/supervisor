<template>
  <div>

    <h6>GIGANE - GWADABAWA</h6>

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
         
                  class="form-check-input"
                  type="checkbox"
                  :name="siteSupervision.fielsCheckBoxName"
                  :value="siteSupervision.fielsCheckBoxName"
                  @click="collectSiteIds(siteSupervision.fielsCheckBoxName)"
                  :id="siteSupervision.fielsCheckBoxName"


                  :checked="siteSupervision.isCompleted?1:0"
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
                  @click="submitForm()"
                >
                  Submit
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
                id="defaultCheck1"
                class="form-check-input"
                type="checkbox"
                value=""
              >
              <label
                class="form-check-label"
                for="defaultCheck1"
              >
                {{ siteComment.description }}
              </label>
            </div>

            <div class="form-group">
              <button class="btn btn-primary">
                Submit
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
                  v-for="siteCheck in siteChecklist"
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
          <b-tab title="2">
            <b-card-text>
              Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu
              danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate
              cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding
              lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa
              chups gummi bears lemon drops.
            </b-card-text>
          </b-tab>

          <b-tab title="3">
            <b-card-text>
              Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar
              liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee
              fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake
              halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame
              snaps sugar plum candy canes.
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
  BCard, BCardText, BLink, BTab, BTabs,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
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

      siteSupervionsItems: [],

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
    // invoicesystem_backend/publicv
    collectSiteIds(checkItem) {
      // alert(checkItem)
      if (document.getElementById(checkItem).checked) {
        this.siteSupervionsItems.push(checkItem)

        console.log(this.siteSupervionsItems)

   
      } else {
        const lock = this.siteSupervionsItems.indexOf(checkItem)

        this.siteSupervionsItems.splice(lock, 1)

        console.log(this.siteSupervionsItems)

    
      }
    },

    submitForm() {
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
        url: 'http://api.tpsapp.net/api/Supervisions/SubmitSiteSupervision',
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

        alert('Site Supervision Updated!!')
      }).catch(err => {
        console.log(err)
      })
    },

  },
}
</script>

<style>

</style>
