var judgeInfoModule = require('./judgeInfo');
var Report = require('../model/report').Report;

function showReport(studentsInfo,studentsNo){
    if(judgeInfoModule.judgeStuNo(studentsNo)){
        var stuInfo = getStudentInfoByStuNo(studentsInfo,studentsNo);

        var report = new Report(stuInfo);
        report.averageOfAllStudent();
        report.medianOfAllStudent();

        var result = '成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n';

        stuInfo.forEach(function(student){
            result += student.name + getSubject(student.scores, '数学')
                + getSubject(student.scores, '语文') + getSubject(student.scores, '英语')
                + getSubject(student.scores, '编程') + '|' + Math.round(student.average*10)/10 + '|' + Math.round(student.sumScore*10)/10 + '\n';
        });

        result += '========================\n全班总分平均数：'
            + Math.round(report.averageOfAll*10)/10 + '\n全班总分中位数：' + Math.round(report.medianOfAll*10)/10;

        return result;
    }
    return 'error';
}

function getSubject(scores, subject){
    var result = '|-';
    scores.forEach(function(e){
        if(e.subject === subject){
            result = '|' + Math.round(e.score * 10)/10;
        }
    });
    return result;
}

function getStudentInfoByStuNo(studentsInfo,studentsNo){
    studentsInfo.reverse();
    var stuInfo = [];
    var stuInfoNo = [];
    var stuNo = studentsNo.split(', ');

    studentsInfo.forEach((e) => {
        if(stuNo.indexOf(e.sno.trim()) >= 0 && stuInfoNo.indexOf(e.sno.trim()) === -1){
            stuInfoNo.push(e.sno.trim());
            stuInfo.push(e);
        }
    });
    return stuInfo;
}

module.exports.showReport = showReport;
module.exports.getSubject = getSubject;
module.exports.getStudentInfoByStuNo = getStudentInfoByStuNo;
