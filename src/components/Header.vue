<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-link to="/" class="link">Accueil</b-link>

        <b-navbar-nav class="ml-auto">
          <b-link to="/activities" class="link">Activités</b-link>
          <b-link to="/skills" class="link">Compétences</b-link>

          <b-link to="/login" class="link" v-if="!signedIn()">Se connecter</b-link>
          <b-link to="/sign_up" class="link" v-if="!signedIn()">S'inscrire</b-link>
          <a href="#" @click.prevent="signOut" class="link" v-if="signedIn()">Sign out</a>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  created () {
    this.signedIn()
  },
  updated () {
    this.signedIn()
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signedIn () {
      return localStorage.signedIn
    },
    signOut () {
      axios.delete(process.env.ROOT_API + '/logout', { headers: { Authorization: localStorage.token } })
        .then(response => {
          delete localStorage.token
          delete localStorage.signedIn
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Cannot sign out'))
    }
  }
}
</script>

<style>
  .link {
    text-decoration: none !important;
    padding: 10px;
    color: white;
  }
</style>
