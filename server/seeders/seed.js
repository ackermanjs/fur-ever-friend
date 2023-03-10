/// This is going to be the connection part
const db = require('../config/connection');
const { User, Animals } = require('../models');
const catSeeds = require('./catsSeeds.json');
const dogSeeds = require('./dogsSeeds.json');
