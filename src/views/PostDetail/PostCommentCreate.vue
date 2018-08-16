<template>
    <div class="comment-create">
        <h2>Add a comment</h2>
        <ContentForm v-bind:onSubmit="submit" v-bind:data="comment"/>
    </div>
</template>

<script>
import axios from "axios";
import ContentForm from "@/components/ContentForm.vue";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-comment-create",
    components: {
        ContentForm
    },
    data: function() {
        return {
            comment: {}
        };
    },
    mounted() {
        console.log("this.$route.params.id", this.$route.params.id);
    },
    methods: {
        submit() {
            const id = this.$route.params.id;

            console.log("submitting, comment:", { ...this.comment, post: id });
            axios
                .post(baseUrl + id + "/comments/", {
                    ...this.comment,
                    post: id
                })
                .then(response => {
                    console.log("new comment response.data", response.data);
                    // Navigate to comment display route
                    this.$router.push({ name: "post-display", params: { id } });
                });
        }
    }
    // Just for testing
    // watch: {
    //     comment: function() {
    //         // console.log("comment change", this.comment);
    //     }
    // }
};
</script>
