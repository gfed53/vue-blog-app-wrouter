<template>
    <div class="post-create">
        <router-link :to="{ name: 'post-display', params: { id: $route.params.id }}">Go Back</router-link>
        <ContentForm v-bind:onSubmit="submit" v-bind:data="post"/>
    </div>
</template>

<script>
import axios from "axios";
import ContentForm from "@/components/ContentForm.vue";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-edit",
    components: {
        ContentForm
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
        // This is duplicated, found in PostEdit component. Wonder if there's a way we can reuse functions like this in different views? (probably)
        getPost() {
            const id = this.$route.params.id;
            axios
                .get(baseUrl + id)
                .then(response => {
                    this.post = response.data;
                    // console.log("this.post in postEdit section", this.post);
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
                    // console.log("post edit, response.data", response.data);

                    this.$router.push({
                        name: "post-display",
                        params: { id: response.data.id }
                    });
                });
        }
    }
};
</script>
