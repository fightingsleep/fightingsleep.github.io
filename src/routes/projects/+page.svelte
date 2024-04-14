<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { projects } from "$lib/data/projects";
</script>

<div class="m-6">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {#each projects as project (project.name)}
    <Card class="animate-quickfadein" href={project.link} horizontal size="md" padding="md">
      <div class="items-center grid grid-rows-2 grid-flow-col gap-x-3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{project.description}</p>
        <img src={project.image} class="row-span-2" alt={project.name}>
      </div>
    </Card>
    {/each}
  </div>
</div>

<style lang="sass">
</style>