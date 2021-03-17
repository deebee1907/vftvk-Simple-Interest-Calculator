function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0)
    {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var date = new Date();
        var nextyear = date.getFullYear() + Number(years);
        var result = "";
        result += "If you deposit <mark>" + principal + "</mark>,<br>";
        result += "at an interest rate of <mark>" + rate + "%</mark>.<br>";
        result += "You will receive an amount of <mark>" + interest + "</mark>,<br>";
        result += "in the year <mark>" + nextyear + "</mark>";

        document.getElementById("result").innerHTML = result;
        return true;
    }
}
function rangevalue()
{
    var range = document.getElementById("rate").value;
    document.getElementById("display_range").innerHTML = range + "%";
}
