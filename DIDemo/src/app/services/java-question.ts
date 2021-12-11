import { IQuestion } from "./IQuestion";

export class JavaQuestion extends IQuestion {
    askQuestion(): string {
        return "What is JAVA?";
    }
}