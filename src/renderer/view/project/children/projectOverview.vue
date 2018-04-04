<template>
  <div class="project-overview full">
    <ul class="overview__pages" v-if="projectConfigured">
      <li class="overview-page page--tocreate">
        <h5 class="tocreate__title">页面名称</h5>
        <el-input class="tocreate__input" v-model="tempPageName" placeholder="字母开头的20位以下字母或数字"></el-input>
        <el-button class="tocreate__btn" type="success" @click="createPage" :disabled="!tempPageNamePassed">创建页面</el-button>
      </li>
      <li class="overview-page page--created" 
        v-for="(value, key) in pageList"
        :key="key">
        <h5 class="page__title">{{value}}</h5>
      </li>
      <!-- 不可见占位页 临时处理 -->
      <li class="overview-page page--empty"></li>
      <li class="overview-page page--empty"></li>
      <li class="overview-page page--empty"></li>
      <li class="overview-page page--empty"></li>
      <li class="overview-page page--empty"></li>
      <li class="overview-page page--empty"></li>
    </ul>
    <h2 v-else class="overview__tip--no">配置你的第一个项目吧</h2>
  </div>
</template>
<script>
import { pageNamePassed } from '../../../biz/pageCreate'

export default {
  data () {
    return {
      tempPageName: ''
    }
  },
  computed: {
    projectConfigured () {
      return this.$store.getters.projectConfigured
    },
    tempPageNamePassed () {
      return pageNamePassed(this.tempPageName)
    },
    pageList () {
      return this.$store.state.pageList
    }
  },
  methods: {
    createPage () {
      this.$store.dispatch('toAddPage', this.tempPageName)
        .then(() => {
          this.tempPageName = ''
          this.$router.push({name: 'make'})
        })
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~@/style/var.less');
.project-overview {
  background-color: @ghost;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  overflow: auto;
}

.overview__tip--no {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  line-height: 30px;
  height: 30px;
  margin: auto;
}
.overview__pages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}
.overview-page {
  margin: 20px;
  width: 280px;
  height: 210px;
  border-radius: 10px;
  border: 2px solid @gray;
  &:hover{
    border-color: @blue;
    .page__title {
      border-top: 2px solid @blue;
    }
  }
}
.page--tocreate {
  text-align: center;
}
.tocreate__title {
  margin-top: 20px;
  line-height: 50px;
  text-align: center;
  color: @black;
}
.tocreate__input {
  width: 85%;
  margin: auto;
  .el-input__inner {
    font-size: 14px!important;
  }
}
.tocreate__btn {
  margin-top: 30px;
}
.page--created {
  position: relative;
}
.page__title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: @blue;
  background-color: @white;
  border-radius: 0 0 10px 10px;
}
.page--empty {
  margin-top: 0;
  margin-bottom: 0;
  height: 0;
  visibility: hidden;
}
</style>