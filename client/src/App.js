import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AlbumList from './components/AlbumList'
import NewAlbum from './components/NewAlbum'
import AlbumDetails from './components/AlbumDetails'
import EditAlbum from './components/EditAlbum'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/dashboard" element={ <AlbumList /> } />
              <Route path="/create" element={ <NewAlbum /> } />
              <Route path="/albums/:id" element={ <AlbumDetails /> } />
              <Route path="/albums/edit/:id" element={ <EditAlbum />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
