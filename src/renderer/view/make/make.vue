<template>
  <p @click="toProject">test</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Make extends Vue{
  toProject () {
    this.$router.push('make')
  }
}
</script>

<style>

</style>
