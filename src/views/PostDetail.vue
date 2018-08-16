<template>
    <div class="post-detail">
        
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";

const baseUrl = "http://localhost:8004/api/";

export default {
    name: "post-detail",
    components: {},
    mounted() {},
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
