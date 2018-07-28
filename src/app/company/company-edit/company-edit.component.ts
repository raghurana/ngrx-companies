import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { registerContentQuery } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyForm: FormGroup;

  get nameInput() {
    return this.companyForm.get('name');
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.companyForm = this.formBuilder.group({
      name:  ['', Validators.required],
      email: [''],
      phone: ['']
    });


  }

}
