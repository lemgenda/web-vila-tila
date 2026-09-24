/**
 * Vila Tila - Luxury Tourist Rental Website
 * Fully bilingual (EN / HR), SEO optimized, WCAG 2.2 compliant
 */

const GALLERY_IMAGES = [
  {
    "old_name": "IMG-20260916-WA0000-2048.webp",
    "new_name": "vila-tila-indoor-pool-marble-interior.webp",
    "category": "pool",
    "tags": [
      "pool",
      "wellness",
      "indoor"
    ],
    "title_en": "Indoor Heated Pool with Marble Wall",
    "title_hr": "Unutarnji grijani bazen s mramornim zidom",
    "alt_en": "Vila Tila heated indoor swimming pool with turquoise water, stone coping, marble accent wall, and ceiling sky light panel.",
    "alt_hr": "Grijani unutarnji bazen u Vili Tili s tirkiznom vodom, kamenim rubom, mramornim zidom i krovnim svjetlosnim panelom.",
    "sr_desc_en": "Photograph showing the private heated indoor pool of Vila Tila. The turquoise pool water is bordered by rough-cut stone tiles. On the right, light marble wall finishes reflect the illuminated sky ceiling above. Glass sliding doors on the left open out to the garden courtyard.",
    "sr_desc_hr": "Fotografija privatnog grijanog unutarnjeg bazena Vile Tila. Tirkizna voda bazena obrubljena je kamenim pločama. S desne strane nalazi se elegantni mramorni zid koji reflektira osvijetljeni stropni panel, a s lijeve strane staklene stijene vode prema dvorištu."
  },
  {
    "old_name": "IMG-20260916-WA0001-2048.webp",
    "new_name": "vila-tila-luxury-bathroom-vanity-mirror.webp",
    "category": "rooms",
    "tags": [
      "bathroom",
      "interior",
      "luxury"
    ],
    "title_en": "Modern Bathroom with Round LED Mirror",
    "title_hr": "Moderna kupaonica s okruglim LED ogledalom",
    "alt_en": "Modern ensuite bathroom at Vila Tila with round illuminated LED mirror, vessel sink on fluted white vanity, and gray stone tiles.",
    "alt_hr": "Moderna kupaonica u Vili Tili s okruglim osvijetljenim LED ogledalom, nadgradnim umivaonikom i sivom keramikom.",
    "sr_desc_en": "A close view of a designer bathroom featuring large-format neutral gray ceramic tiles, a contemporary round vanity with fluted vertical texture, a cylindrical vessel sink with chrome tapware, a backlit circular LED mirror, and a wall-hung toilet.",
    "sr_desc_hr": "Prikaz dizajnerske kupaonice s neutralnim sivim pločicama, modernim ormarićem za umivaonik s vertikalnim rebrima, okruglim nadgradnim umivaonikom s kromiranom slavinom, kružnim LED ogledalom i zidnim WC-om."
  },
  {
    "old_name": "IMG-20260916-WA0002-2048.webp",
    "new_name": "vila-tila-covered-terrace-summer-kitchen-night.webp",
    "category": "exterior",
    "tags": [
      "terrace",
      "night",
      "bbq",
      "dining"
    ],
    "title_en": "Covered Summer Kitchen & Dining Terrace at Night",
    "title_hr": "Natkrivena ljetna kuhinja i terasa za blagovanje noću",
    "alt_en": "Illuminated covered outdoor terrace and summer kitchen with dining table, ceiling fan, and electric BBQ at Vila Tila at night.",
    "alt_hr": "Osvijetljena natkrivena terasa i ljetna kuhinja s blagovaonskim stolom, stropnim ventilatorom i roštiljem u Vili Tili noću.",
    "sr_desc_en": "The outdoor terrace pergola at night, warmly illuminated by integrated linear LED strips along the wooden ceiling beams. Under the pergola is a dining table with padded armchairs, an outdoor summer kitchen countertop with sink and electric grill, and comfortable lounge seating.",
    "sr_desc_hr": "Vanjska natkrivena terasa noću, toplo osvijetljena ugrađenom LED trakom duž drvenih stropnih greda. Pod pergolom se nalazi stol za blagovanje s udobnim stolicama, ljetna kuhinja sa sudoperom i roštiljem te prostor za opuštanje."
  },
  {
    "old_name": "IMG-20260916-WA0003-2048.webp",
    "new_name": "vila-tila-indoor-swimming-pool-sauna-overview.webp",
    "category": "pool",
    "tags": [
      "pool",
      "sauna",
      "wellness"
    ],
    "title_en": "Indoor Heated Pool with Finnish Sauna",
    "title_hr": "Unutarnji bazen s finskom saunom",
    "alt_en": "Direct view of Vila Tila indoor heated swimming pool and private Finnish sauna cabin surrounded by stone paving.",
    "alt_hr": "Izravan pogled na unutarnji grijani bazen Vile Tila i privatnu finsku saunu okruženu kamenim pločama.",
    "sr_desc_en": "Centered perspective looking into the glass-enclosed wellness pavilion. The 21-square-meter heated pool features crystalline blue water and internal stairs. At the far corner stands a glass-fronted Finnish wooden sauna cabin, flanked by tropical planters and ambient lighting.",
    "sr_desc_hr": "Pogled kroz stakleni ulaz wellness paviljona. Grijani bazen površine 21 m² s kristalno čistom vodom i ugrađenim stepenicama. U stražnjem kutu nalazi se finska drvena sauna sa staklenom stijenom, ukrasno bilje i ambijentalna rasvjeta."
  },
  {
    "old_name": "IMG-20260916-WA0004-2048.webp",
    "new_name": "vila-tila-guest-toilet-powder-room.webp",
    "category": "rooms",
    "tags": [
      "bathroom",
      "toilet",
      "interior"
    ],
    "title_en": "Guest Powder Room & Toilet",
    "title_hr": "Gostinjski toalet",
    "alt_en": "Vila Tila elegant guest toilet room with compact washbasin vanity, modern toilet, and backlit LED mirror.",
    "alt_hr": "Elegantan gostinjski toalet u Vili Tili s kompaktnim umivaonikom, modernom školjkom i LED ogledalom.",
    "sr_desc_en": "View of the stylish guest powder room finished in light gray stone tiles with terrazzo accent wall, featuring a modern wall-mounted vanity unit with small basin, chrome mixer tap, round mirror with touch-switch LED illumination, and soft hand towel.",
    "sr_desc_hr": "Pogled na gostinjski toalet uređen svijetlosivom keramikom s detaljima u stilu terrazza, modernim visećim ormarićem s manjim umivaonikom, kromiranom miješalicom i okruglim LED ogledalom na dodir."
  },
  {
    "old_name": "IMG-20260916-WA0005-2048.webp",
    "new_name": "vila-tila-walk-in-shower-bathroom.webp",
    "category": "rooms",
    "tags": [
      "bathroom",
      "shower",
      "luxury"
    ],
    "title_en": "Ensuite Bathroom with Walk-in Rain Shower",
    "title_hr": "Kupaonica s walk-in tušem s efektom kiše",
    "alt_en": "Spacious ensuite bathroom with walk-in glass rain shower, fluted vanity, and modern laundry washer at Vila Tila.",
    "alt_hr": "Prostrana kupaonica sa staklenim walk-in tušem, modernim ormarićem i perilicom rublja u Vili Tili.",
    "sr_desc_en": "Detailed view of the primary bathroom featuring a large walk-in shower enclosed with transparent tempered glass and overhead chrome rain shower head. Beside it is a fluted cylindrical vanity unit with round basin, backlit mirror, recessed niche for toiletries, and integrated washing machine.",
    "sr_desc_hr": "Detaljan pogled na glavnu kupaonicu s velikom walk-in tuš kabinom od prozirnog stakla s velikom ružom tuša. Uz tuš se nalazi valjkasti rebrasti ormarić s okruglim umivaonikom, osvijetljeno ogledalo, ugradbena niša za kozmetiku i perilica rublja."
  },
  {
    "old_name": "IMG-20260916-WA0006-2048.webp",
    "new_name": "gacka-valley-prozor-aerial-landscape-otocac.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "aerial",
      "valley"
    ],
    "title_en": "Aerial Panorama of Gacka Valley & Prozor",
    "title_hr": "Zračna panorama doline Gacke i mjesta Prozor",
    "alt_en": "High aerial panoramic drone photograph of the green Gacka river valley, fields, and village of Prozor near Otočac, Croatia.",
    "alt_hr": "Visoka zračna panorama doline rijeke Gacke, polja i sela Prozor kraj Otočca u Lici.",
    "sr_desc_en": "Spectacular high-altitude drone view showing the wide expanse of the fertile Gacka valley. The emerald-blue ribbon of the Gacka river winds through farmland, patchwork meadows, and traditional hamlets beneath the rolling forested slopes of the Velebit foothills.",
    "sr_desc_hr": "Prekrasan panoramski pogled iz zraka na prostranu dolinu rijeke Gacke. Smaragdna rijeka Gacka vijuga kroz plodna polja, livade i slikovita naselja podno šumovitih obronaka Velebita."
  },
  {
    "old_name": "IMG-20260916-WA0008-2048.webp",
    "new_name": "vila-tila-courtyard-patio-pool-house-night.webp",
    "category": "exterior",
    "tags": [
      "exterior",
      "night",
      "pool",
      "patio"
    ],
    "title_en": "Illuminated Stone Patio & Pool House at Night",
    "title_hr": "Osvijetljeno kameno dvorište i bazen noću",
    "alt_en": "Wide night perspective of Vila Tila illuminated stone patio with sun loungers, glass-enclosed pool house, and A-frame villa.",
    "alt_hr": "Noćna perspektiva kamenog dvorišta Vile Tila s ležaljkama za sunčanje, staklenim paviljonom bazena i planinskom vilom.",
    "sr_desc_en": "Night photograph of Vila Tila's paved courtyard illuminated by warm in-ground and façade lights. In the foreground, four modern black sun loungers with side tables are arranged neatly. The glowing pool pavilion and timber A-frame chalet create an enchanting luxury ambiance.",
    "sr_desc_hr": "Noćna fotografija popločanog dvorišta Vile Tila s ugodnom rasvjetom. U prvom planu nalaze se četiri crne ležaljke s pomoćnim stolićima, a u pozadini svijetli stakleni paviljon s bazenom te drvena vila toplih tonova."
  },
  {
    "old_name": "IMG-20260916-WA0009-2048.webp",
    "new_name": "vila-tila-outdoor-pergola-dining-night.webp",
    "category": "exterior",
    "tags": [
      "terrace",
      "pergola",
      "dining",
      "night"
    ],
    "title_en": "Outdoor Dining Pergola & Paved Courtyard",
    "title_hr": "Vanjska pergola za blagovanje i dvorište",
    "alt_en": "Covered dining pergola with warm LED strip lighting, dining table, and stone terrace of Vila Tila at night.",
    "alt_hr": "Natkrivena pergola za blagovanje s toplom LED rasvjetom, blagovaonskim stolom i kamenom terasom Vile Tila noću.",
    "sr_desc_en": "A night view across the spacious interlocking stone paver courtyard toward the modern covered pergola. The pergola features sturdy timber posts, dark contemporary cladding, an integrated linear LED light bar, and outdoor dining furnishings.",
    "sr_desc_hr": "Noćni pogled preko prostranog popločanog dvorišta prema modernoj natkrivenoj pergoli s drvenim stupovima, antracit oblogom, LED rasvjetom i stolom za večere na otvorenom."
  },
  {
    "old_name": "IMG-20260916-WA0010-2048.webp",
    "new_name": "vila-tila-loft-gallery-high-ceiling-architecture.webp",
    "category": "living",
    "tags": [
      "interior",
      "architecture",
      "loft",
      "wood"
    ],
    "title_en": "Loft Gallery Overlook & Timber Architecture",
    "title_hr": "Galerija na katu i drvena arhitektura",
    "alt_en": "Upper loft gallery in Vila Tila with geometric black metal railing, exposed timber beams, and architectural triangular gable windows.",
    "alt_hr": "Galerija na katu Vile Tila s geometrijskom crnom ogradom, vidljivim drvenim gredama i trokutastim krovnim prozorima.",
    "sr_desc_en": "Photograph from the second-floor loft gallery looking toward the high wooden cathedral ceiling and triangular architectural gable windows. The loft is protected by custom black metal geometric balustrades with views over the living room below.",
    "sr_desc_hr": "Fotografija s galerije na katu koja prikazuje visoki drveni krov s masivnim gredama, trokutaste prozore na zabatu i ogradu od crnog čelika s pogledom na donji dnevni boravak."
  },
  {
    "old_name": "IMG-20260916-WA0011-2048.webp",
    "new_name": "vila-tila-upper-floor-bedroom-king-bed.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "interior",
      "bed",
      "wood"
    ],
    "title_en": "Upper Floor Bedroom with King Bed",
    "title_hr": "Gornja spavaća soba s bračnim krevetom",
    "alt_en": "Cozy upper floor bedroom at Vila Tila under pitched wood ceiling with plush king-size bed, halo light, and private balcony door.",
    "alt_hr": "Ugodna spavaća soba na katu Vile Tila pod kosim drvenim stropom s bračnim krevetom, dizajnerskim lusterom i balkonskim vratima.",
    "sr_desc_en": "Spacious upper floor bedroom lined completely with natural spruce timber planks and structural rafters. The centerpiece is a comfortable king-size bed made up with crisp white linens and embroidered accent pillows, complemented by a suspended circular LED ring chandelier.",
    "sr_desc_hr": "Prostrana spavaća soba na katu u potpunosti obložena prirodnim smrekovim drvetom s krovnim gredama. U središtu je bračni krevet s bijelom posteljinom i ukrasnim jastucima, uz moderan prstenasti viseći luster."
  },
  {
    "old_name": "IMG-20260916-WA0012-2048.webp",
    "new_name": "vila-tila-bedroom-vanity-desk-mirror.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "vanity",
      "interior"
    ],
    "title_en": "Bedroom Vanity Desk & Gold Mirror",
    "title_hr": "Toaletni stolić u spavaćoj sobi sa zlatnim ogledalom",
    "alt_en": "Bedroom vanity dressing desk with round gold-rimmed mirror, velvet chair, and king bed under exposed wooden roof beams.",
    "alt_hr": "Toaletni stolić sa zlatnim okruglim ogledalom, baršunastom stolicom i bračnim krevetom pod drvenim gredama.",
    "sr_desc_en": "View of the dedicated dressing area inside the bedroom, featuring a white fluted vanity console on black metal legs, a round brushed-brass mirror mounted on timber walls, a blush velvet side chair, and ambient reading lamps.",
    "sr_desc_hr": "Kutak za uljepšavanje u spavaćoj sobi: bijeli konzolni toaletni stolić s metalnim nogama, okruglo ogledalo sa zlatnim okvirom, udobna fotelja od baršuna i topla ambijentalna rasvjeta."
  },
  {
    "old_name": "IMG-20260916-WA0013-2048.webp",
    "new_name": "vila-tila-aerial-drone-estate-night-view.webp",
    "category": "exterior",
    "tags": [
      "aerial",
      "drone",
      "night",
      "estate"
    ],
    "title_en": "Aerial Drone Night View of the Entire Estate",
    "title_hr": "Zračni noćni pogled dronom na cijelo imanje",
    "alt_en": "Drone aerial photograph of Vila Tila at night showing illuminated pool house, chalet, private parking, and fenced garden.",
    "alt_hr": "Zračna noćna fotografija Vile Tila koja prikazuje osvijetljeni bazen, vilu, privatni parking i ograđeno dvorište.",
    "sr_desc_en": "High-angle nighttime drone view capturing the entire private estate of Vila Tila. The dramatic A-frame rooflines, turquoise lighted indoor pool pavilion, illuminated stone patio with loungers, outdoor dining pergola, and fully fenced secure parking courtyard are clearly visible against the dark night.",
    "sr_desc_hr": "Zračni noćni snimak cijelog imanja Vile Tila. Vidljive su linije krova, tirkizno osvijetljeni zatvoreni bazen, osvijetljena terasa s ležaljkama, pergola za blagovanje i ograđeni privatni parking."
  },
  {
    "old_name": "IMG-20260916-WA0014-2048.webp",
    "new_name": "vila-tila-aerial-daylight-residence-pool-terrace.webp",
    "category": "exterior",
    "tags": [
      "aerial",
      "daylight",
      "drone",
      "architecture"
    ],
    "title_en": "Aerial Daylight View of Villa & Pool Enclosure",
    "title_hr": "Dnevni pogled dronom na vilu i bazenski paviljon",
    "alt_en": "Aerial daylight drone view of Vila Tila modern A-frame chalet, indoor pool pavilion, sun terrace, and green countryside.",
    "alt_hr": "Zračni dnevni pogled na planinsku vilu Vila Tila, bazenski paviljon, sunčanu terasu i okolnu prirodu.",
    "sr_desc_en": "Elevated daytime aerial photograph showcasing Vila Tila's contemporary Alpine architecture. The main timber residence features steep dark-tiled roofs, adjoining a sleek glass-walled pool pavilion, an extensive paved sun deck with loungers and outdoor shower, and a covered summer gazebo.",
    "sr_desc_hr": "Zračna fotografija Vile Tila po danu koja ističe modernu alpsku arhitekturu: drvenu kuću sa strmim crnim krovom, stakleni paviljon s bazenom, veliku terasu s ležaljkama i vanjskim tušem te sjenicu."
  },
  {
    "old_name": "IMG-20260916-WA0015-2048.webp",
    "new_name": "vila-tila-open-concept-living-dining-kitchen.webp",
    "category": "living",
    "tags": [
      "living",
      "dining",
      "kitchen",
      "interior"
    ],
    "title_en": "Open Concept Living, Dining & Gourmet Kitchen",
    "title_hr": "Dnevni boravak, blagovaonica i moderna kuhinja",
    "alt_en": "Open concept interior of Vila Tila with flat screen Smart TV, designer dining set, open staircase, and fully equipped kitchen.",
    "alt_hr": "Povezani prostor dnevnog boravka, blagovaonice i potpuno opremljene kuhinje u Vili Tili.",
    "sr_desc_en": "A wide interior photograph illustrating the open-plan ground floor layout. In the center is a round dark dining table with comfortable rust and ochre velvet chairs under an oval ring pendant. To the left is an open steel staircase and TV media wall; to the right, a modern kitchen with high-end appliances.",
    "sr_desc_hr": "Široki pogled na prizemlje otvorenog koncepta. U sredini je okrugli blagovaonski stol s baršunastim stolicama u boji terakote i senfa pod modernim lusterom. S lijeve strane su čelične stube i TV, a s desne kuhinja."
  },
  {
    "old_name": "IMG-20260916-WA0016-2048.webp",
    "new_name": "vila-tila-ground-floor-bedroom-tv-desk.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "interior",
      "tv"
    ],
    "title_en": "Ground Floor Master Bedroom with TV & Desk",
    "title_hr": "Glavna spavaća soba u prizemlju s TV-om i stolom",
    "alt_en": "Ground floor master bedroom at Vila Tila with king bed, timber wall paneling, wall-mounted Smart TV, and dressing desk.",
    "alt_hr": "Glavna spavaća soba u prizemlju Vile Tila s bračnim krevetom, drvenim zidovima, Smart TV-om i toaletnim stolićem.",
    "sr_desc_en": "Comfortable ground floor master bedroom featuring warm natural wood walls, a king-size bed with soft neutral linens, wall-mounted flat-screen TV, climate control air conditioning, vanity desk with chair, and large window with sheer drapery.",
    "sr_desc_hr": "Udobna glavna spavaća soba u prizemlju s drvenim zidnim oblogama, velikim bračnim krevetom, zidnim TV-om, klima uređajem, toaletnim stolićem i prozorom sa zavjesama."
  },
  {
    "old_name": "IMG-20260916-WA0017-2048.webp",
    "new_name": "vila-tila-cathedral-ceiling-living-room-sofa.webp",
    "category": "living",
    "tags": [
      "living",
      "sofa",
      "architecture",
      "interior"
    ],
    "title_en": "Cathedral Ceiling Living Room with Plush Sofa",
    "title_hr": "Dnevni boravak s visokim stropom i udobnim kaučem",
    "alt_en": "Vila Tila high-ceiling living room with gray designer sofa, coffee table, floor-to-ceiling gable glazing, and patio access.",
    "alt_hr": "Dnevni boravak Vile Tila s visokim stropom, dizajnerskim kaučem, stolićem za kavu i staklenim stijenama prema terasi.",
    "sr_desc_en": "Interior shot showcasing the soaring cathedral ceiling and double-height timber gable of Vila Tila. A comfortable gray fabric sofa faces a round coffee table on a circular rug, with full-height patio doors opening directly onto the sunny outdoor terrace.",
    "sr_desc_hr": "Fotografija dnevnog boravka koja ističe visoke stropove i drvenu konstrukciju zabata. Udoban sivi trosjed smješten je uz okrugli stolić, a velika staklena balkonska vrata vode izravno na terasu."
  },
  {
    "old_name": "IMG-20260916-WA0018-2048.webp",
    "new_name": "vila-tila-bedroom-ensuite-entrance-ac.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "interior",
      "ensuite"
    ],
    "title_en": "Upper Bedroom with Ensuite Doorway & AC",
    "title_hr": "Gornja spavaća soba s prolazom u kupaonicu i klimom",
    "alt_en": "Bright bedroom at Vila Tila with king bed, wall TV, independent air conditioning, and entrance to private bathroom.",
    "alt_hr": "Svijetla spavaća soba u Vili Tili s bračnim krevetom, TV-om, vlastitim klima uređajem i ulazom u kupaonicu.",
    "sr_desc_en": "View of the upper bedroom showing the foot of the king-size bed, a smooth light gray accent wall with flat-screen television, climate control unit, and the doorway leading into the private en-suite bathroom.",
    "sr_desc_hr": "Prikaz spavaće sobe na katu s pogledom na podnožje bračnog kreveta, zid s televizorom, klima uređaj i ulaz u privatnu kupaonicu."
  },
  {
    "old_name": "IMG-20260916-WA0019-2048.webp",
    "new_name": "vila-tila-bedroom-bed-tufted-headboard-close.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "bed",
      "interior"
    ],
    "title_en": "King Bed with Tufted Leather Headboard",
    "title_hr": "Bračni krevet s tapeciranim uzglavljem",
    "alt_en": "Close view of luxury king bed with tufted headboard, crisp white bedding, ambient wall sconces, and pine timber wall.",
    "alt_hr": "Bliži pogled na luksuzni bračni krevet s tapeciranim uzglavljem, bijelom posteljinom i drvenim zidom.",
    "sr_desc_en": "Inviting frontal shot of the master bed dressed in premium white cotton duvet and ornamental damask cushions. Behind the bed is a dark tufted headboard, warm modern bedside reading sconces, and a fine art print on the natural timber wall.",
    "sr_desc_hr": "Prednji kadar bračnog kreveta s vrhunskom bijelom pamučnom posteljinom i ukrasnim jastucima. Iza kreveta je tamno uzglavlje, zidne lampe za čitanje i umjetnička slika na drvenom zidu."
  },
  {
    "old_name": "IMG-20260916-WA0020-2048.webp",
    "new_name": "vila-tila-mezzanine-loft-terracotta-lounge.webp",
    "category": "living",
    "tags": [
      "loft",
      "lounge",
      "interior",
      "mezzanine"
    ],
    "title_en": "Mezzanine Loft Lounge with Terracotta Sofa",
    "title_hr": "Lounge kutak na galeriji s terakota kaučem",
    "alt_en": "Second floor mezzanine loft at Vila Tila with comfortable terracotta sofa, coffee table, and architectural triangular windows.",
    "alt_hr": "Galerija na katu Vile Tila s udobnim kaučem u boji terakote, stolićem i trokutastim prozorima.",
    "sr_desc_en": "Upper mezzanine level arranged as a peaceful reading retreat, complete with a velvet terracotta two-seater couch, fluted white coffee table on a circular plush rug, unique drop pendant lights, and light wood rafters framed by triangular gable windows.",
    "sr_desc_hr": "Gornja galerija uređena kao kutak za opuštanje i čitanje, s baršunastim dvosjedom u boji terakote, okruglim stolićem na tepihu, modernim visilicama i drvenim krovnim konstrukcijama."
  },
  {
    "old_name": "IMG-20260916-WA0021-2048.webp",
    "new_name": "vila-tila-summer-kitchen-pergola-barbecue-night.webp",
    "category": "exterior",
    "tags": [
      "terrace",
      "bbq",
      "dining",
      "night"
    ],
    "title_en": "Summer Kitchen & Dining Pergola at Night",
    "title_hr": "Ljetna kuhinja i blagovaonica pod pergolom noću",
    "alt_en": "Vila Tila outdoor summer kitchen with electric BBQ grill, prep sink, dining table, and illuminated terrace at night.",
    "alt_hr": "Vanjska ljetna kuhinja s električnim roštiljem, radnom plohom, sudoperom i stolom na osvijetljenoj terasi Vile Tila noću.",
    "sr_desc_en": "Night view of the sheltered outdoor cooking and dining facility. Equipped with an electric barbecue grill, food preparation counter with running water, stainless steel sink, large dining suite, ceiling fan, and linear LED lighting.",
    "sr_desc_hr": "Noćni prikaz natkrivenog prostora za kuhanje i objedovanje na otvorenom. Opremljen je električnim roštiljem, radnom pločom sa sudoperom, velikim stolom za jelo, stropnim ventilatorom i ugodnom LED rasvjetom."
  },
  {
    "old_name": "IMG-20260916-WA0022-2048.webp",
    "new_name": "vila-tila-heated-pool-wellness-glass-facade.webp",
    "category": "pool",
    "tags": [
      "pool",
      "wellness",
      "sauna",
      "glass"
    ],
    "title_en": "Heated Pool & Wellness Area with Glass Sliding Wall",
    "title_hr": "Grijani bazen i wellness zona s kliznim staklenim stijenama",
    "alt_en": "Interior of heated pool house with large glass sliding doors, Finnish sauna, ceiling sky panel, and stone tile floor.",
    "alt_hr": "Unutrašnjost bazenskog paviljona s kliznim staklenim stijenama, finskom saunom i kamenim podom u Vili Tili.",
    "sr_desc_en": "Wide perspective of the year-round heated indoor swimming pool. Large black-framed sliding glass panels can be opened entirely to connect the pool room with the exterior sun terrace. Inside, a Finnish dry sauna cabin and decorative green plants provide a spa sanctuary.",
    "sr_desc_hr": "Široki pogled na grijani bazen koji radi cijele godine. Velike klizne staklene stijene mogu se potpuno otvoriti prema vanjskoj sunčanoj terasi. Unutar paviljona nalaze se finska suha sauna i ukrasno bilje."
  },
  {
    "old_name": "IMG-20260916-WA0023-2048.webp",
    "new_name": "vila-tila-indoor-heated-pool-water-reflection.webp",
    "category": "pool",
    "tags": [
      "pool",
      "wellness",
      "water"
    ],
    "title_en": "Indoor Heated Pool with Sky Ceiling Reflection",
    "title_hr": "Unutarnji grijani bazen s odsjajem stropa",
    "alt_en": "Crystal clear heated swimming pool with blue water reflecting illuminated sky ceiling art inside Vila Tila.",
    "alt_hr": "Kristalno čista voda grijanog bazena s odsjajem osvijetljenog stropnog panela u Vili Tili.",
    "sr_desc_en": "Close view looking along the length of the 21 m² heated indoor pool. The tranquil azure water reflects the illuminated celestial forest scene printed on the ceiling light box. Shallow entrance steps allow easy, relaxing access.",
    "sr_desc_hr": "Bliži pogled duž 21 m² velikog grijanog bazena. Mirna plava voda reflektira osvijetljeni motiv šumskog neba na stropnom panelu. Plitke stepenice omogućuju lagan ulazak u vodu."
  },
  {
    "old_name": "IMG-20260916-WA0024-2048.webp",
    "new_name": "vila-tila-night-terrace-sun-loungers-villa-view.webp",
    "category": "exterior",
    "tags": [
      "exterior",
      "night",
      "terrace",
      "loungers"
    ],
    "title_en": "Night Terrace with Sunbeds & Illuminated Chalet",
    "title_hr": "Noćna terasa s ležaljkama i osvijetljenom vilom",
    "alt_en": "Night view of Vila Tila paved terrace with modern sunbeds, illuminated glass pool pavilion, and A-frame wooden chalet.",
    "alt_hr": "Noćni pogled na popločanu terasu Vile Tila s ležaljkama, osvijetljenim bazenom i drvenom planinskom vilom.",
    "sr_desc_en": "Atmospheric nighttime shot showing the comfortable sun loungers lined up on the paved patio in front of the illuminated indoor pool pavilion and the double A-frame timber chalet standing against the starlit sky.",
    "sr_desc_hr": "Ugođajna noćna fotografija ležaljki za sunčanje na kamenoj terasi ispred osvijetljenog bazenskog paviljona i drvene vile pod noćnim nebom."
  },
  {
    "old_name": "IMG-20260916-WA0026-2048.webp",
    "new_name": "vila-tila-bedroom-vanity-gold-round-mirror.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "vanity",
      "mirror"
    ],
    "title_en": "Bedroom Makeup Vanity with Circular Gold Mirror",
    "title_hr": "Toaletni stolić sa zaobljenim zlatnim ogledalom",
    "alt_en": "Modern white makeup vanity table with large round gold mirror and hallway access in Vila Tila bedroom.",
    "alt_hr": "Moderni toaletni stolić za šminkanje s velikim okruglim zlatnim ogledalom u spavaćoj sobi Vile Tila.",
    "sr_desc_en": "Close view of the bedroom's grooming vanity console, showing the sleek white finish, a prominent round gold-edged mirror reflecting the ceiling timber beams, remote control for entertainment, and the entrance to the ensuite bathroom.",
    "sr_desc_hr": "Bliži pogled na toaletni stolić u spavaćoj sobi, s elegantnom bijelom plohom, velikim zlatnim ogledalom koje reflektira drveni strop i prolazom prema kupaonici."
  },
  {
    "old_name": "IMG-20260916-WA0027-2048.webp",
    "new_name": "vila-tila-modern-bathroom-rain-shower-details.webp",
    "category": "rooms",
    "tags": [
      "bathroom",
      "shower",
      "amenities"
    ],
    "title_en": "Ensuite Bathroom with Rain Shower & Vanity",
    "title_hr": "Kupaonica s tušem s kišnim efektom i ormarićem",
    "alt_en": "Bathroom with frameless glass walk-in rain shower, fluted round vanity, backlit LED mirror, and window for natural light.",
    "alt_hr": "Kupaonica s walk-in tušem, rebrastim ormarićem, LED ogledalom i prozorom za prirodno svjetlo.",
    "sr_desc_en": "Crisp view of the bathroom appointments: frameless glass shower enclosure, chrome rain shower head with hand wand, recessed shelf with toiletries, modern round vanity basin, smart backlit LED mirror, and window providing natural ventilation.",
    "sr_desc_hr": "Čisti prikaz kupaonske opreme: staklena tuš stijena bez okvira, kišni tuš, ugradbena polica za kozmetiku, moderni umivaonik na ormariću, LED ogledalo i prozor za prozračivanje."
  },
  {
    "old_name": "IMG-20260916-WA0028-2048.webp",
    "new_name": "vila-tila-master-bedroom-ensuite-bathroom-view.webp",
    "category": "rooms",
    "tags": [
      "bedroom",
      "bathroom",
      "interior"
    ],
    "title_en": "Master Bedroom with Ensuite Bathroom View",
    "title_hr": "Glavna spavaća soba s pogledom na kupaonicu",
    "alt_en": "Spacious bedroom at Vila Tila with king bed, wall lighting, timber ceiling, and open entrance to ensuite bathroom.",
    "alt_hr": "Prostrana spavaća soba u Vili Tili s bračnim krevetom, rasvjetom i otvorenim ulazom u kupaonicu.",
    "sr_desc_en": "Photograph displaying the harmonious connection between the bedroom and private en-suite bathroom. Warm light washes down the microcement accent wall, highlighting the king-size bed and showing the glass-walled shower inside the bathroom.",
    "sr_desc_hr": "Prikaz povezanosti spavaće sobe i kupaonice. Topla rasvjeta obasjava zid s dekorativnom tehnikom, ističući bračni krevet i pogled na stakleni tuš u kupaonici."
  },
  {
    "old_name": "IMG-20260916-WA0029-2048.webp",
    "new_name": "vila-tila-pool-pavilion-sliding-glass-patio-night.webp",
    "category": "pool",
    "tags": [
      "pool",
      "wellness",
      "exterior",
      "night"
    ],
    "title_en": "Pool Pavilion Sliding Glass Doors at Night",
    "title_hr": "Klizne staklene stijene bazena noću",
    "alt_en": "Modern pool pavilion with wide sliding glass doors open to the stone patio at Vila Tila at night.",
    "alt_hr": "Moderni bazenski paviljon s otvorenim kliznim staklenim stijenama prema kamenoj terasi noću u Vili Tili.",
    "sr_desc_en": "Framed nighttime perspective looking straight into the pool pavilion through expansive retracted sliding glass doors. The interior pool glow contrasts beautifully with the evening patio pavers.",
    "sr_desc_hr": "Noćna fotografija bazenskog paviljona kroz široko otvorene klizne stijene. Unutarnja rasvjeta bazena stvara divan kontrast s popločanom vanjskom terasom."
  },
  {
    "old_name": "IMG-20260916-WA0030-2048.webp",
    "new_name": "vila-tila-daylight-patio-pool-house-pergola.webp",
    "category": "exterior",
    "tags": [
      "exterior",
      "daylight",
      "patio",
      "pool"
    ],
    "title_en": "Vila Tila Sun Terrace & Pool Pavilion in Daylight",
    "title_hr": "Sunčana terasa i bazenski paviljon Vile Tila danju",
    "alt_en": "Daylight exterior view of Vila Tila showing the spacious paved terrace, indoor pool enclosure, A-frame chalet, and hanging egg chair.",
    "alt_hr": "Dnevni vanjski pogled na Vilu Tilu s prostranom kamenom terasom, zatvorenim bazenom i visećom foteljom.",
    "sr_desc_en": "Sunny daytime exterior view displaying the full private outdoor area. The interlocking stone terrace stretches from the glass pool pavilion to the dining gazebo with woven hanging egg chair and the distinctive double A-frame timber villa under a bright sky with light clouds.",
    "sr_desc_hr": "Sunčani dnevni pogled na vanjski prostor Vile Tila. Kamena terasa pruža se od staklenog paviljona s bazenom do sjenice s visećom foteljom i prepoznatljive drvene vile pod plavim nebom."
  },
  {
    "old_name": "IMG-20260916-WA0031-2048.webp",
    "new_name": "vila-tila-dining-room-table-chairs-chandelier.webp",
    "category": "living",
    "tags": [
      "dining",
      "interior",
      "chandelier"
    ],
    "title_en": "Designer Dining Room Table & Velvet Chairs",
    "title_hr": "Dizajnerski blagovaonski stol i baršunaste stolice",
    "alt_en": "Dining area with round dining table, six terracotta and mustard velvet chairs, modern chandelier, and stairs to loft gallery.",
    "alt_hr": "Blagovaonica s okruglim stolom, šest baršunastih stolica u toplim tonovima, modernim lusterom i stubama za galeriju.",
    "sr_desc_en": "A direct view of the dining setting inside Vila Tila, featuring a circular black table set with a decorative cotton vase, surrounded by six comfortable bucket chairs upholstered in warm terracotta and tan velvet, beneath a pill-shaped ring chandelier.",
    "sr_desc_hr": "Izravan pogled na blagovaonski dio Vile Tila: okrugli crni stol s vazom s pamukom, okružen sa šest udobnih baršunastih fotelja u boji terakote i senfa, pod modernim eliptičnim lusterom."
  },
  {
    "old_name": "IMG-20260916-WA0032-2048.webp",
    "new_name": "vila-tila-living-dining-space-patio-view.webp",
    "category": "living",
    "tags": [
      "living",
      "dining",
      "patio",
      "interior"
    ],
    "title_en": "Living & Dining Room Overlooking Sun Terrace",
    "title_hr": "Dnevni i blagovaonski prostor s pogledom na terasu",
    "alt_en": "Vila Tila open living and dining area with large glass patio doors offering direct view and access to the outdoor terrace.",
    "alt_hr": "Dnevni boravak i blagovaonica Vile Tila s velikim staklenim vratima koja vode na sunčanu terasu.",
    "sr_desc_en": "Interior shot captured from beside the structural timber support column, revealing the open-plan dining table, sofa seating, and expansive sliding glass doors that frame the outdoor terrace and greenery beyond.",
    "sr_desc_hr": "Fotografija unutrašnjosti pokraj nosive drvene grede koja prikazuje blagovaonski stol, garnituru za sjedenje i velika staklena vrata s pogledom na terasu i prirodu."
  },
  {
    "old_name": "IMG-20260916-WA0033-2048.webp",
    "new_name": "vila-tila-architectural-staircase-tv-console.webp",
    "category": "living",
    "tags": [
      "living",
      "staircase",
      "interior",
      "tv"
    ],
    "title_en": "Architectural Staircase & Entertainment Console",
    "title_hr": "Arhitektonske stube i TV konzola",
    "alt_en": "Custom black steel and natural wood staircase leading to loft, alongside Smart TV and media cabinet in Vila Tila.",
    "alt_hr": "Dizajnerske stube od crnog čelika i drva koje vode na galeriju, uz Smart TV i multimedijski ormarić.",
    "sr_desc_en": "A view highlighting the custom architectural open staircase with dark metal geometric stringers and light oak treads leading up to the loft. Below the staircase sits a low white media credenza with wide Smart TV and tasteful art decor.",
    "sr_desc_hr": "Prikaz dizajnerskih otvorenih stuba s crnom čeličnom konstrukcijom i hrastovim gazištima koje vode na galeriju. Ispod stuba nalazi se bijeli ormarić sa Smart TV-om i umjetničkim detaljima."
  },
  {
    "old_name": "IMG-20260916-WA0034-2048.webp",
    "new_name": "vila-tila-ground-floor-panoramic-interior-view.webp",
    "category": "living",
    "tags": [
      "living",
      "dining",
      "kitchen",
      "interior"
    ],
    "title_en": "Panoramic View of Ground Floor Living & Kitchen",
    "title_hr": "Panoramski prikaz prizemlja, dnevnog dijela i kuhinje",
    "alt_en": "Comprehensive view of Vila Tila open concept ground floor including dining area, modern kitchen, media wall, and loft rafters.",
    "alt_hr": "Cjeloviti prikaz otvorenog prizemlja Vile Tila uključujući blagovaonicu, kuhinju, TV kutak i stropne grede.",
    "sr_desc_en": "Comprehensive perspective of the ground floor living environment, showcasing the smooth flow between the dining suite, fully equipped culinary kitchen with window, media entertainment setup, and timber-beamed ceiling.",
    "sr_desc_hr": "Sveobuhvatni pogled na prizemlje koji prikazuje skladan prijelaz između blagovaonice, potpuno opremljene moderne kuhinje s prozorom, multimedijskog prostora i drvenih greda."
  },
  {
    "old_name": "IMG-20260916-WA0035-2048.webp",
    "new_name": "vila-tila-front-entrance-laser-cut-gate-exterior.webp",
    "category": "exterior",
    "tags": [
      "exterior",
      "entrance",
      "facade",
      "gate"
    ],
    "title_en": "Front Gated Entrance & Villa Façade",
    "title_hr": "Glavni ulaz s ogradom i pročelje vile",
    "alt_en": "Front entrance of Vila Tila featuring custom laser-cut designer metal security gate, stone pillars, 4-star tourism plaque, and private parking driveway.",
    "alt_hr": "Prednji ulaz u Vilu Tilu s modernim metalnim vratima, kamenim stupovima, pločom s 4 zvjezdice i privatnim parkingom.",
    "sr_desc_en": "Exterior street-level view of the property entrance. Features a handsome laser-cut geometric charcoal security gate set between textured pillars, carrying the official 'Vila Tila ****' categorization sign. Behind the gate is the paved three-car parking court and golden timber chalet.",
    "sr_desc_hr": "Pogled s ulice na ulaz na posjed: moderna antracit metalna vrata s geometrijskim uzorkom između stupova na kojima se nalazi službena ploča 'Vila Tila ****'. U pozadini je popločano dvorište s parkingom za 3 auta i drvena vila."
  },
  {
    "old_name": "IMG-20260916-WA0036-2048.webp",
    "new_name": "river-gacka-serene-cloud-reflection-landscape.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "river",
      "landscape"
    ],
    "title_en": "River Gacka Serene Water & Cloud Reflection",
    "title_hr": "Rijeka Gacka i odsjaj oblaka na mirnoj vodi",
    "alt_en": "Serene landscape photograph of the pristine river Gacka reflecting white clouds, bordered by reeds, lush trees, and distant hills.",
    "alt_hr": "Prekrasan pejzaž mirne rijeke Gacke s odsjajem bijelih oblaka, obalama obraslim trskom i šumovitim brežuljcima.",
    "sr_desc_en": "Picturesque nature photograph of the Gacka river in the calm morning. The mirror-smooth surface of the emerald river reflects towering cumulus clouds and gentle green riverbank vegetation.",
    "sr_desc_hr": "Slikovita fotografija rijeke Gacke u mirno jutro. Zrcalna površina smaragdne rijeke odražava bijele oblake i bujno zelenilo uz obalu."
  },
  {
    "old_name": "IMG-20260916-WA0038-2048.webp",
    "new_name": "vila-tila-outdoor-terrace-wooden-bar-night.webp",
    "category": "exterior",
    "tags": [
      "terrace",
      "bar",
      "night",
      "exterior"
    ],
    "title_en": "Outdoor Timber Bar Counter on Terrace at Night",
    "title_hr": "Vanjski drveni šank na terasi noću",
    "alt_en": "Handcrafted wooden outdoor bar counter and high stool on the illuminated terrace of Vila Tila at night.",
    "alt_hr": "Ručno izrađeni drveni vanjski šank i barska stolica na osvijetljenoj terasi Vile Tila noću.",
    "sr_desc_en": "A cozy perspective of the illuminated terrace at night featuring a custom solid wood outdoor bar counter and wicker bar stool positioned beneath the villa's overhanging eaves, with the pool pavilion visible across the paving.",
    "sr_desc_hr": "Ugodan noćni pogled na osvijetljenu terasu s unikatnim drvenim vanjskim šankom i visokom stolicom ispod strehe vile, s pogledom na bazen."
  },
  {
    "old_name": "IMG-20260916-WA0039-2048.webp",
    "new_name": "vila-tila-grand-living-room-timber-loft-view.webp",
    "category": "living",
    "tags": [
      "living",
      "architecture",
      "interior",
      "loft"
    ],
    "title_en": "Grand Chalet Living Room & Timber Mezzanine",
    "title_hr": "Prostrani dnevni boravak i drvena galerija",
    "alt_en": "Vila Tila open chalet living hall showing exposed spruce rafters, dining table, kitchen, modern sofa, and mezzanine railing.",
    "alt_hr": "Dnevni prostor Vile Tila s vidljivim drvenim gredama, blagovaonskim stolom, kuhinjom i ogradom galerije na katu.",
    "sr_desc_en": "Wide architectural view of the chalet interior showing the two-story volume. Warm integrated lighting washes the spruce ceiling and mezzanine floor above, while the ground level integrates dining, kitchen, and lounge areas seamlessly.",
    "sr_desc_hr": "Široki arhitektonski pogled na unutrašnjost vile koji prikazuje dvostruku visinu prostora. Topla ugrađena rasvjeta naglašava drveni strop i galeriju, dok prizemlje povezuje blagovaonicu, kuhinju i boravak."
  },
  {
    "old_name": "IMG-20260916-WA0040-2048.webp",
    "new_name": "river-gacka-karst-stone-emerald-springs.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "river",
      "springs"
    ],
    "title_en": "River Gacka Karst Rocks & Crystal Clear Flow",
    "title_hr": "Rijeka Gacka, kraške stijene i bistra izvorska voda",
    "alt_en": "Crystal clear green waters of river Gacka flowing beside natural limestone karst boulders and lush wildflower riverbank in Lika.",
    "alt_hr": "Kristalno čista zelena voda rijeke Gacke uz prirodne vapnenačke stijene i cvjetnu obalu u Lici.",
    "sr_desc_en": "Vibrant nature photograph captured on the banks of the Gacka river. Rugged karst limestone rocks sit along the grassy shore where translucent spring water rushes past, revealing sub-surface moss and stones in exquisite detail.",
    "sr_desc_hr": "Fotografija obale rijeke Gacke s vapnenačkim stijenama uz travnatu obalu, gdje bistra izvorska voda teče otkrivajući detalje riječnog dna."
  },
  {
    "old_name": "IMG-20260916-WA0041-2048.webp",
    "new_name": "river-gacka-morning-mist-crystal-emerald-water.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "river",
      "mist"
    ],
    "title_en": "River Gacka Morning Mist & Transparent Waters",
    "title_hr": "Jutarnja maglica i prozirna voda rijeke Gacke",
    "alt_en": "Morning sun and gentle mist rising over the crystal clear emerald green waters of river Gacka, famous for fly fishing.",
    "alt_hr": "Jutarnje sunce i maglica nad kristalno bistrom smaragdnom vodom rijeke Gacke, svjetski poznate po ribolovu.",
    "sr_desc_en": "Magical morning scene along river Gacka showing gentle dawn mist floating above the emerald-tinted, mirror-like water surface. Underwater aquatic plants are clearly visible through the immaculate current.",
    "sr_desc_hr": "Čarobni jutarnji prizor rijeke Gacke s laganom maglicom koja lebdi iznad smaragdne vode. Kroz kristalno čistu vodu jasno se vidi podvodno raslinje."
  },
  {
    "old_name": "IMG-20260916-WA0042-2048.webp",
    "new_name": "river-gacka-kayaking-perspective-reed-banks.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "kayak",
      "river"
    ],
    "title_en": "Kayaking View on the Tranquil River Gacka",
    "title_hr": "Pogled iz kajaka na mirnu rijeku Gacku",
    "alt_en": "Water-level kayaking viewpoint along the serene river Gacka with lush green reeds, trees, and soft morning sky.",
    "alt_hr": "Pogled s razine vode tijekom vožnje kajakom mirnom rijekom Gackom uz zelenu trsku i obalno drveće.",
    "sr_desc_en": "First-person low-water perspective ideal for kayakers and canoeists, drifting down the peaceful Gacka river flanked by vibrant green marsh reeds, willows, and calm reflections.",
    "sr_desc_hr": "Perspektiva s razine rijeke idealna za kajakaše i veslače koji uživaju u mirnoj plovidbi Gackom okruženoj trskom, vrbama i odrazima u vodi."
  },
  {
    "old_name": "IMG-20260916-WA0043-2048.webp",
    "new_name": "river-gacka-golden-sunrise-mist-reflection.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "sunrise",
      "river"
    ],
    "title_en": "Golden Sunrise Over Misty River Gacka",
    "title_hr": "Zlatni izlazak sunca nad maglovitom rijekom Gackom",
    "alt_en": "Atmospheric golden sunrise glowing through morning mist above the shimmering ripples of river Gacka.",
    "alt_hr": "Upečatljiv zlatni izlazak sunca kroz jutarnju maglicu iznad ljeskajuće vode rijeke Gacke.",
    "sr_desc_en": "Dramatic golden-hour photograph showing the glowing sun cutting through early morning fog above the river Gacka, creating shimmering golden light ripples across the dark tranquil water.",
    "sr_desc_hr": "Fotografija zlatnog sata s ranim jutarnjim suncem koje se probija kroz maglu iznad rijeke Gacke, stvarajući zlatne odsjaje na vodi."
  },
  {
    "old_name": "IMG-20260916-WA0044-2048.webp",
    "new_name": "lika-landscape-velebit-mountains-gacka-valley.webp",
    "category": "nature",
    "tags": [
      "nature",
      "lika",
      "velebit",
      "mountains",
      "aerial"
    ],
    "title_en": "Panoramic Aerial View of Lika Valley & Velebit Hills",
    "title_hr": "Panoramski zračni pogled na Ličko polje i Velebit",
    "alt_en": "Expansive aerial landscape of Lika valley, river Gacka, forested hills, and distant Velebit mountains under sunny skies.",
    "alt_hr": "Prostrani zračni pejzaž doline u Lici, rijeke Gacke, šumovitih brežuljaka i Velebita pod sunčanim nebom.",
    "sr_desc_en": "High panoramic landscape photo showing the sweeping expanse of the Lika countryside with emerald meadows, the glistening path of river Gacka, and densely forested dark green mountains stretching toward the horizon.",
    "sr_desc_hr": "Visoka panoramska fotografija koja prikazuje prostranstvo ličkog kraja sa smaragdnim livadama, tokom rijeke Gacke i šumovitim planinama koje se pružaju prema horizontu."
  },
  {
    "old_name": "IMG-20260916-WA0045-2048.webp",
    "new_name": "river-gacka-wildflower-reeds-emerald-spring.webp",
    "category": "nature",
    "tags": [
      "nature",
      "gacka",
      "flora",
      "river"
    ],
    "title_en": "River Gacka Reeds, Flora & Pure Spring Water",
    "title_hr": "Trska, obalno bilje i bistra izvorska voda Gacke",
    "alt_en": "Close-up of vibrant green marsh plants and water grasses along the crystal-clear emerald waters of river Gacka.",
    "alt_hr": "Bliži pogled na bujnu zelenu trsku i vodeno bilje duž kristalno bistre smaragdne vode rijeke Gacke.",
    "sr_desc_en": "Lush foreground view of pointed green reeds and grass growing densely along the shore of river Gacka. The crystal water reflects the quiet morning forest on the opposing bank.",
    "sr_desc_hr": "Bujni prikaz zelene trske i trave uz samu obalu rijeke Gacke. Kristalno čista voda odražava mirnu jutarnju šumu na suprotnoj obali."
  }
];

