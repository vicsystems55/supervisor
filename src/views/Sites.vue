<template>
  <div>

    <h4 v-if="admin">
      All Contract Sites
    </h4>
    <h4 v-else>
      My Assigned Sites
    </h4>

    <div class="card div card-body">
      <div class="col-md-6">
        <div class="form-group">
          <select
            id=""
            v-model="selUser"
            name=""
            class="form-control"
          >
            <option
              v-for="user in users"
              :key="user.id"
              :value="user.userID"
            >
              {{ user.userFullName +'=>'+ user.userName }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary"
            @click="assignSites()"
          >
            Assign ({{ noSelSites }}) Site(s)
          </button>
          <p
            v-show="assign_loading"
            class="text-danger"
          >
            This will take a while please grab a coffee and wait...
          </p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th />
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
            <tr
              v-for="site,key in sites"
              :key="site.id"
            >
              <td>
                <input
                  :id="'check'+site.locationID"
                  type="checkbox"
                  class="form-control"
                  @click="collectSiteIds(site.locationID)"
                >
              </td>
              <td>
                {{ key + 1 }}
              </td>

              <td>
                {{ site.locationName }}
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
                {{ site.contractorName }}

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

import axios from 'axios'

export default {
  components: {

  },
  data() {
    return {

      admin: false,

      sites: [],

      selSiteIds: [],

      users: [],

      selUser: '',

      noSelSites: 0,

      assign_loading: false,

    }
  },
  mounted() {
    if (localStorage.getItem('defaultRole') != 2) {
      this.admin = true
      this.getAllSites()
    } else {
      this.getMySites()
    }

    this.getUsers()
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

    collectSiteIds(siteId) {
      if (document.getElementById(`check${siteId}`).checked) {
        this.selSiteIds.push(siteId)

        console.log(this.selSiteIds)

        this.noSelSites = this.selSiteIds.length
      } else {
        const lock = this.selSiteIds.indexOf(siteId)

        this.selSiteIds.splice(lock, 1)

        console.log(this.selSiteIds)

        this.noSelSites = this.selSiteIds.length
      }
    },

    getUsers() {
      axios({
        url: 'https://api.tpsapp.net/api/UserProfile',
        method: 'get',

      }).then(response => {
        console.log(response)
        this.users = response.data[0].registeredUsers

        // alert('got it')
      }).catch(err => {
        alert(err)
      })
    },
    assignSites() {
      this.assign_loading = true
      for (let index = 0; index < this.selSiteIds.length; index++) {
        // const element = array[index];

        const bodyFormData = new FormData()

        bodyFormData.append('LocationID', this.selSiteIds[index])

        bodyFormData.append('UserID', this.selUser)

        axios({
          url: 'https://api.tpsapp.net/api/Supervisions/AsignedSiteToUser',
          method: 'post',
          data: bodyFormData,

        }).then(response => {
          console.log(response)

          // alert('got it')
        }).catch(err => {
          alert(err)
        })

        if (this.selSiteIds[index] == this.selSiteIds.length) {
          
          this.assign_loading = false
        }
      }
    },

  },
}
</script>

<style>

</style>
