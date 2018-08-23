//8 kata test was fairly simple calculate the average of an array
//declared the average value
//used forEach to loop through adding to the average value
//this was used for the nominator
//used .length in order to calculate the denominator

function find_average(array) {
    var average = 0
    array.forEach(x => average += x)
    return average/array.length
}