const TRANSLATIONS = {
  "en": {
    "pageTitle": "Vila Tila | Luxury 5-Star Villa with Heated Indoor Pool & Sauna | Otočac, Croatia",
    "metaDesc": "Exclusive 5-star holiday villa in Otočac, Lika. Heated indoor pool (21m²), private Finnish sauna, EV charger, 160m² luxury wood & stone design, and peaceful nature by river Gacka.",
    "skipLink": "Skip to main content",
    "brand": {
      "name": "Vila Tila",
      "starsAria": "5 Star Luxury Villa"
    },
    "nav": {
      "about": "The Villa",
      "wellness": "Pool & Sauna",
      "spaces": "Spaces",
      "gallery": "Gallery",
      "surroundings": "Surroundings",
      "location": "Location",
      "amenities": "House Rules",
      "contact": "Inquiry",
      "bookNow": "Book Now",
      "menuAria": "Toggle navigation menu",
      "langSwitchAria": "Switch language to Croatian",
      "themeToggleAria": "Switch to light theme",
      "themeLightAria": "Switch to dark theme",
      "themeDarkAria": "Switch to light theme"
    },
    "hero": {
      "badge": "5-Star Luxury Private Villa • Otočac, Lika",
      "title": "Where Alpine Elegance Meets Pure Serenity",
      "subtitle": "An exclusive 160 m² architectural wooden retreat with a year-round heated indoor pool, private Finnish sauna, and panoramic views of the idyllic Gacka river valley.",
      "ctaGallery": "Explore Gallery (43 Photos)",
      "ctaBook": "Inquire & Book",
      "novasolBtn": "Novasol CCL380",
      "statGuests": "Up to 4 Guests",
      "subGuests": "Adults Only Sanctuary",
      "statPool": "Heated Indoor Pool",
      "subPool": "21 m² • 365 Days",
      "statSauna": "Finnish Sauna",
      "subSauna": "Authentic Timber Sauna",
      "statArea": "160 m² Living Space",
      "subArea": "Wood & Stone Craft"
    },
    "bookingBar": {
      "checkIn": "Check-in Date",
      "checkOut": "Check-out Date",
      "guests": "Guests",
      "adultsOnly": "Adults Only (Max 4)",
      "checkAvailability": "Check Dates",
      "directBooking": "Official Novasol Listing (CCL380)",
      "novasolNote": "Instant booking with real-time calendar availability, secure payment, and official guest guarantees."
    },
    "highlights": {
      "tag": "Exclusive Highlights",
      "title": "A Masterpiece of Natural Timber and Modern Luxury",
      "poolTitle": "Year-Round Heated Pool",
      "poolDesc": "21 m² private indoor pool heated 365 days a year with starry sky LED ceiling and retractable glass walls opening to the sun terrace.",
      "saunaTitle": "Private Finnish Sauna",
      "saunaDesc": "Handcrafted wooden sauna cabin inside the wellness pavilion for the ultimate post-hike thermal detox.",
      "architectureTitle": "Wood & Stone Architecture",
      "architectureDesc": "Custom A-frame timber craftsmanship built in 2026, combining authentic Lika tradition with sleek modern interiors.",
      "evTitle": "Private EV Charger",
      "evDesc": "Complimentary electric vehicle charging station right inside your private secure 3-car parking court.",
      "peaceTitle": "Adults-Only Tranquility",
      "peaceDesc": "Designed as an idyllic sanctuary for couples and adults seeking uninterrupted silence, crisp mountain air, and wellness.",
      "natureTitle": "Pristine Gacka Nature",
      "natureDesc": "Just moments from the world-famous crystal springs of river Gacka, Northern Velebit National Park, and Plitvice Lakes."
    },
    "about": {
      "tag": "Architectural Haven",
      "title": "A Masterpiece of Natural Timber and Modern Luxury",
      "p1": "Nestled in the tranquil settlement of Prozor near Otočac, Vila Tila is an architectural marvel created for discerning travelers who value privacy, comfort, and deep immersion into pristine nature.",
      "p2": "Constructed with natural wood timbers and indigenous stone, the 160 m² villa seamlessly merges authentic alpine charm with contemporary designer aesthetics. High cathedral ceilings and soaring triangular gable windows fill the interior with golden Lika sunlight, while the loft mezzanine offers an intimate vantage over the living salon.",
      "p3": "Whether taking a morning swim in the private heated pool, warming up in the Finnish cedar sauna after a day of fly fishing along the Gacka, or dining beneath the stars on the illuminated terrace, Vila Tila provides an unforgettable holiday experience.",
      "specGrade": "5-Star Categorization",
      "specCapacity": "4 Adults Capacity",
      "specBedrooms": "2 Luxury Suites",
      "specBathrooms": "2 Bathrooms + 2 Toilets",
      "specBuilt": "Built & Designed 2026",
      "specFenced": "Fully Enclosed (120 cm fence)",
      "badgeTitle": "Vila Tila",
      "badgeSub": "Otočac • Prozor • Croatia"
    },
    "wellness": {
      "tag": "Private Wellness Oasis",
      "title": "Heated Pool & Finnish Sauna Open 365 Days a Year",
      "desc": "Step inside your private glass wellness sanctuary. The centerpiece is a 21 m² heated indoor pool maintained at optimal soothing temperature, illuminated with submerged lights and a bespoke starry sky LED ceiling panel. Through sliding glass walls, the pool area opens directly onto the paved limestone sun deck.",
      "feature1Title": "Heated Indoor Pool (21 m²)",
      "feature1Desc": "Custom built with integrated shallow entry steps, constant temperature control, and marble accent walls.",
      "feature2Title": "Finnish Dry Sauna",
      "feature2Desc": "Authentic timber thermal sauna cabin offering complete bodily rejuvenation and stress relief.",
      "feature3Title": "Indoor-Outdoor Harmony",
      "feature3Desc": "Expansive glass doors slide away to connect the pool room with the sun deck, loungers, and mountain breeze.",
      "feature4Title": "Dedicated Climate System",
      "feature4Desc": "Independent heating, dehumidification, and climate control ensure tropical comfort in all seasons."
    },
    "night": {
      "tag": "Nighttime Magic",
      "title": "Enchanting Evenings Under Starlit Mountain Skies",
      "desc": "As twilight blankets the valley, Vila Tila transforms into a breathtaking illuminated sanctuary. Warm architectural lighting outlines the steep wooden gables, the paved terrace glow guides your way to the outdoor bar, and the private pool shines with vibrant blue luminescence under the crisp Lika night sky.",
      "btn": "View Gallery Photos"
    },
    "spaces": {
      "tag": "Explore The Interior",
      "title": "Designed for Uncompromising Comfort & Style",
      "livingTitle": "Cathedral Living Room & Mezzanine Gallery",
      "livingDesc": "Double-height cathedral ceilings with exposed spruce timber beams, plush fabric sofa, designer fluted coffee table, 55-inch Smart TV with cable, and a custom steel-wood staircase leading to the mezzanine reading lounge.",
      "kitchenTitle": "Gourmet Culinary Kitchen & 6-Person Dining",
      "kitchenDesc": "High-spec modern kitchen featuring a 4-zone induction cooktop, convection oven, dishwasher, large refrigerator with 20L freezer, espresso coffee machine, and an elegant circular dining table with ochre and terracotta velvet armchairs.",
      "bedroomTitle": "Two Opulent King-Size Bedroom Suites",
      "bedroomDesc": "Two master suites equipped with plush king beds, tufted headboards, natural spruce plank paneling, independent heating and cooling air conditioning, flat-screen Smart TVs, and dedicated vanity dressing tables with gold mirrors.",
      "bathroomTitle": "Designer Bathrooms with Walk-In Rain Showers",
      "bathroomDesc": "Two luxurious bathrooms featuring walk-in frameless glass rain showers, fluted cylindrical vanity basins, smart backlit LED mirrors, hair dryers, and washing machine, accompanied by two separate guest toilets.",
      "outdoorTitle": "Sun Deck, Pergola & Summer Barbecue Kitchen",
      "outdoorDesc": "Generous paved courtyard featuring 4 premium sun loungers, an outdoor shower, a covered dining gazebo with electric barbecue grill, food prep counter with sink, hanging egg swing, and handcrafted wooden cocktail bar.",
      "parkingTitle": "Private Parking & EV Charging",
      "parkingDesc": "3 private parking bays within the enclosed gated property, equipped with private EV electric vehicle charger.",
      "tags": {
        "doubleHeight": "Double Height Ceiling",
        "tv55": "55\" Smart TV",
        "loftMezzanine": "Loft Mezzanine",
        "floorHeating": "Floor Heating",
        "induction": "Induction Cooktop",
        "dishwasher": "Dishwasher",
        "espresso": "Espresso Machine",
        "dining6": "Dining for 6",
        "beds2": "2 King-Size Beds",
        "smartTvRooms": "Smart TVs in Rooms",
        "individualAc": "Individual A/C",
        "vanityDesks": "Vanity Desks",
        "showers2": "2 Rain Showers",
        "toilets2": "2 Extra Toilets",
        "washingMachine": "Washing Machine",
        "ledMirrors": "LED Mirrors",
        "electricBbq": "Electric BBQ Grill",
        "outdoorDining": "Outdoor Dining",
        "loungers4": "4 Sun Loungers",
        "terraceBar": "Wooden Terrace Bar",
        "evCharger": "EV Fast Charger",
        "parking3": "3 Parking Spots",
        "autoGate": "Automated Gate",
        "perimeter120": "120 cm Perimeter"
      }
    },
    "gallery": {
      "tag": "Visual Experience",
      "title": "Every Detail Captured in High Definition",
      "subtitle": "Browse 43 verified high-resolution photographs of Vila Tila and the surrounding natural paradise of Lika.",
      "filterAll": "All Photos (43)",
      "filterExterior": "Architecture & Exterior",
      "filterPool": "Pool & Wellness",
      "filterLiving": "Living & Dining",
      "filterRooms": "Bedrooms & Bathrooms",
      "filterNature": "River Gacka & Lika",
      "photoCount": "Photos",
      "openLightbox": "View image full screen",
      "imageDetails": "Image Information & Screen Reader Description",
      "readDesc": "Screen Reader Description:",
      "category": "Category",
      "fileLabel": "Filename",
      "liveStatus": "Showing 43 photos"
    },
    "lightbox": {
      "prevAria": "Previous image (Left Arrow Key)",
      "nextAria": "Next image (Right Arrow Key)",
      "closeAria": "Close image viewer (Press Escape)",
      "zoomAria": "Toggle full image zoom",
      "descAria": "Toggle detailed description",
      "counter": "Image {current} of {total}"
    },
    "surroundings": {
      "tag": "Pristine Nature",
      "title": "Discover the Magic of River Gacka & Lika",
      "subtitle": "Renowned worldwide for its legendary clarity, emerald hues, and European grayling and brown trout, river Gacka is an outdoor paradise right at your doorstep.",
      "activity1Title": "World-Class Fly Fishing",
      "activity1Desc": "River Gacka is globally famous among fly fishermen for its exceptional trout populations and tranquil waters open year-round.",
      "activity2Title": "Scenic Kayaking & Canoeing",
      "activity2Desc": "Glide silently through mirror-like turquoise waters surrounded by water lilies, reed beds, and mountain vistas.",
      "activity3Title": "Hiking & Cycling Trails",
      "activity3Desc": "Marked walking and cycling paths begin just 20 meters from the villa, leading through pastoral meadows and forested hills.",
      "activity4Title": "National Parks Within Reach",
      "activity4Desc": "Convenient day trips to UNESCO Plitvice Lakes National Park (~45 min) and Northern Velebit National Park (~35 min).",
      "activity5Title": "Adriatic Sea & Coastal Riviera",
      "activity5Desc": "Drive across the scenic Velebit pass down to the historic coastal fortress town of Senj and Adriatic pebble beaches in just 30 minutes."
    },
    "location": {
      "tag": "Location & Travel",
      "title": "Easy to Reach, Hard to Leave",
      "addressLabel": "Exact Address",
      "address": "Prozor, 53220 Otočac, Lika-Senj County, Croatia",
      "gpsLabel": "GPS Coordinates",
      "copyAddress": "Copy Coordinates (44.8364, 15.2612)",
      "copiedToast": "Coordinates copied to clipboard!",
      "openMaps": "Open in Google Maps",
      "mapBadgePlace": "Prozor, Otočac (Lika)",
      "directionsBtn": "Directions",
      "distShop": "Local Grocery Store",
      "distShopVal": "200 m (2 min walk)",
      "distTrail": "Marked Hiking Trails",
      "distTrailVal": "20 m (at doorstep)",
      "distTown": "Otočac Town Center & Tennis",
      "distTownVal": "4 km (5 min drive)",
      "distGacka": "River Gacka (Fishing & Kayak)",
      "distGackaVal": "6 km (7 min drive)",
      "distPlitvice": "Plitvice Lakes National Park",
      "distPlitviceVal": "48 km (~45 min drive)",
      "distVelebit": "Northern Velebit National Park",
      "distVelebitVal": "38 km (~35 min drive)",
      "distSea": "Adriatic Sea / Senj Beach",
      "distSeaVal": "29 km (~30 min drive)",
      "distAirport": "Zadar Airport (ZAD)",
      "distAirportVal": "140 km (~1h 25m drive)"
    },
    "rules": {
      "tag": "Key Information",
      "title": "Property Specifications & Policies",
      "checkInTitle": "Check-In & Check-Out",
      "checkInDesc": "Check-in: From 16:00 (4:00 PM) • Check-out: By 10:00 AM. Flexible keyless check-in available.",
      "capacityTitle": "Occupancy & Adults Only",
      "capacityDesc": "Strict maximum capacity of 4 adults. Designed exclusively for peaceful adult retreats; property is not equipped for infants or young children.",
      "smokingTitle": "Non-Smoking Property",
      "smokingDesc": "100% non-smoking inside the villa and pool pavilion. Dedicated outdoor smoking areas available on the terrace.",
      "petsTitle": "Pet Policy",
      "petsDesc": "No pets allowed to preserve allergen-free cleanliness and hygiene standards for all guests.",
      "parkingTitle": "Private Parking & EV Charging",
      "parkingDesc": "3 private parking bays within the enclosed gated property, equipped with private EV electric vehicle charger.",
      "utilitiesTitle": "All Inclusive Rates",
      "utilitiesDesc": "All utilities (electricity, water, floor heating, AC, pool heating, high-speed WiFi, bed linen, and bath towels) are included."
    },
    "faq": {
      "tag": "Frequently Asked Questions",
      "title": "Everything You Need to Know",
      "q1": "Is the indoor pool heated during the winter months?",
      "a1": "Yes! The private indoor pool is heated and fully operational 365 days a year, keeping water temperature comfortably warm regardless of outdoor weather.",
      "q2": "How do we book and what are the payment terms?",
      "a2": "You can book directly through our official Novasol listing (property code CCL380) for instant confirmation and buyer protection, or submit an inquiry using our website form for direct host assistance.",
      "q3": "Is there an EV charger on the property?",
      "a3": "Yes, a private electric vehicle charging station is located directly on the paved parking area inside the gated fence, available for guest use.",
      "q4": "Can we walk to the river Gacka from the villa?",
      "a4": "Yes, lovely walking and hiking trails start just 20 meters from our doorstep. The main fishing and kayaking spots on river Gacka are an easy 5-7 minute drive (6 km).",
      "q5": "Is the villa fully private and enclosed?",
      "a5": "Absolutely. Vila Tila is entirely private for your exclusive group only. The entire property is enclosed with a 120 cm perimeter fence and a designer security gate."
    },
    "inquiry": {
      "tag": "Inquire & Reserve",
      "title": "Plan Your Escape to Vila Tila",
      "subtitle": "Send us a direct inquiry for tailored assistance, or book with instant confirmation on Novasol.",
      "fullName": "Your Full Name",
      "email": "Email Address",
      "phone": "Phone / WhatsApp",
      "checkIn": "Check-in Date (DD/MM/YYYY)",
      "checkOut": "Check-out Date (DD/MM/YYYY)",
      "guests": "Number of Guests",
      "opt2": "2 Adults",
      "opt3": "3 Adults",
      "opt4": "4 Adults (Maximum Capacity)",
      "message": "Special Requests or Questions",
      "submitBtn": "Send Inquiry",
      "successMsg": "Thank you! Your inquiry has been received. The host will contact you within 24 hours.",
      "novasolBadge": "Instant Booking Partner",
      "novasolTitle": "Official Novasol Listing (CCL380)",
      "novasolDesc": "Instant booking with real-time calendar availability, secure payment, and official guest guarantees.",
      "novasolFeat1": "5-Star Verified Quality Inspection",
      "novasolFeat2": "All-Inclusive Utility Costs Included",
      "novasolFeat3": "Immediate Booking Confirmation",
      "novasolFeat4": "Customer Care & Traveler Protection",
      "novasolBtn": "View Live Availability on Novasol",
      "dateFormatHint": "Format: DD/MM/YYYY (e.g. 25/09/2026)",
      "dateErrorInvalid": "Please enter valid dates in DD/MM/YYYY format.",
      "dateErrorPast": "Check-in date cannot be in the past.",
      "dateErrorOrder": "Check-out date must be after check-in date.",
      "namePlaceholder": "John Doe",
      "emailPlaceholder": "john@example.com",
      "phonePlaceholder": "+385 91 123 4567",
      "messagePlaceholder": "Tell us about your trip, preferred dates, or special requests...",
      "checkInPlaceholder": "dd/mm/yyyy",
      "checkOutPlaceholder": "dd/mm/yyyy",
      "gdprConsent": "I agree to the processing of my details to handle this inquiry in accordance with the Privacy Policy."
    },
    "cookies": {
      "title": "Privacy & Cookies",
      "text": "We only use essential functional storage (such as language preference) to deliver a seamless experience. We do not use third-party tracking or advertising cookies.",
      "acceptBtn": "Accept",
      "policyBtn": "Privacy Policy"
    },
    "privacy": {
      "modalTitle": "Privacy Policy & GDPR Statement",
      "controllerTitle": "1. Data Controller",
      "controllerText": "Vila Tila (Novasol CCL380), Prozor, Otočac, Lika-Senj County, Croatia. For privacy inquiries, contact us via the official inquiry form.",
      "purposeTitle": "2. Purpose of Data Processing",
      "purposeText": "Personal information provided in the inquiry form (name, email, phone number) is processed solely for answering your booking inquiries and organizing your stay.",
      "legalTitle": "3. Legal Basis & Retention",
      "legalText": "Data is processed under GDPR Article 6(1)(b) (pre-contractual steps) and retained only for the duration necessary to manage your booking request.",
      "rightsTitle": "4. Your Rights",
      "rightsText": "You have the right to request access to, rectification of, or erasure of your personal data at any time. You also have the right to lodge a complaint with the Croatian Personal Data Protection Agency (AZOP).",
      "closeBtn": "Close Privacy Policy"
    },
    "footer": {
      "tagline": "Exclusive 5-star private villa with heated indoor pool, Finnish sauna, and alpine comfort in the heart of Lika, Croatia.",
      "navigation": "Navigation",
      "contact": "Contact & Details",
      "address": "Prozor, 53220 Otočac, Croatia",
      "legal": "Novasol Code: CCL380",
      "category": "5-Star Luxury Tourist Rental",
      "ev": "Private EV Fast Charger On-site",
      "rights": "All rights reserved. Vila Tila © 2026.",
      "accessibility": "WCAG 2.2 AA/AAA Compliant • Optimized for Screen Readers",
      "backToTopAria": "Back to top"
    }
  },
  "hr": {
    "pageTitle": "Vila Tila | Luksuzna kuća za odmor s 5 zvjezdica, grijanim bazenom i saunom | Otočac",
    "metaDesc": "Ekskluzivna kuća za odmor s 5 zvjezdica u Otočcu, Lika. Grijani unutarnji bazen (21 m²), finska sauna, EV punjač, 160 m² luksuzne drvene gradnje uz rijeku Gacku.",
    "skipLink": "Pređi na glavni sadržaj",
    "brand": {
      "name": "Vila Tila",
      "starsAria": "Luksuzna kuća za odmor s 5 zvjezdica"
    },
    "nav": {
      "about": "O vili",
      "wellness": "Bazen i sauna",
      "spaces": "Prostori",
      "gallery": "Galerija",
      "surroundings": "Dolina Gacke",
      "location": "Lokacija",
      "amenities": "Kućni red",
      "contact": "Upit",
      "bookNow": "Rezerviraj",
      "menuAria": "Otvori navigacijski izbornik",
      "langSwitchAria": "Prebaci jezik na engleski",
      "themeToggleAria": "Prebaci na svijetlu temu",
      "themeLightAria": "Prebaci na tamnu temu",
      "themeDarkAria": "Prebaci na svijetlu temu"
    },
    "hero": {
      "badge": "Luksuzna kuća za odmor s 5 zvjezdica • Otočac, Lika",
      "title": "Gdje se planinski stil susreće s čistim ličkim mirom",
      "subtitle": "Ekskluzivna drvena kuća za odmor od 160 m² s grijanim unutarnjim bazenom dostupnim svih 365 dana u godini, finskom saunom i pogledom na netaknutu dolinu rijeke Gacke.",
      "ctaGallery": "Pogledajte galeriju (43 slike)",
      "ctaBook": "Pošaljite upit",
      "novasolBtn": "Novasol CCL380",
      "statGuests": "Do 4 odrasle osobe",
      "subGuests": "Mirna oaza za odrasle",
      "statPool": "Grijani unutarnji bazen",
      "subPool": "21 m² • Cijele godine",
      "statSauna": "Finska sauna",
      "subSauna": "Prirodno drvo i relaksacija",
      "statArea": "160 m² površine",
      "subArea": "Privatna drvena kuća"
    },
    "bookingBar": {
      "checkIn": "Datum dolaska",
      "checkOut": "Datum odlaska",
      "guests": "Broj gostiju",
      "adultsOnly": "Samo odrasli (maks. 4)",
      "checkAvailability": "Provjeri datume",
      "directBooking": "Službena Novasol stranica (CCL380)",
      "novasolNote": "Trenutačna rezervacija uz provjeru kalendara uživo, sigurno plaćanje i službena jamstva za goste."
    },
    "highlights": {
      "tag": "Ekskluzivne pogodnosti",
      "title": "Vrhunski spoj prirodnog drva, kamena i modernog luksuza",
      "poolTitle": "Grijani unutarnji bazen",
      "poolDesc": "Privatni unutarnji bazen površine 21 m² s temperaturom vode prilagođenom za uživanje kroz svih 365 dana u godini, krovnim svjetlosnim panelom i staklenim stijenama prema sunčalištu.",
      "saunaTitle": "Autentična finska sauna",
      "saunaDesc": "Vrhunska suha sauna od prirodnog drva unutar bazenskog prostora za potpunu detoksikaciju i revitalizaciju nakon boravka u prirodi.",
      "architectureTitle": "Gradnja od drva i kamena",
      "architectureDesc": "Unikatna planinska drvena A-arhitektura izgrađena i uređena 2026. godine, skladan spoj tradicije Like i suvremenog dizajna.",
      "evTitle": "Punionica za električna vozila",
      "evDesc": "Vlastiti brzi punjač za električne automobile u sklopu ograđenog i sigurnog privatnog parkinga za tri vozila.",
      "peaceTitle": "Potpuni mir za odrasle",
      "peaceDesc": "Vila je koncipirana kao utočište za parove i odrasle goste koji traže intimu, tišinu i opuštanje u prirodi (nije prilagođeno maloj djeci).",
      "natureTitle": "Čista priroda uz rijeku Gacku",
      "natureDesc": "Nekoliko minuta od svjetski poznatih izvora bistre rijeke Gacke, Nacionalnog parka Sjeverni Velebit i Plitvičkih jezera."
    },
    "about": {
      "tag": "Arhitektonsko utočište",
      "title": "Remek-djelo prirodnog drva i vrhunskog komfora",
      "p1": "Smještena u pitomom ličkom naselju Prozor pokraj Otočca, Vila Tila pruža izniman doživljaj odmora za goste koji cijene potpunu privatnost, komfor i neposredan dodir s prirodom.",
      "p2": "Izgrađena od masivnih drvenih greda i autohtonog kamena, ova kuća za odmor od 160 m² spaja toplinu planinske kuće s modernim dizajnerskim rješenjima. Visoki otvoreni stropovi i krovni prozori obasjavaju prostor prirodnim svjetlom, dok prostrana galerija na katu pruža miran kutak s pogledom na salon.",
      "p3": "Bilo da započinjete jutro plivanjem u grijanom bazenu, opuštate se u finskoj sauni nakon mušičarenja na rijeci Gacki ili provodite ugodnu večer na osvijetljenoj terasi uz roštilj, Vila Tila jamči istinski odmor za dušu i tijelo.",
      "specGrade": "Kategorizacija: 5 zvjezdica",
      "specCapacity": "Kapacitet: do 4 odrasle osobe",
      "specBedrooms": "2 raskošne spavaće sobe",
      "specBathrooms": "2 kupaonice + 2 zasebna WC-a",
      "specBuilt": "Godina izgradnje i uređenja: 2026.",
      "specFenced": "Potpuno ograđeno imanje (visina 120 cm)",
      "badgeTitle": "Vila Tila",
      "badgeSub": "Otočac • Prozor • Hrvatska"
    },
    "wellness": {
      "tag": "Privatna wellness oaza",
      "title": "Grijani bazen i finska sauna otvoreni svih 365 dana u godini",
      "desc": "Prepustite se privatnom wellness doživljaju. Središte čini unutarnji bazen od 21 m² stalno grijan na ugodnu temperaturu, opremljen podvodnom rasvjetom i stropom sa zvjezdanim nebom. Zahvaljujući velikim kliznim staklenim stijenama, bazenski se prostor u toplijim danima u cijelosti otvara prema vanjskom kamenom sunčalištu.",
      "feature1Title": "Grijani unutarnji bazen (21 m²)",
      "feature1Desc": "Izveden s ugrađenim plitkim stepenicama za ugodan ulazak, mramornim detaljima i stalnom regulacijom temperature.",
      "feature2Title": "Finska suha sauna",
      "feature2Desc": "Tradicionalna sauna od plemenitog drva za detoksikaciju, opuštanje mišića i oslobađanje od stresa.",
      "feature3Title": "Povezanost s prirodom",
      "feature3Desc": "Klizne staklene stijene omogućuju potpuno spajanje bazena sa sunčanom terasom i svježim ličkim zrakom.",
      "feature4Title": "Zasebna mikroklima",
      "feature4Desc": "Nezavisno podno grijanje, odvlaživanje i ventilacija osiguravaju idealan ugođaj u svakom godišnjem dobu."
    },
    "night": {
      "tag": "Noćni ugođaj",
      "title": "Čarobne večeri pod zvjezdanim ličkim nebom",
      "desc": "Kada se spusti sumrak, Vila Tila poprima bajkovito ozračje. Tople linije rasvjete naglašavaju strme drvene krovove, popločano dvorište vodi prema vanjskom šanku i pergoli, a tirkizni bazen diskretno svijetli pod bistrim zvjezdanim nebom.",
      "btn": "Pogledajte galeriju fotografija"
    },
    "spaces": {
      "tag": "Raspored i prostor",
      "title": "Osmišljeno za besprijekoran komfor i stil",
      "livingTitle": "Dnevni boravak visokog stropa i galerija",
      "livingDesc": "Otvoreni prostor visine do krovnog sljemena s vidljivim smrekovim gredama, modernim kaučem, dizajnerskim stolićem, velikim 55\" Smart TV-om i unikatnim stubištem koje vodi na galeriju za čitanje.",
      "kitchenTitle": "Vrhunska kuhinja i blagovaonica za 6 osoba",
      "kitchenDesc": "Potpuno opremljena kuhinja s indukcijskom pločom (4 zone), pećnicom, perilicom posuđa, hladnjakom s pretincem za zamrzavanje (20 l), aparatom za kavu te okruglim stolom sa šest udobnih fotelja.",
      "bedroomTitle": "Dvije prostrane sobe s bračnim krevetima",
      "bedroomDesc": "Dvije elegantne spavaće sobe s udobnim bračnim krevetima, tapeciranim uzglavljima, prirodnim drvenim zidovima, zasebnim klima-uređajima, Smart TV-ima i toaletnim stolićima sa zlatnim ogledalima.",
      "bathroomTitle": "Dvije dizajnerske kupaonice s walk-in tuševima",
      "bathroomDesc": "Dvije luksuzne kupaonice sa staklenim walk-in tuševima s kišnim efektom, ormarićima s modernim umivaonicima, osvijetljenim ogledalima, perilicom rublja te još dva odvojena WC-a (ukupno 4 sanitarna čvora).",
      "outdoorTitle": "Sunčalište, natkrivena pergola i ljetna kuhinja",
      "outdoorDesc": "Prostrano popločano dvorište s četiri udobne ležaljke, vanjskim tušem, natkrivenom pergolom s električnim roštiljem, radnom plohom sa sudoperom, stolom za blagovanje, visećom foteljom i vanjskim šankom.",
      "parkingTitle": "Privatni parking i punionica za EV",
      "parkingDesc": "Tri osigurana parkirna mjesta unutar ograđenog dvorišta s automatskim vratima i vlastitom punionicom za električna vozila.",
      "tags": {
        "doubleHeight": "Visoki krovni strop",
        "tv55": "55\" Smart TV",
        "loftMezzanine": "Galerija na katu",
        "floorHeating": "Podno grijanje",
        "induction": "Indukcijska ploča",
        "dishwasher": "Perilica posuđa",
        "espresso": "Aparat za kavu",
        "dining6": "Stol za 6 osoba",
        "beds2": "2 bračna kreveta",
        "smartTvRooms": "Smart TV u sobama",
        "individualAc": "Zasebna klima",
        "vanityDesks": "Toaletni stolići",
        "showers2": "2 walk-in tuša",
        "toilets2": "2 zasebna WC-a",
        "washingMachine": "Perilica rublja",
        "ledMirrors": "LED ogledala",
        "electricBbq": "Električni roštilj",
        "outdoorDining": "Vanjsko blagovanje",
        "loungers4": "4 ležaljke za sunčanje",
        "terraceBar": "Vanjski drveni šank",
        "evCharger": "EV brzi punjač",
        "parking3": "3 parkirna mjesta",
        "autoGate": "Automatska vrata",
        "perimeter120": "Ograda visine 120 cm"
      }
    },
    "gallery": {
      "tag": "Vizualni doživljaj",
      "title": "Svaki detalj u visokoj rezoluciji",
      "subtitle": "Pregledajte 43 provjerene fotografije visoke rezolucije Vile Tila i predivnog kraja uz rijeku Gacku.",
      "filterAll": "Sve fotografije (43)",
      "filterExterior": "Arhitektura i eksterijer",
      "filterPool": "Bazen i sauna",
      "filterLiving": "Boravak i kuhinja",
      "filterRooms": "Sobe i kupaonice",
      "filterNature": "Rijeka Gacka i Lika",
      "photoCount": "fotografija",
      "openLightbox": "Prikaži sliku preko cijelog ekrana",
      "imageDetails": "Podaci o slici i opis za čitače ekrana",
      "readDesc": "Detaljan opis za čitač ekrana:",
      "category": "Kategorija",
      "fileLabel": "Naziv datoteke",
      "liveStatus": "Prikazano 43 fotografije"
    },
    "lightbox": {
      "prevAria": "Prethodna slika (Lijeva strelica)",
      "nextAria": "Sljedeća slika (Desna strelica)",
      "closeAria": "Zatvori preglednik slika (Tipka Escape)",
      "zoomAria": "Povećaj sliku",
      "descAria": "Prikaži detaljan opis za čitač ekrana",
      "counter": "Slika {current} od {total}"
    },
    "surroundings": {
      "tag": "Netaknuta priroda",
      "title": "Otkrijte čari rijeke Gacke i Like",
      "subtitle": "Poznata u cijelom svijetu po svojoj kristalnoj bistrini, smaragdnim tonovima i autohtonoj potočnoj pastrvi, rijeka Gacka pruža jedinstven mir i odmor na dohvat ruke.",
      "activity1Title": "Svjetski poznato mušičarenje (Fly fishing)",
      "activity1Desc": "Rijeka Gacka kultno je europsko odredište za ribolov pastrve u bistrim vodama otvorenima za ribolov tijekom cijele godine.",
      "activity2Title": "Vožnja kajakom i prozirnim kanuom",
      "activity2Desc": "Zaplovite mirnim tokom rijeke i uživajte u pogledu na vodeno bilje, riječne rukavce i zelena lička brda.",
      "activity3Title": "Pješačke i biciklističke staze",
      "activity3Desc": "Označene rekreacijske staze počinju svega 20 metara od same vile i vode kroz prekrasne pejzaže doline.",
      "activity4Title": "Nacionalni parkovi na dohvat ruke",
      "activity4Desc": "Savršen položaj za jednodnevne izlete u Nacionalni park Plitvička jezera (oko 45 min) i NP Sjeverni Velebit (oko 35 min vožnje).",
      "activity5Title": "Jadransko more i plaže",
      "activity5Desc": "Slikoviti prijevoj preko Velebita vodi vas do povijesnog Senja i jadranskih šljunčanih plaža za samo 30 minuta vožnje (29 km)."
    },
    "location": {
      "tag": "Lokacija i dolazak",
      "title": "Lako dostupno, u srcu Like",
      "addressLabel": "Točna adresa",
      "address": "Prozor, 53220 Otočac, Ličko-senjska županija, Hrvatska",
      "gpsLabel": "GPS koordinate",
      "copyAddress": "Kopiraj koordinate (44.8364, 15.2612)",
      "copiedToast": "Koordinate su kopirane u međuspremnik!",
      "openMaps": "Otvori na Google kartama",
      "mapBadgePlace": "Prozor, Otočac (Lika)",
      "directionsBtn": "Upute za dolazak",
      "distShop": "Lokalna trgovina s namirnicama",
      "distShopVal": "200 m (2 min hoda)",
      "distTrail": "Označena pješačka staza",
      "distTrailVal": "20 m (ispred ulaza)",
      "distTown": "Središte Otočca i sportski centar",
      "distTownVal": "4 km (5 min vožnje)",
      "distGacka": "Rijeka Gacka (ribolov i kajaci)",
      "distGackaVal": "6 km (7 min vožnje)",
      "distPlitvice": "NP Plitvička jezera",
      "distPlitviceVal": "48 km (oko 45 min vožnje)",
      "distVelebit": "NP Sjeverni Velebit",
      "distVelebitVal": "38 km (oko 35 min vožnje)",
      "distSea": "Jadransko more i plaže (Senj)",
      "distSeaVal": "29 km (oko 30 min vožnje)",
      "distAirport": "Zračna luka Zadar (ZAD)",
      "distAirportVal": "140 km (oko 1 h 25 min vožnje)"
    },
    "rules": {
      "tag": "Važne informacije",
      "title": "Uvjeti boravka i kućni red",
      "checkInTitle": "Prijava i odjava",
      "checkInDesc": "Prijava: od 16:00 sati • Odjava: do 10:00 sati. Mogućnost jednostavnog i fleksibilnog preuzimanja ključa.",
      "capacityTitle": "Kapacitet: isključivo za odrasle",
      "capacityDesc": "Maksimalan kapacitet je 4 odrasle osobe. Vila je namijenjena mirnom odmoru odraslih gostiju te nije prilagođena djeci.",
      "smokingTitle": "Objekt za nepušače",
      "smokingDesc": "Pušenje u vili i bazenskom prostoru strogo je zabranjeno. Pušenje je dozvoljeno na vanjskoj terasi.",
      "petsTitle": "Kućni ljubimci",
      "petsDesc": "Boravak kućnih ljubimaca nije dozvoljen radi očuvanja visoke razine higijene i antialergijskih standarda.",
      "parkingTitle": "Privatni parking i punjač za EV",
      "parkingDesc": "Tri osigurana parkirna mjesta unutar ograđenog dvorišta s vlastitom punionicom za električna vozila.",
      "utilitiesTitle": "Sve režije uključene u cijenu",
      "utilitiesDesc": "Svi troškovi (struja, voda, podno grijanje, klima, grijanje bazena, brzi Wi-Fi, posteljina i ručnici) uključeni su u cijenu."
    },
    "faq": {
      "tag": "Česta pitanja",
      "title": "Sve što trebate znati",
      "q1": "Je li unutarnji bazen grijan i tijekom zimskih mjeseci?",
      "a1": "Da! Privatni unutarnji bazen grijan je tijekom cijele godine (svih 365 dana). Temperatura vode stalno je ugodna bez obzira na godišnje doba i vanjsku temperaturu.",
      "q2": "Kako mogu rezervirati boravak i koji su uvjeti plaćanja?",
      "a2": "Boravak možete rezervirati putem službene Novasol stranice (šifra objekta CCL380) uz trenutačnu potvrdu i punu sigurnost, ili nam pošaljite upit putem obrasca na stranici.",
      "q3": "Ima li vila punjač za električne automobile?",
      "a3": "Da, privatna punionica za električna vozila nalazi se na popločanom parkiralištu unutar ograđenog dvorišta i slobodna je za korištenje našim gostima.",
      "q4": "Može li se od vile pješice doći do rijeke Gacke?",
      "a4": "Uređene staze za šetnju počinju svega 20 metara od same vile. Glavna ribolovna i rekreacijska mjesta na Gacki nalaze se na 5 do 7 minuta vožnje (6 km).",
      "q5": "Je li posjed potpuno ograđen i jamči li privatnost?",
      "a5": "U potpunosti. Vila Tila se iznajmljuje isključivo jednoj grupi gostiju. Cijelo imanje ograđeno je ogradom visine 120 cm s automatskim vratima, što jamči mir i potpunu diskreciju."
    },
    "inquiry": {
      "tag": "Rezervacija i upiti",
      "title": "Isplanirajte svoj odmor u Vili Tili",
      "subtitle": "Pošaljite nam izravan upit za provjeru slobodnih termina ili rezervirajte boravak uz trenutačnu potvrdu na Novasolu.",
      "fullName": "Vaše ime i prezime",
      "email": "Adresa e-pošte",
      "phone": "Broj telefona / WhatsApp",
      "checkIn": "Datum dolaska (DD/MM/YYYY)",
      "checkOut": "Datum odlaska (DD/MM/YYYY)",
      "guests": "Broj gostiju",
      "opt2": "2 odrasle osobe",
      "opt3": "3 odrasle osobe",
      "opt4": "4 odrasle osobe (maksimalni kapacitet)",
      "message": "Poruka ili posebne napomene",
      "submitBtn": "Pošaljite upit",
      "successMsg": "Zahvaljujemo na upitu! Vaša poruka je uspješno poslana. Domaćin će vam se javiti u roku od 24 sata.",
      "novasolBadge": "Službeni partner za rezervaciju",
      "novasolTitle": "Službena Novasol stranica (CCL380)",
      "novasolDesc": "Trenutačna rezervacija uz provjeru kalendara slobodnih termina uživo, sigurno plaćanje i službena jamstva za goste.",
      "novasolFeat1": "Provjerena kvaliteta s 5 zvjezdica",
      "novasolFeat2": "Svi troškovi režija uključeni u cijenu",
      "novasolFeat3": "Trenutačna potvrda rezervacije",
      "novasolFeat4": "Korisnička podrška i zaštita putnika",
      "novasolBtn": "Provjerite dostupnost na Novasolu",
      "dateFormatHint": "Format: DD/MM/YYYY (npr. 25/09/2026)",
      "dateErrorInvalid": "Molimo unesite valjane datume u formatu DD/MM/YYYY.",
      "dateErrorPast": "Datum dolaska ne može biti u prošlosti.",
      "dateErrorOrder": "Datum odlaska mora biti nakon datuma dolaska.",
      "namePlaceholder": "npr. Ivan Horvat",
      "emailPlaceholder": "npr. ivan.horvat@email.hr",
      "phonePlaceholder": "+385 91 123 4567",
      "messagePlaceholder": "Upišite vaše želje, upite ili planirano vrijeme dolaska...",
      "checkInPlaceholder": "dd/mm/yyyy",
      "checkOutPlaceholder": "dd/mm/yyyy",
      "gdprConsent": "Suglasan/na sam s obradom mojih podataka u svrhu obrade ovog upita sukladno Pravilima privatnosti."
    },
    "cookies": {
      "title": "Privatnost i kolačići",
      "text": "Koristimo isključivo nužnu tehničku pohranu (poput odabira jezika) za besprijekoran rad stranice. Ne koristimo kolačiće trećih strana niti praćenje.",
      "acceptBtn": "Prihvati",
      "policyBtn": "Pravila privatnosti"
    },
    "privacy": {
      "modalTitle": "Pravila privatnosti i GDPR zaštita podataka",
      "controllerTitle": "1. Voditelj obrade podataka",
      "controllerText": "Vila Tila (Novasol CCL380), Prozor, Otočac, Ličko-senjska županija, Hrvatska. Za sve upite o privatnosti možete nas kontaktirati putem obrasca za upit.",
      "purposeTitle": "2. Svrha obrade podataka",
      "purposeText": "Osobni podaci koje navedete u obrascu za upit (ime i prezime, adresa e-pošte, broj telefona) obrađuju se isključivo radi odgovaranja na vaš upit i organizacije vašeg boravka.",
      "legalTitle": "3. Pravna osnova i čuvanje podataka",
      "legalText": "Podaci se obrađuju temeljem članka 6. stavka 1. točke (b) Opće uredbe o zaštiti podataka (GDPR) te se čuvaju samo onoliko koliko je nužno za obradu upita.",
      "rightsTitle": "4. Vaša prava",
      "rightsText": "U svakom trenutku imate pravo zatražiti uvid, ispravak ili brisanje vaših osobnih podataka, kao i pravo na podnošenje pritužbe Agenciji za zaštitu osobnih podataka (AZOP).",
      "closeBtn": "Zatvori pravila privatnosti"
    },
    "footer": {
      "tagline": "Ekskluzivna kuća za odmor s 5 zvjezdica, grijanim unutarnjim bazenom, finskom saunom i planinskim komforom u srcu Like.",
      "navigation": "Navigacija",
      "contact": "Kontakt i detalji",
      "address": "Prozor, 53220 Otočac, Hrvatska",
      "legal": "Novasol šifra objekta: CCL380",
      "category": "Kategorizacija: 5 zvjezdica",
      "ev": "Vlastiti punjač za EV na posjedu",
      "rights": "Sva prava pridržana. Vila Tila © 2026.",
      "accessibility": "WCAG 2.2 AA/AAA usklađeno • Prilagođeno čitačima ekrana",
      "backToTopAria": "Povratak na vrh"
    }
  }
};

