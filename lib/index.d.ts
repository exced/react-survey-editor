// React Survey Editor
// https://github.com/exced/react-survey-editor

import * as React from "react";

declare module "react-survey-editor" {

    enum QuestionEnum {
        QUESTION_SWITCH = "QUESTION_SWITCH",
        QUESTION_TEXT = "QUESTION_TEXT",
        QUESTION_TEXT_AREA = "QUESTION_TEXT_AREA",
        QUESTION_RATE = "QUESTION_RATE",
        QUESTION_DATE = "QUESTION_DATE",
        QUESTION_DISCRETE_SCALE = "QUESTION_DISCRETE_SCALE",
        QUESTION_NUMERICAL_SCALE = "QUESTION_NUMERICAL_SCALE",
        QUESTION_CHOICES = "QUESTION_CHOICES",
        QUESTION_IMAGE = "QUESTION_IMAGE",
        QUESTION_RANK = "QUESTION_RANK",
    }

    interface Question {
        id: string,
        type: QuestionEnum,
        title: string,
        mandatory: boolean,
        visibleIf: string,
        tooltip: string,
        checkedChildren?: string,
        uncheckedChildren?: string,
        autosize?: boolean,
        min?: number,
        max?: number,
        step?: number,
        maxSize?: number,
        choices?: Array<string>,
    }

    interface Page {
        id: string,
        title: string,
        visibleIf: string,
        questions: Array<Question>
    }

    interface Survey {
        id: string,
        title: string,
        description: string,
        responseTime: string,
        active: boolean,
        dates: Array<string>,
        password: string,
        link: string,
        image: string,
        pages: Array<Page>
    }

    interface SurveyEditorProps extends React.Props {
        onExport: (value: object) => void;
        initialValue?: Survey;
        locale?: string;
    }

    export default class SurveyEditor extends React.Component<SurveyEditorProps, {}> {

    }

    // TODO
    export class Reducers extends any {

    }
}
