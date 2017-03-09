var judgeInfoModule = require('../app/judgeInfo');
var StudentContainer = require('../app/model/student_container').StudentContainer;

function addNewStudent(studentsInfo,input){
    if (judgeInfoModule.judgeStuInfo(input)) {
        var newStudentsInfo = StudentContainer.init(input,studentsInfo);
        //return '学生xxx的成绩被添加\n\n1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
        return newStudentsInfo;
    }
    else {
        return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：';
    }
}

module.exports.addNewStudent = addNewStudent;
