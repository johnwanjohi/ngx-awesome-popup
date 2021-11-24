import { Inject, Injectable } from '@angular/core';
import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation } from '../../../core/enums';
import { DataControl } from '../../../core/global-classes';
import { DefaultLoaderComponent } from '../../../default-loader/default-loader.component';
import { DialogCustomStyles, DialogSettings } from './classes';
import * as i0 from "@angular/core";
export class DialogConfigService {
    constructor(userConfig = {}) {
        this.userConfig = userConfig;
        this.authorConfig = new DialogSettings();
        this.productionConfig = new DialogSettings();
        // region *** dialog userConfig (user input app-module) ***
        const userConfigBase = new DialogSettings();
        const dataControl = new DataControl();
        dataControl.copyValuesFrom(userConfig.DialogCoreConfig, userConfigBase.DialogCoreConfig); // this will make sure that object has right properties
        userConfig.DialogCoreConfig = userConfigBase.DialogCoreConfig;
        if (userConfig.DialogCoreConfig.LoaderComponent !== null) {
            userConfig.DialogCoreConfig.DisplayLoader = userConfig.DialogCoreConfig.DisplayLoader === null;
        }
        // endregion
        // region *** author default config values (if there is no user input) ***
        this.authorConfig.DialogCoreConfig.Width = 'auto';
        this.authorConfig.DialogCoreConfig.Height = 'auto';
        this.authorConfig.DialogCoreConfig.HideScrollbar = false;
        this.authorConfig.DialogCoreConfig.EscapeKeyClose = false;
        this.authorConfig.DialogCoreConfig.ButtonPosition = 'right';
        this.authorConfig.DialogCoreConfig.DisplayLoader = false;
        this.authorConfig.DialogCoreConfig.FullScreen = false;
        this.authorConfig.DialogCoreConfig.LayoutType = DialogLayoutDisplay.NONE;
        this.authorConfig.DialogCoreConfig.LoaderComponent = DefaultLoaderComponent;
        this.authorConfig.DialogCoreConfig.AnimationIn = AppearanceAnimation.ZOOM_IN;
        this.authorConfig.DialogCoreConfig.AnimationOut = DisappearanceAnimation.ZOOM_OUT;
        this.authorConfig.DialogCoreConfig.CustomStyles = new DialogCustomStyles();
        // endregion
        dataControl.copyValuesFrom(this.authorConfig.DialogCoreConfig, this.productionConfig.DialogCoreConfig);
        dataControl.copyValuesFrom(userConfig.DialogCoreConfig, this.productionConfig.DialogCoreConfig);
        // Buttons
        /*if(userConfig.Buttons){
                this.config.Buttons.push(
                    new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY)
                    ,new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
                );
            }*/
    }
}
DialogConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogConfigService_Factory() { return new DialogConfigService(i0.ɵɵinject("dialogConfig")); }, token: DialogConfigService, providedIn: "root" });
DialogConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DialogConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['dialogConfig',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvdHlwZXMvZGlhbG9nL2NvcmUvZGlhbG9nLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQU0vRCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBRVUsYUFBZ0MsRUFBRTtRQUFsQyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUw1QyxpQkFBWSxHQUFzQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3ZELHFCQUFnQixHQUFzQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBTXpELDJEQUEyRDtRQUMzRCxNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQzVDLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDdEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyx1REFBdUQ7UUFDakosVUFBVSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUU5RCxJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQ3hELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7U0FDaEc7UUFDRCxZQUFZO1FBRVosMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1FBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztRQUNsRixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFFM0UsWUFBWTtRQUVaLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVoRyxVQUFVO1FBQ1Y7Ozs7O2VBS0M7SUFDSCxDQUFDOzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQU1JLE1BQU0sU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBlYXJhbmNlQW5pbWF0aW9uLCBEaWFsb2dMYXlvdXREaXNwbGF5LCBEaXNhcHBlYXJhbmNlQW5pbWF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcyc7XG5pbXBvcnQgeyBEYXRhQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2xvYmFsLWNsYXNzZXMnO1xuaW1wb3J0IHsgRGVmYXVsdExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2RlZmF1bHQtbG9hZGVyL2RlZmF1bHQtbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dDdXN0b21TdHlsZXMsIERpYWxvZ1NldHRpbmdzIH0gZnJvbSAnLi9jbGFzc2VzJztcbmltcG9ydCB7IElEaWFsb2dVc2VyQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29uZmlnU2VydmljZSB7XG4gIGF1dGhvckNvbmZpZzogSURpYWxvZ1VzZXJDb25maWcgPSBuZXcgRGlhbG9nU2V0dGluZ3MoKTtcbiAgcHJvZHVjdGlvbkNvbmZpZzogSURpYWxvZ1VzZXJDb25maWcgPSBuZXcgRGlhbG9nU2V0dGluZ3MoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdkaWFsb2dDb25maWcnKVxuICAgIHByaXZhdGUgdXNlckNvbmZpZzogSURpYWxvZ1VzZXJDb25maWcgPSB7fVxuICApIHtcbiAgICAvLyByZWdpb24gKioqIGRpYWxvZyB1c2VyQ29uZmlnICh1c2VyIGlucHV0IGFwcC1tb2R1bGUpICoqKlxuICAgIGNvbnN0IHVzZXJDb25maWdCYXNlID0gbmV3IERpYWxvZ1NldHRpbmdzKCk7XG4gICAgY29uc3QgZGF0YUNvbnRyb2wgPSBuZXcgRGF0YUNvbnRyb2woKTtcbiAgICBkYXRhQ29udHJvbC5jb3B5VmFsdWVzRnJvbSh1c2VyQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcsIHVzZXJDb25maWdCYXNlLkRpYWxvZ0NvcmVDb25maWcpOyAvLyB0aGlzIHdpbGwgbWFrZSBzdXJlIHRoYXQgb2JqZWN0IGhhcyByaWdodCBwcm9wZXJ0aWVzXG4gICAgdXNlckNvbmZpZy5EaWFsb2dDb3JlQ29uZmlnID0gdXNlckNvbmZpZ0Jhc2UuRGlhbG9nQ29yZUNvbmZpZztcblxuICAgIGlmICh1c2VyQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcuTG9hZGVyQ29tcG9uZW50ICE9PSBudWxsKSB7XG4gICAgICB1c2VyQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcuRGlzcGxheUxvYWRlciA9IHVzZXJDb25maWcuRGlhbG9nQ29yZUNvbmZpZy5EaXNwbGF5TG9hZGVyID09PSBudWxsO1xuICAgIH1cbiAgICAvLyBlbmRyZWdpb25cblxuICAgIC8vIHJlZ2lvbiAqKiogYXV0aG9yIGRlZmF1bHQgY29uZmlnIHZhbHVlcyAoaWYgdGhlcmUgaXMgbm8gdXNlciBpbnB1dCkgKioqXG4gICAgdGhpcy5hdXRob3JDb25maWcuRGlhbG9nQ29yZUNvbmZpZy5XaWR0aCA9ICdhdXRvJztcbiAgICB0aGlzLmF1dGhvckNvbmZpZy5EaWFsb2dDb3JlQ29uZmlnLkhlaWdodCA9ICdhdXRvJztcbiAgICB0aGlzLmF1dGhvckNvbmZpZy5EaWFsb2dDb3JlQ29uZmlnLkhpZGVTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICB0aGlzLmF1dGhvckNvbmZpZy5EaWFsb2dDb3JlQ29uZmlnLkVzY2FwZUtleUNsb3NlID0gZmFsc2U7XG4gICAgdGhpcy5hdXRob3JDb25maWcuRGlhbG9nQ29yZUNvbmZpZy5CdXR0b25Qb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgdGhpcy5hdXRob3JDb25maWcuRGlhbG9nQ29yZUNvbmZpZy5EaXNwbGF5TG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5hdXRob3JDb25maWcuRGlhbG9nQ29yZUNvbmZpZy5GdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5hdXRob3JDb25maWcuRGlhbG9nQ29yZUNvbmZpZy5MYXlvdXRUeXBlID0gRGlhbG9nTGF5b3V0RGlzcGxheS5OT05FO1xuICAgIHRoaXMuYXV0aG9yQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcuTG9hZGVyQ29tcG9uZW50ID0gRGVmYXVsdExvYWRlckNvbXBvbmVudDtcbiAgICB0aGlzLmF1dGhvckNvbmZpZy5EaWFsb2dDb3JlQ29uZmlnLkFuaW1hdGlvbkluID0gQXBwZWFyYW5jZUFuaW1hdGlvbi5aT09NX0lOO1xuICAgIHRoaXMuYXV0aG9yQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcuQW5pbWF0aW9uT3V0ID0gRGlzYXBwZWFyYW5jZUFuaW1hdGlvbi5aT09NX09VVDtcbiAgICB0aGlzLmF1dGhvckNvbmZpZy5EaWFsb2dDb3JlQ29uZmlnLkN1c3RvbVN0eWxlcyA9IG5ldyBEaWFsb2dDdXN0b21TdHlsZXMoKTtcblxuICAgIC8vIGVuZHJlZ2lvblxuXG4gICAgZGF0YUNvbnRyb2wuY29weVZhbHVlc0Zyb20odGhpcy5hdXRob3JDb25maWcuRGlhbG9nQ29yZUNvbmZpZywgdGhpcy5wcm9kdWN0aW9uQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcpO1xuICAgIGRhdGFDb250cm9sLmNvcHlWYWx1ZXNGcm9tKHVzZXJDb25maWcuRGlhbG9nQ29yZUNvbmZpZywgdGhpcy5wcm9kdWN0aW9uQ29uZmlnLkRpYWxvZ0NvcmVDb25maWcpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIC8qaWYodXNlckNvbmZpZy5CdXR0b25zKXtcblx0XHRcdHRoaXMuY29uZmlnLkJ1dHRvbnMucHVzaChcblx0XHRcdFx0bmV3IEJ1dHRvbk1ha2VyKCdPaycsICdvaycsIEJ1dHRvbkxheW91dERpc3BsYXkuUFJJTUFSWSlcblx0XHRcdFx0LG5ldyBCdXR0b25NYWtlcignQ2FuY2VsJywgJ2NhbmNlbCcsIEJ1dHRvbkxheW91dERpc3BsYXkuU0VDT05EQVJZKVxuXHRcdFx0KTtcblx0XHR9Ki9cbiAgfVxufVxuIl19