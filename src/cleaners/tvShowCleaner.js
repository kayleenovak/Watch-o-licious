export const tvShowCleaner = (tvShow) => {
  const seasons = tvShow.reduce((acc, episode) => {
    if (!acc.includes(episode.season)) {
      acc.push(episode.season)
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