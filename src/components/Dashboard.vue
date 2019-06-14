<template>
  <div id="activities">
      <h2>Mes activités</h2>
      <p>{{ user.email }}</p>

      <div class="row">
        <div class="activities-list col-3" v-for="activity in activities" :key="activity.id" :activity="activity">
          <b-card
              :title="activity.activity_name"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                {{ activity.activity_description }}
              </b-card-text>
              <small>{{ activity.status }}</small>
              <b-button v-if="activity.status === 'pending'" @click="activityDone(activity.id)">Je l'ai fait !</b-button>
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
      activities: [],
      name: [],
      description: [],
      errors: []
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/dashboard', { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.user = response.data.user
          this.activities = response.data.activities
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  methods: {
    activityDone (id) {
      axios.put(process.env.ROOT_API + '/api/v1/user_activities/' + id + '/done', { user_activity: {} }, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.activities = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
