import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
    private message: string;

    private toastCount: number;

    public hide(): void {
        this.toastCount--;
        this.log();
    }

    public show(): void {
        this.toastCount++;
        this.log();
    }

    private log(): void {
        console.log(this.message);
    }
}