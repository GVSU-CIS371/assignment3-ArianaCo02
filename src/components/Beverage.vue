<template>
  <Mug>
    <!-- show the mug type -->
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <!-- Creamer Layer -->
      <template v-slot:top>
        <Creamer v-if="creamer !== 'No Creamer'" :type="creamer" />
      </template>

      <!-- Syrup Layer -->
      <template v-slot:mid>
        <Syrup v-if="syrup !== 'No Syrup'" :type="syrup" />
      </template>

      <!-- Base Layer -->
      <template v-slot:bottom>
        <Base :type="base" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

// 🧠 Add new props here
type Props = {
  isIced: boolean;
  creamer: string;
  syrup: string;
  base: string;
};

defineProps<Props>();
</script>
