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
  new Item(
    "bag",
    "àpò",
    "akpa",
    "jakar",
    "/a:po/",
    "/a:kpa:/",
    "/dja:ka:/",
    "Bag-Àpò"
  ),
  new Item(
    "table",
    "tábílì",
    "tebụl",
    "tebur",
    "/ta:bi:li/",
    "/tebu:l/",
    "/tebu:r/",
    "Table_Tábílì"
  ),
  new Item(
    "chair",
    "Ìjóòkó",
    "oche",
    "kujera",
    "/i:jo:ko/",
    "/o:tʃe/",
    "/ku:dʒera:/",
    "Chair_Ìjóòkó"
  ),
  new Item(
    "ceiling fan",
    "Àìpê àjà",
    "uko ụlọ fan",
    "fan rufi",
    "/Àì:pê à:jà/",
    "/u:ko u:lɒ fa:n/",
    "/fa:n ru:fi/",
    "Ceiling fan_Àìpê àjà"
  ),
  new Item(
    "knife",
    "Òbê",
    "mma",
    "wuka",
    "/Ò:bê/",
    "/mma:/",
    "/wu:ka:/",
    "Knife_Òbê"
  ),
  new Item(
    "spoon",
    "Síbí",
    "ngaji",
    "cokali",
    "/Sí:bí/",
    "/ngadʒi:/",
    "/kɒka:li/",
    "Spoon_Síbí"
  ),
  new Item(
    "television",
    "Amóhùn-máwòrán",
    "telivishọn",
    "talabijin",
    "/A:mó:hùn-má:wò:rán/",
    "/teliviʃn/",
    "/ta:la:bi:dʒn/",
    "Television_Amóhùn-máwòrán"
  ),

  new Item(
    "speaker",
    "Agbóhùnsókè",
    "ọkà okwu",
    "mai magana",
    "/A:gbó:hùn:só:kè/",
    "/ɔka: ɔku:/",
    "/mai ma:gana/",
    "Speaker_Agbóhùnsókè"
  ),
  new Item(
    "bucket",
    "Awôn Garawa",
    "ịwụ",
    "guga",
    "/Awôn Ga:ra:wa/",
    "/i:wu/",
    "/gu:ga:/",
    "Bucket_Awôn-Garawa"
  ),
  new Item(
    "broom",
    "ìgbálẹ̀",
    "aziza",
    "tsintsiya",
    "/ì:gbá:lẹ̀/",
    "/a:zi:za/",
    "/tsin:tsi:ya/",
    "Broom_ìgbálẹ̀"
  ),
  new Item(
    "carpet",
    "kápẹ́ẹ̀tì",
    "kapeeti",
    "kafet",
    "/ká:pẹ́ẹ̀:tì/",
    "/ká:pẹ́ẹ̀:tì/",
    "/ka:fet/",
    "Carpet_Kápẹ́ẹ̀tì"
  ),
  new Item(
    "mat",
    "ẹní",
    "ute",
    "tabarma",
    "/ẹ:ní/",
    "/u:te/",
    "/ta:ba:ma:/",
    "Mat_ẹní"
  ),

  new Item(
    "pot",
    "Ìkòkò",
    "ite",
    "tukunya",
    "/Ìkòkò/",
    "/ite/",
    "/tukuna:/",
    "Pot_Ìkòkò"
  ),
  new Item(
    "blanket",
    "Aso ìbora",
    "blanketị",
    "bargo",
    "/A:so ì:bo:ra/",
    "/bla:keti/",
    "/ba:go/",
    "Blanket_Aso ìbora"
  ),
  new Item(
    "bolt",
    "bólútì",
    "bolt",
    "aronji",
    "/bó:lú:tì/",
    "/bolt/",
    "/a:ron:ji/",
    "Bolt_Edun"
  ),
  new Item(
    "bottle",
    "Ìgò",
    "karama",
    "kwalban",
    "/Ì:gò/",
    "/ka:ra:ma/",
    "/kwa:l:ban/",
    "Bottle_Ìgò"
  ),
  new Item(
    "box",
    "Àpótí",
    "igbe",
    "akwatin",
    "/À:pó:tí/",
    "/i:gbe/",
    "/a:kwa:tn/",
    "Box_Àpótí"
  ),
  new Item(
    "brick",
    "Òkúta",
    "brik",
    "bulo",
    "/Ò:kú:ta/",
    "/br'ek/",
    "/bu:lo/",
    "Brick_Òkúta"
  ),
  new Item(
    "bookcase",
    "Àpò ìwé",
    "akwụkwọ",
    "akwatin littafi",
    "/À:pò:wé/",
    "/a:kwu:kwo/",
    "/a:kwa:tin li:ta:fi/",
    "BookCase_Àpò-ìwé"
  ),
  new Item(
    "kernel",
    "Èkùró",
    "kernel",
    "kwaya",
    "/È:kù:ró/",
    "/kernel/",
    "/kwa:ya/",
    "Kernel_ekuro"
  ),
  new Item(
    "garbage",
    "Ìdòtí",
    "mkpofu",
    "datti",
    "/Ì:dò:tí/",
    "/po:fu/",
    "/da:ti/",
    "Garbage_Ìdòtí"
  ),
  new Item(
    "foam",
    "Fóómù",
    "ụfụfụ",
    "kumfa",
    "/Fóó:mù/",
    "/u:fu:fu/",
    "/ku:m:fa/",
    "Foam_Fóómù"
  ),
  new Item(
    "book",
    "Ìwé",
    "akwụkwọ",
    "littafi",
    "/Ì:wé/",
    "/li:ta:fi/",
    "/aku:ko/",
    "Book-Ìwé"
  ),

  new Item(
    "container",
    "Àwòn àpótí",
    "akpa",
    "ganga",
    "/À:wòn à:pó:tí/",
    "/a:pa/",
    "/ga:n:ga/",
    "Containers_Àwòn àpótí"
  ),

  new Item(
    "camera",
    "Ayàwòrán",
    "igwefoto",
    "kamara",
    "/A:yà:wò:rán/",
    "/i:gue:fo:to/",
    "/ka:ma:ra/",
    "Camera_Ayàwòrán"
  ),
  new Item(
    "hammer",
    "Òòlù",
    "hama",
    "guduma",
    "/Òò:lù/",
    "/a:ma/",
    "/gu:du:ma/",
    "Hammer_Òòlù"
  ),
  new Item(
    "grain",
    "Okà",
    "ọka",
    "hatsi",
    "/O:kà/",
    "/oka/",
    "/at:si/",
    "Grain_Okà"
  ),
  new Item(
    "pen",
    "Gègé Ìkòwé",
    "pen",
    "alkalami",
    "/Gè:gé Ì:kò:wé/",
    "/pen/",
    "/al:kal:mi/",
    "Pen_Ìkòwé"
  ),
  new Item(
    "hair-dryer",
    "Èro Ìgbe’run",
    "onye na-ehicha ntutu",
    "na'urar bushewa",
    "/È:ro Ì:gbe’:run/",
    "/onye na-etʃi:tʃa: ntu:tu:/",
    "/bu:she:wa/",
    "Hair-dryer_Èro Ìgbe’run"
  ),

  new Item(
    "headphone",
    "Àgbékórí",
    "ekweisi",
    "headphone",
    "/À:gbé:kó:rí/",
    "/e:kwei:si/",
    "/hed feun/",
    "Headphone_Àgbékórí"
  ),

  new Item(
    "jar",
    "Ide",
    "ite",
    "kwalba",
    "/I:de/",
    "/i:te/",
    "/kwa:lba:/",
    "Jar_Ide"
  ),
  new Item(
    "jewelry",
    "Ohun òsó",
    "ọla",
    "kayan ado",
    "/O:hun ò:só/",
    "/o:la/",
    "/ka:yan_a:do/",
    "Jewelry_Ohun-òsó"
  ),
  new Item(
    "key",
    "Kókóró",
    "igodo",
    "maɓalli",
    "/Kó:kó:ró/",
    "/i:go:do/",
    "/ma:ba:li/",
    "Key_Kókóró"
  ),
  new Item(
    "lingerie",
    "Àwòtélè",
    "uwe ime",
    "kamfai",
    "/À:wò:té:lè/",
    "/ka:m:fi/",
    "/u:we_i:me/",
    "Lingerie_Àwòtélè"
  ),
  new Item(
    "lamp",
    "Àtùpà",
    "oriọna",
    "fitila",
    "/À:tù:pà/",
    "/oriona:/",
    "/fitila:/",
    "Lamp_Àtùpà"
  ),
  new Item(
    "lock",
    "Títììpa",
    "mkpọchi",
    "kulle",
    "/Tí:tìì:pa/",
    "/po:chi/",
    "/ku:le/",
    "Lock_Títììpa"
  ),
  new Item(
    "mug",
    "Agolo",
    "iko",
    "mug",
    "/A:go:lo/",
    "/iko/",
    "/ma:g/",
    "Mugs-Agolo"
  ),
  new Item(
    "medicine",
    "Àwòn òògùn",
    "ọgwụ",
    "magani",
    "/À:wòn òò:gùn/",
    "/o:gu/",
    "/ma:ga:ni/",
    "Medicine_Àwòn-òògùn"
  ),
  new Item(
    "mail",
    "Méélì",
    "ozi",
    "mail",
    "/Méé:lì/",
    "/o:zi/",
    "/meil/",
    "Mail_Méélì"
  ),

  new Item(
    "makeup",
    "Ìfipajú",
    "etemeete",
    "kayan shafa",
    "/Ì:fi:pa:jú/",
    "/e:te:me|te/",
    "/ka:yan_sha:fa/",
    "Make-Up_Ìfipajú"
  ),
  new Item(
    "perfume",
    "Lófíndà",
    "senti",
    "turare",
    "/Ló:fí:n:dà/",
    "/se:n:ti/",
    "/tu:ra:re/",
    "Perfume_Lófíndà"
  ),
  new Item(
    "pitcher",
    "Làdùgbo",
    "ọkpọ",
    "tulu",
    "/Là:dù:gbo/",
    "/tu:lu/",
    "/o:po/",
    "Pitcher_Làdùgbo"
  ),
  new Item(
    "printer",
    "Ìtèwé",
    "ngwa nbipute",
    "printer",
    "/Ì:tè:wé/",
    "/n:wa_n:bi:pu:te/",
    "/printe/",
    "Printer_Ìtèwé"
  ),
  new Item(
    "pressure cooker",
    "Olùdáná títè",
    "nrụgide osi nri",
    "matsa lamba cooker",
    "/O:lù:dá:ná tí:tè/",
    "/nru:gi:de oʃi nri:/",
    "/ma:tsa la:mba ku:ka:/",
    "Pressure-Cooker_Olùdáná-títè"
  ),

  new Item(
    "radio",
    "Rédíò",
    "redio",
    "rediyo",
    "/Ré:dí:ò/",
    "/redio/",
    "/re:di:yo/",
    "Radio_Rédíò"
  ),
  new Item(
    "raincoat",
    "Aso Ewu",
    "raincoat",
    "raincoat",
    "/A:so E:wu/",
    "/reinkeut/",
    "/reinkeut/",
    "RainCoat_Aso-Ewu"
  ),
  new Item(
    "ribbon",
    "Teerē",
    "rịbọn",
    "ribbon",
    "/Te:e:rē/",
    "/ri:bon/",
    "/ri:bon/",
    "Ribbon_Teerē"
  ),
  new Item(
    "rifle",
    "Ìbon",
    "égbè",
    "bindiga",
    "/Ì:bon/",
    "/bi:n:di:ga/",
    "/e:be/",
    "Rifle_Ìbon"
  ),
  new Item(
    "rug",
    "Àwòn aso àtèrìn ",
    "akwa",
    "rug",
    "/À:wòn a:so à:tè:rìn/",
    "/a:kwa/",
    "/rog/",
    "Rugs_Àwòn aso àtèrìn"
  ),
  new Item(
    "stereo",
    "Sítéríò",
    "stereo",
    "sitiriyo",
    "/Sí:té:rí:ò/",
    "/sterio/",
    "/si:t:ri:yo/",
    "Stereo_Sítéríò"
  ),
  new Item(
    "shades",
    "Àwòn ìbòji",
    "shades",
    "inuwa",
    "/À:wòn ì:bò:ji/",
    "/ʃa:ds/",
    "/i:nu:wa/",
    "Shades_Àwòn ìbòji"
  ),
  new Item(
    "socks",
    "Ìbosè",
    "sọks",
    "safa",
    "/Ì:bo:sè/",
    "/suks/",
    "/sa:fa/",
    "Socks_Ìbosè"
  ),
  new Item(
    "stamp",
    "Àwòn òñtè",
    "stampụ",
    "tambari",
    "/À:wòn ò:ñ:tè/",
    "/sta:mpu:/",
    "/tam:ba:ri/",
    "Stamp_Àwòn òñtè"
  ),
  new Item(
    "sneakers",
    "Àwòn bàtà ìdárayá",
    "snịịka",
    "sneakers",
    "/À:wòn_bà:tà_ì:dá:ra:yá/",
    "/sni:ka/",
    "/sni:ka:s/",
    "Sneakers_Àwòn bàtà ìdárayá"
  ),

  new Item(
    "scarf",
    "síkáfù",
    "ịchafụ",
    "scarf",
    "/sí:ká:fù/",
    "/i:cha|fu/",
    "/ska:f/",
    "Scarf_síkáfù"
  ),
  new Item(
    "timers",
    "Aago",
    "oge",
    "masu lokaci",
    "/Aa:go/",
    "/o:ge/",
    "/ma:su: loka:si:/",
    "Timers_Aago"
  ),
  new Item(
    "trumpet",
    "Ìpè",
    "opi",
    "ƙaho",
    "/Ì:pè/",
    "/o:pi/",
    "/ka:hu:/",
    "Trumpet_Ìpè"
  ),

  new Item(
    "tissue",
    "Àwòn ìsàn",
    "anụ ahụ",
    "nama",
    "/À:wòn ì:sàn/",
    "/a:nu ahu:/",
    "/na:ma/",
    "Tissue_Àwòn ìsàn"
  ),
  new Item(
    "oven",
    "Àdìro",
    "oven",
    "tanda",
    "/À:dì:ro/",
    "/euvn/",
    "/ta:da/",
    "Oven_Àdìro"
  ),
  new Item(
    "vent",
    "Ihò",
    "ventilashị",
    "iska",
    "/I:hò/",
    "/venti:la:ʃn/",
    "/is:ka/",
    "Vent_Ihò"
  ),
  new Item(
    "washer",
    "Ìfoso",
    "washer",
    "injin wanki",
    "/Ì:fo:so/",
    "/wa:ʃe/",
    "/n:jin wan:ki/",
    "Washer_Ìfoso"
  ),
  new Item(
    "vacuum",
    "Ìgbálè",
    "agụụ",
    "injin",
    "/Ì:gbá:lè/",
    "/a:gu:/",
    "/i:ndʒn/",
    "Vacuum_Ìgbálè"
  ),
  new Item(
    "torch",
    "Ògùsò",
    "ọkụ",
    "fitila",
    "/Ò:gù:sò/",
    "/fi:ti:la/",
    "/O:ku/",
    "Torch_Ògùsò"
  ),
  new Item(
    "yardstick",
    "Okùn okùn",
    "yardstick",
    "yadi",
    "/O:kùn o:kùn/",
    "/ya:dstik/",
    "/ya:di/",
    "YardStick_Okùn-okùn"
  ),

  new Item(
    "yarn",
    "Òwú",
    "yarn",
    "yarn",
    "/Ò:wú/",
    "/ya:n/",
    "/ya:n/",
    "Yarn_Òwú"
  ),
  new Item(
    "hanger",
    "Kóórí",
    "hanga",
    "hanger",
    "/Kó:ó:rí/",
    "/an:ga/",
    "ha:nga:",
    "Hanger_Kóórí"
  ),
  new Item(
    "wardrobe",
    "Asò",
    "wodrobu",
    "wardrobe",
    "/A:sò/",
    "/wodro:bu:/",
    "/wa:dreub/",
    "Wardrobe_Asò"
  ),
  new Item(
    "zipper",
    "Àpò ìdálénū",
    "zipa",
    "zik din",
    "/À:pò ì:dá:lé:nū/",
    "/zi:pa:/",
    "/zik:din/",
    "Zipper_ Àpò ìdálénū"
  ),
  new Item(
    "brush",
    "Félé",
    "ahịhịa",
    "goga",
    "/Fé:lé/",
    "/a:yi:ya/",
    "/go:ga/",
    "Brush_Félé"
  ),
  new Item(
    "telephone",
    "Tēlifóónù",
    "ekwentị",
    "tarho",
    "/Tē:li:fóó:nù/",
    "/ta:ho/",
    "/e:ku:e|n:ti/",
    "Telephone _ Tēlifóónù"
  ),

  new Item(
    "toothpaste",
    "Ehín elé",
    "ihe ntacha eze",
    "man goge baki",
    "/E:hín e:lé/",
    "/ihe ntatʃa: eze/",
    "/go:ge_ba:ki/",
    "ToothPaste_Ehín-elé"
  ),

  new Item(
    "staple",
    "Amúnkanmóra",
    "staple",
    "matsi",
    "/A:mú:n:kan:mó:ra/",
    "/steipl/",
    "/mat:si/",
    "Stapler_Amukanmora"
  ),
];