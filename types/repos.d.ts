interface IGithubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  created_at: string
  updated_at: string
  clone_url: string
  language: string
  topics: string[]
  forks: number
  homepage: string
  stargazers_count: number
  watchers_count: number
}