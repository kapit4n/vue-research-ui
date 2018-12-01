<template>
  <div id="app">
    <md-tabs>
      <md-tab id="tab-research" md-label="Research" md-icon="home">
        <Research></Research>
      </md-tab>
      <md-tab id="tab-goals" md-label="Goal" md-icon="stars">
        <Goals></Goals>
      </md-tab>
      <md-tab id="tab-steps" md-label="Steps" md-icon="chat_bubble">
        <Steps></Steps>
      </md-tab>
      <md-tab id="tab-results" md-label="Results" md-icon="message">
        <Results></Results>
      </md-tab>
      <md-tab id="tab-research-show" md-label="ResearchShow" md-icon="message">
        <ResearchShow></ResearchShow>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Research from "./components/Research";
import Goals from "./components/Goals";
import Steps from "./components/Steps";
import Results from "./components/Results";
import ResearchShow from "./components/ResearchShow";

export default {
  name: "app",
  components: {
    Research,
    Goals,
    Steps,
    Results,
    ResearchShow
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.badge {
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  right: 2px;
  background: red;
  border-radius: 100%;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.05em;
  font-family: "Roboto Mono", monospace;
}
</style>