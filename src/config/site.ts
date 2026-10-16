// ============================================================
// Yassine Vitrage Auto — ALL editable content lives here.
// Edit texts (FR / AR), phone, hours, images and reviews below.
// ============================================================
import storefront from "@/assets/storefront.jpg";
import workshop from "@/assets/workshop.jpg";
import trophy from "@/assets/trophy.jpg";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import videoPoster from "@/assets/video-poster.jpg";
import workshopVideo from "@/assets/workshop.mp4.asset.json";

export type Lang = "fr" | "ar";

export const business = {
  name: "Yassine Vitrage Auto",
  phone: "+21626502507",
  phoneDisplay: "26 502 507",
  whatsapp: "21626502507",
  city: "Gafsa",
  streetAddress: "Route de Gafsa",
  postalCode: "2100",
  country: "TN",
  lat: 34.410707,
  lng: 8.8042057,
  mapsUrl: "https://maps.app.goo.gl/6X6dXh3A1uSKAm639",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=34.410707,8.8042057&destination_place_id=ChIJ7_z4H8aX-BIRxbiZt7S7h_E",
  mapEmbed: "https://maps.google.com/maps?q=34.410707,8.8042057&z=16&output=embed",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

export const images = { storefront, workshop, trophy, before, after, videoPoster };

export const videos = [
  { src: workshopVideo.url, poster: videoPoster, fr: "Notre atelier en action", ar: "ورشتنا أثناء العمل" },
];

type T = { fr: string; ar: string };

export const content = {
  nav: {
    services: { fr: "Services", ar: "الخدمات" },
    process: { fr: "Méthode", ar: "طريقة العمل" },
    quote: { fr: "Devis", ar: "طلب تسعيرة" },
    work: { fr: "Réalisations", ar: "أعمالنا" },
    faq: { fr: "FAQ", ar: "الأسئلة" },
    contact: { fr: "Contact", ar: "اتصل بنا" },
  },
  emergency: {
    fr: "Vitre cassée ? Intervention rapide.",
    ar: "بلّور مكسور؟ تدخّل سريع.",
  },
  hero: {
    eyebrow: { fr: "Spécialiste du vitrage automobile · Gafsa", ar: "مختص في بلّور السيارات · قفصة" },
    title: { fr: "Votre vitrage, remplacé avec précision.", ar: "بلّور سيارتك، يُستبدل بدقّة." },
    subtitle: {
      fr: "Un service rapide et haut de gamme, dans notre atelier ou directement chez vous.",
      ar: "خدمة سريعة وراقية، في ورشتنا أو مباشرة في مكانك.",
    },
    call: { fr: "Appeler maintenant", ar: "اتصل الآن" },
    whatsapp: { fr: "WhatsApp", ar: "واتساب" },
    imageAlt: {
      fr: "Façade de l'atelier Yassine Vitrage Auto à la tombée de la nuit",
      ar: "واجهة ورشة ياسين لبلّور السيارات عند الغروب",
    },
  },
  services: {
    eyebrow: { fr: "Nos services", ar: "خدماتنا" },
    title: { fr: "L'excellence pour chaque vitre.", ar: "التميّز في كل بلّورة." },
    items: [
      { icon: "windshield", title: { fr: "Remplacement de pare-brise", ar: "تغيير البلّور الأمامي" }, text: { fr: "Pare-brise de qualité d'origine, pose précise et calibrage soigné.", ar: "بلّور بجودة أصلية، تركيب دقيق ومعايرة متقنة." } },
      { icon: "side", title: { fr: "Vitres latérales & arrière", ar: "البلّور الجانبي والخلفي" }, text: { fr: "Remplacement rapide de toutes les vitres, y compris lunette chauffante.", ar: "تغيير سريع لكل البلّور، بما في ذلك الخلفي المسخّن." } },
      { icon: "chip", title: { fr: "Réparation d'impact", ar: "إصلاح الكسور الصغيرة" }, text: { fr: "Un impact réparé à temps évite le remplacement complet.", ar: "إصلاح الضربة في وقتها يجنّبك تغيير البلّور كاملاً." } },
      { icon: "sunroof", title: { fr: "Toit ouvrant", ar: "السقف الزجاجي" }, text: { fr: "Remplacement et étanchéité de toits ouvrants et panoramiques.", ar: "تغيير وعزل الأسقف الزجاجية والبانورامية." } },
      { icon: "tint", title: { fr: "Teinte de vitres", ar: "تظليل البلّور" }, text: { fr: "Films premium pour confort, intimité et protection UV.", ar: "أفلام راقية للراحة والخصوصية والحماية من الأشعة." } },
      { icon: "insurance", title: { fr: "Aide assurance", ar: "مساعدة في التأمين" }, text: { fr: "Nous vous accompagnons dans toutes les démarches avec votre assureur.", ar: "نرافقك في كل الإجراءات مع شركة التأمين." } },
    ],
  },
  process: {
    eyebrow: { fr: "Comment ça marche", ar: "كيف نعمل" },
    title: { fr: "Trois étapes, zéro souci.", ar: "ثلاث خطوات، بلا متاعب." },
    steps: [
      { title: { fr: "Envoyez une photo", ar: "أرسل صورة" }, text: { fr: "Photo du vitrage et détails du véhicule par formulaire ou WhatsApp.", ar: "صورة البلّور وتفاصيل السيارة عبر الاستمارة أو واتساب." } },
      { title: { fr: "Recevez votre devis", ar: "استلم التسعيرة" }, text: { fr: "Un devis clair et rapide, sans engagement.", ar: "تسعيرة واضحة وسريعة، دون التزام." } },
      { title: { fr: "Pose rapide", ar: "تركيب سريع" }, text: { fr: "Installation soignée à l'atelier ou à domicile.", ar: "تركيب متقن في الورشة أو في مكانك." } },
    ],
  },
  quote: {
    eyebrow: { fr: "Devis gratuit", ar: "تسعيرة مجانية" },
    title: { fr: "Demandez votre devis.", ar: "اطلب تسعيرتك." },
    subtitle: { fr: "Réponse rapide, sans engagement.", ar: "ردّ سريع، دون أي التزام." },
    fields: {
      name: { fr: "Nom complet", ar: "الاسم الكامل" },
      phone: { fr: "Téléphone", ar: "الهاتف" },
      brand: { fr: "Marque", ar: "الماركة" },
      model: { fr: "Modèle", ar: "الطراز" },
      year: { fr: "Année", ar: "السنة" },
      glass: { fr: "Type de vitrage", ar: "نوع البلّور" },
      photo: { fr: "Photo (optionnelle)", ar: "صورة (اختيارية)" },
      message: { fr: "Message", ar: "رسالة" },
    },
    glassTypes: [
      { fr: "Pare-brise", ar: "بلّور أمامي" },
      { fr: "Vitre latérale", ar: "بلّور جانبي" },
      { fr: "Lunette arrière", ar: "بلّور خلفي" },
      { fr: "Réparation d'impact", ar: "إصلاح ضربة" },
      { fr: "Toit ouvrant", ar: "سقف زجاجي" },
      { fr: "Teinte", ar: "تظليل" },
    ],
    submit: { fr: "Envoyer la demande", ar: "إرسال الطلب" },
    sending: { fr: "Envoi…", ar: "جارٍ الإرسال…" },
    success: { fr: "Merci ! Votre demande a bien été reçue. Nous vous rappelons très vite.", ar: "شكراً! وصلنا طلبك وسنتصل بك قريباً جداً." },
    error: { fr: "Une erreur est survenue. Réessayez ou appelez-nous.", ar: "حدث خطأ. حاول مجدداً أو اتصل بنا." },
    photoTooBig: { fr: "Photo trop lourde (max 5 Mo).", ar: "الصورة كبيرة جداً (5 ميغا كحد أقصى)." },
  },
  mobile: {
    eyebrow: { fr: "Service mobile", ar: "خدمة متنقّلة" },
    title: { fr: "Nous venons chez vous / au bureau.", ar: "نأتي إليك، في البيت أو العمل." },
    text: { fr: "Notre équipe se déplace avec tout l'équipement nécessaire pour une pose impeccable, où que vous soyez.", ar: "فريقنا يتنقّل بكل المعدات اللازمة لتركيب مثالي، أينما كنت." },
    areasTitle: { fr: "Zones couvertes", ar: "المناطق المشمولة" },
    areas: [
      { fr: "Gafsa", ar: "قفصة" },
      { fr: "El Ksar", ar: "القصر" },
      { fr: "Métlaoui", ar: "المتلوي" },
      { fr: "Redeyef", ar: "الرديف" },
      { fr: "Moularès", ar: "أم العرائس" },
      { fr: "El Guettar", ar: "القطار" },
      { fr: "Sidi Aïch", ar: "سيدي عيش" },
    ],
  },
  work: {
    eyebrow: { fr: "Nos réalisations", ar: "أعمالنا" },
    title: { fr: "Avant. Après.", ar: "قبل. بعد." },
    before: { fr: "Avant", ar: "قبل" },
    after: { fr: "Après", ar: "بعد" },
    sliderLabel: { fr: "Comparer avant et après", ar: "قارن قبل وبعد" },
    beforeAlt: { fr: "Pare-brise fissuré avant intervention", ar: "بلّور أمامي مكسور قبل التدخّل" },
    afterAlt: { fr: "Pare-brise neuf après remplacement", ar: "بلّور أمامي جديد بعد التغيير" },
    workshopAlt: { fr: "Intérieur de notre atelier avec pare-brise en stock", ar: "داخل ورشتنا مع مخزون البلّور" },
    trophyAlt: { fr: "Trophée Mawdy Services Meilleur Local 2026", ar: "جائزة موادي لأفضل محلّ 2026" },
  },
  why: {
    eyebrow: { fr: "Pourquoi nous", ar: "لماذا نحن" },
    title: { fr: "La confiance, en toute transparence.", ar: "الثقة، بكل شفافية." },
    stats: [
      { value: 10, suffix: "+", label: { fr: "Années d'expérience", ar: "سنوات خبرة" } },
      { value: 5000, suffix: "+", label: { fr: "Vitrages posés", ar: "بلّورة مركّبة" } },
      { value: 60, suffix: " min", label: { fr: "Pose moyenne", ar: "متوسط التركيب" } },
      { value: 12, suffix: " mois", label: { fr: "Garantie", ar: "ضمان (شهر)" } },
    ],
    points: [
      { title: { fr: "Garantie écrite", ar: "ضمان مكتوب" }, text: { fr: "Chaque pose est garantie contre les fuites et défauts.", ar: "كل تركيب مضمون ضد التسرّب والعيوب." } },
      { title: { fr: "Vitrage de qualité", ar: "بلّور عالي الجودة" }, text: { fr: "Verres certifiés, qualité équivalente à l'origine.", ar: "بلّور معتمد بجودة مماثلة للأصلي." } },
      { title: { fr: "Rapidité", ar: "سرعة" }, text: { fr: "Intervention le jour même selon disponibilité.", ar: "تدخّل في نفس اليوم حسب التوفّر." } },
      { title: { fr: "Assurance simplifiée", ar: "تأمين مبسّط" }, text: { fr: "Partenaire Mawdy Services — trophée Meilleur Local 2026.", ar: "شريك موادي للخدمات — جائزة أفضل محلّ 2026." } },
    ],
  },
  reviews: {
    eyebrow: { fr: "Avis clients", ar: "آراء الحرفاء" },
    title: { fr: "Ils nous font confiance.", ar: "يثقون بنا." },
    // Placeholder reviews — replace with real ones
    items: [
      { name: "Mohamed B.", text: { fr: "Pare-brise changé en moins d'une heure. Travail très propre et équipe professionnelle.", ar: "تغيير البلّور في أقل من ساعة. عمل نظيف جداً وفريق محترف." } },
      { name: "Sana K.", text: { fr: "Ils sont venus directement à mon bureau. Service impeccable, je recommande.", ar: "جاؤوا مباشرة إلى مكتبي. خدمة ممتازة، أنصح بهم." } },
      { name: "Karim H.", text: { fr: "Aide précieuse pour le dossier assurance. Aucun souci, tout a été géré.", ar: "مساعدة قيّمة في ملف التأمين. تمّ كل شيء بلا مشاكل." } },
      { name: "Amira T.", text: { fr: "Teinte de vitres parfaite, rendu très haut de gamme.", ar: "تظليل مثالي ونتيجة راقية جداً." } },
    ],
  },
  faq: {
    eyebrow: { fr: "Questions fréquentes", ar: "أسئلة متكررة" },
    title: { fr: "Tout ce que vous devez savoir.", ar: "كل ما تحتاج معرفته." },
    items: [
      { q: { fr: "Réparer ou remplacer mon pare-brise ?", ar: "إصلاح أم تغيير البلّور؟" }, a: { fr: "Un impact plus petit qu'une pièce de 2 dinars et hors du champ de vision peut généralement être réparé. Au-delà, ou en cas de fissure, le remplacement est nécessaire.", ar: "الضربة الأصغر من قطعة دينارين وخارج مجال الرؤية يمكن إصلاحها عادةً. ما عدا ذلك أو في حالة الشقوق يجب التغيير." } },
      { q: { fr: "Combien de temps dure l'intervention ?", ar: "كم تدوم العملية؟" }, a: { fr: "Une réparation prend environ 30 minutes, un remplacement environ 1 heure, plus un temps de séchage recommandé avant de rouler.", ar: "الإصلاح يستغرق حوالي 30 دقيقة، والتغيير حوالي ساعة، مع وقت تجفيف موصى به قبل القيادة." } },
      { q: { fr: "Mon assurance prend-elle en charge ?", ar: "هل يتكفّل التأمين؟" }, a: { fr: "Si vous avez une garantie bris de glace, oui dans la plupart des cas. Nous vous aidons à constituer le dossier.", ar: "إذا كان عقدك يشمل كسر البلّور، نعم في أغلب الحالات. نساعدك في إعداد الملف." } },
      { q: { fr: "Quelle garantie offrez-vous ?", ar: "ما هو الضمان؟" }, a: { fr: "Nos poses sont garanties 12 mois contre les fuites et défauts de montage.", ar: "تركيباتنا مضمونة 12 شهراً ضد التسرّب وعيوب التركيب." } },
      { q: { fr: "Quel est le prix ?", ar: "ما هو السعر؟" }, a: { fr: "Le prix dépend du véhicule et du type de vitrage. Envoyez-nous une photo pour un devis gratuit et précis.", ar: "السعر يختلف حسب السيارة ونوع البلّور. أرسل لنا صورة لتسعيرة مجانية ودقيقة." } },
    ],
  },
  contact: {
    eyebrow: { fr: "Nous trouver", ar: "موقعنا" },
    title: { fr: "Passez à l'atelier.", ar: "زورونا في الورشة." },
    hoursTitle: { fr: "Horaires", ar: "أوقات العمل" },
    hours: [
      { day: { fr: "Lundi – Samedi", ar: "الإثنين – السبت" }, time: "08:00 – 18:00" },
      { day: { fr: "Dimanche", ar: "الأحد" }, time: { fr: "Fermé", ar: "مغلق" } },
    ],
    directions: { fr: "Itinéraire", ar: "الاتجاهات" },
    address: { fr: "Gafsa, Tunisie", ar: "قفصة، تونس" },
    mapTitle: { fr: "Carte de localisation", ar: "خريطة الموقع" },
  },
  footer: {
    tagline: { fr: "Le vitrage automobile, version premium.", ar: "بلّور السيارات، بلمسة راقية." },
    links: { fr: "Liens rapides", ar: "روابط سريعة" },
    rights: { fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },
  },
} as const;

export type { T };
