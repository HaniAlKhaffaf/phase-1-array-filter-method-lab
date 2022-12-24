// Code your solution here
function findMatching(drivers, nameOfDriver) {
    const result = drivers.filter(name => name.toUpperCase() === nameOfDriver.toUpperCase())
    return result;
}

function fuzzyMatch(drivers, nameOfDriver) {
    const result = drivers.filter(name => name.slice(0, 1) === nameOfDriver.slice(0, 1))
    return result;
}

function matchName(drivers, nameOfDriver) {
    const result = drivers.filter(n => n.name === nameOfDriver)
    return result;
}