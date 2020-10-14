describe("El juego del impostor", function() {
    var juego;
    
  
    beforeEach(function() {
        //En las pruebas se hace lo que hacemos a mano cuando inicamos un juego
        juego = new Juego();
        usuario = new Usuario("Pepe",juego);
    });
    it("inicialmente...", function() {
        expect(Object.keys(juego.partidas).length).toEqual(0);
        expect(usuario.nick).toEqual("Pepe");
        expect(usuario.juego).not.toBe(undefined);
      });
      it("El usuario Pepe crea una partída de 4 jugadores", function(){
        var codigo = usuario.crearPartida(4);
        expect(codigo).not.toBe(undefined);
        expect(juego.partidas[codigo].nickOwner).toEqual(usr.nick);
      })
      it("Se comprueba la partida",function(){

      })
})