// convert array to 2* array

const inx = [1,2,3,4];

const newarr =[0,0,0,0];

for (let i = 0; i < inx.length; i++) {
  newarr.push((inx[i] * 2)); 
}
console.log(newarr);
