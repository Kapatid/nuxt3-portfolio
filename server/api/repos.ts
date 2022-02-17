import config from "#config"

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

export default async () => {
  const result: IGithubRepo[] = await (
    await fetch(config.GITHUB_URL, {
      method: "GET",
      headers: {
        // Set to expire until a certain date
        Authorization: `token ${config.GITHUB_TOKEN}`,
      },
    })
  ).json()

  return result
}
