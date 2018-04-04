<template>
<div class="page page-make">
  <CmptList />
  <CmptResult />
  <CmptOptions />
</div>
</template>

<script>
import CmptList from './children/CmptList.vue'
import CmptOptions from './children/CmptOptions.vue'
import CmptResult from './children/CmptResult.vue'

export default {
  components: {
    CmptList,
    CmptOptions,
    CmptResult
  }
}
</script>

<style lang="less">
.page-make {
  display: flex;
}
</style>
