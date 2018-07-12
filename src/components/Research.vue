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
          <p>{{data.description}}
          </p>
        </div>

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

          <md-card-actions>
            <md-button>Start</md-button>
            <md-button>Finish</md-button>
          </md-card-actions>
        </md-card>


      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
          <img src="data:image/png;base64,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" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>REACT JS</span>
          <span>research</span>
          <p>Review the general concepts of this document</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
          <img src="data:image/png;base64,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" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>ANGULAR</span>
          <span>research</span>
          <p>Review where to apply this framework</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
      <md-list-item>
        <md-avatar>
          <img src="https://raw.githubusercontent.com/OlegIlyenko/scala-icon/master/scala-icon.png" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>SCALA</span>
          <span>research</span>
          <p>Where is this framework used?</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
          <img src="data:image/png;base64,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" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>JAVA</span>
          <span>research</span>
          <p>Framework that this language provides. :(</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
          <img src="data:image/png;base64,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" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>PYTHON</span>
          <span>Research</span>
          <p>Algorithms that is used for ML</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>
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
