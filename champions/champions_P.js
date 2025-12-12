// ========================================
// CHAMPIONS - LETTRE P
// ========================================

const CHAMPIONS_P = [
    {
        id: 98,
        name: "Pantheon",
        title: "L'Intarissable Lance",
        role: "fighter",
        icon: "🛡️",
        baseStats: {
            hp: 650, hpGrowth: 109, hpRegen: 9, hpRegenGrowth: 0.65,
            mana: 317, manaGrowth: 31, manaRegen: 7.35, manaRegenGrowth: 0.45,
            ad: 64, adGrowth: 3.3, as: 0.644, asGrowth: 2.95,
            armor: 40, armorGrowth: 5.15, mr: 28, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Mortal Will",
            icon: "⭐",
            description: "Après 5 attaques/sorts, prochain sort empowered.",
            cooldown: "Passif",
            details: "5 stacks. Empowered Q/W/E selon le sort utilisé."
        },
        spells: {
            Q: {
                name: "Comet Spear",
                icon: "🗡️",
                description: "Tap: coup. Hold: lance projectile. Empowered: exécute.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "30 Mana",
                damage: "75/115/155/195/235 (+115% bonus AD)",
                damageType: "physical",
                details: "Lance: 155-310 (+230% bonus AD). Empowered: +20-240 vs low HP."
            },
            W: {
                name: "Shield Vault",
                icon: "🛡️",
                description: "Saute sur ennemi et stun.",
                cooldown: "13/12/11/10/9s",
                cost: "55 Mana",
                damage: "60/100/140/180/220 (+100% AP)",
                damageType: "magic",
                details: "Stun: 1s. Empowered: follow-up 3 attaques rapides."
            },
            E: {
                name: "Aegis Assault",
                icon: "🛡️",
                description: "Bloque dégâts frontaux + frappe à la fin.",
                cooldown: "22/20.5/19/17.5/16s",
                cost: "80 Mana",
                damage: "55/105/155/205/255 (+150% bonus AD)",
                damageType: "physical",
                details: "Durée: 1.5s. Invulnérable front. Empowered: durée étendue."
            },
            R: {
                name: "Grand Starfall",
                icon: "☄️",
                description: "Saute dans le ciel puis crash sur zone.",
                cooldown: "180/165/150s",
                cost: "100 Mana",
                damage: "300-700 (+115% AP)",
                damageType: "magic",
                details: "Global. Canalisé. Dégâts selon distance du centre."
            }
        }
    },
    {
        id: 99,
        name: "Poppy",
        title: "La Gardienne du Marteau",
        role: "tank",
        icon: "🔨",
        baseStats: {
            hp: 610, hpGrowth: 104, hpRegen: 8, hpRegenGrowth: 0.8,
            mana: 280, manaGrowth: 40, manaRegen: 7, manaRegenGrowth: 0.7,
            ad: 64, adGrowth: 4, as: 0.625, asGrowth: 2.5,
            armor: 38, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Iron Ambassador",
            icon: "🛡️",
            description: "Attaque lance bouclier. Ramasser = bouclier.",
            cooldown: "13-5s",
            details: "Dégâts: 20-180 (+15% armor). Bouclier: 13-20% PV max."
        },
        spells: {
            Q: {
                name: "Hammer Shock",
                icon: "🔨",
                description: "Slam qui slow puis explose.",
                cooldown: "8/7/6/5/4s",
                cost: "35/40/45/50/55 Mana",
                damage: "40/60/80/100/120 (+90% bonus AD)(+9% PV max) × 2",
                damageType: "physical",
                details: "Slow: 20/25/30/35/40%. 2ème hit après 1s."
            },
            W: {
                name: "Steadfast Presence",
                icon: "🚫",
                description: "Zone anti-dash. Bloque et ground.",
                cooldown: "24/22/20/18/16s",
                cost: "50 Mana",
                damage: "70/110/150/190/230 (+70% AP)",
                damageType: "magic",
                details: "Passif: +10% armor/MR (×2 si low HP). Durée: 2.5s. Ground: 2s."
            },
            E: {
                name: "Heroic Charge",
                icon: "💨",
                description: "Charge ennemi. Si mur = stun.",
                cooldown: "14/13/12/11/10s",
                cost: "70 Mana",
                damage: "60/80/100/120/140 (+50% bonus AD)",
                damageType: "physical",
                details: "Mur: +60/80/100/120/140 (+50% bonus AD) + stun 1.6-2s."
            },
            R: {
                name: "Keeper's Verdict",
                icon: "⚡",
                description: "Tap: knock up court. Charge: knock back massif.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "Tap: 100/150/200 (+45% bonus AD) | Charge: 200/300/400 (+90% bonus AD)",
                damageType: "physical",
                details: "Charge: 4s. Knockback: vers fontaine. Unstoppable pendant."
            }
        }
    },
    {
        id: 100,
        name: "Pyke",
        title: "L'Écorcheur des Abysses",
        role: "support",
        icon: "🔪",
        baseStats: {
            hp: 670, hpGrowth: 100, hpRegen: 7, hpRegenGrowth: 0.5,
            mana: 415, manaGrowth: 50, manaRegen: 8, manaRegenGrowth: 1,
            ad: 62, adGrowth: 2.5, as: 0.667, asGrowth: 2.5,
            armor: 45, armorGrowth: 5, mr: 32, mrGrowth: 2.05,
            ms: 330, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Gift of the Drowned Ones",
            icon: "🌊",
            description: "Ne peut pas build HP bonus (→ AD). Regen dégâts subis hors vision.",
            cooldown: "Passif",
            details: "HP bonus → AD. Regen: 25-50% dégâts récents quand invisible."
        },
        spells: {
            Q: {
                name: "Bone Skewer",
                icon: "🪝",
                description: "Tap: stab. Charge: hook qui pull.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "55/60/65/70/75 Mana",
                damage: "85/135/185/235/285 (+60% bonus AD)",
                damageType: "physical",
                details: "Slow: 90% 1s (stab). Pull (charge)."
            },
            W: {
                name: "Ghostwater Dive",
                icon: "👻",
                description: "Camouflage + MS. Révélé par proches.",
                cooldown: "12/11/10/9/8s",
                cost: "50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "+40-75% MS décroissant. Durée: 5s."
            },
            E: {
                name: "Phantom Undertow",
                icon: "💨",
                description: "Dash. Fantôme revient et stun.",
                cooldown: "15/14/13/12/11s",
                cost: "40 Mana",
                damage: "105/145/185/225/265 (+80% bonus AD)",
                damageType: "physical",
                details: "Stun: 1.1s + knock up."
            },
            R: {
                name: "Death from Below",
                icon: "✖️",
                description: "Exécute en X. Si tue, peut recaster + or pour assistant.",
                cooldown: "80/70/60s",
                cost: "100 Mana",
                damage: "Exécute: 250-550 (+80% bonus AD)(+150% lethality)",
                damageType: "physical",
                details: "Execute threshold: visible. Partage or complet avec 1 allié."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_P;
}
