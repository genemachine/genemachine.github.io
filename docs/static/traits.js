const mutationRateSlider = document.getElementById('mutation_rate');

let dadGenes;
let momGenes;
// on change
mutationRateSlider.addEventListener('change', function() {
    if(mutationRateSlider.value > 100){
        mutationRateSlider.value = 100;
    } else if (mutationRateSlider.value < 0) {
        mutationRateSlider.value = 0;
    }
});