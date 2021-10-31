import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { IButton } from '../../../core/global-interfaces';
import { ConfirmBoxBelonging } from '../core/classes';
export declare class ConfirmBoxWrapperComponent implements AfterViewInit {
    confirmBoxBelonging: ConfirmBoxBelonging;
    private cd;
    fadeInOutAnimation: string;
    constructor(confirmBoxBelonging: ConfirmBoxBelonging, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    setResponse(_IsSuccess: boolean, _ClickedButtonID?: string): void;
    onOverlayClicked(evt: MouseEvent): void;
    onCustomButton(_Button: IButton): void;
    onButtonClick(_Type: 'confirm' | 'decline'): void;
    closeParent$(_ClosingAnimation: string): Observable<any>;
}