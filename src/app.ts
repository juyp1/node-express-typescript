import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as router from './routers/users';
const app =express();
app.use(bodyParser.json());

//query string类型的代码
app.use(bodyParser.urlencoded({
    extended: false
}));
//静态资源
app.use(express.static(__dirname + '/public'));
app.use('/user', router);
app.listen(3000)

