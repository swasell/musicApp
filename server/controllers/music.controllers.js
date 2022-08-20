const Music = require('../models/music.models.js');

module.exports = {
    createMusic: (req, res) => {
        Music.create(req.body)
            .then(newMusic => res.json(newMusic))
            .catch(err => res.json(err));
    },

    getAllMusic: (req, res) => {
        Music.find({})
            .then(allMusic => {
                console.log(allMusic);
                res.json(allMusic);
        })
            .catch((err) => {
                console.log(err)
                res.json(err)
        })
    },

    getOneMusic: (req, res) => {
        Music.findOne({ _id: req.params.id })
            .then(oneMusic => res.json(oneMusic))
            .catch(err => res.json(err))
    },

    updateMusic: (req, res) => {
        Music.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
        .then(updatedMusic => res.json(updatedMusic))
        .catch(err => res.json(err))
    },

    deleteMusic: (req, res) => {
        Music.deleteOne({ _id: req.params.id })
            .then(deleteMusic => res.json(deleteMusic))
            .catch(err => res.json(err))
    }
}