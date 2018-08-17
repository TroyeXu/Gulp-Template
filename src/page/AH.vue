<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>harry</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "TRYU"
      };
    },
    mounted() {
      var result = _.toUpper('foobar');
      let re = _.toUpper('adasdad');
      var users = [{
        'user': 'barney'
      }, {
        'user': 'fred'
      }]; // The `_.property` iteratee shorthand. _.map(users, 'user');
      // let a  =_.trim(' aaa', chars);
      let b = '   aaa'.trim();
      console.log(b);
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang="scss" rel="stylesheet/scss">
  #indexContent {
    .tab{
        display: flex;
        width:100%;
        height: 40px;
        line-height: 40px;
        .tab-item {
            flex: 1;
            text-align: center;
            a{
                display:block;
            }
        }
    }
}
</style>
