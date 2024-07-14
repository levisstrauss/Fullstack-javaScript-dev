import express from 'express';
import logger from '../../utilities/logger';

const continents = express.Router();

continents.get('/', logger,  (req, res) => {
    res.send('Continents');
})

export default continents;