
const PriceInfoExtractor = {
    getBaseFare: (itinerary) => {
        let isFare = itinerary.AirItineraryPricingInfo[0].FareReturned;
        if (isFare) {
            return itinerary.AirItineraryPricingInfo[0].ItinTotalFare.BaseFare.Amount;
        } else {
            return 'Base Fare Not Specified';
        }
    },
    getTotalTaxes: (itinerary) => {
        let isFare = itinerary.AirItineraryPricingInfo[0].FareReturned;
        if (isFare) {
            return itinerary.AirItineraryPricingInfo[0].ItinTotalFare.Taxes.Tax[0].Amount;
        } else {
            return 'Total Taxes Not Specified';
        }
    },
    getTotalFare: (itinerary) => {
        let isFare = itinerary.AirItineraryPricingInfo[0].FareReturned;
        if (isFare) {
            return itinerary.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount;
        } else {
            return 'Total Fare Not Specified';
        }
    }
}

module.exports = PriceInfoExtractor