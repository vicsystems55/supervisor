<template>
  <div>
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <div class="c">
          <h2>IWASH 2023</h2>
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
            <h2>3</h2>
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
            <h2>76</h2>
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

    }
  },
  components: {
    BCard,
    BCardText,
    BLink,
  },
  methods: {
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
  },
}
</script>

<style>

</style>
