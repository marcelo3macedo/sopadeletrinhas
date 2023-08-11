import bronze from '@assets/images/medals/bronze.png';
import diamond from '@assets/images/medals/diamond.png';
import gold from '@assets/images/medals/gold.png';
import silver from '@assets/images/medals/silver.png';

function getMedalByCount(value: number) {
    if (value < 15) {return bronze;}
    if (value < 30) {return silver;}
    if (value < 45) {return gold;}

    return diamond;
}

export {
    getMedalByCount
};

