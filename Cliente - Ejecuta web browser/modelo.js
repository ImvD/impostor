


function Juego(){
    this.partidas ={}
    this.crearPartida = function(num,owner){ //Es un método, le paso n jugadores y un propietario
        let codigo = this.obtenerCodigo();
        //Si la lista de partidas no tiene el códiogo de esta
        // la creo como nueva partida 
        if (!this.partidas[codigo]){            
            //El owner es un objeto
            this.partidas[codigo] = new Partida(num,owner.nick)
            owner.partida=this.partidas[codigo]
        }
        return codigo;
    } 

    //Añado un usuario a la partida si esta está creada
    this.unirAPartida=function(codigo,nik){
        if(this.partidas[codigo]){
            this.partidas[codigo].agregarUsuario(nick)
        }
    }
    //Obtiene un código de 6 letras
    this.obtenerCodigo = function(){
        let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let letras = cadena.split('') //split separa todos los caracteres
        let maxCadena = cadena.length
        let codigo =[]
        
        for (let i = 0; i < 6 ;i++ ) {
            codigo.push(letras[randomInt(1,maxCadena)-1])
        }
        return codigo.join('');
    }
}

function Partida(num,owner){
        //Máximo numero de integrantes que tendrá la partida
        this.maximo = num;
        //Administrador
        this.nickOwner = owner
        //Determina la fase del juego
        this.fase = new Inicial()
        //Lista de usuarios
        this.usuarios={} //El index 0 será el owner
        
        //Agregas al usuario a esta partida (this)
        this.agregarUsuario = function(nick){
            this.fase.agregarUsuario(nick,this)
        }

        //Comprueba si puedes agregar al usuario
        this.puedeAgregarusuario=function(nick){
            let nickagregar = nick
            let contador = 1

            //Mientras exista el usuario que quiero agregar,
            //Concateno su nombre con el número, así puedo tener
            //Luis, Luis1, Luis2....
            while(this.usuarios[nickagregar]){
                nickagregar = nick+contador
                contador = contador +1
            }
            //El nick que agrego lo hago nuevo usuario
            this.usuarios[nickagregar] = new Usuario(nickagregar)

            //Si llegamos al máximo de usuarios en la partida, 
            //Cambiamos la fase a jugando
            if(Object.keys(this.usuarios).length>=this.maximo){
                this.fase = new Completado()
            }
        }
        this.comprobarMinimo=function(){
            return Object.keys(this.usuarios).length>=4
        }

        this.iniciarPartida = function(){
            this.fase.iniciarPartida(this);
        }
        this.abandonarPartida=function(){
            this.fase.abandonarPartida(nick,this);
        }
        this.eliminarUsuario=function(nick){
            delete this.usuarios[nick];
        }
        this.agregarUsuario(owner);
}
function Inicial(){
    //Llamas al método dentro de la función
    //Comprueba que puede agregar al usuario
    this.nombre="inicial";
        this.agregarUsuario=function(nick,partida){
            partida.puedeAgregarusuario(nick);
        }
    //No puede iniciarla porque no hay jugadores aún
        this.iniciarPartida=function(partida){
            console.log("Faltan jugadores");
        }
        this.abandonarPartida=function(nick,partida){
            partida.eliminarUsuario(nick);
            //Comprobar si no quedan usuarios
        }
}
function Completado(){
    this.nombre="completado"
    this.iniciarPartida=function(partida){
        partida.fase = new Jugando();
    }
    this.agregarUsuario=function(nick,partida){
        console.log("La partida ya ha comenzado");
    }
    this.abandonarPartida=function(nick,partida){
        partida.eliminarUsuario(nick);
        //Eliminar al usuario
        //Comprobar el nº de usuarios
       //partida.fase = new Inicial();
    }

}
function Jugando(){
    this.agregarUsuario=function(nick,partida){
        console.log("La partida ya ha comenzado");
    }
    this.iniciarPartida=function(partida){
    }      
    this.abandonarPartida=function(nick,partida){
        //Comprobar si ha terminado la partida
        partida.eliminarUsuario(nick);
    }  
}
function Final() {
    this.agregarUsuario=function(nick,partida){
        console.log("La partida ya ha comenzado");
    }
    this.iniciarPartida=function(partida){
    }  
}
function Usuario(nick){
        this.nick = nick;
        this.juego = juego;
        this.partida
        this.crearPartida=function(num){
            return this.juego.crearPartida(num,this)
        }
        this.iniciarPartida = function(){
            this.partida.iniciarPartida()
        }
        this.abandonarPartida = function(){
            this.partida.abandonarPartida(nick)
        }
}

function randomInt(low,high){
        return Math.floor(Math.random()*(high - low) + low)
}
