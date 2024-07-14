import express from 'express';
import teachers from './api/teachers';
import students from './api/students';
import continents from './api/continents';
import countries from './api/countries';
import oceans from './api/oceans';

const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('main api route');
})

routes.use('/teachers', teachers);
routes.use('/students', students);
routes.use('/continents', continents);
routes.use('/countries', countries);
routes.use('/oceans', oceans);

export default routes;