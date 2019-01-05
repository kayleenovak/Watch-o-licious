export const tvShowCleaner = (tvShow) => {
  const seasons = tvShows.reduce((epsiode, acc) => {
    if (!acc.includes(episode.season)) {
      acc.push(epsiode.season)
    }
    return acc
  }, [])
  const cleanedSeasons = seasons.map(season => {
    const cleanSeason = {
      season,
      episodes: []
    }
    tvShow.forEach(episode => {
      if(episode.season === season) {
        const cleanEpisode = {
          name: episode.name,
          episode: episode.number,
          image: episode.image.medium,
          runtime: episode.runtime,
          summary: episode.summary
        }
        cleanSeason.episodes.push(cleanEpisode)
      }
    })
    return cleanSeason
  })
  return cleanedSeasons
}