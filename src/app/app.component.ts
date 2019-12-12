import { Component } from '@angular/core';
import { IIndividualImpressumData } from 'german-impressum';
import { INavbarData } from 'ng-responsive-navbar';

export interface IQAPair {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public navBarData: INavbarData = this.getNavBarData();

  public individualImpressumData: IIndividualImpressumData = {
    name: 'Michael Spengler',
    street: 'Zollhofgarten 8',
    extension: 'Wohnung 401',
    zipCode: '69115',
    city: 'Heidelberg',
    phoneNumber: '0049 67 83 38 69',
    eMail: 'michael@spengler.biz',
    textAlign: 'center',
    bgColor: 'inherit',
  };
  public title = 'play-and-learn';

  public qaPair: IQAPair = {
    question: '',
    answer: ''
  };

  public qaPairCollection: IQAPair[] = [];


  private getNavBarData(): INavbarData {
    return {
      // replace the following by your data...
      logoURL: 'https://fance-stiftung.de/api/app/app-images/logo.png',
      appTitle: 'App Title',
      menuEntries: [{
        isActive: true,
        text: 'Menu Entry 1',
        href: '/menuEntry1',
      },
      {
        isActive: false,
        text: 'Menu Entry 2',
        href: '/menuEntry2',
      },
      {
        isActive: false,
        text: 'Menu Entry 3',
        href: '/menuEntry3',
      }]
    };
  }

  public onClickMenuEntry(target: string) {
    alert(target);
  }

  public clickGenerateXWordPuzzle() {
    alert('hallo');
  }

  public clickSave() {
    this.qaPairCollection.push(this.qaPair);
    this.qaPair = {
      question: '',
      answer: ''
    };
  }

}
