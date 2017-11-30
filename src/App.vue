<template>
  <div>
    <keep-alive>
      <router-view></router-view> 
    </keep-alive>
  </div>
</template>

<script>
import { setHtmlSize } from '@/libs/utils' 
export default {
  name: 'app',
  data() {
    return {
    }
  },
  created() {
    
  },
  mounted() {
    setHtmlSize()
  },
  computed: {
  },
  methods: {
  },
  components: {
    
  },
  watch: {

  }
}
</script>

<style scoped lang="less">

</style>
