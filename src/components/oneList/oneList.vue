<template>
  <div class="one-list">
    <a>
        <img :src="url" width="100%">
    </a>
  </div>
</template>
<script>
export default {
  name: 'oneList',
  props:["url"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