// Theme state & immediate application (prevents FOUC)
let currentTheme = (typeof localStorage !== 'undefined' && localStorage.getItem('vila_tila_theme')) || 
  (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
if (typeof document !== 'undefined' && document.documentElement) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

// Global state
let currentLanguage = localStorage.getItem('vila_tila_lang') || 'en';
let currentFilter = 'all';
let activeLightboxIndex = 0;
let filteredImages = [...GALLERY_IMAGES];
let lastFocusedElement = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initGallery();
  initLightbox();
  initFaqAccordion();
  initBookingWidget();
  initA11y();
  initBackToTop();
  initCookieConsent();
});

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');

  const updateThemeUI = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vila_tila_theme', theme);
    currentTheme = theme;

    if (themeToggleIcon) {
      if (theme === 'light') {
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
      } else {
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
      }
    }

    if (themeToggleBtn) {
      const t = TRANSLATIONS[currentLanguage]?.nav;
      const ariaLabel = theme === 'light' 
        ? (t?.themeLightAria || 'Switch to dark theme') 
        : (t?.themeDarkAria || 'Switch to light theme');
      themeToggleBtn.setAttribute('aria-label', ariaLabel);
      themeToggleBtn.setAttribute('title', ariaLabel);
    }
  };

  updateThemeUI(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      updateThemeUI(nextTheme);
    });
  }
}

