import {useState, useEffect} from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    // const placeHolderArray = [
    //     {
    //         id: 1,
    //         title: "PlaceKitten Placeholder Image",
    //         images: {
    //             original: {
    //                 url: "https://placekitten.com/300/300"
    //             }
    //         }
    //     },
    //     {
    //         id: 2,
    //         title: "PlaceKitten Placeholder Image",
    //         images: {
    //             original: {
    //                 url: "https://placekitten.com/300/300"
    //             }
    //         }
    //     },
    //     {
    //         id: 3,
    //         title: "PlaceKitten Placeholder Image",
    //         images: {
    //             original: {
    //                 url: "https://placekitten.com/300/300"
    //             }
    //         }
    //     },
    //     {
    //         id: 4,
    //         title: "PlaceKitten Placeholder Image",
    //         images: {
    //             original: {
    //                 url: "https://placekitten.com/300/300"
    //             }
    //         }
    //     },
    //     {
    //         id: 5,
    //         title: "PlaceKitten Placeholder Image",
    //         images: {
    //             original: {
    //                 url: "https://placekitten.com/300/300"
    //             }
    //         }
    //     },
    // ]

    const [searchTerm, setSearchTerm] = useState("capybara")
    const [searchResults, setSearchResults] = useState([])
    // const [searchResults, setSearchResults] = useState(placeHolderArray)

    const gifListFactory = () => {
        if (!!searchResults) {
            return searchResults.map(gif => {
                return(
                    <GifList key={gif.id} title={gif.title} url={gif.images.original.url} />
                )
            })
        }
    }

    useEffect(() => {
        const FETCH_URL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q=" + searchTerm
        
        fetch(FETCH_URL)
        .then(response => response.json())
        .then(json => setSearchResults(json.data.slice(0,5)))
    }, [searchTerm])

    return (
        <div>
            <GifSearch updateSearchTermInState={setSearchTerm} runGifSearchResultFactory={gifListFactory} />
            {gifListFactory()}
        </div>
    )
}

export default GifListContainer;