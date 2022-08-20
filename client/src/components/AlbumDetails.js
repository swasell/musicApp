import {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

const AlbumDetails = () => {

    const[music, setMusic] = useState ({})
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

    const editAlbum = () => {
        axios.put(`http://localhost:8000/api/albums/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate(`/albums/edit/${music._id}`);
        })
        .catch((err) => console.log(err));
    }

    const deleteAlbum = (AlbumId) => {
        axios.delete(`http://localhost:8000/api/albums/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate('/dashboard');
        })
        .catch((err) => console.log(err));
    };

    return(
        <div>
            <img src={music.coverArt} alt={music.coverArt}/>
            <p>Title: {music.title}</p>
            <p>Artist: {music.artist}</p>
            <p>Genre: {music.genre}</p>
            <p>Release Year: {music.releaseYear}</p>
            <button onclick={editAlbum}>Edit</button>
            <button onclick={deleteAlbum}>Delete</button>
        </div>
    )

}

export default AlbumDetails;