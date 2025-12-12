// ========================================
// CHAMPIONS - LETTRE F
// ========================================

const CHAMPIONS_F = [
    {
        id: 34,
        name: "Fiddlesticks",
        title: "L'Épouvantail Ancien",
        role: "mage",
        icon: "🎃",
        baseStats: {
            hp: 650, hpGrowth: 106, hpRegen: 5.5, hpRegenGrowth: 0.6,
            mana: 500, manaGrowth: 28, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 2.65, as: 0.625, asGrowth: 2.11,
            armor: 34, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 480
        },
        resource: "Mana",
        passive: {
            name: "A Harmless Scarecrow",
            icon: "🎃",
            description: "Peut placer effigies qui imitent actions et révèlent wards.",
            cooldown: "Recharge par niveau",
            details: "Effigies imitent cast. Révèlent wards. 2 max."
        },
        spells: {
            Q: {
                name: "Terrify",
                icon: "😱",
                description: "Fear ennemi. Double durée si non visible avant.",
                cooldown: "15/14/13/12/11s",
                cost: "65 Mana",
                damage: "6/7/8/9/10% (+2%/100 AP) PV actuel",
                damageType: "magic",
                details: "Fear: 1-2s (×2 hors vision). Double dégâts si double durée."
            },
            W: {
                name: "Bountiful Harvest",
                icon: "🩸",
                description: "Draine ennemis proches, se soigne.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "60/65/70/75/80 Mana",
                damage: "50-170 (+45% AP) + 8-16% PV manquants",
                damageType: "magic",
                details: "Durée: 2s. Heal: 30-50% dégâts (×2 vs champs)."
            },
            E: {
                name: "Reap",
                icon: "🌾",
                description: "Fauche en arc, silence au centre.",
                cooldown: "10/9/8/7/6s",
                cost: "35/40/45/50/55 Mana",
                damage: "70/105/140/175/210 (+50% AP)",
                damageType: "magic",
                details: "Silence: 1.25s centre. Slow: 30-50% ailleurs."
            },
            R: {
                name: "Crowstorm",
                icon: "🐦‍⬛",
                description: "Canalise puis teleporte avec ouragan de corbeaux.",
                cooldown: "140/110/80s",
                cost: "100 Mana",
                damage: "625/1125/1625 (+225% AP) sur 5s",
                damageType: "magic",
                details: "Canal: 1.5s. Blink: 800. Fear bonus si hors vision."
            }
        }
    },
    {
        id: 35,
        name: "Fiora",
        title: "La Grande Duelliste",
        role: "fighter",
        icon: "🤺",
        baseStats: {
            hp: 620, hpGrowth: 99, hpRegen: 8.5, hpRegenGrowth: 0.55,
            mana: 300, manaGrowth: 60, manaRegen: 8, manaRegenGrowth: 0.7,
            ad: 68, adGrowth: 3.3, as: 0.69, asGrowth: 3.2,
            armor: 33, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Duelist's Dance",
            icon: "🎯",
            description: "Révèle points faibles sur champions. Toucher = dégâts vrais + heal.",
            cooldown: "Passif",
            details: "Dégâts vrais: 3% (+4.5%/100 bonus AD) PV max. Heal: 40-115."
        },
        spells: {
            Q: {
                name: "Lunge",
                icon: "💨",
                description: "Dash et frappe ennemi proche. Priorise Vitals.",
                cooldown: "13/11.25/9.5/7.75/6s",
                cost: "20/25/30/35/40 Mana",
                damage: "70-110 (+100-120% bonus AD)",
                damageType: "physical",
                details: "Effets d'attaque. -50% CD si touche. Priorise Vitals."
            },
            W: {
                name: "Riposte",
                icon: "🤺",
                description: "Pare tous dégâts et CCs puis contre-attaque.",
                cooldown: "24/22/20/18/16s",
                cost: "50 Mana",
                damage: "110/150/190/230/270 (+100% AP)",
                damageType: "magic",
                details: "Immun 0.75s. Stun si bloque immobilize, sinon slow 50%."
            },
            E: {
                name: "Bladework",
                icon: "⚔️",
                description: "Gagne AS. 2 prochaines attaques améliorées.",
                cooldown: "11/9.5/8/6.5/5s",
                cost: "40 Mana",
                damage: "Aucun direct",
                damageType: "physical",
                details: "1ère: slow 30% 1s. 2ème: crit garanti (160-200% AD)."
            },
            R: {
                name: "Grand Challenge",
                icon: "👑",
                description: "Révèle 4 Vitals. Tous touchés ou kill = zone de soin.",
                cooldown: "110/90/70s",
                cost: "100 Mana",
                damage: "Aucun direct",
                damageType: "utility",
                details: "Zone: heal 75-125 (+6% bonus AD)/s 5s."
            }
        }
    },
    {
        id: 36,
        name: "Fizz",
        title: "Le Filou des Marées",
        role: "assassin",
        icon: "🐟",
        baseStats: {
            hp: 640, hpGrowth: 106, hpRegen: 8, hpRegenGrowth: 0.7,
            mana: 317, manaGrowth: 52, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 58, adGrowth: 3, as: 0.658, asGrowth: 3.1,
            armor: 22, armorGrowth: 4.6, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Nimble Fighter",
            icon: "🐟",
            description: "Traverse unités et réduit dégâts d'attaques.",
            cooldown: "Passif",
            details: "Réduction: 4 (+1% AP) par attaque reçue."
        },
        spells: {
            Q: {
                name: "Urchin Strike",
                icon: "💨",
                description: "Dash à travers ennemi, effets d'attaque.",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "50 Mana",
                damage: "10/25/40/55/70 (+100% AD)(+55% AP)",
                damageType: "magic",
                details: "Traverse cible. Applique W passif."
            },
            W: {
                name: "Seastone Trident",
                icon: "🔱",
                description: "Passif: attaques = dégâts DoT. Actif: empowered attack.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "30/40/50/60/70 Mana",
                damage: "Passif: 20-60 (+40% AP) 3s | Actif: 50-130 (+50% AP)",
                damageType: "magic",
                details: "+50 range. Reset timer. Heal si tue."
            },
            E: {
                name: "Playful / Trickster",
                icon: "🎪",
                description: "Saute sur trident (untargetable) puis redescend.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "90/95/100/105/110 Mana",
                damage: "70/120/170/220/270 (+90% AP)",
                damageType: "magic",
                details: "Untargetable pendant saut. Réactivation: petit saut sans slow."
            },
            R: {
                name: "Chum the Waters",
                icon: "🦈",
                description: "Lance appât attachant requin. Requin attaque après délai.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "150/225/300 (+60% AP)",
                damageType: "magic",
                details: "Distance = taille: Guppy (slow), Chomper (knock up), Gigalodon (knock up + 200%)."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_F;
}
