export const tvShowsCleaner = (cakeShows, bakeShows, bakingShows) => {
  const allShows = [...cakeShows, ...bakeShows, ...bakingShows]
  const cleanedTvShows = allShows.map(tvShow => {
    const newSummary = tvShow.show.summary.replace(/(<([^>]+)>)/ig,"")
    return {
      id: tvShow.show.id,
      title: tvShow.show.name,
      runtime: tvShow.show.runtime,
      premiered: tvShow.show.premiered,
      schedule: tvShow.show.schedule,
      rating: tvShow.show.rating.average,
      network: tvShow.show.network.name,
      summary: newSummary,
      images: tvShow.show.image
    }
  })
  return cleanedTvShows
}