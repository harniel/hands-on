import { Component } from '@angular/core';

interface Contact {
  name: string;
  mobile: string;
  email: string;
}

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.scss'],
})
export class PhoneDirectoryComponent {
  title = 'Phone Directory';

  newContact: Contact = {
    name: '',
    mobile: '',
    email: '',
  };

  contacts: Contact[] = [];

  private validateForm(): boolean {
    const namePattern = /^[A-Za-z ]{1,20}$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern =
      /^[a-zA-Z][a-zA-Z0-9.]{1,10}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;

    return (
      namePattern.test(this.newContact.name) &&
      mobilePattern.test(this.newContact.mobile) &&
      emailPattern.test(this.newContact.email)
    );
  }

  addCustomer() {
    if (!this.validateForm()) {
      document.getElementById('error')!.style.display = 'block';
      return;
    }

    document.getElementById('error')!.style.display = 'none';
    this.contacts.push(this.newContact);
    this.newContact = {
      name: '',
      mobile: '',
      email: '',
    };
  }
}
