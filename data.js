// ========================================
// DATA.JS - Fichier principal de données
// ========================================
// Ce fichier combine toutes les données de l'application
// Les fichiers champions sont chargés séparément via index.html

// ========================================
// CONFIGURATION DES CATÉGORIES
// ========================================
const CATEGORY_CONFIG = {
    fighter: { label: "Fighter", color: "#f97316", icon: "⚔️" },
    mage: { label: "Mage", color: "#8b5cf6", icon: "🔮" },
    tank: { label: "Tank", color: "#22c55e", icon: "🛡️" },
    marksman: { label: "Marksman", color: "#ef4444", icon: "🎯" },
    assassin: { label: "Assassin", color: "#6366f1", icon: "🗡️" },
    support: { label: "Support", color: "#06b6d4", icon: "💚" },
    boots: { label: "Bottes", color: "#eab308", icon: "👢" }
};

// ========================================
// CONFIGURATION DES STATS
// ========================================
const STAT_CONFIG = {
    hp: { label: "Points de vie", short: "HP", color: "#22c55e" },
    mana: { label: "Mana", short: "Mana", color: "#3b82f6" },
    ad: { label: "Dégâts d'attaque", short: "AD", color: "#f97316" },
    ap: { label: "Puissance magique", short: "AP", color: "#8b5cf6" },
    armor: { label: "Armure", short: "Armor", color: "#eab308" },
    mr: { label: "Résist. magique", short: "MR", color: "#a855f7" },
    as: { label: "Vitesse d'attaque", short: "AS", color: "#facc15" },
    crit: { label: "Chance critique", short: "Crit", color: "#f43f5e" },
    ms: { label: "Vitesse", short: "MS", color: "#14b8a6" },
    ah: { label: "Accélération", short: "AH", color: "#ec4899" },
    lethality: { label: "Létalité", short: "Leth", color: "#6366f1" },
    armorPen: { label: "% Pén. armure", short: "Armor Pen", color: "#f59e0b" },
    magicPen: { label: "Pén. magique", short: "Magic Pen", color: "#c084fc" },
    magicPenPercent: { label: "% Pén. magique", short: "Magic Pen%", color: "#c084fc" },
    lifesteal: { label: "Vol de vie", short: "LS", color: "#ef4444" },
    omnivamp: { label: "Omnivamp", short: "OV", color: "#be123c" },
    tenacity: { label: "Ténacité", short: "Tenacity", color: "#d946ef" },
    hpRegen: { label: "Régén. HP", short: "HP5", color: "#22c55e" },
    manaRegen: { label: "Régén. Mana", short: "MP5", color: "#3b82f6" },
    shieldPower: { label: "Puiss. bouclier", short: "Shield", color: "#f0e6d2" },
    healPower: { label: "Puiss. soin", short: "Heal", color: "#22c55e" }
};

// ========================================
// ITEMS DATA (depuis items_database.js)
// ========================================
// Note: ITEMS_DATABASE est chargé via items_database.js
// On extrait juste les items pour compatibilité avec l'app existante
let ITEMS_DATA = [];

// Fonction pour initialiser ITEMS_DATA après chargement
function initItemsData() {
    if (typeof ITEMS_DATABASE !== 'undefined' && ITEMS_DATABASE.items) {
        ITEMS_DATA = ITEMS_DATABASE.items.map(item => ({
            id: item.id,
            name: item.name,
            category: item.category,
            cost: item.cost,
            icon: item.icon,
            stats: item.stats,
            passive: item.passive ? item.passive.description : null,
            passiveName: item.passive ? item.passive.name : null
        }));
    }
}

// ========================================
// CHAMPIONS DATA (depuis fichiers A-Z)
// ========================================
let CHAMPIONS_DATA = [];

