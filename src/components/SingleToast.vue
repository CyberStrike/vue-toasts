<template>
  <div :class="toastClass" role="alert">
    <div class="toast-header text-danger">
      <span class="mr-2">⚠️</span> <strong class="mr-auto">Error</strong>
      <button @click="hide" type="button" class="ml-2 mb-1 close text-danger">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam,
      quaerat accusamus corporis eveniet ad beatae saepe labore placeat
      repellendus? Quo, odio. Suscipit corrupti doloribus fuga tempore,
      accusamus molestiae alias!
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    toastClass() {
      return ["toast toast-position bg-danger", { show: this.show }];
    }
  },
  methods: {
    hide() {
      this.show = false;
    }
  },
  watch: {
    show(to, from) {
      if (true === to) {
        setTimeout(() => {
          this.show = false;
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  min-width: 320px;
}
.toast-position {
  z-index: 0;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  transition: all 500ms;
  opacity: 0;
}
.show {
  z-index: 9000;
  top: 20%;
  opacity: 1;
}
</style>
