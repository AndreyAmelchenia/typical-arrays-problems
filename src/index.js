
exports.min = function min (array) {
  if( array && array != 0 && (array.length != 0))
  {if(Array.isArray(array)) {
    let min = array[0];
    array.forEach(el => {
      if (min > el){
        min = el
      }
    })
    return min;
  } else {
    return 0;
  }} else {
    return 0;
  }
}

exports.max = function max (array) {
  if( array && array != 0 && (array.length != 0))
  {if(Array.isArray(array)) {
    let max = array[0];
    array.forEach(el => {
      if (max < el){
        max = el
      }
    })
    return max;
  } else {
    return 0;
  }} else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if( array && array != 0 && (array.length != 0))
  {if(Array.isArray(array)) {
    let avg = 0;
    array.forEach(el => {
      avg +=el;
    })
    avg = avg/(array.length)
    return avg;
  } else {
    return 0;
  }} else {
    return 0;
  }
}
