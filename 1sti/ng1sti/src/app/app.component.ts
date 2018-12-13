import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAppStateManager from './store';
import * as fromCapitalsStore from './store/capitals';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng1sti';

  capitalsStore$: Observable<fromCapitalsStore.State>;

  constructor(private store$: Store<fromAppStateManager.AppState>) {
    this.capitalsStore$ = this.store$.select('capitals');
    this.store$.dispatch(new fromCapitalsStore.LoadCapitalsRequest());
  }
}
