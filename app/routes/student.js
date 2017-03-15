/**
 * Created by lyf on 17-3-14.
 */
var judgeInfoModule = require('../public/judgeInfo');
var fs = require('fs');

function studentMain(req, res) {
    res.render('add_student');
}

function addStudent(req, res){
    var info = req.body.stuinfo;//req.params;
    var studentName = info.split(', ')[0];

    if(judgeInfoModule.judgeStuInfo(info)) {
        fs.open('../out', 'a', (e, fd) => {
            fs.write(fd, info + '\n', (e) => {
                if (e) {
                    throw e;
                }
                fs.closeSync(fd);
            });
        });
        res.render('add_student_success', {name: studentName});
    }
    else{
        res.render('add_student_err');
    }
}

module.exports.studentMain = studentMain;
module.exports.addStudent = addStudent;