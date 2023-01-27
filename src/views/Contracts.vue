<template>
  <div>

    <h6>All Contracts</h6>

    <div class="card">
        <div class="card-body table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Contract Name</th>
                        <th>State</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Sokoto IWASH 2022
                        </td>
                        <td>Sokoto</td>
                        <td>
                            <router-link :to="'/contract/1'" class="btn btn-sm btn-primary">
                                view</router-link>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            Kebbi IWASH 2022
                        </td>
                        <td>Kebbi</td>
                        <td>
                            <router-link :to="'/contract/1'" class="btn btn-sm btn-primary">
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
