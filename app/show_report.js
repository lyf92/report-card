function showReport(report,studentsNo){
    var result = '成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n';
    var students = report.studentsInfo;
    var stusNo = studentsNo.split(',');
    students.forEach(function(student){
        if(stusNo.indexOf(student.sno) >= 0) {
            result += student.name + getSubject(student.scores, '数学')
                + getSubject(student.scores, '语文') + getSubject(student.scores, '英语')
                + getSubject(student.scores, '编程') + '|' + student.average + '|' + student.sumScore;
        }
    });

    result = result + '\n========================\n全班总分平均数：' + report.averageOfAll + '\n全班总分中位数：' + report.medianOfAll;
    return result;
}

function getSubject(scores, subject){
    var result = '|-';
    scores.forEach(function(e){
        if(e.subject === subject){
            result = '|' + e.score;
        }
    });
    return result;

    /*return scores.map(function(a){
        return a.score;
    }).join('|');*/
}

module.exports.showReport = showReport;
module.exports.getSubject = getSubject;
