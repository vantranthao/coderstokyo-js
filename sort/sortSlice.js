/**
 * Dữ liệu sinh viên Coders.Tokyo School là một 
 * các object như sau
 * Viết function trả về 1 array gồm 3 người có 
 * điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
];
let nameResult = [];
var temp = students.sort(function(a,b) {
    return b.score - a.score;
});
console.log(temp);

// for (let i = 0; i <= temp.length; i++) {
//     if (i <= 2) {
//         nameResult.push(temp[i].name);
//     }
// }

console.log(nameResult);

