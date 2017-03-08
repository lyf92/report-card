var judgeInfoModule = require('../app/judgeInfo');
var StudentContainer = require('../app/model/student_container').StudentContainer;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNewStudent(studentsInfo){
    console.log('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
    studentsInfo = inputStuInfo(studentsInfo);

    //return newStudentsInfo;
}
function inputStuInfo(studentsInfo){
    rl.on('line', function (input) {
        if (judgeInfoModule.judgeStuInfo(input)) {
            var newStudentsInfo = StudentContainer.init(input,studentsInfo);
            console.log('学生xxx的成绩被添加');
            //console.log(newStudentsInfo);
            return newStudentsInfo;
        }
        else {
            console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
            return inputStuInfo(studentsInfo);
        }
        rl.close();
    });
}

module.exports.addNewStudent = addNewStudent;
module.exports.inputStuInfo = inputStuInfo;
//addNewStudent([]);