<template>
  <div id="activities">
    <h2>Toutes les activités</h2>
    <div class="activity-form">
      <b-form action="" @submit.prevent="addActivity">
        <b-input
          id="activity_name"
          class="input"
          required
          autofocus autocomplete="off"
          placeholder="Nom"
          v-model="newActivity.name"
        ></b-input>

        <b-input
          id="activity_description"
          class="input"
          required
          autocomplete="off"
          placeholder="Description"
          v-model="newActivity.description"
        ></b-input>

        <b-button type="submit" variant="outline-primary" class="activity-btn">Ajouter une activité</b-button>
      </b-form>
    </div>

    <div class="row">
      <div class="activities-list col-lg-4 col-12" v-for="activity in activities" :key="activity.id" :activity="activity">
        <b-card
            :title="activity.name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ activity.description }}
            </b-card-text>

            <b-button v-b-toggle="'collapse-' + activity.id" variant="outline-primary">J'vais faire ça</b-button>
            <b-collapse :id="'collapse-' + activity.id" class="mt-2">
              <b-card>
                <b-form action="" @submit.prevent="participate(activity.id)">
                  <span>Début</span>
                  <datetime v-model="userActivity.begin_time" type="datetime" :minute-step='10'></datetime>

                  <span>Fin</span>
                  <datetime v-model="userActivity.end_time" type="datetime" :minute-step='10'></datetime>

                  <b-button type="submit" variant="outline-info" id="confirm-btn">All right !</b-button>
                </b-form>
              </b-card>
            </b-collapse>
          </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Activities',
  data () {
    return {
      activities: [],
      name: [],
      description: [],
      newActivity: [],
      userActivity: {},
      errors: []
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/login')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/activities', { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.activities = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  methods: {
    addActivity () {
      const value = this.newActivity
      if (!value) {
        return
      }
      axios.post(process.env.ROOT_API + '/api/v1/activities/', { activity: { name: this.newActivity.name, description: this.newActivity.description } }, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.activities.unshift(response.data)
          this.newActivity = []
        })
        .catch(error => this.errors.push(error))
    },

    participate (id) {
      this.userActivity.activity_id = id

      axios.post(process.env.ROOT_API + '/api/v1/user_activities/', { user_activity: this.userActivity }, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.$router.replace('/dashboard')
          document.getElementById('success-alert').style.display = 'block'
        })
        .catch(error => this.errors.push(error))
    }
  }
}
</script>

<style>
  #activities {
    margin-top: 40px;
  }

  #confirm-btn {
    margin: 1rem;
  }

  h2 {
    margin: 40px;
  }
  .activities-list {
    margin: auto;
    width: 50%;
  }

  .activity-form {
    margin: 40px;
  }

  .activity-btn {
    margin: 10px;
  }

  .input {
    margin: 5px auto;
  }
</style>
