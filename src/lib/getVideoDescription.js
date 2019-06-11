const getVideoDescription = (id, key, callback = () => {}) => {

    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ id + '&key=' + key)
    .then(function(data) {return data.json()})
    .then(function(data){callback(data.items[0].snippet.description)})
}

export default getVideoDescription;