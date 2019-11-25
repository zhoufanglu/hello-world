<template>
    <div class="p-father">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>-->
        <div class="top-nav">
            <el-menu  :default-active="$route.path" class="el-menu-vertical-demo"
                      @open="handleOpen" @close="handleClose"
                      :collapse="isCollapse"
                      mode="horizontal">
                <el-menu-item index="/a" :collaspe="false" >
                    <div @click="topNavClick('a')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">top导航一</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="/b" >
                    <div @click="topNavClick('b')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">top导航二</span>
                    </div>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="bottom-content">
            <div>{{$route.meta.roles}}</div>
            <div class="left-nav">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1" :collaspe="false">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">左侧导航一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/a">
                                <div @click="leftNavClick('a')">aaa</div>
                                <!--<router-link to="/a">aaa</router-link>-->
                            </el-menu-item>
                            <el-menu-item index="/b">
                                <!--<router-link to="/b">bbb</router-link>-->
                                <div @click="leftNavClick('b')">bbb</div>
                            </el-menu-item>
                            <el-menu-item index="/c">
                                <div @click="leftNavClick('c')">ccc</div>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="right-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      topNavClick(path){
        if(`/${path}` !== this.$route.path){
          this.$router.push({path: `/${path}`})
        }
      },
      leftNavClick(path){
        if(`/${path}` !== this.$route.path){
          this.$router.push({path: `/${path}`})
        }
      }
    },
    components: {},
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
    .p-father {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        .bottom-content{
            display: flex;
            .left-nav{
                width: 300px;
            }
            .right-content{
                border: solid 1px red;
            }
        }
    }
</style>
