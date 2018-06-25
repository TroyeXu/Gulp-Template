<template>
  <div class="hello">
    <h1>basic-vue</h1>
    <!-- <h3 v-if="isLogin">show alert login </h3> -->
    <h4 v-show="isLogin"></h4>
    <div v-show="isLogin">你好：JSPang</div>
    <p v-for="item in items">{{item}}</p>
    <h3>v-for-objec</h3>
    <p v-for="(student,index) in colleagues">{{index}}:{{student.name}}-{{student.age}}</p>
    <!-- <p v-else>please hold on login sorry </p> -->
    <span v-text="msg"></span>
    <!-- 和下面的一样 -->
    <h4 v-html="msghtml"></h4>
    <button v-on:click="SendIncrease">++</button>
    <button v-on:click="SendDecrease">--</button>
    <p>{{count}}</p>
    <h3>這是一個v-model節奏</h3>
    <input type="text" v-on:keyup.enter="onEnter" v-model="secondCount">
    <h3>单选按钮绑定</h3>
    <input type="radio" id="one" value="男qq" v-model="sex">
    <label for="one">男</label>
    <input type="radio" id="two" value="女xx" v-model="sex">
    <label for="one">女</label>
    <p>{{sex}}</p>
    <img :src="imgSrc" alt="">
    <h2 v-pre>{{sex}}</h2>
    <h2 v-cloak>{{sex}}</h2>
    <div v-once>第一次绑定的值：{{sex}</div>
    <div>
      <input type="text" v-model="sex">
    </div>

  </div>
  <!-- <input type="checkbox" id="isTrue" v-model="isTrue">
  <label for='isTrue'>{{isTrue}}</label> -->

</template>

<script>
  export default {
    name: "cat",
    data() {
      return {
        imgSrc: "https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c32ca9cfff28c9eeee2225997f3f212f&auto=format&fit=crop&w=1350&q=80",

        sex: 'qqq',
        count: 0,
        secondCount: 0,
        msg: "這是v-text產生的喔",
        msghtml: "<h1>provid html</h1>",
        isLogin: true,
        items: [100, 100, 33, 44, 5, 66, 7, 11, 222],
        colleagues: [{
            name: "alice",
            age: 18
          },
          {
            name: "sam",
            age: 19
          },
          {
            name: "harry",
            age: 22
          },
          {
            name: "troye",
            age: 138
          },
        ]
      };
    },
    methods: {
      SendIncrease: function () {
        this.count++
      },
      SendDecrease: function () {
        this.count--
      },
      onEnter: function () {
        this.count = this.count + parseInt(this.secondCount);
      }

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,
  html {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .c-active {
    color: red;
    text-align: center;
    border: 2px solid green;
  }

  [v-cloak] {
    display: bloc;
    color: red
  }

</style>
