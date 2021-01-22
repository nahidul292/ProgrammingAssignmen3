// Problem 1

function kilometerToMeter(km){
    var meter=0;
    if (km>0){
        meter = km*1000;
        return meter;
    }
    else if (km==0){
        return 'Distance is Null';
    }
    else if (km<0){
        return 'Distance can not be negative';
    }
    else{
        return 'Invalid Input';
    }

}








// Problem 2

function budgetCalculator(watch, mobile, laptop) {
    let budgetNeeded = 0;
    if (watch <= 0 && mobile <= 0 && laptop <= 0) {
        return "You didn't buy anything.";
    } else if (watch >= 1 || mobile >= 1 || laptop >= 1) {
        let watchPrice = watch * 50;
        let mobilePrice = mobile * 100;
        let laptopPrice = laptop * 500;
        budgetNeeded = watchPrice + mobilePrice + laptopPrice;
    } else {
        return "Wrong Input!"
    }
    return budgetNeeded;
   
}








// Problem 3

function hotelCost(day) {

    let totalCost = 0;

    if (day <= 0) {
        return "Days can not be null or negative";
    } else if (day <= 10) {
        totalCost = day * 100;                       // For 1-10 th days, Fare= 100tk/day
    } else if (day <= 20) {
        let firstCost = 10 * 100;
        let remaining = day - 10;
        let secondCost = remaining * 80;            // For 11-20 th days, Fare= 80tk/day
        totalCost = firstCost + secondCost;
    } else {
        let firstCost = 10 * 100;
        let secondCost = 10 * 80;
        let remaining = day - 20;
        let restDays = remaining * 50;              // For 21 th to above days, Fare= 50tk/day
        totalCost = firstCost + secondCost + restDays;
    }
    return totalCost;
}









// Problem 4

function megaFriend(friends) {
    var mega = friends[0];
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length > mega.length) {
            mega = friends[i];
        }
    }
    return mega;
}
// var result = megaFriend(['Maruf', 'Shakil', 'Jobayed', 'Dipta', 'Tanoy', 'Kaisars', 'Nahidul']);




