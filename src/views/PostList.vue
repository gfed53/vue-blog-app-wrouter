<template>
  <div class="post-list">
      <h1>All Posts</h1>
      <!-- Will loop thru Post components here -->
  </div>
</template>

<script>
import axios from "axios";
const baseUrl = "http://localhost:8004/api/";

export default {
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
                    console.log(this.posts);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
