const [N, target] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const snail = new Array(N).fill(0).map((el) => new Array(N).fill(0));
let [curX, curY] = [Math.floor(N / 2), Math.floor(N / 2)];
snail[curX][curY] = 1;
let targetIdx = [curX + 1, curY + 1];
let cur = 2;
let count = 1;
while (curX !== 0 && curY !== 0) {
  curY--;
  for (let i = 0; i < count * 2; i++) {
    if (cur === target) targetIdx = [curY + 1, curX + 1];
    snail[curY][curX++] = cur++;
  }
  curX--;
  curY++;
  for (let i = 0; i < count * 2; i++) {
    if (cur === target) targetIdx = [curY + 1, curX + 1];
    snail[curY++][curX] = cur++;
  }
  curY--;
  curX--;
  for (let i = 0; i < count * 2; i++) {
    if (cur === target) targetIdx = [curY + 1, curX + 1];
    snail[curY][curX--] = cur++;
  }
  curX++;
  curY--;
  for (let i = 0; i < count * 2; i++) {
    if (cur === target) targetIdx = [curY + 1, curX + 1];
    snail[curY--][curX] = cur++;
  }
  curY++;
  count++;
}
console.log(snail.map((el) => el.join(' ')).join('\n'));
console.log(targetIdx.join(' '));
