import { Component, HostListener, Inject, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { boxAnimations } from '../../../core/animations/box.animations';
import { fadeInOut } from '../../../core/animations/fade-in-out.animation';
import { AppearanceAnimation, DisappearanceAnimation } from '../../../core/enums';
import { InsertionLoaderDirective } from '../../../core/insertion-loader.directive';
import { InsertionDirective } from '../../../core/insertion.directive';
import { LayoutHelperService } from '../../../core/layout-helper.service';
import { DialogDefaultResponse } from '../core/classes';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/layout-helper.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../core/insertion-loader.directive";
import * as i4 from "../../../core/insertion.directive";
import * as i5 from "../core/classes";
export class DialogWrapperComponent {
    constructor(dialogBelonging, componentFactoryResolver, cd, layoutHelper) {
        this.dialogBelonging = dialogBelonging;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.layoutHelper = layoutHelper;
        this.fadeInOutAnimation = 'open';
        this.showLoader = true;
        this.appearanceAnimation = AppearanceAnimation;
        this.disappearanceAnimation = DisappearanceAnimation;
        setTimeout(() => {
            this.boxAnimation = this.dialogBelonging.dialogCoreConfig.animationIn;
        }, 1);
    }
    ngAfterViewInit() {
        this.hideScrollbar();
        this.loadChildComponent(this.childComponentType);
        this.loadLoaderComponent(this.dialogBelonging.dialogCoreConfig.loaderComponent);
        this.setDefaultResponse();
        this.cd.detectChanges();
        this.setCustomStyles();
    }
    hideScrollbar() {
        if (this.dialogBelonging.dialogCoreConfig.hideScrollbar) {
            this.bodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
    }
    revertScrollbarSettings() {
        if (this.dialogBelonging.dialogCoreConfig.hideScrollbar) {
            document.body.style.overflow = this.bodyOverflow;
        }
    }
    setDefaultResponse() {
        const dialogResponse = new DialogDefaultResponse();
        dialogResponse.setBelonging(this.dialogBelonging);
        this.dialogBelonging.eventsController.setDefaultResponse(dialogResponse);
    }
    ngOnDestroy() {
        this.revertScrollbarSettings();
        if (this.childComponentRef) {
            this.childComponentRef.destroy();
        }
        if (this.loaderComponentRef) {
            this.loaderComponentRef.destroy();
        }
    }
    hideScroller() { }
    loadChildComponent(_ComponentType) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_ComponentType);
        const viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.childComponentRef = viewContainerRef.createComponent(componentFactory);
        this.childComponentRef.instance.dialogBelonging = this.dialogBelonging;
    }
    loadLoaderComponent(_LoaderRef) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_LoaderRef);
        const viewContainerRef = this.loaderInsertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.loaderComponentRef = viewContainerRef.createComponent(componentFactory);
    }
    close() {
        this.dialogBelonging.eventsController.close();
    }
    closeParent$() {
        this.boxAnimation = this.dialogBelonging.dialogCoreConfig.animationOut;
        const closeDuration = this.dialogBelonging.dialogCoreConfig.animationOut ? 800 : 200;
        this.fadeInOutAnimation = 'close-fast';
        return new Observable((observer) => {
            observer.next('');
            observer.complete();
        }).pipe(delay(closeDuration));
    }
    onOverlayClicked(evt) {
    }
    onCustomButton(_Button) {
        this.dialogBelonging.eventsController.onButtonClick(_Button);
    }
    closeLoader() {
        this.showLoader = false;
    }
    setCustomStyles() {
        if (this.dialogBelonging.dialogCoreConfig.customStyles.wrapperCSS && this.elDialogWrapper) {
            this.elDialogWrapper.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.wrapperCSS;
        }
        if (this.dialogBelonging.dialogCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
            this.elButtonWrapper.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.buttonSectionCSS;
        }
        if (this.dialogBelonging.dialogCoreConfig.customStyles.buttonCSS && this.elButton) {
            this.elButton.forEach(el => {
                el.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.buttonCSS;
            });
        }
    }
    keyEvent(event) {
        if (event.key === 'Escape' && this.dialogBelonging.dialogCoreConfig.escapeKeyClose) {
            this.close();
        }
    }
}
DialogWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: DialogWrapperComponent, deps: [{ token: 'dialogBelonging' }, { token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: i1.LayoutHelperService }], target: i0.ɵɵFactoryTarget.Component });
DialogWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.2", type: DialogWrapperComponent, selector: "dialog-popup-wrapper", host: { listeners: { "window:keyup": "keyEvent($event)" } }, providers: [LayoutHelperService], viewQueries: [{ propertyName: "elDialogWrapper", first: true, predicate: ["elDialogWrapper"], descendants: true }, { propertyName: "elButtonWrapper", first: true, predicate: ["elButtonWrapper"], descendants: true }, { propertyName: "insertionPoint", first: true, predicate: InsertionDirective, descendants: true, static: true }, { propertyName: "loaderInsertionPoint", first: true, predicate: InsertionLoaderDirective, descendants: true, static: true }, { propertyName: "elButton", predicate: ["elButton"], descendants: true }], ngImport: i0, template: "<div\n  class=\"ngx-awesome-popup-overlay aw-dialog-modal\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'\n    }\n  }\">\n  <div\n    class=\"evolve-parent-dialog\"\n    [@.disabled]=\"\n      dialogBelonging.dialogCoreConfig.animationIn === appearanceAnimation.NONE &&\n      dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    #elDialogWrapper\n    [ngStyle]=\"\n      dialogBelonging.dialogCoreConfig.fullScreen && {\n        maxWidth: '100%',\n        maxHeight: '100%',\n        height: '100%',\n        width: '100%',\n        borderRadius: '0'\n      }\n    \"\n    [className]=\"layoutHelper.getBoxClasses(dialogBelonging.dialogCoreConfig.layoutType, 'evolve-parent-dialog')\">\n    <div\n      class=\"loader-holder\"\n      [ngClass]=\"\n        !dialogBelonging.dialogCoreConfig.displayLoader ? 'dialog-loader-off' : showLoader ? 'dialog-loader-active' : 'dialog-loader-gone'\n      \">\n      <div class=\"dialog-loader\">\n        <ng-template appInsertionLoader></ng-template>\n      </div>\n    </div>\n    <ng-container *ngIf=\"!dialogBelonging.dialogCoreConfig.fullScreen; else fullScreen\"></ng-container>\n    <ng-template #fullScreen></ng-template>\n    <div\n      class=\"content-holder\"\n      [ngStyle]=\"\n        dialogBelonging.dialogCoreConfig.fullScreen\n          ? {\n              width: '100%',\n              height: '100%'\n            }\n          : {\n              width: dialogBelonging.dialogCoreConfig.width,\n              minWidth: dialogBelonging.dialogCoreConfig.minWidth,\n              maxWidth: dialogBelonging.dialogCoreConfig.maxWidth,\n              height: dialogBelonging.dialogCoreConfig.height,\n              minHeight: dialogBelonging.dialogCoreConfig.minHeight,\n              maxHeight: dialogBelonging.dialogCoreConfig.maxHeight\n            }\n      \">\n      <div\n        class=\"component-content\"\n        [ngClass]=\"\n          !dialogBelonging.dialogCoreConfig.displayLoader\n            ? 'component-content-loader-off'\n            : showLoader\n            ? 'component-content-preparing'\n            : 'component-content-ready'\n        \">\n        <ng-template appInsertion></ng-template>\n      </div>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"dialogBelonging.buttons.length > 0\"\n        [ngStyle]=\"{\n          'text-align': dialogBelonging.dialogCoreConfig.buttonPosition\n        }\">\n        <button\n          #elButton\n          *ngFor=\"let button of dialogBelonging.buttons\"\n          (click)=\"onCustomButton(button)\"\n          [className]=\"layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-lg')\">\n          {{ button.label }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", directives: [{ type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.InsertionLoaderDirective, selector: "[appInsertionLoader]" }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.InsertionDirective, selector: "[appInsertion]" }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], animations: [fadeInOut(), boxAnimations()] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: DialogWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-popup-wrapper', animations: [fadeInOut(), boxAnimations()], providers: [LayoutHelperService], template: "<div\n  class=\"ngx-awesome-popup-overlay aw-dialog-modal\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'\n    }\n  }\">\n  <div\n    class=\"evolve-parent-dialog\"\n    [@.disabled]=\"\n      dialogBelonging.dialogCoreConfig.animationIn === appearanceAnimation.NONE &&\n      dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    #elDialogWrapper\n    [ngStyle]=\"\n      dialogBelonging.dialogCoreConfig.fullScreen && {\n        maxWidth: '100%',\n        maxHeight: '100%',\n        height: '100%',\n        width: '100%',\n        borderRadius: '0'\n      }\n    \"\n    [className]=\"layoutHelper.getBoxClasses(dialogBelonging.dialogCoreConfig.layoutType, 'evolve-parent-dialog')\">\n    <div\n      class=\"loader-holder\"\n      [ngClass]=\"\n        !dialogBelonging.dialogCoreConfig.displayLoader ? 'dialog-loader-off' : showLoader ? 'dialog-loader-active' : 'dialog-loader-gone'\n      \">\n      <div class=\"dialog-loader\">\n        <ng-template appInsertionLoader></ng-template>\n      </div>\n    </div>\n    <ng-container *ngIf=\"!dialogBelonging.dialogCoreConfig.fullScreen; else fullScreen\"></ng-container>\n    <ng-template #fullScreen></ng-template>\n    <div\n      class=\"content-holder\"\n      [ngStyle]=\"\n        dialogBelonging.dialogCoreConfig.fullScreen\n          ? {\n              width: '100%',\n              height: '100%'\n            }\n          : {\n              width: dialogBelonging.dialogCoreConfig.width,\n              minWidth: dialogBelonging.dialogCoreConfig.minWidth,\n              maxWidth: dialogBelonging.dialogCoreConfig.maxWidth,\n              height: dialogBelonging.dialogCoreConfig.height,\n              minHeight: dialogBelonging.dialogCoreConfig.minHeight,\n              maxHeight: dialogBelonging.dialogCoreConfig.maxHeight\n            }\n      \">\n      <div\n        class=\"component-content\"\n        [ngClass]=\"\n          !dialogBelonging.dialogCoreConfig.displayLoader\n            ? 'component-content-loader-off'\n            : showLoader\n            ? 'component-content-preparing'\n            : 'component-content-ready'\n        \">\n        <ng-template appInsertion></ng-template>\n      </div>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"dialogBelonging.buttons.length > 0\"\n        [ngStyle]=\"{\n          'text-align': dialogBelonging.dialogCoreConfig.buttonPosition\n        }\">\n        <button\n          #elButton\n          *ngFor=\"let button of dialogBelonging.buttons\"\n          (click)=\"onCustomButton(button)\"\n          [className]=\"layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-lg')\">\n          {{ button.label }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i5.DialogBelonging, decorators: [{
                    type: Inject,
                    args: ['dialogBelonging']
                }] }, { type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i1.LayoutHelperService }]; }, propDecorators: { elDialogWrapper: [{
                type: ViewChild,
                args: ['elDialogWrapper']
            }], elButtonWrapper: [{
                type: ViewChild,
                args: ['elButtonWrapper']
            }], elButton: [{
                type: ViewChildren,
                args: ['elButton']
            }], insertionPoint: [{
                type: ViewChild,
                args: [InsertionDirective, { static: true }]
            }], loaderInsertionPoint: [{
                type: ViewChild,
                args: [InsertionLoaderDirective, { static: true }]
            }], keyEvent: [{
                type: HostListener,
                args: ['window:keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvdHlwZXMvZGlhbG9nL2RpYWxvZy13cmFwcGVyL2RpYWxvZy13cmFwcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL25neC1hd2Vzb21lLXBvcHVwL3R5cGVzL2RpYWxvZy9kaWFsb2ctd3JhcHBlci9kaWFsb2ctd3JhcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUlULFlBQVksRUFDWixNQUFNLEVBSU4sU0FBUyxFQUNULFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBbUIscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztBQVF6RSxNQUFNLE9BQU8sc0JBQXNCO0lBcUJqQyxZQUVTLGVBQWdDLEVBQy9CLHdCQUFrRCxFQUNsRCxFQUFxQixFQUN0QixZQUFpQztRQUhqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsNkJB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LGFBQWEsRUFBRSxDQUFDOzJGQUcvQixzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLENBQUMsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsYUFDL0IsQ0FBQyxtQkFBbUIsQ0FBQzs7MEJBd0I3QixNQUFNOzJCQUFDLGlCQUFpQjtxSkFyQkcsZUFBZTtzQkFBNUMsU0FBUzt1QkFBQyxpQkFBaUI7Z0JBQ0UsZUFBZTtzQkFBNUMsU0FBUzt1QkFBQyxpQkFBaUI7Z0JBQ0YsUUFBUTtzQkFBakMsWUFBWTt1QkFBQyxVQUFVO2dCQVl4QixjQUFjO3NCQURiLFNBQVM7dUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUcvQyxvQkFBb0I7c0JBRG5CLFNBQVM7dUJBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQXNIckQsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgYm94QW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5pbWF0aW9ucy9ib3guYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmYWRlSW5PdXQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FuaW1hdGlvbnMvZmFkZS1pbi1vdXQuYW5pbWF0aW9uJztcbmltcG9ydCB7IEFwcGVhcmFuY2VBbmltYXRpb24sIERpc2FwcGVhcmFuY2VBbmltYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IEluc2VydGlvbkxvYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5zZXJ0aW9uLWxvYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW5zZXJ0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnNlcnRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IExheW91dEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2xheW91dC1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dCZWxvbmdpbmcsIERpYWxvZ0RlZmF1bHRSZXNwb25zZSB9IGZyb20gJy4uL2NvcmUvY2xhc3Nlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1wb3B1cC13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW2ZhZGVJbk91dCgpLCBib3hBbmltYXRpb25zKCldLFxuICBwcm92aWRlcnM6IFtMYXlvdXRIZWxwZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZWxEaWFsb2dXcmFwcGVyJykgZWxEaWFsb2dXcmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdlbEJ1dHRvbldyYXBwZXInKSBlbEJ1dHRvbldyYXBwZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ2VsQnV0dG9uJykgZWxCdXR0b246IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgZmFkZUluT3V0QW5pbWF0aW9uID0gJ29wZW4nO1xuICBzaG93TG9hZGVyID0gdHJ1ZTtcbiAgYm9keU92ZXJmbG93OiBzdHJpbmc7XG4gIGFwcGVhcmFuY2VBbmltYXRpb24gPSBBcHBlYXJhbmNlQW5pbWF0aW9uO1xuICBkaXNhcHBlYXJhbmNlQW5pbWF0aW9uID0gRGlzYXBwZWFyYW5jZUFuaW1hdGlvbjtcblxuICBjaGlsZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIGNoaWxkQ29tcG9uZW50VHlwZTogVHlwZTxhbnk+O1xuICBsb2FkZXJDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoSW5zZXJ0aW9uRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBpbnNlcnRpb25Qb2ludDogSW5zZXJ0aW9uRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKEluc2VydGlvbkxvYWRlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgbG9hZGVySW5zZXJ0aW9uUG9pbnQ6IEluc2VydGlvbkxvYWRlckRpcmVjdGl2ZTtcblxuICBib3hBbmltYXRpb246IEFwcGVhcmFuY2VBbmltYXRpb24gfCBEaXNhcHBlYXJhbmNlQW5pbWF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ2RpYWxvZ0JlbG9uZ2luZycpXG4gICAgcHVibGljIGRpYWxvZ0JlbG9uZ2luZzogRGlhbG9nQmVsb25naW5nLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGxheW91dEhlbHBlcjogTGF5b3V0SGVscGVyU2VydmljZVxuICApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYm94QW5pbWF0aW9uID0gdGhpcy5kaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5hbmltYXRpb25JbjtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVTY3JvbGxiYXIoKTsgLy8gaGlkZSBzY3JvbGxiYXIgaWYgY29uZmlnIGVuYWJsZWRcblxuICAgIHRoaXMubG9hZENoaWxkQ29tcG9uZW50KHRoaXMuY2hpbGRDb21wb25lbnRUeXBlKTtcbiAgICB0aGlzLmxvYWRMb2FkZXJDb21wb25lbnQodGhpcy5kaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5sb2FkZXJDb21wb25lbnQpO1xuICAgIHRoaXMuc2V0RGVmYXVsdFJlc3BvbnNlKCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5zZXRDdXN0b21TdHlsZXMoKTtcbiAgfVxuXG4gIGhpZGVTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuaGlkZVNjcm9sbGJhcikge1xuICAgICAgdGhpcy5ib2R5T3ZlcmZsb3cgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuXG4gIHJldmVydFNjcm9sbGJhclNldHRpbmdzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmhpZGVTY3JvbGxiYXIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSB0aGlzLmJvZHlPdmVyZmxvdztcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0UmVzcG9uc2UoKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVzcG9uc2UgPSBuZXcgRGlhbG9nRGVmYXVsdFJlc3BvbnNlKCk7XG4gICAgZGlhbG9nUmVzcG9uc2Uuc2V0QmVsb25naW5nKHRoaXMuZGlhbG9nQmVsb25naW5nKTtcbiAgICB0aGlzLmRpYWxvZ0JlbG9uZ2luZy5ldmVudHNDb250cm9sbGVyLnNldERlZmF1bHRSZXNwb25zZShkaWFsb2dSZXNwb25zZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldmVydFNjcm9sbGJhclNldHRpbmdzKCk7XG5cbiAgICBpZiAodGhpcy5jaGlsZENvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5jaGlsZENvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlckNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5sb2FkZXJDb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVTY3JvbGxlcigpOiB2b2lkIHt9XG5cbiAgbG9hZENoaWxkQ29tcG9uZW50KF9Db21wb25lbnRUeXBlOiBUeXBlPGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX0NvbXBvbmVudFR5cGUpO1xuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmluc2VydGlvblBvaW50LnZpZXdDb250YWluZXJSZWY7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG4gICAgdGhpcy5jaGlsZENvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgdGhpcy5jaGlsZENvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dCZWxvbmdpbmcgPSB0aGlzLmRpYWxvZ0JlbG9uZ2luZztcbiAgfVxuXG4gIGxvYWRMb2FkZXJDb21wb25lbnQoX0xvYWRlclJlZjogVHlwZTxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KF9Mb2FkZXJSZWYpO1xuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmxvYWRlckluc2VydGlvblBvaW50LnZpZXdDb250YWluZXJSZWY7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG4gICAgdGhpcy5sb2FkZXJDb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nQmVsb25naW5nLmV2ZW50c0NvbnRyb2xsZXIuY2xvc2UoKTtcbiAgfVxuXG4gIGNsb3NlUGFyZW50JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYm94QW5pbWF0aW9uID0gdGhpcy5kaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5hbmltYXRpb25PdXQ7XG4gICAgY29uc3QgY2xvc2VEdXJhdGlvbiA9IHRoaXMuZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuYW5pbWF0aW9uT3V0ID8gODAwIDogMjAwO1xuICAgIHRoaXMuZmFkZUluT3V0QW5pbWF0aW9uID0gJ2Nsb3NlLWZhc3QnO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQoJycpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9KS5waXBlKGRlbGF5KGNsb3NlRHVyYXRpb24pKTtcbiAgfVxuXG4gIG9uT3ZlcmxheUNsaWNrZWQoZXZ0OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uT3ZlcmxheUNsaWNrZWQnKTtcbiAgfVxuXG4gIG9uQ3VzdG9tQnV0dG9uKF9CdXR0b246IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nQmVsb25naW5nLmV2ZW50c0NvbnRyb2xsZXIub25CdXR0b25DbGljayhfQnV0dG9uKTtcbiAgfVxuXG4gIGNsb3NlTG9hZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xuICB9XG5cbiAgc2V0Q3VzdG9tU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmN1c3RvbVN0eWxlcy53cmFwcGVyQ1NTICYmIHRoaXMuZWxEaWFsb2dXcmFwcGVyKSB7XG4gICAgICB0aGlzLmVsRGlhbG9nV3JhcHBlci5uYXRpdmVFbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gdGhpcy5kaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5jdXN0b21TdHlsZXMud3JhcHBlckNTUztcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuY3VzdG9tU3R5bGVzLmJ1dHRvblNlY3Rpb25DU1MgJiYgdGhpcy5lbEJ1dHRvbldyYXBwZXIpIHtcbiAgICAgIHRoaXMuZWxCdXR0b25XcmFwcGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSB0aGlzLmRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmN1c3RvbVN0eWxlcy5idXR0b25TZWN0aW9uQ1NTO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5jdXN0b21TdHlsZXMuYnV0dG9uQ1NTICYmIHRoaXMuZWxCdXR0b24pIHtcbiAgICAgIHRoaXMuZWxCdXR0b24uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSB0aGlzLmRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmN1c3RvbVN0eWxlcy5idXR0b25DU1M7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAnLCBbJyRldmVudCddKVxuICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuZXNjYXBlS2V5Q2xvc2UpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJuZ3gtYXdlc29tZS1wb3B1cC1vdmVybGF5IGF3LWRpYWxvZy1tb2RhbFwiXG4gIChkYmxjbGljayk9XCJvbk92ZXJsYXlDbGlja2VkKCRldmVudClcIlxuICBbQGZhZGVJbk91dF09XCJ7XG4gICAgdmFsdWU6IGZhZGVJbk91dEFuaW1hdGlvbixcbiAgICBwYXJhbXM6IHtcbiAgICAgIGNsb3NlRGVsYXk6IGRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmFuaW1hdGlvbk91dCA9PT0gZGlzYXBwZWFyYW5jZUFuaW1hdGlvbi5OT05FID8gJzIwMG1zJyA6ICczMDBtcydcbiAgICB9XG4gIH1cIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZXZvbHZlLXBhcmVudC1kaWFsb2dcIlxuICAgIFtALmRpc2FibGVkXT1cIlxuICAgICAgZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuYW5pbWF0aW9uSW4gPT09IGFwcGVhcmFuY2VBbmltYXRpb24uTk9ORSAmJlxuICAgICAgZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuYW5pbWF0aW9uT3V0ID09PSBkaXNhcHBlYXJhbmNlQW5pbWF0aW9uLk5PTkVcbiAgICBcIlxuICAgIFtAYm94QW5pbWF0aW9uc109XCJib3hBbmltYXRpb25cIlxuICAgICNlbERpYWxvZ1dyYXBwZXJcbiAgICBbbmdTdHlsZV09XCJcbiAgICAgIGRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmZ1bGxTY3JlZW4gJiYge1xuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAnXG4gICAgICB9XG4gICAgXCJcbiAgICBbY2xhc3NOYW1lXT1cImxheW91dEhlbHBlci5nZXRCb3hDbGFzc2VzKGRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmxheW91dFR5cGUsICdldm9sdmUtcGFyZW50LWRpYWxvZycpXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJsb2FkZXItaG9sZGVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAhZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuZGlzcGxheUxvYWRlciA/ICdkaWFsb2ctbG9hZGVyLW9mZicgOiBzaG93TG9hZGVyID8gJ2RpYWxvZy1sb2FkZXItYWN0aXZlJyA6ICdkaWFsb2ctbG9hZGVyLWdvbmUnXG4gICAgICBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctbG9hZGVyXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBhcHBJbnNlcnRpb25Mb2FkZXI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuZnVsbFNjcmVlbjsgZWxzZSBmdWxsU2NyZWVuXCI+PC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNmdWxsU2NyZWVuPjwvbmctdGVtcGxhdGU+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjb250ZW50LWhvbGRlclwiXG4gICAgICBbbmdTdHlsZV09XCJcbiAgICAgICAgZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuZnVsbFNjcmVlblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICB3aWR0aDogZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcud2lkdGgsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiBkaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5taW5XaWR0aCxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IGRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLm1heFdpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGRpYWxvZ0JlbG9uZ2luZy5kaWFsb2dDb3JlQ29uZmlnLmhlaWdodCxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBkaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5taW5IZWlnaHQsXG4gICAgICAgICAgICAgIG1heEhlaWdodDogZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcubWF4SGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjb21wb25lbnQtY29udGVudFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICFkaWFsb2dCZWxvbmdpbmcuZGlhbG9nQ29yZUNvbmZpZy5kaXNwbGF5TG9hZGVyXG4gICAgICAgICAgICA/ICdjb21wb25lbnQtY29udGVudC1sb2FkZXItb2ZmJ1xuICAgICAgICAgICAgOiBzaG93TG9hZGVyXG4gICAgICAgICAgICA/ICdjb21wb25lbnQtY29udGVudC1wcmVwYXJpbmcnXG4gICAgICAgICAgICA6ICdjb21wb25lbnQtY29udGVudC1yZWFkeSdcbiAgICAgICAgXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBhcHBJbnNlcnRpb24+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIiAjZWxCdXR0b25XcmFwcGVyPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJ1dHRvbi1zZWN0aW9uXCJcbiAgICAgICAgKm5nSWY9XCJkaWFsb2dCZWxvbmdpbmcuYnV0dG9ucy5sZW5ndGggPiAwXCJcbiAgICAgICAgW25nU3R5bGVdPVwie1xuICAgICAgICAgICd0ZXh0LWFsaWduJzogZGlhbG9nQmVsb25naW5nLmRpYWxvZ0NvcmVDb25maWcuYnV0dG9uUG9zaXRpb25cbiAgICAgICAgfVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgI2VsQnV0dG9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBkaWFsb2dCZWxvbmdpbmcuYnV0dG9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ3VzdG9tQnV0dG9uKGJ1dHRvbilcIlxuICAgICAgICAgIFtjbGFzc05hbWVdPVwibGF5b3V0SGVscGVyLmdldEJ1dHRvbkNsYXNzZXMoYnV0dG9uLmxheW91dFR5cGUsICdlZC1idG4gZWQtYnRuLWxnJylcIj5cbiAgICAgICAgICB7eyBidXR0b24ubGFiZWwgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==