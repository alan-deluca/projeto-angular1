import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private _snackBar: MatSnackBar) { }

  /*
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

  }*/

  notificar(mensagem: string) {

    this._snackBar.open(mensagem, "Ok", {
      duration: 4000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });

  }

}
