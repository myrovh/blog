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
  ul {
    padding: 0;
  }
  .post {
    border: 1px solid #ddd;
    list-style: none;
    margin: 1.2em;
    margin-bottom: 3em;
    padding-top: 1.5em;
    padding-left: 1.5em;
    padding-bottom: 1.5em;
  }
</style>

<svelte:head>
  <title>myrovh's Blog</title>
</svelte:head>

<h1>Posts</h1>

<ul>
  {#each posts as post}
    <li class="post">
      <a rel="prefetch" href="blog/{post.slug}">
        <h2>{post.title}</h2>
      </a>
      <h6>{post.dateString}</h6>
    </li>
  {/each}
</ul>
