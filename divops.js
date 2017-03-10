
const getStyle = (el,styleProp) => {
    var x = el;
    var y = "";
    if (x.currentStyle)
        y = x.currentStyle[styleProp];
    else if (window.getComputedStyle) {
        var style = document.defaultView.getComputedStyle(x,null);
        y = style[styleProp];
    }
    return y;
}

const countLines = (target) => {
    var divHeight  = target.offsetHeight;
    var lineHeight = getLineHeight(target);
    var lines = divHeight / lineHeight;
    return lines;
}

const getLineHeight = (target) => parseInt(getStyle(target, "lineHeight"));

const redraw = (target) => {
    target.style.display='none';
    target.offsetHeight;
    target.style.display='';
}

const fitToDims = (target, width, height) => {
    while (target.offsetHeight < height) {
        let lineHeight = getLineHeight(target);
        let newHeight = (lineHeight + 1) + "px"
        target.style.lineHeight = newHeight;
        target.style.fontSize = newHeight;
        redraw(target);

    }
    while (target.offsetHeight > height) {
        let lineHeight = getLineHeight(target);
        let newHeight = (lineHeight - 1) + "px"
        target.style.lineHeight = newHeight;
        target.style.fontSize = newHeight;
        redraw(target);

    }

}

module.exports = {
    getStyle,
    countLines,
    fitToDims
}
