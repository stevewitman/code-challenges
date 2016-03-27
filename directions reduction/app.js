function dirReduc(arr) {

  function is_opposite(a, b) {
    return (a === 'NORTH' && b === 'SOUTH' ||
        		a === 'SOUTH' && b === 'NORTH' ||
        		a === 'EAST' && b === 'WEST' ||
        		a === 'WEST' && b === 'EAST');
  }

  var result = arr.slice(0);
  var i=0;
  while(i<result.length-1) {
    if (is_opposite(result[i], result[i+1])) {
      result.splice(i, 2);
      i=-1;
    }
    i++;
  }
  return result;
}
