export const tvShowsCleaner = (tvShows) => {
  const cleanedTvShows = tvShows.map(tvShow => {
    return {
      id: tvShow.id,
      name: tvShow.show.name,
      runtime: tvShow.show.runtime,
      premiered: tvShow.show.premiered,
      schedule: tvShow.show.schedule,
      rating: tvShow.show.rating,
      network: tvShow.show.network.name,
      summary: tvShow.show.summary,
      images: tvShow.show.image
    }
  })
  return cleanedTvShows
}