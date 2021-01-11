<script lang="ts">
  export let segment: string
</script>

<header class="flex px-4 mx-auto my-4">
  <img
    class="w-16 h-16"
    width="64px"
    height="64px"
    src="logo-192.png"
    alt="myrovh's profile pic"
  />
  <div class="flex flex-col mx-6">
    <h1 class="text-lg text-gray-700 dark:text-white whitespace-nowrap">
      myrovh's blog
    </h1>
    <nav class="mt-4">
      <a
        class="btn-nav"
        rel="prefetch"
        aria-current="{segment === undefined || segment === 'blog'
          ? 'page'
          : undefined}"
        href=".">blog</a
      >
      <a
        class="btn-nav"
        aria-current="{segment === 'about' ? 'page' : undefined}"
        href="/about">about</a
      >
    </nav>
  </div>
  <span class="w-16 h-16"/>
</header>

<style>
  .btn-nav {
    @apply text-base text-gray-600 hover:text-gray-300 px-2 py-4 dark:text-gray-400 dark:hover:text-white;
  }
</style>
