export const weddingData = {
  couple: {
    bride: "Lucía",
    groom: "Humberto",
    names: "Lucía y Humberto",
    subtitle: "Nuestra Boda",
    quote: '"El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."',
    closingMessage: '"Esperamos contar con tu presencia en este día tan especial para nosotros."'
  },
  hero: {
    // Archivo de video local ubicado en public/Howl.mp4
    videoUrl: "/Howl.mp4",
    // Imagen de portada elegante que se muestra mientras carga el video o si el navegador bloquea autoplay
    posterUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
  },
  date: {
    iso: "2027-05-22T18:00:00",
    day: "22",
    month: "MAY",
    year: "2027",
    fullDateText: "22 de Mayo de 2027",
    time: "18:00 hrs",
    rsvpDeadline: "1 de Abril de 2027"
  },
  music: {
    url: "/castillo-vagabundo.mp3",
    title: "El Castillo Vagabundo",
    artist: "Tema Principal"
  },
  locations: [
    {
      id: "ceremony",
      title: "Ceremonia Religiosa",
      name: "Parroquia de San Miguel Arcángel",
      time: "18:00 hrs",
      address: "Av. Principal 123, Centro Histórico",
      mapUrl: "https://maps.google.com/?q=Parroquia+de+San+Miguel+Arcangel",
      icon: "church"
    },
    {
      id: "reception",
      title: "Recepción",
      name: "Hacienda Los Arcángeles",
      time: "20:30 hrs",
      address: "Carretera al norte km 15, Zona de Eventos",
      mapUrl: "https://maps.google.com/?q=Hacienda+Los+Arcangeles",
      icon: "glass"
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      caption: "Nuestro primer viaje juntos"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      caption: "El día del compromiso"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      caption: "Aventuras compartidas"
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      caption: "Construyendo un futuro juntos"
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      caption: "Rumbo al gran día"
    }
  ],
  dressCode: {
    title: "Código de Vestimenta",
    category: "Formal / Etiqueta Rigurosa",
    note: "Nos encantaría verte lucir increíble. Sugerimos evitar colores blancos, perla o claros reservados para los novios."
  },
  gifts: {
    title: "Mesa de Regalos",
    note: "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, ponemos a tu disposición las siguientes opciones:",
    bankAccount: {
      beneficiary: "Lucía & Humberto",
      bank: "BBVA México",
      clabe: "012180015678901234",
      account: "1567890123"
    },
    registries: [
      {
        store: "Liverpool",
        eventNumber: "51234567",
        url: "https://mesaderegalos.liverpool.com.mx/"
      },
      {
        store: "Amazon",
        eventNumber: "Boda-Lucia-y-Humberto",
        url: "https://www.amazon.com.mx/baby-reg"
      }
    ]
  },
  rsvp: {
    phoneNumber: "5215512345678",
    defaultMessage: "¡Hola! Quiero confirmar mi asistencia a la boda de Lucía y Humberto.",
    deadline: "1 de Abril de 2027"
  },
  calendar: {
    title: "Boda de Lucía y Humberto",
    description: "Celebración del enlace matrimonial de Lucía y Humberto en Hacienda Los Arcángeles.",
    location: "Hacienda Los Arcángeles, Carretera al norte km 15",
    startDate: "20270522T180000",
    endDate: "20270523T030000"
  }
};
