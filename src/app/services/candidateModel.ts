import { expModel } from "./expModel";
export class candidateModel{
    constructor(
    public first_name : String,
    public last_name:String,  
    public avatar:String,  
    public phone_number : String,
    public email: String,
    public location : String,
    public experience: expModel[]
    // public education : Array,
    // public documents:Array,
    // public recommended_jobs: Array
    // public comments :Object
    ){}
}