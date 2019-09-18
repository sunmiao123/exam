"use strict";

const Controller = require("egg").Controller;
const md5 = require("md5");
var jwt = require('jsonwebtoken');


class HomeController extends Controller {
  async login() {
    //登录
    const { ctx } = this;
    const { username, pwd } = ctx.request.body;
    let tim = md5(new Date());
    JSON.stringify({
      tim
    });
    console.log(tim)
    var tokens = jwt.sign({ foo: 'bar' }, 'shhhhh');
    console.log(tokens,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    const result = await ctx.service.user.login(username, pwd);

    const token = await ctx.service.user.tokenFn(tokens, result[0].id);
    console.log(token);
    if (ctx.affectedRows < 1) return;

    if (result.length) {
      ctx.body = {
        code: 1,
        // token,
        id: result[0].id
      };
    } else {
      ctx.body = {
        code: 0
      };
    }
  }
  async registy() {
    //注册
    const { ctx } = this;
    const { username, pwd } = ctx.request.body;
    
    const result = await ctx.service.user.registyFn(username, pwd);
    ctx.body = {
      code: 1
    };
  }
  async list() {
    //初始页面渲染
    const { ctx } = this;
    // console.log
    const { token, id } = ctx.request.body;
    // console.log(token, id);
    const result = await ctx.service.user.listFn();
    ctx.body = {
      code: 1,
      result
    };
  }
  async add() {
    //添加
    const { ctx } = this;
    const { name, birthday, age, city } = ctx.request.body;
    const result = await ctx.service.user.addFn(name, birthday, age, city);
    ctx.body = {
      code: 1
    };
  }
  async shan() {
    //删除
    const { ctx } = this;
    const { name, birthday, age, city, id } = ctx.request.body;
    // console.log(name, birthday, age, city, id);
    const result = await ctx.service.user.shanFn(name, id);
    // console.log(result);
    ctx.body = {
      code: 1
    };
  }
  async gai() {
    //更改
    const { ctx } = this;
    const { name, birthday, age, city, id } = ctx.request.body;
    console.log(name,id, birthday, age, city);
    const result = await ctx.service.user.gaiFn(name,id, birthday, age, city);
    console.log(result);
    ctx.body = {
      code: 1,
      result
    };
  }
}

module.exports = HomeController;
