import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyId: any;
  isNewCompany: boolean;
  companyForm: FormGroup;

  get nameInput() {
    return this.companyForm.get('name');
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit() {

    this.companyId    = this.route.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    this.companyForm  = this.formBuilder.group({
      name:  ['', Validators.required],
      email: [''],
      phone: ['']
    });

    if (!this.isNewCompany) {
      this.companyService
          .getCompanyById(this.companyId)
          .subscribe(c => this.companyForm.patchValue(c));
    }
  }

  onSaveCompany() {
    alert('save');
  }

}
