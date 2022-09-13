import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../services/apicalls.service';
import { candidateModel } from '../services/candidateModel';
import { appliedJobsModel } from '../services/AppliedJobsModel';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { commentsModel } from '../services/commentsModel';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.css']
})
export class MiddleSectionComponent implements OnInit {
  candidateData:candidateModel[]=[];
  appliedJobs:appliedJobsModel[]=[];
  comments:commentsModel[]=[];
  Data=[];
  faPlus=faPlus;
  jobMatch={
    percentage:83,
    conclusion:"The candidate is a good match with your job requirement. He should be spotted."
  };
  joiningChance={
chance:'High',
exp:'Quick Response & Enthusiastic'
  }
  chance=this.joiningChance.chance;
  high='assets/high.png';
  low='assets/low.png';
  progresswidth=this.jobMatch.percentage;
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getprofile().subscribe(data=>{
      this.Data=JSON.parse(JSON.stringify(data))
      this.candidateData=JSON.parse(JSON.stringify(this.Data))
      console.log(this.candidateData)
      this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      console.log(this.appliedJobs.length)
    })
    this.apicall.getComments().subscribe(data=>{
      console.log("comments");
      this.comments=JSON.parse(JSON.stringify(data));
      console.log(this.comments)
    })
  }

}