function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'hr' || langParam === 'en') {
    currentLanguage = langParam;
  }
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLanguage === 'en' ? 'hr' : 'en';
      setLanguage(newLang);
    });
  }
  setLanguage(currentLanguage);
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('vila_tila_lang', lang);
  document.documentElement.lang = lang;
  
  const t = TRANSLATIONS[lang];
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedTranslation(t, key);
    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', val);
      } else {
        el.textContent = val;
      }
    }
  });

  // Update input and textarea placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getNestedTranslation(t, key);
    if (val !== undefined) {
      el.setAttribute('placeholder', val);
    }
  });

  // Update HTML elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = getNestedTranslation(t, key);
    if (val !== undefined) el.innerHTML = val;
  });

  // Update ARIA labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = getNestedTranslation(t, key);
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  // Update Language toggle button label
  const langDisplay = document.getElementById('current-lang-display');
  if (langDisplay) {
    langDisplay.textContent = lang.toUpperCase();
  }
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.setAttribute('aria-label', t.nav.langSwitchAria);
    langBtn.setAttribute('title', lang === 'en' ? 'Prebaci na hrvatski jezik' : 'Switch to English');
  }

  // Update Theme toggle button label
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    const themeAria = currentTheme === 'light' ? t.nav.themeLightAria : t.nav.themeDarkAria;
    themeBtn.setAttribute('aria-label', themeAria);
    themeBtn.setAttribute('title', themeAria);
  }

  // Re-render gallery images to update alt and sr_desc texts
  renderGalleryGrid();
  
  // Update lightbox content if currently open
  const lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxModal && !lightboxModal.hidden) {
    updateLightboxSlide(activeLightboxIndex);
  }
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, obj);
}

