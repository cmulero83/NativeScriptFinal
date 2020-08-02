var noticias_state_model = require("~/app/domain/noticias-state.model");

describe("reducerNoticas", function() {
    it("Debe reducer iniciar datos", function() {
        // Setup
        var prevState = noticias_state_model.initializeNoticiasState();
        var action = new noticias_state_model.initMyDataAction(["noticia 1", "noticia2"]);

        // Acciones
        var newState = noticias_state_model.reducerNoticias(prevState, action);

        // Assertions
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].titulo).toEqual("noticia 1");
    });

    it("Debe el reducer tener un  nuevo item añadido", () => {
        var prevState = noticias_state_model.initializeNoticiasState();
        var action = new noticias_state_model.NuevaNoticiaAction(new noticias_state_model.Noticia("noticia 3"));
        var newState = noticias_state_model.reducerNoticias(prevState, action);

        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("noticia 3");

    });

    it("Debe el reducer nuevo item version 2", function() {
        var prevState = noticias_state_model.initializeNoticiasState();
        var action = new noticias_state_model.NuevaNoticiaAction(new noticias_state_model.Noticia("noticia 3"));

        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("noticia 3");

    });

})