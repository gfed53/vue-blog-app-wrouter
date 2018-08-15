<template>
    <div class="post-create">
        <h2>Create a new post</h2>
        <PostForm v-bind:onSubmit="submit" v-bind:post="post"/>
        <!-- <form action="" v-on:submit.prevent="submit">
            <div class="form-section">
                <label for="title">Title: </label>
                <input type="text" name="title" v-model="post.title">
            </div>
            <div class="form-section">
                <label for="content">Content: </label>
                <textarea rows="5" name="content" v-model="post.content" />
            </div>
            <button type="submit">Submit</button>
        </form> -->
    </div>
</template>

<script>
import axios from "axios";
import PostForm from "../components/PostForm.vue";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-create",
    components: {
        PostForm
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
                // console.log("this.$router", this.$router);
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


<style lang="scss">
.form-section {
    label {
        display: block;
    }
}
</style>
