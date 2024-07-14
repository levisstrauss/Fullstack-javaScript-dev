import express from 'express';
import logger from '../../utilities/logger';

const countries = express.Router();

countries.get('/countries', logger,  (req, res) => {
    res.send('Countries');
})

export default countries;