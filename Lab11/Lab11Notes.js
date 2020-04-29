//creating a function
        function tax_owing(amount, state)
{
	if (state == "HI")
    {
		return amount * 0.04712;
    }
	else if (state == "CA")
    {
		return amount * 0.0725;
    }
	else
    {
		return -1;
    }
}

//using the function to find tax due (tax_due)
tax_due = tax_owing(10, "HI"); 

tax_due = tax_owing(10, "CA"); 

tax_due = tax_owing(10, "ASD"); 

tax_due = tax_owing(10, "HI"); 

//to display only two to the right of the decimal place
tax_due.toFixed(2)

tax_due = tax_owing(100, "HI");

//to display nothing after the decimal place
tax_due.toFixed();

//to round down (tax_due = 4)
Math.floor(tax_due)

//to round up (tax_due = 5)
Math.round(tax_due)

//shortening a value in a function
  // .substr gives a length and number
dayOfWeek = "Thursday";
"Thursday"
dayOfWeek.substr(0, 3);
"Thu"

//.substring gives a start and an end (** use .substring **)
dayOfWeek.substring(0, 3);
"Thu"
dayOfWeek.substring(2, 3);
"u"
dayOfWeek.substring(5, 8);
"day"
