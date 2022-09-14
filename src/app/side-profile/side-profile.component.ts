import { Component, OnInit } from '@angular/core';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { candidateModel } from '../services/candidateModel';
import { ApicallsService } from '../services/apicalls.service';
import { expModel } from '../services/expModel';

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
  explength:any;
  constructor(private apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getprofile().subscribe(data=>{
      this.Data=JSON.parse(JSON.stringify(data))
      this.candidateData=JSON.parse(JSON.stringify(this.Data))
      console.log("this.candidateData")
      console.log(this.candidateData)
      this.experience=JSON.parse(JSON.stringify(this.candidateData[0])).experience;
      console.log("experience");
      console.log(this.experience[0].company);
      this.explength=this.experience.length
      // this.appliedJobs=JSON.parse(JSON.stringify(this.candidateData[0])).previous_jobs_applied;
      // console.log(this.appliedJobs.length)
    })
  }

}
