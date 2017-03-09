var Student = require('../app/model/student').Student;

describe("student test:sum score of one", function(){
    
    it("should return 250", function(){
        var expectText = 250;

        var student = new Student('z', '00001', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}, {subject:'数学', score:90}]);
        
        student.calculateSumScore();
        
        var result = student.sumScore;

        expect(result).toBe(expectText);
    });
});

describe("student test:average score of one", function(){
    
    it("should return 80", function(){
        var expectText = 80;

        var student = new Student('z', '00001', 'q', 2, [{subject:'语文', score:70}, {subject:'数学', score:90}]);
        
        student.sumScore = 160;

        student.calculateAverage();
        
        var result = student.average;

        expect(result).toBe(expectText);
    });
});