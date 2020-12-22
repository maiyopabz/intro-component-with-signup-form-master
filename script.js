const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addErrorTo('firstname', 'First name should be required');
       
    } else {
        removeErrorFrom('firstname');
    }

    if (lastName === '') {
        addErrorTo('lastname', 'Last Name should be required');
       
    } else {
        removeErrorFrom('lastname');
    }

    if (email === '') {
        addErrorTo('email', 'Email is not valid');
       
    } else {
        removeErrorFrom('email');
    }
    if (password === '') {
        addErrorTo('password', 'Password should be required');
       
    }else {
        removeErrorFrom('password');
    }

});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';

}

function removeErrorFrom(field) {
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity='0';
}


function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}