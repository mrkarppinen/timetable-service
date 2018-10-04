const router = require('express').Router();
const Cache = require("mem-cache");
const cache = new Cache();
const TimetableClient = require("timetable-client");
const timetableClient = new TimetableClient();
const { formattedDate } = require('../../lib/date-utils');
const ttl = (1000 * 60 * 60) * 12; // cache ttl in milliseconds 

const getTimetable =  async (stop) => {
    const date = formattedDate();
    const key =  `${stop}_${date}`;
    let timetable = cache.get(key);

    if (!timetable){
        timetable = await timetableClient.get(stop, date);
        cache.set(key, timetable, ttl);
    }

    return timetable;
}; 


router
.route('/line')
.get(async (req, res) => {
    const stop = req.query.stop;

    if (!stop)
        return res.status(400).json({err: 'Please, provide stop.' });  


    const promises = stop.split(',').map( stop => getTimetable(stop) );
    const timetables = await Promise.all(promises);
        
    res.json({timetables});

});

module.exports = router;