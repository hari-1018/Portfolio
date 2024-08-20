// document.getElementById('toggle').addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
//     document.body.classList.toggle('light-theme');
// });
function showIntro() {
    document.getElementById('intro').style.display = 'block';

}

function sendMail(){
    var parameters={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    const serviceID = "service_8i1j768";
const templateID = "template_lj7ygw6";

emailjs.send(serviceID,templateID,parameters)
.then(
    res =>{
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('phone').value="";
            document.getElementById('message').value="";
            console.log(res);
            alert("Your message send successfully")
    })
    .catch((err)=>console.log(err));

}
