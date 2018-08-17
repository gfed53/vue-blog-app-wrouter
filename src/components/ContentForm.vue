<template>
    <form action="" v-on:submit.prevent="onSubmit">
        <div class="form-section">
            <label for="title">Title: </label>
            <input type="text" name="title" required v-model="data.title">
        </div>
        <div class="form-section">
            <label for="content">Content: </label>
            <textarea rows="5" name="content" required v-model="data.content" />
        </div>
        <button class="form-btn--submit" type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: "content-form",
    props: {
        data: null,
        onSubmit: null
    },
    mounted() {
        // console.log("this.data", this.data);
        // console.log("this.onSubmit", this.onSubmit);
    }
};
</script>

<style scoped lang="scss">
@import "@/globals/settings.scss";
form {
    margin: 1em;
    input,
    textarea {
        font-size: 1em;
        border: 1px solid lightgrey;
        // background: transparent;
    }
    .form-section {
        margin: 1em;
        label {
            display: block;
        }
    }

    .form-btn--submit {
        cursor: pointer;
        color: #ffffff;
        background: $vue-green;
        padding: 0.25em;
        border-radius: 4px;
        box-shadow: 1px 1px 3px;
        font-size: 1.2em;
    }
}
</style>