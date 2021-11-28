import _ from "lodash";

class Item {
  constructor(
    item,
    translateYor,
    translateIgb,
    translateHau,
    transcribeYor,
    transcribeIgb,
    transcribeHau,
    image = "Bag-Àpò"
  ) {
    this.key = item.toLowerCase().trim();
    this.translateYor = translateYor;
    this.translateIgb = translateIgb;
    this.translateHau = translateHau;
    this.text = item;
    this.value = _.startCase(this.text) + "_" + _.startCase(this.translateYor);
    this.transcribeYor = transcribeYor || "//";
    this.transcribeHau = transcribeHau || "//";
    this.transcribeIgb = transcribeIgb || "//";
    this.image = require(`./images/${image}.jpg`).default;
  }
}

export const data = [
  new Item("bag", "àpò", "akpa", "jakar", "/a:po/", "/a:kpa:/", "/dja:ka:/", "Bag-Àpò"),
  new Item("table", "tábílì", "tebụl", "tebur", "/ta:bi:li/", "/tebu:l/","/tebu:r/", "Table_Tábílì"),
  new Item("chair", "Ìjóòkó", "oche", "kujera", "/i:jo:ko/", "/o:tʃe/", "/ku:dʒera:/", "Chair_Ìjóòkó"),
  new Item(
    "ceiling fan",
    "Àìpê àjà",
    "uko ụlọ fan",
    "fan rufi",
    "/Àì:pê à:jà/",
    "/u:ko u:lɒ fa:n/", "/fa:n ru:fi/",
    "Ceiling fan_Àìpê àjà"
  ),
  new Item("knife", "Òbê", "mma", "wuka", "/Ò:bê/", "/mma:/", "/wu:ka:/", "Knife_Òbê"),
  new Item("spoon", "Síbí", "ngaji", "cokali", "/Sí:bí/","/ngadʒi:/", "/kɒka:li/", "Spoon_Síbí"),
  new Item(
    "television",
    "Amóhùn-máwòrán",
    "telivishọn",
    "talabijin",
    "/A:mó:hùn-má:wò:rán/",
    "/teliviʃn/", "/ta:la:bi:dʒn/",
    "Television_Amóhùn-máwòrán"
  ),

  new Item(
    "speaker",
    "Agbóhùnsókè",
    "ọkà okwu",
    "mai magana",
    "/A:gbó:hùn:só:kè/",
    "/ɔka: ɔku:/","/mai ma:gana/",
    "Speaker_Agbóhùnsókè"
  ),
  new Item(
    "bucket",
    "Awôn Garawa",
    "ịwụ",
    "guga",
    "/Awôn Ga:ra:wa/",
    "/i:wu/","/gu:ga:/",
    "Bucket_Awôn-Garawa"
  ),
  new Item(
    "broom",
    "ìgbálẹ̀",
    "aziza",
    "tsintsiya",
    "/ì:gbá:lẹ̀/",
    "Broom_ìgbálẹ̀"
  ),
  new Item(
    "carpet",
    "kápẹ́ẹ̀tì",
    "kapeeti",
    "kafet",
    "/ká:pẹ́ẹ̀:tì/",
    "Carpet_Kápẹ́ẹ̀tì"
  ),
  new Item("mat", "ẹní", "ute", "tabarma", "/ẹ:ní/", "Mat_ẹní"),
  new Item(
    "fridge",
    "fìríìjì",
    "ngwa nju oyi",
    "firiji",
    "/fì:ríì:jì/",
    "Fridge_Fìríìjì"
  ),
  new Item("pot", "Ìkòkò", "ite", "tukunya", "/Ìkòkò/", "Pot_Ìkòkò"),
  new Item(
    "blanket",
    "Aso ìbora",
    "blanketị",
    "bargo",
    "/A:so ì:bo:ra/",
    "Blanket_Aso ìbora"
  ),
  new Item("bolt", "bólútì", "bolt", "aronji", "/bó:lú:tì/", "Bolt_Edun"),
  new Item("bottle", "Ìgò", "karama", "kwalban", "/Ì:gò/", "Bottle_Ìgò"),
  new Item("box", "Àpótí", "igbe", "akwatin", "/À:pó:tí/", "Box_Àpótí"),
  new Item("brick", "Òkúta", "brik", "bulo", "/Ò:kú:ta/", "Brick_Òkúta"),
  new Item(
    "bookcase",
    "Àpò ìwé",
    "akwụkwọ",
    "akwatin littafi",
    "/À:pò:wé/",
    "BookCase_Àpò-ìwé"
  ),
  new Item("kernel", "Èkùró", "kernel", "kwaya", "/È:kù:ró/", "Kernel_ekuro"),
  new Item("garbage", "Ìdòtí", "mkpofu", "datti", "/Ì:dò:tí/", "Garbage_Ìdòtí"),
  new Item("foam", "Fóómù", "ụfụfụ", "kumfa", "/Fóó:mù/", "Foam_Fóómù"),
  new Item("book", "Ìwé", "akwụkwọ", "littafi", "/Ì:wé/", "Book-Ìwé"),
  new Item(
    "blender",
    "Ìdàpòmóra",
    "blender",
    "blender",
    "/Ì:dà:pò:mó:ra/",
    "Blender-Ìdàpòmóra"
  ),
  new Item(
    "container",
    "Àwòn àpótí",
    "akpa",
    "ganga",
    "/À:wòn à:pó:tí/",
    "Containers_Àwòn àpótí"
  ),

  new Item(
    "camera",
    "Ayàwòrán",
    "igwefoto",
    "kamara",
    "/A:yà:wò:rán/",
    "Camera_Ayàwòrán"
  ),
  new Item("hammer", "Òòlù", "hama", "guduma", "/Òò:lù/", "Hammer_Òòlù"),
  new Item("hearth", "Àìsun", "hearth", "hearth", "/Àì:sun/", "Hearth_Àìsun"),
  new Item("grain", "Okà", "ọka", "hatsi", "/O:kà/", "Grain_Okà"),
  new Item(
    "pen",
    "Gègé Ìkòwé",
    "pen",
    "alkalami",
    "/Gè:gé Ì:kò:wé/",
    "Pen_Ìkòwé"
  ),
  new Item(
    "hair-dryer",
    "Èro Ìgbe’run",
    "onye na-ehicha ntutu",
    "na'urar bushewa",
    "/È:ro Ì:gbe’:run/",
    "Hair-dryer_Èro Ìgbe’run"
  ),

  new Item(
    "headphone",
    "Àgbékórí",
    "ekweisi",
    "headphone",
    "/À:gbé:kó:rí/",
    "Headphone_Àgbékórí"
  ),
  new Item(
    "ice-cream",
    "Wàrà Dídì",
    "ice-cream",
    "ice-cream",
    "/Wà:rà Dí:dì/",
    "IceCream_Wàrà-Dídì"
  ),

  new Item("jar", "Ide", "ite", "kwalba", "/I:de/", "Jar_Ide"),
  new Item(
    "jewelry",
    "Ohun òsó",
    "ọla",
    "kayan ado",
    "/O:hun ò:só/",
    "Jewelry_Ohun-òsó"
  ),
  new Item("key", "Kókóró", "igodo", "maɓalli", "/Kó:kó:ró/", "Key_Kókóró"),
  new Item(
    "lingerie",
    "Àwòtélè",
    "uwe ime",
    "kamfai",
    "/À:wò:té:lè/",
    "Lingerie_Àwòtélè"
  ),
  new Item("lamp", "Àtùpà", "oriọna", "fitila", "/À:tù:pà/", "Lamp_Àtùpà"),
  new Item(
    "lock",
    "Títììpa",
    "mkpọchi",
    "kulle",
    "/Tí:tìì:pa/",
    "Lock_Títììpa"
  ),
  new Item("mug", "Agolo", "iko", "mug", "/A:go:lo/", "Mugs-Agolo"),
  new Item(
    "medicine",
    "Àwòn òògùn",
    "ọgwụ",
    "magani",
    "/À:wòn òò:gùn/",
    "Medicine_Àwòn-òògùn"
  ),
  new Item("mail", "Méélì", "ozi", "mail", "/Méé:lì/", "Mail_Méélì"),
  new Item(
    "magnet",
    "Àwòn Òòfà",
    "magnet",
    "magnet",
    "/À:wòn Òò:fà/",
    "Magnets_Àwòn-Òòfà"
  ),
  new Item(
    "makeup",
    "Ìfipajú",
    "etemeete",
    "kayan shafa",
    "/Ì:fi:pa:jú/",
    "Make-Up_Ìfipajú"
  ),
  new Item(
    "perfume",
    "Lófíndà",
    "senti",
    "turare",
    "/Ló:fí:n:dà/",
    "Perfume_Lófíndà"
  ),
  new Item(
    "pitcher",
    "Làdùgbo",
    "ọkpọ",
    "tulu",
    "/Là:dù:gbo/",
    "Pitcher_Làdùgbo"
  ),
  new Item(
    "printer",
    "Ìtèwé",
    "ngwa nbipute",
    "printer",
    "/Ì:tè:wé/",
    "Printer_Ìtèwé"
  ),
  new Item(
    "pressure cooker",
    "Olùdáná títè",
    "nrụgide osi nri",
    "matsa lamba cooker",
    "/O:lù:dá:ná tí:tè/",
    "Pressure-Cooker_Olùdáná-títè"
  ),

  new Item(
    "quilt",
    "Aso àtèrìn",
    "quilt",
    "quilt",
    "/A:so à:tè:rìn/",
    "Quilt_Aso àtèrìn"
  ),
  new Item("radio", "Rédíò", "redio", "rediyo", "/Ré:dí:ò/", "Radio_Rédíò"),
  new Item(
    "raincoat",
    "Aso Ewu",
    "raincoat",
    "raincoat",
    "/A:so E:wu/",
    "RainCoat_Aso-Ewu"
  ),
  new Item("ribbon", "Teerē", "rịbọn", "ribbon", "/Te:e:rē/", "Ribbon_Teerē"),
  new Item("rifle", "Ìbon", "égbè", "bindiga", "/Ì:bon/", "Rifle_Ìbon"),
  new Item(
    "rug",
    "Àwòn aso àtèrìn ",
    "akwa",
    "rug",
    "/À:wòn a:so à:tè:rìn/",
    "Rugs_Àwòn aso àtèrìn"
  ),
  new Item(
    "stereo",
    "Sítéríò",
    "stereo",
    "sitiriyo",
    "/Sí:té:rí:ò/",
    "Stereo_Sítéríò"
  ),
  new Item(
    "shades",
    "Àwòn ìbòji",
    "shades",
    "inuwa",
    "/À:wòn ì:bò:ji/",
    "Shades_Àwòn ìbòji"
  ),
  new Item("socks", "Ìbosè", "sọks", "safa", "/Ì:bo:sè/", "Socks_Ìbosè"),
  new Item(
    "stamp",
    "Àwòn òñtè",
    "stampụ",
    "tambari",
    "/À:wòn ò:ñ:tè/",
    "Stamp_Àwòn òñtè"
  ),
  new Item(
    "sneakers",
    "Àwòn bàtà ìdárayá",
    "snịịka",
    "sneakers",
    "/À:wòn bà:tà ì:dá:ra:yá/",
    "Sneakers_Àwòn bàtà ìdárayá"
  ),

  new Item("scarf", "síkáfù", "ịchafụ", "scarf", "/sí:ká:fù/", "Scarf_síkáfù"),
  new Item("timers", "Aago", "oge", "masu lokaci", "/Aa:go/", "Timers_Aago"),
  new Item("trumpet", "Ìpè", "opi", "ƙaho", "/Ì:pè/", "Trumpet_Ìpè"),
  new Item(
    "tapestry",
    "téètì",
    "tapestry",
    "tapestry",
    "/téè:tì/",
    "Tapestry_téètì"
  ),
  new Item(
    "tissue",
    "Àwòn ìsàn",
    "anụ ahụ",
    "nama",
    "/À;wòn ì:sàn/",
    "Tissue_Àwòn ìsàn"
  ),
  new Item("oven", "Àdìro", "oven", "tanda", "/À:dì:ro/", "Oven_Àdìro"),
  new Item("vent", "Ihò", "ventilashị", "iska", "/I:hò/", "Vent_Ihò"),
  new Item(
    "washer",
    "Ìfoso",
    "washer",
    "injin wanki",
    "/Ì:fo:so/",
    "Washer_Ìfoso"
  ),
  new Item("vacuum", "Ìgbálè", "agụụ", "injin", "/Ì:gbá:lè/", "Vacuum_Ìgbálè"),
  new Item("torch", "Ògùsò", "ọkụ", "fitila", "/Ò:gù:sò/", "Torch_Ògùsò"),
  new Item(
    "yardstick",
    "Okùn okùn",
    "yardstick",
    "yadi",
    "/O:kùn o:kùn/",
    "YardStick_Okùn-okùn"
  ),

  new Item("yoghurt", "Wàrà", "yoghurt", "yoghurt", "/Wà:rà/", "Yoghurt_Wàrà"),
  new Item("yarn", "Òwú", "yarn", "yarn", "/Ò:wú/", "Yarn_Òwú"),
  new Item("hanger", "Kóórí", "hanga", "hanger", "/Kó:ó:rí/", "Hanger_Kóórí"),
  new Item("wardrobe", "Asò", "wodrobu", "wardrobe", "/A:sò/", "Wardrobe_Asò"),
  new Item(
    "zipper",
    "Àpò ìdálénū",
    "zipa",
    "zik din",
    "/À:pò ì:dá:lé:nū/",
    "Zipper_ Àpò ìdálénū"
  ),
  new Item("brush", "Félé", "ahịhịa", "goga", "/Fé:lé/", "Brush_Félé"),
  new Item(
    "telephone",
    "Tēlifóónù",
    "ekwentị",
    "tarho",
    "/Tē:li:fóó:nù/",
    "Telephone _ Tēlifóónù"
  ),

  new Item(
    "toothpaste",
    "Ehín elé",
    "ihe ntacha eze",
    "man goge baki",
    "/E:hín e:lé/",
    "ToothPaste_Ehín-elé"
  ),

  new Item(
    "staple",
    "Amúnkanmóra",
    "staple",
    "matsi",
    "/A:mú:n:kan:mó:ra/",
    "Stapler_Amukanmora"
  ),
];
