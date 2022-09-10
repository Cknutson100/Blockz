import express from 'express';
import logger from 'jet-logger';


const router = express.Router();

/* Home Page */
router.get('*', function(req, res, next) {
    return res.sendFile('index.html', { root: __dirname + "/../build" });
});

export default router;
