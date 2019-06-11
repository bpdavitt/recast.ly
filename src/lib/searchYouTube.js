var searchYouTube = (options, callback = () => {}, context) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: "GET",
    data: options,
    contentType: 'application/json',
    success: function(data){
      console.log(data);
      callback(data, context);
    },
    error: function(data) {
      console.error(data)
    }
  })
};

export default searchYouTube;
