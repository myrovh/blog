<script lang="ts">
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment: string
</script>

<Nav segment="{segment}" />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
