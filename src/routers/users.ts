
import * as express from 'express';
let router = express.Router();
router.all('/list', function(req, res) {
    console.log();
    res.send('hello 我是typescript版本的Express');
});
export = router;