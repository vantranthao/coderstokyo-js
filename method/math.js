/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
    // viết code ở đây
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) return true;
        console.log(arr[i]);
    }
    return false;
  }

  var arr = [1,2,3,4,5];
  var value = 3;
  console.log(has(arr, value));