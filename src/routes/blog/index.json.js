import send from '@polka/send'
import { getAllPosts } from './_posts.js'

let json

export function get(req, res) {
  if (!json || process.env.NODE_ENV !== 'production') {
    const posts = getAllPosts().map((post) => ({
      ...post.data,
      excerptHtml: post.excerptHtml,
    }))

    json = JSON.stringify(posts)
  }

  send(res, 200, json, {
    'Content-Type': 'application/json',
    'Cache-Control': `max-age=${5 * 60 * 1e3}`, // 5 minutes
  })
}
