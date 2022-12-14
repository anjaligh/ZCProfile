import { Component, OnInit } from '@angular/core';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { candidateModel } from '../services/candidateModel';
import { ApicallsService } from '../services/apicalls.service';
import { expModel } from '../services/expModel';
import { educationModel } from '../services/educationModel';
import { recommendedJobsModel } from '../services/recommendedJobsModel';
import { jobsHistoryModel } from '../services/jobsHistoryModel';


@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.css']
})
export class SideProfileComponent implements OnInit {
  faPen=faPen
  candidateData:candidateModel[]=[];
  Data:[]=[];
  experience:expModel[]=[];
  education:educationModel[]=[];
  recommended_jobs:recommendedJobsModel[]=[];
  jobsHistory:jobsHistoryModel[]=[];
  explength:any;
  recommendedJobsLength:any;
  jobsHistoryLength:any;
  marks=[75,82,87];
  jobMatch=[85,78,89,84,79];
  match='match';

  updateform={
    firstname:'',
    lastname:'',
    phone:'',
    mailid:'',
    gender:'Male',
    exper:'2',
    address:''

  }
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getprofile().subscribe(data=>{
      this.Data=JSON.parse(JSON.stringify(data))
      this.candidateData=JSON.parse(JSON.stringify(this.Data))
      console.log("this.candidateData")
      console.log(this.candidateData[0].first_name)
      this.updateform.firstname=this.candidateData[0].first_name;
      this.updateform.lastname=this.candidateData[0].last_name;
      this.updateform.mailid=this.candidateData[0].email;
      this.updateform.phone=this.candidateData[0].phone_number;
      this.updateform.address=this.candidateData[0].location;
      this.experience=JSON.parse(JSON.stringify(this.candidateData[0])).experience;
      this.education=JSON.parse(JSON.stringify(this.candidateData[0])).education;
      this.recommended_jobs=JSON.parse(JSON.stringify(this.candidateData[0])).recommended_jobs;
      this.recommendedJobsLength=this.recommended_jobs.length;
      this.jobsHistory=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      this.jobsHistoryLength=this.jobsHistory.length;
      console.log("experience");
      console.log(this.experience[0].company);
      this.explength=this.experience.length
      // this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      // console.log(this.appliedJobs.length)
    })
  }
  updateProfile(){
    localStorage.setItem('firstname',this.updateform.firstname);
    localStorage.setItem('lastname',this.updateform.lastname);
    localStorage.setItem('phone',this.updateform.phone);
    localStorage.setItem('mailid',this.updateform.mailid);
    localStorage.setItem('gender',this.updateform.gender);
    localStorage.setItem('address',this.updateform.address);
    alert('Profile edited successfully');
  }
}
 