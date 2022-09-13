import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../services/apicalls.service';
import { assessmentModel } from '../services/assessmentsModel';
import { faLink} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
JobStages:assessmentModel[]=[];
JobStages2:assessmentModel[]=[];
stamp='pending';
faLink=faLink;
Data=[];
Data2=[];
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getassessments().subscribe(data=>{
this.Data=JSON.parse(JSON.stringify(data))
console.log("Data");
console.log(this.Data)
this.JobStages=JSON.parse(JSON.stringify(this.Data[0]))
// console.log('jobstages');
this.Data2=JSON.parse(JSON.stringify(this.JobStages))
console.log('jobstages');
console.log(JSON.parse(JSON.stringify(this.Data2)).job_stages);
this.JobStages2=JSON.parse(JSON.stringify(this.Data2)).job_stages;
    })
  }

}
