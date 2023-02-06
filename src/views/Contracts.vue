<template>
  <div>

    <h6>All Contracts</h6>

    <div class="card">
      <div class="card-body table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Contract Description</th>
              <th>Award Date</th>
              <th />
            </tr>
          </thead>
          <tbody>

            <tr
              v-for="contract,key in contracts"
              :key="contract.id"
            >
              <td>
                {{ key + 1 }}
              </td>
              <td>
                {{ contract.contractDescription }}
              </td>
              <td>{{ contract.awardDate }}</td>
              <td>
                <router-link
                  :to="'/contract/'+contract.contractID"
                  class="btn btn-sm btn-primary"
                >
                  view</router-link>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

    <div v-if="admin" class="card">
      <div class="card-body">
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Contract Description:</label>
            <input
              v-model="ContractDescription"
              type="text"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label for="">Contract RefNo:</label>
            <input
              v-model="ContractRefNo"
              type="text"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label for="">Award Date:</label>
            <input
              v-model="AwardDate"
              type="date"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label for="">Duration:</label>
            <input
              v-model="ContractDuration"
              type="number"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label for="">Programme:</label>
            <select
              id=""
              name=""
              class="form-control"
            >
              <option value="1">
                IWASH 2022
              </option>
            </select>
          </div>

          <div class="form-group">
            <button
              class="btn btn-primary"
              @click="createContract()"
            >
              {{ loading?'Please wait...':'Submit' }}
            </button>
          </div>
        </div>
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

      contracts: [],

      ContractDescription: '',
      ContractRefNo: '',
      AwardDate: '',
      ContractDuration: '',
      CreatedByUserName: '',
      ProgrammedID: '',

      loading: false,
      admin: false,

    }
  },
  mounted() {
    this.getContracts()
    if (localStorage.getItem('defaultRole') != 2) {

this.admin = true;

}
  },
  methods: {
    getContracts() {
      axios({
        url: 'https://api.tpsapp.net/api/Contract',
        method: 'get',

      }).then(response => {
        this.contracts = response.data
        console.log(response)
        console.log('got it')
      }).catch(err => {
        console.log(err)
      })
    },

    createContract() {

      alert(this.ContractDescription)
      alert(this.ContractRefNo)

      alert(this.AwardDate)
      alert(this.ContractDuration)

      const bodyFormData = new FormData()

      bodyFormData.append('ContractDescription', this.userName)
      bodyFormData.append('ContractRefNo', this.userName)

      bodyFormData.append('AwardDate', this.userName)

      bodyFormData.append('ContractDuration', this.userName)

      bodyFormData.append('CreatedByUserName', this.userName)

      bodyFormData.append('ProgrammedID', 1)




      this.loading = true
      axios({
        url: 'https://api.tpsapp.net/api/Contract',
        method: 'post',
        data: bodyFormData
        // data: {
        //   ContractDescription: this.ContractDescription,
        //   ContractRefNo: this.ContractRefNo,
        //   AwardDate: this.AwardDate,
        //   ContractDuration: this.ContractDuration,
        //   CreatedByUserName: localStorage.getItem('UserName'),
        //   ProgrammedID: 1,
        // },

      }).then(response => {
      this.loading = false
        this.contracts = response.data
        console.log(response)
        console.log('got it')
      }).catch(err => {
        alert(err)
      })
    },
  },
}
</script>
