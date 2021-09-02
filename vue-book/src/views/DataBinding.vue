<template>
<div>
    <h1>Hello {{title}}</h1>


    <div>{{htmlString}}</div>

    <div v-html='htmlString'></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'World',
            htmlString: "<p style='color:red;'> This is a red string</p>"
        };
    }
}
</script>
