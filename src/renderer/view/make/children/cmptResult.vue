<template>
  <Draggable class="cmpt-result" :options="dragCmptsOptions" v-model="list">
    <CmptTemp v-for="item in list" :key="item.name" :options="item">{{item.name}}</CmptTemp>
  </Draggable>
</template>

<script>
import CmptTemp from '../../../components/cmptTemp'
export default {
  data () {
    return {
      temp: [],
      dragCmptsOptions: {
        sort: true,
        group: {
          name: 'cmpts'
        }
      }
    }
  },
  computed: {
    list: {
      get () {
        return this.temp
      },
      set (val) {
        console.log(val)
        this.temp = JSON.parse(JSON.stringify(val))
      }
    }
  }
}
</script>

<style class="cmpt-result">
.cmpt-result {
  width: 100%;
  overflow: auto;
  height: 100%;
}
</style>
