export const fetchCall = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw Error(response.statusText)
  }
  const tvShows = await response.json()
  return tvShows
}