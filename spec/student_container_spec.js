var Student = require('../app/model/student').Student;
var StudentContainer = require('../app/model/student_container').StudentContainer;

describe("student container", function(){
    it("should return student info", function(){
        var student = new Student('张三', '00001', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}]);

        var studentContainer = StudentContainer.init('张三, 00001, 汉族, 2, 语文:66, 数学:68, 英语:70',[]);

        expect(student.name).toBe(studentContainer[0].name);
    });
});
