import { panelModel } from "./panelModel";
import { questionsModel } from "./questionsModel";
export class assessmentModel{
    constructor(
    public stage_name : String,
    public order:Number,  
    public status:String,
    public venue:String,
    public time:Date,
    public interview_panel:panelModel[],
    public questions: questionsModel[]
    ){}
}