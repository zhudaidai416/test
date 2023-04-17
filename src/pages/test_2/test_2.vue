<template>
  <div class="test-content">
    <div class="left-require">
      <div>
        <img src="../../statics/img/form-list.jpg" alt="">
        <h2>1、在右侧空白区域按照图片所示完成表单(可使用elementui)，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中</h2>
        <h2>2、在右侧空白区域以键值对的形似显示保存到vuex的数据</h2>
        <h2>3、给首页的 "跳转表单按钮" 添加点击事件，点击后可跳转到本页面，并读取上一次验证通过并保存到的vuex中的数据，显示到表单</h2>
        <h2>4、给身份证号码、电话号码添加正则验证，毕业时间需比入学时间晚3年</h2>
        <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
      </div>
    </div>

    <div class="right-content">
      <!--代码区域-->
      <el-form :model="formDate" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="学生姓名" prop="stuName">
          <el-input v-model="formDate.stuName"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" prop="cardId">
          <el-input v-model="formDate.cardId"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="tel">
          <el-input v-model="formDate.tel"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="formDate.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="民族" prop="nation">
          <el-select v-model="formDate.nation">
            <el-option label="汉族" value="汉族"></el-option>
            <el-option label="其他少数民族" value="其他少数民族"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入学时间" required>
          <el-form-item prop="start_date">
            <el-date-picker type="date" placeholder="选择日期时间" v-model="formDate.start_date"
              style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="毕业时间" required>
          <el-form-item prop="end_date">
            <el-date-picker type="date" placeholder="选择日期时间" v-model="formDate.end_date"
              style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="所选课程" prop="course">
          <el-checkbox-group v-model="formDate.course">
            <el-checkbox label="语文" name="course"></el-checkbox>
            <el-checkbox label="数学" name="course"></el-checkbox>
            <el-checkbox label="英语" name="course"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="备注" prop="note">
          <el-input type="textarea" v-model="formDate.note"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//测试一：
//1、按照图片完成表单，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中
//2、在右侧空白区域以键值对的形似显示保存到vuex的数据
//3、给首页的 "跳转表单按钮" 添加点击事件，点击后可跳转到本页面，并读取vuex中的数据，显示到表单
import { mapState, mapMutations } from 'vuex';
export default {
  name: "test_2",
  data() {
    return {
      formDate: {
        stuName: '',
        cardId: '',
        tel: '',
        sex: '',
        nation: '',
        start_date: '',
        end_date: '',
        course: [],
        note: '',
      },
      rules: {
        stuName: [
          { required: true, message: '请输入', trigger: 'change' },
        ],
        // cardId: [
        //     { required: true, message: '请输入', trigger: 'change' },
        //     { min: 18, max: 18, message: '请输入正确的身份证号码', trigger: 'change' }
        // ],
        // tel: [
        //     { required: true, message: '请输入', trigger: 'change' },
        //     { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'change' }
        // ],
        // sex: [
        //     { required: true, message: '请选择', trigger: 'change' },
        // ],
        // nation: [
        //     { required: true, message: '请选择', trigger: 'change' },
        // ],
        // start_date: [
        //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // ],
        // end_date: [
        //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ],
        // course: [
        //     { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
        // ]
      }
    }
  },
  mounted() {
    this.formDate = this.stuDate;
  },
  computed: {
    ...mapState({
      stuDate: state => state.stuDate,
    })
  },
  methods: {
    ...mapMutations({
      changeStuDate: 'changeStuDate' // 修改表单数据
    }),
    // 提交表单
    submitForm() {
      console.log('表单数据：', this.formDate);

      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: '提交成功！',
            type: 'success'
          });
          this.changeStuDate(this.formDate);
          this.resetForm();
          this.$router.push('/test_1');
        } else {
          this.$message({
            message: '请将表单填写完整！',
            type: 'error'
          });
          return false;
        }
      });
    },
    // 清空
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  },

}
</script>

<style scoped>
.right-content {
  padding: 50px 100px;
  overflow: scroll;
}
</style>