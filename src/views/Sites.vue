<template>
  <div>

    <h6>All Contract Sites</h6>

    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Location</th>
              <th>LGA</th>
                <th>State</th>
                <th>Progress</th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                GIGANE
              </td>
              <td>GWADABAWA</td>
              <td>SOKOTO</td>
              <td>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
              </td>

              <td>
                <router-link
                  :to="'/site/1'"
                  class="btn btn-sm btn-primary"
                >
                  view site profile</router-link>
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                GIGANE
              </td>
              <td>GWADABAWA</td>
              <td>SOKOTO</td>
              <td>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
              </td>

              <td>
                <router-link
                  :to="'/site/1'"
                  class="btn btn-sm btn-primary"
                >
                  view site profile</router-link>
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                GIGANE
              </td>
              <td>GWADABAWA</td>
              <td>SOKOTO</td>
              <td>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
              </td>

              <td>
                <router-link
                  :to="'/site/1'"
                  class="btn btn-sm btn-primary"
                >
                  view site profile</router-link>
              </td>
            </tr>

            <tr>
              <td>
                1
              </td>
              <td>
                GIGANE
              </td>
              <td>GWADABAWA</td>
              <td>SOKOTO</td>
              <td>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
              </td>

              <td>
                <router-link
                  :to="'/site/1'"
                  class="btn btn-sm btn-primary"
                >
                  view site profile</router-link>
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
