import { Human } from './models';

// https://en.wikipedia.org/wiki/Naive_Bayes_classifier

const dataset: Human[] = [
    new Human('male', 6, 180, 12),
    new Human('male', 5.92, 190, 11),
    new Human('male', 5.58, 170, 12),
    new Human('male', 5.92, 165, 10),
    new Human('female', 5, 100, 6),
    new Human('female', 5.5, 150, 8),
    new Human('female', 5.42, 130, 7),
    new Human('female', 5.75, 150, 9)
];


const maleHeightMean = calculateMean(dataset.filter((x) => x.gender === 'male').map((x) => x.height));
const maleHeightStandardDeviation = calculateStandardDeviation(dataset.filter((x) => x.gender === 'male').map((x) => x.height));
const maleWeightMean = calculateMean(dataset.filter((x) => x.gender === 'male').map((x) => x.weight));
const maleWeightStandardDeviation = calculateStandardDeviation(dataset.filter((x) => x.gender === 'male').map((x) => x.weight));
const maleFootSizeMean = calculateMean(dataset.filter((x) => x.gender === 'male').map((x) => x.footSize));
const maleFootSizeStandardDeviation = calculateStandardDeviation(dataset.filter((x) => x.gender === 'male').map((x) => x.footSize));

const femaleHeightMean = calculateMean(dataset.filter((x) => x.gender === 'female').map((x) => x.height));
const femaleHeightStandardDeviation = calculateStandardDeviation(dataset.filter((x) => x.gender === 'female').map((x) => x.height));
const femaleWeightMean = calculateMean(dataset.filter((x) => x.gender === 'female').map((x) => x.weight));
const femaleWeightStandardDeviation = calculateStandardDeviation(dataset.filter((x) => x.gender === 'female').map((x) => x.weight));
const femaleFootSizeMean = calculateMean(dataset.filter((x) => x.gender === 'female').map((x) => x.footSize));
const femaleFootSizeStandardDeviation = calculateStandardDeviation(dataset.filter((x) => x.gender === 'female').map((x) => x.footSize));

// const height = 6;
// const weight = 130;
// const footSize = 8;

const height = 5.38;
const weight = 147;
const footSize = 12;

const pMale = 0.5;
const pHeightMale = calculateGaussianNormalDistribution(maleHeightMean, maleHeightStandardDeviation, height);
const pWeightMale = calculateGaussianNormalDistribution(maleWeightMean, maleWeightStandardDeviation, weight);
const pFootSizeMale = calculateGaussianNormalDistribution(maleFootSizeMean, maleFootSizeStandardDeviation, footSize);
const posteriorMale = pMale * pHeightMale * pWeightMale * pFootSizeMale;

const pFemale = 0.5;
const pHeightFemale = calculateGaussianNormalDistribution(femaleHeightMean, femaleHeightStandardDeviation, height);
const pWeightFemale = calculateGaussianNormalDistribution(femaleWeightMean, femaleWeightStandardDeviation, weight);
const pFootSizeFemale = calculateGaussianNormalDistribution(femaleFootSizeMean, femaleFootSizeStandardDeviation, footSize);
const posteriorFemale = pFemale * pHeightFemale * pWeightFemale * pFootSizeFemale;

console.log('Male:' + (Math.max(posteriorFemale, posteriorMale) === posteriorMale));
console.log('Female: ' + (Math.max(posteriorFemale, posteriorMale) === posteriorFemale));

function calculateStandardDeviation(values: number[]) {
    var avg = calculateMean(values);

    var squareDiffs = values.map((value: number) => {
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });

    var avgSquareDiff = calculateMean(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}

function calculateMean(data: number[]) {
    var sum = data.reduce((sum: number, value: number) => {
        return sum + value;
    }, 0);

    var avg = sum / data.length;
    return avg;
}

function calculateGaussianNormalDistribution(mean: number, stdev: number, value: number) {
    const variance = Math.pow(stdev, 2);
    return (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(-Math.pow(value - mean, 2) / (2 * variance));
}