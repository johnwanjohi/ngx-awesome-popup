import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { boxAnimations } from '../../../core/animations/box.animations';
import { fadeInOut } from '../../../core/animations/fade-in-out.animation';
import { GlobalConfigService } from '../../../core/global-config.service';
import { LayoutHelperService } from '../../../core/layout-helper.service';
import { ToastNotificationBelonging } from '../core/classes';
import { WrapperAbstraction } from '../core/wrapper-abstraction';
export class ToastNotificationWrapperComponent extends WrapperAbstraction {
    constructor(toastNotificationBelonging, gConfig, cd, layoutHelper) {
        super(toastNotificationBelonging, layoutHelper);
        this.toastNotificationBelonging = toastNotificationBelonging;
        this.gConfig = gConfig;
        this.cd = cd;
        this.layoutHelper = layoutHelper;
    }
    ngAfterViewInit() {
        this.setResponse(false);
        this.cd.detectChanges();
        this.autoClose();
        this.setCustomStyles();
    }
}
ToastNotificationWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toast-notification-wrapper',
                template: "<div\n  class=\"toast-wrapper standard-toast\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: toastNotificationBelonging.toastCoreConfig.animationOut === 0 ? '200ms' : '300ms'\n    }\n  }\">\n  <div\n    [@.disabled]=\"\n      toastNotificationBelonging.toastCoreConfig.animationIn === 0 && toastNotificationBelonging.toastCoreConfig.animationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    (mouseover)=\"mouseOver()\"\n    (mouseout)=\"mouseOut()\"\n    (click)=\"onToastClicked($event)\"\n    [className]=\"layoutHelper.getBoxClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'evolve-toast')\">\n    <div class=\"toast-title-content\" #elTitleWrapper *ngIf=\"toastNotificationBelonging.dispatch.title\">\n      <div class=\"dont-break-out\">\n        <div class=\"text-wrapper dont-break-out\">\n          {{ toastNotificationBelonging.dispatch.title }}\n          <span class=\"close-ico icon-times-circle\" (click)=\"closeIcon()\" *ngIf=\"!buttonsExist\"></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-holder toast-text\" #elTextWrapper *ngIf=\"toastNotificationBelonging.dispatch.message\">\n      <div class=\"icon-section\" *ngIf=\"!toastNotificationBelonging.toastCoreConfig.disableIcon\">\n        <span [className]=\"getIconClasses()\"></span>\n      </div>\n      <div\n        class=\"text-wrapper-section toast-inner-content\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.toastCoreConfig.textPosition\n        }\"\n        [ngClass]=\"{\n          'only-message': !toastNotificationBelonging.dispatch.title\n        }\">\n        <div class=\"dont-break-out\">\n          <div class=\"text-wrapper dont-break-out\" *ngIf=\"!toastNotificationBelonging.toastCoreConfig.allowHtmlMessage\">\n            <p>{{ toastNotificationBelonging.dispatch.message }}</p>\n          </div>\n          <div\n            class=\"text-wrapper\"\n            *ngIf=\"toastNotificationBelonging.toastCoreConfig.allowHtmlMessage\"\n            [innerHTML]=\"toastNotificationBelonging.dispatch.message\"></div>\n        </div>\n      </div>\n      <span\n        class=\"close-ico icon-times-circle\"\n        (click)=\"closeIcon()\"\n        *ngIf=\"buttonsExist && !toastNotificationBelonging.dispatch.title\"></span>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"toastNotificationBelonging.buttons.length\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition\n        }\">\n        <button\n          #elButton\n          *ngFor=\"let button of toastNotificationBelonging.buttons\"\n          (click)=\"onCustomButton(button)\"\n          [className]=\"layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-sm')\">\n          {{ button.label }}\n        </button>\n      </div>\n\n      <div\n        class=\"button-section\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition\n        }\"\n        *ngIf=\"\n          !toastNotificationBelonging.buttons.length &&\n          (toastNotificationBelonging.toastCoreConfig.declineLabel || toastNotificationBelonging.toastCoreConfig.confirmLabel)\n        \">\n        <button\n          #elButton\n          *ngIf=\"toastNotificationBelonging.toastCoreConfig.confirmLabel\"\n          (click)=\"onButtonClick('confirm')\"\n          [className]=\"\n            layoutHelper.getButtonClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'ed-btn ed-btn-sm', 'auto-button')\n          \">\n          {{ toastNotificationBelonging.toastCoreConfig.confirmLabel }}\n        </button>\n        <button\n          class=\"ed-btn ed-btn-sm ed-btn-secondary\"\n          #elButton\n          (click)=\"onButtonClick('decline')\"\n          *ngIf=\"toastNotificationBelonging.toastCoreConfig.declineLabel\">\n          {{ toastNotificationBelonging.toastCoreConfig.declineLabel }}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"progress-bar-container\" *ngIf=\"!buttonsExist && toastNotificationBelonging.toastCoreConfig.progressBar !== 0\">\n      <div\n        class=\"progress-bar\"\n        [ngStyle]=\"{\n          width: (toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? timer.Progress : timer.Remaining) + '%'\n        }\"></div>\n    </div>\n  </div>\n</div>\n",
                animations: [fadeInOut(), boxAnimations()],
                providers: [LayoutHelperService]
            },] }
];
ToastNotificationWrapperComponent.ctorParameters = () => [
    { type: ToastNotificationBelonging, decorators: [{ type: Inject, args: ['toastNotificationBelonging',] }] },
    { type: GlobalConfigService },
    { type: ChangeDetectorRef },
    { type: LayoutHelperService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm90aWZpY2F0aW9uLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvdHlwZXMvdG9hc3Qtbm90aWZpY2F0aW9uL3RvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyL3RvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVFqRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsa0JBQWtCO0lBQ3ZFLFlBRVMsMEJBQXNELEVBQ3RELE9BQTRCLEVBQzNCLEVBQXFCLEVBQ3RCLFlBQWlDO1FBRXhDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUx6QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzNCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUcxQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsNjZJQUEwRDtnQkFDMUQsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7WUFSUSwwQkFBMEIsdUJBVzlCLE1BQU0sU0FBQyw0QkFBNEI7WUFiL0IsbUJBQW1CO1lBSEosaUJBQWlCO1lBSWhDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYm94QW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5pbWF0aW9ucy9ib3guYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmYWRlSW5PdXQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FuaW1hdGlvbnMvZmFkZS1pbi1vdXQuYW5pbWF0aW9uJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dsb2JhbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9sYXlvdXQtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcgfSBmcm9tICcuLi9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHsgV3JhcHBlckFic3RyYWN0aW9uIH0gZnJvbSAnLi4vY29yZS93cmFwcGVyLWFic3RyYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW2ZhZGVJbk91dCgpLCBib3hBbmltYXRpb25zKCldLFxuICBwcm92aWRlcnM6IFtMYXlvdXRIZWxwZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE5vdGlmaWNhdGlvbldyYXBwZXJDb21wb25lbnQgZXh0ZW5kcyBXcmFwcGVyQWJzdHJhY3Rpb24gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgndG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcnKVxuICAgIHB1YmxpYyB0b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZzogVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcsXG4gICAgcHVibGljIGdDb25maWc6IEdsb2JhbENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGxheW91dEhlbHBlcjogTGF5b3V0SGVscGVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcih0b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZywgbGF5b3V0SGVscGVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFJlc3BvbnNlKGZhbHNlKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmF1dG9DbG9zZSgpO1xuICAgIHRoaXMuc2V0Q3VzdG9tU3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==