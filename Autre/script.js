

    function Recuperation(){
        let Nom, Prenom, dateNaissance, passe, Mail;

        Nom = document.getElementById('FieldNom').value;
        Prenom = document.getElementById('FieldPNom').value;
        dateNaissance = document.getElementById('FieldDateN').value;
        passe = document.getElementById('FieldMDP').value;
        Mail = document.getElementById('FieldMail').value;

        const letters = /^[A-Za-z]+$/;
        const email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

        if(Nom===''||Mail===''||passe===''||dateNaissance===''){
            alert("Les champs vides ne sonts pas autorisés");
        }
        else if(!letters.test(Nom) || !letters.test(Prenom))
        {
            alert('Le nom ne peux contenir que des lettres');
        }
        else if (!email_val.test(Mail))
        {
            alert('Mail invalide');
        }
        else if (!dateFormat.test(dateNaissance)){
            alert('La date de naissance doit correspondre au format indiqué')
        }
        else {
            localStorage.setItem('Nom', Nom);
            localStorage.setItem('Prenom', Prenom);
            localStorage.setItem('dateNaissance', dateNaissance);
            localStorage.setItem('passe', passe);
            localStorage.setItem("Mail", Mail);
            alert('Compte crée')
        }


}

    function Connection(){
        const mailCo = document.getElementById('FieldMailCo').value;
        const passeCo = document.getElementById('FieldMDPCo').value;

        if(mailCo === localStorage.getItem('Mail') && passeCo === localStorage.getItem('passe')){
            window.location="main.html";
        }
    }
