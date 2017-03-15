class Report {
    constructor(studentsInfo) {
        this.studentsInfo = studentsInfo;
        this.averageOfAll = 0;
        this.medianOfAll = 0;
    }

    averageOfAllStudent() {
        var sum = 0;
        this.studentsInfo.forEach(function(e){
                sum += e.sumScore;
        });
        this.averageOfAll = this.studentsInfo.length === 0 ? 0 : sum/this.studentsInfo.length;
    }

    medianOfAllStudent(){
        if(this.studentsInfo.length === 0){
            this.medianOfAll = 0;
        }
        else if(this.studentsInfo.length === 1){
            this.medianOfAll = this.studentsInfo[0].sumScore;
        }
        else {
            var tmp = this.studentsInfo.sort(function (a, b) {
                return a.sumScore - b.sumScore;
            });

            this.medianOfAll = tmp[Math.floor(tmp.length / 2)].sumScore;
        }
    }
}

module.exports.Report = Report;
