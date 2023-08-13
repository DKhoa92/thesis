export class QuestionModel {
    constructor(id, question, answers, type) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.type = type;
    }
}