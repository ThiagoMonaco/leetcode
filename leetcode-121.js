/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let lastProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const value = prices[i]
        if(value < buy) {
            buy = value
        } else if (lastProfit <= (value - buy)) {
            lastProfit = value - buy
        }
    }
    return lastProfit
}