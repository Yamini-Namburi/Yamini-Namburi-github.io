function selectPhone(){
    $.getJSON('https://s3.eu-west-2.amazonaws.com/avi-mylifecycle-bucketlondon/phones.json',function(data){
    /console.log(data[0].deviceSummary[0]);/
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
        var imageName= imageUrl.replace('/images','images');
        forPrices=document.getElementsByClassName("red");  // Find the elements   
        forPrices[0].innerText= upfrontGrossPrice;    // Change the content
        forPrices[1].innerText= monthlyGrossPrice;
        $('h1#display-name').html(displayName);
        $('#colour-name').html("<b>"+color+"</b>")
        $('#capacity-display').html("<b>"+phoneMemory+"GB</b>")
        document.getElementById("product-description").innerHTML = description;
        document.getElementById("image").setAttribute("src",imageName);
        setStarRating(starRating);
      }
    }
  });
  }

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