const Music = require('../models/music.models.js');

module.exports = {
    createMusic: (req, res) => {
        Music.create(req.body)
            .then(newMusic => res.json(newMusic))
            .catch(err => res.status(400).json(err));
    },

    getAllMusic: (req, res) => {
        Music.find({})
            .then(allMusic => {
                console.log(allMusic);
                res.json(allMusic);
        })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
        })
    },

    getOneMusic: (req, res) => {
        Music.findOne({ _id: req.params.id })
            .then(oneMusic => res.json(oneMusic))
            .catch(err => res.status(400).json(err))
    },

    updateMusic: (req, res) => {
        Music.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators: true})
        .then(updatedMusic => res.json(updatedMusic))
        .catch(err => res.status(400).json(err))
    },

    deleteMusic: (req, res) => {
        Music.deleteOne({ _id: req.params.id })
            .then(deleteMusic => res.json(deleteMusic))
            .catch(err => res.status(400).json(err))
    }
}