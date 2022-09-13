import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../services/apicalls.service';
import { candidateModel } from '../services/candidateModel';
import { appliedJobsModel } from '../services/AppliedJobsModel';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.css']
})
export class MiddleSectionComponent implements OnInit {
  candidateData:candidateModel[]=[];
  appliedJobs:appliedJobsModel[]=[];
  Data=[];
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getprofile().subscribe(data=>{
      this.Data=JSON.parse(JSON.stringify(data))
      this.candidateData=JSON.parse(JSON.stringify(this.Data))
      console.log(this.candidateData)
      this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      console.log(this.appliedJobs.length)
    })
  }

}
