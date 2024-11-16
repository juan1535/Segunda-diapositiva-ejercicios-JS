function funcionRechazada() {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            
            if (!reject) {
                console.log("La promesa a sido cumplida");
                
            } else {

                Promise.reject(`Error. Promise reject.\n ¡Mal mal mal!`);
            }
        }, 2000);
    });
}

funcionRechazada().then((retorno) => {
    console.log(retorno);
});