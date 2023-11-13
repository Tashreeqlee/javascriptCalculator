
let sum = '';
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.calculator button');
//Event listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === '=') {
      output.textContent = eval(sum);
    } else if (value === 'CE') {
      sum = '';
      output.textContent = '';
    } else {
      sum += value;
      output.textContent = sum;
    }
  });
});











