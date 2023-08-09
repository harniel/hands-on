import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  title = 'Customer List';
  customers: any[] = [];

  reset() {}

  addCustomer(data: any) {
    const customer = {
      name: data.value.input,
    };

    if (customer.name !== '' && customer.name !== undefined) {
      this.customers.push(customer.name);
      data.value.input = '';
    }
  }
}
