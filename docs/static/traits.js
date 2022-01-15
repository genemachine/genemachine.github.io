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

class Person {
    constructor(genes) {
        this.genes = {
            'chromosome_1': [
                genes['xy']['chromosome_1'],
                genes['xx']['chromosome_1'],
            ],
            'chromosome_2': [
                genes['xy']['chromosome_2'],
                genes['xx']['chromosome_2'],
            ],
            'chromosome_3': [
                genes['xy']['chromosome_3'],
                genes['xx']['chromosome_3'],
            ],
        }
    }
}

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

function setExampleParent() {
    let c1 = {
        'xy': {
            'p1': bloodTypes[Math.floor(Math.random() * bloodTypes.length)],
            'q1': eyeColors[Math.floor(Math.random() * eyeColors.length)],
            'q2': dimples[Math.floor(Math.random() * dimples.length)],
        },
        'xx': {
            'p1': bloodTypes[Math.floor(Math.random() * bloodTypes.length)],
            'q1': eyeColors[Math.floor(Math.random() * eyeColors.length)],
            'q2': dimples[Math.floor(Math.random() * dimples.length)],
        }
    }

    let c2 = {
        'xy': {
            'p1': hairColors[Math.floor(Math.random() * hairColors.length)],
            'q1': freckles[Math.floor(Math.random() * freckles.length)],
        },
        'xx': {
            'p1': hairColors[Math.floor(Math.random() * hairColors.length)],
            'q1': freckles[Math.floor(Math.random() * freckles.length)],
        },
    }

    let c3 = {
        'xy': {
            'sex': sexes[Math.floor(Math.random() * sexes.length)],
        },
        'xx': {
            'sex': sexes[Math.floor(Math.random() * sexes.length)],
        }
    }

    let personCreated = new Person(
        {
            'xx': {
                'chromosome_1': c1['xx'],
                'chromosome_2': c2['xx'],
                'chromosome_3': c3['xx'],
            },
            'xy': {
                'chromosome_1': c1['xy'],
                'chromosome_2': c2['xy'],
                'chromosome_3': c3['xy'],
            },
        },
    )
    
    return personCreated;
}

let parent1 = setExampleParent();
let parent2 = setExampleParent();

console.log(parent1);
console.log(parent2);