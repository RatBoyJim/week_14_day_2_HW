import React from 'react';
import SongDetails from "./SongDetails"

const SongList = ({trackList, loaded}) => {
    if(!loaded){
        return <p>Loading...</p>
    }
    const songsArray = trackList.feed.entry.map((song, index) => {
        return(
            <SongDetails song={song} key={song.id.attributes["im:id"]} number={index+1}></SongDetails>
        )
    })
    
    return(
        <>
        <ul>
            {songsArray}
        </ul>
        </>
    );
}

export default SongList;
