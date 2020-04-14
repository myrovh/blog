import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

export const getAllPosts = () =>
  fs.readdirSync('content').map((fileName) => {
    const post = fs.readFileSync(path.resolve('content', fileName), 'utf-8')
    return grayMatter(post)
  })

export const getPost = (fileName) => {
  const post = fs.readFileSync(
    path.resolve('content', `${fileName}.md`),
    'utf-8'
  )
  return grayMatter(post)
}
