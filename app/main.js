var addNewStudentModule = require('../app/add_new_student');

function main(){
    console.log("1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：");

    var studentsInfo = [];
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', function (input) {
        rl.close();
        switch(input){
            case '1':
                addNewStudentModule.addNewStudent(studentsInfo);
                console.log('1234' + studentsInfo);
                break;
            case '2':
                break;
            default:
                rl.close();
        }
    });
}

main();