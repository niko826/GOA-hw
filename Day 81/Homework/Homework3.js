function getweather(hour){
    if(hour >=6 && hour < 12){
        return 'its sunny';
    }
    else if (hour >= 12 && hour <18){
        return 'its rainy';
      }
      else {
        return 'clear'
      }
}

export {getweather};