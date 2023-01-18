<template>
  <div>

    <h6>All Programmes</h6>

    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <div class="c">
          <h2>IWASH 2023</h2>
          <h6 class="text-muted text-italic">
            Current Programme
          </h6>

        </div>
        <div class="c">
          <span class="badge badge-success">active</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body col-md-6">
        <h6>Create programme</h6>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Programme name"
          >
        </div>
        <div class="form-group">
          <button class="btn btn-primary">
            Submit
          </button>
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
