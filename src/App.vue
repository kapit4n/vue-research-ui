<template>
  <div id="app">
    <md-tabs>
      <md-tab id="tab-research" md-label="Research" md-icon="research">
      </md-tab>
      <md-tab id="tab-goals" md-label="Goal" md-icon="goal">
      </md-tab>
      <md-tab id="tab-steps" md-label="Steps" md-icon="step"></md-tab>
      <md-tab id="tab-results" md-label="Results" md-icon="result"></md-tab>
    </md-tabs>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    letter-spacing: -.05em;
    font-family: 'Roboto Mono', monospace;
  }
</style>