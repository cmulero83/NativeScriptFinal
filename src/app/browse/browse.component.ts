import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("MapView", ()=> require("nativescript-google-maps-sdk").MapView );

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})

export class BrowseComponent implements OnInit {
    @ViewChild("MapView", {static: false}) mapView: ElementRef;


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

    onMapReady(event): void {
        console.log("Mapa leido...");
    }
}
