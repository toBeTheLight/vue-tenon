<template>
<div class="page page-make">
  <CmptList />
  <CmptResult />
  <CmptOptions />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CmptList from './children/CmptList.vue'
import CmptOptions from './children/CmptOptions.vue'
import CmptResult from './children/CmptResult.vue'

@Component({
  components: {
    CmptList,
    CmptOptions,
    CmptResult
  }
})
export default class Make extends Vue{

}
</script>

<style lang="less">
.page-make {
  display: flex;
}
</style>
