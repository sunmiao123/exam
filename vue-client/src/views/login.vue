<template>
  <div>
    登录页面
    <input type="text" v-model="username">
    <input type="text" v-model="pwd">

    <button @click="butFn">登录</button>
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
      butFn(){
          let {username,pwd} = this
        this.$axios.post('/api/login',{username,pwd}).then(({data})=>{
            console.log(data)
            if(data.code==1){
                alert('登录成功')
                localStorage.setItem('token',data.token)
                localStorage.setItem('id',data.id)
                this.$router.push('/list')
            }else if(code==0){
                alert('用户名或密码不对，请注册新用户')
                this.$router.push('/registy')
            }
        })
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>