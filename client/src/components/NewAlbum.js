import { useState } from 'react'
import axios from'axios'
import { useNavigate } from 'react-router-dom';
import './NewAlbum.css'

const NewAlbum = () => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [coverArt, setCoverArt] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(0);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/albums', {
            title,
            genre,
            coverArt,
            artist,
            releaseYear,
        })
        .then(res => {
            console.log(res)
            console.log(res.data);
            setTitle('');
            setGenre('');
            setCoverArt('');
            setArtist('');
            setReleaseYear('');
            navigate('/');
        })
        .catch((err) => setErrors(err.response.data.errors))
    };

    return(
        <div className= "form-container">
            <form onSubmit= {handleSubmit} className="create-form">
                <div>
                    <label>Title:</label>
                    <input type="text" name="title"
                    onChange= {(e) => setTitle(e.target.value)}/>
                    {errors.title ? <p className="text-danger">{errors.title.message}</p> : null }
                </div>
                <br/>
                <div>
                    <label>Artist:</label>
                    <input type= "text" name="artist"
                    onChange= {(e) => setArtist(e.target.value)}/>
                    {errors.artist ? <p className="text-danger">{errors.artist.message}</p> : null }
                </div>
                <br/>
                <div>
                    <label>Genre:</label>
                    <select name="genre" 
                    onChange= {(e) => setGenre(e.target.value)}>
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
                    {errors.genre ? <p className="text-danger">{errors.genre.message}</p> : null }
                </div>
                <br/>
                <div>
                    <label>Cover Art:</label>
                    <input type= "text" name="coverArt"
                    onChange= {(e) => setCoverArt(e.target.value)}/>
                    {errors.coverArt ? <p className="text-danger">{errors.coverArt.message}</p> : null }
                </div>
                <br/>
                <div>
                    <label>Release Year:</label>
                    <input type= "number" name="releaseYear"
                    onChange= {(e) => setReleaseYear(e.target.value)}/>
                    {errors.releaseYear ? <p className="text-danger">{errors.releaseYear.message}</p> : null }
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <img src={'https://www.rollingstone.com/wp-content/uploads/2019/12/RapAlbums.jpg?w=910&h=511&crop=1'} alt="Album Collage"></img>
        </div>


    )
}

export default NewAlbum;