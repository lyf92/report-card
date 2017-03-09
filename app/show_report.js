var judgeInfoModule = require('../app/judgeInfo');
var Report = require('../app/model/report').Report;

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
                + getSubject(student.scores, '编程') + '|' + student.average + '|' + student.sumScore + '\n';
        });

        result += '\n========================\n全班总分平均数：'
            + report.averageOfAll + '\n全班总分中位数：' + report.medianOfAll;

        return result;
    }
    return '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
}

function getSubject(scores, subject){
    var result = '|-';
    scores.forEach(function(e){
        if(e.subject === subject){
            result = '|' + e.score;
        }
    });
    return result;
}

function getStudentInfoByStuNo(studentsInfo,studentsNo){
    var stuInfo = [];
    var stuNo = studentsNo.split(', ');

    studentsInfo.forEach(function(e){
        if(stuNo.indexOf(e.sno.trim()) >= 0){
            stuInfo.push(e);
        }
    });

    return stuInfo;
}

module.exports.showReport = showReport;
module.exports.getSubject = getSubject;
module.exports.getStudentInfoByStuNo = getStudentInfoByStuNo;
