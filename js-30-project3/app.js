const inputs = document.querySelectorAll('.controls input');

function handleChange(){
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input=>{
    input.addEventListener('change', handleChange);
})

inputs.forEach(input =>{
    input.addEventListener('mousemove', handleChange);
})


// const colorPicker = document.querySelector('#base-color');

// colorPicker.addEventListener('input', function() {
//     const selectedColor = this.value;
    
//     const imageBorder = document.querySelector('img');
//     imageBorder.style.borderColor = selectedColor;
//     const textJS = document.querySelector('.h1');
//     // console.log(textJS);
//     console.log(textJS.innerText.style);
//     textJS.innerText.style.color = selectedColor;

// });

// const blurEffect = document.querySelector('#blur');

// blurEffect.addEventListener('input', ()=>{
//     // console.log(this);
//     const blurValue = blurEffect.value;
//     console.log(blurValue);
//     const image = document.querySelector('img');
//     image.style.filter = `blur(${blurValue/10}px)`;
// })

