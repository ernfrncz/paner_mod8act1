let html = prompt('Please enter your full name:');
document.getElementById('fname').innerHTML = html;

let html2 = prompt('Please enter your username:');
document.getElementById('username').innerHTML = html2;

if (confirm('What is your gender?\nPress OK if you are Male\nCancel if Female')){
    document.getElementById('gender').innerHTML = 'M';
    alert('Your profile gender is set to MALE')
}
else {
    document.getElementById('gender').innerHTML = 'F';
    alert('Your profile gender is set to FEMALE')
}

let html3 = prompt('Please type a brief description of yourself');
document.getElementById('desc').innerHTML = html3;

let html4 = prompt('Please enter your Birth Year:');
let num = parseInt(html4)
document.getElementById('year').innerHTML = num;
let cdate = new Date();
let cyear = cdate.getFullYear();
document.getElementById('age').innerHTML = cyear - num;

if (confirm('Do you want to use a custom profile picture?')){
    let html5 = prompt('Please enter the file name of the picture. (Ex: wow.jpg )');
    document.getElementById('ppic').src = html5;
    alert('Profile picture has been updated.');
}
else {
    alert('No image has been set.');
}