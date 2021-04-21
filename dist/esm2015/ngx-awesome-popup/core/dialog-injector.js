export class DialogInjector {
    constructor(ParentInjector, AdditionalTokens) {
        this.ParentInjector = ParentInjector;
        this.AdditionalTokens = AdditionalTokens;
    }
    get(token, notFoundValue, flags) {
        const value = this.AdditionalTokens.get(token);
        if (value) {
            return value;
        }
        return this.ParentInjector.get(token, notFoundValue);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvY29yZS9kaWFsb2ctaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGNBQWM7SUFDdkIsWUFDWSxjQUF3QixFQUN4QixnQkFBbUM7UUFEbkMsbUJBQWMsR0FBZCxjQUFjLENBQVU7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtJQUUvQyxDQUFDO0lBUUQsR0FBRyxDQUFDLEtBQVUsRUFBRSxhQUFtQixFQUFFLEtBQVc7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RGbGFncywgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0luamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIFBhcmVudEluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJpdmF0ZSBBZGRpdGlvbmFsVG9rZW5zOiBXZWFrTWFwPGFueSwgYW55PlxuICAgICkge1xuICAgIH1cbiAgICBcbiAgICBnZXQ8VD4oXG4gICAgICAgIHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4sXG4gICAgICAgIG5vdEZvdW5kVmFsdWU/OiBULFxuICAgICAgICBmbGFncz86IEluamVjdEZsYWdzXG4gICAgKTogVDtcbiAgICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueTtcbiAgICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSwgZmxhZ3M/OiBhbnkpOiBhbnkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuQWRkaXRpb25hbFRva2Vucy5nZXQodG9rZW4pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLlBhcmVudEluamVjdG9yLmdldDxhbnk+KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgICB9XG59XG4iXX0=