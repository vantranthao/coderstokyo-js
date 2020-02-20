context = {
    data: null
}
const getData = async () => {
    let api = await fetch('https://reqres.in/api/users?page=2');
    console.log(api);
    let data = await api.json();
    context.data = data.data
    console.log(context.data);
}
getData();

// const viewData
const viewData = async () => {
    await getData();
    console.log(context.data);
    let root = document.getElementById('root');
    context.data.forEach((value, index) => {   
        let html = `
        <div id = 'user-${index}'>
        <li>Name : ${value.first_name}</li>
        <li>Email : ${value.email}</li>
        <img class = 'unview' scr = '${value.avatar}'> </img>
        </div>
        `

        root.innerHTML += html;
    });
}

viewData();

// await khiến cho js đợi đến tận cái promise được settle xong
// và return kết quả

const showDetailInfo = async () => {
    await viewData();
    for (let i = 0; i < context.data.length; i++){
        let userInfo = document.getElementById(`user-${i}`);
        userInfo.addEventListener('click', () => {
            console.log(userInfo.children[2]);
            userInfo.children[2].classList.toggle('view');
        })
    }
}

showDetailInfo();