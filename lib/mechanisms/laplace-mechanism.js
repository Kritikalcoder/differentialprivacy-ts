"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perturbation_mechanism_1 = require("./perturbation-mechanism");
class LaplaceMechanism extends perturbation_mechanism_1.PerturbationMechanism {
    constructor() {
        super();
        // Ria to research best approach
        this.getLowerBounds = () => {
            return 0;
        };
        // Ria to research best approach
        this.getUpperBounds = () => {
            return 0;
        };
        this._epsilon = 0.3; // Kritika to very this
        this._delta = 0;
    }
    get Epsilon() {
        return this._epsilon;
    }
    get CurrentStatus() {
        return this._currentStatus;
    }
    addNoise(sensitivity, queryResult) {
        // 1) sample from laplace distribution
        // 2) add that noise to the query result
        // 3) calculate upper and lower bounds
        // 4) check if bounds exceeded. if bounds are exceeded return StatusCode.OutOfRange
        // 5) if bounds not exceeded:
        // 5.1) set CurrentStatus to SuccessfullyPerturbed
        // 5.2) update privacy budget
        // 5.3) if privacy budget exceeded set CurrentStatus to RunOutOfBudget and return that value
        // 5.4) return result
        return perturbation_mechanism_1.StatusCode.Error;
    }
}
exports.LaplaceMechanism = LaplaceMechanism;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFwbGFjZS1tZWNoYW5pc20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVjaGFuaXNtcy9sYXBsYWNlLW1lY2hhbmlzbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUlrQztBQUVsQyxNQUFNLGdCQUFtQyxTQUFRLDhDQUF3QjtJQWN2RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBb0JWLGdDQUFnQztRQUN0QixtQkFBYyxHQUFHLEdBQVcsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQTtRQUVELGdDQUFnQztRQUN0QixtQkFBYyxHQUFHLEdBQVcsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQTtRQTNCQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVsQixDQUFDO0lBakJELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFhRCxRQUFRLENBQUMsV0FBbUIsRUFBRSxXQUFjO1FBQzFDLHNDQUFzQztRQUN0Qyx3Q0FBd0M7UUFDeEMsc0NBQXNDO1FBQ3RDLG1GQUFtRjtRQUNuRiw2QkFBNkI7UUFDN0Isa0RBQWtEO1FBQ2xELDZCQUE2QjtRQUM3Qiw0RkFBNEY7UUFDNUYscUJBQXFCO1FBRXJCLE9BQU8sbUNBQVUsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztDQVdGO0FBRVEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVzdWx0LFxuICBTdGF0dXNDb2RlLFxuICBQZXJ0dXJiYXRpb25NZWNoYW5pc20sXG59IGZyb20gJy4vcGVydHVyYmF0aW9uLW1lY2hhbmlzbSc7XG5cbmNsYXNzIExhcGxhY2VNZWNoYW5pc208VCBleHRlbmRzIG51bWJlcj4gZXh0ZW5kcyBQZXJ0dXJiYXRpb25NZWNoYW5pc208VD4ge1xuXG4gIGdldCBFcHNpbG9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Vwc2lsb247XG4gIH1cblxuICBnZXQgQ3VycmVudFN0YXR1cygpOiBTdGF0dXNDb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXR1cztcbiAgfVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBfZGVsdGE6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9lcHNpbG9uOiBudW1iZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY3VycmVudFN0YXR1czogU3RhdHVzQ29kZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2Vwc2lsb24gPSAwLjM7IC8vIEtyaXRpa2EgdG8gdmVyeSB0aGlzXG4gICAgdGhpcy5fZGVsdGEgPSAwO1xuXG4gIH1cblxuICBhZGROb2lzZShzZW5zaXRpdml0eTogbnVtYmVyLCBxdWVyeVJlc3VsdDogVCk6IFJlc3VsdDxUPiB7XG4gICAgLy8gMSkgc2FtcGxlIGZyb20gbGFwbGFjZSBkaXN0cmlidXRpb25cbiAgICAvLyAyKSBhZGQgdGhhdCBub2lzZSB0byB0aGUgcXVlcnkgcmVzdWx0XG4gICAgLy8gMykgY2FsY3VsYXRlIHVwcGVyIGFuZCBsb3dlciBib3VuZHNcbiAgICAvLyA0KSBjaGVjayBpZiBib3VuZHMgZXhjZWVkZWQuIGlmIGJvdW5kcyBhcmUgZXhjZWVkZWQgcmV0dXJuIFN0YXR1c0NvZGUuT3V0T2ZSYW5nZVxuICAgIC8vIDUpIGlmIGJvdW5kcyBub3QgZXhjZWVkZWQ6XG4gICAgLy8gNS4xKSBzZXQgQ3VycmVudFN0YXR1cyB0byBTdWNjZXNzZnVsbHlQZXJ0dXJiZWRcbiAgICAvLyA1LjIpIHVwZGF0ZSBwcml2YWN5IGJ1ZGdldFxuICAgIC8vIDUuMykgaWYgcHJpdmFjeSBidWRnZXQgZXhjZWVkZWQgc2V0IEN1cnJlbnRTdGF0dXMgdG8gUnVuT3V0T2ZCdWRnZXQgYW5kIHJldHVybiB0aGF0IHZhbHVlXG4gICAgLy8gNS40KSByZXR1cm4gcmVzdWx0XG5cbiAgICByZXR1cm4gU3RhdHVzQ29kZS5FcnJvcjtcbiAgfVxuXG4gIC8vIFJpYSB0byByZXNlYXJjaCBiZXN0IGFwcHJvYWNoXG4gIHByb3RlY3RlZCBnZXRMb3dlckJvdW5kcyA9ICgpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLy8gUmlhIHRvIHJlc2VhcmNoIGJlc3QgYXBwcm9hY2hcbiAgcHJvdGVjdGVkIGdldFVwcGVyQm91bmRzID0gKCk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZXhwb3J0IHsgTGFwbGFjZU1lY2hhbmlzbSB9O1xuIl19