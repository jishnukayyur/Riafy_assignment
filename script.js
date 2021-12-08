function validate(){
    let string = document.getElementById("input").value;
    let isValid = false;
    if(string.length >= 8){
        let specialFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let numberFormat = /[1234567890]/;
        let letterFormat = /[1234567890]/;
        if(specialFormat.test(string) && numberFormat.test(string) && letterFormat.test(string)){
            isValid = true;
            let shouldNotInclude = ["123","qwerty","abc"];
            shouldNotInclude.forEach( (subString) => {
                if(string.indexOf(subString) !== -1){
                    isValid = false;
                }
            });
        }
    }
    if(isValid){
        document.getElementById("msg").innerHTML = "true";
    }else{
        document.getElementById("msg").innerHTML = "false";
    }
}

function metrixSum(metrix){
    let sum = 0;
    let dupeNumbers = [];
    let dupeItems, isDupe;
    metrix.forEach( (row, index) => {
        sum += row[index];
        dupeItems = row.filter((item, index) => row.indexOf(item) !== index);
        isDupe = (dupeItems.length)? "*": 0;
        dupeNumbers.push(isDupe);
    });
    console.lg(sum + "," + dupeNumbers.split(","));
}