<template>
    <div class="post-detail">
        <h2 class="post-header">{{ post.title }}</h2>
        <p>{{ post.content }}</p>

        <h3>Comments:</h3>
        <ul>
            <li v-for="comment in comments" v-bind:key="comment.id">
                {{comment.content}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-detail",
    components: {},
    data: function() {
        return {
            post: {},
            comments: []
        };
    },
    mounted() {
        this.getPost();
        this.getPostComments();
    },
    methods: {
        getPost() {
            const id = this.$route.params.id;
            axios
                .get(baseUrl + id)
                .then(response => {
                    this.post = response.data;
                    console.log("this.post", this.post);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getPostComments() {
            const id = this.$route.params.id;
            axios
                .get(baseUrl + id + `/comments/`)
                .then(response => {
                    this.comments = response.data;
                    console.log("this.comments", this.comments);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>


<style lang="scss">
</style>
