export interface PokemonListResponse {
    count: number;
    next?: string;
    previous?: string;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url: string;
    id: number;
    img: string;
}

export interface USBListResponse {
    devices: []
}

export interface Devices {
    busNumber: number;
    deviceAddress: number;
    deviceDescriptor: Device;
    portNumbers: []
}

export interface Device {
    idProduct: number
}