function initNavigation() {
  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.getElementById('main-nav');

  // Scroll effect for header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('nav-open');
    });

    // Close mobile nav on link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('nav-open');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        targetEl.focus({ preventScroll: true });
      }
    });
  });
}

function initGallery() {
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.getAttribute('data-filter');
      
      if (currentFilter === 'all') {
        filteredImages = [...GALLERY_IMAGES];
      } else {
        filteredImages = GALLERY_IMAGES.filter(img => img.category === currentFilter);
      }
      renderGalleryGrid();
    });
  });

  renderGalleryGrid();
}

function renderGalleryGrid() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const isHr = currentLanguage === 'hr';

  filteredImages.forEach((img, index) => {
    const title = isHr ? img.title_hr : img.title_en;
    const altText = isHr ? img.alt_hr : img.alt_en;
    const srDesc = isHr ? img.sr_desc_hr : img.sr_desc_en;
    const descId = `img-desc-${index}`;

    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('data-category', img.category);

    card.innerHTML = `
      <figure class="gallery-figure">
        <div class="gallery-image-wrapper">
          <img 
            src="images/gallery/${img.new_name}" 
            alt="${escapeHtml(altText)}" 
            loading="lazy" 
            decoding="async" 
            width="600" 
            height="400"
            aria-describedby="${descId}"
          >
          <div class="gallery-overlay">
            <span class="gallery-badge">${formatCategoryBadge(img.category, isHr)}</span>
            <h3 class="gallery-card-title">${escapeHtml(title)}</h3>
            <button 
              type="button" 
              class="gallery-zoom-btn" 
              aria-label="${isHr ? 'Povećaj fotografiju: ' + title : 'Enlarge photo: ' + title}"
              data-img-index="${index}"
            >
              <i class="fa-solid fa-expand" aria-hidden="true"></i>
              <span class="sr-only">${isHr ? 'Povećaj' : 'Enlarge'}</span>
            </button>
          </div>
        </div>
        <figcaption class="sr-only" id="${descId}">
          ${escapeHtml(srDesc)}
        </figcaption>
      </figure>
    `;

    // Event listener for opening lightbox
    const zoomBtn = card.querySelector('.gallery-zoom-btn');
    zoomBtn.addEventListener('click', () => {
      lastFocusedElement = zoomBtn;
      openLightbox(index);
    });

    const imgWrapper = card.querySelector('.gallery-image-wrapper');
    imgWrapper.addEventListener('click', (e) => {
      if (!e.target.closest('.gallery-zoom-btn')) {
        lastFocusedElement = zoomBtn;
        openLightbox(index);
      }
    });

    grid.appendChild(card);
  });

  // Announce count to screen readers
  const statusEl = document.getElementById('gallery-live-status');
  if (statusEl) {
    const t = TRANSLATIONS[currentLanguage];
    statusEl.textContent = `${filteredImages.length} ${t.gallery.photoCount}`;
  }
}

