import { Inject, Injectable } from '@angular/core';
import { ToastNotificationClass } from './model';
import { GlobalClass } from '../../../core/global';
import { DialogLayoutDisplay } from '../../../core/enums';
import * as i0 from "@angular/core";
export class ToastNotificationConfigService {
    constructor(userConfig = {}) {
        this.userConfig = userConfig;
        this.authorConfig = new ToastNotificationClass.Settings();
        this.productionConfig = new ToastNotificationClass.Settings();
        // region *** confirmBox userConfig (user input app-module) ***
        const userConfigBase = new ToastNotificationClass.Settings();
        const dataControl = new GlobalClass.DataControl();
        dataControl.copyValuesFrom(userConfig.ToastCoreConfig, userConfigBase.ToastCoreConfig); // this will make sure that object has right properties
        userConfig.ToastCoreConfig = userConfigBase.ToastCoreConfig;
        // endregion
        // region *** author default config values (if there is no user input) ***
        this.authorConfig.ToastCoreConfig.Width = 'auto';
        this.authorConfig.ToastCoreConfig.Height = 'auto';
        this.authorConfig.ToastCoreConfig.ButtonPosition = 'right';
        // this.authorConfig.ToastCoreConfig.ConfirmLabel   = 'Confirm';
        // this.authorConfig.ToastCoreConfig.DeclineLabel   = 'Decline';
        this.authorConfig.ToastCoreConfig.AutoCloseDelay = 2500;
        this.authorConfig.ToastCoreConfig.LayoutType = DialogLayoutDisplay.NONE;
        this.authorConfig.GlobalSettings.AllowedMessagesAtOnce = 5;
        // endregion
        // region *** Production setup ***
        dataControl.copyValuesFrom(this.authorConfig.GlobalSettings, this.productionConfig.GlobalSettings);
        dataControl.copyValuesFrom(userConfig.GlobalSettings, this.productionConfig.GlobalSettings);
        dataControl.copyValuesFrom(this.authorConfig.ToastCoreConfig, this.productionConfig.ToastCoreConfig);
        dataControl.copyValuesFrom(userConfig.ToastCoreConfig, this.productionConfig.ToastCoreConfig);
        // endregion
    }
}
ToastNotificationConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastNotificationConfigService_Factory() { return new ToastNotificationConfigService(i0.ɵɵinject("toastNotificationConfig")); }, token: ToastNotificationConfigService, providedIn: "root" });
ToastNotificationConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ToastNotificationConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['toastNotificationConfig',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm90aWZpY2F0aW9uLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvdHlwZXMvdG9hc3Qtbm90aWZpY2F0aW9uL2NvcmUvdG9hc3Qtbm90aWZpY2F0aW9uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxzQkFBc0IsRUFBNkIsTUFBTSxTQUFTLENBQUM7QUFDM0UsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUt4RCxNQUFNLE9BQU8sOEJBQThCO0lBTXZDLFlBQXVELGFBQXNFLEVBQUU7UUFBeEUsZUFBVSxHQUFWLFVBQVUsQ0FBOEQ7UUFKL0gsaUJBQVksR0FBZ0UsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsSCxxQkFBZ0IsR0FBNEQsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUs5RywrREFBK0Q7UUFDL0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3RCxNQUFNLFdBQVcsR0FBTSxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsdURBQXVEO1FBRS9JLFVBQVUsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUM1RCxZQUFZO1FBRVosMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBWSxNQUFNLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFXLE1BQU0sQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQzNELGdFQUFnRTtRQUNoRSxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsY0FBYyxHQUFTLElBQUksQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQWEsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUUzRCxZQUFZO1FBRVosa0NBQWtDO1FBRWxDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25HLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUYsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RixZQUFZO0lBQ2hCLENBQUM7Ozs7WUF0Q0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7NENBT2dCLE1BQU0sU0FBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RvYXN0Tm90aWZpY2F0aW9uQ2xhc3MsIFRvYXN0Tm90aWZpY2F0aW9uSW50ZXJmYWNlfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7R2xvYmFsQ2xhc3N9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2xvYmFsJztcbmltcG9ydCB7RGlhbG9nTGF5b3V0RGlzcGxheX0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3ROb3RpZmljYXRpb25Db25maWdTZXJ2aWNlIHtcbiAgICBcbiAgICBhdXRob3JDb25maWc6IFRvYXN0Tm90aWZpY2F0aW9uSW50ZXJmYWNlLklUb2FzdE5vdGlmaWNhdGlvblVzZXJDb25maWcgICAgID0gbmV3IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuU2V0dGluZ3MoKTtcbiAgICBwcm9kdWN0aW9uQ29uZmlnOiBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JVG9hc3ROb3RpZmljYXRpb25Vc2VyQ29uZmlnID0gbmV3IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuU2V0dGluZ3MoKTtcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCd0b2FzdE5vdGlmaWNhdGlvbkNvbmZpZycpIHByaXZhdGUgdXNlckNvbmZpZzogVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVRvYXN0Tm90aWZpY2F0aW9uVXNlckNvbmZpZyA9IHt9KSB7XG4gICAgICAgIFxuICAgICAgICAvLyByZWdpb24gKioqIGNvbmZpcm1Cb3ggdXNlckNvbmZpZyAodXNlciBpbnB1dCBhcHAtbW9kdWxlKSAqKipcbiAgICAgICAgY29uc3QgdXNlckNvbmZpZ0Jhc2UgPSBuZXcgVG9hc3ROb3RpZmljYXRpb25DbGFzcy5TZXR0aW5ncygpO1xuICAgICAgICBjb25zdCBkYXRhQ29udHJvbCAgICA9IG5ldyBHbG9iYWxDbGFzcy5EYXRhQ29udHJvbCgpO1xuICAgICAgICBkYXRhQ29udHJvbC5jb3B5VmFsdWVzRnJvbSh1c2VyQ29uZmlnLlRvYXN0Q29yZUNvbmZpZywgdXNlckNvbmZpZ0Jhc2UuVG9hc3RDb3JlQ29uZmlnKTsgLy8gdGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IG9iamVjdCBoYXMgcmlnaHQgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgdXNlckNvbmZpZy5Ub2FzdENvcmVDb25maWcgPSB1c2VyQ29uZmlnQmFzZS5Ub2FzdENvcmVDb25maWc7XG4gICAgICAgIC8vIGVuZHJlZ2lvblxuICAgICAgICBcbiAgICAgICAgLy8gcmVnaW9uICoqKiBhdXRob3IgZGVmYXVsdCBjb25maWcgdmFsdWVzIChpZiB0aGVyZSBpcyBubyB1c2VyIGlucHV0KSAqKipcbiAgICAgICAgdGhpcy5hdXRob3JDb25maWcuVG9hc3RDb3JlQ29uZmlnLldpZHRoICAgICAgICAgID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLmF1dGhvckNvbmZpZy5Ub2FzdENvcmVDb25maWcuSGVpZ2h0ICAgICAgICAgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuYXV0aG9yQ29uZmlnLlRvYXN0Q29yZUNvbmZpZy5CdXR0b25Qb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIC8vIHRoaXMuYXV0aG9yQ29uZmlnLlRvYXN0Q29yZUNvbmZpZy5Db25maXJtTGFiZWwgICA9ICdDb25maXJtJztcbiAgICAgICAgLy8gdGhpcy5hdXRob3JDb25maWcuVG9hc3RDb3JlQ29uZmlnLkRlY2xpbmVMYWJlbCAgID0gJ0RlY2xpbmUnO1xuICAgICAgICB0aGlzLmF1dGhvckNvbmZpZy5Ub2FzdENvcmVDb25maWcuQXV0b0Nsb3NlRGVsYXkgICAgICAgPSAyNTAwO1xuICAgICAgICB0aGlzLmF1dGhvckNvbmZpZy5Ub2FzdENvcmVDb25maWcuTGF5b3V0VHlwZSAgICAgICAgICAgPSBEaWFsb2dMYXlvdXREaXNwbGF5Lk5PTkU7XG4gICAgICAgIHRoaXMuYXV0aG9yQ29uZmlnLkdsb2JhbFNldHRpbmdzLkFsbG93ZWRNZXNzYWdlc0F0T25jZSA9IDU7XG5cbiAgICAgICAgLy8gZW5kcmVnaW9uXG4gICAgICAgIFxuICAgICAgICAvLyByZWdpb24gKioqIFByb2R1Y3Rpb24gc2V0dXAgKioqXG4gICAgICAgIFxuICAgICAgICBkYXRhQ29udHJvbC5jb3B5VmFsdWVzRnJvbSh0aGlzLmF1dGhvckNvbmZpZy5HbG9iYWxTZXR0aW5ncywgdGhpcy5wcm9kdWN0aW9uQ29uZmlnLkdsb2JhbFNldHRpbmdzKTtcbiAgICAgICAgZGF0YUNvbnRyb2wuY29weVZhbHVlc0Zyb20odXNlckNvbmZpZy5HbG9iYWxTZXR0aW5ncywgdGhpcy5wcm9kdWN0aW9uQ29uZmlnLkdsb2JhbFNldHRpbmdzKTtcbiAgICAgICAgZGF0YUNvbnRyb2wuY29weVZhbHVlc0Zyb20odGhpcy5hdXRob3JDb25maWcuVG9hc3RDb3JlQ29uZmlnLCB0aGlzLnByb2R1Y3Rpb25Db25maWcuVG9hc3RDb3JlQ29uZmlnKTtcbiAgICAgICAgZGF0YUNvbnRyb2wuY29weVZhbHVlc0Zyb20odXNlckNvbmZpZy5Ub2FzdENvcmVDb25maWcsIHRoaXMucHJvZHVjdGlvbkNvbmZpZy5Ub2FzdENvcmVDb25maWcpO1xuICAgICAgICAvLyBlbmRyZWdpb25cbiAgICB9XG59XG4iXX0=