/**
 * Created by lyf on 17-3-14.
 */
let showReportModule = require('../public/show_report');
let StudentContainer = require('../model/student_container').StudentContainer;
let fs = require('fs');

function reportCardMain(req, res){
    res.render('create_report_card');
}

function showReport(req, res){
    let studentNo = req.body.stuno;

    let studentsInfo = [];
    let buf = new Buffer(1024);
    fs.open('../out', 'r+', (e, fd) => {
        if(e){
            throw e;
        }
        fs.readFile('../out', (e, data) => {
            if(e){
                throw e;
            }
            let allStudentInfo = data.toString().trim();
            if(data.length > 0){
                let all = allStudentInfo.split('\n');
                all.forEach((e) => {
                    studentsInfo = StudentContainer.init(e, studentsInfo);
                });
            }
            fs.closeSync(fd);
            let result = showReportModule.showReport(studentsInfo, studentNo);
            if(result === 'error'){
                res.render('show_report_err', {reportResult: '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），点击按钮提交'});
            }
            res.render('show_report_success', {reportResult: result});
        });
    });

}

function getStudent(){
    let studentsInfo = [];
    let buf = new Buffer(1024);
    fs.open('../out', 'r+', (e, fd) => {
        if(e){
            throw e;
        }
        fs.read(fd, buf, 0, buf.length, 0, (e, bytes) => {
            if(e){
                throw e;
            }
            if(bytes > 0){
                let allStudentInfo = buf.slice(0, bytes).toString().trim();
                let all = allStudentInfo.split('\n');
                all.forEach((e) => {
                    studentsInfo = StudentContainer.init(e, studentsInfo);
                });
            }
            fs.closeSync(fd);
            return studentsInfo;
        });
    });

}

module.exports.reportCardMain = reportCardMain;
module.exports.showReport = showReport;