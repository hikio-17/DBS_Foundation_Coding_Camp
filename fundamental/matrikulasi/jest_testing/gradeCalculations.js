function averageExams(valueExam) {
    const numberValidation = valueExam.every((ele) => typeof ele === 'number');

    if (!numberValidation) {
        return 'please input number';
    };

    let sum = valueExam.reduce((acc, val) => acc + val, 0);

    return sum / valueExam.length;
};

function isStudentPassExam(valueExam, name) {
    let minValue = 75;

    let average = averageExams(valueExam);

    if (average > minValue) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    };
};

module.exports = {
    averageExams,
    isStudentPassExam,
}