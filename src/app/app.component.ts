import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskInputComponent } from './components/wrapper/subComponents/task-input/task-input.component';
import { ComService } from './services/com.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firstAngularApp';

  public isWelcome = false;

  constructor(private comS: ComService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {    
    this.isWelcome = this.comS.checkLocation();
  }

  logMenuClick(){
    console.log("cliccato!!!!!")
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskInputComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.openSnackBar('Task creato con successo.', 'OK');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
