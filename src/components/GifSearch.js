function GifSearch({updateSearchTermInState, runGifSearchResultFactory}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSearchTermInState(event.target[0].value)
        runGifSearchResultFactory()
    }

    return(
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input />
                <button>Search Now!</button>
            </form>
        </div>
    )
}

export default GifSearch;