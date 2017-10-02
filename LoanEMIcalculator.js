
function calculate(){
    var total;
    var bool = true;
     principle =parseInt($("#amount").val());
     principle_validation(principle);
    var intRate = parseInt($("#intrate").val());
    interestRate_Validation(intRate);
    var loanTenure = parseInt($("#tenure").val());
    loanTenure_validation(loanTenure);
    var loanType = $("#typeOfLoan").val();
    var timesInAYear = parseInt($("#duration").val());
    if(bool){
    if(loanType=="simple"){
        total = parseInt(principle) + (parseInt(principle)*parseInt(loanTenure)*parseInt(intRate)/100);
        total = (total/(loanTenure*12)).toFixed(2);
    }
    else if(loanType=="compound"){
        total = principle*Math.pow(1+intRate/(timesInAYear*100),(timesInAYear*loanTenure));
        total = (total/12).toFixed(2);
    }
    else{
        alert("Please select type of interest");
    }
    $("#total").val(total);
    }
}
function principle_validation(principle){
    if(isNaN(parseInt(principle)))
    {  
        alert("Enter valid value of principle");
        $("#change").html("Refresh the page and enter the valid values");
        throw Error('Principle is  not valid');
        bool = false;
    }
    else if(principle<0){
        alert("Enter valid value of principle");
        $("#change").html("Refresh the page and enter the valid values");
        throw Error('Principle is  not valid');
        bool = false;
    }
    else {
        return "Principle amount is valid";
    }
}
function interestRate_Validation(intRate){
    if(isNaN(parseInt(intRate))){
        alert("Enter valid value of interest rate");
        $("#change").html("Refresh the page and enter the valid values");
        throw Error('Interest rate is  not valid ');
        bool = false;
    }
    else if(intRate<0){
        alert("Enter valid value of interest rate");
        $("#change").html("Refresh the page and enter the valid values");
        throw Error('Interest rate is  not valid');
        bool = false;
    }
    else {
        return "Interest rate amount is valid";
    }
}
function loanTenure_validation(loanTenure){
    if(isNaN(loanTenure)){
        alert("Enter valid value of loan Tenure");
        $("#change").html("Refresh the page and enter the valid values");
        throw Error('Loan tenure is not valid');
        bool = false;
    }
}


