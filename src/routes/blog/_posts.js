import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import marked from 'marked'

const renderer = new marked.Renderer()

export const getAllPosts = () =>
  fs
    .readdirSync('content')
    .map((fileName) => {
      if (path.extname(fileName) !== '.md') return

      const match = /^(\d+-\d+-\d+)-(.+)\.md$/.exec(fileName)
      if (!match) throw new Error(`Invalid filename '${fileName}`)

      const [, pubdate, slug] = match

      const markdown = fs.readFileSync(
        path.resolve('content', fileName),
        'utf-8'
      )
      const { content, data, excerpt } = grayMatter(markdown, {
        excerpt_separator: '<!-- excerpt -->',
      })
      const date = new Date(pubdate)
      data.slug = slug
      data.pubdate = pubdate
      data.dateString = date.toDateString()

      const html = marked(content, { renderer })
      const excerptHtml = marked(excerpt, { renderer })
      return { data, excerptHtml, html }
    })
    .sort((a, b) => (a.data.pubdate < b.data.pubdate ? 1 : -1))
