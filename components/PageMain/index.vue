<template>
  <div>
    <AboutSection />
    <AboutServies />
    <AboutMembers />
    <Contact />
  </div>
</template>

<script>
import AboutSection from "./components/About.vue";
import AboutServies from "./components/AboutSer.vue";
import AboutMembers from "./components/AboutMembers.vue";
import Contact from "./components/Contact.vue";
export default {
  name: "index",
  components: {
    AboutSection,
    AboutServies,
    AboutMembers,
    Contact,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style lang="scss">
section {
  padding: 60px 0;
  @media (max-width: 768px){
    padding: 30px;
    
  }
}
.section-bg {
  background-color: #f2f5f4;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 4px;
  padding-bottom: 0;
  color: #4b605c;
}
.section-title p {
  margin-bottom: 0;
  font-size: 17px;
  color: #888;
  line-height: 40px;
  font-family: "Roboto", sans-serif;
}

.container {
  box-sizing: border-box;
  padding: 0 8vw;
  width: 84vw;
  margin: 0 auto;
  @media (max-width: 768px){
    padding: 0 4vw;
  }
}
</style>
<style scoped></style>
