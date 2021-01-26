import React, {useState, useEffect} from 'react';
import SongList from "../components/SongList"

const TopTwentyContainer = () => {

    const [trackList, setTrackList] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getTracks = () => {
        console.log("getting track list");
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setTrackList(data))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getTracks();
    }, [])

    return(
        <>
            <SongList trackList={trackList} loaded={loaded}></SongList>
        </>
    )
}

export default TopTwentyContainer;