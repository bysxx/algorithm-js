function solution(cap, n, deliveries, pickups) {
    var answer = 0;

    let deliveryMax = n-1
    let pickupMax = n-1
    
    while(deliveries[deliveryMax] == 0 || pickups[pickupMax] == 0) {
        if(deliveries[deliveryMax] == 0) {
            deliveryMax--
        }
        if(pickups[pickupMax] == 0) {
            pickupMax--
        }
    }
    while(true) {
        if(deliveryMax == -1 && pickupMax == -1) {
            break;
        }
        if(deliveryMax > pickupMax) {
            answer += 2 * (deliveryMax + 1)
        } else {
            answer += 2 * (pickupMax + 1)
        }
        let tmp = delivery(deliveries, deliveryMax, cap, cap)
        deliveries = tmp.list
        deliveryMax = tmp.idx
        tmp = delivery(pickups, pickupMax, cap, cap)
        pickups = tmp.list
        pickupMax = tmp.idx
    }
    return answer;
}

function delivery(deliveries, idx, cap, left) {
    if(idx < 0) return {list: deliveries,idx: idx}
    if(deliveries[idx] == 0) {
        const result = delivery(deliveries, idx -1, cap, left)
        deliveries = result.list
        idx = result.idx
    } else if(deliveries[idx] > left) {
        let tmp = deliveries[idx]
        deliveries[idx] -= left
    } else {
        let tmp = deliveries[idx]
        deliveries[idx] = 0
        const result = delivery(deliveries, idx -1, cap, left-tmp)
        deliveries = result.list
        idx = result.idx
    }
    return {list: deliveries, idx: idx}
}

