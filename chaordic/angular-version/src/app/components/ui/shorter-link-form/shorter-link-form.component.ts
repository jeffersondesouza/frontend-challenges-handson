import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shorter-link-form',
  templateUrl: './shorter-link-form.component.html',
  styleUrls: ['./shorter-link-form.component.scss']
})
export class ShorterLinkFormComponent implements OnInit {

  shorterForm: FormGroup;
  copyMode = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.shorterForm = this.formBuilder.group({
      url: ''
    });

  }

  onResetForm() {
    this.shorterForm.reset();
    this.copyMode = false;
  }

  onSumbit({ value }, urlInput) {
    if (value.url) {
      this.copyMode = true;


      this.shorterForm.reset({
        url: this.getShorterLink()
      });
      this.copyLink(urlInput);
    }
  }

  private getShorterLink() {
    const newLink = this.createLink();
    return `http://chr.dc/${newLink}`
  }

  private copyLink(shortLinkInput) {
    shortLinkInput.select();
    document.execCommand('copy')
  }

  private createLink() {
    return Math.random().toString(36).substring(7);
  };

}
