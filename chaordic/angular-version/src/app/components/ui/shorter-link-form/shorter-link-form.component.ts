import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shorter-link-form',
  templateUrl: './shorter-link-form.component.html',
  styleUrls: ['./shorter-link-form.component.scss']
})
export class ShorterLinkFormComponent implements OnInit {

  shorterForm: FormGroup;
  submited = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.shorterForm = this.formBuilder.group({
      url: ''
    });
  }

  onSumbit({ value }) {
    console.log(value);
    if (value.url) {
      this.submited = true;

      this.shorterForm.reset({
        url: this.getShorterLink()
      });
    }
  }

  private getShorterLink() {
    const newLink = this.createLink();
    return `http://chr.dc/${newLink}`
  }

  private createLink() {
    return Math.random().toString(36).substring(7);
  };

}
