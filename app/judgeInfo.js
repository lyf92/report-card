function judgeStuInfo(stuInfo){
    //var r = '\p{Han}*, [0-9]{5}, \p{Han}*, \d*, \p{Han}*:[1]?\d{1,2}(, \p{Han}*:[1]?\d{1,2})*$';

    var re = /[\u4e00-\u9fff]*, [0-9]{5}, [\u4e00-\u9fa5]*, \d*, [\u4e00-\u9fa5]*:[1]?\d{1,2}(, [\u4e00-\u9fa5]*:[1]?\d{1,2})*$/g;

    return re.test(stuInfo);
}

function judgeStuNo(stuNo){
    var re = /^[0-9]{5}(, [0-9]{5})*$/g;

    return re.test(stuNo);
}

module.exports.judgeStuInfo = judgeStuInfo;
module.exports.judgeStuNo = judgeStuNo;