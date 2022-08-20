import { useState } from 'react'
import axios from'axios'
import { useNavigate } from 'react-router-dom';

const NewAlbum = (props) => {

    const { music, setMusic } = props;
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [coverArt, setCoverArt] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
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
            setMusic([...music,res.data])
            setTitle('');
            setGenre('');
            setCoverArt('');
            setArtist('');
            setReleaseYear('');
            navigate('/dashboard');
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <form onSubmit= {handleSubmit} className="create-form">
                <div>
                    <label>Title:</label>
                    <input type="text" name="title"
                    onchange= {(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Artist:</label>
                    <input type= "text" name="artist"
                    onchange= {(e) => setArtist(e.target.value)}/>
                </div>
                <div>
                    <label>Genre:</label>
                    <select name="genre" 
                    onchange= {(e) => setGenre(e.target.value)}>
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
                <div>
                    <label>Cover Art:</label>
                    <input type= "text" name="coverArt"
                    onchange= {(e) => setCoverArt(e.target.value)}/>
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type= "number" name="releaseYear"
                    onchange= {(e) => setReleaseYear(e.target.value)}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>

    )
}

export default NewAlbum;