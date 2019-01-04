export const tvShowsCleaner = (tvShows) => {
  const cleanedTvShows = tvShows.map(tvShow => {
    return {
      id: tvShow.id,
      name: tvShow.name,
      runtime: tvShow.runtime,
      premiered: tvShow.premiered,
      schedule: tvShow.schedule,
      rating: tvShow.rating,
      network: tvShow.network.name,
      summary: tvShow.summary,
      images: tvShow.image
    }
  })
  return cleanedTvShows
}