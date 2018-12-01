<template>
  <div class="research">
    <md-list class="md-triple-line md-dense">
      <md-list-item md-expand v-for="data in response">
        <md-avatar>
          <img :src="data.imageUrl">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{data.name}}</span>
          <span>research</span>
          <p>{{data.description}}</p>
        </div>

        <md-badge class="md-primary md-square" md-content="Started"/>
        <!-- Badge for status -->
        <md-badge class="md-primary" md-content="6"/>
        <!-- Goals -->
        <md-badge class md-content="8"/>
        <!-- Steps -->
        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-card slot="md-expand" class="md-primary">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{data.name}}</div>
              <div class="md-subhead">{{data.description}}</div>
            </md-card-header-text>

            <md-card-media>
              <img :src="data.imageUrl" alt="Avatar">
            </md-card-media>
          </md-card-header>

          <md-card-content>Started
            <br>6 Goals
            <br>8 Steps
            <br>
          </md-card-content>

          <md-card-actions>
            <md-button>Start</md-button>
            <md-button>Finish</md-button>
          </md-card-actions>
        </md-card>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>
    </md-list>
  </div>
</template>

<script>
import "isomorphic-fetch";
import { Fetch } from "vue-fetch";
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

const url = "http://localhost:3000/api/research";

export default {
  name: "Research",
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
