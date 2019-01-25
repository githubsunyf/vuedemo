<template>
    <div class="hello">
        <h2>{{msg}}</h2>
          <p>通过name 传值  {{ $route.name}}</p>
    </div>
</template>

<script>
export default {
    name:'hi2',
    data(){
        return {
            msg:'Hi ,I am Hi2'
        }
    }
}
</script>

<style scoped>
</style>