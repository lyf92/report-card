var showReportModule = require('../app/show_report');
describe("show message", function(){
    it("should return |66", function(){
        var expectT = '|66';
        var scores = [ { subject: '语文', score: 66 },
            { subject: '数学', score: 68 },
            { subject: '英语', score: 70 } ];
        var result = showReportModule.getSubject(scores,'数学');

        expect(result).toBe(expectT);
    });
});