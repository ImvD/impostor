function Juego(){
    this.partidas ={}; //Que colección?
    this.crearPartida = function(num,owner){ //Es un método, le paso n jugadores y un propietario
        let codigo = this.obtenerCodigo();
        //Para evitar que se use el mismo código
        if (!this.partidas[codigo]){
            //Si la partida no está creada, la creo
            this.partidas[codigo] = new Partida(num,owner);
        }
        //Comprobar que no está en uso
        //Crear el objeto partida con el nº y el owner
        // this.partidas[codigo]= nueva partida
    } 
    //Obtiene un código de 6 letras


    this.unirAPartida=function(nik){
        //Por hacer
    }
    this.obtenerCodigo = function(){
        let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letras = cadena.split(''); //split separa todos los caracteres
        let codigo =[];
        
        for (let i = 0; i < 6 ;i++ ) {
            codigo.push[randomInt(1,25)-1]
        }
        return codigo.join('');
    }
    function Partida(num,owner){
        this.numUsuarios = num;
        this.owner = owner;
        this.usuarios=[]; //El index 0 será el owner
        
        //this.usuarios={} // Version array asociativo, cada usuario tiene su nick

        this.agregarusuario=function(){

            //Por hacer
        }

        this.agregarusuario(owner);
    }
    function randomInt(low,high){
        return Math.floor(math.random()*(high - low) + low)
    }
}