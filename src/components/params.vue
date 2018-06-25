<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>params</h2>
    <h3>newsId:{{$route.params.newsId}}</h3>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "params pages 現在在參數這一頁喔"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
