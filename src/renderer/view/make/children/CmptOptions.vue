<template>
  <div class="cmpt-options"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CmptOptions extends Vue {

}
</script>

<style lang="less">
.cmpt-options {
  width: 200px;
  height: 100%;
  flex: none;
  outline: 1px solid black;
}
</style>
