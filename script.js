const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        const small =  form['fistname'].parentNode.querySelector('small');
        small.innerText = 'First Name is required';
        small.style.opacity = '1';
    }

    alert(first + last + email + password);



});