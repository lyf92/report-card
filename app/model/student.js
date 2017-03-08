class Student{
    constructor(name, sno, nation, kclass, scores){
        this.name = name;
        this.sno = sno;
        this.nation = nation;
        this.kclass = kclass;
        this.scores = scores;
        this.average = 0;
        this.sumScore = 0;
    }

    calculateSumScore(){
        var tmp = 0;
        this.scores.forEach(function(e){
            tmp += e.score;
        });
        this.sumScore = tmp;
        /*this.sumScore = this.scores.reduce(function(a, b){
            return a.score + b.score;
        });*/
    }

    calculateAverage(){
        this.average = this.sumScore/this.scores.length;
    }
}

module.exports.Student = Student;