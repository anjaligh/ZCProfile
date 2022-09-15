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
      console.log(this.candidateData)
      this.updateform.firstname=this.candidateData[0].first_name;
      this.updateform.lastname=this.candidateData[0].last_name;
      this.updateform.mailid=this.candidateData[0].email;
      this.updateform.phone=this.candidateData[0].phone_number;
      this.updateform.address=this.candidateData[0].location;
      this.experience=JSON.parse(JSON.stringify(this.candidateData[0])).experience;
      console.log("experience");
      console.log(this.experience);
      this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      console.log(this.appliedJobs.length)
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
