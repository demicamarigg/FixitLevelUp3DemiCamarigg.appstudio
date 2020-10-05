//functions
function carLoanPayment(principleCarLoan, monthlyCarLoan, monthsCarLoan) {
  let carloanPaymentFormula = principleCarLoan * (monthlyCarLoan*((1+monthlyCarLoan)**monthsCarLoan))/(((1+monthlyCarLoan)**monthsCarLoan)-1)
  return carloanPaymentFormula
}

function homeLoanPayment(principleHomeLoan, monthlyHomeLoan, yearHomeLoan) {
  let homeloanPaymentFormula = principleHomeLoan * (monthlyHomeLoan*((1+monthlyHomeLoan)**(yearHomeLoan*12)))/(((1+monthlyHomeLoan)**(yearHomeLoan*12))-1)
  return homeloanPaymentFormula;
}

//code for car loan button
btnCarLoan.onclick=function(){
  lblCal.hidden = true
  
  let carLoanPrinciple = ""
  let carLoanPercent = ""
  let carLoanMonthly = ""
  let carLoanMonths = ""
 
  carLoanPrinciple = Number(inptAmount.value)
  carLoanPercent = Number(inptInR.value)
  carLoanMonthly = (carLoanPercent) / 12 / 100
  carLoanMonths = Number(inptMonCar.value)
  
  let calculatePayment = carLoanPayment(carLoanPrinciple, carLoanMonthly, carLoanMonths)
  lblCal.hidden = false
  lblCal.textContent = `A car loan for $${carLoanPrinciple} over ${carLoanMonths} months at ${carLoanPercent}% annual interest would have a monthly payment of $ ${calculatePayment}`
}


// code for Home Loan
btnHomeLoan.onclick=function(){
  lblCal.hidden = true
  
  let homeLoanPrinciple = ""
  let homeLoanAnnual = ""
  let homeLoanMonthly =""
  let homeLoanYear = ""
  
  homeLoanPrinciple = Number(inptAmount.value)
  homeLoanAnnual = Number(inptInR.value)
  homeLoanMonthly = homeLoanAnnual /12 / 100
  homeLoanYear = Number(inptHomeYears.value)
  
  let calculateHomePayment = homeLoanPayment(homeLoanPrinciple, homeLoanMonthly, homeLoanYear)
  lblCal.hidden = false
  lblCal.textContent = `A home loan for $${homeLoanPrinciple} over ${homeLoanYear} years at ${homeLoanAnnual} percent interest would have a monthly payment of $${calculateHomePayment}`
}
