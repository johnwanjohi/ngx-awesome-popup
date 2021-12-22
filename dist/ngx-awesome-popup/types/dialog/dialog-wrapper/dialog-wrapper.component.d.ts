import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, QueryList, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { AppearanceAnimation, DisappearanceAnimation } from '../../../core/enums';
import { InsertionLoaderDirective } from '../../../core/insertion-loader.directive';
import { InsertionDirective } from '../../../core/insertion.directive';
import { LayoutHelperService } from '../../../core/layout-helper.service';
import { DialogBelonging } from '../core/classes';
export declare class DialogWrapperComponent implements AfterViewInit, OnDestroy {
    dialogBelonging: DialogBelonging;
    private componentFactoryResolver;
    private cd;
    layoutHelper: LayoutHelperService;
    elDialogWrapper: ElementRef;
    elButtonWrapper: ElementRef;
    elButton: QueryList<ElementRef>;
    fadeInOutAnimation: string;
    showLoader: boolean;
    bodyOverflow: string;
    childComponentRef: ComponentRef<any>;
    childComponentType: Type<any>;
    loaderComponentRef: ComponentRef<any>;
    insertionPoint: InsertionDirective;
    loaderInsertionPoint: InsertionLoaderDirective;
    boxAnimation: AppearanceAnimation | DisappearanceAnimation;
    constructor(dialogBelonging: DialogBelonging, componentFactoryResolver: ComponentFactoryResolver, cd: ChangeDetectorRef, layoutHelper: LayoutHelperService);
    ngAfterViewInit(): void;
    hideScrollbar(): void;
    revertScrollbarSettings(): void;
    setDefaultResponse(): void;
    ngOnDestroy(): void;
    hideScroller(): void;
    loadChildComponent(_ComponentType: Type<any>): void;
    loadLoaderComponent(_LoaderRef: Type<any>): void;
    close(): void;
    closeParent$(): Observable<any>;
    onOverlayClicked(evt: MouseEvent): void;
    onCustomButton(_Button: any): void;
    closeLoader(): void;
    setCustomStyles(): void;
    keyEvent(event: KeyboardEvent): void;
}
