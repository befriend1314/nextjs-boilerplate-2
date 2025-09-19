export type Post = {
  type: string
  title: string
  description: string
  date: string
  slug: string
  content?: string
}

export type PostData = Post & {
  content: string
}