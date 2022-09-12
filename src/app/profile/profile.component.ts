import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../services/apicalls.service';
import { candidateModel } from '../services/candidateModel';
import { expModel } from '../services/expModel';
import { appliedJobsModel } from '../services/AppliedJobsModel';
import { faPhoneVolume, faEnvelope, faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
candidateData:candidateModel[]=[];
appliedJobs:appliedJobsModel[]=[];
Data=[];
experience:expModel[]=[];
faPhoneVolume=faPhoneVolume;
faEnvelope=faEnvelope;
faLocationDot=faLocationDot;
faPhone=faPhone;
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getprofile().subscribe(data=>{
      this.Data=JSON.parse(JSON.stringify(data))
      this.candidateData=JSON.parse(JSON.stringify(this.Data))
      console.log(this.candidateData)
      this.experience=JSON.parse(JSON.stringify(this.candidateData[0])).experience;
      console.log("experience");
      console.log(this.experience);
      this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      console.log(this.appliedJobs.length)
    })
  }

}
