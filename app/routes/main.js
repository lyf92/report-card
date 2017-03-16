/**
 * Created by lyf on 17-3-14.
 */
var express = require('express');
var bodyParser = require('body-parser');
var studentModule = require('./student');
var reportModule = require('./report');

var app = express();

app.set('views', '../views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('../public'));

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/add_student', studentModule.studentMain);

app.post('/add_submit', studentModule.addStudent);

// app.get('/add_student_err', (req, res) => {
//     res.render('add_student_err');
// });

app.get('/main_with_quit', (req, res) => {
    res.render('main_with_quit');
});

app.get('/create_report_card', reportModule.reportCardMain);

app.post('/number_submit', reportModule.showReport);

// app.post('/show_report_err', (req, res) => {
//     res.render('show_report_err');
// });


app.listen(30002, () => {
    console.log('Ready');
});