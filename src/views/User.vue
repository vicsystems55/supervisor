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

            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                type="checkbox"
                value=""
              >
              <label
                class="form-check-label"
                for="defaultCheck1"
              >
                Project Admin
              </label>
            </div>

            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                type="checkbox"
                value=""
                checked
              >
              <label
                class="form-check-label"
                for="defaultCheck1"
              >
                Field Officer
              </label>
            </div>

            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                type="checkbox"
                value=""
                checked
              >
              <label
                class="form-check-label"
                for="defaultCheck1"
              >
                Super Admin
              </label>
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
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
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
        url: `http://api.tpsapp.net/api/UserProfile/${this.$route.params.id}`,
        method: 'get',

      }).then(response => {
        console.log(response)
        this.user = response.data
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
