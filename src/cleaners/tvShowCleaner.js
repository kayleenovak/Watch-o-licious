export const tvShowCleaner = (tvShow, id) => {
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
        let newSummary
        if(episode.summary) {
          newSummary = episode.summary.replace(/(<([^>]+)>)/ig,"")
        }
        const cleanEpisode = {
          showId: id,
          url: episode.url,
          title: episode.name,
          episode: episode.number,
          runtime: episode.runtime,
          summary: newSummary,
          airdate: episode.airdate,
          tracked: {
            favorite: false,
            watchlist: false,
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