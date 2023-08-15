<template>
  <div>

    <h6>User Account</h6>

    <div class="card">
      <div class="card-body">

        <div class="row">

          <div class="col-md-5 text-center">

            <img
              style="width: 150px; height: 150px; "
              class="rounded"
              :src="sideImg"
              alt=""
            >

            <div class="c py-2">

              <button class="btn btn-primary btn-sm">
                upload
              </button>
            </div>

          </div>

          <div class="col-md-7">

            <table class="table">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <td>{{ user.userFullName }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{{ user.userEmail }}</td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>{{ user.userName }}</td>
                </tr>
                <tr>
                  <th>Acitve Role</th>
                  <td>pending</td>
                </tr>

              </thead>
            </table>

            <h6 class="pt-3">
              Select Role
            </h6>

            <div class="form-group">
              <select
                id=""
                v-model="UserRoleNo"
                class="form-control"
              >
              <option value="">-Select Role-</option>
                <option
                  v-for="userRole in usersRoles"
                  :key="userRole.id"
                  :value="userRole.userRoleID"
                >{{ userRole.userRoleTitle }}</option>
              </select>
            </div>

            <div class="form-group float-right">
              <button  @click="assignRole()"  class="btn btn-primary">
                {{ loading?'Please wait...':'Assign Role' }}
              </button>
            </div>

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
  components: {
    BCard,
    BCardText,
    BLink,
  },
  data() {
    return {
      sideImg: require('@/assets/images/pages/4786.jpg'),
      user: '',
      usersRoles: [],
      UserRoleNo: '',
      loading: false,
    }
  },
  mounted() {
    this.getUser()
    this.getUserRoles()
  },
  methods: {

    assignRole() {
      alert(this.user.userName)
      alert(this.UserRoleNo)
   

      this.loading = true
      const bodyFormData = new FormData()
      bodyFormData.append('UserName', this.user.userName)
      bodyFormData.append('UserRoleNo', this.UserRoleNo)
      bodyFormData.append('RequestType', '5')

      axios({
        url: 'http://api.tpsapp.net/api/UserProfile',
        method: 'post',
        data: bodyFormData,

      }).then(response => {
        this.loading = false
        alert('Role Assigned!!')
        console.log(response)
        // alert('got it')
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
        // alert('got it')
      }).catch(err => {
        alert(err)
      })
    },

    getUser() {
      // alert(this.$route.params.id)
      axios({
        url: `https://api.tpsapp.net/api/UserProfile/${this.$route.params.id}`,
        method: 'get',

      }).then(response => {
        console.log(response)
        this.user = response.data
        // alert('got it')
      }).catch(err => {
        alert(err)
      })
    },

    getUserRoles() {
      axios({
        url: 'https://api.tpsapp.net/api/UserProfile',
        method: 'get',

      }).then(response => {
        this.usersRoles = response.data[0].userRoleList

        console.log(this.usersRoles)

        // alert('got it')
      }).catch(err => {
        alert(err)
      })
    },
  },
}
</script>

<style>

</style>
