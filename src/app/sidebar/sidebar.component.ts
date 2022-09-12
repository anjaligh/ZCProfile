import { Component, OnInit } from '@angular/core';
import { faClipboardList, faTableCellsLarge,faBriefcase,faSquarePollVertical, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logoImage="assets/logo.jpg";
  faUser=faUser;
  faBriefcase=faBriefcase;
  faEllipsis=faEllipsis;
  faList=faClipboardList;
  faSquarePollVertical=faSquarePollVertical;
  faTableCellsLarge=faTableCellsLarge;
  constructor() { }

  ngOnInit(): void {
  }

}
