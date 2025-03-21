import { Injectable } from '@angular/core';
import { NotifymodalComponent } from '../modal/notifymodal/notifymodal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public dialog: MatDialog) { }

  showNotify(status: string, title: string, desc: string, disableClose: boolean = false, nrStatus: number = 0, value: any = '') {
    this.dialog.closeAll();
    this.dialog.open(NotifymodalComponent, {
      disableClose: disableClose,
      width: '90%',
      maxWidth: '400px',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        status: status,
        title: title,
        desc: desc,
        nrStatus: nrStatus,
        value: value,
      }
    });
  }
}
