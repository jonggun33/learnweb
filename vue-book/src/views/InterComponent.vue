<template>
    <div>
        <PageTitle title="Inter-Component Communication Demo"/>
        <PageTitle :title=title />
        <h3>title from hosting page</h3>
        <PageTitle title = "testing child call" @send-message = 'sendMessage' ref = 'child_component' />

        <modal-layout>
            <template v-slot:header>
                <h1>popup title</h1>
            </template>
        </modal-layout>

    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue'
import SlotModalLayout from '../components/SlotModalLayout.vue'
export default ({
    data() {
        return {
            title: '(Dynamic Prop) I-C Communication'
        }

    },
    components:{
        PageTitle,
        'modal-layout': SlotModalLayout
    },
    mounted() {
        this.$refs.child_component.chldsays();
    }
})
</script>
