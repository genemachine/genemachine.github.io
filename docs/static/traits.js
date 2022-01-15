const mutationRateSlider = document.getElementById('mutation_rate');

let mutationRate = 1; // 1%

mutationRateSlider.addEventListener('change', function() {
    if(mutationRateSlider.value > 100){
        mutationRateSlider.value = 100;
    } else if (mutationRateSlider.value < 0) {
        mutationRateSlider.value = 0;
    }

    mutationRate = mutationRateSlider.value;
});

/* traits:

for all the chromosomes, each parent will contribute 1 of each of their chromosomes

- sex
- blood type
- eye color
- hair color
- dimples
- freckles

- alzheimer
> The most common type of Alzheimer's disease usually begins after age 65 
(late-onset Alzheimer's disease). The most common gene associated with 
late-onset Alzheimer's disease is a risk gene called apolipoprotein E (APOE). 
APOE has three common forms: APOE e2 — the least common — reduces the risk of 
Alzheimer's.

- Red/green color blindness (ONLY, not other types)
> Genetic changes involving the OPN1LW or OPN1MW gene cause red-green color 
vision defects. These changes lead to an absence of L or M cones or to the 
production of abnormal opsin pigments in these cones that affect red-green 
color vision. Blue-yellow color vision defects result from mutations in 
the OPN1SW gene.
>> since female has 2 X c's, it isnt phenotyped usually, but for male it is bc not
2 x c's, is from X c, so only males who get it from X c is phenotyped, but for females
have to have it in both X c's for it to be phenotyped

- nearsighted
*/

// 

let Population = [];

// p1 : blood type [ A B O AB ]
// q1 : eye color [ blue green brown ]
// q2 : dimples [ true false ]

let bloodTypes = ['A', 'B', 'O', 'AB'];
let eyeColors = ['blue', 'green', 'brown'];
let dimples = ['true', 'false'];

// p1 : hair color [ black brown red yellow ]
// q2 : freckles [ true false ]

let hairColors = ['black', 'brown', 'red', 'yellow'];
let freckles = ['true', 'false'];

// p1 : sex [ XX XY ]

let sexes = ['XX', 'XY']

let parent1 = {
    "sex":["X","X"],
    "hairColors": ["b","b"],
    "dimples": ["D","D"],
    "bloodTypes": ["A"],
    "eyeColor": ["B","B"],
    "freckles":["F","f"],
};
let parent2 = {
    "sex":["X","Y"],
    "hairColors": ["B","b"],
    "dimples": ["D","D"],
    "bloodTypes": ["AB"],
    "eyeColor": ["g","g"],
    "freckles":["f","f"],
};

console.log(parent1);
console.log(parent2);
function startGen() {
    let offspring={
    "sex": [parent1.sex[Math.floor(Math.random() * parent1.sex.length)],parent2.sex[Math.floor(Math.random() * parent2.sex.length)]],
    "hairColor":[parent1.hairColors[Math.floor(Math.random() * parent1.hairColors.length)],parent2.hairColors[Math.floor(Math.random() * parent2.hairColors.length)]],
    "freckles":[parent1.dimples[Math.floor(Math.random() * parent1.dimples.length)],parent2.dimples[Math.floor(Math.random() * parent2.dimples.length)]],
    "eyeColor":[parent1.eyeColor[Math.floor(Math.random() * parent1.eyeColor.length)],parent2.eyeColor[Math.floor(Math.random() * parent2.eyeColor.length)]],
    "freckles":[parent1.freckles[Math.floor(Math.random() * parent1.freckles.length)],parent2.freckles[Math.floor(Math.random() * parent2.freckles.length)]],
    };
    console.log(offspring);

}