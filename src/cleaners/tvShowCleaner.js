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
        const newSummary = episode.summary.replace(/(<([^>]+)>)/ig,"")
        const cleanEpisode = {
          title: episode.name,
          episode: episode.number,
          runtime: episode.runtime,
          summary: newSummary,
          airdate: episode.airdate,
          favorite: {
            favorite: false,
            watchList: false,
            watched: false
          }
        }
        cleanSeason.episodes.push(cleanEpisode)
      }
    })
    return cleanSeason
  })
  return cleanedSeasons
}