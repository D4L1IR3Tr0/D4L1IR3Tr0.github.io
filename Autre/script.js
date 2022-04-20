

    function Recuperation(){
        let Nom, Prenom, dateNaissance, passe, Mail;
        //const NumU = document.getElementById('FieldNumU').value;

        Nom = document.getElementById('FieldNom').value;
        Prenom = document.getElementById('FieldPNom').value;
        dateNaissance = document.getElementById('FieldDateN').value;
        passe = document.getElementById('FieldMDP').value;
        Mail = document.getElementById('FieldMail').value;

        localStorage.setItem('Nom',Nom);
        localStorage.setItem('Prenom',Prenom);
        localStorage.setItem('dateNaissance',dateNaissance);
        localStorage.setItem('passe',passe);
        localStorage.setItem("Mail",Mail);



}

    function Connection(){
        const mailCo = document.getElementById('FieldMailCo').value;
        const passeCo = document.getElementById('FieldMDPCo').value;

        if(mailCo === localStorage.getItem('Mail') && passeCo === localStorage.getItem('passe')){
            window.location="main.html";
        }
    }
