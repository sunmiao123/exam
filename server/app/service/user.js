const { Service } = require("egg");

class UserService extends Service {
  async login(username, pwd) { //登录
    const $sql = "select * from login where username=? and pwd=?";
    const result = await this.app.mysql.query($sql, [username, pwd]);
    return result;
  }
  async tokenFn(token,id) { //token
    const $sql = "UPDATE login SET token=? WHERE id=?";
    const result = await this.app.mysql.query($sql, [token,id]);
    return result;
  }

  async registyFn(username, pwd) { //注册
    const $sql = "insert into login (username,pwd) values (?,?)";
    const result = await this.app.mysql.query($sql, [username, pwd]);
    return result;
  }
  async listFn() { //列表
    const $sql = "select * from yk";
    const result = await this.app.mysql.query($sql);
    return result;
  }
  async addFn(name,birthday,age,city) { //增加用户信息
    const $sql = "insert into yk (name,birthday,age,city) values (?,?,?,?)";
    const result = await this.app.mysql.query($sql,[name,birthday,age,city]);
    // const Zlist = "select * from yk"
    return result;
  }
  async shanFn(name,id) { //删除用户信息
    const $sql = "delete from yk where id=? and name=?";
    const result = await this.app.mysql.query($sql,[id,name]);
    return result;
  }
  async gaiFn(name,age, birthday, city) { //更改用户信息
    const $sql = "UPDATE yk SET name=? WHERE age=? ";
    const result = await this.app.mysql.query($sql,[name,age]);
    return result;
  }
}

module.exports = UserService;
