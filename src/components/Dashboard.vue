<template>
  <div id="activities">
    <h4>Mes compétences</h4>
    <div v-for="userSkill in userSkills" :key="userSkill.id" :userSkill="userSkill">{{userSkill.skill.name}} : {{userSkill.amount}}</div>

    <div id="calendar">
      <vue-cal
        small
        default-view="week"
        hide-view-selector
        :time-from="9 * 60"
        :time-to="23 * 60"
        :locale="locale"
        today-button
        :events="userActivities"
        events-count-on-year-view
        :on-event-click="onEventClick"
      >
        <div slot="today-button">
          <b-button variant="outline-info" size="sm" slot="activator">
            <span>Today</span>
          </b-button>
        </div>
      </vue-cal>

      <b-modal v-model="showDialog" :title="selectedEvent.title + ' - ' + selectedEvent.startDate">
        <p>De {{ selectedEvent.startTime }} à {{ selectedEvent.endTime }}</p>
        <p>{{ selectedEvent.content }}</p>

        <template slot="modal-footer" slot-scope="{ ok }">
          <router-link v-if="selectedEvent.status == 'pending'" :to="'/user_activity/' + selectedEvent.id" class="btn btn-outline-primary btn-sm">Je l'ai fait !</router-link>
          <b-button variant="outline-success" size="sm" @click="ok()">
            OK
          </b-button>
        </template>
      </b-modal>
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
      selectedEvent: {},
      showDialog: false,
      user: '',
      locale: 'fr',
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
  },

  methods: {
    onEventClick (event, e) {
      this.selectedEvent = event
      this.showDialog = true

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    }
  }
}
</script>
<style>
  h4 {
    margin: 1rem;
  }

  #calendar {
    height: 40rem;
    margin: 3rem 0rem;
  }

  .vuecal__menu, .vuecal__cell-events-count {background-color: #42b983;}
  .vuecal__menu li {border-bottom-color: #fff;color: #fff;}
  .vuecal__menu li.active {background-color: rgba(255, 255, 255, 0.15);}
  .vuecal__title-bar {background-color: #e4f5ef;}
  .vuecal__cell.today, .vuecal__cell.current {background-color: rgba(240, 240, 255, 0.4);}
  .vuecal:not(.vuecal--day-view) .vuecal__cell.selected {background-color: rgba(235, 255, 245, 0.4);}
  .vuecal__cell.selected:before {border-color: rgba(66, 185, 131, 0.5);}

  .vuecal__event {cursor: pointer;}

  .vuecal__event-time {
    display: inline-block;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>
