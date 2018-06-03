/**
    Invoked on the form submit which Parses phones.json to 
    retrieve the data which needs to be changed on the phone
    selection based on color and the capacity of the phone:-
        1. starRating
        2. displayName
        3. description
        4. monthlyGrossPrice
        5. upfrontGrossPrice
        6. imageUrl
        7. color name
        8. capacity
*/
function selectPhone(){
    $.getJSON('https://s3.eu-west-2.amazonaws.com/avi-mylifecycle-bucketlondon/phones.json',function(data){
    var phones= data[0];  
    color = $('input[name=color]:checked', '#swatch-selector').val();
    capacity = $('input[name=capacity]:checked', '#swatch-selector').val();
    for (var i = phones.deviceSummary.length - 1; i >= 0; i--) {
      phoneMemory = phones.deviceSummary[i].memory.replace('GB','')
      if(color === phones.deviceSummary[i].colourName && capacity === phoneMemory){
        var starRating = phones.rating;
        var deviceInfo = phones.deviceSummary[i];
        var displayName = deviceInfo.displayName;
        var description = deviceInfo.displayDescription;
        var monthlyGrossPrice = deviceInfo.priceInfo.bundlePrice.monthlyPrice.gross;
        var upfrontGrossPrice = deviceInfo.priceInfo.hardwarePrice.oneOffPrice.gross;
        var imageUrl = deviceInfo.merchandisingMedia[0].value;
        setImage(imageUrl);
        setPrices(upfrontGrossPrice,monthlyGrossPrice);
        setDisplayNameAndDescription(displayName,description);
        setColorAndCapacity(color,phoneMemory);
        setStarRating(starRating);
      }
    }
  });
}

/**
    Invoked on the body load to pre-select color and 
    capacity needed for form-submit
*/
function init(){
    $('#colour-name').html("<b>Space Grey</b>")
    $('#capacity-display').html("<b>64GB</b>")
    colourSelection = document.getElementById("Space Grey");
    colourSelection.checked = true;
    capacitySelection = document.getElementById("capacity-64");
    capacitySelection.checked = true;
    selectPhone();
}

function setStarRating(starRating){
    var starElementId;
    switch(starRating){
      case("5"): starElementId = "star5"; break;
      case("4.2"): starElementId = "star4half"; break;
      case("4.0"): starElementId = "star4"; break;
      case("3.2"): starElementId = "star3half"; break;
      case("3.0"): starElementId = "star3"; break;
      case("2.5"): starElementId = "star2half"; break;
      case("2.0"): starElementId = "star2"; break;
      case("1.5"): starElementId = "star1half"; break;
      case("1.0"): starElementId = "star1"; break;

    }
    var starRatingInputId = document.getElementById(starElementId);
    starRatingInputId.checked = true;
}

function setPrices(upfrontGrossPrice,monthlyGrossPrice){
    forPrices=document.getElementsByClassName("red");
    forPrices[0].innerText= upfrontGrossPrice;
    forPrices[1].innerText= monthlyGrossPrice;
}

  function setImage(imageUrl){
     var imageName= imageUrl.replace('/images','images');
     document.getElementById("image").setAttribute("src",imageName);
  }

  function setDisplayNameAndDescription(displayName,description){
    $('h1#display-name').html(displayName);
    document.getElementById("product-description").innerHTML = description;
  }

  function setColorAndCapacity(color,phoneMemory){
    $('#colour-name').html("<b>"+color+"</b>")
    $('#capacity-display').html("<b>"+phoneMemory+"GB</b>")
  }