import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AlbumList = () => {

    const [music, setMusic] = useState ([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/albums")
        .then((res) => {
            console.log(res.data)
            setMusic(res.data)
    })
        .catch((err) => console.log(err));
}, []);

    return(
        <div>
            {music.map((music) => (
                <div key={music._id} className="album">
                <img className="album-art" src={music.coverArt} alt={music.title} />
                <Link to ={`/albums/${music._id}`}>{music.title}</Link>
                </div>
            ))}
        </div>
    )

};

export default AlbumList;