<template>
  <div id="activities">

    <section id="quetes-and-levels">
      <div id="quetes">
        <header>mes Quêtes (or Questie's)</header>
        <div id="store-quete">
          <div class="element-quete">
            <div class="quete-header">la Procession de Soie</div>
            <div class="store">
              <div class="element"></div>
              <div class="element"></div>
              <div class="element"></div>
              <div class="element"></div>
              <div class="element"></div>
              <div class="element"></div>
            </div>
          </div>
          <div class="element-quete">
            <div class="store">
              <div class="element"></div>
              <div class="element"></div>
              <div class="element"></div>
              <div class="element"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="progression">
        <div>
          <header>ma Progression (or LevelUp's)</header>
        </div>
      </div>
    </section>

    <section id="today-and-week">
      <div id="week-before">
        <div>
          <header>plus Tôt dans la semaine</header>
          <div class="store">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
          </div>
          <a href="#" class="bouton_lancer">Lancer les dés</a>
        </div>
      </div>

      <div id="today">
        <div id="visual-day">
          <header>ma Journée en une Tuyl</header>
        </div>
        <div id="tuyl-s">
          <header></header>
          <div class="store">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
          </div>
        </div>
      </div>

      <div id="week-after">
        <div>
          <header>plus Tard dans la semaine</header>
          <div class="store">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
          </div>
          <a href="#" class="bouton_plus">+ Ajouter une Tuyl +</a>
        </div>
      </div>
    </section>

    <section id="tuyl-collection">
      <div id="people-s">
        <header>bien Accompagné (or People's)</header>
        <div class="store">
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
        </div>
      </div>

      <div id="perso-s">
        <header>mes Occupations (or Perso's)</header>
        <div class="store">
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
        </div>
      </div>
    </section>

    <footer>
      <div id="perso-skills">
          <header>mes Compétences (3/6)</header>
          <div id="listes_perso-skills">
            <div class="store-skill">
              <div><img class="logo-skill" src="../assets/images/skill-force.png"  alt="Force" title="Je n'en reviens pas !"/></div>
              <div class="description-skill">
                <div><a href="#">Physique</a></div>
                <div class="level-skill">Niveau 2</div>
                <div class="level-bar-skill">
                  <div id="level-full-physique"></div>
                </div>
              </div>
              
            </div>
            <div class="store-skill">
              <div><img class="logo-skill" src="../assets/images/skill-intelligence.png"  alt="Intelligence" title="Je n'en reviens pas !"/></div>
              <div class="description-skill">
                <a>Mental</a>
                <div class="level-skill">Niveau 1</div>
                <div class="level-bar-skill">
                  <div id="level-full-mental"></div>
                </div>
              </div>
            </div>
            <div class="store-skill">
              <a><img class="logo-skill" src="../assets/images/skill-sagesse.png"  alt="Sagesse" title="Je n'en reviens pas !"/></a>
              <div class="description-skill">
                <a href="#">Spirituel</a>
                <div class="level-skill">Niveau 2</div>
                <div class="level-bar-skill">
                  <div id="level-full-spirituel"></div>
                </div>
              </div>
            </div>
            <div class="store-skill">
              <a><img class="logo-skill" src="../assets/images/skill-dexterite.png"  alt="Dextérité" title="Je n'en reviens pas !"/></a>
              <div class="description-skill">
                <a href="#">Adaptation</a>
                <div class="level-skill">Niveau 2</div>
                <div class="level-bar-skill">
                  <div id="level-full-adaptation"></div>
                </div>
              </div>
            </div>                        
            <div class="store-skill">
              <a><img class="logo-skill" src="../assets/images/skill-constitution.png"  alt="Constitution" title="Je n'en reviens pas !"/></a>
              <div class="description-skill">
                <a>Énergie</a>
                <div class="level-skill">Niveau 1</div>
                <div class="level-bar-skill">
                  <div id="level-full-energie"></div>
                </div>
              </div>
            </div>
            <div class="store-skill">
              <div><img class="logo-skill" src="../assets/images/skill-charisme.png"  alt="Charisme" title="Je n'en reviens pas !"/></div>
              <div class="description-skill">
                <a>Résistance</a>
                <div class="level-skill">Niveau 1</div>
                <div class="level-bar-skill">
                  <div id="level-full-resistance"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div id="perso-stats">
          <header>mes Stats (2/9)</header>
          <div id="listes_perso-stats">
            <a>Force</a>
            <a href="#">Volonté</a>
            <a>Influence</a>
            <a>Constitution</a>
            <a>Perception</a>
            <a>Équilibre</a>
            <a>Agilité</a>
            <a>Intelligence</a>
            <a href="#">Intuition</a>
          </div>
      </div>
    </footer>

    <!--<footer>
      <div id="perso-skills">
          <header>mes Compétences (3/6)</header>
          <div id="listes_perso-skills">
            <a href="#">Physique</a>
            <a>Mental</a>
            <a href="#">Spirituel</a>
            <a>Énergie</a>
            <a>Résistance</a>
            <a href="#">Adaptation</a>
          </div>
      </div>
      <div id="perso-stats">
          <header>mes Stats (2/9)</header>
          <div id="listes_perso-stats">
            <a>Force</a>
            <a href="#">Volonté</a>
            <a>Influence</a>
            <a>Constitution</a>
            <a>Perception</a>
            <a>Équilibre</a>
            <a>Agilité</a>
            <a>Intelligence</a>
            <a href="#">Intuition</a>
          </div>
      </div>
    </footer>

    <h4>mes Compétences (or Skill's)</h4>-->
    <div v-for="userSkill in userSkills" :key="userSkill.id" :userSkill="userSkill">{{userSkill.skill.name}} : {{userSkill.amount}}
    </div>

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
    </div> -->

  </div>
</template>

<style>
  @font-face {
      font-family: 'montserratbold';
      src: url('fonts/montserrat-bold-webfont.woff2') format('woff2'),
           url('fonts/montserrat-bold-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'montserratitalic';
      src: url('fonts/montserrat-italic-webfont.woff2') format('woff2'),
           url('fonts/montserrat-italic-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'montserratlight';
      src: url('fonts/montserrat-light-webfont.woff2') format('woff2'),
           url('fonts/montserrat-light-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'montserratmedium';
      src: url('fonts/montserrat-medium-webfont.woff2') format('woff2'),
           url('fonts/montserrat-medium-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  #activities
  {
    background: url(../assets/images/background.jpg);
    background-size: contain;
    color: rgb(133,134,138);
    width: auto;
  }

  section
  {
    display: flex;
    margin-bottom: 20px;
  }

  section header
  {
    font-family: montserratbold, Verdana;
    font-weight: normal;
    text-transform: uppercase;
    color: rgb(229,200,184);
    background-color: rgba(21,27,39,0.42);
    padding: 3px;
    height: 29px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  #quetes
  {
    background-color: rgba(95,63,87,0.42);
    margin-left: 20px;
    margin-right: 5px;
    width: 50%;
    border-radius: 7px;
  }

  #progression
  {
    background-color: rgba(133,134,138,0.42);
    margin-left: 5px;
    margin-right: 20px;
    width: 50%;
    border-radius: 7px;
  }

  #week-before
  {
    width: 25%;
    margin-left: 20px;
    background-color: rgba(95,63,87,0.42);
    border-radius: 7px;
    text-align: center;
  }

  #today
  {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    width: 45%;
    background-color: rgba(167,201,185,0.42);
    border-radius: 7px;
  }
  #visual-day, #tuyl-s
  {
    width: 50%;
  }

  #week-after
  {
    width: 25%;
    margin-right: 20px;
    background-color: rgba(133,134,138,0.42);
    border-radius: 7px;
    text-align: center;
  }

  #people-s
  {
    width: 50%;
    margin-left: 20px;
    margin-right: 10px;
    background-color: rgba(167,201,185,0.42);
    border-radius: 7px;
  }

  #perso-s
  {
    width: 50%;
    margin-left: 10px;
    margin-right: 20px;
    background-color: rgba(167,201,185,0.42);
    border-radius: 7px;
  }

  #perso-skills
  {
    width: 50%;
    margin-left: 20px;
    margin-right: 10px;
    background-color: rgba(95,63,87,0.42);
    border-radius: 7px;
  }

  #listes_perso-skills
  {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 7px;
  }

  .store-skill
  {
    display: flex;
    width: 47%;
    background-color: rgba(21,27,39,0.42);
    margin: 3px;
    border-radius: 7px;
    padding: 3px;
  }

  .logo-skill
  {
    width: 84px;
  }

  .description-skill
  {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 3px;
  }

  .level-skill
  {
    color: rgb(167,201,185);
    font-family: montserratlight, Verdana;
    font-size: 0.8em;
    text-align: left;
    margin-top: 7px;
  }

  .level-bar-skill
  {
    display: flex;
    width: 100%;
    height: 14px;
    background-color: rgba(21,27,39,0.42);
    border-radius: 3px;
  }

  #level-full-physique
  {
    width: 70%;
    background-color: rgb(108,89,87);
    border-radius: 3px;
  }

  #level-full-mental
  {
    width: 15%;
    background-color: rgb(61,81,96);
    border-radius: 3px;
  }

  #level-full-spirituel
  {
    width: 55%;
    background-color: rgb(76,62,156);
    border-radius: 3px;
  }

  #level-full-adaptation
  {
    width: 65%;
    background-color: rgb(148,63,142);
    border-radius: 3px;
  }

  #level-full-energie
  {
    width: 25%;
    background-color: rgb(118,165,131);
    border-radius: 3px;
  }

  #level-full-resistance
  {
    width: 22%;
    background-color: rgb(52,181,212);
    border-radius: 3px;
  }

  #perso-stats
  {
    width: 50%;
    margin-left: 10px;
    margin-right: 20px;
    background-color: rgba(133,134,138,0.42);
    border-radius: 7px;
  }

  section a
  {
    display: block center;
    box-shadow: 1px 1px 22px rgba(167,201,185,0.42);
    border-radius: 5px;
    padding: 3px;
    font-size: 0.9em;
    text-decoration: none;
    color: rgb(229,200,184);
  }
  a:hover
  {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  #store-quete
  {
    display: flex;
    flex-direction: column;
  }

  .quete-header
  {
    color: rgb(191,64,107);
    font-family: montserratlight, Verdana;
    font-weight: bold;
  }

  .store
  {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3px;
  }

  .element-quete
  {
    padding: 5px;
    box-shadow: 1px 1px 14px rgb(191,64,107);
    border-radius: 22px;
    margin: 7px;
  }

  .element:nth-child(n)
  {
    width: 57px;
    height: 86px;
    background: url("../assets/images/tuylsa.png");
    border-radius: 9px;
    margin: 3px;
  }

  .element:nth-child(2n)
  {
    width: 57px;
    height: 86px;
    background: url("../assets/images/tuylsb.png");
    border-radius: 9px;
    margin: 3px;
  }

  footer
  {
    display: flex;
    margin-bottom: 20px;
  }

  footer header
  {
    font-family: montserratbold, Verdana;
    font-weight: normal;
    text-transform: uppercase;
    color: rgb(229,200,184);
    background-color: rgba(21,27,39,0.42);
    padding: 3px;
    height: 29px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;

  }



  footer a
  {
    display: block center;
    border-radius: 5px;
    padding: 3px;
    font-size: 0.95em;
    font-weight: bold;
    text-decoration: none;
    color: rgb(229,200,184);
  }

  /*
  h4 {
    margin: 1rem;
  }

  #calendar {
    display: none;
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
  */

</style>

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
