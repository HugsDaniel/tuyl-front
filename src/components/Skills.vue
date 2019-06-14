<template>
  <div id="skills">
    <div v-for="skill in skills" :key="skill.id">
     <p>{{skill.name}} : {{skill.description}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'skills',
  data () {
    return {
      skills: [],
      name: [],
      description: [],
      errors: []
    }
  },
  created () {
    axios.get('https://tuyl-api.herokuapp.com/api/v1/skills', { headers: { Authorization: localStorage.token } })
      .then(response => {
        this.skills = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
