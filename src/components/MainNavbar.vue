<script lang="ts">
export default {
  data() {
    return {
      urlPath: this.$router.currentRoute,
      showMenu: false,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <nav class="py-5 md:flex items-center bg-[#181818] sticky top-0 z-10">
    <div class="flex justify-end md:hidden">
      <button class="mr-5 text-2xl" @click="toggleNav">🍔</button>
    </div>
    <!-- Main Nav -->
    <ul class="hidden md:block md:mx-auto">
      <li class="inline-block mr-3">
        <RouterLink
          to="/"
          class="font-semibold text-lg text-center hover:underline focus:underline"
          :class="{ underline: urlPath.path === '/' }"
        >
          📒 About
        </RouterLink>
      </li>
      <li class="inline-block mx-3">
        <RouterLink
          to="/experience"
          class="font-semibold text-lg text-center hover:underline focus:underline"
          :class="{ underline: urlPath.path === '/experience' }"
        >
          🪖 Experience
        </RouterLink>
      </li>
      <li class="inline-block mx-3">
        <RouterLink
          to="/projects"
          class="font-semibold text-lg text-center hover:underline focus:underline"
          :class="{ underline: urlPath.path === '/projects' }"
        >
          ⚙️ Projects
        </RouterLink>
      </li>
      <li class="inline-block ml-3">
        <a
          class="flex justify-between bg-sky-200 py-2 px-5 rounded-lg text-white hover:bg-sky-400 hover:duration-150"
          href="https://github.com/yafiesetyo"
          title="more on github"
        >
          <svg
            aria-hidden="true"
            class="octicon octicon-mark-github"
            height="15"
            version="1.1"
            viewBox="0 0 16 16"
            width="15"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
    <!-- Mobile Nav -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="text-center flex-col mt-8 space-y-4"
    >
      <li>
        <RouterLink
          to="/"
          class="font-semibold text-lg text-center hover:underline focus:underline"
          :class="{ underline: urlPath.path === '/' }"
        >
          📒 About
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/experience"
          class="font-semibold text-lg text-center hover:underline focus:underline"
          :class="{ underline: urlPath.path === '/experience' }"
        >
          🪖 Experience
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/projects"
          class="font-semibold text-lg text-center hover:underline focus:underline"
          :class="{ underline: urlPath.path === '/projects' }"
        >
          ⚙️ Projects
        </RouterLink>
      </li>
      <li>
        <a
          class="flex justify-center bg-sky-200 py-2 px-3 rounded-lg mx-16 text-white hover:bg-sky-400 hover:duration-150"
          href="https://github.com/yafiesetyo"
          title="more on github"
        >
          <svg
            aria-hidden="true"
            class="octicon octicon-mark-github"
            height=""
            version="1.1"
            viewBox="0 0 16 16"
            width="30"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <span class="text-black font-bold text-lg ml-5">
            More On Github
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
