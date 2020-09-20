import fs from 'fs'
import grayMatter from 'gray-matter'
import marked from 'marked'
import path from 'path'

export type MarkdownResult = {
  excerptHtml: string
  html: string
  data: {
    [key: string]: any
    slug: string
    pubdate: string
    dateString: string
  }
}

const renderer = new marked.Renderer()

export const getAllPosts = (): MarkdownResult[] =>
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

      const html = marked(content, { renderer })
      const excerptHtml = marked(excerpt, { renderer })
      const finalObject: MarkdownResult = {
        data: {
          ...data,
          slug,
          pubdate,
          dateString: date.toDateString(),
        },
        excerptHtml,
        html,
      }
      return finalObject
    })
    .sort((a, b) => (a.data.pubdate < b.data.pubdate ? 1 : -1))
