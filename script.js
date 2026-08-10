const student = {
    username: "25261A0579",
    dob: "2008-07-15"
};

function login() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message");

    if (role !== "student") {
        message.textContent = "No teacher data found.";
        return;
    }

    if (username !== student.username) {
        message.textContent = "No student data found.";
        return;
    }

    if (dob !== student.dob) {
        message.textContent = "Wrong input password.";
        return;
    }

    message.textContent =
        "Login successful — Student " + student.username;
}