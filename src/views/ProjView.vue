<script lang="ts">
import stack from "../constants/techStacks";
import Card from "../components/MainCard.vue";
export default {
  components: { Card },
  data() {
    return {
      projects: [
        {
          id: "1",
          icon: "🥋",
          projectName: "Taekwondo Jawa Tengah Website",
          stacks: [
            stack.HTML,
            stack.CSS,
            stack.JS,
            stack.PHP,
            stack.LARAVEL,
            stack.MYSQL,
          ],
          description:
            "Build admin panel and public website for Taekwondo Jawa Tengah Province, Indonesia",
        },
        {
          id: "2",
          icon: "⛑",
          projectName: "Chamber Custom - Backend Services",
          stacks: [
            stack.GO,
            stack.POSTGRESQL,
            stack.PAYPAL_API,
            stack.FIREBASE_FCM,
          ],
          description: `Build admin panel and e-commerce backend service for Chamber Custom (a Custom Helmet Store).
            Integrate with paypal for payment, firebase FCM for notification, and create custom API for shipping. 
            And build custom cron job service for update currency (works every 1 week)`,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <template v-for="p in projects" :key="p.id">
      <Card
        :header="p.projectName"
        :icon="p.icon"
        :tags="p.stacks"
        :description="p.description"
      />
    </template>
  </div>
</template>
