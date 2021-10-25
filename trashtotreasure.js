function smartGarbage(trash, bins){
  for(let bin in bins){
    if(bin === trash){
      bins[bin] ++;
    }
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));