// 



/**-------kilometerToMeter-------*/

function kilometerToMeter(kilometer){
    var meter = 1;
    
    if (kilometer >= 1){
        for (var i = 0; i < kilometer; i++){
            meter = kilometer * 1000;
        }
        return meter;
    }else{
        console.log("Please enter valid distance");
    }
}
console.log(kilometerToMeter(37));



/**-------budgetCalculator-------*/

function budgetCalculator(watch, phone, laptop){
    if(watch >= 1 && phone >= 1 && laptop >= 1){
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 300;
        var cost = watchPrice + phonePrice + laptopPrice;
        return cost;
    }else{
        console.log("Product price isn't zero or negative value!")
    }
}
console.log(budgetCalculator(3,2,1));



/**-------hotelCost-------*/

function hotelCost(day){
    var cost = 0;
    if (day >= 1){
        if (day <= 10){
            cost = day * 100;
        }else if(day <= 20){
            var firstPart = 10 * 100;
            var remaining = day - 10;
            var secondPart = remaining * 80;
            cost = firstPart + secondPart;
        }else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = day - 20;
            var thirdPart = remaining * 50;
            cost = firstPart + secondPart + thirdPart;
        }
        return cost;
    }else{
        console.log("Day isn't zero or negative number!")
    }
}
var totalCost = hotelCost(17);
console.log(totalCost);



/**-------megaFriend-------*/

function megaFriend(array){
    var longestWord = "";
    array.forEach(function(word) {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    });
    return longestWord;
}

var word = megaFriend(["Arijit Singh", "Armaan Malik", "Arman Alif", "Justin Bieber", "Tahsan Khan"]);
console.log(word);