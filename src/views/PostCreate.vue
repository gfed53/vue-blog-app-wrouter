<template>
    <div class="post-create">
        <h2>Create a new post</h2>
        <ContentForm v-bind:onSubmit="submit" v-bind:data="post"/>
    </div>
</template>

<script>
import axios from "axios";
import ContentForm from "../components/ContentForm.vue";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-create",
    components: {
        ContentForm
    },
    data: function() {
        return {
            post: {}
        };
    },
    mounted() {},
    methods: {
        submit() {
            console.log("submitting, post:", this.post);
            axios.post(baseUrl, this.post).then(response => {
                // console.log("response.data", response.data);

                // Navigate to main list view
                this.$router.push({ name: "post-list" });
            });
        }
    }
    // Just for testing
    // watch: {
    //     post: function() {
    //         // console.log("post change", this.post);
    //     }
    // }
};
</script>