// Fonction pour combiner tous les champions
function initChampionsData() {
    const allChampions = [];
    
    // Liste des tableaux de champions (chargés via script tags)
    const championArrays = [
        typeof CHAMPIONS_A !== 'undefined' ? CHAMPIONS_A : [],
        typeof CHAMPIONS_B !== 'undefined' ? CHAMPIONS_B : [],
        typeof CHAMPIONS_C !== 'undefined' ? CHAMPIONS_C : [],
        typeof CHAMPIONS_D !== 'undefined' ? CHAMPIONS_D : [],
        typeof CHAMPIONS_E !== 'undefined' ? CHAMPIONS_E : [],
        typeof CHAMPIONS_F !== 'undefined' ? CHAMPIONS_F : [],
        typeof CHAMPIONS_G !== 'undefined' ? CHAMPIONS_G : [],
        typeof CHAMPIONS_H !== 'undefined' ? CHAMPIONS_H : [],
        typeof CHAMPIONS_I !== 'undefined' ? CHAMPIONS_I : [],
        typeof CHAMPIONS_J !== 'undefined' ? CHAMPIONS_J : [],
        typeof CHAMPIONS_K !== 'undefined' ? CHAMPIONS_K : [],
        typeof CHAMPIONS_L !== 'undefined' ? CHAMPIONS_L : [],
        typeof CHAMPIONS_M !== 'undefined' ? CHAMPIONS_M : [],
        typeof CHAMPIONS_N !== 'undefined' ? CHAMPIONS_N : [],
        typeof CHAMPIONS_O !== 'undefined' ? CHAMPIONS_O : [],
        typeof CHAMPIONS_P !== 'undefined' ? CHAMPIONS_P : [],
        typeof CHAMPIONS_Q !== 'undefined' ? CHAMPIONS_Q : [],
        typeof CHAMPIONS_R !== 'undefined' ? CHAMPIONS_R : [],
        typeof CHAMPIONS_S !== 'undefined' ? CHAMPIONS_S : [],
        typeof CHAMPIONS_T !== 'undefined' ? CHAMPIONS_T : [],
        typeof CHAMPIONS_U !== 'undefined' ? CHAMPIONS_U : [],
        typeof CHAMPIONS_V !== 'undefined' ? CHAMPIONS_V : [],
        typeof CHAMPIONS_W !== 'undefined' ? CHAMPIONS_W : [],
        typeof CHAMPIONS_X !== 'undefined' ? CHAMPIONS_X : [],
        typeof CHAMPIONS_Y !== 'undefined' ? CHAMPIONS_Y : [],
        typeof CHAMPIONS_Z !== 'undefined' ? CHAMPIONS_Z : []
    ];
    
    championArrays.forEach(arr => {
        if (Array.isArray(arr)) {
            allChampions.push(...arr);
        }
    });
    
    // Trier par nom
    allChampions.sort((a, b) => a.name.localeCompare(b.name));
    
    CHAMPIONS_DATA = allChampions;
    console.log(`✅ ${CHAMPIONS_DATA.length} champions chargés`);
}

