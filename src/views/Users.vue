<template>
  <div>

    <h6>All Accounts</h6>

    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Mr. Dipo
                        </td>
                        <td>dipo@tpsapp.net</td>
                        <td>dipo@tpsapp.net</td>
                        <td>
                          <span class="badge badge-success">project manager</span>
                        </td>
                        <td>
                          <span class="badge badge-success">active</span>
                        </td>


                        <td>
                            <router-link :to="'/user/1'" class="btn btn-sm btn-primary">
                                view</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            Mr. Kingsley Ugedegbe
                        </td>
                        <td>bitzconsult@tpsapp.net</td>
                        <td>bitzconsult@tpsapp.net</td>
                        <td>
                          <span class="badge badge-success">tech admin</span>
                        </td>
                        <td>
                          <span class="badge badge-success">active</span>
                        </td>


                        <td>
                            <router-link :to="'/user/1'" class="btn btn-sm btn-primary">
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
