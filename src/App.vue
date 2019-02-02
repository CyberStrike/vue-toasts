<template>
  <main id="app">
    <toasterå />
    <single-toast :show="show" />
    <div class="container">
      <section class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
        <h1 class="title">Toasts</h1>
        <p class="lead">Demo of Bootstrap Toasts with Vue</p>
        <button
          @click="show = !show;"
          :class="['btn btn-danger rounded-pill', { disabled: show }]"
        >
          Trigger Toast
        </button>
        <button @click="ADD_TOAST" class="btn btn-danger rounded-pill">
          Add Toast
        </button>
      </section>
    </div>
  </main>
</template>
<script>
//core
import { mapActions } from "vuex";
import { actors } from "./constants";

// components
import Toaster from "@/components/Toaster.vue";
import SingleToast from "@/components/SingleToast.vue";

export default {
  components: { Toaster, SingleToast },
  data: () => ({
    show: false
  }),
  methods: {
    ...mapActions([actors.ADD_TOAST])
  }
};
</script>

<style scoped>
.title {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
}
</style>
