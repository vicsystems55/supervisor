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

                <button class="btn btn-primary btn-sm">upload</button>
            </div>


          </div>

          <div class="col-md-7">

            <table class="table">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <td>Mr. Dipo</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>dipo@tpsapp.net</td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>dipo@tpsapp.net</td>
                </tr>
                <tr>
                  <th>Acitve Role</th>
                  <td>Project Manager</td>
                </tr>
                <tr>
                  <th>Fullname</th>
                  <td>Mr. Dipo</td>
                </tr>
              </thead>
            </table>

            <h6 class="pt-3">Select Role</h6>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                   Project Admin
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>
                <label class="form-check-label" for="defaultCheck1">
                   Field Officer
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>
                <label class="form-check-label" for="defaultCheck1">
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
