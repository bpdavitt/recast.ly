import VideoList from './VideoList.js'
import { exampleVideoData } from '../data/exampleVideoData.js'
import VideoPlayer from './VideoPlayer.js'
import debouncedSearch from '../lib/searchYouTube.js' 
import YOUTUBE_API_KEY from '../config/youtube.js'
import Search from '../components/Search.js'
import getVideoDescription from '../lib/getVideoDescription.js'


class App extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      currentVideoDescription: '',
      test: [],
      searchBox: ''
    }
  }

  componentDidMount() {
    var context = this;
    var options = {
      part: 'snippet',
      q: 'RickRoll',
      max: 5,
      key: YOUTUBE_API_KEY
    }

    debouncedSearch(options, function(data, context) {
      context.setState({
        videoList: data.items,
        currentVideo: data.items[0]
      })
      getVideoDescription(data.items[0].id.videoId, options.key, function(description, context){
        context.setState({
          currentVideoDescription: description
        })
      }, context);
    }, context)


  }

  handleVideoChange(video) {
    var context = this;
    console.log(video);
    this.setState({
      currentVideo: video
    });
    getVideoDescription(video.id.videoId, YOUTUBE_API_KEY, function(description, context){
      context.setState({
        currentVideoDescription: description
      })
    }, context);

  }

  handleSearchInputChange(input) {
    if(input.key === 'Enter') {
      this.handleSearchSubmit();
    } else {
      this.setState({searchBox:input.target.value});
    }
    
  }

  handleSearchSubmit() {
    var context = this;
    var options = {
      part: 'snippet',
      q: this.state.searchBox,
      max: 5,
      key: YOUTUBE_API_KEY
    }
    
    debouncedSearch(options, function(data, context) {
      context.setState({
        videoList: data.items,
        currentVideo: data.items[0]
      })
      getVideoDescription(data.items[0].id.videoId, options.key, function(description, context){
        context.setState({
          currentVideoDescription: description
        })
      }, context);
    }, context)


  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search handleChange={ this.handleSearchInputChange.bind(this)}
            handleSubmit={ this.handleSearchSubmit.bind(this) }/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video= { this.state.currentVideo} description= {this.state.currentVideoDescription}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5> <VideoList videos={ this.state.videoList } handleVideoChange= {this.handleVideoChange.bind(this)}/></h5></div>
          </div>
        </div>
      </div>
    )
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
