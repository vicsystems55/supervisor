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
                <td>GIGANE</td>
              </tr>
              <tr>
                <td>LGA:</td>
                <td>GWADABAWA</td>
              </tr>
              <tr>
                <td>FACILITY TYPE:</td>
                <td>SMBH</td>
              </tr>
              <tr>
                <td>LOT CODE:</td>
                <td>SOK_MZ_WF1</td>
              </tr>
              <tr>
                <td>CONTRACTOR:</td>
                <td>MZ AND SONS</td>
              </tr>
              <tr>
                <td>SUPERVISING FIRM:</td>
                <td>SOURCE WATER</td>
              </tr>
            </table>
          </div>
        </div>

      </div>
      <div class="col-md-6 p-1">
        <div class="card">
          <div class="card-body">

            <form :action="''" method="post">

                <input type="hidden" :name="'SupervisionDate'" :value="'2023-02-02'">
                <input type="hidden" :name="'WorkCommencementDate'" :value="'2023-02-02'">
                <input type="hidden" :name="'LocationID'" :value="'1'">


                <input type="hidden" :name="'UserID'" :value="'3'">


            <div v-for="siteSupervion in siteSupervions" :key="siteSupervion.id" class="form-check mb-1">
              <input
                id="defaultCheck1"
                class="form-check-input"
                type="checkbox"
                :name="siteSupervion.fielsCheckBoxName"

                :checked="isCompleted?'yes':'no'"
              >
              <label
                class="form-check-label"
                for="defaultCheck1"
              >
                {{siteSupervion.stage}}
              </label>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>

        </form>
           
          </div>
        </div>
      </div>

      <div class="col-md-6 p-1">
        <div class="card">
          <div class="card-body">

            <div v-for="siteComment in siteComments" :key="siteComment.id" class="form-check mb-1">
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
                {{siteComment.description}}
              </label>
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
                <div class="col-md-6">

                  <div class="form-group">
                    <label for="">Geophysical survey done? (sight survey result)</label>
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div class="col-md-6">

                  <div class="form-group">
                    <label for="">Diameter of casing/screen(Inches)</label>
                    <input
                      type="text"
                      class="form-control"
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
      siteComments: []
    }
  },
  mounted() {
    this.getSiteDetails()
  },
  methods: {
    getSiteDetails() {
        alert(`https://api.tpsapp.net/api/Supervisions/GetSiteCheckList/${this.$route.params.id}/${localStorage.getItem('userID')}`)
      axios({
        url: `http://api.tpsapp.net/api/Supervisions/GetSiteSupervision/1/3`,
        method: 'get',

      }).then(response => {
        console.log(response)
        this.siteSupervions = response.data.siteSupervions
        this.siteComments = response.data.siteComments


      }).catch(err => {
        alert(err)
      })
    },
  },
}
</script>

<style>

</style>
