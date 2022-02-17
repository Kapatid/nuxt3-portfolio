import config from "#config"

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
