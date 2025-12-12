// ========================================
// CHAMPIONS - LETTRE W
// ========================================

const CHAMPIONS_W = [
    {
        id: 154,
        name: "Warwick",
        title: "La Colère de Zaun",
        role: "fighter",
        icon: "🐺",
        baseStats: {
            hp: 620, hpGrowth: 99, hpRegen: 3.75, hpRegenGrowth: 0.75,
            mana: 280, manaGrowth: 35, manaRegen: 7.47, manaRegenGrowth: 0.575,
            ad: 65, adGrowth: 3, as: 0.638, asGrowth: 2.3,
            armor: 33, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Eternal Hunger",
            icon: "🩸",
            description: "Attaques heal. Bonus si low HP.",
            cooldown: "Passif",
            details: "Heal: 12-46 (+15% bonus AD)(+10% AP). ×2.5 si <50% HP."
        },
        spells: {
            Q: {
                name: "Jaws of the Beast",
                icon: "🦷",
                description: "Mord ennemi. Hold = suit derrière cible.",
                cooldown: "6s",
                cost: "50/60/70/80/90 Mana",
                damage: "120% AD + 6/6.5/7/7.5/8% (+100% AP scaling) max HP",
                damageType: "magic",
                details: "Heal: 30-90% dégâts selon PV manquants. Hold: derrière cible."
            },
            W: {
                name: "Blood Hunt",
                icon: "👃",
                description: "Passif: sense + MS vers low HP. Actif: bonus AS.",
                cooldown: "70/65/60/55/50s",
                cost: "70 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "Passif: sense <50% HP, +35-110% MS. Actif: +50-90% AS 8s."
            },
            E: {
                name: "Primal Howl",
                icon: "🛡️",
                description: "Réduit dégâts puis fear.",
                cooldown: "15/14/13/12/11s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "-35-55% dégâts 2.5s. Recast ou auto: fear 1s."
            },
            R: {
                name: "Infinite Duress",
                icon: "💀",
                description: "Leap qui supprime + channeled dégâts.",
                cooldown: "110/90/70s",
                cost: "100 Mana",
                damage: "175/350/525 (+167% bonus AD) total",
                damageType: "magic",
                details: "Suppress: 1.5s. 3 hits. Heals pour chaque hit. Range: 250% MS."
            }
        }
    },
    {
        id: 155,
        name: "Wukong",
        title: "Le Roi Singe",
        role: "fighter",
        icon: "🐵",
        baseStats: {
            hp: 610, hpGrowth: 99, hpRegen: 3.5, hpRegenGrowth: 0.65,
            mana: 300, manaGrowth: 65, manaRegen: 8, manaRegenGrowth: 0.65,
            ad: 66, adGrowth: 3.5, as: 0.658, asGrowth: 3,
            armor: 31, armorGrowth: 4.7, mr: 28, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Stone Skin",
            icon: "🛡️",
            description: "Gagne armor par champion ennemi nearby.",
            cooldown: "Passif",
            details: "+5-11 armor par champion ennemi visible (max 3)."
        },
        spells: {
            Q: {
                name: "Crushing Blow",
                icon: "🏏",
                description: "Prochaine attaque = bonus dégâts + armor réduit.",
                cooldown: "9/8.5/8/7.5/7s",
                cost: "25/30/35/40/45 Mana",
                damage: "20/45/70/95/120 (+50% bonus AD)",
                damageType: "physical",
                details: "-10/15/20/25/30% armor 3s. +75-175 range."
            },
            W: {
                name: "Warrior Trickster",
                icon: "👻",
                description: "Invisible + clone qui attaque.",
                cooldown: "20/18/16/14/12s",
                cost: "80/70/60/50/40 Mana",
                damage: "Clone: 50/62.5/75/87.5/100% AD",
                damageType: "magic",
                details: "Invisible: 1.5s. Clone: attaque puis AoE à la mort."
            },
            E: {
                name: "Nimbus Strike",
                icon: "☁️",
                description: "Dash vers ennemi + AS. Clone aussi dash si actif.",
                cooldown: "10/9/8/7/6s",
                cost: "30/35/40/45/50 Mana",
                damage: "80/110/140/170/200 (+100% bonus AD)",
                damageType: "magic",
                details: "+30-50% AS 4s. Frappe jusqu'à 3 cibles."
            },
            R: {
                name: "Cyclone",
                icon: "🌀",
                description: "Spin qui knock up. Peut recast.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "0.5/0.825/1.15% max HP par 0.25s (+110% AD ratio)",
                damageType: "physical",
                details: "Spin: 2s. Knock up: 0.75s. Recast: 2ème spin. +5-15% MS."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_W;
}
