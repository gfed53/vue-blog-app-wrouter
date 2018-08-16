<template>
    <form action="" v-on:submit.prevent="onSubmit">
        <div class="form-section">
            <label for="title">Title: </label>
            <input type="text" name="title" v-model="data.title">
        </div>
        <div class="form-section">
            <label for="content">Content: </label>
            <textarea rows="5" name="content" v-model="data.content" />
        </div>
        <button type="submit">Submit</button>
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
.form-section {
    label {
        display: block;
    }
}
</style>