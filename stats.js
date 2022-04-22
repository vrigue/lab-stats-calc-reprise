function readAllNumbers() {
    var textArea = document.querySelector("textarea");
    var lines = textArea.value.split("\n");
    var numbers = [];
    //Step 4: update to handle multiple numbers on one line
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] === "")
            continue;
        var num = Number(lines[i]);
        if (isNaN(num))
            continue;
        numbers.push(num);
    }
    return numbers;
}
function getMean(nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        sum += n;
    }
    return sum / nums.length;
}
function getAboveBelowMean(nums) {
    var mean = getMean(nums);
    var aboveCount = 0;
    var belowCount = 0;
    for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
        var n = nums_2[_i];
        if (n < mean)
            belowCount++;
        else if (n > mean)
            aboveCount++;
    }
    return [aboveCount, belowCount];
}
// PART A : Basic Stats
function getMedian(nums) {
    if (nums.length % 2 === 0) {
        var right = Number(nums.length / 2) - 1;
        var left = right++;
        return (nums[right] + nums[left]) / 2;
    }
    else {
        return nums[Math.floor(nums.length / 2)];
    }
}
function getMinMax(nums) {
    var min = nums[0];
    for (var _i = 0, nums_3 = nums; _i < nums_3.length; _i++) {
        var num = nums_3[_i];
        if (num < min)
            min = num;
    }
    var max = nums[0];
    for (var _a = 0, nums_4 = nums; _a < nums_4.length; _a++) {
        var num = nums_4[_a];
        if (num > max)
            max = num;
    }
    return [min, max];
}
function getStdDev(nums) {
    var mean = getMean(nums);
    var squared_distance_mean = [];
    for (var _i = 0, nums_5 = nums; _i < nums_5.length; _i++) {
        var num = nums_5[_i];
        var distance = Math.pow((mean - num), 2);
        squared_distance_mean.push(distance);
    }
    return Math.sqrt(getMean(squared_distance_mean));
}
var basicStatsAnalyzeButton = document.querySelector("button#analyze");
basicStatsAnalyzeButton.addEventListener("click", function () {
    var numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#mean").textContent = "".concat(getMean(numbers));
    document.querySelector("#aboveBelow").textContent = "".concat(getAboveBelowMean(numbers).join(" & "));
    document.querySelector("#median").textContent = "".concat(getMedian(numbers));
    document.querySelector("#minMax").textContent = "".concat(getMinMax(numbers).join(" & "));
    document.querySelector("#stdDev").textContent = "".concat(getStdDev(numbers));
});
// PART B: Advanced Integer Stats
function getLeastCommonMultiple(nums) {
    return NaN; // remove me!
}
function getAllCommonFactors(nums) {
    return [NaN]; // remove me!
}
var advancedStatsAnalyzeButton = document.querySelector("button#analyze-advanced");
advancedStatsAnalyzeButton.addEventListener("click", function () {
    var numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#lcm").textContent = "".concat(getLeastCommonMultiple(numbers));
    document.querySelector("#factors").textContent = "".concat(getAllCommonFactors(numbers).join(", "));
});
