"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/login", controller.home.login); //登录接口
  router.post("/registy", controller.home.registy); //注册接口
  router.get("/list", controller.home.list); //列表接口
  router.post("/add", controller.home.add); //添加用户信息接口
  router.post("/shan", controller.home.shan); //删除用户信息接口
  router.post("/gai", controller.home.gai); //更改用户信息接口



};
