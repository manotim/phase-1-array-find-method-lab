// code your solution here
function superbowlWin(array) {
    let win = array.find(item => item.result === 'W')
    if (win) { 
    return win.year
    } else {
        return undefined
    }
}