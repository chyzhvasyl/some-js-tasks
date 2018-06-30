var bigAmount = 30;
var mediumAmount = 20;
var smallAmout = 10;

function calculateBoxes(apples, boxes) {

    boxes = boxes || {
        small: 0,
        medium: 0,
        big: 0
    };

    switch(true)
    {
        case apples >= bigAmount || (apples < bigAmount && apples >  mediumAmount):
            boxes.big += 1;
            return calculateBoxes(apples - bigAmount, boxes);
        case apples >= mediumAmount || (apples < mediumAmount && apples >  smallAmout):
            boxes.medium += 1;
            return calculateBoxes(apples - mediumAmount, boxes);
        case apples >= smallAmout:
            boxes.small += 1;
            return calculateBoxes(apples - 10, boxes);
        default:
            if(apples > 0)
            {
                boxes.small += 1;
            }
            return boxes;
    }
}

console.log(calculateBoxes(79));