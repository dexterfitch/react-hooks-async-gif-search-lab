function GifList({title, url}) {
    return(
        <div className="gif-box">
            <h2>{title}</h2>
            <img src={url} alt={title} />
        </div>
    )

}

export default GifList;