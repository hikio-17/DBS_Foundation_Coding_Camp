const { averageExams, isStudentPassExam } = require('../gradeCalculations');

describe('grade calcultaion', () => {
    test('it should return exact average', () => {
        const valueExams = [80, 80, 80, 80];

        expect(averageExams(valueExams)).toEqual(80);
    });

    test('it should return exams passed status ', () => {
        const valueExams = [80, 80, 80, 80];

        expect(isStudentPassExam(valueExams, 'Hikma')).toEqual(true);
    });

    test('it should return exams fail status', () => {
        const valueExams = [40, 40, 40, 40];

        expect(isStudentPassExam(valueExams, 'Fajri')).toEqual(false);
    });

    test('it should return value if not valid number', () => {
        const valueExam = [1, false, [], 5];

        expect(averageExams(valueExam)).toEqual('please input number');
    });
});