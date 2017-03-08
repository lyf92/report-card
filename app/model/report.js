class Report {
    constructor(studentsInfo) {
        this.studentsInfo = studentsInfo;
        this.averageOfAll = 0;
        this.medianOfAll = 0;
    }

    averageOfAllStudent() {
        var sum = 0;
        this.studentsInfo.forEach(function(e){
            sum += e.average;
        });
        this.averageOfAll = sum/this.studentsInfo.length;
    }

    medianOfAllStudent(){
        var tmp = this.studentsInfo.sort(function(a,b){
            return a.sumScore - b.sumScore;
        });

        this.medianOfAll = tmp[Math.ceil(tmp.length/2) - 1].sumScore;
    }
}

module.exports.Report = Report;
