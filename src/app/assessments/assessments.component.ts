import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../services/apicalls.service';
import { assessmentModel } from '../services/assessmentsModel';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { panelModel} from '../services/panelModel';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  JobStages: assessmentModel[] = [];
  JobStages2: assessmentModel[] = [];
  panel:panelModel[]=[];
  stamp = 'pending';
  faLink = faLink;
  Data = [];
  Data2 = [];
  Data3 = [];
  intervwdate = new Date();
  hours:any;
  minutes:any;
  link='https://www.youtube.com/embed/8-Fe0kVv3WI';
  link1='https://www.youtube.com/embed/8-Fe0kVv3WI';
  intervwStage='';
  active3=''
  constructor(private apicall: ApicallsService, private hostElement: ElementRef) { }

  ngOnInit(): void {
    this.apicall.getassessments().subscribe(data => {
      this.Data = JSON.parse(JSON.stringify(data))
      console.log("Data");
      console.log(this.Data)
      this.JobStages = JSON.parse(JSON.stringify(this.Data[0]))
      // console.log('jobstages');
      this.Data2 = JSON.parse(JSON.stringify(this.JobStages))
      console.log('jobstages');
      console.log(JSON.parse(JSON.stringify(this.Data2)).job_stages);
      this.JobStages2 = JSON.parse(JSON.stringify(this.Data2)).job_stages;

      this.Data3=JSON.parse(JSON.stringify(this.JobStages2));
      console.log("DAta3");
      console.log(this.Data3)
    })
  }
videolink(l:any){
  
this.link1=l;
this.link=this.link1.replace("watch?v=","embed/")
const iframe = this.hostElement.nativeElement.querySelector('iframe');
 iframe.src = this.link;
console.log('link');
console.log(this.link);
}

stage(stage_name:any){
this.intervwStage=stage_name;
this.active3='active3'

}
}
