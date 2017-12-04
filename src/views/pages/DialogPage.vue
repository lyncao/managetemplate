<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">弹出框</el-button>

    <el-dialog title="弹出框" :visible.sync="dialogFormVisible">
     <form1></form1>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import form1 from './FormPage.vue'
  export default {
    name: 'dialogpage',
    components: {form1},
    data () {
      return {
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    }
  }
</script>