function formatCategoryBadge(cat, isHr) {
  const map = {
    pool: isHr ? 'Bazen i wellness' : 'Pool & Wellness',
    rooms: isHr ? 'Sobe i kupaonice' : 'Bedrooms & Bathrooms',
    living: isHr ? 'Boravak i kuhinja' : 'Living & Dining',
    exterior: isHr ? 'Arhitektura i eksterijer' : 'Exterior & Architecture',
    nature: isHr ? 'Rijeka Gacka i priroda' : 'River Gacka & Nature'
  };
  return map[cat] || cat;
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const toggleDescBtn = document.getElementById('lightbox-toggle-desc-btn');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrevImage);
  nextBtn?.addEventListener('click', showNextImage);
  toggleDescBtn?.addEventListener('click', toggleLightboxDesc);

  // Keyboard navigation & trap
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrevImage();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    } else if (e.key === 'Tab') {
      trapFocus(modal, e);
    }
  });

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) showPrevImage();
      else showNextImage();
    }
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  activeLightboxIndex = index;
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  updateLightboxSlide(activeLightboxIndex);
  
  setTimeout(() => {
    document.getElementById('lightbox-close-btn')?.focus();
  }, 50);
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function showPrevImage() {
  activeLightboxIndex = (activeLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
  updateLightboxSlide(activeLightboxIndex);
}

function showNextImage() {
  activeLightboxIndex = (activeLightboxIndex + 1) % filteredImages.length;
  updateLightboxSlide(activeLightboxIndex);
}

function updateLightboxSlide(index) {
  const imgData = filteredImages[index];
  if (!imgData) return;
  const isHr = currentLanguage === 'hr';

  const modalImg = document.getElementById('lightbox-current-img');
  const titleEl = document.getElementById('lightbox-title');
  const categoryEl = document.getElementById('lightbox-category');
  const counterEl = document.getElementById('lightbox-counter');
  const descEl = document.getElementById('lightbox-desc-text');
  const liveEl = document.getElementById('lightbox-announcer');

  const title = isHr ? imgData.title_hr : imgData.title_en;
  const altText = isHr ? imgData.alt_hr : imgData.alt_en;
  const srDesc = isHr ? imgData.sr_desc_hr : imgData.sr_desc_en;

  if (modalImg) {
    modalImg.src = `images/gallery/${imgData.new_name}`;
    modalImg.alt = altText;
  }

  if (titleEl) titleEl.textContent = title;
  if (categoryEl) categoryEl.textContent = formatCategoryBadge(imgData.category, isHr);
  if (counterEl) {
    counterEl.textContent = `${index + 1} / ${filteredImages.length}`;
  }
  if (descEl) descEl.textContent = srDesc;

  // Screen reader announcement
  if (liveEl) {
    liveEl.textContent = isHr 
      ? `Slika ${index + 1} od ${filteredImages.length}: ${title}`
      : `Image ${index + 1} of ${filteredImages.length}: ${title}`;
  }

  renderLightboxThumbnails(index);
}

function renderLightboxThumbnails(activeIndex) {
  const strip = document.getElementById('lightbox-thumbs-strip');
  if (!strip) return;
  strip.innerHTML = '';

  filteredImages.forEach((img, i) => {
    const thumbBtn = document.createElement('button');
    thumbBtn.type = 'button';
    thumbBtn.className = `lightbox-thumb-btn ${i === activeIndex ? 'active' : ''}`;
    thumbBtn.setAttribute('aria-label', (currentLanguage === 'hr' ? 'Prikaži sliku ' : 'Show image ') + (i + 1));
    thumbBtn.innerHTML = `<img src="images/gallery/${img.new_name}" alt="" width="60" height="40" loading="lazy">`;
    thumbBtn.addEventListener('click', () => {
      activeLightboxIndex = i;
      updateLightboxSlide(activeLightboxIndex);
    });
    strip.appendChild(thumbBtn);
  });

  const activeBtn = strip.children[activeIndex];
  if (activeBtn) {
    activeBtn.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }
}

function toggleLightboxDesc() {
  const descPanel = document.getElementById('lightbox-desc-panel');
  const btn = document.getElementById('lightbox-toggle-desc-btn');
  if (!descPanel || !btn) return;
  const isHidden = descPanel.classList.toggle('collapsed');
  btn.setAttribute('aria-expanded', !isHidden);
}

function trapFocus(element, e) {
  const focusable = element.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      last.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  }
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');
    if (!questionBtn || !answerPanel) return;

    questionBtn.addEventListener('click', () => {
      const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';
      questionBtn.setAttribute('aria-expanded', !isExpanded);
      answerPanel.hidden = isExpanded;
      item.classList.toggle('open', !isExpanded);
    });
  });
}

