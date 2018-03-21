<template>
  <div class="page">
    1
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import projectConfig from './children/projectConfig.vue'

@Component({
  components: {
    projectConfig: projectConfig
  }
})
export default class Project extends Vue {
  msg: string = '123'
}
</script>

<style>

</style>
