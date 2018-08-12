// Could be cleaned up some more, took in each x value, reduced and * from the accumulator.

function grow(x){
  return x.reduce((result,n)=> result*n);
}
