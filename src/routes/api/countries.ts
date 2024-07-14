import express from 'express';
import logger from '../../utilities/logger';

const countries = express.Router();

countries.get('/', logger,  (req, res) => {
    res.send('Countries');
})

export default countries;