<template>
  <div id="activities">
      <h2>Mes activités</h2>
      <p>{{ user.email }}</p>

      <div class="row">
        <div class="activities-list col-lg-3 col-12" v-for="user_activity in user_activities" :key="user_activity.id" :user_activity="user_activity">
          <b-card
              :title="user_activity.activity.name"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                {{ user_activity.activity.description }}
              </b-card-text>

              <router-link v-if="user_activity.status == 'pending'" :to="'/user_activity/' + user_activity.id" class="btn btn-outline-primary">Je l'ai fait !</router-link>
            </b-card>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dashboard',
  data () {
    return {
      user: '',
      user_activities: [],
      name: [],
      description: [],
      errors: [],
      userActivity: [],
      satisfactionLevels: [{ text: 'Nul', value: 0 }, { text: 'Passable', value: 1 }, { text: 'Pas mal', value: 2 }, { text: 'Bien', value: 3 }, { text: 'Exceptionnel', value: 4 }]
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/dashboard', { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.user = response.data.user
          this.user_activities = response.data.user_activities
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  methods: {
    markActivityAsDone (id) {
      axios.put(process.env.ROOT_API + '/api/v1/user_activities/' + id + '/done', { user_activity: { satisfaction_level: this.userActivity.satisfaction_level } }, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.user_activities = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
