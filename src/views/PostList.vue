<template>
  <div class="post-list">
      <h1>All Posts</h1>
      <!-- Will loop thru Post components here -->
      <ul>
          <li v-for="post in posts" v-bind:key="post.id">
              <router-link :to="{ name: 'post-display', params: { id: post.id }}">
                  {{post.title}}
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post.vue";

const baseUrl = "http://localhost:8004";

export default {
    name: "post-list",
    components: {
        Post
    },
    data: function() {
        return {
            posts: []
        };
    },
    mounted() {
        // this.getPosts();
        this.authorize().then(token => {
            this.getPosts(token).then(posts => (this.posts = posts));
        });
    },
    methods: {
        getPosts(token) {
            axios
                .get(`${baseUrl}/api/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                .then(response => {
                    this.posts = response.data;
                    // console.log(this.posts);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        authorize() {
            // Hard-coded user creds for now..
            let userData = {
                username: "greg",
                email: "gfederico7153@gmail.com",
                password: "test123456"
            };
            return axios
                .post(`${baseUrl}/rest-auth/login/`, userData)
                .then(res => res.data.key);
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
    padding: 0;
}
// li {
//     display: inline-block;
//     margin: 0 10px;
// }
a {
    color: #42b983;
}
</style>
