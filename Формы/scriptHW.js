function checkForm(){
    let n1 = document.getElementById("name").value;
    let t1 = /^[А-Я][а-я]*(-[А-Я][а-я]*)*$/
    if(!t1.test(n1)){
        alert("Имя введено не корректно");
        return false;
    }
    let n2 = document.getElementById("Sname").value;
    if(!t1.test(n2)){
        alert("Фамилия введена не корретно");
        return false;
    }
    
    let old = document.getElementById("Date").value;
    let te = /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/;
    if(! te.test(old) ){
        alert("Дата рождения введена не корректно");
        return false;
    }

    let work = document.getElementById("Work").value;
    let to =/^[а-я]+$/i;
    if(! to.test(work)){
        alert("Должность введена не корретно");
        return false;
    }

    let text = document.getElementById("text").value;
    if(text===''){
        alert("Заполните поле \"Навыки\"");
        return false;
    }

}