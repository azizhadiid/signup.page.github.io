const signupBtn = document.getElementById("signUpBtn")
const signinBtn = document.getElementById("signInBtn")
const nameField = document.getElementById("nameField")
const title = document.getElementById("title")

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Sign In';
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = 'Sign Up';
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

function showSidebar() {
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'none';
}

// Mengambil elemen dengan class 'icon-close' dan menambahkan event listener
document.querySelector('.icon-close button').addEventListener('click', function() {
    // Mengubah style opacity dari container menjadi 0 untuk menyembunyikan sign up box
    var container = document.querySelector('.container');
    container.style.opacity = '0';
    setTimeout(function() {
        container.style.display = 'none';
    }, 500); // Waktu tunggu sesuai dengan durasi transisi dalam CSS
});

// Mengambil elemen dengan class 'btnlogin-popup' dan menambahkan event listener
document.querySelector('.btnlogin-popup').addEventListener('click', function() {
    // Mengubah style display dan opacity dari container menjadi 'block' dan 1 untuk menampilkan sign up box
    var container = document.querySelector('.container');
    container.style.display = 'block';
    setTimeout(function() {
        container.style.opacity = '1';
    }, 0);
});

document.querySelector('.Button-mobile').addEventListener('click', function() {
    var container = document.querySelector('.container');
    container.style.display = 'block';
    setTimeout(function() {
        container.style.opacity = '1';
    }, 0);
})

