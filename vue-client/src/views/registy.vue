<template>
  <div>
    注册页面
    <input type="text" v-model="username">
    <input type="text" v-model="pwd">
    <button @click="butFn">注册</button>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  computed: {},
  methods: {
    butFn() {
      let { username, pwd } = this;
      console.log( 222)
      this.$axios.post('/api/registy',{username, pwd}).then((res)=>{
          console.log(res)
      })
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>