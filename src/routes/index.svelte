<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts }
      })
  }
</script>

<script lang="ts">
  export let posts: {
    excerptHtml: string
    title: string
    dateString: string
    slug: string
  }[]
</script>

<svelte:head>
  <title>myrovh's Blog</title>
</svelte:head>

<div class="container max-w-sm px-4 mx-auto">
  {#each posts as post}
    <section
      class="p-8 pt-0 my-8 transition duration-500 ease-in-out rounded-md shadow-md hover:shadow-lg"
    >
      <h2
        class="text-lg font-bold text-gray-700 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
      >
        <a
          class="inline-block w-full h-full py-3 pt-8"
          rel="prefetch"
          href="blog/{post.slug}">
          {post.title}
        </a>
      </h2>
      <h3 class="mb-2 text-sm text-gray-500 dark:text-gray-600">
        {post.dateString}
      </h3>
      <div class="prose dark:prose-light">
        {@html post.excerptHtml}
      </div>
    </section>
  {/each}
</div>
