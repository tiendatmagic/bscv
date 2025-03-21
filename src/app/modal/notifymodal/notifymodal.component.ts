import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-notifymodal',
  standalone: false,
  templateUrl: './notifymodal.component.html',
  styleUrl: './notifymodal.component.scss'
})
export class NotifymodalComponent {
  public datas: any = [];
  public status: number = 0;
  public countdown: number = 0;
  errorImg: string = '/assets/images/icon-error.png';
  successImg: string = '/assets/images/icon-success.png';

  constructor(public dialogRef: MatDialogRef<NotifymodalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService) { }

  ngOnInit() {
    this.datas = this.data;
    if (this.data.nrStatus === 429) {
      this.status = this.data.nrStatus;
      this.countdown = 5;
      var count = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(count);
        }
      }, 1000);
    }
  }

  onNoClick(): void {

    if (this.countdown === 0) {
      this.dialogRef.close();
    }

  }
}
