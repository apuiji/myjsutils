// range [min, max)

export let contains = ([min, max], value) => value >= min && value < max

export let intersect = (range, range1) => {
  let [min, max] = range
  let [min1, max1] = range1
  let min2
  let max2
  if (contains(range, min1)) {
    min2 = min1
  } else if (contains(range1, min)) {
    min2 = min
  } else {
    return
  }
  if (contains(range, max1)) {
    max2 = max1
  } else {
    max2 = max
  }
  return [min2, max2]
}
