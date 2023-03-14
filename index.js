function distanceFromHqInBlocks(block) {
    if (block > 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  function distanceFromHqInFeet(pickupLocation) {
    const headquartersLocation = 42;
    let distanceInFeet;
  
    if (pickupLocation >= headquartersLocation) {
      distanceInFeet = (pickupLocation - headquartersLocation) * 264;
    } else {
      distanceInFeet = (headquartersLocation - pickupLocation) * 264;
    }
  
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(start, destination) {
    let distanceInFeet;
  
    if (destination > start) {
      distanceInFeet = (destination - start) * 264;
    } else {
      distanceInFeet = (start - destination) * 264;
    }
  
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return "cannot travel that far";
    }
  
    return fare;
  }
    
