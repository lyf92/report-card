var judgeInfoModule = require('../app/public/judgeInfo');

describe("judgeStuInfo test", function(){

    it("should return true", function(){
        var expectText = true;

        var stuInfo = '张三, 00001, 汉族, 2, 语文:66, 数学:68, 英语:70';

        var result = judgeInfoModule.judgeStuInfo(stuInfo);

        expect(result).toBe(expectText);
    });

    it("should return false", function(){
        var expectText = false;

        var stuInfo = '张三, 00001, 汉族,  2, 语文:66, 数学:68, 英语:70';

        var result = judgeInfoModule.judgeStuInfo(stuInfo);

        expect(result).toBe(expectText);
    });
});

describe("judgeStuNo test", function(){

    it("should return true", function(){
        var expectText = true;

        var stuNo = '00001, 00002, 00003';

        var result = judgeInfoModule.judgeStuNo(stuNo);

        expect(result).toBe(expectText);
    });

    it("should return false", function(){
        var expectText = false;

        var stuNo = '00001, 00002, 00003, a';

        var result = judgeInfoModule.judgeStuNo(stuNo);

        expect(result).toBe(expectText);
    });
});