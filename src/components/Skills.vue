<template>
  <div id="skills">
    <h2>Toutes les compétences</h2>
    <div class="skills-list">
      <b-card-group>
        <div class="row">
          <div class="col-lg-4 col-12" v-for="skill in skills" :key="skill.id">
            <b-card
              border-variant="secondary"
              header-border-variant="secondary"
              align="center"
              :header="skill.name"
              class="skill-card"
            >
              <b-card-text>{{skill.description}}</b-card-text>
            </b-card>
          </div>
        </div>
      </b-card-group>
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
    if (!localStorage.signedIn) {
      this.$router.replace('/login')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/skills', { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.skills = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style>
  #skills {
    margin-top: 40px;
  }

  h2 {
    margin: 40px;
  }

  .skill-card {
    margin: 10px;
  }

  .skills-list {
    margin: 10px;
  }
</style>
