<template>
  <div id="user_activity">
    <h2>Mes activités</h2>
    <p>Niveau de satisfaction</p>
    <b-form action="" @submit.prevent="launchDice">
      <b-form-select
        id="user_activity_satisfaction_level"
        class="input"
        required
        autofocus autocomplete="off"
        placeholder="Niveau de satisfation"
        :options="satisfactionLevels"
        v-model="userActivity.satisfaction_level"
        @change="loadDiceLaunch"
      ></b-form-select>

      <div id="diceMax">
        <h3>Tu lances un dé {{this.diceMax}}</h3>
      </div>

      <b-button id="launchDiceBtn" type="submit" variant="outline-primary" class="activity-btn">Lancer</b-button>
    </b-form>

    <div id="result">
      Résultat
      <p id="diceResult"></p>
    </div>

    <b-button id="markActivityAsDoneBtn" variant="outline-primary" @click='markActivityAsDone(userActivity.id)'>All right !</b-button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserActivity',
  data () {
    return {
      userActivity: '',
      errors: [],
      diceMax: '',
      satisfactionLevels: [{ text: 'Nul', value: 0 }, { text: 'Passable', value: 1 }, { text: 'Pas mal', value: 2 }, { text: 'Bien', value: 3 }, { text: 'Exceptionnel', value: 4 }]
    }
  },

  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/login')
    } else {
      axios.get(process.env.ROOT_API + '/api/v1/user_activities/' + this.$route.params.id, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.userActivity = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },

  methods: {
    loadDiceLaunch () {
      const diceMaxDiv = document.getElementById('diceMax')
      const launchDiceBtn = document.getElementById('launchDiceBtn')

      if (this.userActivity.satisfaction_level === 0) {
        this.diceMax = 20
      } else if (this.userActivity.satisfaction_level === 1) {
        this.diceMax = 40
      } else if (this.userActivity.satisfaction_level === 2) {
        this.diceMax = 60
      } else if (this.userActivity.satisfaction_level === 3) {
        this.diceMax = 80
      } else if (this.userActivity.satisfaction_level === 4) {
        this.diceMax = 100
      }

      launchDiceBtn.style.display = 'block'
      diceMaxDiv.style.display = 'block'
    },

    displayResult () {
      const result = document.getElementById('result')
      const launchDiceBtn = document.getElementById('launchDiceBtn')
      const markActivityAsDoneBtn = document.getElementById('markActivityAsDoneBtn')

      launchDiceBtn.style.display = 'none'
      result.style.display = 'block'
      markActivityAsDoneBtn.style.display = 'block'
    },

    launchDice () {
      const diceResult = document.getElementById('diceResult')
      let randomNumber = Math.floor(Math.random() * this.diceMax) + 1
      diceResult.innerHTML = randomNumber

      this.displayResult()
    },

    markActivityAsDone (id) {
      axios.put(process.env.ROOT_API + '/api/v1/user_activities/' + id + '/done', { user_activity: { satisfaction_level: this.userActivity.satisfaction_level } }, { headers: { Authorization: localStorage.token } })
        .then(response => {
          this.$router.replace('/dashboard')
          this.user_activities = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style>
  #launchDiceBtn {
    display: none;
    margin: 1rem;
    margin: auto;
  }

  #diceMax {
    display: none;
    padding: 1rem;
  }

  #result {
    display: none;
  }

  #diceResult {
    font-size: 40px;
  }

  #markActivityAsDoneBtn {
    display: none;
    margin: auto;
  }
</style>
