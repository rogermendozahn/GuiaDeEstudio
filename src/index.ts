import { ICancion } from "./modelos/ICancion"
import { IPlaylist } from "./modelos/IPlaylist"

class Plalist implements IPlaylist{
    id: number
    titulo: string
    multimedia: ICancion[] = []

    constructor(id: number, titulo: string){
        this.id = id
        this.titulo = titulo
    }

    agregarCancion(cancion: ICancion): void {
        this.multimedia.push(cancion)
        console.log(`Se agrego la Cancion ${cancion.titulo}`);
        
    }
    removerCancion(idCancion: number): void {
        this.multimedia = this.multimedia.filter(elemento => elemento.id !== idCancion)
        console.log("En el Arreglo quedaron ",this.multimedia.length, "Elementos");
    }
    reproducir(idCancion: number): boolean {
        let cancionReproducir = this.multimedia.find(cancion => cancion.id === idCancion)
        if (cancionReproducir !== undefined){
            cancionReproducir.reproduciendo = true
            return cancionReproducir.reproduciendo
        }else{
            //Manejar error
            return false
        }
        
    }
    detener(): void {
        let canciones = this.multimedia.map(cancion => cancion.reproduciendo = false)
        console.log(canciones);
    }
    
}

//Salidas

let cancion1 : ICancion = {
    id: 5,
    titulo: "dONDE ESTABAS TU",
    duracion: 5,
    reproduciendo: false
    }

    let cancion2 : ICancion = {
        id: 6,
        titulo: "OPEN ARMS",
        duracion: 5,
        reproduciendo: true
        }
let playList = new Plalist(1, "Nuevo Playlist")
playList.agregarCancion(cancion1)
playList.agregarCancion(cancion2)
playList.removerCancion(16)
playList.detener()

