import debouncedSearch from './searchYouTube.js'
import getVideoDescription from './getVideoDescription.js'
import YOUTUBE_API_KEY from '../config/youtube.js'

const loadAPIs = (context) => {
	console.log(context)
	var options = {
		part: 'snippet',
		q: context.state.searchBox,
		max: 5,
		key: YOUTUBE_API_KEY
	  }
	  
	  debouncedSearch(options, (data) => {
		context.setState({
		  videoList: data.items,
		  currentVideo: data.items[0]
		})
		getVideoDescription(data.items[0].id.videoId, options.key, (description) => {
		  context.setState({
			currentVideoDescription: description
		  })
		});
	  })
}

export default loadAPIs