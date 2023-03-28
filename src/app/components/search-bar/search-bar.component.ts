import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  connectedAccount = '0x1234567890abcdef';
  isWalletConnected = true;

  connectWallet(): void {
    const extensionId = 'ebjabocgmjhfnlngeimpmapmkdjnioop';
    const message = {
      type: 'REQUEST_PERMISSIONS',
      payload: {
        app: 'My App',
        blockchain: 'Tezos',
        network: 'Mainnet'
      }
    };
    const url = `chrome-extension://${extensionId}/?${JSON.stringify(message)}`;

    window.location.href = url;
    window.open('templewallet://open', '_blank');

  }
  
  onSubmit(form: any) {
    // Implement search form submission logic here
  }
}
