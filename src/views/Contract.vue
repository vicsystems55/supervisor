<template>
  <div>

    <h6>Contract Details</h6>

    <div class="card">
      <div class="card-body">
        <h6>Contract Lots</h6>
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Lot code</th>
              <th>Lot No.</th>
              <th>No. Sites</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                AMA_SOK_WF-1
              </td>
              <td>LOT 2</td>
              <td>9</td>
              <td>
                <router-link
                  :to="'/sites'"
                  class="btn btn-sm btn-primary"
                >
                  view sites</router-link>
              </td>
            </tr>

            <tr>
              <td>
                2
              </td>
              <td>
                MZ_SOK_WF-2
              </td>
              <td>LOT 3</td>
              <td>5</td>
              <td>
                <router-link
                  :to="'/sites'"
                  class="btn btn-sm btn-primary"
                >
                  view sites</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <h6>Contractor Details</h6> -->

<div class="card d-none">
  <div class="card-body">
    <h6>Contract Lots</h6>
    <table class="table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Contractor Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            1
          </td>
          <td>
           Amazon Drillers
          </td>
       
          <td>
            <router-link
              :to="'/contract'"
              class="btn btn-sm btn-primary"
            >
              view</router-link>
          </td>
        </tr>

        <tr>
          <td>
            2
          </td>
          <td>
            MZ AND SONS LTD.
          </td>
         
          <td>
            <router-link
              :to="'/contract'"
              class="btn btn-sm btn-primary"
            >
              view</router-link>
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

    }
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
