var addNewStudentModule = require('public/add_new_student');
var showReportModule = require('public/show_report');

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
                    return '\n\n1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：';
            }
            break;
        case 1:
            status = 2;
            var result = addNewStudentModule.addNewStudent(studentsInfo, input);
            if(result === ''){
                status = 1;
                return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：';
            }
            else{
                studentsInfo = result;
                return '学生' + input.split(',')[0] + '的成绩被添加\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            }
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
                    process.exit();
                    break;
                default:
                    return '\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            }
            break;
        case 3:
            status = 2;
            console.log(showReportModule.showReport(studentsInfo, input));
            return '\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            break;
        default:
            return '\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
    }
}
function main(){
    console.log("1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：");

    const repl = require('repl');
    const r = repl.start({
        eval: myEval,
        writer: inputInfo
    });
}
main();


//张三, 00001, 汉族, 2, 语文:66, 数学:68, 英语:70, 编程:90
//李四, 00002, 汉族, 2, 语文:80, 数学:79, 英语:92, 编程:78
//王五, 00003, 汉族, 3, 语文:100, 数学:64, 英语:71, 编程:61