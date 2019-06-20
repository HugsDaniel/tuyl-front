<template>
  <div id="activities">
    <h4>Mes compétences</h4>
    <div v-for="userSkill in userSkills" :key="userSkill.id" :userSkill="userSkill">{{userSkill.skill.name}} : {{userSkill.amount}}</div>

    <div style="height: 500px;">
      <vue-cal
        small
        default-view="week"
        :time-from="9 * 60"
        :time-to="23 * 60"
        :disable-views="['years', 'year']"
        :locale="locale"
        today-button
        :events="events"
        events-count-on-year-view
      >
        <div slot="today-button">
          <v-btn slot="activator">
            <span>Today</span>
          </v-btn>
        </div>
      </vue-cal>
    </div>

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
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'dashboard',
  components: { VueCal },
  data () {
    return {
      user: '',
      locale: 'fr',
      userActivities: [],
      userSkills: [],
      events: [
        {
          start: '2019-06-21 14:00',
          end: '2019-06-21 18:00',
          title: 'Need to go shopping',
          content: '<i class="v-icon material-icons">shopping_cart</i>',
          class: 'leisure'
        },
        {
          start: '2019-06-22 12:00',
          end: '2019-06-22 14:00',
          title: 'Golf with John',
          content: '<i class="v-icon material-icons">golf_course</i>',
          class: 'sport'
        },
        {
          start: '2019-06-23 14:00',
          end: '2019-06-23 20:00',
          title: 'Dad\'s birthday!',
          content: '<i class="v-icon material-icons">cake</i>',
          class: 'sport'
        }
      ],
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

  .vuecal__event {cursor: pointer;}

  .vuecal__event-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 4px 0 8px;
  }

  .vuecal__event-time {
    display: inline-block;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .vuecal__event-content {
    font-style: italic;
  }
</style>
