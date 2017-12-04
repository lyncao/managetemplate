<template>
  <div class="content-panel">
    <div class="page-title">标题</div>
    <div class="toolbar">
      <div class="button-group">
        <el-button size="small">添加</el-button>
      </div>
      <div class="search-box">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="内容"
      >
      </el-table-column>
      <el-table-column
        prop="id"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" class="td-button" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small" class="td-button">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-footer">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="listQuery.page"
        :page-size="listQuery.size"
        layout="prev, pager, next"
        :total="totalcount">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import { fetchList } from '@/api/index'

  export default {
    name: 'tablepage',
    data () {
      return {
        input5: '',
        tableData: [],
        totalcount: 0,
        listQuery: {
          page: 1,
          size: 10,
          search: '',
          sort: '+id'
        }
      }
    },
    mounted () {
      this.getLists()
    },
    methods: {
      getLists () {
        fetchList(this.listQuery).then(response => {
          this.tableData = response.data.items
          this.totalcount = response.data.total
          console.log(response.data)
        })
      },
      handleClick (row) {
        alert(row.title)
      },
      handleCurrentChange: function (val) {
        this.listQuery.page = val
        this.getLists()
      }
    }
  }
</script>
