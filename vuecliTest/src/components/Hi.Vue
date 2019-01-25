<template>
    <div class="hello">
        <h2>{{msg}}</h2>
        <router-view></router-view>

    </div>
  
</template>

<script>
export default {
    name:'hi',
    data(){
        return {
            msg:'Hi,I am JSPang'
        }
    }
}
</script>

<style scoped>
</style>