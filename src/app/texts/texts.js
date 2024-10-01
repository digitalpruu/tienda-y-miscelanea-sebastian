const title = "Tienda y Miscelánea Sebastián";
const slogan = "Útiles escolares y dulces";
const email = "tiendaymiscelaneasebastian@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3143140300";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Tienda y Miscelánea Sebastián, nos dedicamos a ofrecer una amplia gama de útiles escolares y dulces para todos los gustos. Nuestro objetivo es proporcionar todo lo necesario para hacer de cada día escolar una experiencia perfecta y placentera. Desde útiles escolares de alta calidad hasta una selección deliciosa de dulces, en nuestra tienda encontrarás todo lo que necesitas para alegrar tu día. Nos esforzamos por ofrecer productos que combinen funcionalidad y sabor, para que cada visita sea una experiencia satisfactoria. En Tienda y Miscelánea Sebastián, estamos comprometidos con la satisfacción de nuestros clientes, ofreciendo un servicio amigable y productos de excelente calidad. Queremos ser tu primera opción para todos tus artículos escolares y dulces. Visítanos y descubre cómo Tienda y Miscelánea Sebastián puede ayudarte a encontrar todo lo que necesitas para un día perfecto, lleno de diversión y aprendizaje."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: `${title}`,
            p2: slogan,
        },
        address: "Dirección del negocio",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565430670080&locale=es_LA",
        instagram: "No disponible",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
