<script>
import { images } from '$lib/data/carousel';
import { Carousel, Heading, P } from 'flowbite-svelte';
import { scale } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });
</script>

<div>
    <Heading tag="h1" class="mb-4 text-center" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl">Chris Ross</Heading>
    <P class="text-center mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Senior Software Developer</P>
    <Carousel {images} transition={scaleAnimation} class="justify-items-center max-h-24" imgClass="object-contain h-full max-w-28 rounded-sm p-2" duration={3000} />
</div>

<style>
</style>
