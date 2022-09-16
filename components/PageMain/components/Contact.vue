<template>
  <div>
    <section class="ytContact" id="ytContact">
      <div class="section-title">
        <h2>加入必看</h2>
        <p>Join Precautions</p>
      </div>
      <div class="container">
        <el-row :gutter="40">
          <el-col :lg="8" :xs="24">
            <div class="guite">
              <i class="iconfont icon-Other"></i>
              <h3>不抱有玩笑心态</h3>
              <p>
                这点是非常重要的，也许你会觉得这个小队是个玩笑。但是实际上这个小队创建初衷和小队成员都努力让小队变的"更好",所以不允许抱着玩笑的心态加入到小队中。
              </p>
            </div>
          </el-col>
          <el-col :lg="8" :xs="24">
            <div class="guite">
              <i class="iconfont icon-Other"></i>
              <h3>需要有成员意识</h3>
              <p>
                加入小队之后需要有成员意识。虽有小队是个轻松自在的小队但是在加入之后还是需要有一定的成员意识，至少需要知道自己在鹰小队中，明白自己是其中的一员!
              </p>
            </div>
          </el-col>
          <el-col :lg="8" :xs="24">
            <div class="guite">
              <i class="iconfont icon-Other"></i>
              <h3>小队专业性不高</h3>
              <p>
                小队不是专业的组织，你可以在对内享受一定的服务或做出一些贡献。但是远差于其它专业性组织，你可以随意的加入或退出。但是再次加入时，需要成员的审核.
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="section-title sec-part">
        <h2>留言反馈</h2>
        <p>Contact With Us</p>
      </div>
      <div class="msg-box container">
        <el-form label-position="right" label-width="80px" size="medium">
          <el-form-item label="留言方式:">
            <el-input size="large" placeholder="请输入QQ或邮箱"></el-input>
          </el-form-item>
          <el-form-item label="内容:">
            <el-input
              size="large"
              :rows="4"
              type="textarea"
              placeholder="写下对我的意见或建议"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="contact-btn" size="large" type="primary"
              >提交您的反馈
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
.ytContact {
  // height: 100vh;
  background-color: #f2f5f4;
}
.guite {
  font-family: "webfont";
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  text-align: center;
  border: 1px solid #eee;
  padding: 30px 20px;
  @media (max-width: 768px){
    margin:20px auto;
  }
  i {
    color: #3ec483;
    font-size: 36px;
    line-height: 36px;
    display: inline-block;
  }
  h3 {
    font-weight: 400;
    font-family: "webfont";
    color: #333;
    font-size: 24px;
    margin: 20px 0;
  }
  p {
    text-align: left;
    line-height: 35px;
    font-size: 15px;
  }
}
.sec-part {
  margin-top: 40px;
}
.contact-btn {
  background: #1bbca3;
  border-color: #1bbca3;
}
.contact-btn:hover {
  opacity: 0.5;
}
</style>
