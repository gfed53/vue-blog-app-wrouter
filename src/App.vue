<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All Posts</router-link> |
      <router-link :to="{ name: 'post-create' }">Create New</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/globals/settings.scss";

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: $vue-green;
        }
    }
}
</style>
