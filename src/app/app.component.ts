import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
} from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  constructor(public spinnerS: SpinnerService, private cd: ChangeDetectorRef) {}

  ngDoCheck(): void {
    this.cd.detectChanges();
  }
}
