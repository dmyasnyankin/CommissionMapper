
const CommissionCalc = {
    getBaseFare: (itinerary) => {
        return itinerary.BaseFare;
    },
    getCommissionPercentage: (itinerary) => {
        return (itinerary.CommissionPercentage * 0.01);
    },
    calcCommissionAmount: (baseFare, percent) => {
        return (baseFare * percent);
    }
}

module.exports = CommissionCalc;