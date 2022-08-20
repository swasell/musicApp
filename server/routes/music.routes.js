const MusicController = require('../controllers/music.controllers');

module.exports = (app) => {
    app.get('/api/albums', MusicController.getAllMusic);
    app.get('/api/albums/:id', MusicController.getOneMusic)
    app.post('/api/albums', MusicController.createMusic);
    app.put('/api/albums/edit/:id', MusicController.updateMusic);
    app.delete('/api/albums/:id', MusicController.deleteMusic);

}