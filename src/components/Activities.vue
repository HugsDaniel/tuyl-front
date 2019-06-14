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

        <b-button type="submit" variant="success" class="activity-btn">Ajouter une activité</b-button>
      </b-form>
    </div>

    <div class="row">
      <div class="activities-list col-3" v-for="activity in activities" :key="activity.id" :activity="activity">
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
      errors: []
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
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
    }
  }
}
</script>

<style>
  #activities {
    margin-top: 40px;
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
    width: 50% !important;
  }
</style>
