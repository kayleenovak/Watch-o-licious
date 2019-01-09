export const tvShowCleaner = (tvShow, id, tracked) => {
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
            favorites: false,
            watchlist: false,
            watched: false
          }
        }
        if(tracked) {
          tracked.forEach(trackedShow => {
            if (trackedShow.url === episode.url) {
              cleanEpisode.tracked = trackedShow.tracked
            }
          })
        }
        cleanSeason.episodes.push(cleanEpisode)
      }
    })
    return cleanSeason
  })
  return cleanedSeasons
}