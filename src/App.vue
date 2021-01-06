<template>
  <div>
    <BaseNavbar />
    <b-container class="pt-4">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import BaseNavbar from './components/BaseNavbar'
export default {
  components: {BaseNavbar}
}
</script>
