<script lang="ts">
  export let segment: string
</script>

<header>
  <img src="logo-192.png" alt="myrovh's profile pic" />
  <div>
    <nav>
      <h1>myrovh's blog</h1>
      <ul>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === undefined || segment === 'blog'
              ? 'page'
              : undefined}
            href="."> blog </a>
        </li>
        <li>
          <a
            aria-current={segment === 'about' ? 'page' : undefined}
            href="/about"> about </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  img {
    width: 100px;
    height: 100px;
  }
  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  header {
    max-width: 46em;
    display: flex;
    padding: 2em;
  }
</style>
