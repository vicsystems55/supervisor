<template>
  <div>

    <h4 v-if="admin">
      All Contract Sites
    </h4>
    <h4 v-else>
      My Assigned Sites
    </h4>

    <div class="card">
      <div class="card-body table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Location Name</th>
              <th>Ward</th>
              <th>LGA</th>
              <th>State</th>
              <th>Contractor Name</th>
              <th>Facility Type</th>
              <th>Lot No.</th>

              <th />
            </tr>
          </thead>
          <tbody>
            <tr v-for="site,key in sites" :key="site.id">
              <td>
                {{ key + 1 }}
              </td>
              <td>
                {{site.locationName}}
              </td>
              <td>
                {{ site.wardName }}
              </td>
              <td>
               {{ site.localGovtName }}
              </td>
              <td>
                {{ site.stateName }}
              </td>
              <td>
                {{site.contractorName}}

              </td>
              <td>
                {{ site.facilityTypeCode }}
              </td>
              <td>
                {{ site.lotNo }}
              </td>

              <td>
                <router-link
                  :to="'/site/'+site.locationID"
                  class="btn btn-sm btn-primary"
                >
                  view </router-link>
              </td>
            </tr>
       

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
  },
  data() {
    return {

      admin: false,

      sites: []

    }
  },
  mounted() {
    if (localStorage.getItem('defaultRole') != 2) {
      this.admin = true
      this.getAllSites()
    } else {
      this.getMySites()
    }
  },
  methods: {
    getAllSites() {
      axios({
        url: 'https://api.tpsapp.net/api/Supervisions/GetSupervisionSites',
        method: 'get',

      }).then(response => {
        this.sites = response.data
        console.log(response)
        
      }).catch(err => {
        alert(err)
      })
    },

    getMySites() {

      axios({
        url: `http://api.tpsapp.net/api/Supervisions/GetSupervisorSites/${localStorage.getItem('userID')}`,
        method: 'get',

      }).then(response => {
        this.sites = response.data
        console.log(response)
      
      }).catch(err => {
        alert(err)
      })
    },
  },
}
</script>

<style>

</style>
