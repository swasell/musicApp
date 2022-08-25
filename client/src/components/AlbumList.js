import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './AlbumList.css'


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
        <div className="container">
            {music.map((music) => (
                <div key={music._id} className="album">
                <img className="album-art" src={music.coverArt} alt={music.title} />
                <br/>
                <NavLink className="album-title" to ={`/albums/${music._id}`}>{music.title}</NavLink>
                </div>
            ))}
        </div>
    )

};

export default AlbumList;