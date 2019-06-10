var searchYouTube = (options, callback = () => {}) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: "GET",
    data: {part: 'snippet', query: 'animals', max: 5, key: ''},
    contentType: 'application/json',
    success: function(data){console.log(data)},
    error: function(data) {
      console.error(data)
    }
  })
};

export default searchYouTube;
