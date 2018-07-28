import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../models/company';

@Component({
  selector: 'app-company-list-item',
  templateUrl: './company-list-item.component.html',
  styleUrls: ['./company-list-item.component.scss']
})
export class CompanyListItemComponent implements OnInit {

  constructor() { }

  @Input()
  companies: Company[];

  @Output()
  deleteCompany = new EventEmitter<number>();

  ngOnInit() {
  }

}
