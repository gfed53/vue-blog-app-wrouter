<!-- Not in use for now. PostDetail view handles all of this -->
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
a {
    color: #42b983;
}
</style>
