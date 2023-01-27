<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <dark-Toggler class="d-none d-lg-block" />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ userFullName }}
            </p>
            <span class="user-status">{{ firm.supervisingFirmName }}</span>

          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="require('@/assets/images/avatars/13-small.png')"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="UserIcon"
            class="mr-50"
          />
          <span>Profile</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="MailIcon"
            class="mr-50"
          />
          <span>Inbox</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="CheckSquareIcon"
            class="mr-50"
          />
          <span>Task</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="MessageSquareIcon"
            class="mr-50"
          />
          <span>Chat</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span @click="logout()">Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import axios from 'axios'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,

    // Navbar Components
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      userData: '',
      supervisingFirm: '',
      userID: '',
      userFullName: '',
      userEmail: '',
      defaultRole: '',
      firm: '',
    }
  },

  mounted() {
    this.getUserData()
    this.getFirm()
  },

  methods: {
    getUserData() {
      this.supervisingFirm = localStorage.getItem('supervisingFirm')
      this.userID = localStorage.getItem('userID')
      this.userFullName = localStorage.getItem('userFullName')
      this.userEmail = localStorage.getItem('userEmail')
      this.defaultRole = localStorage.getItem('defaultRole')
    },

    getFirm() {
      // alert(this.supervisingFirm)
      axios({
        url: `https://api.tpsapp.net/api/SupervisingFirm/${this.supervisingFirm}`,
        method: 'get',

      }).then(response => {
        this.firm = response.data
        console.log(response)
        // alert('got it')
      }).catch(err => {
        // alert(err)
        console.log(err)
      })

      // alert(`${this.userEmail}  ${this.password}`)
    },

    logout() {
      alert('logging out')

      localStorage.removeItem('supervisingFirm')
      localStorage.removeItem('userID')
      localStorage.removeItem('userFullName')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('defaultRole')

      this.$router.push('/login')
    },
  },
}
</script>