function initBookingWidget() {
  initEuDatePicker();
  initFormSubmission();
  initCopyCoordinates();
}

function initFormSubmission() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('form-feedback');
    const t = TRANSLATIONS[currentLanguage];
    const checkinInput = document.getElementById('widget-checkin');
    const checkoutInput = document.getElementById('widget-checkout');

    const checkinDate = parseEuDate(checkinInput.value);
    const checkoutDate = parseEuDate(checkoutInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!checkinDate || !checkoutDate) {
      if (feedback) {
        feedback.textContent = t.inquiry.dateErrorInvalid;
        feedback.className = 'form-feedback error';
        feedback.hidden = false;
        feedback.focus();
      }
      return;
    }

    if (checkinDate < today) {
      if (feedback) {
        feedback.textContent = t.inquiry.dateErrorPast;
        feedback.className = 'form-feedback error';
        feedback.hidden = false;
        feedback.focus();
      }
      return;
    }

    if (checkoutDate <= checkinDate) {
      if (feedback) {
        feedback.textContent = t.inquiry.dateErrorOrder;
        feedback.className = 'form-feedback error';
        feedback.hidden = false;
        feedback.focus();
      }
      return;
    }

    // Success
    if (feedback) {
      feedback.textContent = t.inquiry.successMsg;
      feedback.className = 'form-feedback success';
      feedback.hidden = false;
      form.reset();
      feedback.focus();
    }
  });
}

