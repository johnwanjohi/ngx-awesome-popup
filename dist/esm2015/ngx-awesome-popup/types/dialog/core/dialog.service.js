import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import { DialogInjector } from '../../../core/dialog-injector';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';
import { DialogEventsController } from './classes';
import * as i0 from "@angular/core";
export class DialogService {
    constructor(componentFactoryResolver, injector, appRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.appRef = appRef;
        this.dialogParentComponentRefList = [];
    }
    open(_ComponentType, _DialogBelonging) {
        const dialogController = _DialogBelonging.EventsController;
        const componentRef = this.getComponentRef(dialogController, _DialogBelonging);
        this.dialogParentComponentRefList.push(componentRef);
        componentRef.instance.dialogBelonging = _DialogBelonging;
        componentRef.instance.childComponentType = _ComponentType;
        this.appendToBodyParentComponent(componentRef);
        this.listeners(dialogController);
        return dialogController;
    }
    getComponentRef(_EventsController, _DialogBelonging) {
        let componentFactory;
        const dialogIndex = this.findDialogIndex(_DialogBelonging.EntityUniqueID);
        if (dialogIndex === -1) {
            const weakMap = new WeakMap();
            weakMap.set(DialogEventsController, _EventsController);
            componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogWrapperComponent);
            return componentFactory.create(new DialogInjector(this.injector, weakMap));
        }
        return null;
    }
    listeners(_EventsController) {
        // Listener for closing dialog
        const closeDialogSubscription = _EventsController.afterClosed$.subscribe(response => {
            const modalIndex = this.findDialogIndex(response.DialogBelonging.EntityUniqueID);
            this.removeFromBodyDialogWrapperComponent(modalIndex);
            closeDialogSubscription.unsubscribe();
        });
        // Listener for turning off loader
        const closeLoaderSubscription = _EventsController.afterLoader$.subscribe((_DialogUniqueID) => {
            if (_DialogUniqueID) {
                const modalIndex = this.findDialogIndex(_DialogUniqueID);
                if (modalIndex !== -1) {
                    this.dialogParentComponentRefList[modalIndex].instance.closeLoader();
                }
            }
            closeLoaderSubscription.unsubscribe();
        });
    }
    childComponentResolver() { }
    appendToBodyParentComponent(_ComponentRef) {
        // attach view to ignite lifecycle hooks
        this.appRef.attachView(_ComponentRef.hostView);
        // DOM
        const domElem = _ComponentRef.hostView
            .rootNodes[0];
        document.body.appendChild(domElem);
    }
    closeDialogWrapperComponent(_DialogUniqueID) {
        const modalIndex = this.findDialogIndex(_DialogUniqueID);
        this.removeFromBodyDialogWrapperComponent(modalIndex);
    }
    removeFromBodyDialogWrapperComponent(_DialogIndex) {
        if (_DialogIndex > -1) {
            this.dialogParentComponentRefList[_DialogIndex].instance
                .closeParent$('close-fast')
                .pipe(map(item => {
                this.appRef.detachView(this.dialogParentComponentRefList[_DialogIndex].hostView);
                this.dialogParentComponentRefList[_DialogIndex].destroy();
                this.dialogParentComponentRefList.splice(_DialogIndex, 1);
            }))
                .subscribe();
        }
    }
    findDialogIndex(_DialogUniqueID) {
        return this.dialogParentComponentRefList.findIndex(item => {
            return _DialogUniqueID === item.instance.dialogBelonging.EntityUniqueID;
        });
    }
}
DialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.ApplicationRef)); }, token: DialogService, providedIn: "root" });
DialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: ApplicationRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9uZ3gtYXdlc29tZS1wb3B1cC90eXBlcy9kaWFsb2cvY29yZS9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUd4QixVQUFVLEVBQ1YsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFNcEUsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFDVSx3QkFBa0QsRUFDbEQsUUFBa0IsRUFDbEIsTUFBc0I7UUFGdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBTGhDLGlDQUE0QixHQUF3QixFQUFFLENBQUM7SUFNcEQsQ0FBQztJQUVKLElBQUksQ0FDRixjQUF5QixFQUN6QixnQkFBaUM7UUFFakMsTUFBTSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUN2QyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLENBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3pELFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsY0FBYyxD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LFVBQVUsQ0FDcEIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FDekQsQ0FBQztnQkFDRixJQUFJLENBQUMsNEJBQTRCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxlQUF1QjtRQUNyQyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEQsT0FBTyxlQUFlLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQTFIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWZDLHdCQUF3QjtZQUl4QixRQUFRO1lBTFIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgVHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpYWxvZ0luamVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kaWFsb2ctaW5qZWN0b3InO1xuaW1wb3J0IHsgRGlhbG9nV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL2RpYWxvZy13cmFwcGVyL2RpYWxvZy13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dCZWxvbmdpbmcsIERpYWxvZ0V2ZW50c0NvbnRyb2xsZXIgfSBmcm9tICcuL2NsYXNzZXMnO1xuaW1wb3J0IHsgSURpYWxvZ0V2ZW50c0NvbnRyb2xsZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcbiAgZGlhbG9nUGFyZW50Q29tcG9uZW50UmVmTGlzdDogQ29tcG9uZW50UmVmPGFueT5bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXG4gICkge31cblxuICBvcGVuKFxuICAgIF9Db21wb25lbnRUeXBlOiBUeXBlPGFueT4sXG4gICAgX0RpYWxvZ0JlbG9uZ2luZzogRGlhbG9nQmVsb25naW5nXG4gICk6IElEaWFsb2dFdmVudHNDb250cm9sbGVyIHtcbiAgICBjb25zdCBkaWFsb2dDb250cm9sbGVyID0gX0RpYWxvZ0JlbG9uZ2luZy5FdmVudHNDb250cm9sbGVyO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0Q29tcG9uZW50UmVmKFxuICAgICAgZGlhbG9nQ29udHJvbGxlcixcbiAgICAgIF9EaWFsb2dCZWxvbmdpbmdcbiAgICApO1xuXG4gICAgdGhpcy5kaWFsb2dQYXJlbnRDb21wb25lbnRSZWZMaXN0LnB1c2goY29tcG9uZW50UmVmKTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGlhbG9nQmVsb25naW5nID0gX0RpYWxvZ0JlbG9uZ2luZztcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY2hpbGRDb21wb25lbnRUeXBlID0gX0NvbXBvbmVudFR5cGU7XG5cbiAgICB0aGlzLmFwcGVuZFRvQm9keVBhcmVudENvbXBvbmVudChjb21wb25lbnRSZWYpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMoZGlhbG9nQ29udHJvbGxlcik7XG5cbiAgICByZXR1cm4gZGlhbG9nQ29udHJvbGxlcjtcbiAgfVxuXG4gIGdldENvbXBvbmVudFJlZihcbiAgICBfRXZlbnRzQ29udHJvbGxlcjogSURpYWxvZ0V2ZW50c0NvbnRyb2xsZXIsXG4gICAgX0RpYWxvZ0JlbG9uZ2luZzogRGlhbG9nQmVsb25naW5nXG4gICk6IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbCB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3Rvcnk7XG5cbiAgICBjb25zdCBkaWFsb2dJbmRleCA9IHRoaXMuZmluZERpYWxvZ0luZGV4KF9EaWFsb2dCZWxvbmdpbmcuRW50aXR5VW5pcXVlSUQpO1xuICAgIGlmIChkaWFsb2dJbmRleCA9PT0gLTEpIHtcbiAgICAgIGNvbnN0IHdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgd2Vha01hcC5zZXQoRGlhbG9nRXZlbnRzQ29udHJvbGxlciwgX0V2ZW50c0NvbnRyb2xsZXIpO1xuXG4gICAgICBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgIERpYWxvZ1dyYXBwZXJDb21wb25lbnRcbiAgICAgICk7XG4gICAgICByZXR1cm4gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoXG4gICAgICAgIG5ldyBEaWFsb2dJbmplY3Rvcih0aGlzLmluamVjdG9yLCB3ZWFrTWFwKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxpc3RlbmVycyhfRXZlbnRzQ29udHJvbGxlcjogSURpYWxvZ0V2ZW50c0NvbnRyb2xsZXIpIHtcbiAgICAvLyBMaXN0ZW5lciBmb3IgY2xvc2luZyBkaWFsb2dcbiAgICBjb25zdCBjbG9zZURpYWxvZ1N1YnNjcmlwdGlvbiA9IF9FdmVudHNDb250cm9sbGVyLmFmdGVyQ2xvc2VkJC5zdWJzY3JpYmUoXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsSW5kZXggPSB0aGlzLmZpbmREaWFsb2dJbmRleChcbiAgICAgICAgICByZXNwb25zZS5EaWFsb2dCZWxvbmdpbmcuRW50aXR5VW5pcXVlSURcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tQm9keURpYWxvZ1dyYXBwZXJDb21wb25lbnQobW9kYWxJbmRleCk7XG4gICAgICAgIGNsb3NlRGlhbG9nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIExpc3RlbmVyIGZvciB0dXJuaW5nIG9mZiBsb2FkZXJcbiAgICBjb25zdCBjbG9zZUxvYWRlclN1YnNjcmlwdGlvbiA9IF9FdmVudHNDb250cm9sbGVyLmFmdGVyTG9hZGVyJC5zdWJzY3JpYmUoXG4gICAgICAoX0RpYWxvZ1VuaXF1ZUlEOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKF9EaWFsb2dVbmlxdWVJRCkge1xuICAgICAgICAgIGNvbnN0IG1vZGFsSW5kZXggPSB0aGlzLmZpbmREaWFsb2dJbmRleChfRGlhbG9nVW5pcXVlSUQpO1xuICAgICAgICAgIGlmIChtb2RhbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dQYXJlbnRDb21wb25lbnRSZWZMaXN0W1xuICAgICAgICAgICAgICBtb2RhbEluZGV4XG4gICAgICAgICAgICBdLmluc3RhbmNlLmNsb3NlTG9hZGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2xvc2VMb2FkZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2hpbGRDb21wb25lbnRSZXNvbHZlcigpIHt9XG5cbiAgYXBwZW5kVG9Cb2R5UGFyZW50Q29tcG9uZW50KF9Db21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogdm9pZCB7XG4gICAgLy8gYXR0YWNoIHZpZXcgdG8gaWduaXRlIGxpZmVjeWNsZSBob29rc1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoX0NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAvLyBET01cbiAgICBjb25zdCBkb21FbGVtID0gKF9Db21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG4gIH1cblxuICBjbG9zZURpYWxvZ1dyYXBwZXJDb21wb25lbnQoX0RpYWxvZ1VuaXF1ZUlEOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbEluZGV4ID0gdGhpcy5maW5kRGlhbG9nSW5kZXgoX0RpYWxvZ1VuaXF1ZUlEKTtcbiAgICB0aGlzLnJlbW92ZUZyb21Cb2R5RGlhbG9nV3JhcHBlckNvbXBvbmVudChtb2RhbEluZGV4KTtcbiAgfVxuXG4gIHJlbW92ZUZyb21Cb2R5RGlhbG9nV3JhcHBlckNvbXBvbmVudChfRGlhbG9nSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChfRGlhbG9nSW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5kaWFsb2dQYXJlbnRDb21wb25lbnRSZWZMaXN0W19EaWFsb2dJbmRleF0uaW5zdGFuY2VcbiAgICAgICAgLmNsb3NlUGFyZW50JCgnY2xvc2UtZmFzdCcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcoXG4gICAgICAgICAgICAgIHRoaXMuZGlhbG9nUGFyZW50Q29tcG9uZW50UmVmTGlzdFtfRGlhbG9nSW5kZXhdLmhvc3RWaWV3XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dQYXJlbnRDb21wb25lbnRSZWZMaXN0W19EaWFsb2dJbmRleF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dQYXJlbnRDb21wb25lbnRSZWZMaXN0LnNwbGljZShfRGlhbG9nSW5kZXgsIDEpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmREaWFsb2dJbmRleChfRGlhbG9nVW5pcXVlSUQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nUGFyZW50Q29tcG9uZW50UmVmTGlzdC5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gX0RpYWxvZ1VuaXF1ZUlEID09PSBpdGVtLmluc3RhbmNlLmRpYWxvZ0JlbG9uZ2luZy5FbnRpdHlVbmlxdWVJRDtcbiAgICB9KTtcbiAgfVxufVxuIl19