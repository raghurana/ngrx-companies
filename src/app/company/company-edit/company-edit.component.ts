import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
          .subscribe(
            c => this.companyForm.patchValue(c),
            err => alert(err));
    }
  }

  onSaveCompany() {
    if (this.isNewCompany) {
      return this
          .companyService
          .addCompany(this.companyForm.value)
          .subscribe(() => this.backToCompanyList());
    }

    const companyToUpdate = { ...this.companyForm.value, id: this.companyId };

    this.companyService
        .updateCompany(companyToUpdate)
        .subscribe(() => this.backToCompanyList());
  }

  private backToCompanyList() {
    this.router.navigate([`/company/list`]);
  }
}
