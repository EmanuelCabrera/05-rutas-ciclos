

const isAuthenticateGuard = async( to, from, next ) => {

    return new Promise( () =>{

        const random = Math.random() * 100

        if (random > 50) {
            console.log('Is authenticated');
            next()
        }else{
            console.log('Bloqueado por el isAuthenticatedGuard', random);
            next( { name: from.name } )
        }
    })
    console.log( { to, from, next } );
}

export default isAuthenticateGuard