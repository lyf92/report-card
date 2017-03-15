var showReportModule = require('../app/public/show_report');
var Student = require('../app/model/student').Student;

describe("getSubject", function(){
    it("should return |68", function(){
        var expectT = '|68';
        var scores = [ { subject: '语文', score: 66 },
            { subject: '数学', score: 68 },
            { subject: '英语', score: 70 } ];
        var result = showReportModule.getSubject(scores,'数学');

        expect(result).toBe(expectT);
    });

    it("should return |-", function(){
        var expectT = '|-';
        var scores = [ { subject: '语文', score: 66 },
            { subject: '数学', score: 68 },
            { subject: '英语', score: 70 } ];
        var result = showReportModule.getSubject(scores,'物理');

        expect(result).toBe(expectT);
    });
});

describe("getStudentInfoByStuNo", function(){
    it("should return 00001", function(){
        var expectT = 'z';

        var stu1 = new Student('z', '00001', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}, {subject:'数学', score:90}]);//250
        var stu2 = new Student('zz', '00002', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}, {subject:'数学', score:90}]);//250

        var students = [stu1, stu2];
        var result = showReportModule.getStudentInfoByStuNo(students, '00001');

        expect(result[0].name).toBe(expectT);
    });
});