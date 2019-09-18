<template>
  <div>
    列表页面
    <ul v-for="(item,index) in data" :key="index">
      <li class="li">
        <!-- <input type="text" v-model="item.id"> -->
        id:
        <!-- <span>{{item.id}}</span> -->
        <input type="text" v-model="item.id">
        名字:
        <!-- <span>{{item.name}}</span> -->
        <input type="text" v-model="item.name">
        生日：
        <!-- <span>{{item.birthday}}</span>月 -->
        <input type="text" v-model="item.birthday">
        年龄：
        <!-- <span>{{item.age}}</span> -->
        <input type="text" v-model="item.age">
        家乡：
        <!-- <span>{{item.city}}</span> -->
        <input type="text" v-model="item.city">
        <span @click="shanFn(item)">X</span>
        <button @click="baoFn(item)">保存更改</button>
      </li>
    </ul>
    <div>
      添加用户信息
      名字：
      <input type="text" v-model="name">
      生日：
      <input type="text" v-model="birthday">
      年龄：
      <input type="text" v-model="age">
      家乡：
      <input type="text" v-model="city">
      <button @click="addFn">添加</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      data: "",
      name: "",
      birthday: "",
      age: "",
      city: "",
      obj: {
        id: "",
        name: "",
        birthday: "",
        age: "",
        city: ""
      }
    };
  },
  computed: {},
  methods: {
    addFn() {
      let { name, birthday, age, city } = this;
      //   console.log(name, birthday, age, city);
      this.$axios.post("/api/add", { name, birthday, age, city }).then(res => {
        // console.log(res);
      });
    },
    shanFn(item) {
      const { name, birthday, age, city, id } = item;
      this.$axios
        .post("/api/shan", { name, birthday, age, city, id })
        .then(res => {
          // console.log(res)
        });
    },
    baoFn(item) {
      const { name, birthday, age, city, id } = item;
    //   console.log(name, birthday, age, city, id);
        this.$axios
          .post("/api/gai", { name,id, birthday, age, city })
          .then(res => {
            console.log(res)
          });
    }
  },
  created() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    // console.log(token, id);
    this.$axios
      .get("/api/list", { headers: { token: token, id: id } })
      .then(res => {
        console.log(res);
        this.data = res.data.result;
      });
  },
  mounted() {}
};
</script>
<style scoped lang="">
* {
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
}
.li {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: pink;
  margin-top: 10px;
}
input {
  width: 50px;
}
.li span {
  display: inline-block;
  width: 80px;
}
</style>