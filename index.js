const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(totalBatteries, currentValue) {
    return totalBatteries + currentValue
})

// batteryBatches.reduce(function(totalBatteries, currentValue) {
//     return totalBatteries + currentValue
// })

// function ourReduce(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {
//         accum = reducer(accum, element);
//     };
//     return accum;
// }

// function BatteryCounter(totalAmount, location) {
//     return totalAmount + location.amount;
// }

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// } , 0);

      
   