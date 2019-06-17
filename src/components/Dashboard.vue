<template>
  <div id="activities">
    <h4>Mes compétences</h4>
    <div v-for="userSkill in userSkills" :key="userSkill.id" :userSkill="userSkill">{{userSkill.skill.name}} : {{userSkill.amount}}</div>

    <h4>Mes activités</h4>
    <div class="row">
      <div class="col-lg-3 col-12" v-for="userActivity in userActivities" :key="userActivity.id" :userActivity="userActivity">
        <b-card
            :title="userActivity.activity.name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-card-text>
            {{ userActivity.activity.description }}
          </b-card-text>

          <router-link v-if="userActivity.status == 'pending'" :to="'/user_activity/' + userActivity.id" class="btn btn-outline-primary">Je l'ai fait !</router-link>
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
      userActivities: [],
      userSkills: [],
      errors: [],
      satisfactionLevels: [{ text: 'Nul', value: 0 }, { text: 'Passable', value: 1 }, { text: 'Pas mal', value: 2 }, { text: 'Bien', value: 3 }, { text: 'Exceptionnel', value: 4 }]
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/login')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/dashboard', { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.user = response.data.user
          this.userActivities = response.data.user_activities
          this.userSkills = response.data.user_skills
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
<style>
  h4 {
    margin: 1rem;
  }
</style>
