<script lang="ts">
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'
  import GlobalStyle from '../components/GlobalStyle.svelte'

  export let segment: string
</script>

<GlobalStyle />

<Nav segment="{segment}" />

<main class="flex flex-row">
  <slot />
</main>

<Footer />
