<script lang="ts">
  import "../app.pcss";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { Footer, FooterCopyright } from 'flowbite-svelte';

  const year: number = new Date().getFullYear();
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
</script>

<div class="container mx-auto max-w-5xl min-h-screen flex flex-col justify-between items-center">
  <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Chris Ross</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi href="/experience">Experience</NavLi>
      <NavLi href="/projects">Projects</NavLi>
      <NavLi href="/cv">CV</NavLi>
    </NavUl>
  </Navbar>

  <div>
    <slot />
  </div>

  <Footer class="p-7">
    <FooterCopyright href="/" by="Chris Ross" year={year} />
  </Footer>
</div>