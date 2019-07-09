function Bill_Splitter(){
  this.amount = 0;
};

  Bill_Splitter.prototype.calculate = function(){

    var cost = parseInt(document.getElementById("cost").value);
    var tip = parseInt(document.getElementById("tip").value);
    var diners = parseInt(document.getElementById("diners").value);

    var amount = (cost + tip) / diners

    this.amount += amount
    document.getElementById("amount").innerHTML = amount

  }

  Bill_Splitter.prototype.reset = function() {

    this.amount = 0

  }
