const debouncedSearch = _.debounce((options, callback = () => {}) => {

  fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.q + '&max=5&key=' + options.key)
  .then(function(data) {
    return data.json()
  }).then(function(data){
    callback(data)
  }), 500})

//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: "GET",
//     data: options,
//     contentType: 'application/json',
//     success: function(data){
//       callback(data, context);
//     },
//     error: function(data) {
//       console.error(data)
//     }
//   })
// }
// , 500);

export default debouncedSearch;
