<template>
  <div class="main-container">
    <section class="show-head">
      <div class="carousel-background">
        <img src="~/assets/images/tylogo.jpg" alt="background" />
      </div>
      <el-carousel
        class="show-carousel"
        :interval="8000"
        arrow="always"
        height="100vh"
      >
        <!-- index1:快速开始 -->
        <el-carousel-item>
          <div class="carosel-container">
            <div class="carosel-content">
              <h2><span>鹰小队</span></h2>
              <p>我们所过的每个平凡的日常，<br />也许就是连续发生的奇迹。</p>
              <a href="#" class="main-btn">快速开始</a>
            </div>
          </div>
        </el-carousel-item>
        <!-- index2:小队服务 -->
        <el-carousel-item>
          <div class="carosel-container">
            <div class="carosel-content">
              <h2><span>小队服务</span></h2>
              <p>点击下方按钮了解小队<br />所提供的服务</p>
              <a href="#" class="main-btn">快速开始</a>
            </div>
          </div>
        </el-carousel-item>

        <!-- index3:在线项目 -->
        <el-carousel-item>
          <div class="carosel-container">
            <div class="carosel-content">
              <h2><span>加入我们</span></h2>
              <p>点击下方按钮<br />立即申请加入</p>
              <a href="#" class="main-btn" @click="tempApply">提交申请</a>
            </div>
          </div>
        </el-carousel-item>
        <!-- index4:现有成员 -->
        <el-carousel-item>
          <div class="carosel-container">
            <div class="carosel-content">
              <h2><span>成员查询</span></h2>
              <p>点击下方按钮查询是否已成为<br />小队成员</p>
              <a href="#" class="main-btn">快速开始</a>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>
    <header id="header" :class="{'fixHeader': isShow}" ref="headerSticky" >
      <div class="header-container page-banner">
        <div class="logo">
          <h1 class="text-light">
            <a href="#"><span>yuadh</span></a>
          </h1>
        </div>
        <nav class="nav-menu">
          <ul>
            <li class="active"><a href="#">首页</a></li>
            <li><a href="#yt_about">关于</a></li>
            <li><a href="#yt_servers">服务</a></li>
            <li><a href="#members">成员</a></li>
            <li><a href="#ytContact">联系</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <PageMain />
    <Floor />
  </div>
</template>

<script>
import PageMain from "~/components/PageMain/index";
import Floor from "~/components/Floor/Floor";
export default {
  name: "IndexPage",
  components: {
    PageMain,
    Floor,
  },
  mounted(){
    const timer =  window.addEventListener('scroll',()=>{
        this.winScoY = window.pageYOffset
        this.headerTop = document.documentElement.clientHeight
        this.isShow = (this.winScoY-this.headerTop)>0
    })
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  data(){
    return{
      winScoY:0,
      headerTop:0,
      isShow:false
    }
  },
  methods: {
    tempApply(){
       this.$alert('网站待完善，申请加入请联系QQ：2649755461', '申请加入', {
          confirmButtonText: '确定',
          callback: action => {
            
          }
       })
    }
  },
  watch:{
  }
};
</script>

<style lang="scss">
/* 左右按钮 */
.el-carousel__arrow {
  @media(max-width: 768px){
    display:none;
  }
  height: 58px;
  width: 58px;
  font-size: 40px;
  background-color: transparent;
}
.el-carousel__arrow:hover {
  background-color: transparent;
}
.el-carousel__arrow > i:hover {
  color: #1bbca3;
}
/* 指示灯 */
.el-carousel__button {
  height: 6px;
  border-radius: 4px;
}
.is-active > .el-carousel__button {
  background-color: #1bbca3;
}
</style>

<style scoped lang="scss">
.show-head {
  font-family: "Open Sans", sans-serif;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(21, 27, 26, 0.7);
  overflow: hidden;
  padding: 0;
}
.carousel-background {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  z-index: -1;
}
// 卡片内容
.carosel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
}
.carosel-content {
  text-align: center;
  user-select: none;
}
.carosel-content h2 {
  font-weight: 700;
  margin-bottom: 0.6em;
  color: #fff;
  text-transform: uppercase;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 90px;
  @media (max-width: 768px){
    font-size: 45px;
  }
  font-family: "webfont" !important;
}
.carosel-content p {
  width: 100%;
  margin: 0 auto 30px auto;
  color: #fff;
  font-family: "webfont" !important;
}
.main-btn {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  line-height: 1;
  margin: 10px;
  color: #fff;
  border: 2px solid #1bbca3;
}
.main-btn:hover {
  background-color: #1bbca3;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
}
.fixHeader{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
// 头部菜单
#header {
  
  height: 60px;
  z-index: 999;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  display: flex;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
// logo
#header .logo h1 {
  @media (max-width: 768px){
    display: none;
  }
  font-size: 28px;
  margin: 0;
  padding: 10px 0;
  line-height: 1;
  font-weight: 400;
}
#header .logo h1 a {
  color: #425451;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
//menu
.nav-menu {
  @media (max-width: 768px){
    margin:0 auto;
  }
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-menu ul li {
  position: relative;
  white-space: nowrap;
  float: left;
}
.nav-menu a {
  display: block;
  position: relative;
  color: #425451;
  padding: 14px 15px;
  font-size: 13px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
.nav-menu a:hover {
  color: #1bbca3;
  text-decoration: none;
}
</style>
