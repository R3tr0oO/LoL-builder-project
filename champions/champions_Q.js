// ========================================
// CHAMPIONS - LETTRE Q
// ========================================

const CHAMPIONS_Q = [
    {
        id: 101,
        name: "Qiyana",
        title: "L'Impératrice des Éléments",
        role: "assassin",
        icon: "💎",
        baseStats: {
            hp: 590, hpGrowth: 110, hpRegen: 6, hpRegenGrowth: 0.9,
            mana: 320, manaGrowth: 50, manaRegen: 8, manaRegenGrowth: 0.7,
            ad: 66, adGrowth: 3.1, as: 0.688, asGrowth: 2.1,
            armor: 28, armorGrowth: 4.55, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Royal Privilege",
            icon: "👑",
            description: "Première attaque/sort sur ennemi = dégâts bonus.",
            cooldown: "25s par cible",
            details: "Dégâts: 15-83 (+55% bonus AD)(+30% AP). Reset avec nouvel élément."
        },
        spells: {
            Q: {
                name: "Edge of Ixtal",
                icon: "🔪",
                description: "Slash. Effet selon élément actuel.",
                cooldown: "7s",
                cost: "35 Mana",
                damage: "60/85/110/135/160 (+90% bonus AD)",
                damageType: "physical",
                details: "Terre: bonus dégâts. Eau: root. Buisson: invisible."
            },
            W: {
                name: "Terrashape",
                icon: "🌍",
                description: "Dash + récupère élément du terrain.",
                cooldown: "7s",
                cost: "25/30/35/40/45 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Éléments: Mur (terre), Rivière (eau), Buisson (herbe). Reset Q."
            },
            E: {
                name: "Audacity",
                icon: "💨",
                description: "Dash à travers ennemi.",
                cooldown: "12/11/10/9/8s",
                cost: "40/45/50/55/60 Mana",
                damage: "50/90/130/170/210 (+70% bonus AD)",
                damageType: "physical",
                details: "Peut cast Q pendant."
            },
            R: {
                name: "Supreme Display of Talent",
                icon: "💥",
                description: "Onde de choc. Explose murs. Knock back + stun.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "100/170/240 (+170% bonus AD) + 100/170/240 (+70% bonus AD) mur",
                damageType: "physical",
                details: "Shockwave vers murs. Mur explosion = stun."
            }
        }
    },
    {
        id: 102,
        name: "Quinn",
        title: "Les Ailes de Demacia",
        role: "marksman",
        icon: "🦅",
        baseStats: {
            hp: 603, hpGrowth: 99, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 269, manaGrowth: 35, manaRegen: 6.97, manaRegenGrowth: 0.4,
            ad: 59, adGrowth: 2.4, as: 0.668, asGrowth: 3.1,
            armor: 28, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Harrier",
            icon: "🎯",
            description: "Valor marque ennemis. Attaque marqué = dégâts bonus + MS.",
            cooldown: "8s par cible",
            details: "Dégâts: 10-95 (+16-50% AD). MS: +20-40% 2s."
        },
        spells: {
            Q: {
                name: "Blinding Assault",
                icon: "🦅",
                description: "Valor attaque. Nearsight ennemi.",
                cooldown: "11/10/9/8/7s",
                cost: "50/55/60/65/70 Mana",
                damage: "20/45/70/95/120 (+80/90/100/110/120% AD)(+50% AP)",
                damageType: "physical",
                details: "Nearsight: 1.5s (réduit sur minions)."
            },
            W: {
                name: "Heightened Senses",
                icon: "👁️",
                description: "Passif: AS sur Harrier. Actif: révèle zone.",
                cooldown: "50/45/40/35/30s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Passif: +20-40% AS 2s. Actif: révèle 2100 range 2s."
            },
            E: {
                name: "Vault",
                icon: "💨",
                description: "Dash vers ennemi, rebondit, slow + marque.",
                cooldown: "12/11/10/9/8s",
                cost: "50 Mana",
                damage: "40/70/100/130/160 (+20% bonus AD)",
                damageType: "physical",
                details: "Slow: 50% 1.5s. Applique Harrier."
            },
            R: {
                name: "Behind Enemy Lines",
                icon: "🦅",
                description: "Monte Valor. MS massif. Combat = démonte.",
                cooldown: "3s (après démontage)",
                cost: "80/90/100 Mana",
                damage: "Skystrike: 70% AD AOE au démontage",
                damageType: "physical",
                details: "+70-110% MS total. Dégâts démontent."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_Q;
}
