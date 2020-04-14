import marked from 'marked'
import { getPost } from './_posts'

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params

  const { data, content } = getPost(slug)

  const renderer = new marked.Renderer()

  const html = marked(content, { renderer })

  if (html) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(JSON.stringify({ html, ...data }))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}
