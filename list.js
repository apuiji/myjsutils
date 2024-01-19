/**
 * @param gkf group key function
 */
export let groupBy = (src, gkf) => {
  let dest = {}
  for (let i = 0; i < src.length; ++i) {
    let gk = gkf(src[i], i, src)
    let g = dest[gk] ||= []
    g.push(a)
  }
  return dest
}

/**
 * similar with Array.sort, but out of place
 * @param ovf order value function
 */
export let orderBy = (src, ovf) => {
  let a = src.map((x, i, s) => [odf(x, i, s), x])
  a.sort(([x], [y]) => x < y ? -1 : x > y ? 1 : 0)
  return a.map(x => x[1])
}