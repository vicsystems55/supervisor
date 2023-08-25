<template>
  <div>
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <div class="c">
          <h6>UPdate</h6>
          <h2>{{programmes[0].programName}}</h2>
          <h6>{{programmes[0].programCode}}</h6>
          <h6 class="text-muted text-italic">Current Programme</h6>

        </div>
        <div class="c">
          <span class="badge badge-success">active</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 p-1">
        <div class="card">
          <div class="card-body">
            <h2>{{ contracts.length }}</h2>
            <h6>Contracts</h6>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-1">
        <div class="card">
          <div class="card-body">
            <h2>23</h2>
            <h6>Lots</h6>
          </div>
        </div>
      </div>

      <div class="col-md-4 p-1">
        <div class="card">
          <div class="card-body">
            <h2>{{ sites.length != 0?sites[0].length:0 }}</h2>
            <h6>Sites</h6>
          </div>
        </div>
      </div>

    </div>

    
  </div>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import axios from 'axios'

export default {
  data() {
    return {

      contracts: [],
      programmes: [],
      sites: []

    }
  },
  
  components: {
    BCard,
    BCardText,
    BLink,
  },

  mounted() {
    this.getContracts()
    this.getProgrammes()
    this.getAllSites()

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

    getProgrammes() {
      axios({
        url: 'https://api.tpsapp.net/api/Programme',
        method: 'get',
      }).then(response => {
        this.programmes = response.data
        console.log(response)
      }).catch(err => {
     console.log(err)
      })
    },

    getApi() {
      axios({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'get',

      }).then(response => {
        console.log(response)
        alert('got it')
      }).catch(err => {
        alert(err)
      })
    },

    getContracts() {

      axios({
        url: 'https://api.tpsapp.net/api/Contract',
        method: 'get',

      }).then(response => {

        this.contracts = response.data
        console.log(response)
        console.log('got contracts')
      }).catch(err => {
        console.log(err)
      })


},
  },
}
</script>

<style>

</style>
