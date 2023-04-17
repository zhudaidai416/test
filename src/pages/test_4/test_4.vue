<template>
  <div class="test-content test4">
    <div class="left-require">
      <div>
        <img class="" src="../../statics/img/table-list.jpg" alt="">
        <h2>在右侧空白区域完成如图所示的表格,表格数据见参数table_data，不得使用其他插件或组件（包括elementUI）</h2>
        <h2>表格数据查询，根据查询条件筛选数组中的值，实现搜索功能</h2>
        <h2>性别列下拉筛选功能实现</h2>
        <h2>入学时间和毕业时间排序功能实现</h2>
        <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
      </div>
    </div>

    <div class="right-content">
      <!--代码区域-->
      <div class="search">
        姓名：<input v-model="name" placeholder="请输入姓名模糊查询" />
        电话号码：<input v-model="tel" placeholder="请输入电话号码查询" />
        <button class="reset-btn" @click="reset">清除</button>
        <button class="search-btn" @click="search">查询</button>
      </div>

      <table class="tableDate">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话号码</th>
            <th>
              <span>性别</span>
              <i class="el-icon-arrow-down" @click="sortSex"></i>
            </th>
            <th>身份证号码</th>
            <th class="sort">
              <span>入学时间</span>
              <i class="el-icon-caret-top" @click="sortData('start_date', 'top')"></i>
              <i class="el-icon-caret-bottom" @click="sortData('start_date', 'bottom')"></i>
            </th>
            <th class="sort">
              <span>毕业时间</span>
              <i class="el-icon-caret-top" @click="sortData('end_date', 'top')"></i>
              <i class="el-icon-caret-bottom" @click="sortData('end_date', 'bottom')"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="table_data.length">
            <tr v-for="item in table_data" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.sex | filterSex }}</td>
              <td>{{ item.id }}</td>
              <td>{{ item.start_date }}</td>
              <td>{{ item.end_date }}</td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="6">暂无数据！</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
//表格数据查询，根据查询条件筛选数组中的值，实现搜索功能
//下拉筛选功能实现
//排序功能实现
export default {
  name: "test_4",
  data() {
    return {
      name: '',
      tel: '',
      table_data_cope: [],
      //表格数据
      table_data: [
        { name: '张三', phone: '15222222222', sex: 'male', id: '510000000000000000', start_date: '2018-12-14 09:00', end_date: '2022-12-14 09:00' },
        { name: '李四', phone: '15221232222', sex: 'male', id: '510000000000000001', start_date: '2018-12-14 15:00', end_date: '2022-12-14 16:00' },
        { name: '韩梅梅', phone: '15222224562', sex: 'female', id: '51000000004500000', start_date: '2020-12-14 09:00', end_date: '2024-12-14 09:00' },
        { name: '李雷', phone: '15222662222', sex: 'male', id: '510000067000000000', start_date: '2017-12-14 09:00', end_date: '2020-12-14 09:00' },
        { name: '王雪', phone: '17822222222', sex: 'female', id: '515400004500000000', start_date: '2016-12-14 09:00', end_date: '2019-12-14 09:00' }
      ]
    }
  },
  filters: {
    filterSex(val) {
      switch (val) {
        case 'male':
          return '男';
        case 'female':
          return '女';
      }
    }
  },
  created() {
    this.table_data_cope = [...this.table_data];
  },
  methods: {
    // 拷贝数据
    copeData() {
      this.table_data = [...this.table_data_cope];
    },
    // 清除
    reset() {
      this.name = '';
      this.tel = '';
      this.copeData();
    },
    // 查询
    search() {
      this.copeData();
      this.table_data = this.table_data.filter(item => {
        let nameState = true; //姓名
        let telState = true; //电话
        if (this.name) {
          const keys = this.name.toUpperCase().replace(/\s+/g, '').split('');
          nameState = keys.every(key => item.name.toUpperCase().includes(key));
        }
        if (this.tel) {
          const pattern = new RegExp(this.tel);
          telState = pattern.test(item.phone);
        }
        console.log(nameState, telState);
        return nameState && telState;
      })
    },
    sortSex(){
      
    },
    // 排序
    sortData(field, sort) {
      if (field == 'start_date') {
        if (sort == 'top') {
          this.table_data = this.table_data.sort((a, b) => a.start_date < b.start_date ? -1 : a.start_date > b.start_date ? 1 : 0);
        } else {
          this.table_data = this.table_data.sort((a, b) => a.start_date < b.start_date ? 1 : a.start_date > b.start_date ? -1 : 0);
        }
      } else if (field == 'end_date') {
        if (sort == 'top') {
          this.table_data = this.table_data.sort((a, b) => a.end_date < b.end_date ? -1 : a.end_date > b.end_date ? 1 : 0);
        } else {
          this.table_data = this.table_data.sort((a, b) => a.end_date < b.end_date ? 1 : a.end_date > b.end_date ? -1 : 0);
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.right-content {
  padding: 20px;
}

.search {
  display: flex;
  align-items: center;

  input {
    width: 190px;
    height: 30px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #b5b5b5;
    padding: 0 10px;
  }

  .reset-btn {
    height: 30px;
    padding: 0 15px;
    background-color: white;
    color: #D8A764;
    border: 1px solid #D8A764;
    border-radius: 5px;
    margin-right: 20px;
  }

  .search-btn {
    height: 30px;
    padding: 0 15px;
    background-color: #D8A764;
    color: black;
    border: 1px solid #D8A764;
    border-radius: 5px;
  }
}

.tableDate {
  width: 100%;
  margin-top: 40px;
  border-collapse: collapse;

  tr:nth-of-type(2n) {
    background-color: #F9F5F0;
  }

  th {
    background-color: #EEE2D1;
  }

  th,
  td {
    width: calc(100% / 6);
    height: 40px;
    border: 1px solid #d4d4d4;
    text-align: center;
    padding: 0 10px;
  }

  .sort {
    position: relative;

    .el-icon-caret-top {
      position: absolute;
      top: 11px;
      cursor: pointer;
    }

    .el-icon-caret-bottom {
      position: absolute;
      bottom: 11px;
      cursor: pointer;
    }
  }

}
</style>