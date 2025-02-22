const brickType = document.getElementById("brick-type");
const slider = document.getElementById("myPyramid");
//rangeValue.innerHTML = rangeSelection.value;  //error is here - why is innerHTML null?.
//redraw pyramid with diff types of bricks, depends on selection of user
brickType.onchange = function(event) {
    const slider = document.getElementById("myPyramid");

    const pyrimid = document.getElementById("pyramid");
    pyrimid.innerHTML = drawPyramid(slider.value, event.target.value);
}

slider.oninput = function(event) {
    const brickType = document.getElementById("brick-type");

    const pyrimid = document.getElementById("pyramid");
    pyrimid.innerHTML = drawPyramid(event.srcElement.value, brickType.value);
}

const drawPyramid = function(height, brickType) {
    //clear content
    document.getElementById("myPyramid").innerHTML = "";
    const rangeValue = document.getElementById("range-selection");
    rangeValue.innerHTML = height

    // for each row....
    let rowStr = "";
    for (let row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        let numBricks = row + 2;
        let numSpaces = height - row - 1;

        // build up a string for this row
        for (let i = 0; i < numSpaces; i++) {
            rowStr += "&nbsp";
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += brickType;
        };
    }
    return rowStr;
}
