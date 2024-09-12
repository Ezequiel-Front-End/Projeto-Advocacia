function scrollToSection(event, sectionId) {
    event.preventDefault(); // Evita o comportamento padrão do link

    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',  // Faz a rolagem ser suave
        block: 'start'       // Alinha o início da seção ao topo da janela
    });
}

const nav = document.getElementById("nav-header");

const myForm = document.getElementById("myForm");

const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const alertSuccess = () => {
    Swal.fire({
        title: "Sucesso!",
        text: "Seu e-mail foi enviado com sucesso! Em breve entraremos em contato para mais informações.",
        icon: "success"
    });
}

const alertError = () => {
    Swal.fire({
        title: "Ops...",
        text: "",
        icon: ""
    });
}

const validateNome = () => { }

const validateTelefone = () => { }

const validateEmail = (email) => {

    if (RegExp(REGEX_EMAIL).test(email)) {
        return true;
    }

    return false;
}

const validateMotivo = () => { }

const validateMensagem = () => { }


myForm.addEventListener("submit", ($event) => {
    $event.preventDefault();

    alertSuccess();

    const nome = myForm.nome.value;
    const telefone = myForm.telefone.value;
    const email = myForm.email.value;
    const motivo = myForm.motivo.value;
    const mensagem = myForm.mensagem.value;

    if (validateEmail(email)) {
        return console.log(email, "email correto!");

    } else {
        return console.log(email, "email incorreto!");
    }

});

window.addEventListener("scroll", () => { nav.classList.toggle("sticky", window.scrollY > 10); });

