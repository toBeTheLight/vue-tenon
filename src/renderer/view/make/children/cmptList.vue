<template>
  <div class="cmpt-list">
    <div class="cmpt-types">
      <el-select class="types__select" v-model="selectedIndex" value-key="cmpts">
        <el-option v-for="(type, i) in cmptTypes" :key="type.name" :label="type.name" :value="i" />
      </el-select>
    </div>
    <ul class="selected-list">
      <li class="list-cmpt" v-for="cmpt in selectedType.cmpts" :key="cmpt.name">{{cmpt.name}}</li>
    </ul>
  </div>
</template>

<script>
import materials from '../../../materials'
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      cmptTypes: materials,
      selectedIndex: 0
    }
  },
  computed: {
    selectedType () {
      return this.cmptTypes[this.selectedIndex]
    }
  }
}
</script>

<style lang="less">
@import url('../../../style/var.less');
.cmpt-list {
  display: flex;
  flex-direction: column;
  width: 200px;
  flex: none;
  height: 100%;
  box-shadow: 1px 0 2px @gray;
}
.cmpt-types {
  flex: none;
  padding: 10px;
  box-shadow: 0px 1px 2px @gray;
}
.selected-list {
  height: 100%;
  overflow: auto;
}
.list-cmpt {
  .text-cut;
  margin: 10px 10px;
  line-height: 40px;
  box-shadow: 0 0 2px @black;
  border-radius: 2px;
  text-align: center;
  cursor: move;
  user-select: none;
}
</style>
