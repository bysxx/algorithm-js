function solution(cap, n, deliveries, pickups) {
  let target = n - 1;
  let length = 0;
  let isDeliverFinish = false;
  let isPickupFinish = false;

  while (target >= 0) {
    if (deliveries[target] > 0 || pickups[target] > 0) {
      let remain = cap;
      let index = target;

      while (!isDeliverFinish && remain > 0) {
        if (index < 0) {
          isDeliverFinish = true;
          break;
        }

        if (remain >= deliveries[index]) {
          remain -= deliveries[index];
          deliveries[index] = 0;
          index -= 1;
        } else {
          deliveries[index] -= remain;
          remain = 0;
        }
      }

      remain = cap;
      index = target;

      while (!isPickupFinish && remain > 0) {
        if (index < 0) {
          isPickupFinish = true;
          break;
        }

        if (remain >= pickups[index]) {
          remain -= pickups[index];
          pickups[index] = 0;
          index -= 1;
        } else {
          pickups[index] -= remain;
          remain = 0;
        }
      }

      length += 2 * (target + 1);
    } else {
      target -= 1;
    }
  }

  return length;
}
