<template>
  <div class="login">
    <!--表单容器-->
    <div class="from">
      <!--标题-->
      <div class="title">
        <img src="../../assets/img/矢量智能对象 拷贝 9.png" alt />
        <span class="span-01">黑马面面</span>
        <i></i>
        <span class="span-02">用户登录</span>
      </div>
      <!--饿了么表单-->
      <el-form :rules="rules" class="login-form" ref="form" :model="form">
        <!--输入手机号-->
        <el-form-item prop="name">
          <el-input placeholder="请输入手机号" v-model="form.name" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!--输入密码-->
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <!--输入验证码-->
        <el-form-item prop="type">
          <!--行-->
          <el-row>
            <!--列-->
            <el-col :span="18">
              <div class="grid-content bg-purple">
                <el-input placeholder="请输入验证码" v-model="form.type" prefix-icon="el-icon-key"></el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <img src="../../assets/img/验证码.png" alt />
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <!--用户协议-->
        <el-form-item>
          <el-checkbox name="type" v-model="form.checked"></el-checkbox>我已阅读并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <!--登录-->
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
        <!--注册-->
        <el-form-item>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/img/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    //自定义校验规则的函数
    //手机号
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        //判断手机号的格式
        //正则
        const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        //判断是否符合
        //test(验证的字符串) 返回的是 true 或者false
        if (reg.test(value) == true) {
          callback();
        } else {
          //不满足 手机号的格式
          callback(new Error("输入正确格式"));
        }
      }
    };

    return {
      //表单的数据
      form: {
        name: "",
        password: "",
        type: "",
        //是否勾选
        checked: false
      },
      //定义校验规则
      rules: {
        //message 提示信息
        //trigger: 触发方式
        //blur 失去焦点
        //min : 最小
        //max : 最大
        //required : 是否不能为空
        //change(改变)

        //手机号
        name: [{ required: true, trigger: "blur", validator: checkName }],

        //密码
        password: [
          { required: true, message: "密码不能为空", trigger: "change" },
          { min: 6, max: 18, message: "长度在6到18位数密码", trigger: "change" }
        ],

        //验证码
        type: [
          { required: true, message: "验证码不能为空", trigger: "change" },
          { min: 4, max: 4, message: "验证码长度为四", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    //表单验证方法

    //登录方法
    submitForm() {
      //是否勾选
      if (this.form.checked == false) {
        //没有勾选
        this.$message.warning("没有勾选");
      } else {
        this.$refs.form.validate(valid => {
          if (valid) {
            //验证成功
            this.$message.success("登录成功");
          } else {
            //验证失败
            this.$message.error("登录失败");
            return false;
          }
        });
      }
    }
  }
};
</script>

<style lang="less">
.login {
  //开启弹性布局
  display: flex;
  //上下居中
  align-items: center;
  //左右均分
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  height: 100%;

  //登录表单
  .from {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    box-sizing: border-box;
    padding: 44px;

    //标题
    .title {
      display: flex;
      align-items: center;

      img {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .span-01 {
        font-size: 24px;
        font-weight: 400;
        margin-right: 16px;
        font-family: SourceHanSansCN;
        color: rgba(12, 12, 12, 1);
      }
      i {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 16px;
      }
      .span-02 {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-right: 16px;
      }
    }

    //饿了么表单盒子
    .login-form {
      margin-top: 26px;

      .el-button {
        width: 100%;
      }
    }
  }
}
</style>