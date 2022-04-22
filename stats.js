"use strict";
function readAllNumbers() {
    let textArea = document.querySelector("textarea");
    let lines = textArea.value.split("\n");
    let numbers = [];
    //Step 4: update to handle multiple numbers on one line
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === "")
            continue;
        let num = Number(lines[i]);
        if (isNaN(num))
            continue;
        numbers.push(num);
    }
    return numbers;
}
function getMean(nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum / nums.length;
}
function getAboveBelowMean(nums) {
    let mean = getMean(nums);
    let aboveCount = 0;
    let belowCount = 0;
    for (const n of nums) {
        if (n < mean)
            belowCount++;
        else if (n > mean)
            aboveCount++;
    }
    return [aboveCount, belowCount];
}
// PART A : Basic Stats
function getMedian(nums) {
    //Step 1
    return NaN; // remove me!
}
function getMinMax(nums) {
    //Step 2
    return [NaN, NaN]; // remove me!
}
function getStdDev(nums) {
    //Step 3
    return NaN; // remove me!
}
let basicStatsAnalyzeButton = document.querySelector("button#analyze");
basicStatsAnalyzeButton.addEventListener("click", function () {
    let numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#mean").textContent = `${getMean(numbers)}`;
    document.querySelector("#aboveBelow").textContent = `${getAboveBelowMean(numbers).join(" & ")}`;
    document.querySelector("#median").textContent = `${getMedian(numbers)}`;
    document.querySelector("#minMax").textContent = `${getMinMax(numbers).join(" & ")}`;
    document.querySelector("#stdDev").textContent = `${getStdDev(numbers)}`;
});
// PART B: Advanced Integer Stats
function getLeastCommonMultiple(nums) {
    return NaN; // remove me!
}
function getAllCommonFactors(nums) {
    return [NaN]; // remove me!
}
let advancedStatsAnalyzeButton = document.querySelector("button#analyze");
advancedStatsAnalyzeButton.addEventListener("click", function () {
    let numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#lcm").textContent = `${getLeastCommonMultiple(numbers)}`;
    document.querySelector("#factors").textContent = `${getAllCommonFactors(numbers).join(", ")}`;
});
