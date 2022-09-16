<template>
  <div class="floor-container">
    <p class="message">
      Copyright © 2022 <a href="mailto:1912546219@qq.com">yuadh</a>
      All rights reserved.
    </p>
    <p class="designBy">Designed by <a href="#">YUADH</a>.</p>
  </div>
</template>

<script>
export default {
  name: "Floor",
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.floor-container {
  background: #41444b;
  color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8vw;
  @media (max-width: 768px){
    font-size: 14px;
    justify-content: center;
  }
  .designBy{
    @media (max-width: 768px){
      display: none;
  }
  }
}
</style>
