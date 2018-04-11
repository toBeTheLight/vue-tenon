<template>
  <Draggable class="cmpt-result" :options="dragCmptsOptions" :value="list" @change="handleChange">
    <CmptTemp v-for="item in list" :key="item.id" :options="item">{{item.name}}</CmptTemp>
  </Draggable>
</template>

<script>
import CmptTemp from '../../../components/cmptTemp'
import { SET_CMPT_TREE} from '../../../store/mutations/types'

let id = 0
export default {
  data () {
    return {
      dragCmptsOptions: {
        sort: true,
        group: {
          name: 'cmpts'
        }
      }
    }
  },
  methods: {
    handleChange (val) {
      if (val.added) {
        let { newIndex: newIndex, element: cmpt } = val.added
        this.$store.dispatch('toSetCmptTree', {
          parent: 'root',
          newIndex: newIndex,
          cmpt: cmpt
        })
        console.log('dispatch')
      }
    }
  },
  computed: {
    list: {
      get () {
        return this.$store.state.cmptTree
      },
      // 不能使用set，需使用change获得修改，但是set不能删
      set () {
        return false
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
