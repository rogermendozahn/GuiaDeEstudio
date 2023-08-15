import { ICancion } from "./ICancion"
export interface IPlaylist{
    id: number
    titulo: string
    multimedia: ICancion[]
    agregarCancion(cancion: ICancion): void
    removerCancion(idCancion: number): void
    reproducir(idCancion: number): boolean
    detener(): void 
}