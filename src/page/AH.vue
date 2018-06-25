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
<style scoped>
  h1,
  ddd,
  dsaa,
  d,
  adas,
  ds,
  a,
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
