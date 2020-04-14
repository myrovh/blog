import { getAllPosts } from './_posts'

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  const posts = getAllPosts().map((post) => post.data)
  res.end(JSON.stringify(posts))
}
