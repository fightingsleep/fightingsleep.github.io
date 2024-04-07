<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { projects } from "$lib/data/projects";
</script>

<div class="m-6">
  <div class="grid grid-cols-2 gap-4">
    {#each projects as project (project.name)}
    <Card href={project.link} horizontal size="md" padding="md">
      <div class="grid grid-rows-2 grid-flow-col gap-x-3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <img src={project.image} class="row-span-2">
      </div>
    </Card>
    {/each}
  </div>
</div>

<style lang="scss">
</style>
