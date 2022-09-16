<template>
  <div>
    <section class="yteam container" id="members">
      <div class="section-title">
        <h2>小队成员</h2>
        <p>Team members</p>
        <!-- <p>前进的你与停步的我</p> -->
      </div>
      <el-row :gutter="40"  >
        <el-col :lg="6" :xs="24">
          <div class="member-box">
            <img
              src="https://q1.qlogo.cn/g?b=qq&nk=1912546219&s=640"
              class="member-avatar"
              alt=""
            />
            <div class="member-info">
              <div class="message">
                <h4>yuadh</h4>
                <span>
                  QQ:1912546219<br />
                  日常日常日常日常日常
                </span>
              </div>
              <div class="contact">
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-QQ"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-weixin"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-youxiang"></i>
                </a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="6" :xs="24">
          <div class="member-box">
            <img
              src="https://q1.qlogo.cn/g?b=qq&nk=1814171487&s=640"
              class="member-avatar"
              alt=""
            />
            <div class="member-info">
              <div class="message">
                <h4>yuadh</h4>
                <span>
                  QQ:1912546219<br />
                  日常日常日常日常日常
                </span>
              </div>
              <div class="contact">
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-QQ"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-weixin"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-youxiang"></i>
                </a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="6" :xs="24">
          <div class="member-box">
            <img
              src="https://q1.qlogo.cn/g?b=qq&nk=858086949&s=640"
              class="member-avatar"
              alt=""
            />
            <div class="member-info">
              <div class="message">
                <h4>yuadh</h4>
                <span>
                  QQ:1912546219<br />
                  日常日常日常日常日常
                </span>
              </div>
              <div class="contact">
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-QQ"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-weixin"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-youxiang"></i>
                </a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="6" :xs="24">
          <div class="member-box">
            <img
              src="https://q1.qlogo.cn/g?b=qq&nk=2649755461&s=640"
              class="member-avatar"
              alt=""
            />
            <div class="member-info">
              <div class="message">
                <h4>yuadh</h4>
                <span>
                  QQ:1912546219<br />
                  日常日常日常日常日常
                </span>
              </div>
              <div class="contact">
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-QQ"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-weixin"></i>
                </a>
                <a
                  href="https://wpa.qq.com/msgrd?v=3&uin=1912546219&site=qq&menu=yes"
                >
                  <i class="iconfont icon-youxiang"></i>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutNumbers",
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style scoped lang="scss">
.yteam {
  height: 100vh;
  background-color: #fff;
  padding: 60px 120px;
  @media (max-width: 768px){
    height: 100%;
    padding: 0;
  }
}
.section-title{
  @media (max-width: 768px){
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 0;
  }
}
.yteam .member-box {
  width: 34vh;
  height: 34vh;
  @media (max-width: 768px){
    margin:20px auto;
  }
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
  background: #343a40;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    background-position: left top;
    background-size: cover;
  }
  .member-info {
    opacity: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s;
  }
  .message {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    transition: bottom 0.4s;
    h4 {
      font-weight: 700;
      margin-bottom: 2px;
      font-size: 18px;
      color: #fff;
    }
    span {
      font-style: italic;
      display: block;
      font-size: 13px;
      color: #fff;
    }
  }
  .contact {
    position: absolute;
    left: 0;
    bottom: -38px;
    right: 0;
    height: 48px;
    transition: bottom ease-in-out 0.4s;
    text-align: center;
    a {
      transition: color 0.3s;
      color: #fff;
      margin: 0 10px;
      display: inline-block;
      i {
        font-size: 24px;
        margin: 0 2px;
        color: #fff;
      }
    }
    a:hover {
      color: #1bbca3;
    }
  }
}

.member-box:hover .member-info {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 212, 255, 0) 100%
  );
  opacity: 1;
  transition: 0.4s;
  .message {
    bottom: 60px;
    transition: bottom 0.4s;
  }
  .contact {
    bottom: 0;
    transition: bottom ease-in-out 0.4s;
  }
}
</style>
