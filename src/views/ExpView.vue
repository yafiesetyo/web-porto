<script lang="ts">
import Card from "../components/MainCard.vue";
export default {
  components: { Card },
  data() {
    return {
      experience: [
        {
          id: 1,
          company: "PT Bejana Investidata Globalindo",
          start: "June 2020",
          end: "August 2020",
          employmentStatus: "Internship",
          position: "Software Developer",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas, beatae cupiditate ad unde odio placeat harum, sint cumque quibusdam expedita deserunt amet perspiciatis et veniam. Iusto numquam quae nostrum?",
          icon: "⛴",
        },
        {
          id: 2,
          company: "PT Bejana Investidata Globalindo",
          start: "September 2020",
          end: "February 2021",
          employmentStatus: "Part-time",
          position: "Software Developer",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas, beatae cupiditate ad unde odio placeat harum, sint cumque quibusdam expedita deserunt amet perspiciatis et veniam. Iusto numquam quae nostrum?",
          icon: "🚅",
        },
        {
          id: 3,
          company: "Twiscode",
          start: "August 2021",
          end: "September 2021",
          employmentStatus: "Full-time",
          position: "Backend Developer",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas, beatae cupiditate ad unde odio placeat harum, sint cumque quibusdam expedita deserunt amet perspiciatis et veniam. Iusto numquam quae nostrum?",
          icon: "🏎",
        },
        {
          id: 4,
          company: "Amartha",
          start: "September 2021",
          end: "Present",
          employmentStatus: "Permanent",
          position: "Associate Software Engineer",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas, beatae cupiditate ad unde odio placeat harum, sint cumque quibusdam expedita deserunt amet perspiciatis et veniam. Iusto numquam quae nostrum?",
          icon: "🔭",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <template v-for="e in experience" :key="e.id">
      <Card
        :icon="e.icon"
        :header="e.position"
        :sub-header-1="e.company + ' ' + e.employmentStatus"
        :sub-header-2="e.start + ' - ' + e.end"
        :description="e.description"
      />
    </template>
  </div>
</template>
