export type Destination = {
  slug: string;
  name: string;
  region: string;
  emoji: string;
  photoId: string;
  popular?: boolean;
  fullService?: boolean;
  // SEO
  metaTitle: string;
  metaDesc: string;
  metaKeywords?: string;
  // Hero
  heroTagline: string;
  heroDesc: string;
  // Stat highlights
  stats: { value: string; label: string }[];
  // What we offer locally
  localFeatures: string[];
  // About the destination for owners
  aboutTitle: string;
  about: string;
  // Seasonal info
  seasons: { name: string; months: string; desc: string; level: 'low' | 'mid' | 'high' | 'peak' }[];
  // Avg income example
  incomeExample: { type: string; low: number; high: number };
  // FAQ
  faq: { q: string; a: string }[];
};

export const destinations: Destination[] = [
  {
    slug: 'osijek',
    name: 'Osijek',
    region: 'Slavonija',
    emoji: '🌻',
    photoId: 'photo-1603400521630-9f2de124b33b',
    fullService: true,
    metaTitle: 'Upravljanje apartmanima Osijek – StayMira | Property Management',
    metaDesc:
      'Profesionalno upravljanje apartmanima i kućama u Osijeku. Kompletna usluga: oglašavanje, dinamične cijene, čišćenje, komunikacija s gostima. Vlastiti tim na terenu.',
    metaKeywords:
      'upravljanje apartmanima Osijek, property management Osijek, kratkoročni najam Osijek, Airbnb Osijek, čišćenje apartmana Osijek, prihod od najma Osijek',
    heroTagline: 'Kompletno upravljanje smještajem u Osijeku',
    heroDesc:
      'Jedini puni servis property managementa u Osijeku — upravljanje rezervacijama, dinamične cijene, vlastiti tim za čišćenje i profesionalna prezentacija. Vi naplaćujete, mi vodimo brigu.',
    stats: [
      { value: '100%', label: 'vlastiti tim za čišćenje' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: '24h', label: 'odgovor na upite' },
      { value: '+35%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Vlastiti tim za čišćenje — bez posrednika',
      'Lokalna prisutnost za brzi check-in i hitne situacije',
      'Poznavanje osječkog tržišta kratkoročnog najma',
      'Upravljanje za congress turizam (ESS Osijek, konferencije)',
      'Sezonska strategija za proljetne i jesensko-zimske goste',
      'Koordinacija s lokalnim servisima i obrtnicima',
    ],
    aboutTitle: 'Zašto kratkoročni najam u Osijeku?',
    about:
      'Osijek bilježi rast kratkoročnog najma zahvaljujući congress turizmu, sportskim događanjima i blizini Kopačkog rita. Gosti sve više dolaze iz Mađarske, Austrije i Bosne, a prosječna duljina boravka od 2–3 dana savršena je za kratkoročni najam. Uz StayMiru, vaš osječki smještaj radi za vas — bez stresa i svakodnevne operativne brige.',
    seasons: [
      {
        name: 'Proljeće',
        months: 'III–V',
        desc: 'Konferencije, team buildingovi, Kopački rit — gosti uglavnom poslovni ili aktivni turisti.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VI–VIII',
        desc: 'Sportska natjecanja, koncerti, obiteljski turizam. Viši prihodi nego ostatak godine.',
        level: 'high',
      },
      {
        name: 'Jesen',
        months: 'IX–XI',
        desc: 'Congress sezona — seminari i poslovni gosti. Stabilna popunjenost.',
        level: 'mid',
      },
      {
        name: 'Zima',
        months: 'XII–II',
        desc: 'Manji volumen, ali advent i božićni turizam donose kratke booste.',
        level: 'low',
      },
    ],
    incomeExample: { type: 'Apartman (2 sobe)', low: 6500, high: 10000 },
    faq: [
      {
        q: 'Koliko mogu zaraditi s apartmanom u Osijeku?',
        a: 'Prosječni apartman s 2 sobe u Osijeku donosi 6.500–10.000 € godišnje uz profesionalno upravljanje. Ovisno o lokaciji i opremljenosti, može biti i više — posebno uz puni servis StayMire.',
      },
      {
        q: 'Radite li i za stambene zgrade u centru Osijeka?',
        a: 'Da, radimo za apartmane u stambenim zgradama, privatnim kućama i vilama diljem Osijeka. Bitan preduvjet je uredna dokumentacija i suglasnost etažnih vlasnika gdje je primjenjivo.',
      },
      {
        q: 'Uključuje li usluga čišćenje?',
        a: 'Za Osijek — da, imamo vlastiti tim za čišćenje koji dolazi na svaki okret gostiju. To je naša posebnost u odnosu na druge property management agencije.',
      },
    ],
  },
  {
    slug: 'split',
    name: 'Split',
    region: 'Dalmacija',
    emoji: '⚓',
    photoId: 'photo-1555507036-ab1f4038808a',
    popular: true,
    metaTitle: 'Upravljanje apartmanima Split – StayMira | Property Management Dalmacija',
    metaDesc:
      'Profesionalno upravljanje apartmanima u Splitu i okolici. Oglašavanje na Booking i Airbnb, dinamične cijene, komunikacija s gostima, fotografije. Besplatna analiza.',
    metaKeywords:
      'upravljanje apartmanima Split, property management Split, kratkoročni najam Split, Airbnb Split, Booking Split, upravljanje vilom Dalmacija',
    heroTagline: 'Vaš splitski smještaj u profesionalnim rukama',
    heroDesc:
      'Split je jedan od najtraženijih turističkih gradova Mediterana. Prepustite upravljanje StayMiri i iskoristite puni potencijal svog smještaja — od Dioklecijanove palače do Kaštela i Trogira.',
    stats: [
      { value: '95%', label: 'prosječna popunjenost u sezoni' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: '5+', label: 'platformi za oglašavanje' },
      { value: '+40%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Specifično znanje splitskog turističkog tržišta',
      'Upravljanje za Booking, Airbnb, Vrbo i direktne rezervacije',
      'Koordinacija s provjerenim lokalnim čistačicama',
      'Iskustvo s luksuznim vilama i apartmanima u Palači',
      'Sezonska strategija: predsezone, vrhunac, postsezone',
      'Upravljanje višejezičnom komunikacijom (EN/DE/IT/HR)',
    ],
    aboutTitle: 'Zašto outsourcati upravljanje u Splitu?',
    about:
      'Split prima više od 1,5 milijuna turista godišnje. Sezona traje od travnja do listopada, s vrhuncem srpanj–kolovoz kad cijene i popunjenost dosežu maksimum. Vlasnici bez iskustva često ostavljaju 20–30% prihoda na stolu zbog pogrešne cjenovne strategije. StayMira optimizira cijene svakodnevno i osigurava da ni jedna slobodna noć ne prođe bez prilike.',
    seasons: [
      {
        name: 'Predsezone',
        months: 'IV–V',
        desc: 'Kulturni turisti, city break putnici. Dobre popunjenosti, umjerene cijene.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VI–VIII',
        desc: 'Vrhunac sezone. Maksimalne cijene, puna popunjenost, visok promet gostiju.',
        level: 'peak',
      },
      {
        name: 'Postsezone',
        months: 'IX–X',
        desc: 'Idealni gosti — mirno, toplo more. Prihodi i do 70% ljetnih vrijednosti.',
        level: 'high',
      },
      {
        name: 'Zima',
        months: 'XI–III',
        desc: 'Manji volumen, ali pametnom strategijom i duljim boravcima ostvarujete stabilan prihod.',
        level: 'low',
      },
    ],
    incomeExample: { type: 'Apartman (2 sobe, centar)', low: 14000, high: 24000 },
    faq: [
      {
        q: 'Koliko može zaraditi apartman u Splitu?',
        a: 'Ovisno o lokaciji i kvaliteti, apartman s 2 sobe u centru Splita može zaraditi 14.000–24.000 € godišnje. Smještaji uz Dioklecijanovu palaču ili s pogledom na more ostvaruju i više.',
      },
      {
        q: 'Radite li i za smještaj izvan centra — Kaštela, Trogir, Omiš?',
        a: 'Da, pokrivamo cijelu splitsku rivijeru: Kaštela, Trogir, Omiš, Podstrana i okolna mjesta. Strategija se prilagođava tipu gostiju i mikrolokaciji.',
      },
      {
        q: 'Trebam li ja biti dostupan za check-in?',
        a: 'Ne. Organiziramo key-box ili smart lock i kompletno vodimo komunikaciju s gostima oko dolaska i odlaska. Vi ne trebate biti na licu mjesta.',
      },
    ],
  },
  {
    slug: 'zadar',
    name: 'Zadar',
    region: 'Dalmacija',
    emoji: '🌅',
    photoId: 'photo-1599484090754-72e3e8ef4213',
    metaTitle: 'Upravljanje apartmanima Zadar – StayMira | Property Management',
    metaDesc:
      'Profesionalno upravljanje apartmanima u Zadru i okolici. Oglašavanje na svim platformama, optimizacija cijena, komunikacija s gostima. Besplatna analiza smještaja.',
    metaKeywords:
      'upravljanje apartmanima Zadar, property management Zadar, kratkoročni najam Zadar, Airbnb Zadar, upravljanje smještajem dalmatinska zagora, prihod od najma Zadar',
    heroTagline: 'Zadar: sunčani zalasci i puni prihod od najma',
    heroDesc:
      'Zadar je dom najljepšeg zalaska sunca na Mediteranu — i sve traženija destinacija kratkoročnog najma. StayMira preuzima sve: od oglasa do gostiju, dok vi uživate u prihodima.',
    stats: [
      { value: '90%+', label: 'popunjenost u sezoni' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: 'VII–IX', label: 'vrhunac sezone' },
      { value: '+35%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Iskustvo s apartmanima u Starom gradu i novom dijelu',
      'Upravljanje za obližnje otoke (Ugljan, Pašman) i okolicu',
      'Koordinacija s lokalnim servisima za čišćenje',
      'Višejezična komunikacija za nordijske i njemačke goste',
      'Optimizacija za city break i kulturni turizam',
      'Sezonska strategija s fokusom na postsezonu',
    ],
    aboutTitle: 'Zadar — rastuće turističko tržište',
    about:
      'Zadar bilježi najbrži rast turista u Dalmaciji u posljednjih 5 godina. Morske orgulje i Pozdrav suncu postali su internacionalni simboli, a blizina otoka čini Zadar savršenom bazom za istraživanje Dalmacije. Gosti sve češće rezerviraju tjedan dana ili više — što znači veće prihode po noći i manje rotacija.',
    seasons: [
      {
        name: 'Proljeće',
        months: 'IV–V',
        desc: 'Kulturni turisti i city break posjetitelji. Dobra predsezonal popunjenost.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VI–VIII',
        desc: 'Puna sezona. Nordijski, njemački i domaći gosti. Maksimalne cijene.',
        level: 'peak',
      },
      {
        name: 'Postsezone',
        months: 'IX–X',
        desc: 'Toplo more, manji gužve — idealni gosti. Prihodi do 65% ljetnih vrijednosti.',
        level: 'high',
      },
      {
        name: 'Zima',
        months: 'XI–III',
        desc: 'Duži boravci, gosti na daljinskom radu (digital nomadi), stabilni prihodi.',
        level: 'low',
      },
    ],
    incomeExample: { type: 'Apartman (2 sobe, Stari grad)', low: 10000, high: 18000 },
    faq: [
      {
        q: 'Pokrivate li smještaj na otocima oko Zadra?',
        a: 'Da, upravljamo smještajem na Ugljanu, Pašmanu i obližnjim lokacijama uz koordinaciju lokalnih partnera za čišćenje i check-in.',
      },
      {
        q: 'Koliko može zaraditi apartman u Zadru?',
        a: 'Apartman s 2 sobe u Starom gradu Zadra može zaraditi 10.000–18.000 € godišnje. Smještaji s pogledom na more ili blizi plaže ostvaruju gornje vrijednosti.',
      },
      {
        q: 'Radi li se i s digitalnim nomadima (duži boravci)?',
        a: 'Da, Zadar je popularan s digital nomadima, posebno izvan sezone. Prilagođavamo uvjete za dulje boravke i upravljamo cijenom da maksimiziramo prihod.',
      },
    ],
  },
  {
    slug: 'dubrovnik',
    name: 'Dubrovnik',
    region: 'Dalmacija',
    emoji: '🏰',
    photoId: 'photo-1565717036-0de31c3c4ee9',
    metaTitle: 'Upravljanje apartmanima Dubrovnik – StayMira | Property Management',
    metaDesc:
      'Profesionalno upravljanje apartmanima u Dubrovniku. Premium property management za luksuzne vile i apartmane. Booking, Airbnb, direktne rezervacije.',
    metaKeywords:
      'upravljanje apartmanima Dubrovnik, property management Dubrovnik, kratkoročni najam Dubrovnik, upravljanje vilom Dubrovnik, Airbnb Dubrovnik, luksuzni najam Dubrovnik',
    heroTagline: 'Dubrovnik: vrhunski prihod od najma na Jadranu',
    heroDesc:
      'Dubrovnik je najskuplja turistička destinacija u Hrvatskoj — i jedna od najtraženijih na Mediteranu. StayMira vam pomaže izvući maksimum iz tog potencijala kroz premium upravljanje.',
    stats: [
      { value: '€€€', label: 'najviše cijene u HR' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: 'IV–X', label: 'dulja sezona' },
      { value: '+45%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Iskustvo s premium vilama i apartmanima unutar zidina',
      'Upravljanje za luksuzna tržišta (US, UK, nordijski gosti)',
      'Premium fotografije i virtual tour koordinacija',
      'Concierge add-oni: transfer, vodič, degustacija',
      'Upravljanje za smještaj na Pelješcu i Konavlima',
      'Iskustvo s high-value gostima i visokim zahtjevima',
    ],
    aboutTitle: 'Dubrovnik — premium tržište kratkoročnog najma',
    about:
      'Dubrovnik je konzistentno na listi najpoželjnijih destinacija globalnih putnika. Prosječna cijena po noći je 2–3× viša od ostatka Dalmacije, sezona traje od travnja do listopada, a gosti iz SAD-a, Ujedinjenog Kraljevstva i nordijskih zemalja dominiraju. Jedna luksuzna vila može zaraditi više od cijelog bloka prosječnih apartmana.',
    seasons: [
      {
        name: 'Predsezone',
        months: 'IV–V',
        desc: 'Europski gosti, manji gužve. Odlično za premium pozicioniranje.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VI–VIII',
        desc: 'Maksimalne cijene i potražnja. Gosti iz US, UK, Australije. Vrhunac sezone.',
        level: 'peak',
      },
      {
        name: 'Postsezone',
        months: 'IX–X',
        desc: 'Iznimno popularna — "zlatna sezona". Prihodi blizu ljetnih vrijednosti.',
        level: 'high',
      },
      {
        name: 'Zima',
        months: 'XI–III',
        desc: 'Cruise turisti i city break. Manji volumen ali visoke cijene za kratke boravke.',
        level: 'mid',
      },
    ],
    incomeExample: { type: 'Vila s bazenom (4 sobe)', low: 40000, high: 80000 },
    faq: [
      {
        q: 'Koliko može zaraditi luksuzna vila u Dubrovniku?',
        a: 'Vila s 4 sobe i bazenom u Dubrovniku može zaraditi 40.000–80.000 € godišnje, ovisno o lokaciji, opremljenosti i strategiji. Smještaji unutar zidina ili s direktnim pogledom na more ostvaruju gornje vrijednosti.',
      },
      {
        q: 'Imate li iskustvo s gostima iz SAD-a i UK?',
        a: 'Da — američki i britanski gosti čine znatan dio naše baze u Dubrovniku. Komunikaciju vodimo na engleskom, uvažavamo specifičnosti poput kasnih check-inova i visokih standarda čistoće.',
      },
      {
        q: 'Kako se nositi s ograničenjima broja turista u Dubrovniku?',
        a: 'Poznajemo aktualna lokalna regulatorna ograničenja i prilagođavamo strategiju da ostanemo u skladu s propisima, uz maksimiziranje prihoda unutar dopuštenih kapaciteta.',
      },
    ],
  },
  {
    slug: 'istra',
    name: 'Istra',
    region: 'Istra i Kvarner',
    emoji: '🫒',
    photoId: 'photo-1518623489648-a173ef7824f3',
    popular: true,
    metaTitle: 'Upravljanje apartmanima Istra – StayMira | Property Management Istra',
    metaDesc:
      'Profesionalno upravljanje apartmanima i vilama u Istri. Poreč, Rovinj, Pula, Novigrad. Oglašavanje, dinamične cijene, komunikacija. Besplatna analiza.',
    metaKeywords:
      'upravljanje apartmanima Istra, property management Istra, kratkoročni najam Rovinj, Airbnb Poreč, upravljanje vilom Istra, kratkoročni najam Pula',
    heroTagline: 'Istra: maslinaci, more i maksimalni prihod od najma',
    heroDesc:
      'Istra privlači pretežno austrijske, talijanske i njemačke goste koji cijene mir, gastronomiju i prirodu. StayMira poznaje to tržište i optimizira vaš smještaj za upravo tog gosta.',
    stats: [
      { value: '95%', label: 'popunjenost (VI–IX)' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: 'V–X', label: 'aktivna sezona' },
      { value: '+38%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Pokrivenost: Rovinj, Poreč, Pula, Novigrad, unutrašnja Istra',
      'Iskustvo s talijanskim, austrijskim i njemačkim gostima',
      'Upravljanje za agro-turizme i rustične vile',
      'Višejezična komunikacija (IT, DE, HR, EN)',
      'Koordinacija lokalnih partnera za čišćenje i održavanje',
      'Sezonska strategija za predsezona i postsezone',
    ],
    aboutTitle: 'Istra — mediteranska idila za europske goste',
    about:
      'Istra je najkozmopolitskija hrvatska turistička regija — gosti dolaze iz Austrije, Italije, Njemačke, Češke i Slovačke. Gastronomiski turizam, cyclists rute i agro-turizam produžuju sezonu od svibnja do listopada. Unutrašnja Istra bilježi najbrži rast — gosti traže mir, autentičnost i lokalnu hranu.',
    seasons: [
      {
        name: 'Predsezone',
        months: 'V–VI',
        desc: 'Biciklisti, foodie turisti, parovi. Mirno i profitabilno.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VII–VIII',
        desc: 'Obiteljski turisti, puna popunjenost, visoke cijene.',
        level: 'peak',
      },
      {
        name: 'Postsezone',
        months: 'IX–X',
        desc: 'Gastro turizam, vinski festivali, starija publika. Odlična popunjenost.',
        level: 'high',
      },
      {
        name: 'Zima',
        months: 'XI–IV',
        desc: 'Manji volumen, ali unutrašnja Istra radi sezonsko lovište i truffle turizam.',
        level: 'low',
      },
    ],
    incomeExample: { type: 'Vila u unutrašnjoj Istri (3 sobe)', low: 12000, high: 22000 },
    faq: [
      {
        q: 'Radite li i za smještaj u unutrašnjoj Istri?',
        a: 'Da — unutrašnja Istra (Motovun, Grožnjan, Buzet) je sve popularnija destinacija. Upravljamo vilama i agro-turizmima u toj regiji s fokusem na talijanske i austrijske goste.',
      },
      {
        q: 'Moji gosti uglavnom govore talijanski i njemački — možete li to?',
        a: 'Naravno — komunikaciju vodimo na talijanskom, njemačkom, engleskom i hrvatskom. To je posebno važno za istarski market gdje veliku ulogu igraju talijanski gosti.',
      },
      {
        q: 'Koliko može zaraditi ruralna vila u Istri?',
        a: 'Vila s 3 sobe u unutrašnjoj ili obalnoj Istri može zaraditi 12.000–22.000 € godišnje uz profesionalno upravljanje, ovisno o lokaciji i opremljenosti.',
      },
    ],
  },
  {
    slug: 'zagreb',
    name: 'Zagreb',
    region: 'Kontinentalna Hrvatska',
    emoji: '🏙️',
    photoId: 'photo-1548954151-3c984e3b42c5',
    metaTitle: 'Upravljanje apartmanima Zagreb – StayMira | Property Management',
    metaDesc:
      'Profesionalno upravljanje apartmanima u Zagrebu. Upravljanje za city break turiste i poslovne goste. Airbnb, Booking, dinamične cijene. Besplatna analiza.',
    metaKeywords:
      'upravljanje apartmanima Zagreb, property management Zagreb, kratkoročni najam Zagreb, Airbnb Zagreb, Booking.com Zagreb, city break smještaj Zagreb',
    heroTagline: 'Zagreb: europska metropola s rastućim kratkoročnim najmom',
    heroDesc:
      'Zagreb privlači poslovne putnike, city break turiste i goste koji prolaze prema Jadranu. Kratkoročni najam u Zagrebu raste — a StayMira pomaže vlasnicima iskoristiti taj potencijal cijele godine.',
    stats: [
      { value: '12/12', label: 'prihod cijelu godinu' },
      { value: '4.8★', label: 'prosječna ocjena' },
      { value: '3 noći', label: 'prosj. duljina boravka' },
      { value: '+30%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Upravljanje za city break i poslovne goste',
      'Iskustvo s apartmanima u centru i novim četvrtima',
      'Optimizacija za congress i poslovni turizam',
      'Koordinacija s lokalnim servisima za čišćenje',
      'Strategija za kratke boravke (1–3 noći)',
      'Sezonski peakovi: Advent, Uskrs, konferencije',
    ],
    aboutTitle: 'Zagreb — stability prihoda cijele godine',
    about:
      'Za razliku od primorskih destinacija, Zagreb nema izraženu sezonalnost — prihodi su stabilni cijele godine. Poslovni gosti, congress turisti i city break posjetitelji dolaze ravnomjerno. Advent u Zagrebu se svrstava među najposjećenije u Europi — prosinac je u Zagrevbu zapravo vrhunac.',
    seasons: [
      {
        name: 'Proljeće',
        months: 'III–V',
        desc: 'Uskrsni turizam, city break putnici, konferencije. Dobra popunjenost.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VI–VIII',
        desc: 'Gosti prolaze prema moru. Nešto niži volumen ali stabilan.',
        level: 'mid',
      },
      {
        name: 'Jesen',
        months: 'IX–XI',
        desc: 'Congress sezona — poslovni gosti dominiraju. Odlična popunjenost.',
        level: 'high',
      },
      {
        name: 'Advent',
        months: 'XII–I',
        desc: 'Najtraženiji period — Advent Zagreb privlači turiste iz cijele Europe.',
        level: 'peak',
      },
    ],
    incomeExample: { type: 'Apartman (2 sobe, centar)', low: 8000, high: 14000 },
    faq: [
      {
        q: 'Isplati li se kratkoročni najam u Zagrebu?',
        a: 'Da — Zagreb ima prednost stabilnih prihoda cijele godine bez sezonskih padova. Apartman u centru s 2 sobe može zaraditi 8.000–14.000 € godišnje, bez uzimanja u obzir benefita Adventa.',
      },
      {
        q: 'Radite li i za smještaj izvan užeg centra?',
        a: 'Da, pokrivamo šire gradsko područje. Strategija se prilagođava mikrolokaciji — blizini javnog prijevoza, sveučilišta ili poslovnih zona.',
      },
      {
        q: 'Može li se upravljati apartmanom u Zagrebu dok živim na primorju?',
        a: 'Upravo za to smo tu — preuzimamo kompletnu operativu tako da vam nije potrebno biti na licu mjesta. Sve rezervacije, gosti i komunikacija — u našim rukama.',
      },
    ],
  },
  {
    slug: 'plitvicka-jezera',
    name: 'Plitvička jezera',
    region: 'Kontinentalna Hrvatska',
    emoji: '🏞️',
    photoId: 'photo-1509316785289-025f5b846b35',
    metaTitle: 'Upravljanje smještajem Plitvička jezera – StayMira | Property Management',
    metaDesc:
      'Profesionalno upravljanje apartmanima i kućama uz Plitvička jezera. Upravljanje za UNESCO destinaciju s jakim stranim turizmom. Besplatna analiza.',
    metaKeywords:
      'upravljanje smještajem Plitvička jezera, property management Plitvice, kratkoročni najam Plitvička jezera, Airbnb Plitvice, kuća za odmor Plitvice',
    heroTagline: 'Plitvička jezera: UNESCO smještaj s maksimalnim prihodom',
    heroDesc:
      'Smještaj uz Plitvička jezera je jedinstven — traži se cijele godine, gosti dolaze s 5 kontinenata, a StayMira pomaže vlasnicima izvući maksimum iz te rijetke prilike.',
    stats: [
      { value: '95%+', label: 'popunjenost travanj–rujan' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: '1–2 noći', label: 'prosj. boravak' },
      { value: '+40%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Iskustvo s UNESCO turizmom i međunarodnim gostima',
      'Upravljanje za kratke boravke (1–2 noći)',
      'Višejezična komunikacija (10+ jezika gostiju)',
      'Koordinacija lokalnih partnera za čišćenje',
      'Sezonska strategija s fokusom na rane i kasne rezervacije',
      'Upravljanje za kuće i seoske domaćinstva uz Park',
    ],
    aboutTitle: 'Plitvička jezera — traži se više nego ikad',
    about:
      'Plitvička jezera su među 10 najpopularnijih turističkih destinacija u Europi. Gosti dolaze iz Azije, Amerike, Australije i cijele Europe — i svi trebaju smještaj. Specifičnost je kratki boravak (1–2 noći), visoka rotacija i intenzivna sezona od travnja do listopada. StayMira optimizira svaki slobodni termin.',
    seasons: [
      {
        name: 'Predsezone',
        months: 'IV–V',
        desc: 'Europski gosti, niži gužve. Počinje popunjavanje.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VI–VIII',
        desc: 'Maksimalna potražnja. Gosti iz cijelog svijeta, potpuna popunjenost.',
        level: 'peak',
      },
      {
        name: 'Postsezone',
        months: 'IX–X',
        desc: 'Jesen na jezerima — fotografski turisti, azijski gosti. Odlična popunjenost.',
        level: 'high',
      },
      {
        name: 'Zima',
        months: 'XI–III',
        desc: 'Manji volumen, ali Park je otvoren i zimi — zimski fotografski turizam raste.',
        level: 'low',
      },
    ],
    incomeExample: { type: 'Kuća (3 sobe, blizu Parka)', low: 12000, high: 20000 },
    faq: [
      {
        q: 'Trebam li posebne dozvole za kratkoročni najam uz NP Plitvička jezera?',
        a: 'Kratkoročni najam zahtijeva uobičajenu registraciju domaćinstva i MINT kategorizaciju. StayMira vam može pomoći navigirati taj proces ili preuzeti upravljanje kad je sve postavljeno.',
      },
      {
        q: 'Koliko može zaraditi kuća uz Plitvice?',
        a: 'Kuća s 3 sobe u neposrednoj blizini Parka može zaraditi 12.000–20.000 € godišnje uz profesionalno upravljanje, zahvaljujući intenzivnoj sezoni i visokim cijenama po noći.',
      },
      {
        q: 'Kako se snalazite s gostima iz cijelog svijeta koji govore različite jezike?',
        a: 'Komunikaciju vodimo na engleskom kao lingua franca, a za česte tržišne jezike (kineski, japanski) koristimo automatske prijevode i unaprijed pripremljene vodiče na više jezika.',
      },
    ],
  },
  {
    slug: 'kvarner',
    name: 'Kvarner',
    region: 'Istra i Kvarner',
    emoji: '⛵',
    photoId: 'photo-1507525428034-b723cf961d3e',
    metaTitle: 'Upravljanje apartmanima Kvarner – StayMira | Opatija, Rijeka, Cres, Krk',
    metaDesc:
      'Profesionalno upravljanje smještajem na Kvarneru: Opatija, Rijeka, Cres, Krk, Lošinj, Rab. Upravljanje za nautički i wellness turizam. Besplatna analiza.',
    metaKeywords:
      'upravljanje apartmanima Kvarner, property management Opatija, kratkoročni najam Krk, Airbnb Cres, upravljanje smještajem Lošinj, nautički turizam Kvarner',
    heroTagline: 'Kvarner: nautika, wellness i stabilan prihod od najma',
    heroDesc:
      'Kvarner obuhvaća Opatiju, otoke Cres, Krk, Lošinj i Rab — i sve više postaje destinacija za nautički turizam, wellness goste i dulje boravke. StayMira pomaže vlasnicima na svim tim lokacijama.',
    stats: [
      { value: 'V–X', label: 'aktivna sezona' },
      { value: '4.9★', label: 'prosječna ocjena' },
      { value: '5–7 noći', label: 'prosj. duljina boravka' },
      { value: '+35%', label: 'više prihoda vs. samostalno' },
    ],
    localFeatures: [
      'Pokrivenost: Opatija, Rijeka, Cres, Krk, Lošinj, Rab',
      'Iskustvo s nautičkim turizmom i dužim boravcima',
      'Upravljanje za wellness destinacije (Lošinj)',
      'Koordinacija s lokalnim partnerima za čišćenje i check-in',
      'Strategija za austrijske i češke goste',
      'Sezonska strategija za prolongaciju sezone',
    ],
    aboutTitle: 'Kvarner — raznolik i stabilan',
    about:
      'Kvarner je jedna od najstarijih turističkih regija u Europi — Opatija je bila odmaralište austrijske aristokracije. Danas kombinira wellness turizam, nautiku i prirodne parkove (Risnjak, Učka). Gosti ostaju dulje — 5–7 noći prosječno — što znači manje rotacija i veće prihode po rezervaciji.',
    seasons: [
      {
        name: 'Proljeće',
        months: 'V–VI',
        desc: 'Wellness gosti, nautičari koji počinju sezonu. Mirno i profitabilno.',
        level: 'mid',
      },
      {
        name: 'Ljeto',
        months: 'VII–VIII',
        desc: 'Vrhunac — obiteljski turisti, nautičari. Puna popunjenost.',
        level: 'peak',
      },
      {
        name: 'Postsezone',
        months: 'IX–X',
        desc: 'Nautičari na kraju sezone, wellness gosti. Odlična popunjenost.',
        level: 'high',
      },
      {
        name: 'Zima',
        months: 'XI–IV',
        desc: 'Opatija radi cijelu godinu — kongresni turizam, wellness. Stabilan prihod.',
        level: 'low',
      },
    ],
    incomeExample: { type: 'Apartman (2 sobe, Opatija)', low: 9000, high: 16000 },
    faq: [
      {
        q: 'Radite li i za smještaj na otocima (Krk, Cres, Lošinj)?',
        a: 'Da, pokrivamo kvarnerske otoke s koordinacijom lokalnih partnera. Specifičnost otoka je logistika check-ina i čišćenja, što rješavamo unaprijed s provjerenim timovima.',
      },
      {
        q: 'Opatija ima i zimski turizam — kako to utječe na upravljanje?',
        a: 'Opatija je jedna od rijetkih destinacija u HR s godišnjim turizmom. Congress eventi, wellness i novi gastro turizam znače da prihodi ne padaju na nulu izvan sezone.',
      },
      {
        q: 'Koliko može zaraditi apartman u Opatiji?',
        a: 'Apartman s 2 sobe u Opatiji može zaraditi 9.000–16.000 € godišnje. Smještaji s pogledom na more ili u neposrednoj blizini šetnice ostvaruju gornje vrijednosti.',
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export const LEVEL_COLORS: Record<string, string> = {
  low: 'bg-[#e8dcc8] text-[#0f2742]/50',
  mid: 'bg-[#c9a86a]/20 text-[#8a6a30]',
  high: 'bg-[#0f2742]/20 text-[#0f2742]',
  peak: 'bg-[#0f2742] text-white',
};

export const LEVEL_LABELS: Record<string, string> = {
  low: 'Niska sezona',
  mid: 'Srednja sezona',
  high: 'Visoka sezona',
  peak: 'Vrhunac',
};
