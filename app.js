document.querySelector('#loan-form').addEventListener('submit', e => {
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  console.log('Calculating...');

  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const numberOfYears = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    showSuccess('Success');
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = (totalPayment.value - principal).toFixed(2);
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
  } else {
    console.log('Please check your numbers!');
    showError('Please check your numbers again');
  }
}

function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success';
  const heading = document.querySelector('.heading');
  const card = document.querySelector('.card');
  successDiv.appendChild(document.createTextNode(message));
  card.insertBefore(successDiv, heading);

  setTimeout(clearSuccess, 3000);
}

function clearSuccess() {
  document.querySelector('.alert-success').remove();
}

function showError(message) {
  document.querySelector('#loading').style.display = 'none';
  document.querySelector('#results').style.display = 'none';
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  const heading = document.querySelector('.heading');
  const card = document.querySelector('.card');
  errorDiv.appendChild(document.createTextNode(message));
  card.insertBefore(errorDiv, heading);

  setTimeout(clearErr, 3000);
}

function clearErr() {
  document.querySelector('.alert-danger').remove();
}
