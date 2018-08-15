<template>
  <div class="post-list">
      <h1>All Posts</h1>
      <!-- Will loop thru Post components here -->
      <ul>
          <li v-for="post in posts" v-bind:key="post.id">
              <!-- <Post v-bind:postData="post" /> -->
              <router-link :to="{ name: 'post-detail', params: { id: post.id }}">
                  {{post.title}}
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post.vue";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "home",
    components: {
        Post
    },
    data: function() {
        return {
            posts: []
        };
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios
                .get(baseUrl)
                .then(response => {
                    this.posts = response.data;
                    // console.log(this.posts);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>


<style lang="scss">
// Removed scoped attr because it doesn't seem to work in views the same way as with components..

// h3 {
//     margin: 40px 0 0;
// }
ul {
    list-style-type: none;
    // padding: 0;
}
// li {
//     display: inline-block;
//     margin: 0 10px;
// }
a {
    color: #42b983;
}
</style>
