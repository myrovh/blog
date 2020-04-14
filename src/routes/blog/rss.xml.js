import send from '@polka/send'
import { getAllPosts } from './_posts.js'

const months = ',Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')

const domain = 'myrovh.dev'

function formatPubdate(str) {
  const [y, m, d] = str.split('-')
  return `${d} ${months[+m]} ${y} 12:00 +0000`
}

const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>myrovh's blog</title>
	<link>https://${domain}/blog</link>
	<description>My personal blog about stuff.</description>
	<image>
		<url>https://${domain}/favicon.png</url>
		<title>myrovh's blog</title>
		<link>https://${domain}/blog</link>
	</image>
	${getAllPosts()
    .map(
      (post) => `
		<item>
			<title>${post.data.title}</title>
			<link>https://${domain}/blog/${post.data.slug}</link>
			<description>${post.data.description}</description>
			<pubDate>${formatPubdate(post.data.date)}</pubDate>
		</item>
	`
    )
    .join('')}
</channel>
</rss>
`
  .replace(/>[^\S]+/gm, '>')
  .replace(/[^\S]+</gm, '<')
  .trim()

export function get(req, res) {
  send(res, 200, rss, {
    'Cache-Control': `max-age=${30 * 60 * 1e3}`,
    'Content-Type': 'application/rss+xml',
  })
}
