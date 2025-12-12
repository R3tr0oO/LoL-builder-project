// ========================================
// BASE DE DONNÉES COMPLÈTE DES ITEMS - LEAGUE OF LEGENDS
// ========================================
// Mise à jour: Saison 2025
// Structure: id, name, category, cost, stats, passive, icon

const ITEMS_DATABASE = {
    // ========================================
    // CATÉGORIES
    // ========================================
    categories: {
        fighter: { name: "Fighter", icon: "⚔️", color: "#c8aa6e" },
        marksman: { name: "Marksman", icon: "🏹", color: "#ff4444" },
        mage: { name: "Mage", icon: "🔮", color: "#9b59b6" },
        assassin: { name: "Assassin", icon: "🗡️", color: "#e74c3c" },
        tank: { name: "Tank", icon: "🛡️", color: "#3498db" },
        support: { name: "Support", icon: "💚", color: "#2ecc71" },
        boots: { name: "Bottes", icon: "👢", color: "#f39c12" }
    },

    // ========================================
    // STATISTIQUES DISPONIBLES
    // ========================================
    statDefinitions: {
        ad: { name: "Attack Damage", short: "AD", icon: "⚔️" },
        ap: { name: "Ability Power", short: "AP", icon: "🔮" },
        hp: { name: "Health Points", short: "HP", icon: "❤️" },
        mana: { name: "Mana", short: "Mana", icon: "💧" },
        armor: { name: "Armor", short: "Armor", icon: "🛡️" },
        mr: { name: "Magic Resist", short: "MR", icon: "✨" },
        as: { name: "Attack Speed", short: "AS%", icon: "⚡" },
        crit: { name: "Critical Strike", short: "Crit%", icon: "💥" },
        lethality: { name: "Lethality", short: "Leth", icon: "🗡️" },
        armorPen: { name: "Armor Penetration", short: "Armor Pen%", icon: "🔪" },
        magicPen: { name: "Magic Penetration", short: "Magic Pen", icon: "💜" },
        magicPenPercent: { name: "Magic Pen %", short: "Magic Pen%", icon: "💜" },
        ah: { name: "Ability Haste", short: "AH", icon: "⏱️" },
        ms: { name: "Movement Speed", short: "MS", icon: "💨" },
        lifesteal: { name: "Life Steal", short: "LS%", icon: "🩸" },
        omnivamp: { name: "Omnivamp", short: "OV%", icon: "💉" },
        hpRegen: { name: "HP Regen", short: "HP5", icon: "💗" },
        manaRegen: { name: "Mana Regen", short: "MP5", icon: "💙" },
        shieldPower: { name: "Shield Power", short: "Shield%", icon: "🛡️" },
        healPower: { name: "Heal Power", short: "Heal%", icon: "💚" },
        tenacity: { name: "Tenacity", short: "Tenacity%", icon: "💪" }
    },

    // ========================================
    // ITEMS - FIGHTER
    // ========================================
    items: [
        // === FIGHTER ITEMS ===
        {
            id: 1001,
            name: "Trinity Force",
            category: "fighter",
            cost: 3333,
            icon: "🔺",
            stats: { ad: 45, as: 30, ah: 20, hp: 300, ms: 0 },
            passive: {
                name: "Spellblade",
                description: "Après avoir utilisé une compétence, la prochaine attaque de base inflige 200% de l'AD de base en dégâts physiques bonus (1.5s CD).",
                unique: true
            },
            passiveSecondary: {
                name: "Threefold Strike",
                description: "Les attaques de base accordent 4% de MS bonus pendant 3s, jusqu'à 12% (3 stacks)."
            }
        },
        {
            id: 1002,
            name: "Divine Sunderer",
            category: "fighter",
            cost: 3100,
            icon: "⚡",
            stats: { ad: 40, ah: 20, hp: 400 },
            passive: {
                name: "Spellblade",
                description: "Après une compétence, la prochaine attaque inflige 9% des PV max de la cible en dégâts physiques bonus (min 150% AD base) et soigne de 65% des dégâts (6% pour distance).",
                unique: true
            }
        },
        {
            id: 1003,
            name: "Black Cleaver",
            category: "fighter",
            cost: 3000,
            icon: "🪓",
            stats: { ad: 45, hp: 450, ah: 20 },
            passive: {
                name: "Carve",
                description: "Les dégâts physiques infligés aux champions réduisent leur armure de 5% pendant 6s, jusqu'à 30% (6 stacks).",
                unique: true
            },
            passiveSecondary: {
                name: "Rage",
                description: "Infliger des dégâts physiques accorde 5 MS pendant 2s, jusqu'à 30 MS."
            }
        },
        {
            id: 1004,
            name: "Sterak's Gage",
            category: "fighter",
            cost: 3100,
            icon: "🛡️",
            stats: { ad: 50, hp: 400 },
            passive: {
                name: "Lifeline",
                description: "Quand vous subissez des dégâts qui vous mettraient sous 30% PV, gagnez un bouclier égal à 75% de votre AD bonus pendant 3.75s (60s CD).",
                unique: true
            },
            passiveSecondary: {
                name: "The Claws that Catch",
                description: "+8% AD base en AD bonus."
            }
        },
        {
            id: 1005,
            name: "Goredrinker",
            category: "fighter",
            cost: 3100,
            icon: "🩸",
            stats: { ad: 55, ah: 20, hp: 450, hpRegen: 150 },
            passive: {
                name: "Thirsting Slash",
                description: "ACTIF: Inflige (100% AD) dégâts aux ennemis proches et soigne de 25% AD (+8% PV manquants) par champion touché (15s CD).",
                unique: true,
                active: true
            },
            passiveSecondary: {
                name: "Spite",
                description: "+0-15% AD basé sur les PV manquants."
            }
        },
        {
            id: 1006,
            name: "Stridebreaker",
            category: "fighter",
            cost: 3100,
            icon: "🌀",
            stats: { ad: 50, as: 20, hp: 400, ah: 15 },
            passive: {
                name: "Halting Slash",
                description: "ACTIF: Dash de 300 unités et inflige 100% AD aux ennemis proches, les ralentissant de 40% pendant 3s (15s CD).",
                unique: true,
                active: true
            },
            passiveSecondary: {
                name: "Heroic Gait",
                description: "Infliger des dégâts physiques accorde 20 MS pendant 2s."
            }
        },
        {
            id: 1007,
            name: "Ravenous Hydra",
            category: "fighter",
            cost: 3400,
            icon: "🐉",
            stats: { ad: 70, ah: 20, omnivamp: 10 },
            passive: {
                name: "Cleave",
                description: "Les attaques et compétences infligent 60% AD en dégâts physiques aux ennemis proches de la cible.",
                unique: true
            }
        },
        {
            id: 1008,
            name: "Titanic Hydra",
            category: "fighter",
            cost: 3300,
            icon: "🦖",
            stats: { ad: 50, hp: 500, hpRegen: 150 },
            passive: {
                name: "Cleave",
                description: "Les attaques infligent 4% de vos PV max en dégâts dans un cône derrière la cible.",
                unique: true
            },
            passiveSecondary: {
                name: "Colossus",
                description: "+2% de vos PV max en AD bonus."
            }
        },
        {
            id: 1009,
            name: "Death's Dance",
            category: "fighter",
            cost: 3300,
            icon: "💀",
            stats: { ad: 55, armor: 45, ah: 15 },
            passive: {
                name: "Ignore Pain",
                description: "35% des dégâts physiques subis sont infligés en dégâts vrais sur 3s.",
                unique: true
            },
            passiveSecondary: {
                name: "Defy",
                description: "Les takedowns sur champions dans les 3s soignent 120% de votre AD bonus sur 2s."
            }
        },
        {
            id: 1010,
            name: "Maw of Malmortius",
            category: "fighter",
            cost: 2900,
            icon: "🐺",
            stats: { ad: 65, mr: 40, ah: 15 },
            passive: {
                name: "Lifeline",
                description: "Quand vous subissez des dégâts magiques qui vous mettraient sous 30% PV, gagnez un bouclier magique de 200 (+20% PV max) pendant 5s (90s CD).",
                unique: true
            },
            passiveSecondary: {
                name: "Lifegrip",
                description: "Pendant Lifeline, gagnez 12% omnivamp."
            }
        },
        {
            id: 1011,
            name: "Hullbreaker",
            category: "fighter",
            cost: 3000,
            icon: "⚓",
            stats: { ad: 60, hp: 400, hpRegen: 150 },
            passive: {
                name: "Boarding Party",
                description: "Seul: gagnez 10-60 armor/MR et vos sbires proches gagnent 60-180 armor/MR et 20-90% dégâts. Contre les structures: +20% dégâts bonus.",
                unique: true
            }
        },
        {
            id: 1012,
            name: "Sundered Sky",
            category: "fighter",
            cost: 3100,
            icon: "☀️",
            stats: { ad: 55, hp: 300, ah: 15 },
            passive: {
                name: "Lightshield Strike",
                description: "La première attaque sur un champion inflige 8% de leurs PV max bonus et vous soigne de (140% AD base) + (6% PV manquants) (8s CD par cible).",
                unique: true
            }
        },
        {
            id: 1013,
            name: "Spear of Shojin",
            category: "fighter",
            cost: 3100,
            icon: "🔱",
            stats: { ad: 55, hp: 400, ah: 20 },
            passive: {
                name: "Dragonforce",
                description: "Les compétences non-ultimes ont leur CD réduit de 12% à chaque utilisation (jusqu'à 24% après 2 utilisations).",
                unique: true
            },
            passiveSecondary: {
                name: "Focused Will",
                description: "Gain 0-20% AS bonus en fonction des PV manquants."
            }
        },
        {
            id: 1014,
            name: "Blade of the Ruined King",
            category: "fighter",
            cost: 3200,
            icon: "👑",
            stats: { ad: 40, as: 25, lifesteal: 10 },
            passive: {
                name: "Mist's Edge",
                description: "Les attaques infligent 9% (6% distance) des PV actuels de la cible en dégâts physiques bonus (60 dégâts max vs monstres).",
                unique: true
            },
            passiveSecondary: {
                name: "Siphon",
                description: "Le 3ème hit sur un champion vole 25% MS pendant 2s (20s CD)."
            }
        },
        {
            id: 1015,
            name: "Wit's End",
            category: "fighter",
            cost: 2800,
            icon: "⚡",
            stats: { as: 50, mr: 50, ms: 0 },
            passive: {
                name: "Fray",
                description: "Les attaques infligent 15-80 dégâts magiques bonus (selon niveau) et accordent 20 MS pendant 2s.",
                unique: true
            }
        },
        {
            id: 1016,
            name: "Terminus",
            category: "fighter",
            cost: 3000,
            icon: "⚖️",
            stats: { ad: 35, as: 30, armor: 25, mr: 25 },
            passive: {
                name: "Juxtaposition",
                description: "Les attaques alternent entre 2 modes: Light (dégâts magiques bonus + armor/MR) et Dark (dégâts physiques bonus + pénétration).",
                unique: true
            }
        },
        {
            id: 1017,
            name: "Eclipse",
            category: "fighter",
            cost: 2800,
            icon: "🌑",
            stats: { ad: 55, lethality: 18, omnivamp: 8 },
            passive: {
                name: "Ever Rising Moon",
                description: "Toucher un champion avec 2 attaques/compétences en 2s inflige 6% PV max bonus en dégâts physiques et accorde un bouclier (90 +12% AD bonus) pendant 1.75s (8s CD par cible).",
                unique: true
            }
        },
        {
            id: 1018,
            name: "Experimental Hexplate",
            category: "fighter",
            cost: 2800,
            icon: "🔋",
            stats: { ad: 55, hp: 300, as: 25 },
            passive: {
                name: "Hexcharged",
                description: "Lancer votre ultime accorde 35% AS et 15% MS pendant 6s (30s CD).",
                unique: true
            }
        },

        // === MARKSMAN ITEMS ===
        {
            id: 2001,
            name: "Infinity Edge",
            category: "marksman",
            cost: 3400,
            icon: "♾️",
            stats: { ad: 70, crit: 25 },
            passive: {
                name: "Perfection",
                description: "Si vous avez au moins 60% de chances de critique, vos coups critiques infligent 35% de dégâts supplémentaires.",
                unique: true
            }
        },
        {
            id: 2002,
            name: "Kraken Slayer",
            category: "marksman",
            cost: 3100,
            icon: "🐙",
            stats: { ad: 40, as: 25, crit: 25 },
            passive: {
                name: "Bring It Down",
                description: "Chaque 3ème attaque inflige 85 (+45% bonus AD) dégâts physiques vrais bonus.",
                unique: true
            }
        },
        {
            id: 2003,
            name: "Galeforce",
            category: "marksman",
            cost: 2800,
            icon: "🌬️",
            stats: { ad: 55, crit: 20, ms: 5 },
            passive: {
                name: "Cloudburst",
                description: "ACTIF: Dash de 275 unités et tire 3 projectiles sur l'ennemi le plus proche à faibles PV, infligeant 75-150 (+45% bonus AD) dégâts magiques (90s CD).",
                unique: true,
                active: true
            }
        },
        {
            id: 2004,
            name: "Rapid Firecannon",
            category: "marksman",
            cost: 2500,
            icon: "⚡",
            stats: { as: 35, crit: 25, ms: 4 },
            passive: {
                name: "Sharpshooter",
                description: "Bouger et attaquer charge Energize. À 100 charges, l'attaque a +35% de portée et inflige 60-140 dégâts magiques bonus.",
                unique: true
            }
        },
        {
            id: 2005,
            name: "Phantom Dancer",
            category: "marksman",
            cost: 2600,
            icon: "👻",
            stats: { as: 40, crit: 25, ms: 8 },
            passive: {
                name: "Spectral Waltz",
                description: "Les attaques accordent 7% AS pendant 3s, jusqu'à 35% (5 stacks). À 5 stacks, gagnez l'effet Ghosting.",
                unique: true
            }
        },
        {
            id: 2006,
            name: "Lord Dominik's Regards",
            category: "marksman",
            cost: 3000,
            icon: "⚔️",
            stats: { ad: 35, crit: 25, armorPen: 35 },
            passive: {
                name: "Giant Slayer",
                description: "Infligez 0-15% de dégâts bonus contre les champions ayant plus de PV max que vous (max à 2500 PV de différence).",
                unique: true
            }
        },
        {
            id: 2007,
            name: "Mortal Reminder",
            category: "marksman",
            cost: 2600,
            icon: "💉",
            stats: { ad: 25, crit: 25, armorPen: 25 },
            passive: {
                name: "Sepsis",
                description: "Les dégâts physiques appliquent Grievous Wounds (40%) pendant 3s. Coups critiques: 60%.",
                unique: true
            }
        },
        {
            id: 2008,
            name: "Bloodthirster",
            category: "marksman",
            cost: 3200,
            icon: "🩸",
            stats: { ad: 55, lifesteal: 18, crit: 20 },
            passive: {
                name: "Ichorshield",
                description: "Le soin excédent du lifesteal se convertit en bouclier jusqu'à 50-350 (selon niveau). Le bouclier décroît après 25s hors combat.",
                unique: true
            }
        },
        {
            id: 2009,
            name: "Navori Quickblades",
            category: "marksman",
            cost: 3400,
            icon: "🔄",
            stats: { ad: 60, crit: 25, ah: 15 },
            passive: {
                name: "Transcendence",
                description: "Les coups critiques réduisent les CD des compétences non-ultimes de 15% de leur CD restant.",
                unique: true
            },
            passiveSecondary: {
                name: "Impermanence",
                description: "Vos attaques contre champions infligent 0-20% AD bonus (selon vos PV manquants)."
            }
        },
        {
            id: 2010,
            name: "Statikk Shiv",
            category: "marksman",
            cost: 2700,
            icon: "⚡",
            stats: { as: 50, crit: 20, ms: 5 },
            passive: {
                name: "Electroshock",
                description: "Bouger et attaquer charge Energize. À pleine charge, l'attaque fait rebondir un éclair sur 6 cibles, infligeant 100-180 dégâts magiques.",
                unique: true
            }
        },
        {
            id: 2011,
            name: "Runaan's Hurricane",
            category: "marksman",
            cost: 2600,
            icon: "🌀",
            stats: { as: 40, crit: 25, ms: 5 },
            passive: {
                name: "Wind's Fury",
                description: "Les attaques tirent des projectiles sur 2 ennemis proches, infligeant 40% AD dégâts physiques. Ces projectiles appliquent les effets d'attaque et peuvent critiquer.",
                unique: true
            }
        },
        {
            id: 2012,
            name: "Essence Reaver",
            category: "marksman",
            cost: 2900,
            icon: "💎",
            stats: { ad: 45, crit: 25, ah: 25 },
            passive: {
                name: "Spellblade",
                description: "Après une compétence, la prochaine attaque inflige 100% AD base + 40% bonus AD en dégâts physiques et restaure 40% de ce montant en mana (1.5s CD).",
                unique: true
            }
        },
        {
            id: 2013,
            name: "Stormrazor",
            category: "marksman",
            cost: 2700,
            icon: "🌩️",
            stats: { ad: 45, as: 25, crit: 20 },
            passive: {
                name: "Paralyze",
                description: "Bouger et attaquer charge Energize. À pleine charge, l'attaque slow de 75% (pendant 0.5s) et inflige 80-200 dégâts magiques bonus.",
                unique: true
            }
        },
        {
            id: 2014,
            name: "The Collector",
            category: "marksman",
            cost: 3000,
            icon: "💀",
            stats: { ad: 50, lethality: 18, crit: 25 },
            passive: {
                name: "Death",
                description: "Infliger des dégâts à un ennemi sous 5% PV l'exécute. Les takedowns sur champions accordent 25 or supplémentaire.",
                unique: true
            }
        },
        {
            id: 2015,
            name: "Guinsoo's Rageblade",
            category: "marksman",
            cost: 2600,
            icon: "🔥",
            stats: { as: 45, crit: 0, ad: 30, ap: 30 },
            passive: {
                name: "Wrath",
                description: "Convertit toutes les chances de critique en dégâts bonus d'attaque (2 dégâts par 1% crit). Les coups critiques sont désactivés.",
                unique: true
            },
            passiveSecondary: {
                name: "Seething Strike",
                description: "Chaque 3ème attaque applique les effets d'attaque 2 fois."
            }
        },
        {
            id: 2016,
            name: "Immortal Shieldbow",
            category: "marksman",
            cost: 3000,
            icon: "🛡️",
            stats: { ad: 55, crit: 25, lifesteal: 10 },
            passive: {
                name: "Lifeline",
                description: "Si vous tombez sous 30% PV, gagnez un bouclier de 275-650 (selon niveau) pendant 3s (90s CD).",
                unique: true
            }
        },
        {
            id: 2017,
            name: "Yun Tal Wildarrows",
            category: "marksman",
            cost: 2850,
            icon: "🏹",
            stats: { ad: 55, crit: 25 },
            passive: {
                name: "Serrated Edge",
                description: "Les coups critiques infligent des dégâts bonus (50% AD ratio) sur 3s. Ce saignement stack jusqu'à 3 fois.",
                unique: true
            }
        },

        // === MAGE ITEMS ===
        {
            id: 3001,
            name: "Rabadon's Deathcap",
            category: "mage",
            cost: 3600,
            icon: "🎩",
            stats: { ap: 130 },
            passive: {
                name: "Magical Opus",
                description: "Augmente votre AP total de 35%.",
                unique: true
            }
        },
        {
            id: 3002,
            name: "Void Staff",
            category: "mage",
            cost: 2700,
            icon: "🌀",
            stats: { ap: 70, magicPenPercent: 40 }
        },
        {
            id: 3003,
            name: "Shadowflame",
            category: "mage",
            cost: 2800,
            icon: "🔥",
            stats: { ap: 100, hp: 100 },
            passive: {
                name: "Cinderbloom",
                description: "Les dégâts magiques contre des champions gagnent 10-20 pénétration magique selon les PV manquants de la cible.",
                unique: true
            }
        },
        {
            id: 3004,
            name: "Luden's Companion",
            category: "mage",
            cost: 2900,
            icon: "⚡",
            stats: { ap: 95, mana: 600, ah: 20, magicPen: 10 },
            passive: {
                name: "Discharge",
                description: "Les compétences envoient des projectiles sur jusqu'à 4 cibles, infligeant 70 (+10% AP) dégâts magiques chacune (10s CD, réduit par les dégâts aux champions).",
                unique: true
            }
        },
        {
            id: 3005,
            name: "Liandry's Torment",
            category: "mage",
            cost: 3000,
            icon: "🌋",
            stats: { ap: 90, hp: 300 },
            passive: {
                name: "Torment",
                description: "Les compétences brûlent les ennemis pour 2% PV max sur 3s (50% d'efficacité pour DoT). Inflige 2% de dégâts bonus par seconde de combat (max 10%).",
                unique: true
            }
        },
        {
            id: 3006,
            name: "Rod of Ages",
            category: "mage",
            cost: 2600,
            icon: "🏺",
            stats: { ap: 60, hp: 300, mana: 300 },
            passive: {
                name: "This Item Gains...",
                description: "Gagne 20 HP, 20 mana et 4 AP par minute (max 10 stacks, 200 HP, 200 mana, 40 AP). À 10 stacks, niveau +1.",
                unique: true
            }
        },
        {
            id: 3007,
            name: "Seraph's Embrace",
            category: "mage",
            cost: 2600,
            icon: "📘",
            stats: { ap: 80, mana: 860, ah: 20 },
            passive: {
                name: "Awe",
                description: "+1.3% mana bonus en AP.",
                unique: true
            },
            passiveSecondary: {
                name: "Empyrean",
                description: "Restaure 50% du mana dépensé."
            }
        },
        {
            id: 3008,
            name: "Zhonya's Hourglass",
            category: "mage",
            cost: 3000,
            icon: "⏳",
            stats: { ap: 100, armor: 50, ah: 15 },
            passive: {
                name: "Stasis",
                description: "ACTIF: Devient invulnérable et non-ciblable pendant 2.5s mais ne peut pas bouger ni utiliser de compétences (120s CD).",
                unique: true,
                active: true
            }
        },
        {
            id: 3009,
            name: "Banshee's Veil",
            category: "mage",
            cost: 2500,
            icon: "👻",
            stats: { ap: 80, mr: 50, ah: 10 },
            passive: {
                name: "Annul",
                description: "Gagne un bouclier qui bloque la prochaine compétence ennemie. Se régénère après 40s hors combat avec des champions.",
                unique: true
            }
        },
        {
            id: 3010,
            name: "Morellonomicon",
            category: "mage",
            cost: 2500,
            icon: "📕",
            stats: { ap: 80, hp: 200 },
            passive: {
                name: "Affliction",
                description: "Les dégâts magiques appliquent Grievous Wounds (40%) pendant 3s. Contre les cibles sous 50% PV: 60%.",
                unique: true
            }
        },
        {
            id: 3011,
            name: "Horizon Focus",
            category: "mage",
            cost: 2700,
            icon: "🎯",
            stats: { ap: 85, hp: 150, ah: 15 },
            passive: {
                name: "Hypershot",
                description: "Les compétences qui immobilisent ou qui touchent à plus de 700 unités révèlent les champions et leur font subir 10% de dégâts supplémentaires pendant 6s.",
                unique: true
            }
        },
        {
            id: 3012,
            name: "Cosmic Drive",
            category: "mage",
            cost: 3000,
            icon: "🌌",
            stats: { ap: 80, hp: 250, ah: 30, ms: 5 },
            passive: {
                name: "Spelldance",
                description: "Après avoir touché un champion ennemi avec une compétence, gagnez 20% MS pendant 2s. Les dégâts de compétence génèrent des charges (4 charges = réinitialise la durée).",
                unique: true
            }
        },
        {
            id: 3013,
            name: "Lich Bane",
            category: "mage",
            cost: 2700,
            icon: "💜",
            stats: { ap: 100, ms: 8, ah: 15 },
            passive: {
                name: "Spellblade",
                description: "Après avoir utilisé une compétence, la prochaine attaque de base inflige 75% AP + 50% AD base en dégâts magiques bonus (2.5s CD).",
                unique: true
            }
        },
        {
            id: 3014,
            name: "Nashor's Tooth",
            category: "mage",
            cost: 2900,
            icon: "🦷",
            stats: { ap: 90, as: 50 },
            passive: {
                name: "Icathian Bite",
                description: "Les attaques de base infligent 15 (+20% AP) dégâts magiques bonus.",
                unique: true
            }
        },
        {
            id: 3015,
            name: "Hextech Rocketbelt",
            category: "mage",
            cost: 2600,
            icon: "🚀",
            stats: { ap: 80, hp: 250, ah: 15 },
            passive: {
                name: "Supersonic",
                description: "ACTIF: Dash de 275 unités et tire des projectiles sur les ennemis proches (75 +15% AP dégâts). Accorde 30% MS vers les champions pendant 1.5s (40s CD).",
                unique: true,
                active: true
            }
        },
        {
            id: 3016,
            name: "Stormsurge",
            category: "mage",
            cost: 2900,
            icon: "🌊",
            stats: { ap: 90, magicPen: 10, ms: 5 },
            passive: {
                name: "Squall",
                description: "Infliger 35% PV max en moins de 2.5s marque la cible. Après 2s, les cibles marquées subissent 140-340 dégâts magiques bonus. Les takedowns accordent 30% MS pendant 2s.",
                unique: true
            }
        },
        {
            id: 3017,
            name: "Malignance",
            category: "mage",
            cost: 2700,
            icon: "💀",
            stats: { ap: 80, mana: 600, ah: 25 },
            passive: {
                name: "Hatefog",
                description: "Lancer votre ultime crée une zone de 600 unités pendant 3s. Les ennemis à l'intérieur subissent 60 (+10% AP) dégâts magiques par seconde et leur MR est réduite de 10.",
                unique: true
            }
        },
        {
            id: 3018,
            name: "Cryptbloom",
            category: "mage",
            cost: 2700,
            icon: "🌸",
            stats: { ap: 60, magicPenPercent: 30 },
            passive: {
                name: "Life from Death",
                description: "Les takedowns sur champions font éclore des fleurs qui soignent les alliés les plus proches de 50-180 + 30% AP sur 1.5s.",
                unique: true
            }
        },
        {
            id: 3019,
            name: "Blackfire Torch",
            category: "mage",
            cost: 2800,
            icon: "🔥",
            stats: { ap: 80, mana: 600, ah: 25 },
            passive: {
                name: "Baleful Blaze",
                description: "Les dégâts de compétence brûlent les ennemis pour 1.5% PV max sur 3s et accordent 4% AP bonus par ennemi affecté (max 12%).",
                unique: true
            }
        },

        // === ASSASSIN ITEMS ===
        {
            id: 4001,
            name: "Youmuu's Ghostblade",
            category: "assassin",
            cost: 2700,
            icon: "👻",
            stats: { ad: 55, lethality: 18, ah: 15 },
            passive: {
                name: "Haunt",
                description: "Gagne 40 MS hors combat.",
                unique: true
            },
            passiveSecondary: {
                name: "Wraith Step",
                description: "ACTIF: Gagne 20% MS et la capacité de traverser les unités pendant 6s (45s CD)."
            }
        },
        {
            id: 4002,
            name: "Duskblade of Draktharr",
            category: "assassin",
            cost: 2900,
            icon: "🗡️",
            stats: { ad: 60, lethality: 18, ah: 20 },
            passive: {
                name: "Nightstalker",
                description: "Après être non-visible des ennemis pendant 1s, la prochaine attaque ou compétence inflige 50-150 dégâts physiques bonus. Les takedowns accordent 1.5s d'invisibilité (15s CD).",
                unique: true
            }
        },
        {
            id: 4003,
            name: "Edge of Night",
            category: "assassin",
            cost: 2800,
            icon: "🌙",
            stats: { ad: 50, hp: 250, lethality: 12 },
            passive: {
                name: "Annul",
                description: "ACTIF: Canal 1.5s pour gagner un bouclier anti-sort pendant 40s (40s CD).",
                unique: true,
                active: true
            }
        },
        {
            id: 4004,
            name: "Serpent's Fang",
            category: "assassin",
            cost: 2500,
            icon: "🐍",
            stats: { ad: 55, lethality: 18 },
            passive: {
                name: "Shield Reaver",
                description: "Les dégâts contre les boucliers sont augmentés de 70%. Après avoir endommagé un bouclier ennemi, réduisez tous les boucliers sur cette cible de 50% pendant 3s.",
                unique: true
            }
        },
        {
            id: 4005,
            name: "Axiom Arc",
            category: "assassin",
            cost: 2800,
            icon: "🔄",
            stats: { ad: 55, lethality: 18, ah: 15 },
            passive: {
                name: "Flux",
                description: "Les takedowns sur champions réduisent le CD de votre ultime de 25% de son CD total.",
                unique: true
            }
        },
        {
            id: 4006,
            name: "Hubris",
            category: "assassin",
            cost: 3000,
            icon: "👑",
            stats: { ad: 60, lethality: 18, ah: 15 },
            passive: {
                name: "Eminence",
                description: "Les takedowns sur champions accordent 10 AD bonus pendant 60s (max 30 AD). Gagnez un effet cosmétique à 20+ AD bonus.",
                unique: true
            }
        },
        {
            id: 4007,
            name: "Profane Hydra",
            category: "assassin",
            cost: 3200,
            icon: "🐲",
            stats: { ad: 60, lethality: 18, ah: 20 },
            passive: {
                name: "Cleave",
                description: "Les attaques et compétences infligent 40% AD en dégâts physiques aux ennemis proches.",
                unique: true
            },
            passiveSecondary: {
                name: "Heretical Haste",
                description: "ACTIF: Gagne 15% MS et 40% AS pendant 6s (30s CD)."
            }
        },
        {
            id: 4008,
            name: "Opportunity",
            category: "assassin",
            cost: 2700,
            icon: "🎯",
            stats: { ad: 55, lethality: 18, ms: 4 },
            passive: {
                name: "Preparation",
                description: "Gagne 150 lethality lorsque vous vous approchez d'un champion ennemi pour la première fois depuis 10s (utilisé sur la première attaque/compétence).",
                unique: true
            }
        },
        {
            id: 4009,
            name: "Voltaic Cyclosword",
            category: "assassin",
            cost: 2600,
            icon: "⚡",
            stats: { ad: 50, lethality: 18, as: 15 },
            passive: {
                name: "Galvanize",
                description: "Bouger et attaquer charge Energize. À pleine charge, la prochaine attaque inflige 100-300 dégâts magiques bonus et slow de 99% pendant 0.75s.",
                unique: true
            }
        },
        {
            id: 4010,
            name: "Umbral Glaive",
            category: "assassin",
            cost: 2300,
            icon: "🌑",
            stats: { ad: 50, lethality: 12, ah: 15 },
            passive: {
                name: "Blackout",
                description: "Gagne Wards Sight. Les wards et pièges ennemis révélés sont désactivés et vous pouvez les tuer en 1 coup.",
                unique: true
            }
        },

        // === TANK ITEMS ===
        {
            id: 5001,
            name: "Warmog's Armor",
            category: "tank",
            cost: 3000,
            icon: "❤️",
            stats: { hp: 800, hpRegen: 200, ah: 10 },
            passive: {
                name: "Warmog's Heart",
                description: "Si vous avez au moins 1100 PV bonus, régénérez 2.5% de vos PV max par seconde si vous n'avez pas subi de dégâts depuis 6s.",
                unique: true
            }
        },
        {
            id: 5002,
            name: "Sunfire Aegis",
            category: "tank",
            cost: 2700,
            icon: "☀️",
            stats: { hp: 400, armor: 50, mr: 50 },
            passive: {
                name: "Immolate",
                description: "Inflige 15 (+1.75% bonus HP) dégâts magiques/s aux ennemis proches. Gagne une stack par seconde en combat, jusqu'à 6 (12 + 1.25% bonus HP dégâts/s supplémentaires).",
                unique: true
            }
        },
        {
            id: 5003,
            name: "Heartsteel",
            category: "tank",
            cost: 3000,
            icon: "💎",
            stats: { hp: 800, hpRegen: 200, ah: 10 },
            passive: {
                name: "Colossal Consumption",
                description: "Chargez-vous en combattant des champions. À pleine charge, la prochaine attaque inflige 125 + 6% PV max bonus et vous gagnez 8% de ces dégâts en PV permanents (30s CD).",
                unique: true
            }
        },
        {
            id: 5004,
            name: "Thornmail",
            category: "tank",
            cost: 2450,
            icon: "🥀",
            stats: { armor: 75, hp: 350 },
            passive: {
                name: "Thorns",
                description: "Quand touché par une attaque de base, reflète 10 (+10% armor) dégâts magiques et applique Grievous Wounds (40%) pendant 3s. L'immobilisation porte à 60%.",
                unique: true
            }
        },
        {
            id: 5005,
            name: "Randuin's Omen",
            category: "tank",
            cost: 2700,
            icon: "⚫",
            stats: { armor: 80, hp: 400 },
            passive: {
                name: "Rock Solid",
                description: "Réduit les dégâts d'attaque de 5 (+0.35% PV max), jusqu'à 20% du total des dégâts.",
                unique: true
            },
            passiveSecondary: {
                name: "Humility",
                description: "ACTIF: Slow les ennemis proches de 55% pendant 2s (60s CD)."
            }
        },
        {
            id: 5006,
            name: "Dead Man's Plate",
            category: "tank",
            cost: 2850,
            icon: "💀",
            stats: { armor: 50, hp: 400, ms: 5 },
            passive: {
                name: "Shipwrecker",
                description: "Bouger génère Momentum (max 100). À 100 stacks, la prochaine attaque inflige jusqu'à 100 dégâts magiques bonus et slow de 50% pendant 1s.",
                unique: true
            }
        },
        {
            id: 5007,
            name: "Spirit Visage",
            category: "tank",
            cost: 2700,
            icon: "💚",
            stats: { mr: 60, hp: 450, hpRegen: 100, ah: 10 },
            passive: {
                name: "Boundless Vitality",
                description: "Augmente tous les soins et boucliers reçus de 25%.",
                unique: true
            }
        },
        {
            id: 5008,
            name: "Force of Nature",
            category: "tank",
            cost: 2700,
            icon: "🌪️",
            stats: { mr: 70, hp: 350, ms: 5 },
            passive: {
                name: "Absorb",
                description: "Les dégâts magiques subis accordent une stack (6s). À 6 stacks, gagnez 20% réduction de dégâts magiques et 10% MS.",
                unique: true
            }
        },
        {
            id: 5009,
            name: "Abyssal Mask",
            category: "tank",
            cost: 2400,
            icon: "👺",
            stats: { mr: 60, hp: 350 },
            passive: {
                name: "Unmake",
                description: "Immobiliser un champion réduit sa MR de 15 + 1% bonus HP (max 30) pendant 4s.",
                unique: true
            }
        },
        {
            id: 5010,
            name: "Frozen Heart",
            category: "tank",
            cost: 2500,
            icon: "❄️",
            stats: { armor: 80, mana: 400, ah: 20 },
            passive: {
                name: "Winter's Caress",
                description: "Réduit l'AS des ennemis proches de 20%.",
                unique: true
            },
            passiveSecondary: {
                name: "Rock Solid",
                description: "Réduit les dégâts d'attaque de 7 (+3.5 par 1000 HP max), jusqu'à 40% du total."
            }
        },
        {
            id: 5011,
            name: "Gargoyle Stoneplate",
            category: "tank",
            cost: 3000,
            icon: "🗿",
            stats: { armor: 60, mr: 60, ah: 15 },
            passive: {
                name: "Fortify",
                description: "ACTIF: Gagne un bouclier de 80% de vos PV bonus pendant 2.5s (90s CD).",
                unique: true,
                active: true
            },
            passiveSecondary: {
                name: "Monolith",
                description: "+5% armor et MR par champion ennemi proche."
            }
        },
        {
            id: 5012,
            name: "Jak'Sho, The Protean",
            category: "tank",
            cost: 3100,
            icon: "🔷",
            stats: { armor: 50, mr: 50, hp: 400, ah: 10 },
            passive: {
                name: "Voidborn Resilience",
                description: "En combat, gagne une stack par seconde (max 3). À 3 stacks, drague 3% des dégâts subis en tant que soin sur 3s et gagne 10% armor/MR bonus.",
                unique: true
            }
        },
        {
            id: 5013,
            name: "Unending Despair",
            category: "tank",
            cost: 2800,
            icon: "😈",
            stats: { armor: 55, hp: 400, ah: 10 },
            passive: {
                name: "Anguish",
                description: "En combat, charge sur 3s. À pleine charge, inflige 50 (+5% PV max) dégâts magiques aux ennemis proches et soigne du même montant (4s CD).",
                unique: true
            }
        },
        {
            id: 5014,
            name: "Kaenic Rookern",
            category: "tank",
            cost: 2800,
            icon: "🛡️",
            stats: { mr: 80, hp: 350, hpRegen: 100 },
            passive: {
                name: "Magebane",
                description: "Gagne un bouclier anti-magie de 15% PV max si vous n'avez pas subi de dégâts magiques depuis 12s. Le bouclier s'estompe sur 4s.",
                unique: true
            }
        },
        {
            id: 5015,
            name: "Hollow Radiance",
            category: "tank",
            cost: 2650,
            icon: "💫",
            stats: { armor: 30, mr: 30, hp: 300, ah: 10 },
            passive: {
                name: "Deathly Glow",
                description: "Immolate: inflige 12-24 (+1% bonus HP) dégâts magiques/s. Les compétences créent une onde qui inflige (45 +3% bonus HP) dégâts magiques (8s CD).",
                unique: true
            }
        },
        {
            id: 5016,
            name: "Iceborn Gauntlet",
            category: "tank",
            cost: 2900,
            icon: "🧊",
            stats: { armor: 70, hp: 400, ah: 20 },
            passive: {
                name: "Spellblade",
                description: "Après une compétence, crée une zone de gel qui slow de 30% pendant 2.5s (1.5s CD). La zone inflige 100% AD dégâts bonus.",
                unique: true
            }
        },
        {
            id: 5017,
            name: "Overlord's Bloodmail",
            category: "tank",
            cost: 3300,
            icon: "🩸",
            stats: { hp: 550, ad: 40 },
            passive: {
                name: "Tyranny",
                description: "+2% PV max en AD.",
                unique: true
            },
            passiveSecondary: {
                name: "Retribution",
                description: "Les takedowns soignent de 10% PV max sur 4s."
            }
        },

        // === SUPPORT ITEMS ===
        {
            id: 6001,
            name: "Locket of the Iron Solari",
            category: "support",
            cost: 2200,
            icon: "☀️",
            stats: { armor: 35, mr: 35, ah: 20 },
            passive: {
                name: "Devotion",
                description: "ACTIF: Accorde un bouclier de 200-360 (+20% AP) aux alliés proches pendant 2.5s (90s CD).",
                unique: true,
                active: true
            },
            passiveSecondary: {
                name: "Consecrate",
                description: "Les alliés proches gagnent +3 armor et MR."
            }
        },
        {
            id: 6002,
            name: "Redemption",
            category: "support",
            cost: 2100,
            icon: "✨",
            stats: { hp: 200, manaRegen: 100, ah: 20, healPower: 15 },
            passive: {
                name: "Intervention",
                description: "ACTIF: Après 2.5s, guérit les alliés dans une zone de 130-300 (+10% AP) et inflige 10% des PV max aux ennemis (120s CD). Utilisable même mort.",
                unique: true,
                active: true
            }
        },
        {
            id: 6003,
            name: "Ardent Censer",
            category: "support",
            cost: 2100,
            icon: "🌸",
            stats: { ap: 55, manaRegen: 100, ah: 15, healPower: 10 },
            passive: {
                name: "Sanctify",
                description: "Soigner ou bouclier un allié lui accorde 15-30% AS et 10-30 dégâts magiques bonus par attaque pendant 6s.",
                unique: true
            }
        },
        {
            id: 6004,
            name: "Staff of Flowing Water",
            category: "support",
            cost: 2100,
            icon: "💧",
            stats: { ap: 60, manaRegen: 100, ah: 15, healPower: 10 },
            passive: {
                name: "Rapids",
                description: "Soigner ou bouclier un allié vous accorde à tous les deux 25 AP et 8% MS pendant 4s.",
                unique: true
            }
        },
        {
            id: 6005,
            name: "Mikael's Blessing",
            category: "support",
            cost: 2100,
            icon: "🙏",
            stats: { mr: 50, manaRegen: 100, ah: 20, healPower: 15 },
            passive: {
                name: "Purify",
                description: "ACTIF: Retire tous les CCs d'un allié et le soigne de 100-200 (90s CD).",
                unique: true,
                active: true
            }
        },
        {
            id: 6006,
            name: "Shurelya's Battlesong",
            category: "support",
            cost: 2100,
            icon: "🎵",
            stats: { ap: 35, hp: 200, ah: 25, manaRegen: 100 },
            passive: {
                name: "Inspire",
                description: "ACTIF: Vous et les alliés proches gagnez 30% MS pendant 4s (75s CD).",
                unique: true,
                active: true
            },
            passiveSecondary: {
                name: "Motivate",
                description: "Empowering ou protéger un allié lui accorde 25% MS pendant 1.5s."
            }
        },
        {
            id: 6007,
            name: "Moonstone Renewer",
            category: "support",
            cost: 2100,
            icon: "🌙",
            stats: { ap: 40, hp: 200, ah: 20, manaRegen: 100, healPower: 15 },
            passive: {
                name: "Starlit Grace",
                description: "En affectant des champions, soigne l'allié le plus blessé proche de 60 (12% AP) par seconde. Ce soin augmente de 6.25% par seconde en combat (max 25%).",
                unique: true
            }
        },
        {
            id: 6008,
            name: "Imperial Mandate",
            category: "support",
            cost: 2300,
            icon: "👑",
            stats: { ap: 55, hp: 200, ah: 25, manaRegen: 100 },
            passive: {
                name: "Coordinated Fire",
                description: "L'immobilisation ou le slow d'un champion le marque. Le prochain allié qui l'attaque consomme la marque, infligeant 50-100 dégâts magiques bonus et gagnant 20% MS.",
                unique: true
            }
        },
        {
            id: 6009,
            name: "Knight's Vow",
            category: "support",
            cost: 2200,
            icon: "⚔️",
            stats: { armor: 40, hp: 300, ah: 15 },
            passive: {
                name: "Pledge",
                description: "Désignez un allié comme Partenaire. Vous êtes guéri de 8% des dégâts qu'il inflige. Si votre Partenaire est proche, redirigez 10% des dégâts qu'il subit vers vous.",
                unique: true
            }
        },
        {
            id: 6010,
            name: "Zeke's Convergence",
            category: "support",
            cost: 2200,
            icon: "❄️",
            stats: { armor: 35, mr: 35, hp: 250, ah: 20 },
            passive: {
                name: "Conduit",
                description: "Désignez un allié. Votre ultime crée un blizzard pendant 3s autour de vous, ralentissant les ennemis de 20% et infligeant 35 (+1.5% PV max) dégâts magiques/s.",
                unique: true
            }
        },
        {
            id: 6011,
            name: "Echoes of Helia",
            category: "support",
            cost: 2100,
            icon: "💫",
            stats: { ap: 30, hp: 150, ah: 20, manaRegen: 125, healPower: 15 },
            passive: {
                name: "Soul Siphon",
                description: "Les dégâts aux champions chargent une âme (max 2). Les soins/boucliers aux alliés consomment une âme pour soigner de 20 (+25% AP) et infliger 30 (+20% AP) au champion ennemi le plus proche.",
                unique: true
            }
        },
        {
            id: 6012,
            name: "Dawncore",
            category: "support",
            cost: 2350,
            icon: "🌅",
            stats: { ap: 50, hp: 150, ah: 25, manaRegen: 100, healPower: 15 },
            passive: {
                name: "Summon Fiend",
                description: "+8% heal/shield power. Soigner ou bouclier un allié augmente votre heal/shield power de 10% pendant 6s (max 30%).",
                unique: true
            }
        },
        {
            id: 6013,
            name: "Trailblazer",
            category: "support",
            cost: 2200,
            icon: "🏎️",
            stats: { hp: 350, hpRegen: 100, ah: 20 },
            passive: {
                name: "Lead the Way",
                description: "ACTIF: Chargez vers l'avant pendant 4s, accélérant les alliés qui vous suivent. Toucher un champion ennemi knock back et inflige 60-140 dégâts (60s CD).",
                unique: true,
                active: true
            }
        },

        // === BOOTS ===
        {
            id: 7001,
            name: "Berserker's Greaves",
            category: "boots",
            cost: 1100,
            icon: "👢",
            stats: { as: 30, ms: 45 }
        },
        {
            id: 7002,
            name: "Sorcerer's Shoes",
            category: "boots",
            cost: 1100,
            icon: "👟",
            stats: { magicPen: 18, ms: 45 }
        },
        {
            id: 7003,
            name: "Plated Steelcaps",
            category: "boots",
            cost: 1100,
            icon: "🥾",
            stats: { armor: 25, ms: 45 },
            passive: {
                name: "Block",
                description: "Réduit les dégâts des attaques de base de 12%.",
                unique: true
            }
        },
        {
            id: 7004,
            name: "Mercury's Treads",
            category: "boots",
            cost: 1100,
            icon: "👞",
            stats: { mr: 25, ms: 45, tenacity: 30 }
        },
        {
            id: 7005,
            name: "Ionian Boots of Lucidity",
            category: "boots",
            cost: 900,
            icon: "💙",
            stats: { ah: 20, ms: 45 },
            passive: {
                name: "Quicken",
                description: "Réduit les CD des invocateurs de 12%.",
                unique: true
            }
        },
        {
            id: 7006,
            name: "Boots of Swiftness",
            category: "boots",
            cost: 1000,
            icon: "💨",
            stats: { ms: 60 },
            passive: {
                name: "Slow Resist",
                description: "Réduit l'effet des slows de 25%.",
                unique: true
            }
        },
        {
            id: 7007,
            name: "Mobility Boots",
            category: "boots",
            cost: 900,
            icon: "🚀",
            stats: { ms: 25 },
            passive: {
                name: "Enhanced Movement",
                description: "+90 MS bonus hors combat.",
                unique: true
            }
        },
        {
            id: 7008,
            name: "Symbiotic Soles",
            category: "boots",
            cost: 1000,
            icon: "🌿",
            stats: { ms: 45, hp: 100 },
            passive: {
                name: "Absorption",
                description: "Gagne 1 stack par champion allié (max 4). Chaque stack: +2% tenacity et slow resist.",
                unique: true
            }
        },
        {
            id: 7009,
            name: "Synchronized Souls",
            category: "boots",
            cost: 1000,
            icon: "🔗",
            stats: { ms: 45, armor: 15, mr: 15 },
            passive: {
                name: "Tailwind",
                description: "Les alliés proches gagnent +3% MS.",
                unique: true
            }
        }
    ]
};

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ITEMS_DATABASE;
}
