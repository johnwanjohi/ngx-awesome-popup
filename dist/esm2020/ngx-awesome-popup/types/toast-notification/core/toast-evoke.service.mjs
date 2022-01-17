var _ToastEvokeService_instances, _ToastEvokeService_extender;
import { __classPrivateFieldGet } from "tslib";
import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '../../../core/enums';
import { ToastNotificationInitializer } from './classes';
import * as i0 from "@angular/core";
export class ToastEvokeService {
    constructor() {
        _ToastEvokeService_instances.add(this);
    }
    success(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.SUCCESS
        });
        return toast.openToastNotification$();
    }
    info(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.INFO
        });
        return toast.openToastNotification$();
    }
    warning(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.WARNING
        });
        return toast.openToastNotification$();
    }
    danger(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.DANGER
        });
        return toast.openToastNotification$();
    }
    customOne(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_ONE
        });
        return toast.openToastNotification$();
    }
    customTwo(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_TWO
        });
        return toast.openToastNotification$();
    }
    customThree(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_THREE
        });
        return toast.openToastNotification$();
    }
    customFour(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_FOUR
        });
        return toast.openToastNotification$();
    }
    customFive(title, message, confirmLabel, declineLabel) {
        const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        toast.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_FIVE
        });
        return toast.openToastNotification$();
    }
}
_ToastEvokeService_instances = new WeakSet(), _ToastEvokeService_extender = function _ToastEvokeService_extender(title, message, confirmLabel, declineLabel) {
    const toast = new ToastNotificationInitializer();
    toast.setTitle(title);
    toast.setMessage(message);
    toast.setButtonLabels(confirmLabel, declineLabel);
    return toast;
};
ToastEvokeService.ɵfac = function ToastEvokeService_Factory(t) { return new (t || ToastEvokeService)(); };
ToastEvokeService.ɵprov = i0.ɵɵdefineInjectable({ token: ToastEvokeService, factory: ToastEvokeService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastEvokeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtZXZva2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1hd2Vzb21lLXBvcHVwL3R5cGVzL3RvYXN0LW5vdGlmaWNhdGlvbi9jb3JlL3RvYXN0LWV2b2tlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFNekQsTUFBTSxPQUFPLGlCQUFpQjtJQUg5Qjs7S0FtRkM7SUEvRUMsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjtRQUNsRixNQUFNLEtBQUssR0FBRyx1QkFBQSxJQUFJLGlFQUFVLE1BQWQsSUFBSSxFQUFXLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDZCxVQUFVLEVBQUUsbUJBQW1CLENBQUMsT0FBTztTQUN4QyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxZQUFxQixFQUFFLFlBQXFCO1FBQy9FLE1BQU0sS0FBSyxHQUFHLHVCQUFBLElBQUksaUVBQVUsTUFBZCxJQUFJLEVBQVcsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNkLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJO1NBQ3JDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLFlBQXFCLEVBQUUsWUFBcUI7UUFDbEYsTUFBTSxLQUFLLEdBQUcsdUJBQUEsSUFBSSxpRUFBVSxNQUFkLElBQUksRUFBVyxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2QsVUFBVSxFQUFFLG1CQUFtQixDQUFDLE9BQU87U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjtRQUNqRixNQUFNLEtBQUssR0FBRyx1QkFBQSxJQUFJLGlFQUFVLE1BQWQsSUFBSSxFQUFXLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDZCxVQUFVLEVBQUUsbUJBQW1CLENBQUMsTUFBTTtTQUN2QyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxZQUFxQixFQUFFLFlBQXFCO1FBQ3BGLE1BQU0sS0FBSyxHQUFHLHVCQUFBLElBQUksaUVBQVUsTUFBZCxJQUFJLEVBQVcsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNkLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1NBQzNDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLFlBQXFCLEVBQUUsWUFBcUI7UUFDcEYsTUFBTSxLQUFLLEdBQUcsdUJBQUEsSUFBSSxpRUFBVSxNQUFkLElBQUksRUFBVyxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2QsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7U0FDM0MsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsWUFBcUIsRUFBRSxZQUFxQjtRQUN0RixNQUFNLEtBQUssR0FBRyx1QkFBQSxJQUFJLGlFQUFVLE1BQWQsSUFBSSxFQUFXLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDZCxVQUFVLEVBQUUsbUJBQW1CLENBQUMsWUFBWTtTQUM3QyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxZQUFxQixFQUFFLFlBQXFCO1FBQ3JGLE1BQU0sS0FBSyxHQUFHLHVCQUFBLElBQUksaUVBQVUsTUFBZCxJQUFJLEVBQVcsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNkLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXO1NBQzVDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLFlBQXFCLEVBQUUsWUFBcUI7UUFDckYsTUFBTSxLQUFLLEdBQUcsdUJBQUEsSUFBSSxpRUFBVSxNQUFkLElBQUksRUFBVyxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2QsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFdBQVc7U0FDNUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4QyxDQUFDOztpSEFFUyxLQUFhLEVBQUUsT0FBZSxFQUFFLFlBQXFCLEVBQUUsWUFBcUI7SUFDcEYsTUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO0lBQ2pELEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixLQUFLLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7a0ZBL0VVLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGlhbG9nTGF5b3V0RGlzcGxheSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMnO1xuaW1wb3J0IHsgVG9hc3ROb3RpZmljYXRpb25Jbml0aWFsaXplciB9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBJVG9hc3ROb3RpZmljYXRpb25QdWJsaWNSZXNwb25zZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0RXZva2VTZXJ2aWNlIHtcbiAgc3VjY2Vzcyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbD86IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJVG9hc3ROb3RpZmljYXRpb25QdWJsaWNSZXNwb25zZT4ge1xuICAgIGNvbnN0IHRvYXN0ID0gdGhpcy4jZXh0ZW5kZXIodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCwgZGVjbGluZUxhYmVsKTtcbiAgICB0b2FzdC5zZXRDb25maWcoe1xuICAgICAgbGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheS5TVUNDRVNTXG4gICAgfSk7XG4gICAgcmV0dXJuIHRvYXN0Lm9wZW5Ub2FzdE5vdGlmaWNhdGlvbiQoKTtcbiAgfVxuXG4gIGluZm8odGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw/OiBzdHJpbmcsIGRlY2xpbmVMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8SVRvYXN0Tm90aWZpY2F0aW9uUHVibGljUmVzcG9uc2U+IHtcbiAgICBjb25zdCB0b2FzdCA9IHRoaXMuI2V4dGVuZGVyKHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgdG9hc3Quc2V0Q29uZmlnKHtcbiAgICAgIGxheW91dFR5cGU6IERpYWxvZ0xheW91dERpc3BsYXkuSU5GT1xuICAgIH0pO1xuICAgIHJldHVybiB0b2FzdC5vcGVuVG9hc3ROb3RpZmljYXRpb24kKCk7XG4gIH1cblxuICB3YXJuaW5nKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29uZmlybUxhYmVsPzogc3RyaW5nLCBkZWNsaW5lTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPElUb2FzdE5vdGlmaWNhdGlvblB1YmxpY1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgdG9hc3QgPSB0aGlzLiNleHRlbmRlcih0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsLCBkZWNsaW5lTGFiZWwpO1xuICAgIHRvYXN0LnNldENvbmZpZyh7XG4gICAgICBsYXlvdXRUeXBlOiBEaWFsb2dMYXlvdXREaXNwbGF5LldBUk5JTkdcbiAgICB9KTtcbiAgICByZXR1cm4gdG9hc3Qub3BlblRvYXN0Tm90aWZpY2F0aW9uJCgpO1xuICB9XG5cbiAgZGFuZ2VyKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29uZmlybUxhYmVsPzogc3RyaW5nLCBkZWNsaW5lTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPElUb2FzdE5vdGlmaWNhdGlvblB1YmxpY1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgdG9hc3QgPSB0aGlzLiNleHRlbmRlcih0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsLCBkZWNsaW5lTGFiZWwpO1xuICAgIHRvYXN0LnNldENvbmZpZyh7XG4gICAgICBsYXlvdXRUeXBlOiBEaWFsb2dMYXlvdXREaXNwbGF5LkRBTkdFUlxuICAgIH0pO1xuICAgIHJldHVybiB0b2FzdC5vcGVuVG9hc3ROb3RpZmljYXRpb24kKCk7XG4gIH1cblxuICBjdXN0b21PbmUodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw/OiBzdHJpbmcsIGRlY2xpbmVMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8SVRvYXN0Tm90aWZpY2F0aW9uUHVibGljUmVzcG9uc2U+IHtcbiAgICBjb25zdCB0b2FzdCA9IHRoaXMuI2V4dGVuZGVyKHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgdG9hc3Quc2V0Q29uZmlnKHtcbiAgICAgIGxheW91dFR5cGU6IERpYWxvZ0xheW91dERpc3BsYXkuQ1VTVE9NX09ORVxuICAgIH0pO1xuICAgIHJldHVybiB0b2FzdC5vcGVuVG9hc3ROb3RpZmljYXRpb24kKCk7XG4gIH1cblxuICBjdXN0b21Ud28odGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw/OiBzdHJpbmcsIGRlY2xpbmVMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8SVRvYXN0Tm90aWZpY2F0aW9uUHVibGljUmVzcG9uc2U+IHtcbiAgICBjb25zdCB0b2FzdCA9IHRoaXMuI2V4dGVuZGVyKHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgdG9hc3Quc2V0Q29uZmlnKHtcbiAgICAgIGxheW91dFR5cGU6IERpYWxvZ0xheW91dERpc3BsYXkuQ1VTVE9NX1RXT1xuICAgIH0pO1xuICAgIHJldHVybiB0b2FzdC5vcGVuVG9hc3ROb3RpZmljYXRpb24kKCk7XG4gIH1cblxuICBjdXN0b21UaHJlZSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbD86IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJVG9hc3ROb3RpZmljYXRpb25QdWJsaWNSZXNwb25zZT4ge1xuICAgIGNvbnN0IHRvYXN0ID0gdGhpcy4jZXh0ZW5kZXIodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCwgZGVjbGluZUxhYmVsKTtcbiAgICB0b2FzdC5zZXRDb25maWcoe1xuICAgICAgbGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheS5DVVNUT01fVEhSRUVcbiAgICB9KTtcbiAgICByZXR1cm4gdG9hc3Qub3BlblRvYXN0Tm90aWZpY2F0aW9uJCgpO1xuICB9XG5cbiAgY3VzdG9tRm91cih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbD86IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJVG9hc3ROb3RpZmljYXRpb25QdWJsaWNSZXNwb25zZT4ge1xuICAgIGNvbnN0IHRvYXN0ID0gdGhpcy4jZXh0ZW5kZXIodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCwgZGVjbGluZUxhYmVsKTtcbiAgICB0b2FzdC5zZXRDb25maWcoe1xuICAgICAgbGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheS5DVVNUT01fRk9VUlxuICAgIH0pO1xuICAgIHJldHVybiB0b2FzdC5vcGVuVG9hc3ROb3RpZmljYXRpb24kKCk7XG4gIH1cblxuICBjdXN0b21GaXZlKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29uZmlybUxhYmVsPzogc3RyaW5nLCBkZWNsaW5lTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPElUb2FzdE5vdGlmaWNhdGlvblB1YmxpY1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgdG9hc3QgPSB0aGlzLiNleHRlbmRlcih0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsLCBkZWNsaW5lTGFiZWwpO1xuICAgIHRvYXN0LnNldENvbmZpZyh7XG4gICAgICBsYXlvdXRUeXBlOiBEaWFsb2dMYXlvdXREaXNwbGF5LkNVU1RPTV9GSVZFXG4gICAgfSk7XG4gICAgcmV0dXJuIHRvYXN0Lm9wZW5Ub2FzdE5vdGlmaWNhdGlvbiQoKTtcbiAgfVxuXG4gICNleHRlbmRlcih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbD86IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogVG9hc3ROb3RpZmljYXRpb25Jbml0aWFsaXplciB7XG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3ROb3RpZmljYXRpb25Jbml0aWFsaXplcigpO1xuICAgIHRvYXN0LnNldFRpdGxlKHRpdGxlKTtcbiAgICB0b2FzdC5zZXRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIHRvYXN0LnNldEJ1dHRvbkxhYmVscyhjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgcmV0dXJuIHRvYXN0O1xuICB9XG59XG4iXX0=