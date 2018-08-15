<template>
    <div class="post-detail">
        <h2 class="post-header">{{ post.title }}</h2>
        <p>{{ post.content }}</p>
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
                    console.log(this.post);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getPostComments() {}
    }
};
</script>


<style lang="scss">
</style>
