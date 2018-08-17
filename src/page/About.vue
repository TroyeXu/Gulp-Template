<template lang="pug">
  h3 {{msg}}

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "pug"
    };
  }
};
</script>

<style scoped lang='scss'>
$padding: 6px;
nav {
  ul{
    margin: 0;
    padding: $padding;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: $padding 12px;
    text-decoration: none;
  }
}
</style>
