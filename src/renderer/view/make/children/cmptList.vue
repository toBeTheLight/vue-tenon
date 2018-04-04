<template>
  <div class="cmpt-list">
    <div class="cmpt-types">
      <el-select class="types__select" v-model="selectedType">
        <el-option v-for="item in cmptTypes" :key="item.type" :label="item.type" :value="item" />
      </el-select>
    </div>
    <ul class="selected-list">
      <li class="list-cmpt" v-for="(cmpt, i) in selectedType.children" :key="cmpt">{{cmpt, i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cmptTypes: [
        {
          type: '微件',
          children: [
            '按钮',
            '输入框',
            '标签'
          ]
        }
      ],
      selectedType: this.cmptTypes[0]
    }
  },
  watch: {
    selectedType () {}
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
