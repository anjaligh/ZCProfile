import { expModel } from "./expModel";
import { recommendedJobsModel } from "./recommendedJobsModel";
import { jobsHistoryModel } from "./jobsHistoryModel";
export class candidateModel{
    constructor(
    public first_name : string,
    public last_name:string,  
    public avatar:string,  
    public phone_number : string,
    public email: string,
    public location : string,
    public experience: expModel[],
    public recommended_jobs:recommendedJobsModel[],
    public previous_jobs_applied:jobsHistoryModel[]
    ){}
}