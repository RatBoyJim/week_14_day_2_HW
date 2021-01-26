import React from 'react';

const SongDetails = ({song, number}) => {

    return (
        <div className="song">
            <h2>{number}</h2>
            <h3>Title: {song["im:name"].label}</h3>
            <h4>Artist: {song["im:artist"].label}</h4>
            {/* <img src={song["im:image"].label} alt="Album artwork"/> */}
        </div>
    )
}

export default SongDetails;