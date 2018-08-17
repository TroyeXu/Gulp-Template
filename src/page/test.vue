<template>
    <div>
        <div class="header"></div>
        <div class="main">
            <p v-for="(item, index) in 100" :key="index">{{item}}</p>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'welcome vue template!!!'
        }
    },
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeDestroy(){},
    destroyed(){},
    methods: {},
    activated(){},
    deactivated(){},
    computed: {},
    components: {}
}
</script>

<style scoped lang="">
body { padding-top: 1rem; background: green; }
p { height: .8rem; line-height: .8rem; font-size: .3rem; position: relative; border-bottom:.01rem solid red; }
</style>