function initCopyCoordinates() {
  const copyBtn = document.getElementById('copy-coords-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const coords = "44.836474, 15.261228";
      navigator.clipboard.writeText(coords).then(() => {
        const toast = document.getElementById('copy-toast');
        const t = TRANSLATIONS[currentLanguage];
        if (toast) {
          toast.textContent = t.location.copiedToast;
          toast.classList.add('visible');
          setTimeout(() => toast.classList.remove('visible'), 3000);
        }
      });
    });
  }
}

function initEuDatePicker() {
  const checkinInput = document.getElementById('widget-checkin');
  const checkoutInput = document.getElementById('widget-checkout');
  const btnCheckin = document.getElementById('btn-calendar-checkin');
  const btnCheckout = document.getElementById('btn-calendar-checkout');
  const popover = document.getElementById('eu-calendar-popover');
  const prevBtn = document.getElementById('cal-prev-btn');
  const nextBtn = document.getElementById('cal-next-btn');
  const monthYearEl = document.getElementById('cal-month-year');
  const weekdaysEl = document.getElementById('cal-weekdays');
  const daysGrid = document.getElementById('cal-days-grid');

  if (!checkinInput || !checkoutInput || !popover) return;

  const MONTHS = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    hr: ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac']
  };

  const WEEKDAYS = {
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    hr: ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned']
  };

  let activeTarget = null;
  let viewDate = new Date();

  // Apply EU input mask (DD/MM/YYYY)
  [checkinInput, checkoutInput].forEach(input => {
    input.addEventListener('input', () => {
      let v = input.value.replace(/[^\d]/g, '');
      if (v.length > 2 && v.length <= 4) {
        v = v.slice(0, 2) + '/' + v.slice(2);
      } else if (v.length > 4) {
        v = v.slice(0, 2) + '/' + v.slice(2, 4) + '/' + v.slice(4, 8);
      }
      input.value = v;
    });

    input.addEventListener('focus', () => {
      openCalendar(input);
    });
  });

  if (btnCheckin) {
    btnCheckin.addEventListener('click', (e) => {
      e.stopPropagation();
      openCalendar(checkinInput);
    });
  }

  if (btnCheckout) {
    btnCheckout.addEventListener('click', (e) => {
      e.stopPropagation();
      openCalendar(checkoutInput);
    });
  }

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    viewDate.setMonth(viewDate.getMonth() - 1);
    renderCalendar();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    viewDate.setMonth(viewDate.getMonth() + 1);
    renderCalendar();
  });

  function openCalendar(targetInput) {
    activeTarget = targetInput;
    const parsed = parseEuDate(targetInput.value);
    if (parsed) {
      viewDate = new Date(parsed.getFullYear(), parsed.getMonth(), 1);
    } else {
      const now = new Date();
      viewDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    renderCalendar();

    // Position popover
    const group = targetInput.closest('.date-picker-group') || targetInput.parentElement;
    group.appendChild(popover);
    popover.hidden = false;
    popover.classList.add('active');
  }

  function closeCalendar() {
    popover.hidden = true;
    popover.classList.remove('active');
  }

  function renderCalendar() {
    const lang = currentLanguage || 'hr';
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    monthYearEl.textContent = `${MONTHS[lang][month]} ${year}`;

    // Weekdays header (Mon = 0 ... Sun = 6)
    weekdaysEl.innerHTML = '';
    WEEKDAYS[lang].forEach(w => {
      const sp = document.createElement('span');
      sp.className = 'calendar-weekday';
      sp.textContent = w;
      weekdaysEl.appendChild(sp);
    });

    // Days grid
    daysGrid.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const startDayIndex = (firstDay + 6) % 7; // Mon=0 ... Sun=6
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startDayIndex; i++) {
      const blank = document.createElement('div');
      blank.className = 'calendar-day-blank';
      daysGrid.appendChild(blank);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkinDate = parseEuDate(checkinInput.value);
    const targetSelectedDate = parseEuDate(activeTarget?.value || '');

    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(year, month, d);
      cellDate.setHours(0, 0, 0, 0);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'calendar-day-btn';
      btn.textContent = d;
      btn.setAttribute('aria-label', `${d}. ${MONTHS[lang][month]} ${year}.`);

      // Disable past dates
      if (cellDate < today) {
        btn.disabled = true;
      }

      // If active target is checkout, cannot pick on or before checkin
      if (activeTarget === checkoutInput && checkinDate) {
        if (cellDate <= checkinDate) {
          btn.disabled = true;
        }
      }

      // Highlight today
      if (cellDate.getTime() === today.getTime()) {
        btn.classList.add('today');
      }

      // Highlight selected
      if (targetSelectedDate && cellDate.getTime() === targetSelectedDate.getTime()) {
        btn.classList.add('selected');
      }

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const formatted = formatEuDate(cellDate);
        if (activeTarget) {
          activeTarget.value = formatted;
        }

        // Auto flow: if check-in selected, auto suggest checkout and open checkout calendar
        if (activeTarget === checkinInput) {
          const nextDay = new Date(cellDate);
          nextDay.setDate(nextDay.getDate() + 2);
          if (!checkoutInput.value || (parseEuDate(checkoutInput.value) && parseEuDate(checkoutInput.value) <= cellDate)) {
            checkoutInput.value = formatEuDate(nextDay);
          }
          openCalendar(checkoutInput);
        } else {
          closeCalendar();
          activeTarget?.focus();
        }
      });

      daysGrid.appendChild(btn);
    }
  }

  // Dismiss on click outside
  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !e.target.closest('.date-input-wrap')) {
      closeCalendar();
    }
  });

  // Dismiss on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popover.hidden) {
      closeCalendar();
    }
  });
}

function formatEuDate(d) {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function parseEuDate(str) {
  if (!str) return null;
  const match = str.trim().match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/);
  if (!match) return null;
  const d = parseInt(match[1], 10);
  const m = parseInt(match[2], 10) - 1;
  const y = parseInt(match[3], 10);
  const date = new Date(y, m, d);
  if (date.getFullYear() === y && date.getMonth() === m && date.getDate() === d) {
    return date;
  }
  return null;
}

function initA11y() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  });

  window.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.hidden = false;
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
      setTimeout(() => {
        if (!btn.classList.contains('visible')) btn.hidden = true;
      }, 250);
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hero = document.getElementById('hero');
    if (hero) hero.focus({ preventScroll: true });
  });
}

function initCookieConsent() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const policyBtn = document.getElementById('cookie-policy-btn');
  const footerPrivacyBtn = document.getElementById('footer-privacy-btn');
  const modal = document.getElementById('privacy-modal');
  const closeBtn = document.getElementById('privacy-modal-close-btn');
  const dismissBtn = document.getElementById('privacy-modal-dismiss-btn');
  const overlay = document.getElementById('privacy-modal-overlay');

  const hasConsent = localStorage.getItem('vila_tila_cookie_consent');
  if (!hasConsent && banner) {
    banner.hidden = false;
  }

  if (acceptBtn && banner) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('vila_tila_cookie_consent', 'accepted');
      banner.hidden = true;
    });
  }

  let prevFocus = null;

  const openPrivacyModal = () => {
    if (modal) {
      prevFocus = document.activeElement;
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      closeBtn?.focus();
    }
  };

  const closePrivacyModal = () => {
    if (modal) {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      if (prevFocus && typeof prevFocus.focus === 'function') {
        prevFocus.focus();
      }
    }
  };

  policyBtn?.addEventListener('click', openPrivacyModal);
  footerPrivacyBtn?.addEventListener('click', openPrivacyModal);
  closeBtn?.addEventListener('click', closePrivacyModal);
  dismissBtn?.addEventListener('click', closePrivacyModal);
  overlay?.addEventListener('click', closePrivacyModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closePrivacyModal();
    }
  });
}

