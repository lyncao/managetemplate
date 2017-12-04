<template>
  <div class="content-panel">
    <div class="page-title">树</div>
    <div class="toolbar"> <el-button type="primary" @click="getCheckedNodes">确定</el-button></div>
    <el-tree
      :data="data2" check-strictly @check-change="handleNodeClick"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps">
    </el-tree>

  </div>
</template>
<script>
  import { getTree } from '@/api/index'

  export default {
    name: 'treepage',
    methods: {
      getCheckedNodes () {
        console.log(this.$refs.tree.getCheckedNodes())
        alert(this.$refs.tree.getCheckedNodes()[0].name)
      },
      handleNodeClick (data, node) {
        if (node) {
          // 处理为单选
          this.$refs.tree.setCheckedKeys([])
          this.$refs.tree.setCheckedKeys([data.id])
        }
      }
    },
    mounted () {
      getTree().then(response => {
        this.data2 = response.data
        console.log(response.data)
      })
    },
    data () {
      return {
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'name'
        }
      }
    }
  }
</script>
