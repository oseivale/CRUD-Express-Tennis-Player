// Require Mongoose
var mongoose = require('mongoose');

// Define my schema
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    first_name: {
        type: String,
        min: [1, 'First name cannot be empty'],
        required: [true, 'Please enter your first name']
    },
    last_name: {
        type: String,
        min: [1, 'Last name cannot be empty'],
        required: [true, 'Please enter your last name']
    },
    email: {
        type: String,
        min: [1, 'Email cannot be empty'],
        required: [true, 'Please enter your Email']
    },
    password: {
        type: String,
        min: [1, 'Password cannot be empty'],
        required: [true, 'Please enter your password']
    },
});

// Compile model from schema
var Player = mongoose.model('Player', PlayerSchema);

var player_one = new Player({ 
    first_name: 'Valerie', 
    last_name: 'Osei',
    email: 'valerie.osei@gmail.com',
    password: 'hello'
});

player_one.save(function (err) {
});

Player.create({ first_name: 'Valerie', 
                last_name: 'Osei',
                email: 'valerie.osei@gmail.com',
                password: 'hello'}, function (err, player_one) {
    
});

console.log(player_one);