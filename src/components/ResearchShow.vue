<template>
  <div class="research-show">
    <span>{{research.name}}</span>
    <md-list class="md-triple-line md-dense">
      <!-- display goals list -->
      <md-list-item v-for="data in goals" md-expand>
        <md-avatar>
          <img :src="data.imageUrl" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{data.name}}</span>
          <p>
            {{data.description}}
          </p>
        </div>
        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-card slot="md-expand" class="md-primary" md-theme="green-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{data.name}}</div>
            </md-card-header-text>

            <md-card-media>
              <img :src="data.imageUrl" alt="Avatar">
            </md-card-media>
          </md-card-header>

          <md-card-actions>
            <md-button>Completed</md-button>
          </md-card-actions>
        </md-card>

      </md-list-item>

    </md-list>
  </div>
</template>

<script>

const url = "http://localhost:3000/api/Research"
const urlGoals = "http://localhost:3000/api/ResearchGoals"

export default {
  name: 'ResearchShow',
  data() {
    return {
      loaded: false,
      goals: [],
      research: {}
    }
  },
  created() {
    this.$http.get(url)
      .then(response => response.json())
      .then(research => {
        this.research = research
        this.loaded = true;
        this.$http.get(`${urlGoals}?filter[where][researchId]=${research[0].id}`)
        .then(response => response.json())
        .then(goals => {
          this.goals = goals
          this.loaded = true
        });
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
