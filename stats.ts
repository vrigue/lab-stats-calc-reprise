function readAllNumbers() : number[] {
    let textArea = document.querySelector("textarea") as HTMLTextAreaElement;
    let lines : string[] = textArea.value.split("\n");
    let numbers : number[] = [];

    //Step 4: update to handle multiple numbers on one line

    for (let i = 0; i < lines.length; i++){
        if (lines[i] === "")
            continue;
        let num = Number(lines[i]);
        if (isNaN(num))
            continue;
        numbers.push(num);
    }
    return numbers;
}

function getMean( nums  : number[]) : number {
    let sum = 0;
    for (const n of nums){
        sum += n;
    }
    return sum / nums.length;
}

function getAboveBelowMean(nums : number[]) : [number, number] {
    let mean = getMean(nums);
    let aboveCount = 0;
    let belowCount = 0;
    for (const n of nums){
        if (n < mean)
            belowCount++;
        else if (n > mean)
            aboveCount++;
    }
    return [aboveCount, belowCount];
}

// PART A : Basic Stats

function getMedian(nums : number[]) : number {
    //Step 1
    return NaN; // remove me!
}

function getMinMax(nums : number[]) : [number, number] {
    //Step 2
    return [NaN, NaN]; // remove me!
}

function getStdDev(nums : number[]) : number {
    //Step 3
    return NaN; // remove me!
}

let basicStatsAnalyzeButton = document.querySelector("button#analyze") as HTMLButtonElement;
basicStatsAnalyzeButton.addEventListener("click", function () {
    let numbers : number[] = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function(a,b){ return a - b });

    (document.querySelector("#mean") as HTMLElement).textContent = `${getMean(numbers)}`;    
    (document.querySelector("#aboveBelow") as HTMLElement).textContent = `${getAboveBelowMean(numbers).join(" & ")}`;
    (document.querySelector("#median") as HTMLElement).textContent = `${getMedian(numbers)}`;
    (document.querySelector("#minMax") as HTMLElement).textContent = `${getMinMax(numbers).join(" & ")}`;
    (document.querySelector("#stdDev") as HTMLElement).textContent = `${getStdDev(numbers)}`;
});

// PART B: Advanced Integer Stats

function getLeastCommonMultiple(nums : number[]) : number {
    return NaN; // remove me!
}

function getAllCommonFactors(nums : number[]) : number[] {
    return [NaN]; // remove me!
}

let advancedStatsAnalyzeButton = document.querySelector("button#analyze") as HTMLButtonElement;
advancedStatsAnalyzeButton.addEventListener("click", function () {
    let numbers : number[] = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function(a,b){ return a - b });

    (document.querySelector("#lcm") as HTMLElement).textContent = `${getLeastCommonMultiple(numbers)}`;
    (document.querySelector("#factors") as HTMLElement).textContent = `${getAllCommonFactors(numbers).join(", ")}`;
});
