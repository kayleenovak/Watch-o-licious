import { tvShowCleaner } from './tvShowCleaner'

describe('tvShowCleaner', () => {
  it('should return a cleaned tvShow', () => {
    const uncleanTvShows = [
      {
        "id": 1,
        "url": "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
        "name": "Pilot",
        "season": 1,
        "number": 1,
        "airdate": "2013-06-24",
        "airtime": "22:00",
        "airstamp": "2013-06-25T03:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
        },
        "summary": "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/episodes/1"
          }
      }
    }]
    const cleanedTvShows = [
      {
        season: 1,
        episodes: [{
          title: 'Pilot',
          episode: 1,
          runtime: 60,
          summary: "When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.",
          airdate: '2013-06-24',
          favorite: {
            favorite: false,
            watchList: false,
            watched: false
          }
        }]
      }
    ]

    const result = tvShowCleaner(uncleanTvShows)

    expect(result).toEqual(cleanedTvShows)
  })
})