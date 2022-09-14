import { expModel } from "./expModel";
import { recommendedJobsModel } from "./recommendedJobsModel";
import { jobsHistoryModel } from "./jobsHistoryModel";
export class candidateModel{
    constructor(
    public first_name : String,
    public last_name:String,  
    public avatar:String,  
    public phone_number : String,
    public email: String,
    public location : String,
    public experience: expModel[],
    public recommended_jobs:recommendedJobsModel[],
    public previous_jobs_applied:jobsHistoryModel[]
    ){}
}