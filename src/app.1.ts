import { Dataset } from './models';

const datasets: Dataset[] = [
    new Dataset('Sunny', 'No'),
    new Dataset('Overcast', 'Yes'),
    new Dataset('Rainy', 'Yes'),
    new Dataset('Sunny', 'Yes'),
    new Dataset('Sunny', 'Yes'),
    new Dataset('Overcast', 'Yes'),
    new Dataset('Rainy', 'No'),
    new Dataset('Rainy', 'No'),
    new Dataset('Sunny', 'Yes'),
    new Dataset('Rainy', 'Yes'),
    new Dataset('Sunny', 'No'),
    new Dataset('Overcast', 'Yes'),
    new Dataset('Overcast', 'Yes'),
    new Dataset('Rainy', 'No'),
];

function getFrequency(ds: Dataset[], key: string, category: string) {
    if (key && category) {
        return ds.filter((x) => x.key === key && x.category === category).length;
    }else if (key) {
        return ds.filter((x) => x.key === key).length;
    }else if (category) {
        return ds.filter((x) => x.category === category).length;
    } else {
        return datasets.length;
    }
}

// P(Yes | Sunny) = P( Sunny | Yes) * P(Yes) / P (Sunny)

const pSunnyYes = getFrequency(datasets, 'Sunny', 'Yes') / getFrequency(datasets, null, 'Yes');
const pYes = getFrequency(datasets, null, 'Yes') / getFrequency(datasets, null, null);
const pSunny = getFrequency(datasets, 'Sunny', null) / getFrequency(datasets, null, null);
const pYesSunny = pSunnyYes * pYes / pSunny;

console.log(pYesSunny);

