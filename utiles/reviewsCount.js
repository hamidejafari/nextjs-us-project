export default function reviewsCount(count, key) {
    let kc = count;
    let c1 = 90;
    let c2 = 1.25;
    let c3 = 0.6;
    let x = c1;
  
    if (key % 2 === 1) {
      x = x * c2;
      kc = (3200 * x) / 100;
    } else {
      x = x * c3;
      kc = (3200 * x) / 100;
    }
    kc = Math.round(kc);
  
    if (key == 0) {
      kc = 3200;
    }
  
    return kc + count;
}