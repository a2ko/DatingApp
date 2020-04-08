import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MembarEditComponent } from '../membars/membar-edit/membar-edit.component';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class PreventUnsavedChanges
  implements CanDeactivate<MembarEditComponent> {
  constructor(private alertify: AlertifyService) {}
  canDeactivate(component: MembarEditComponent) {
    if (component.editForm.dirty) {
     return confirm(
        'Are you sure you want to continue? Any unsaved changes will be lose!.' );
    }
    return true;
  }
}
