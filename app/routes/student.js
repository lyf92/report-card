/**
 * Created by lyf on 17-3-14.
 */
let judgeInfoModule = require('../public/judgeInfo');
let StudentContainer = require('../model/student_container').StudentContainer;
let fs = require('fs');

function studentMain(req, res) {
    res.render('add_student');
}

function addStudent(req, res){
    var info = req.body.stuInfo;//req.params;
    var studentName = info.split(', ')[0];
    var studentNo = info.split(', ')[1];
    var flag = 0;

    if(judgeInfoModule.judgeStuInfo(info)) {
        let allStudents = [];
        let data = fs.readFileSync('../out')

        data = data.toString().trim();
        allStudents = data.split('\n');

        allStudents.forEach((e, i) => {
            if(e.split(', ')[1] === studentNo){
                allStudents[i] = flag === 0 ? info : "";
                flag = 1;
            }
        });
        if(flag === 0){
            allStudents.push(info);
        }

        fs.open('../out', 'w', (e, fd) => {
            fs.write(fd, allStudents.join('\n'), (e) => {
                if (e) {
                    throw e;
                }
                fs.closeSync(fd);
            });
        });
        res.send({name: studentName});
    }
    else{
        res.send('error');
    }
}

function updateStudent(req, res){
    res.render('update_student');
}

function getAllStudent(req, res){
    let all = [];
    let studentsInfo = [];
    let data = fs.readFileSync('../out')

    data = data.toString().trim();
    all = data.split('\n');

    all.forEach((e) => {
        studentsInfo = StudentContainer.init(e, studentsInfo);
    });

    res.send(studentsInfo);
}

function deleteStudent(req, res){
    let sno = req.body.sno;

    let allStudents = [];
    let data = fs.readFileSync('../out')

    data = data.toString().trim();
    allStudents = data.split('\n');

    allStudents.forEach((e, i) => {
        if(e.split(', ')[1] === sno){
            allStudents[i] = "";
        }
    });

    fs.open('../out', 'w', (e, fd) => {
        fs.write(fd, allStudents.join('\n').trim(), (e) => {
            if (e) {
                throw e;
            }
            fs.closeSync(fd);
        });
    });
    res.send('y');
}

module.exports.studentMain = studentMain;
module.exports.addStudent = addStudent;
module.exports.updateStudent = updateStudent;
module.exports.getAllStudent = getAllStudent;
module.exports.deleteStudent = deleteStudent;