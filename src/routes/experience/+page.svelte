<script>
    import { Timeline, TimelineItem } from 'flowbite-svelte';
</script>

<div class="max-w-lg p-3">
    <Timeline order="vertical">
    <TimelineItem title="DELL" date="2015 - 2017">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <img class="bg-white" src="/logos/dell_logo.svg" alt="dell" />
        </span>
        </svelte:fragment>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </TimelineItem>
    <TimelineItem title="TD" date="2018 - 2021">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <img class="bg-white" src="/logos/td_logo.svg" alt="td" />
        </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </TimelineItem>
    <TimelineItem title="FINBOURNE" date="2021 - 2023">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <img class="bg-white" src="/logos/finbourne_logo.svg" alt="finbourne" />
        </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
    <TimelineItem title="RBC Capital Markets" date="2023 - now">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-5 h-5 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <img class="bg-white" src="/logos/rbc_logo.svg" alt="rbc" />
        </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
    </Timeline>
</div>

<style>
</style>
