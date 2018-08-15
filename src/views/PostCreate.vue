<template>
    <div class="post-create">
        <h2>Create a new post</h2>
        <form action="" v-on:submit.prevent="submit">
            <div class="form-section">
                <label for="title">Title: </label>
                <input type="text" name="title" v-model="post.title">
            </div>
            <div class="form-section">
                <label for="content">Content: </label>
                <textarea rows="5" name="content" v-model="post.content" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-create",
    components: {},
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
                console.log("response.data", response.data);
            });
        }
    }
};
</script>


<style lang="scss">
.form-section {
    label {
        display: block;
    }
}
</style>
