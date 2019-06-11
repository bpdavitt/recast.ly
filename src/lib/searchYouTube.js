const debouncedSearch = _.debounce((options, callback = () => {}, context) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: "GET",
    data: options,
    contentType: 'application/json',
    success: function(data){
      // console.log(data);
      callback(data, context);
    },
    error: function(data) {
      console.error(data)
    }
  })
}, 500);

export default debouncedSearch;
