<script>
import { mapState, mapActions } from "vuex";
import { actors } from "../constants";

// components
import Toast from "@/components/Toast.vue";
export default {
  components: { Toast },
  computed: {
    ...mapState(["errors"])
  },
  methods: {
    ...mapActions([actors.REMOVE_TOAST])
  }
};
</script>

<template>
  <section>
    <template v-for="error in errors">
      <toast @destroy="REMOVE_TOAST(error.id);" :key="error.id">
        {{ error.text }}
      </toast>
    </template>
  </section>
</template>
