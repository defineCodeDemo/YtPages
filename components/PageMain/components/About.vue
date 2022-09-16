<template>
  <div>
    <section class="yt_about" id="yt_about">
      <div class="container">
        <div class="section-title">
          <h2>小队简介</h2>
          <p>Team Profile</p>
          <p class="jianjie">
              鹰小队是一个没有具体形式和具体要求的小队，没有严格具体的加入条件。小队宗旨在于更好，但不强求于具体需要做什么事。小队中会提供一些服务，共享一些资源。你可以做分享者，也可以做被分享者。<br/>只要你不抱有开玩笑的心态，鹰小队欢迎你的加入!
          </p>
        </div>
        
        <div class="aboutMain">
          <el-row :gutter="40" >
            <el-col :lg="8" :xs="24">
              <div class="feature">
                <i class="el-icon-map-location"></i>
                <h3>精神组织</h3>
                <p>
                  小队并不是可有可无<br />
                  成员视小队为精神组织<br />
                  虽是组织但又不是组织
                </p>
              </div>
            </el-col>
            <el-col :lg="8" :xs="24">
              <div class="feature">
                <i class="el-icon-thumb doubleX"></i>
                <h3>唯一宗旨</h3>
                <p>
                  小队对成员没有要求<br />
                  小队的唯一宗旨是更好<br />
                  且"更好"是从整体来看的
                </p>
              </div>
            </el-col>
            <el-col :lg="8" :xs="24">
              <div class="feature">
                <i class="el-icon-lollipop"></i>
                <h3>轻松自在</h3>
                <p>
                  是一个没有压力的组织<br />
                  你可以随时加入和退出<br />
                  躺平和摆烂是小队的日常
                </p>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="40" >
            <el-col :lg="8" :xs="24">
              <div class="feature">
                <i class="el-icon-orange doubleX"></i>
                <h3>尊重队员</h3>
                <p>
                  小队重视每个成员的存在<br />
                  尊重每个队员的个性<br />
                  所有成员都是平等的地位
                </p>
              </div>
            </el-col>
            <el-col :lg="8" :xs="24">
              <div class="feature">
                <i class="el-icon-apple"></i>
                <h3>为所欲为</h3>
                <p>
                  在小队中可以为所欲为<br />
                  你可以干些什么也可以<br />
                  什么也不干
                </p>
              </div>
            </el-col>
            <el-col :lg="8" :xs="24">
              <div class="feature">
                <i class="el-icon-cherry doubleX"></i>
                <h3>健康第一</h3>
                <p>
                  所谓身体是革命的本钱<br />
                  小队唯一的要求就是健康<br />
                  小队把队员健康放第一位
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
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
.section-title p {
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 180px;
}
.aboutMain {
  margin-top: 40px;
  font-family: "webfont", PingFangSC-Regular, sans-serif;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-content: center;
  margin: 0 auto;
}
.aboutMain .feature {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
}
.aboutMain .feature i {
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 22px;
  padding: 15px;
  border: 1px solid;
  margin-left: 4vw;
  margin-top: 2vh;
}
.aboutMain .feature i {
  background-color: rgba(62, 196, 131, 0.15);
  color: #3ec483;
}
.aboutMain .feature .doubleX {
  background-color: rgba(0, 173, 181, 0.15);
  color: #00adb5;
}
.aboutMain .feature h3 {
  font-size: 22px;
  margin: 5px 0 10px 0;
  color: #333;
  font-weight: 400;
  margin-left: 8vw;
  @media (max-width: 768px){
   margin-left: 22vw;
  }
}
.aboutMain .feature p {
  margin-left: 8vw;
  @media (max-width: 768px){
   margin-left: 22vw;
  }
  font-size: 15px;
  line-height: 30px;
  // margin-bottom: 15px;
  color: #888;
}
.section-title{
  padding:0 120px;
  .jianjie{
    margin:40px 0;
  }
  @media (max-width: 768px){
    padding: 0;
  }
}
</style>
