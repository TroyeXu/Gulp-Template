import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.store({
  state: {
    // loginFlag: JSON.parse(localStorage.getItem("uesrInfo")) || false,
    // user: userLoginStatusWatch(),
    // cookie: null,
    // DEVICE: "wap", //当前设备 默认wap统称 预期值：wap、android、ios
    // SOURCE: "wap",
    // timer: null, //持续登陆定时器
    // loginStausAble: true, // 当前轮询是否响应
    // shopCart: [],
    // drawerEnable: true,//抽屉菜单是否禁用
  },
  actions: {
    continuousLoginAction(context) {context},
    getUserInfo(context) {
        // //获取最新的用户信息
        // http.post("/v1/user/index?source=wap").then(res => {
        //     if (res.data.code == 200) {
        //         context.commit("setUser", res.data.data);
        //     }
        // });
    },
  },
  mutations: {
    // logout(state, { data, msg }) {
    //     state.user = data;
    //     localStorage.removeItem("uesrInfo");
    //     this.commit("clearCookie","cookie");
    //     clearInterval(state.timer);
    //     vm.$router.push({
    //         path: "/"
    //     });
    //     vm.showMessageAlert(msg);
    // },
    continuousLogin(state) {
        //触发持续登录
        // if (!state.user.uid) return;
        // clearInterval(state.timer);
        // state.timer = setInterval(() => {
        //     this.dispatch("continuousLoginAction");
        // }, 5000);
    },
    //cookie操作
    clearCookie(state, { cookie_name, value, expiredays }) {
        // //清除cookie
        // this.commit("setCookie",{cookie_name: name, value: "", expiredays: -1});
    },
    setCookie(state, { cookie_name, value, expiredays }) {
        // var exdate = new Date();
        // exdate.setDate(exdate.getDate() + expiredays); //设置cookie的过期时间
        // document.cookie = cookie_name + "=" + escape(value) + (expiredays == null ? "" : ";path=/;expires=" +  exdate.toGMTString());
    },
    SET_COOKIE(state, cookie){
        // state.cookie = cookie;
        // localStorage.setItem("cookie", cookie)
    },
    SET_DEVICE(state, value) {
        // state.DEVICE = value
    },
    SET_APPLICATION_KEY(state, value){
        // state.APPLICATION_KEY = value
    },

  },
  getters: {
    GET_COOKIE(state){
      // return state.cookie;
    },
    GET_DEVICE(state) {
      // return state.DEVICE
    },
  }

})
