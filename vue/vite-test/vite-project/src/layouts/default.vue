<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default { components: { Header, Footer } }
</script>

<template>
    <div class="layout">
      <Header />
      <div class="content">
        <section class="page">
          <router-view />
        </section>
      </div>
      <Footer />
    </div>
  </template>

<style scoped>
.layout { display: flex; flex-direction: column; height: 100vh; }
.content { display: flex; flex: 1;}
.page { flex: 1;}
</style>