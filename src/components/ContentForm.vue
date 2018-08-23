<template>
    <form action="" v-on:submit.prevent="onSubmit">
        <div class="form-section">
            <label class="form-label" for="title">Title: </label>
            <input class="form-input" type="text" name="title" required v-model="data.title">
        </div>
        <div class="form-section">
            <label class="form-label" for="content">Content: </label>
            <textarea class="form-textarea" rows="5" name="content" required v-model="data.content" />
        </div>
        <div class="form-footer">
            <button class="form-btn--submit" type="submit">Submit</button>
        </div>
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

/*------------------------------------*\
  #ContentForm
\*------------------------------------*/

form {
    margin: 1em;
    display: inline-block;
    width: 100%;
    max-width: 30em;
}

.form-section {
    margin: 1em;
    padding: 1em;
}

.form-footer {
    text-align: right;
    padding: 0.75em 1.5em;
}

.form-input,
.form-textarea {
    width: 100%;
    font-size: 1em;
    border: 1px solid lightgrey;
}

.form-label {
    display: block;
}

.form-btn--submit {
    cursor: pointer;
    color: #ffffff;
    background: $vue-green;
    padding: 0.5em;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 3px #0a0a00;
    font-size: 1.2em;
}
</style>