<template>
  <div>

    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">

            <div class="form-group">
              <label>Fullname:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter fullname"
                v-model="UserFullName"
              >
            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">
              <label>Username:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter username"
                v-model="UserName"
              >
            </div>

          </div>
          <div class="col-md-6">

            <div class="form-group">
              <label>Email:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
                v-model="UserEmail"
              >
            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">
              <label>Phone no.:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter phone no."
                v-model="UserPhoneNo"
              >
            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">
              <label>Address:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter address"
                v-model="Address"
              >
            </div>

          </div>
          <div class="col-md-6">

            <div class="form-group">
              <label>Password:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Create a password"
                v-model="UserPassword"
              >
            </div>

          </div>

          <div class="col-md-12">

            <div class="form-group float-right">
              <button @click="registerUser" class="btn btn-primary">
                {{ loading?"Creating account...":"Create account" }}

              </button>

            </div>

          </div>

        </div>

      </div>
    </div>

    <h6>All Accounts</h6>

    <div class="card">
      <div class="card-body table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user,key in users"
              :key="user.id"
            >
              <td>
                {{ key +1 }}
              </td>
              <td>
                {{ user.userFullName }}
              </td>
              <td>{{ user.userEmail }}</td>
              <td>{{ user.userName }}</td>
              <td>
                <span class="badge badge-success">pending...</span>
              </td>
              <td>
                <span class="badge badge-success">active</span>
              </td>

              <td>
                <router-link
                  :to="'/user/'+user.userID"
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
import axios from 'axios'

export default {
  components: {

  },
  data() {
    return {
      users: [],
      UserName: '',
      UserFullName: '',
      UserEmail: '',
      UserPhoneNo: '',
      Address: '',
      UserPassword: '',
      loading: false,
    }
  },
  mounted() {
    this.getUsers()
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

    registerUser() {
      this.loading = true
      
      const bodyFormData = new FormData()

      bodyFormData.append('UserName', this.UserName)

      bodyFormData.append('UserFullName', this.UserFullName)

      bodyFormData.append('UserEmail', this.UserEmail)

      bodyFormData.append('UserPhoneNo', this.UserPhoneNo)

      bodyFormData.append('Address', this.Address)

      bodyFormData.append('UserPassword', this.UserPassword)

      bodyFormData.append('RequestType', 3)


      axios({
        url: 'https://api.tpsapp.net/api/UserProfile',
        method: 'post',
        data: bodyFormData,

      }).then(response => {
        this.loading = false
        console.log(response)

        alert('User Registered!!')

        this.getUsers()
        alert('got it')
      }).catch(err => {
        this.loading = false
        alert(err)
      })
    },
  },
}
</script>

<style>

</style>
