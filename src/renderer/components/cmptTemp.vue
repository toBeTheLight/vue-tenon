<template>
  <component :is="options.cmpt" v-bind="options.props">
  </component>
</template>

<script>
export default {
  name: 'CmptTemp',
  props: ['options'],
}
</script>

<style>

</style>
