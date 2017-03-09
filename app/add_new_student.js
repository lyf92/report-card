var judgeInfoModule = require('../app/judgeInfo');
var StudentContainer = require('../app/model/student_container').StudentContainer;

function addNewStudent(studentsInfo,input){
    if (judgeInfoModule.judgeStuInfo(input)) {
        var newStudentsInfo = StudentContainer.init(input,studentsInfo);
        return newStudentsInfo;
    }
    return '';
}

module.exports.addNewStudent = addNewStudent;
