<template>
  <div class="goals">
    <md-list class="md-triple-line md-dense">
      <md-list-item v-for="data in response" md-expand>
        <md-avatar>
          <img :src="data.imageUrl" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{data.name}}</span>
          <span>{{data.research.name}}</span>
          <p>
            On this research I will see how to discoverOn this research
            I will see how to discoverOn this research I will
            see how to discoverOn this research I will see how to discover. :(
          </p>
        </div>
        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-card slot="md-expand" class="md-primary" md-theme="green-card">
          <md-card-header>
            <md-avatar>
              <img :src="data.research.imageUrl" alt="People">
            </md-avatar>
            <md-card-header-text>
              <div class="md-title">{{data.name}}</div>
              <div class="md-subhead">{{data.research.name}}</div>
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
const url = "http://localhost:3000/api/ResearchGoals?filter[include]=research";

export default {
  name: "Goals",
  data() {
    return {
      loaded: false,
      response: []
    };
  },
  created() {
    this.$http
      .get(url)
      .then(response => response.json())
      .then(response => {
        this.response = response;
        this.loaded = true;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
