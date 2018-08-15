<template>
    <div class="post-create">
        <h2>Edit this post</h2>
        <PostForm v-bind:onSubmit="submit" v-bind:post="post"/>
    </div>
</template>

<script>
import axios from "axios";
import PostForm from "../components/PostForm.vue";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-edit",
    components: {
        PostForm
    },
    data: function() {
        return {
            post: {}
        };
    },
    mounted() {
        this.getPost();
    },
    methods: {
        // This is duplicated, found in PostDetail component. Wonder if there's a way we can reuse functions like this in different views? (probably)
        getPost() {
            const id = this.$route.params.id;
            axios
                .get(baseUrl + id)
                .then(response => {
                    this.post = response.data;
                    console.log("this.post in postEdit section", this.post);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        submit() {
            console.log("edit, post:", this.post);
            axios
                .put(baseUrl + this.post.id + "/", this.post)
                .then(response => {
                    console.log("post edit, response.data", response.data);

                    // Navigate to main list view
                    // console.log("this.$router", this.$router);
                    this.$router.push({
                        name: "post-detail",
                        params: { id: response.data.id }
                    });
                });
        }
    }
};
</script>