// ========================================
// RUNES - ARBRES PRINCIPAUX
// ========================================
const RUNE_TREES = {
    precision: {
        name: "Précision",
        icon: "⚔️",
        color: "#c8aa6e",
        keystones: [
            {
                id: "press_the_attack",
                name: "Pression continue",
                icon: "🎯",
                description: "3 attaques sur un champion lui font subir 40-180 dégâts bonus et le rendent vulnérable (+8-12% dégâts) pendant 6s.",
                stats: {}
            },
            {
                id: "lethal_tempo",
                name: "Tempo mortel",
                icon: "⚡",
                description: "Gagnez jusqu'à 90% de vitesse d'attaque bonus en attaquant des champions. En dépassant le max, gagnez de la portée.",
                stats: { as: 15 }
            },
            {
                id: "fleet_footwork",
                name: "Jeu de jambes",
                icon: "👟",
                description: "Attaquer et bouger génère des charges. À pleine charge, l'attaque soigne et accorde de la vitesse.",
                stats: {}
            },
            {
                id: "conqueror",
                name: "Conquérant",
                icon: "🗡️",
                description: "Les attaques et compétences génèrent des stacks (2-5 par hit). À 12 stacks: +12-36 AD/AP adaptatif et 8% omnivamp.",
                stats: {}
            }
        ],
        slots: [
            // Slot 1
            [
                { id: "overheal", name: "Soin excessif", icon: "💚", description: "Le soin excédentaire se convertit en bouclier (10% HP max).", stats: {} },
                { id: "triumph", name: "Triomphe", icon: "🏆", description: "Takedowns restaurent 10% HP manquants et accordent 20 or.", stats: {} },
                { id: "presence_of_mind", name: "Présence d'esprit", icon: "💧", description: "Dégâts aux champions restaurent du mana. Takedowns restaurent 15% mana max.", stats: {} }
            ],
            // Slot 2
            [
                { id: "legend_alacrity", name: "Légende: Célérité", icon: "⚡", description: "Gagnez 3% AS + 1.5% par stack Légende (max 10).", stats: { as: 3 } },
                { id: "legend_haste", name: "Légende: Hâte", icon: "⏱️", description: "Gagnez 5 AH + 2.5 par stack Légende (max 10).", stats: { ah: 5 } },
                { id: "legend_bloodline", name: "Légende: Lignée", icon: "🩸", description: "Gagnez 0.35% vol de vie par stack Légende (max 10) + 85 HP max à 10.", stats: {} }
            ],
            // Slot 3
            [
                { id: "coup_de_grace", name: "Coup de grâce", icon: "💀", description: "+8% dégâts aux cibles sous 40% HP.", stats: {} },
                { id: "cut_down", name: "Abattage", icon: "🪓", description: "+5-15% dégâts aux champions avec plus de HP max que vous.", stats: {} },
                { id: "last_stand", name: "Baroud d'honneur", icon: "🛡️", description: "+5-11% dégâts quand vous êtes sous 60% HP.", stats: {} }
            ]
        ]
    },
    domination: {
        name: "Domination",
        icon: "🗡️",
        color: "#e84057",
        keystones: [
            {
                id: "electrocute",
                name: "Électrocution",
                icon: "⚡",
                description: "Toucher un champion avec 3 attaques/compétences distinctes en 3s inflige 30-180 (+40% bonus AD)(+25% AP) dégâts adaptatifs.",
                stats: {}
            },
            {
                id: "dark_harvest",
                name: "Moisson sombre",
                icon: "👻",
                description: "Dégâts aux champions sous 50% HP infligent 20-60 (+5 par âme)(+25% bonus AD)(+15% AP) bonus et récoltent une âme.",
                stats: {}
            },
            {
                id: "hail_of_blades",
                name: "Grêle de lames",
                icon: "🗡️",
                description: "Les 3 premières attaques sur un champion gagnent 110% AS et ignorent le cap AS.",
                stats: {}
            },
            {
                id: "predator",
                name: "Prédateur",
                icon: "👟",
                description: "Activez sur les bottes: gagnez MS et infligez 40-120 (+20% bonus AD)(+10% AP) dégâts adaptatifs au premier champion touché.",
                stats: {}
            }
        ],
        slots: [
            [
                { id: "cheap_shot", name: "Coup bas", icon: "🎯", description: "Infligez 10-45 vrais dégâts aux champions avec mouvements altérés.", stats: {} },
                { id: "taste_of_blood", name: "Goût du sang", icon: "🩸", description: "Soigne 16-30 (+15% bonus AD)(+8% AP) en touchant un champion (20s CD).", stats: {} },
                { id: "sudden_impact", name: "Impact soudain", icon: "💨", description: "Après dash/blink/téléport, gagnez 7 létalité et 6 pén. magique 5s.", stats: {} }
            ],
            [
                { id: "zombie_ward", name: "Ward zombie", icon: "👁️", description: "Les wards détruites deviennent des wards alliées. +1.2 AD/2 AP par ward (max 10).", stats: {} },
                { id: "ghost_poro", name: "Poro fantôme", icon: "👻", description: "Les wards expirées laissent un Poro qui accorde vision. +1.2 AD/2 AP par Poro (max 10).", stats: {} },
                { id: "eyeball_collection", name: "Collection d'yeux", icon: "👀", description: "+1.2 AD ou 2 AP par takedown (max 10). À 10: +6 AD ou 10 AP bonus.", stats: {} }
            ],
            [
                { id: "treasure_hunter", name: "Chasseur de trésors", icon: "💰", description: "Gagnez 50 or (+20 par stack unique) sur les takedowns de champions uniques.", stats: {} },
                { id: "ingenious_hunter", name: "Chasseur ingénieux", icon: "⚙️", description: "+10 AH items (+5 par stack unique, max 5) sur takedowns.", stats: { ah: 10 } },
                { id: "relentless_hunter", name: "Chasseur acharné", icon: "👟", description: "+5 MS hors combat (+4 par stack unique, max 5) sur takedowns.", stats: { ms: 1 } },
                { id: "ultimate_hunter", name: "Chasseur ultime", icon: "💠", description: "+6% AH ultime (+5% par stack unique, max 5) sur takedowns.", stats: {} }
            ]
        ]
    },
    sorcery: {
        name: "Sorcellerie",
        icon: "🔮",
        color: "#9b59b6",
        keystones: [
            {
                id: "summon_aery",
                name: "Invocation d'Aery",
                icon: "🦋",
                description: "Vos attaques/compétences envoient Aery infliger 10-40 (+10% bonus AD)(+15% AP) ou bouclier un allié de 30-75 (+25% bonus AD)(+40% AP).",
                stats: {}
            },
            {
                id: "arcane_comet",
                name: "Comète arcanique",
                icon: "☄️",
                description: "Toucher un champion avec une compétence lance une comète (30-100 +20% bonus AD +10% AP). CD réduit par hits.",
                stats: {}
            },
            {
                id: "phase_rush",
                name: "Rush de phase",
                icon: "💨",
                description: "3 attaques/compétences sur un champion en 4s accordent 25-40% MS et 75% résistance aux slows 3s.",
                stats: {}
            }
        ],
        slots: [
            [
                { id: "nullifying_orb", name: "Orbe annihilant", icon: "🔮", description: "Sous 30% HP, gagnez bouclier magique de 35-110 (+25% bonus AD)(+30% AP) vs dégâts magiques.", stats: {} },
                { id: "manaflow_band", name: "Ruban de mana", icon: "💧", description: "Toucher champions accorde 25 mana max (max 250). À max: restaure 1% mana manquant/5s.", stats: {} },
                { id: "nimbus_cloak", name: "Cape de Nimbus", icon: "☁️", description: "Sorts d'invocateur accordent 5-25% MS ghosted pendant 2s.", stats: {} }
            ],
            [
                { id: "transcendence", name: "Transcendance", icon: "⏱️", description: "Niv 5: +5 AH. Niv 8: +5 AH. Niv 11: Takedowns réduisent CD de 20%.", stats: { ah: 5 } },
                { id: "celerity", name: "Célérité", icon: "👟", description: "+7% bonus MS.", stats: { ms: 1 } },
                { id: "absolute_focus", name: "Focalisation absolue", icon: "🎯", description: "+1.8-18 AD ou 3-30 AP (selon niveau) quand au-dessus de 70% HP.", stats: {} }
            ],
            [
                { id: "scorch", name: "Brûlure", icon: "🔥", description: "Les compétences brûlent champions pour 20-40 dégâts magiques après 1s.", stats: {} },
                { id: "waterwalking", name: "Marche sur l'eau", icon: "🌊", description: "Dans la rivière: +25 MS et 3-18 AD ou 5-30 AP adaptatif.", stats: {} },
                { id: "gathering_storm", name: "Tempête grandissante", icon: "🌪️", description: "Gagnez AD/AP croissant: +4.8 AD ou 8 AP à 10min, scale jusqu'à +48/80 à 40min.", stats: {} }
            ]
        ]
    },
    resolve: {
        name: "Volonté",
        icon: "🛡️",
        color: "#2ecc71",
        keystones: [
            {
                id: "grasp_of_the_undying",
                name: "Emprise des morts-vivants",
                icon: "✊",
                description: "En combat, chargez stack. À pleine charge, attaque: +4% HP max dégâts, +2% HP max heal, +3-9 HP permanent.",
                stats: { hp: 80 }
            },
            {
                id: "aftershock",
                name: "Réplique",
                icon: "💥",
                description: "Après immobilisation: +35 armor/MR 2.5s, puis explosion (25-120 +8% HP bonus) dégâts.",
                stats: {}
            },
            {
                id: "guardian",
                name: "Gardien",
                icon: "🛡️",
                description: "Proche d'un allié, si l'un prend dégâts: les deux gagnent bouclier (45-120 +15% AP +9% HP bonus) et 20% MS.",
                stats: {}
            }
        ],
        slots: [
            [
                { id: "demolish", name: "Démolition", icon: "🔨", description: "Chargez sur tourettes pendant 3s. Attaque: 100-250 (+35% HP max) dégâts bonus.", stats: {} },
                { id: "font_of_life", name: "Fontaine de vie", icon: "💚", description: "Altérer mouvement ennemi le marque 4s. Alliés qui attaquent: heal 5 +1% HP max.", stats: {} },
                { id: "shield_bash", name: "Coup de bouclier", icon: "🛡️", description: "Avec bouclier: +1-10 armor/MR. Prochaine attaque: +5-15 (+1.5% bouclier)(+8.5% HP bonus).", stats: {} }
            ],
            [
                { id: "conditioning", name: "Conditionnement", icon: "💪", description: "À 12min: +8 armor et MR, +3% armor et MR bonus.", stats: {} },
                { id: "second_wind", name: "Second souffle", icon: "🌬️", description: "Après dégâts de champion, regen 3 +4% HP manquants sur 10s.", stats: {} },
                { id: "bone_plating", name: "Plaque d'os", icon: "🦴", description: "Après dégâts de champion, les 3 prochains hits/compétences font -30-60 dégâts.", stats: {} }
            ],
            [
                { id: "overgrowth", name: "Croissance excessive", icon: "🌱", description: "Minions/monstres morts nearby: +3 HP max permanent. À 120: +3.5% HP max bonus.", stats: { hp: 50 } },
                { id: "revitalize", name: "Revitalisation", icon: "💖", description: "+5% shields/heals. +10% sur cibles sous 40% HP.", stats: {} },
                { id: "unflinching", name: "Inébranlable", icon: "🗿", description: "+5-25% ténacité et résist slow (selon HP manquants).", stats: { tenacity: 5 } }
            ]
        ]
    },
    inspiration: {
        name: "Inspiration",
        icon: "✨",
        color: "#49c8f0",
        keystones: [
            {
                id: "glacial_augment",
                name: "Augment glacial",
                icon: "❄️",
                description: "Immobiliser un champion crée une zone qui slow de 30% et réduit dégâts de 15% pendant 3s.",
                stats: {}
            },
            {
                id: "unsealed_spellbook",
                name: "Grimoire descellé",
                icon: "📖",
                description: "Échangez un sort d'invocateur contre un nouveau (une fois par sort). +15s sommeil puis -25s CD sorts.",
                stats: {}
            },
            {
                id: "first_strike",
                name: "Premier coup",
                icon: "💰",
                description: "Si vous frappez un champion en premier: +9% dégâts 3s et gagnez 100% (70% distance) de ces dégâts bonus en or.",
                stats: {}
            }
        ],
        slots: [
            [
                { id: "hextech_flashtraption", name: "Hextraption", icon: "⚡", description: "En canal, Flash devient Hexflash (portée réduite).", stats: {} },
                { id: "magical_footwear", name: "Chaussures magiques", icon: "👟", description: "Bottes gratuites à 12min (-45s par takedown). +10 MS bonus.", stats: { ms: 2 } },
                { id: "cash_back", name: "Remise en argent", icon: "💰", description: "Recevez 8% du coût d'un item légendaire en or après achat.", stats: {} }
            ],
            [
                { id: "triple_tonic", name: "Triple tonique", icon: "🧪", description: "À 2min, recevez 3 potions utilisables une fois (vitesse, AD/AP, mana/HP regen).", stats: {} },
                { id: "time_warp_tonic", name: "Distorsion temporelle", icon: "⏰", description: "Potions: 50% immédiat + 5% MS pendant effet.", stats: {} },
                { id: "biscuit_delivery", name: "Livraison de biscuits", icon: "🍪", description: "Recevez un biscuit à 2, 4, 6min. Restore 8% HP/mana manquants. +50 mana max permanent.", stats: {} }
            ],
            [
                { id: "cosmic_insight", name: "Perspicacité cosmique", icon: "🌌", description: "+18 AH sorts d'invocateur, +10 AH items.", stats: { ah: 10 } },
                { id: "approach_velocity", name: "Vélocité d'approche", icon: "🏃", description: "+7.5% MS vers champions alliés ou ennemis avec mouvements altérés.", stats: { ms: 1 } },
                { id: "jack_of_all_trades", name: "Touche-à-tout", icon: "🎲", description: "Gagnez +2 AH par type de stat bonus unique (max 10, soit +20 AH).", stats: {} }
            ]
        ]
    }
};

