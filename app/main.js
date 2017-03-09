var addNewStudentModule = require('../app/add_new_student');
var judgeInfoModule = require('../app/judgeInfo');
var showReportModule = require('../app/show_report');
var Report = require('../app/model/report').Report;

var status = 0;
var studentsInfo = [];

function myEval(cmd, context, filename, callback){
    callback(null, cmd);
}

function inputInfo(input){
    input = input.trim();

    switch(status){
        case 0:
            switch(input){
                case '1':
                    status = 1;
                    return '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
                    break;
                case '2':
                    status = 3;
                    return '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
                    break;
                default:
            }
            break;
        case 1:
            status = 2;
            console.log(addNewStudentModule.addNewStudent(studentsInfo, input));
            return '学生xxx的成绩被添加\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            break;
        case 2:
            switch(input){
                case '1':
                    status = 1;
                    return '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
                    break;
                case '2':
                    status = 3;
                    return '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
                    break;
                case '3':
                    return '.exit';
                    break;
                default:
            }
            break;
        case 3:
            if(judgeInfoModule.judgeStuNo(input)){
                status = 2;
                var report = new Report(studentsInfo);
                report.averageOfAllStudent();
                report.medianOfAllStudent();
                return showReportModule.showReport(report, input);
            }
            else{
                return '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
            }
            break;
        default:
    }


    /*switch(input){
        case '1':
            addNewStudentModule.addNewStudent(studentsInfo);
            break;
        case '2':
            break;
        default:
    }*/
}

function main(){
    console.log("1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：");

    const repl = require('repl');
    const r = repl.start({
        //ptompt: '',
        eval: myEval,
        writer: inputInfo
    });
}

main();