// ========================================
// CHAMPIONS - LETTRE M
// ========================================

const CHAMPIONS_M = [
    {
        id: 78,
        name: "Malphite",
        title: "Le Monolithe",
        role: "tank",
        icon: "🗿",
        baseStats: {
            hp: 644, hpGrowth: 104, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 280, manaGrowth: 60, manaRegen: 7.32, manaRegenGrowth: 0.55,
            ad: 62, adGrowth: 4, as: 0.638, asGrowth: 3.4,
            armor: 37, armorGrowth: 4.95, mr: 28, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Granite Shield",
            icon: "🛡️",
            description: "Bouclier qui se régénère hors combat.",
            cooldown: "8s hors combat",
            details: "Bouclier: 9% PV max."
        },
        spells: {
            Q: {
                name: "Seismic Shard",
                icon: "🪨",
                description: "Projectile qui vole MS.",
                cooldown: "8s",
                cost: "70/75/80/85/90 Mana",
                damage: "70/120/170/220/270 (+60% AP)",
                damageType: "magic",
                details: "Vole: 20-40% MS pendant 3s."
            },
            W: {
                name: "Thunderclap",
                icon: "👊",
                description: "Passif: armor bonus. Actif: 3 attaques cone.",
                cooldown: "12s",
                cost: "25/30/35/40/45 Mana",
                damage: "30/45/60/75/90 (+20% AP)(+15% armor)",
                damageType: "physical",
                details: "Passif: +10-30% armor. Actif: 3 attaques cleave."
            },
            E: {
                name: "Ground Slam",
                icon: "💥",
                description: "Slam zone qui réduit AS ennemis.",
                cooldown: "7s",
                cost: "50/55/60/65/70 Mana",
                damage: "60/95/130/165/200 (+60% AP)(+40% armor)",
                damageType: "magic",
                details: "-30-50% AS pendant 3s."
            },
            R: {
                name: "Unstoppable Force",
                icon: "☄️",
                description: "Charge unstoppable qui knock up.",
                cooldown: "130/105/80s",
                cost: "100 Mana",
                damage: "200/300/400 (+90% AP)",
                damageType: "magic",
                details: "Knock up: 1.5s. Unstoppable pendant dash."
            }
        }
    },
    {
        id: 79,
        name: "Malzahar",
        title: "Le Prophète du Néant",
        role: "mage",
        icon: "👁️",
        baseStats: {
            hp: 580, hpGrowth: 104, hpRegen: 6, hpRegenGrowth: 0.6,
            mana: 375, manaGrowth: 27.5, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3, as: 0.625, asGrowth: 1.5,
            armor: 18, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Void Shift",
            icon: "💜",
            description: "Après délai sans dégâts, gagne bouclier anti-CC.",
            cooldown: "30-12s",
            details: "Bloque prochain CC/dégâts. 90% réduction dégâts 0.25s."
        },
        spells: {
            Q: {
                name: "Call of the Void",
                icon: "🌀",
                description: "2 projectiles convergent et silence.",
                cooldown: "6s",
                cost: "80/85/90/95/100 Mana",
                damage: "70/105/140/175/210 (+55% AP)",
                damageType: "magic",
                details: "Silence: 1-2s selon niveau sort."
            },
            W: {
                name: "Void Swarm",
                icon: "🐛",
                description: "Invoque Voidlings.",
                cooldown: "8s",
                cost: "40/45/50/55/60 Mana",
                damage: "Voidling: 8-52 (+12/18/24/30/36)(+40% bonus AD)(+20% AP)",
                damageType: "magic",
                details: "Voidling: 8-12s vie. +300% dégâts vs cibles avec E."
            },
            E: {
                name: "Malefic Visions",
                icon: "👁️",
                description: "DoT qui spread sur kill + restore mana.",
                cooldown: "15/13/11/9/7s",
                cost: "60/70/80/90/100 Mana",
                damage: "80/135/190/245/300 (+80% AP)",
                damageType: "magic",
                details: "Durée: 4s. Spread si tue. +2% max mana/s."
            },
            R: {
                name: "Nether Grasp",
                icon: "🔮",
                description: "Canal: suppress ennemi + dégâts zone.",
                cooldown: "140/110/80s",
                cost: "100 Mana",
                damage: "125/200/275 (+80% AP) sur 2.5s",
                damageType: "magic",
                details: "Suppress: 2.5s. Zone: même dégâts."
            }
        }
    },
    {
        id: 80,
        name: "Maokai",
        title: "L'Esprit Torturé",
        role: "tank",
        icon: "🌳",
        baseStats: {
            hp: 635, hpGrowth: 109, hpRegen: 5, hpRegenGrowth: 0.75,
            mana: 375, manaGrowth: 43, manaRegen: 6, manaRegenGrowth: 0.6,
            ad: 64, adGrowth: 3.3, as: 0.8, asGrowth: 2.1,
            armor: 39, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Sap Magic",
            icon: "💚",
            description: "Périodiquement, prochaine attaque soigne.",
            cooldown: "30-12s",
            details: "Heal: 4-12% PV max (+4-12% AP). CD réduit par attaques/sorts subis."
        },
        spells: {
            Q: {
                name: "Bramble Smash",
                icon: "🌿",
                description: "Slam qui knockback et slow.",
                cooldown: "8/7.25/6.5/5.75/5s",
                cost: "60 Mana",
                damage: "65/110/155/200/245 (+40% AP)",
                damageType: "magic",
                details: "Knockback court. Slow: 99% décroissant."
            },
            W: {
                name: "Twisted Advance",
                icon: "🌀",
                description: "Dash vers ennemi, devient untargetable, root.",
                cooldown: "12/11/10/9/8s",
                cost: "60/65/70/75/80 Mana",
                damage: "70/95/120/145/170 (+40% AP)",
                damageType: "magic",
                details: "Root: 1-1.4s."
            },
            E: {
                name: "Sapling Toss",
                icon: "🌱",
                description: "Lance sapling qui poursuit ennemis.",
                cooldown: "14/13/12/11/10s",
                cost: "60/65/70/75/80 Mana",
                damage: "55/80/105/130/155 (+6% bonus HP)(+40% AP)",
                damageType: "magic",
                details: "Impact + zone. Dans brush: +100% dégâts + slow."
            },
            R: {
                name: "Nature's Grasp",
                icon: "🌊",
                description: "Vague de racines qui root.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/225/300 (+75% AP)",
                damageType: "magic",
                details: "Root: 0.8-2.6s selon distance parcourue."
            }
        }
    },
    {
        id: 81,
        name: "Master Yi",
        title: "Le Bretteur Wuju",
        role: "assassin",
        icon: "⚔️",
        baseStats: {
            hp: 669, hpGrowth: 100, hpRegen: 7.5, hpRegenGrowth: 0.65,
            mana: 251, manaGrowth: 42, manaRegen: 6.5, manaRegenGrowth: 0.45,
            ad: 65, adGrowth: 3, as: 0.679, asGrowth: 2,
            armor: 33, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 355, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Double Strike",
            icon: "⚔️",
            description: "Chaque 4ème attaque frappe 2×.",
            cooldown: "Passif",
            details: "2ème frappe: 50% AD."
        },
        spells: {
            Q: {
                name: "Alpha Strike",
                icon: "💨",
                description: "Devient untargetable et frappe jusqu'à 4 cibles.",
                cooldown: "18/17/16/15/14s",
                cost: "50/55/60/65/70 Mana",
                damage: "30/60/90/120/150 (+60% AD) par cible",
                damageType: "physical",
                details: "Peut crit: +60% AD. CD -1s par attaque."
            },
            W: {
                name: "Meditate",
                icon: "🧘",
                description: "Canal: soigne et réduit dégâts.",
                cooldown: "28s",
                cost: "40 Mana + 6/s",
                damage: "Heal: 30/50/70/90/110 (+25% AP) par 0.5s",
                damageType: "utility",
                details: "Réduction: 60-90% selon niveau."
            },
            E: {
                name: "Wuju Style",
                icon: "✨",
                description: "Attaques infligent dégâts vrais bonus.",
                cooldown: "14s",
                cost: "Aucun",
                damage: "30/35/40/45/50 (+35% bonus AD)",
                damageType: "true",
                details: "Durée: 5s."
            },
            R: {
                name: "Highlander",
                icon: "👤",
                description: "Immune aux slows. AS + MS massif. Extend sur kills.",
                cooldown: "85s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+35/45/55% AS, +35/45/55% MS. 7s. +7s par takedown."
            }
        }
    },
    {
        id: 82,
        name: "Milio",
        title: "Le Gardien Doux",
        role: "support",
        icon: "🔥",
        baseStats: {
            hp: 530, hpGrowth: 87, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 365, manaGrowth: 45, manaRegen: 11.5, manaRegenGrowth: 0.4,
            ad: 48, adGrowth: 1.7, as: 0.625, asGrowth: 2.1,
            armor: 26, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Fired Up!",
            icon: "🔥",
            description: "Compétences enchantent alliés: attaques brûlent.",
            cooldown: "Passif",
            details: "Dégâts: 15-50 (+15% AP) sur 1.5s."
        },
        spells: {
            Q: {
                name: "Ultra Mega Fire Kick",
                icon: "⚽",
                description: "Kick projectile qui knockback.",
                cooldown: "12/11/10/9/8s",
                cost: "50/55/60/65/70 Mana",
                damage: "90/135/180/225/270 (+90% AP)",
                damageType: "magic",
                details: "Knockback + stun 1s si touche terrain."
            },
            W: {
                name: "Cozy Campfire",
                icon: "🏕️",
                description: "Zone qui suit allié: heal + MS.",
                cooldown: "17/16/15/14/13s",
                cost: "90/95/100/105/110 Mana",
                damage: "Heal: 70/90/110/130/150 (+30% AP)",
                damageType: "utility",
                details: "Durée: 6s. +12-20% MS."
            },
            E: {
                name: "Warm Hugs",
                icon: "🤗",
                description: "Bouclier + range bonus.",
                cooldown: "17/16.5/16/15.5/15s",
                cost: "85/90/95/100/105 Mana",
                damage: "Bouclier: 60/85/110/135/160 (+25% AP)",
                damageType: "utility",
                details: "+100-150 range pendant 3s."
            },
            R: {
                name: "Breath of Life",
                icon: "💨",
                description: "Soigne et cleanse tous les alliés proches.",
                cooldown: "160/145/130s",
                cost: "100 Mana",
                damage: "Heal: 200/300/400 (+50% AP)",
                damageType: "utility",
                details: "Cleanse tous CC."
            }
        }
    },
    {
        id: 83,
        name: "Miss Fortune",
        title: "La Chasseuse de Primes",
        role: "marksman",
        icon: "💃",
        baseStats: {
            hp: 640, hpGrowth: 107, hpRegen: 3.75, hpRegenGrowth: 0.65,
            mana: 300, manaGrowth: 35, manaRegen: 8.04, manaRegenGrowth: 0.65,
            ad: 52, adGrowth: 2.4, as: 0.656, asGrowth: 3,
            armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Love Tap",
            icon: "💋",
            description: "Attaque nouvelle cible = dégâts bonus.",
            cooldown: "Passif",
            details: "Dégâts: 50-100% AD selon niveau."
        },
        spells: {
            Q: {
                name: "Double Up",
                icon: "🔫",
                description: "Tir qui rebondit. 2ème cible = dégâts bonus.",
                cooldown: "7/6/5/4/3s",
                cost: "43/46/49/52/55 Mana",
                damage: "20/45/70/95/120 (+100% AD)(+35% AP)",
                damageType: "physical",
                details: "2ème hit: +100% si tue 1ère. Peut crit."
            },
            W: {
                name: "Strut",
                icon: "💃",
                description: "Passif: MS hors combat. Actif: AS + MS max.",
                cooldown: "12s",
                cost: "30 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "Passif: 25-75 MS après 5s. Actif: +40-80% AS 4s."
            },
            E: {
                name: "Make It Rain",
                icon: "🌧️",
                description: "Zone de balles qui slow.",
                cooldown: "18/16/14/12/10s",
                cost: "80 Mana",
                damage: "70/100/130/160/190 (+80% AP)",
                damageType: "magic",
                details: "Slow: 40-60%. Durée: 2s."
            },
            R: {
                name: "Bullet Time",
                icon: "🔫",
                description: "Canal: vagues de balles en cône.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "75% AD (+20% AP) × 12-16 vagues",
                damageType: "physical",
                details: "Canal: 3s. Peut crit. 12/14/16 vagues."
            }
        }
    },
    {
        id: 84,
        name: "Mordekaiser",
        title: "Le Revenant de Fer",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 645, hpGrowth: 104, hpRegen: 7, hpRegenGrowth: 0.65,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 61, adGrowth: 4, as: 0.625, asGrowth: 1,
            armor: 37, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 175
        },
        resource: "Bouclier",
        passive: {
            name: "Darkness Rise",
            icon: "🌀",
            description: "Après 3 sorts/attaques, aura de dégâts + MS.",
            cooldown: "Passif",
            details: "Aura: 5-15 (+30% AP) + 1-5% PV max/s. +3% MS."
        },
        spells: {
            Q: {
                name: "Obliterate",
                icon: "🔨",
                description: "Slam de masse. Bonus si cible isolée.",
                cooldown: "9/7.75/6.5/5.25/4s",
                cost: "Aucun",
                damage: "75/95/115/135/155 (+60% AP)(+5-9% PV max)",
                damageType: "magic",
                details: "Isolé: +30-70% dégâts."
            },
            W: {
                name: "Indestructible",
                icon: "🛡️",
                description: "Store dégâts en bouclier. Réactive: consume pour heal.",
                cooldown: "12/11/10/9/8s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Store: 35% dégâts subis/infligés. Bouclier: 5-25% PV max."
            },
            E: {
                name: "Death's Grasp",
                icon: "✋",
                description: "Main qui pull ennemis.",
                cooldown: "18/16/14/12/10s",
                cost: "Aucun",
                damage: "80/95/110/125/140 (+60% AP)",
                damageType: "magic",
                details: "Pull: vers Mordekaiser. Passive: +5-15% magic pen."
            },
            R: {
                name: "Realm of Death",
                icon: "💀",
                description: "Banit dans royaume de la mort 1v1. Vole stats.",
                cooldown: "140/120/100s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "7s. Vole 10% stats. Garde stats si tue cible."
            }
        }
    },
    {
        id: 85,
        name: "Morgana",
        title: "L'Exilée",
        role: "support",
        icon: "😈",
        baseStats: {
            hp: 630, hpGrowth: 104, hpRegen: 5.5, hpRegenGrowth: 0.4,
            mana: 340, manaGrowth: 60, manaRegen: 11, manaRegenGrowth: 0.4,
            ad: 56, adGrowth: 3.5, as: 0.625, asGrowth: 1.53,
            armor: 25, armorGrowth: 5, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 450
        },
        resource: "Mana",
        passive: {
            name: "Soul Siphon",
            icon: "💜",
            description: "Heal sur dégâts de sorts aux champions.",
            cooldown: "Passif",
            details: "Heal: 20% des dégâts de sorts aux champions."
        },
        spells: {
            Q: {
                name: "Dark Binding",
                icon: "⛓️",
                description: "Projectile qui root longtemps.",
                cooldown: "10s",
                cost: "50/55/60/65/70 Mana",
                damage: "80/135/190/245/300 (+90% AP)",
                damageType: "magic",
                details: "Root: 2/2.25/2.5/2.75/3s."
            },
            W: {
                name: "Tormented Shadow",
                icon: "🌑",
                description: "Zone DoT qui inflige plus aux cibles low HP.",
                cooldown: "12s",
                cost: "70/85/100/115/130 Mana",
                damage: "12/22/32/42/52 (+14% AP) × 5s",
                damageType: "magic",
                details: "+70% dégâts selon PV manquants. CD -5% sur passif proc."
            },
            E: {
                name: "Black Shield",
                icon: "🛡️",
                description: "Bouclier magique qui absorbe CC.",
                cooldown: "24/22/20/18/16s",
                cost: "80 Mana",
                damage: "Bouclier: 80/135/190/245/300 (+70% AP)",
                damageType: "utility",
                details: "Bloque CC tant que bouclier actif. Durée: 5s."
            },
            R: {
                name: "Soul Shackles",
                icon: "⛓️",
                description: "Chaînes sur ennemis proches. Si maintenues = stun.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "175/250/325 (+80% AP) × 2",
                damageType: "magic",
                details: "Slow: 20%. Stun: 1.5s après 3s. Gagne MS vers liés."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_M;
}
