<template>
  <div>
    <section class="yt_servers" id="yt_servers">
      <div class="yt_servers_img"></div>
      <div class="container">
        <div class="section-title">
          <h2>小队服务</h2>
          <p>Team service</p>
        </div>
        <el-row :gutter="40" class="show-boxs">
          <el-col :lg="6" :xs="24" class="first-box">
            <div class="ser-box">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fuwu"></use>
              </svg>
              <h4 class="title"><a href="#">毕设参考</a></h4>
              <p class="description">毕设进度详情共享，<br />图文步骤教程.</p>
            </div>
          </el-col>
          <el-col :lg="6" :xs="24">
            <div class="ser-box">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiuxian"></use>
              </svg>
              <h4 class="title"><a href="#">资源共享</a></h4>
              <p class="description">共享小队内所有资源<br />包括各种资料等.</p>
            </div>
          </el-col>
          <el-col :lg="6" :xs="24">
            <div class="ser-box">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hotpepper"></use>
              </svg>
              <h4 class="title"><a href="#">教程</a></h4>
              <p class="description">各类有些作用的教程<br />详细内容的完全分享.</p>
            </div>
          </el-col>
          <el-col :lg="6" :xs="24">
            <div class="ser-box">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huabankaobei"></use>
              </svg>
              <h4 class="title"><a href="#">工具箱</a></h4>
              <p class="description">各种小队内的在线服务<br />免费共享使用.</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="text-center">
        <h3>荒岛书店</h3>
        <p>休息一年，然后回来...</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutSer",
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
.yt_servers {
  background-color: #f2f5f4;
  height: 100vh;
  @media (max-width: 768px){
    height: 100%;
    background:no-repeat url('~assets/images/bg.jpg');
    // background-position: center;
    background-size: cover;
  }
  position: relative;
  z-index: 1;
}
// .yt_servers::before {
//   box-sizing: border-box;
//   content: "";
//   position: absolute;
//   height: 100vh;
//   background: no-repeat url("~assets/images/bg.jpg");
//   background-size: cover;
//   z-index: -1;
// }
.ser-box {
  // border: 1px solid;
  background-color: #fff;
  padding: 30px;
  overflow: hidden;
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  border-radius: 8px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px){
    margin-top: 40px;
  }
}
.section-title{
   @media (max-width: 768px){
    margin-top: 0px;
    padding-bottom: 0px;
  }
}
.first-box{
  @media (max-width: 768px){
    margin-top: 0px;
  }
}
.ser-box::before {
  content: "";
  position: absolute;
  background: #aff4e9;
  right: -60px;
  top: -40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  transition: all 0.3s;
  z-index: -1;
}
.ser-box:hover::before {
  background: #aff4e9;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.ser-box .icon {
  margin: 0 auto 20px auto;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1bbca3;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}
.ser-box .icon svg {
  font-size: 36px;
  line-height: 1;
  color: #fff;
}
.ser-box .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}
.ser-box .title a {
  color: #425451;
}
.ser-box .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}
.ser-box:hover .icon {
  background: #fff;
}
.text-center {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(66, 84, 81, 0.5), rgba(43, 56, 54, 0.5)),
    url("~assets/images/bg.jpg") fixed center center;
  background-size: cover;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    display: none;
  }
}
.text-center h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}
.text-center p {
  color: #fff;
  margin-top: 20px;
}
</style>
