import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  connectedAccount = '0x3678723angj';
  isWalletConnected = true;
  
  constructor(private router: Router) { }

  connectWallet(): void {
    const extensionId = 'ebjabocgmjhfnlngeimpmapmkdjnioop';
    window.open('templewallet://open', '_blank');

  }
  
  onSubmit(form: any) {
    this.router.navigate(['search', form.value.search]);
  }
}
