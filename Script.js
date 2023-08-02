const form = document.getElementById('form');
const outputDiv = document.getElementById('data');

function display() {
    var T = document.getElementById("data");
    T.style.display = "block";
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    

    const genderValue = gender.value;

    outputDiv.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Gender:</strong> ${genderValue}</p>
    `;
});
