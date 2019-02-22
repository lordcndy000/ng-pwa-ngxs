import { Injectable } from '@angular/core';
import { SnackbarService } from 'ngx-snackbar';
import { snackCfg } from '@core/config/snackbar.config';
import { ApiResponse } from '@core/model/common/apiResponse';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private snackBar: SnackbarService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (request.body instanceof FormData) {
            // Temporary fix to prevent changing the body for FormData type
            // fix issue with Image for FormData
        } else {
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }

            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {

                let errorMsg = error && error.error.reason ? error.error.reason : '';

                // Check if response came from Custom API
                if (error.error.Version) {
                    const apiResponse = error.error as ApiResponse<string>;
                    errorMsg = apiResponse.Message;
                }

                this.snackBar.add({
                    msg: `Status Code: <strong>${error.status.toString()}</strong>`,
                    timeout: 5000,
                    background: snackCfg.error.background,
                    color: snackCfg.error.color,
                    action: {
                        text: errorMsg // add text even though it is empty to prevent bugs
                    },
                });

                return throwError(error);
            }));
    }
}
