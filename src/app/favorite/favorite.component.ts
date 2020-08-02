import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { device, screen } from "tns-core-modules/platform";
import {
    connectionType,
    getConnectionType,
    startMonitoring,
    stopMonitoring
    } from "tns-core-modules/connectivity";

@Component({
    selector: "Favorite",
    templateUrl: "./Favorite.component.html"
})
export class FavoriteComponent implements OnInit {

    monitoreando: boolean = false; // una variable para saber si estás monitoreando o no.

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onDatosPlataforma(): void {


        console.log("DATOS DEL SISTEMA ##########################################")
        console.log("modelo", device.model);
        console.log("tipo de dispositivo", device.deviceType);
        console.log("sistema operativo", device.os);
        console.log("version del so", device.osVersion);
        console.log("version sdk", device.sdkVersion);
        console.log("lenguaje", device.language);
        console.log("fabricante", device.manufacturer);
        console.log("codigo unico de dispositivo", device.uuid);

        console.log("DATOS DE LA PANTALLA ##########################################")
        console.log("altura en pixeles normalizados", screen.mainScreen.heightDIPs);
        console.log("altura pixels", screen.mainScreen.scale);
        console.log("escala pantalla", screen.mainScreen.scale);
        console.log("ancho  pixels normalizados", screen.mainScreen.widthDIPs);
        console.log("anchopixels", screen.mainScreen.widthDIPs);

        this.onMonitoreoDatos()



    }

    
    onMonitoreoDatos(): void {

    console.log("DATOS DE LA RED ##############################");
    const myConnectionType = getConnectionType();
    switch (myConnectionType) {
    case connectionType.none:
    console.log("Sin Conexion");
    break;
    case connectionType.wifi:
    console.log("WiFi");
    break;
    case connectionType.mobile:
    console.log("Mobile"); 
    break;
    case connectionType.ethernet:
    console.log("Ethernet"); // es decir, cableada
    break;
    case connectionType.bluetooth:
    console.log("Bluetooth");
    break;
    default:
    break;
    }
    this.monitoreando = !this.monitoreando;
    if (this.monitoreando) {
    startMonitoring((newConnectionType) => {
    switch (newConnectionType) {
    case connectionType.none:
    console.log("Cambió a sin conexión.");
    break;
    case connectionType.wifi:
    console.log("Cambió a WiFi.");
    break;
    case connectionType.mobile:
    console.log("Cambió a mobile.");
    break;
    case connectionType.ethernet:
    console.log("Cambió a ethernet.");
    break;
    case connectionType.bluetooth:
    console.log("Cambió a bluetooth.");
    break;
    default:
    break;
    }
    });
    } else {
    stopMonitoring();
    }
    }






}
