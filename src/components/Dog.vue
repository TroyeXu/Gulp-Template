<template>
  <div class="hello">
    <h1>全局api</h1>
    <h3>vue-direcitve</h3>
    {count}
    <button v-on:click="count"></button>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      add: function () {
        this.count++
      }

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
