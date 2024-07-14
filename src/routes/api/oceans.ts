import express from 'express';
import logger from '../../utilities/logger';

const oceans = express.Router();

oceans.get('/oceans', (req, res) => {
    res.send('Oceans');
})

export default oceans;