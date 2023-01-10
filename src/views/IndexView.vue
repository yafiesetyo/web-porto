<script lang="ts">
import Navbar from "../components/MainNavbar.vue";
export default {
  components: Navbar,
};
</script>

<template>
  <div class="container mx-auto">
    <div class="flex items-center lg:h-[90vh] p-10">
      <div>
        <h3 class="text-lg mb-2 text-sky-300">Hi, My name is</h3>
        <h1 class="text-9xl font-bold mb-2">Yafie Setyo</h1>
        <h1 class="mt-6 text-3xl font-bold text-sky-500 mb-2">
          An ordinary web builder 😂🤣😂
        </h1>
        <p class="mt-10 mb-16 text-lg">
          I'm a die-hard <b>Gooners</b>
          🔫 software engineer based in
          <b class="text-sky-200">Malang, Indonesia</b>
        </p>
        <a
          class="mt-5 border-solid border-[3px] border-sky-700 rounded-md p-5 text-xl font-bold hover:bg-sky-700 hover:duration-150"
          href="mailto:yafiesetyo@gmail.com"
        >
          🔥 Lets Collaborate!
        </a>
      </div>
    </div>
  </div>
</template>
