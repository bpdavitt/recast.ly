const VideoDetails = (props) => {
    const toggleClass = (e) =>  {
        var descriptionBox = document.getElementById('description')
        if(Array.from(descriptionBox.classList).includes('show')) {
            descriptionBox.classList.remove('show');
            e.target.src = '../styles/down.png'
        } else {
            descriptionBox.classList.add('show');
            e.target.src = '../styles/up.png'
        }
    }

    let descriptionWithBreaks = props.description
        .split('\n')
        .map((line,i) => {
            if(line.length === 0) {
                return (<div><br/></div>)
            } else {
                return (<span key={i}>{line}<br /></span>)
            }
        })

    return (
        <div>
            <h4>Video Description</h4>
            <div id='description'>
                {descriptionWithBreaks}
            </div>
            <div><img id='downArrow' onClick={ (e) => {toggleClass(e)} } src="../styles/down.png" alt="" srcset=""/></div>
        </div>
    )
}

export default VideoDetails
