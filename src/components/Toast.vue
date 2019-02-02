<template>
  <div :class="toastClass" role="alert">
    <div class="toast-header text-danger">
      <span class="mr-2">⚠️</span> <strong class="mr-auto">Error</strong>
      <button type="button" class="ml-2 mb-1 close text-danger">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body"><slot></slot></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true
  }),
  computed: {
    toastClass() {
      return ["toast toast-position", { show: this.show }];
    }
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.$emit("destroy");
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.toast {
  min-width: 320px;
}
.toast-position {
  z-index: 9000;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  transition: all 500ms;
  opacity: 0;
}
.show {
  top: 20%;
  opacity: 1;
}
</style>
