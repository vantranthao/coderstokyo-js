// Dùng hàm powerup tính bình phương các 
//số chia hết cho 2 trong mảng truyền vào

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = arr.map(function (x) {
    if (x % 2 == 0)
        return x*x;
    else return x;
});


console.log(result);