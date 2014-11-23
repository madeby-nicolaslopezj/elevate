orion.dictionary.addDefinition('ticketsTitle', 'tickets', {
    type: String,
    label: "Titulo",
    optional: true
});

orion.dictionary.addDefinition('ticketsSubtitle', 'tickets', {
    type: String,
    label: "Sub Titulo",
    optional: true
});

orion.dictionary.addDefinition('ticketsImage', 'tickets', {
    type: orion.attributes.image,
    label: "Imagen",
    optional: true
});

orion.dictionary.addDefinition('ticketsUrl', 'tickets', {
    type: String,
    label: "Url para comprar tickets",
    optional: true
});

orion.dictionary.addDefinition('ticketsQuoteImage', 'tickets', {
    type: orion.attributes.image,
    label: "Imagen de fondo",
    optional: true
});

orion.dictionary.addDefinition('ticketsQuote', 'tickets', {
    type: String,
    label: "Text sobre la foto",
    optional: true,
    autoform: {
        type: 'textarea'
    }
});

orion.dictionary.addDefinition('ticketsQuoteButtonLink', 'tickets', {
    type: String,
    label: "Link del boton",
    optional: true,
});

orion.dictionary.addDefinition('ticketsQuoteButtonText', 'tickets', {
    type: String,
    label: "Texto del boton",
    optional: true,
});