<template>
  <div class="page page-project">
    <ProjectConfig @beginCreate="beginCreate" ref="config"/>
    <ProjectOverview />
    <ProjectCreate @endCreate="endCreate" v-if="beginCreateState"/>
  </div>
</template>

<script>
import ProjectConfig from './children/projectConfig.vue'
import ProjectOverview from './children/projectOverview.vue'
import ProjectCreate from './children/projectCreate.vue'

export default {
  data () {
    return {
      beginCreateState: false,
      showMask: false
    }
  },
  methods: {
    beginCreate () {
      this.beginCreateState = true
      this.showMask = true
    },
    endCreate () {
      this.beginCreateState = false
      this.showMask = false
    }
  },
  components: {
    ProjectConfig,
    ProjectOverview,
    ProjectCreate
  }
}
</script>

<style scoped lang="less">
.page-project{
  display: flex;
  flex-direction: column;
}
</style>
