function readAllNumbers() : number[] {
    let textArea = document.querySelector("textarea") as HTMLTextAreaElement;
    let lines : string[] = textArea.value.split("\n");
    let numbers : number[] = [];

    //Step 4: update to handle multiple numbers on one line

    for (let i = 0; i < lines.length; i++){
        let elements : string[] = lines[i].split(" ");

        for (let index = 0; index < elements.length; index++) {

            if (elements[index] === "")
                continue;
            let num = Number(elements[index]);
            if (isNaN(num))
                continue;
            
            numbers.push(num);
        }
    }
    return numbers;
}

function getMean( nums  : number[]) : number {
    let sum = 0;
    for (const n of nums){
        sum += n;
    }
    return Number((sum / nums.length).toFixed(2));
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
    return [Number(aboveCount.toFixed(2)), Number(belowCount.toFixed(2))];
}

// PART A : Basic Stats

function getMedian(nums : number[]) : number {

    if (nums.length % 2 === 0) {
        let right : number = Number(nums.length / 2) -1;
        let left : number = right++;
        return (nums[right] + nums[left]) / 2;
    } else {
        return Number((nums[Math.floor(nums.length / 2)]).toFixed(2));
    }

}

function getMinMax(nums : number[]) : [number, number] {
    
    let min : number = nums[0];
    for (const num of nums) {
        if (num < min)
            min = num;
    }

    let max : number = nums[0];
    for (const num of nums) {
        if (num > max)
            max = num;
    }

    return [Number(min.toFixed(2)), Number(max.toFixed(2))]
}

function getStdDev(nums : number[]) : number {
    let mean : number = getMean(nums);
    let squared_distance_mean : number[] = []; 

    for (const num of nums) {
        let distance : number = (mean - num) ** 2;
        squared_distance_mean.push(distance);
    }

    return Number(Math.sqrt(getMean(squared_distance_mean)).toFixed(2));
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
    
    let max : number = nums[0];
    for (const num of nums) {
        if (num > max)
            max = num;
    }

    let isFinished : boolean = false;
    let i : number = 0;

    while (isFinished === false) {
        if (i === nums.length) {
            isFinished = true;
        } else if (max % nums[i] === 0) {
            i++;
        } else {
            i = 0;
            max++;   
        }
    }

    return max;
}

function getAllCommonFactors(nums : number[]) : number[] {

    let min : number = nums[0];
    for (const num of nums) {
        if (num < min)
            min = num;
    }

    let isFinished : boolean = false;
    let i : number = 0;
    let commonFactors : number[] = [];

    while (isFinished === false) {
        if (min === 1) {
            commonFactors.push(min);
            isFinished = true; 
        } else if (i === nums.length) {
            commonFactors.push(min);
            i = 0
            min--;
        } else if (nums[i] % min === 0) {
            i++;
        } else {
            i = 0
            min--;
        }
    }

    return commonFactors;
}

let advancedStatsAnalyzeButton = document.querySelector("button#analyze-advanced") as HTMLButtonElement;
advancedStatsAnalyzeButton.addEventListener("click", function () {
    let numbers : number[] = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function(a,b){ return a - b });

    (document.querySelector("#lcm") as HTMLElement).textContent = `${getLeastCommonMultiple(numbers)}`;
    (document.querySelector("#factors") as HTMLElement).textContent = `${getAllCommonFactors(numbers).join(", ")}`;
    }
);
