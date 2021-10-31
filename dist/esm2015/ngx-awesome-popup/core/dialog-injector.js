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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvY29yZS9kaWFsb2ctaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFDVSxjQUF3QixFQUN4QixnQkFBbUM7UUFEbkMsbUJBQWMsR0FBZCxjQUFjLENBQVU7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtJQUMxQyxDQUFDO0lBUUosR0FBRyxDQUFDLEtBQVUsRUFBRSxhQUFtQixFQUFFLEtBQVc7UUFDOUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RGbGFncywgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0luamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIFBhcmVudEluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIEFkZGl0aW9uYWxUb2tlbnM6IFdlYWtNYXA8YW55LCBhbnk+XG4gICkge31cblxuICBnZXQ8VD4oXG4gICAgdG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPixcbiAgICBub3RGb3VuZFZhbHVlPzogVCxcbiAgICBmbGFncz86IEluamVjdEZsYWdzXG4gICk6IFQ7XG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55O1xuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSwgZmxhZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5BZGRpdGlvbmFsVG9rZW5zLmdldCh0b2tlbik7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5QYXJlbnRJbmplY3Rvci5nZXQ8YW55Pih0b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==