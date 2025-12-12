// ========================================
// CHAMPIONS - LETTRE H
// ========================================

const CHAMPIONS_H = [
    {
        id: 44,
        name: "Hecarim",
        title: "L'Ombre de la Guerre",
        role: "fighter",
        icon: "🐴",
        baseStats: {
            hp: 625, hpGrowth: 99, hpRegen: 7, hpRegenGrowth: 0.75,
            mana: 277, manaGrowth: 40, manaRegen: 6.5, manaRegenGrowth: 0.6,
            ad: 66, adGrowth: 3.7, as: 0.67, asGrowth: 2.5,
            armor: 36, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Warpath",
            icon: "💨",
            description: "Gagne AD basé sur sa vitesse de déplacement bonus.",
            cooldown: "Passif",
            details: "AD bonus: 12-24% de la MS bonus."
        },
        spells: {
            Q: {
                name: "Rampage",
                icon: "⚔️",
                description: "Frappe ennemis proches. Stack jusqu'à 2 fois.",
                cooldown: "4s",
                cost: "28/31/34/37/40 Mana",
                damage: "60/85/110/135/160 (+85% bonus AD)",
                damageType: "physical",
                details: "Stack: -1s CD, +5% dégâts (max 2)."
            },
            W: {
                name: "Spirit of Dread",
                icon: "👻",
                description: "Zone qui inflige dégâts et soigne Hecarim.",
                cooldown: "18s",
                cost: "50/55/60/65/70 Mana",
                damage: "36/48/60/72/84 (+20% AP) total",
                damageType: "magic",
                details: "Heal: 25% (+2.5%/100 AP) dégâts subis par ennemis dans zone."
            },
            E: {
                name: "Devastating Charge",
                icon: "🏇",
                description: "Charge gagnant MS. Prochaine attaque knockback.",
                cooldown: "20/19/18/17/16s",
                cost: "60 Mana",
                damage: "30/50/70/90/110 (+50% bonus AD) à 180/262.5/345/427.5/510",
                damageType: "physical",
                details: "MS: +25-75% sur 4s. Dégâts et knockback selon distance."
            },
            R: {
                name: "Onslaught of Shadows",
                icon: "👻",
                description: "Charge avec cavaliers spectraux, fear à l'arrivée.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "150/250/350 (+100% AP)",
                damageType: "magic",
                details: "Fear: 0.75-1.5s selon distance de l'impact."
            }
        }
    },
    {
        id: 45,
        name: "Heimerdinger",
        title: "L'Inventeur Révolutionnaire",
        role: "mage",
        icon: "🔧",
        baseStats: {
            hp: 558, hpGrowth: 101, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 385, manaGrowth: 20, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 56, adGrowth: 2.7, as: 0.625, asGrowth: 1.36,
            armor: 19, armorGrowth: 4.4, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Hextech Affinity",
            icon: "⚡",
            description: "Gagne MS près de ses tourelles et alliés gagnent aussi.",
            cooldown: "Passif",
            details: "+20% MS pour Heimer et alliés proches des tourelles."
        },
        spells: {
            Q: {
                name: "H-28G Evolution Turret",
                icon: "🗼",
                description: "Place tourelle qui tire sur ennemis.",
                cooldown: "Recharge: 20s",
                cost: "20 Mana + charge",
                damage: "8/14/20/26/32 (+30% AP) par tir",
                damageType: "magic",
                details: "3 charges max. Faisceau: 40/60/80/100/120 (+55% AP)."
            },
            W: {
                name: "Hextech Micro-Rockets",
                icon: "🚀",
                description: "Lance 5 roquettes en éventail.",
                cooldown: "11/10/9/8/7s",
                cost: "50/60/70/80/90 Mana",
                damage: "50/80/110/140/170 (+45% AP) par roquette",
                damageType: "magic",
                details: "Dégâts réduits après premier hit sur même cible."
            },
            E: {
                name: "CH-2 Electron Storm Grenade",
                icon: "💣",
                description: "Grenade qui stun au centre, slow autour.",
                cooldown: "12s",
                cost: "85 Mana",
                damage: "60/100/140/180/220 (+60% AP)",
                damageType: "magic",
                details: "Centre: stun 1.25s. Bord: slow 35%."
            },
            R: {
                name: "UPGRADE!!!",
                icon: "⬆️",
                description: "Améliore le prochain sort basique.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "Variable selon sort",
                damageType: "magic",
                details: "R+Q: méga tourelle. R+W: 4 vagues de roquettes. R+E: rebondit 3 fois."
            }
        }
    },
    {
        id: 46,
        name: "Hwei",
        title: "Le Visionnaire",
        role: "mage",
        icon: "🎨",
        baseStats: {
            hp: 580, hpGrowth: 104, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 480, manaGrowth: 30, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 2.9, as: 0.625, asGrowth: 2,
            armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Signature of the Visionary",
            icon: "✨",
            description: "Toucher ennemis avec sorts marque. Prochain dégât = bonus.",
            cooldown: "Passif",
            details: "Dégâts bonus: 35-180 (+30% AP). Une marque par cible."
        },
        spells: {
            Q: {
                name: "Subject: Disaster",
                icon: "🔥",
                description: "3 sous-sorts de dégâts: Devastation (ligne), Severing (cercle), Molten (AoE DoT).",
                cooldown: "10/9/8/7/6s",
                cost: "80/85/90/95/100 Mana",
                damage: "70/110/150/190/230 (+80% AP) variable",
                damageType: "magic",
                details: "QQ: ligne burst. QW: cercle retardé. QE: feu au sol."
            },
            W: {
                name: "Subject: Serenity",
                icon: "💚",
                description: "3 sous-sorts utilitaires: Fleeting (MS), Pool (mana), Spirited (bouclier).",
                cooldown: "18/17/16/15/14s",
                cost: "50/55/60/65/70 Mana",
                damage: "Utilité",
                damageType: "utility",
                details: "WQ: +40% MS zone. WW: regen mana. WE: bouclier allié."
            },
            E: {
                name: "Subject: Torment",
                icon: "😈",
                description: "3 sous-sorts CC: Grim (fear), Gaze (root), Crush (pull).",
                cooldown: "14/13/12/11/10s",
                cost: "70/75/80/85/90 Mana",
                damage: "50/80/110/140/170 (+50% AP)",
                damageType: "magic",
                details: "EQ: fear AoE. EW: root ligne. EE: pull."
            },
            R: {
                name: "Spiraling Despair",
                icon: "🌀",
                description: "Zone qui s'étend, slow puis explose.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/250/350 (+80% AP) initial + 10-30% bonus",
                damageType: "magic",
                details: "Slow croissant. Dégâts bonus par seconde dans zone."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_H;
}
