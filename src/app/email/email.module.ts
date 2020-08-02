import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EmailRoutingModule } from "./email-routing.module";
import { EmailComponent } from "./email.component";
import { compose } from "nativescript-email";

const fs = require("file-system"); // usas el filesystem para adjuntar un archivo
const appFolder = fs.knownFolders.currentApp(); // esto te da un objeto de tipo Folder
const appPath = appFolder.path; 
const logoPath = appPath + "/app/res/icon.png"; // aquí armas el path del archivo copiad

compose({
    subject: "Mail de Prueba",
    body: "Hola <strong>mundo!</strong> :)",
    cc: [],
    attachments: [ 
    { fileName:"arrow1.png",
    path: "base64://iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAABYlAAAWJ QFJUiTwAAAAHGlET1QAAAACAAAAAAAAABQAAAAoAAAAFAAAABQAAAB5EsHiAAAAAEVJREFUSA1i YKAimDhxYjwIU9FIBgaQgZMmTfoPwlOmTJGniuHIhlLNxaOGwiNqNEypkwlGk9RokoIUfaM5ijo5Clh9A AAAAP//ksWFvgAAAEFJREFUY5g4cWL8pEmT/oMwiM1ATTBqONbQHA2W0WDBGgJYBUdTy2iwYA0B rILDI7VMmTJFHqv3yBUEBQsIg/QDAJNpcv6v+k1ZAAAAAElFTkSuQmCC",
    mimeType: "image/png"
    }]
    }).then(() => console.log("Enviador de mail cerrado"), (err) => console.log("Error: " + err));


@NgModule({
    imports: [
        NativeScriptCommonModule,
        EmailRoutingModule
    ],
    declarations: [
        EmailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EmailModule { }
