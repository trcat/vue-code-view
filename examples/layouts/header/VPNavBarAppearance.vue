<script lang="ts">
import { defineComponent } from "vue";
import VCVSwitchAppearance from "@examples/components/VCVSwitchAppearance.vue";
// import { useConfig } from "@examples/composables/config";
import { appearance } from "@examples/settings/projectSetting";

export default defineComponent({
  components: { VCVSwitchAppearance },
  setup() {
    // const { config } = useConfig();

    return {
      // config,
      appearance,
    };
  },
});
</script>

<template>
  <div v-if="appearance" class="VPNavBarAppearance">
    <VCVSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: block;
  }
}
</style>
