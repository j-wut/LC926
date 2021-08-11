export const isMonotone = (bits: number[]) => {
  for(let i=1; i < bits.length; i++) {
    if(bits[i] < bits[i-1]){
      return false;
    }
  }
  return true;
}

export const calculateFlips = (bits: number[]) => {
  let firstOne = bits.length;
  for(let i=firstOne-1; i >= 0; i--) {
    if(bits[i] === 1 && i < firstOne){
      firstOne = i;
    }
  }
  let counts = [0, 0];
  for(let i=firstOne; i < bits.length; i++){
    counts[bits[i]]++;
  };
  return Math.min(counts[0], counts[1]);
}