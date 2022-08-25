const  mongoose = require('mongoose')

const MusicSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true,"An album title is required"],
            maxlength:[40, "The title length should be no more than 40 characters"]
        },
        genre: {
            type: String,
            required: [true,"An album genre is required"],
            enum: [
                'Hip Hop',
                'Rap',
                'Rock',
                'Pop',
                'Country',
                'Electronic',
                'Jazz',
                'Heavy Metal',
                'Dance',
                'Funk',
                'Reggae',
                'Techno',
                'Disco',
                'Trance',
                'Electro',
                'House',
                'Dubstep',
                'Grunge',
                'Classical',
            ],
        },
        coverArt: {
            type: String,
            required: [true, "Album Cover Art is required"],
        },
        artist: { 
            type: String,
            required: [true, "An Artist is required"],
            minlength: [2, "The artist must have at least 2 characters"]
    },

        releaseYear: {
        type: Number,
        min:[1889, "Release Year Required"]
        },
    },
    
    { timestamps: true, }
);

const Music = mongoose.model('Music', MusicSchema);

module.exports = Music;