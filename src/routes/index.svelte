<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts }
      })
  }
</script>

<script>
  export let posts
</script>

<style>
  .post {
    border-style: solid;
    border-width: 1px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>

<svelte:head>
  <title>myrovh's Blog</title>
</svelte:head>

<h1>Posts</h1>

{#each posts as post}
  <div class="post">
    <a rel="prefetch" href="blog/{post.slug}">
      <h1>{post.title}</h1>
      <h2>{post.dateString}</h2>
    </a>
  </div>
{/each}
