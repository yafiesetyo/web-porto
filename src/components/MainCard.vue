<script lang="ts">
export default {
  props: {
    icon: String,
    header: String,
    subHeader1: String,
    subHeader2: String,
    description: String,
    tags: Array<string>,
  },
};
</script>

<template>
  <div class="my-5 border-solid border-[3px] border-sky-700 rounded-md p-8">
    <h1 class="text-3xl font-bold">{{ icon }} {{ header }}</h1>
    <span class="font-medium text-sm">{{ subHeader1 }}</span>
    <br />
    <span class="font-medium text-sm opacity-50">{{ subHeader2 }}</span>
    <template v-if="tags && tags.length > 0">
      <div class="flex mb-5">
        <template v-for="(t, idx) in tags" :key="idx">
          <span
            class="font-bold py-0.5 px-2 mr-1.5 text-center bg-cyan-700 rounded-md"
            >{{ t }}</span
          >
        </template>
      </div>
    </template>
    <p>{{ description }}</p>
  </div>
</template>
