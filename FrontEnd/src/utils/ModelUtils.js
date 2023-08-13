import { QUESTION_TYPE } from "."
import { MultipleChoiceQuestionModel } from "../models"

export default class ModelUtils {
    static ConvertDataToMCQuestions = (data) => {
        let arrModel = [];
        data.forEach(item => {
            let question = item.question;
            let type = question.type;
            let model = null;

            switch (type) {
                case QUESTION_TYPE.MULTIPLE_CHOICES:
                    let questionData = JSON.parse(question.data);
                    model = new MultipleChoiceQuestionModel(
                        question.id,
                        questionData.question,
                        questionData.answers,
                        question.type
                    );
            }
            model && arrModel.push(model);
        });
        return arrModel;
    }
}