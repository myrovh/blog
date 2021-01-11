<script context="module" lang="ts">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script lang="ts">
  import type { MarkdownResult } from './_posts'

  export let post: MarkdownResult
</script>

<svelte:head>
  <title>{post.data.title}</title>
</svelte:head>

<article class="px-4 mx-auto prose dark:prose-light">
  <h1>{post.data.title}</h1>
  {@html post.html}
</article>
