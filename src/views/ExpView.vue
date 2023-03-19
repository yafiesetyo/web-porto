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
            "Help to develop IOA (Indonesia Orthopaedic Association) Landing Page. Using PHP as language, Laravel as framework, and we're using OctoberCMS as CMS",
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
            "Help to maintain and improve existing Biofarma Web Dashboard. Using C# as language, ASP.NET as framework",
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
            "Assigned on some projetcs, focusing on e-commerce website. Using Go as language, and postgreSQL for the database",
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
            "Currently assigned on Partnership Lending - Loan Origination squad that responsibilty for pre-loan creation like Loan Origination Workflow Configuration, Employee Loan Origination, etc. Using Go as language, PostgreSQL for the databases, and mainly using Google Cloud Platform as Cloud Infrastructure Providers",
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
        :sub-header-1="e.company + ' | ' + e.employmentStatus"
        :sub-header-2="e.start + ' - ' + e.end"
        :description="e.description"
      />
    </template>
  </div>
</template>
