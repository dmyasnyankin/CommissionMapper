const carriers = require('../../participatingCarriers.json');
const participatingCarriers = carriers.participatingCarriers;

const HelperValidators = {
    singleCarrierCheck: (carrier) => {
        let result;
        if (Object.keys(participatingCarriers).includes(carrier)){
            result = true;
        } else {
            result = false;
        }
        return result;
    },
    checkUA: (carrier) => {
        if (carrier !== 'UA') {
            return false;
        }
    },
    checkLHG: (carrier) => {
        let lhgCarriers = ['OS', 'LH', 'LX', 'SN'];

        if (!lhgCarriers.includes(carrier)) {
            return false;
        }
    },
    checkAC: (carrier) => {
        if (carrier === 'AC'){
            return true;
        }
    }
}

module.exports = HelperValidators;