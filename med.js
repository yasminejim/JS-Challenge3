

  function cutPizzaSlice(slices){
    return function(people){
        var slicesPerPerson = slices / people
        return (`Each person gets ${slicesPerPerson} slices of pizza`)
    }
  }
  var sharePizza = cutPizzaSlice(8);
  console.log(sharePizza(2))
  console.log(sharePizza(3))