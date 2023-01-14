const tbody = document.querySelector("tbody");
const getter = document.getElementById('sort');



const fetchAllUsers = async () => {
  const data = await fetch("data.php?read=1", {
    method: "GET",
  });
  const response = await data.text();
  tbody.innerHTML = response;
};

fetchAllUsers();

const sort = async(id, id2) => {
    let data = await fetch('get.php?id=${id1}', { method: "GET",});
    let response = await data.json();
    num1 = parseInt(response.NUM);
    data = await fetch('get.php?id=${id2}', { method: "GET",});
    response = await data.json();
    num2 = parseInt(response.NUM);
    if(num1 > num2 && id < id2) {
        data = await fetch("set.php?id=${id}&v=${num2}", {method :"GET",});
        data = await fetch("set.php?id=${id2}&v=${num1}", {method :"GET",});
    }
    else if(num2 > num1 && id2 < id){
        data = await fetch("set.php?id=${id2}&v=${num1}", {method :"GET",});
        data = await fetch("set.php?id=${id}&v=${num2}", {method :"GET",});
    }
}
getter.addEventListener("click", async() => {
    const id1 = parseInt(document.getElementById('num').value) - 1;
    const id2 = parseInt(document.getElementById('num2').value) - 1;
    sort(id1, id2);
    //fetchAllUsers();
})

