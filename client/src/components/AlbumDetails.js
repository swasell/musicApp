import {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

const AlbumDetails = (props) => {

    const[music, setMusic] = useState ([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/albums/${id}`)
        .then((res) => {
            console.log(res.data);
            setMusic(res.data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const deleteAlbum = (albumId) => {
        axios.delete(`http://localhost:8000/api/albums/${albumId}`)
            .then((res) => {

                const noMoreAlbum = music.filter((music) => music._id !== albumId);
                setMusic(noMoreAlbum);
                navigate(`/dashboard`);
            })
            .catch((err) => console.log(err));
    }

    return(
        <div>
            <img src={music.coverArt} alt={music.coverArt}/>
            <p>Title: {music.title}</p>
            <p>Artist: {music.artist}</p>
            <p>Genre: {music.genre}</p>
            <p>Release Year: {music.releaseYear}</p>
            <button onClick={() => navigate(`/albums/edit/${music._id}`)}>Edit</button>
            <button onClick={() => deleteAlbum(music._id)}>Delete</button>
        </div>
    )

}

export default AlbumDetails;