import { Component, OnInit } from '@angular/core';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { candidateModel } from '../services/candidateModel';
import { ApicallsService } from '../services/apicalls.service';
import { expModel } from '../services/expModel';
import { educationModel } from '../services/educationModel';
import { recommendedJobsModel } from '../services/recommendedJobsModel';
import { jobsHistoryModel } from '../services/jobsHistoryModel';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  faPen=faPen
  candidateData:candidateModel[]=[];
  Data:[]=[];
  recommended_jobs:recommendedJobsModel[]=[];
  jobsHistory:jobsHistoryModel[]=[];
  recommendedJobsLength:any;
  jobsHistoryLength:any;
  jobMatch=[85,78,89,84,79];
  match='match';
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getprofile().subscribe(data=>{
      this.Data=JSON.parse(JSON.stringify(data))
      this.candidateData=JSON.parse(JSON.stringify(this.Data))
      console.log("this.candidateData")
      console.log(this.candidateData)
      this.recommended_jobs=JSON.parse(JSON.stringify(this.candidateData[0])).recommended_jobs;
      this.recommendedJobsLength=this.recommended_jobs.length;
      this.jobsHistory=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      this.jobsHistoryLength=this.jobsHistory.length;
      // this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      // console.log(this.appliedJobs.length)
    })
  }

}
