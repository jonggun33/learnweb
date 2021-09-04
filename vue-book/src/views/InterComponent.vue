<template>
    <div>
        <PageTitle title="Inter-Component Communication Demo"/>
        <PageTitle :title=title />
        <h3>other </h3>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue'
export default ({
    data() {
        return {
            title: '(Dynamic Prop) I-C Communication'
        }

    },
    components:{
        PageTitle
    }
})
</script>
