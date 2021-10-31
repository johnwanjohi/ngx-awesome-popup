import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, Type } from '@angular/core';
import { DialogBelonging } from './classes';
import { IDialogEventsController } from './interfaces';
export declare class DialogService {
    private componentFactoryResolver;
    private injector;
    private appRef;
    dialogParentComponentRefList: ComponentRef<any>[];
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, appRef: ApplicationRef);
    open(_ComponentType: Type<any>, _DialogBelonging: DialogBelonging): IDialogEventsController;
    getComponentRef(_EventsController: IDialogEventsController, _DialogBelonging: DialogBelonging): ComponentRef<any> | null;
    listeners(_EventsController: IDialogEventsController): void;
    childComponentResolver(): void;
    appendToBodyParentComponent(_ComponentRef: ComponentRef<any>): void;
    closeDialogWrapperComponent(_DialogUniqueID: string): void;
    removeFromBodyDialogWrapperComponent(_DialogIndex: number): void;
    findDialogIndex(_DialogUniqueID: string): number;
}