// ========================================
// STAT SHARDS (Fragments de stats)
// ========================================
const STAT_SHARDS = {
    offense: [
        { id: "shard_as", name: "+10% AS", icon: "⚡", stats: { as: 10 } },
        { id: "shard_ad", name: "+5.4 AD", icon: "⚔️", stats: { ad: 5.4 } },
        { id: "shard_ap", name: "+9 AP", icon: "🔮", stats: { ap: 9 } },
        { id: "shard_ah", name: "+8 AH", icon: "⏱️", stats: { ah: 8 } }
    ],
    flex: [
        { id: "shard_flex_ad", name: "+5.4 AD", icon: "⚔️", stats: { ad: 5.4 } },
        { id: "shard_flex_ap", name: "+9 AP", icon: "🔮", stats: { ap: 9 } },
        { id: "shard_flex_hp", name: "+10-180 HP", icon: "❤️", stats: { hp: 90 } },
        { id: "shard_flex_ms", name: "+2% MS", icon: "👟", stats: { ms: 2 } }
    ],
    defense: [
        { id: "shard_hp", name: "+10-180 HP", icon: "❤️", stats: { hp: 90 } },
        { id: "shard_armor", name: "+6 Armor", icon: "🛡️", stats: { armor: 6 } },
        { id: "shard_mr", name: "+8 MR", icon: "✨", stats: { mr: 8 } },
        { id: "shard_tenacity", name: "+10% Ténacité", icon: "💪", stats: { tenacity: 10 } }
    ]
};

// ========================================
// INITIALISATION
// ========================================
// Cette fonction est appelée après que tous les scripts soient chargés
function initAllData() {
    initItemsData();
    initChampionsData();
    console.log("✅ Toutes les données initialisées");
    console.log(`   - ${ITEMS_DATA.length} items`);
    console.log(`   - ${CHAMPIONS_DATA.length} champions`);
}

// Initialiser automatiquement quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllData);
} else {
    // DOM déjà chargé, initialiser maintenant
    // Mais attendre un tick pour que tous les scripts soient exécutés
    setTimeout(initAllData, 0);
}
