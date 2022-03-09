console.log('sss');
const number = 9;
sum('s' as unknown as number);
function sum(params: number) {
  return params + number;
}
