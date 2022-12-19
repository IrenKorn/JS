
function filterKey(k) {
    console.log(k)
    let reg = /[0-9]/;
    if (reg.test(k.key)){
        k.preventDefault();
        return false;
    }            
}