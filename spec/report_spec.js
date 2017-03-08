var Report = require('../app/model/report').Report;
var Student = require('../app/model/student').Student;

describe("report class", function(){
    xit("should return average", function(){
        var expectValue = 80;

        var stu1 = new Student('z', '00001', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}, {subject:'数学', score:90}]);//250
        stu1.calculateSumScore();
        stu1.calculateAverage();

        var stu2 = new Student('zz', '00001', 'q', 2, [{subject:'语文', score:80}, {subject:'数学', score:60}, {subject:'数学', score:90}]);//230
        stu2.calculateSumScore();
        stu2.calculateAverage();

        var stu3 = new Student('zz', '00001', 'q', 2, [{subject:'语文', score:80}, {subject:'数学', score:70}, {subject:'数学', score:90}]);//240
        stu3.calculateSumScore();
        stu3.calculateAverage();

        var report = new Report([stu1, stu2, stu3]);

        report.averageOfAllStudent()
        var result = report.averageOfAll;
        expect(result).toBe(expectValue);
    })

    it("should return median", function(){
        var expectValue = 240;

        var stu1 = new Student('z', '00001', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}, {subject:'数学', score:90}]);//250
        stu1.calculateSumScore();
        stu1.calculateAverage();

        var stu2 = new Student('zz', '00001', 'q', 2, [{subject:'语文', score:80}, {subject:'数学', score:60}, {subject:'数学', score:90}]);//230
        stu2.calculateSumScore();
        stu2.calculateAverage();

        var stu3 = new Student('zz', '00001', 'q', 2, [{subject:'语文', score:80}, {subject:'数学', score:70}, {subject:'数学', score:90}]);//240
        stu3.calculateSumScore();
        stu3.calculateAverage();

        var report = new Report([stu1, stu2, stu3]);

        report.medianOfAllStudent()
        var result = report.medianOfAll;
        expect(result).toBe(expectValue);
    })
});