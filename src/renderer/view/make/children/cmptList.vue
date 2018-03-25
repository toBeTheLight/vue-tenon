<template>
  <div class="cmpt-list"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CmptList extends Vue {

}
</script>

<style lang="less">
.cmpt-list {
  width: 200px;
  flex: none;
  height: 100%;
  outline: 1px solid black;
}

</style>
