function showAlert(){
    alert('Hello! This is a JavaScript alert.');
}
function changeText(){
    document.getElementById('text').innerHTML='Button clicked!';
}
function handleClick(){
    document.getElementById('clickMessage').innerHTML='Button clicked!';
}
function validateForm(){
    let name= document.getElementById('name').value;
    if(name==''){
        alert('Please enter your name.');
        return false;
    }
    return true;
}
function checkNumber(){
    let age=parseInt(document.getElementById('ageInput').value);
    let result=num>10?'greater than 10': '10 or less';
    document.getElementById('numberResult').innerHTML=result;
}
function checkAge(){
    let age=parseInt(document.getElementById('ageInput').value);
    if(age>=18){
        document.getElementById('ageResult').innerHTML='you are an adult';
    }else{
        document.getElementById('ageResult').innerHTML='you are a minor'
    }
}
function displayArrayItem(){
    let items=['Apple','Banana','Cherry','Date'];
    let index=parseInt(document.getElementById('arrayIndex').value);
    let result=items[index] ||'invalid index';
    document.getElementById('arrayResult').innerHTML=result;
}