import { animate, keyframes, transition, trigger } from '@angular/animations';
import * as kf from './keyframes';
export function boxAnimations() {
    return trigger('boxAnimations', [
        // in
        transition('* => bounceIn', animate('600ms cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes(kf.bounceIn))),
        transition('* => swing', animate('800ms', keyframes(kf.swing))),
        transition('* => zoomIn', animate('400ms', keyframes(kf.zoomIn))),
        transition('* => zoomInRotate', animate('800ms ease-out', keyframes(kf.zoomInRotate))),
        transition('* => elastic', animate('1000ms', keyframes(kf.elastic))),
        transition('* => jello', animate(1000, keyframes(kf.jello))),
        transition('* => fadeIn', animate('400ms ease-out', keyframes(kf.fadeIn))),
        transition('* => slideInUp', animate('400ms ease-out', keyframes(kf.slideInUp))),
        transition('* => slideInDown', animate('400ms ease-out', keyframes(kf.slideInDown))),
        transition('* => slideInLeft', animate('400ms ease-out', keyframes(kf.slideInLeft))),
        transition('* => slideInRight', animate('400ms ease-out', keyframes(kf.slideInRight))),
        // out
        transition('* => zoomOutWind', animate('400ms ease-in', keyframes(kf.zoomOutWind))),
        transition('* => bounceOut', animate('400ms ease-in', keyframes(kf.bounceOut))),
        transition('* => flipOutY', animate('400ms ease-in', keyframes(kf.flipOutY))),
        transition('* => zoomOut', animate('400ms ease-in', keyframes(kf.zoomOut))),
        transition('* => zoomOutRotate', animate('400ms ease-out', keyframes(kf.zoomOutRotate))),
        transition('* => slideOutUp', animate('300ms ease-in', keyframes(kf.slideOutUp))),
        transition('* => slideOutDown', animate('300ms ease-in', keyframes(kf.slideOutDown))),
        transition('* => slideOutLeft', animate('300ms ease-in', keyframes(kf.slideOutLeft))),
        transition('* => slideOutRight', animate('300ms ease-in', keyframes(kf.slideOutRight))),
        // motion
        transition('* => wobble', animate(1000, keyframes(kf.wobble)))
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ3gtYXdlc29tZS1wb3B1cC9jb3JlL2FuaW1hdGlvbnMvYm94LmFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE1BQU0sVUFBVSxhQUFhO0lBQzNCLE9BQU8sT0FBTyxDQUFDLGVBQWUsRUFBRTtRQUM5QixLQUFLO1FBQ0wsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsMkNBQTJDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0QsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRSxVQUFVLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0RixVQUFVLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFFLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRXRGLE1BQU07UUFDTixVQUFVLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkYsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9FLFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0UsVUFBVSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRSxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN4RixVQUFVLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakYsVUFBVSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNyRixVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFdkYsU0FBUztRQUNULFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0QsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0ICogYXMga2YgZnJvbSAnLi9rZXlmcmFtZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYm94QW5pbWF0aW9ucygpIHtcbiAgcmV0dXJuIHRyaWdnZXIoJ2JveEFuaW1hdGlvbnMnLCBbXG4gICAgLy8gaW5cbiAgICB0cmFuc2l0aW9uKCcqID0+IGJvdW5jZUluJywgYW5pbWF0ZSgnNjAwbXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSknLCBrZXlmcmFtZXMoa2YuYm91bmNlSW4pKSksXG4gICAgdHJhbnNpdGlvbignKiA9PiBzd2luZycsIGFuaW1hdGUoJzgwMG1zJywga2V5ZnJhbWVzKGtmLnN3aW5nKSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gem9vbUluJywgYW5pbWF0ZSgnNDAwbXMnLCBrZXlmcmFtZXMoa2Yuem9vbUluKSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gem9vbUluUm90YXRlJywgYW5pbWF0ZSgnODAwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoa2Yuem9vbUluUm90YXRlKSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gZWxhc3RpYycsIGFuaW1hdGUoJzEwMDBtcycsIGtleWZyYW1lcyhrZi5lbGFzdGljKSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gamVsbG8nLCBhbmltYXRlKDEwMDAsIGtleWZyYW1lcyhrZi5qZWxsbykpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IGZhZGVJbicsIGFuaW1hdGUoJzQwMG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKGtmLmZhZGVJbikpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHNsaWRlSW5VcCcsIGFuaW1hdGUoJzQwMG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKGtmLnNsaWRlSW5VcCkpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHNsaWRlSW5Eb3duJywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoa2Yuc2xpZGVJbkRvd24pKSksXG4gICAgdHJhbnNpdGlvbignKiA9PiBzbGlkZUluTGVmdCcsIGFuaW1hdGUoJzQwMG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKGtmLnNsaWRlSW5MZWZ0KSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gc2xpZGVJblJpZ2h0JywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoa2Yuc2xpZGVJblJpZ2h0KSkpLFxuXG4gICAgLy8gb3V0XG4gICAgdHJhbnNpdGlvbignKiA9PiB6b29tT3V0V2luZCcsIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4nLCBrZXlmcmFtZXMoa2Yuem9vbU91dFdpbmQpKSksXG4gICAgdHJhbnNpdGlvbignKiA9PiBib3VuY2VPdXQnLCBhbmltYXRlKCc0MDBtcyBlYXNlLWluJywga2V5ZnJhbWVzKGtmLmJvdW5jZU91dCkpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IGZsaXBPdXRZJywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhrZi5mbGlwT3V0WSkpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHpvb21PdXQnLCBhbmltYXRlKCc0MDBtcyBlYXNlLWluJywga2V5ZnJhbWVzKGtmLnpvb21PdXQpKSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB6b29tT3V0Um90YXRlJywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoa2Yuem9vbU91dFJvdGF0ZSkpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHNsaWRlT3V0VXAnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJywga2V5ZnJhbWVzKGtmLnNsaWRlT3V0VXApKSksXG4gICAgdHJhbnNpdGlvbignKiA9PiBzbGlkZU91dERvd24nLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJywga2V5ZnJhbWVzKGtmLnNsaWRlT3V0RG93bikpKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHNsaWRlT3V0TGVmdCcsIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nLCBrZXlmcmFtZXMoa2Yuc2xpZGVPdXRMZWZ0KSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gc2xpZGVPdXRSaWdodCcsIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nLCBrZXlmcmFtZXMoa2Yuc2xpZGVPdXRSaWdodCkpKSxcblxuICAgIC8vIG1vdGlvblxuICAgIHRyYW5zaXRpb24oJyogPT4gd29iYmxlJywgYW5pbWF0ZSgxMDAwLCBrZXlmcmFtZXMoa2Yud29iYmxlKSkpXG4gIF0pO1xufVxuIl19