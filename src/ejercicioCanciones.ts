import { ICancion } from "./modelos/ICancion";
import { IPlaylist } from "./modelos/IPlaylist";

export function ejercicioCancionesPlayListold(){

    let cancion : ICancion = {
        id: 1,
        titulo: "Stairway to Heaven",
        duracion: 8,
        reproduciendo: true
        }
        
        let cancion2 : ICancion = {
        id: 2,
        titulo: "November Rain",
        duracion: 5,
        reproduciendo: false
        }
        
        let playlist : IPlaylist = {
        id: 1,
        titulo: "Canciones para estudiar",
        multimedia: [],
        agregarCancion: function(cancion: ICancion): void {
            this.multimedia.push(cancion)
            console.log(`Se agregó una nueva cancion ${cancion}`);
            
            
        },
        removerCancion: function(idCancion: number): void {
            this.multimedia = this.multimedia.filter(elemento => elemento.id !== idCancion)
            
        },
        reproducir: function(idCancion: number): boolean {
            let cancionReproducir = this.multimedia.find(cancion => cancion.id === idCancion)
            if (cancionReproducir !== undefined){
                cancionReproducir.reproduciendo = true
                return cancionReproducir.reproduciendo
            }else{
                //Manejar error
                return false
            }
        },
        detener: function(): void {
        
            let canciones = this.multimedia.map(cancion => cancion.reproduciendo = false)
            console.log(canciones)
        }
        }
        
        
        playlist.agregarCancion(cancion)
        playlist.agregarCancion(cancion2)
        
        playlist.detener()
        
}

