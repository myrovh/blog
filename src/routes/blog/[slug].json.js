import send from '@polka/send'
import { getAllPosts } from './_posts'

let lookup

export function get(req, res) {
  if (!lookup || process.env.NODE_ENV !== 'production') {
    lookup = new Map()
    getAllPosts().forEach((post) => {
      lookup.set(post.data.slug, post)
    })
  }

  const post = lookup.get(req.params.slug)

  if (post) {
    res.setHeader('Cache-Control', `max-age=${5 * 60 * 1e3}`) // 5 minutes
    send(res, 200, post)
  } else {
    send(res, 404, { message: 'not found' })
  }
}
