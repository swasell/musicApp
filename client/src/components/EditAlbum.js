import { useState, useEffect } from 'react';
import axios from'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditAlbum.css'

const EditAlbum = () => {
    
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [coverArt, setCoverArt] = useState('');
    const [artist, setArtist] = useState('');
    const [releaseYear, setReleaseYear] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.put(`http://localhost:8000/api/albums/edit/${id}`)
        .then((res) => {
            console.log(res.data)
            setTitle(res.data.title);
            setGenre(res.data.genre);
            setCoverArt(res.data.coverArt);
            setArtist(res.data.artist);
            setReleaseYear(res.data.releaseYear);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/albums/edit/${id}`, {
            title,
            genre,
            coverArt,
            artist,
            releaseYear,
        })
        .then((res) => {
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => console.log(err));
    };

    return(
        <div className="edit-container">
            <form className="edit-form" onSubmit= {handleSubmit}>
            <div>
                <label>Title: </label>
                <input type= "text" value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <br/>
            <div>
                <label>Artist: </label>
                <input type= "text" value={artist} 
                onChange={(e) => setArtist(e.target.value)} />
            </div>
            <br/>
            <div>
                <label>Genre: </label>
                <select value={genre} name="genre" 
                onChange={(e) => setGenre(e.target.value)}>
                    <option>Select Genre</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Rap">Rap</option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Country">Country</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Heavy Metal">Heavy Metal</option>
                    <option value="Dance">Dance</option>
                    <option value="Funk">Funk</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Techno">Techno</option>
                    <option value="Disco">Disco</option>
                    <option value="Trance">Trance</option>
                    <option value="Electro">Electro</option>
                    <option value="House">House</option>
                    <option value="Dubstep">Dubstep</option>
                    <option value="Grunge">Grunge</option>
                    <option value="Classical">Classical</option>
                </select>
            </div>
            <br/>
            <div>
                <label>Cover Art: </label>
                <input type= "text" value={coverArt} 
                onChange={(e) => setCoverArt(e.target.value)} />
            </div>
            <br/>
            <div>
                <label>Release Year: </label>
                <input type= "number" value={releaseYear} 
                onChange={(e) => setReleaseYear(e.target.value)} />
            </div>
            <br/>
            <button>Update</button>
        </form>
        <img src={'https://d31xsmoz1lk3y3.cloudfront.net/games/images/de16d2c9d71378b732322fa91674de8d.jpg'} alt="Greatest Albums"></img>
    </div>
    );
};

export default EditAlbum;