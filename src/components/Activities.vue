<template>
  <div id="activities">
    <h3>Add a new activity</h3>
    <form action="" @submit.prevent="addActivity">
      <label for="activity_name" class="label">Name</label>
      <input
        id="activity_name"
        class="input"
        required=true
        autofocus autocomplete="off"
        placeholder="Type an activity name"
        v-model="newActivity.name" />

      <label for="activity_description" class="label">Description</label>
      <input
        id="activity_description"
        class="input"
        required=true
        autofocus autocomplete="off"
        placeholder="Year"
        v-model="newActivity.description"
      />

      <input type="submit" value="Add Activity"/>
    </form>

    <div v-for="activity in activities" :key="activity.id" :activity="activity">
     <p>{{activity.name}} : {{activity.description}}</p>
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
