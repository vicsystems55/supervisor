<template>
  <div>

    <h6>All Programmes</h6>

    <div class="card" v-for="programme in programmes" :key="programme.id">
      <div class="card-body d-flex justify-content-between">
        <div class="c">
          <h2>{{ programme.programName }}</h2>
          <h6 class="text-muted text-italic">
            {{programme.programCode}}
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
            v-model="programmeName"
          >
        </div>
        <div class="form-group">
          <label for="">Supervising Firm: </label>
          <select name="" id="" class="form-control">
            <option :value="'1'">ROBILOR</option>
            <option :value="'2'">SOURCE WATER</option>
          </select>
        </div>

        <div class="form-group">
          <label for="">Award Date:</label>
          <input type="date" v-model="AwardDate" class="form-control">
        </div>
        <div class="form-group">
          <label for="">Duration:</label>
          <input type="number" class="form-control">
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary"
            @click="createProgramme()"
          >
            {{ loading?'Please wait...':'Create Programme' }}
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

      programmes: [],
      programmeName: '',
      SupervisingFirmID: '',
      loading: false,

    }
  },
  methods: {
    getProgrammes() {
      axios({
        url: 'https://api.tpsapp.net/api/Programme',
        method: 'get',
      }).then(response => {
        this.programmes = response.data
        console.log(response)
      }).catch(err => {
     console.log(err)
      })
    },

    createProgramme() {
      const bodyFormData = new FormData()

      bodyFormData.append('ProgramCode', Date().toLocaleString())

      bodyFormData.append('ProgramName', this.programmeName)

      bodyFormData.append('RequestType', 2)

      bodyFormData.append('SupervisingFirmID', this.SupervisingFirmID)

      bodyFormData.append('LoginUserName', localStorage.getItem('userName'))

      bodyFormData.append('AwardDate', this.AwardDate)


      this.loading = true
      axios({
        url: 'https://api.tpsapp.net/api/Programme',
        method: 'post',
        data: bodyFormData,
        // data: {
        //   ProgramCode: Date().toLocaleString(),
        //   ProgramName: this.programmeName,
        //   RequestType: 4,
        //   SupervisingFirmID: this.SupervisingFirmID,
        //   LoginUserName: localStorage.getItem('userName'),
        // },

      }).then(response => {
        this.loading = false
        console.log(response)
      }).catch(err => {

        this.loading = false

        console.log(err)

      })
    },
  },
  mounted() {
    this.getProgrammes()
  },
}
</script>

<style>

</style>
