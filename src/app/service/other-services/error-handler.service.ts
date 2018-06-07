import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { ErrorModel } from '@app/models';

@Injectable()
export class ErrorHandlerService
{
    constructor(private snackbar: MatSnackBar)
    {
    }

    showError(error: ErrorModel)
    {
        const message = error && error.message ? error.message : 'No error provided from API';

        this.snackbar.open(message);
    }

    showMessage(message: string)
    {
        message = message && message.length > 0 ? message : 'No message provided';

        this.snackbar.open(message);
    }
}
