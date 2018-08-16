<template>
    <div class="post-detail post-detail--display">
        <router-link :to="{ name: 'post-edit', params: { id: post.id }}">Edit this post</router-link>
        <h2 class="post-header">{{ post.title }}</h2>
        <p> <strong>Created:</strong> {{ dateCreated }}</p>
        <p v-if="dateCreated !== dateUpdated"><strong>Last Updated:</strong> {{ dateUpdated }}</p>
        <p>{{ post.content }}</p>
        <h3>Comments:</h3>
        <ul>
            <li v-for="comment in comments" v-bind:key="comment.id">
                <p>{{comment.content}}</p> 
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

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
    },
    computed: {
        dateCreated: function() {
            return moment(this.post.created_at).format("MM/DD/YYYY, h:mm:ss a");
        },
        dateUpdated: function() {
            return moment(this.post.updated_at).format("MM/DD/YYYY, h:mm:ss a");
        }
    }
};
</script>


<style lang="scss">
.post-detail {
    max-width: 768px;
    margin: auto;
    .post-meta {
        padding: 0.5em;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        p {
            color: #42b983;
            font-size: 0.9em;
            margin: 0;
        }
    }
}
</style>
