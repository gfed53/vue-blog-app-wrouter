<template>
  <div class="post">
      <h2 class="post-header">{{ postData.title }}</h2>
      <p>{{ postData.content }}</p>
  </div>
</template>

<script>
export default {
    name: "Post",
    props: {
        postData: null
    },
    mounted() {
        console.log("this.postData", this.postData);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//     margin: 40px 0 0;
// }
// ul {
//     list-style-type: none;
//     padding: 0;
// }
// li {
//     display: inline-block;
//     margin: 0 10px;
// }
a {
    color: #42b983;
}
</style>
