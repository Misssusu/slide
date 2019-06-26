let n;
init();
setInterval(() =>{
    makeLeave(imgNode(n))
    .one('transitionend',(evt) => {
        makeEnter($(evt.currentTarget));
    })
    makeCurrent(imgNode(n+1));
    n+=1;
},3000)
function imgNodeIndex(n) {
    if(n > 3) {
        n = n%3;
        if(n === 0) {
            n = 3;
        }
    }
    return n;
}
function init() {
    n = 1;
    imgNode(n).addClass('current')
    .siblings().addClass('enter')
}
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current');
}
function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave');
}
function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter');
}
function imgNode(n) {
    return $(`.box img:nth-child(${imgNodeIndex(n)})`);
}