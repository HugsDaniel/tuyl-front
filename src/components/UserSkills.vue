<template>
  <div id="userSkills">
    <h4>Répartissez vos points de compétences</h4>
      <form @submit.prevent="onSubmit()">
        <div v-for="userSkill in userSkills" :key="userSkill.id" :userSkill="userSkill">
          <label for="amount" class="label">{{userSkill.skill.name}}</label>
          <input type="number" v-model="userSkill.amount" class="input" id="amount">
        </div>

        <button type="submit" class="btn btn-outline-primary">Enregistrer</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserSkills',
  data () {
    return {
      userSkills: [],
      errors: []
    }
  },

  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/login')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/user_skills', { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.userSkills = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  methods: {
    onSubmit () {
      axios.put(process.env.ROOT_API + '/api/v1/user_skills/update_multiple', { user_skills: this.userSkills }, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.$router.replace('/dashboard')
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
