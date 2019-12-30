
/*
 循环数组的每一项，把数组的每一项和他后面的值一一做比较，如果和数组的当前项相同了，证明这一项就是重复项，就把他在原数组里删除（性能不好）
*/
function unique1(ary) {
    //循环数组的每一项   ary.length - 1:表示最后一项不用再比较了
    for (var i = 0; i < ary.length - 1; i++) {
        let index = ary[i];
        //数据的当前项和后面的每一项进行比较
        for (var j = i + 1; j < ary.length; j++) {
            let nextIndex = ary[j];
            if (index == nextIndex) {
                ary.splice(j, 1)//删除
                j--;//防止数组坍陷
            }
        }
    }
}


/*
数组去重2
添加到对象中，进行判断是否已经存在
*/
function unique2(ary) {
    var obj = {};
    for (var i = 0; i < ary.length; i++) {
        var item = ary[i];//当前项
        if (typeof obj[item] != "undefined") {
            ary.splice(i, 1);
            i--;
        }
        obj[item] = item;
    }
    return ary;
}


/*
数组去重3
添加到新数组中，进行判断是否已经存在
*/

function unique3(ary) {
    var newAry = [];
    for (var i = 0; i < ary.length; i++) {
        var item = ary[i];
        if (newAry.indexOf(item) == -1) {
            newAry.push(item);
        }
    }
    return newAry;
}
let ary = [1, 2, 3, 2, 3, 2, 3, 3]
let rex = unique3(ary);
console.log(rex);