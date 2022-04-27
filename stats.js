function readAllNumbers() {
    var textArea = document.querySelector("textarea");
    var lines = textArea.value.split("\n");
    var numbers = [];
    //Step 4: update to handle multiple numbers on one line
    for (var i = 0; i < lines.length; i++) {
        var elements = lines[i].split(" ");
        for (var index = 0; index < elements.length; index++) {
            if (elements[index] === "")
                continue;
            var num = Number(elements[index]);
            if (isNaN(num))
                continue;
            numbers.push(num);
        }
    }
    return numbers;
}
function getMean(nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        sum += n;
    }
    return Number((sum / nums.length).toFixed(2));
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
    return [Number(aboveCount.toFixed(2)), Number(belowCount.toFixed(2))];
}
// PART A : Basic Stats
function getMedian(nums) {
    if (nums.length % 2 === 0) {
        var right = Number(nums.length / 2) - 1;
        var left = right++;
        return (nums[right] + nums[left]) / 2;
    }
    else {
        return Number((nums[Math.floor(nums.length / 2)]).toFixed(2));
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
    return [Number(min.toFixed(2)), Number(max.toFixed(2))];
}
function getStdDev(nums) {
    var mean = getMean(nums);
    var squared_distance_mean = [];
    for (var _i = 0, nums_5 = nums; _i < nums_5.length; _i++) {
        var num = nums_5[_i];
        var distance = Math.pow((mean - num), 2);
        squared_distance_mean.push(distance);
    }
    return Number(Math.sqrt(getMean(squared_distance_mean)).toFixed(2));
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
    var max = nums[0];
    for (var _i = 0, nums_6 = nums; _i < nums_6.length; _i++) {
        var num = nums_6[_i];
        if (num > max)
            max = num;
    }
    // let isFinished : boolean = false;
    // while (isFinished === false) {
    //     let isDivisible : boolean = true;
    //     for (let i = 0; i < nums.length; i++) {
    //         if (max % nums[i] === 0) {
    //             continue;
    //         } else if (max % nums[i] !== 0) {
    //             max++;
    //             isDivisible = false;
    //             break;
    //         }
    //     }
    //     if (isDivisible) {
    //         isFinished = true;
    //     }
    // }
    var isFinished = false;
    var i = 0;
    while (isFinished === false) {
        if (i === nums.length) {
            isFinished = true;
        }
        else if (max % nums[i] === 0) {
            i++;
        }
        else {
            i = 0;
            max++;
        }
    }
    return max;
}
function getAllCommonFactors(nums) {
    var min = nums[0];
    for (var _i = 0, nums_7 = nums; _i < nums_7.length; _i++) {
        var num = nums_7[_i];
        if (num < min)
            min = num;
    }
    var isFinished = false;
    var i = 0;
    var commonFactors = [];
    while (isFinished === false) {
        if (min === 1) {
            commonFactors.push(min);
            isFinished = true;
        }
        else if (i === nums.length) {
            commonFactors.push(min);
            i = 0;
            min--;
        }
        else if (nums[i] % min === 0) {
            i++;
        }
        else {
            i = 0;
            min--;
        }
    }
    return commonFactors;
}
var advancedStatsAnalyzeButton = document.querySelector("button#analyze-advanced");
advancedStatsAnalyzeButton.addEventListener("click", function () {
    var numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#lcm").textContent = "".concat(getLeastCommonMultiple(numbers));
    document.querySelector("#factors").textContent = "".concat(getAllCommonFactors(numbers).join(", "));
});
