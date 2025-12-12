// ========================================
// CHAMPIONS - LETTRE L
// ========================================

const CHAMPIONS_L = [
    {
        id: 70,
        name: "LeBlanc",
        title: "La Manipulatrice",
        role: "assassin",
        icon: "🎭",
        baseStats: {
            hp: 598, hpGrowth: 99, hpRegen: 7.5, hpRegenGrowth: 0.55,
            mana: 334, manaGrowth: 60, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3.5, as: 0.625, asGrowth: 1.4,
            armor: 22, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Mirror Image",
            icon: "👯",
            description: "Sous 40% HP, devient invisible et crée clone.",
            cooldown: "60s",
            details: "Invisibilité: 1s. Clone: 8s, peut être contrôlé."
        },
        spells: {
            Q: {
                name: "Sigil of Malice",
                icon: "🔮",
                description: "Marque cible. Si touché par autre sort = dégâts bonus.",
                cooldown: "6s",
                cost: "50/55/60/65/70 Mana",
                damage: "65/100/135/170/205 (+45% AP)",
                damageType: "magic",
                details: "Proc: 65/100/135/170/205 (+45% AP) bonus."
            },
            W: {
                name: "Distortion",
                icon: "💨",
                description: "Dash vers position, peut revenir.",
                cooldown: "18/16/14/12/10s",
                cost: "70/75/80/85/90 Mana",
                damage: "75/115/155/195/235 (+60% AP)",
                damageType: "magic",
                details: "Return: dans 4s. Peut proc Q."
            },
            E: {
                name: "Ethereal Chains",
                icon: "⛓️",
                description: "Lien qui root après délai.",
                cooldown: "14/13/12/11/10s",
                cost: "50/55/60/65/70 Mana",
                damage: "50/80/110/140/170 (+30% AP) × 2",
                damageType: "magic",
                details: "Slow 25%. Root 1.5s après 1.5s si maintenu."
            },
            R: {
                name: "Mimic",
                icon: "🎭",
                description: "Copie dernier sort lancé avec dégâts améliorés.",
                cooldown: "60/45/30s",
                cost: "Aucun",
                damage: "Variable (+75% AP)",
                damageType: "magic",
                details: "RQ: +140/200/260. RW: +150/300/450. RE: +70/140/210."
            }
        }
    },
    {
        id: 71,
        name: "Lee Sin",
        title: "Le Moine Aveugle",
        role: "fighter",
        icon: "🥋",
        baseStats: {
            hp: 645, hpGrowth: 99, hpRegen: 7.5, hpRegenGrowth: 0.7,
            mana: 200, manaGrowth: 0, manaRegen: 50, manaRegenGrowth: 0,
            ad: 66, adGrowth: 3.2, as: 0.651, asGrowth: 3,
            armor: 36, armorGrowth: 4.9, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Énergie",
        passive: {
            name: "Flurry",
            icon: "👊",
            description: "Après sort, 2 attaques ont +40% AS et restore énergie.",
            cooldown: "Passif",
            details: "+40% AS. Restore 20/10 énergie (1ère/2ème)."
        },
        spells: {
            Q: {
                name: "Sonic Wave / Resonating Strike",
                icon: "🔊",
                description: "Q1: Projectile révèle. Q2: Dash vers cible.",
                cooldown: "10/9/8/7/6s",
                cost: "50 Énergie",
                damage: "Q1: 55/80/105/130/155 (+115% bonus AD) | Q2: +55/80/105/130/155 (+115% bonus AD)",
                damageType: "physical",
                details: "Q2: +0-100% selon PV manquants cible."
            },
            W: {
                name: "Safeguard / Iron Will",
                icon: "🛡️",
                description: "W1: Dash vers allié + bouclier. W2: Lifesteal + spellvamp.",
                cooldown: "12s",
                cost: "50 Énergie",
                damage: "Bouclier: 50/100/150/200/250 (+80% AP)",
                damageType: "utility",
                details: "W2: +5-25% lifesteal/spellvamp 4s."
            },
            E: {
                name: "Tempest / Cripple",
                icon: "💨",
                description: "E1: Dégâts AOE + révèle. E2: Slow.",
                cooldown: "9s",
                cost: "50 Énergie",
                damage: "E1: 35/65/95/125/155 (+100% bonus AD)",
                damageType: "magic",
                details: "E2: Slow 20-80% décroissant 4s."
            },
            R: {
                name: "Dragon's Rage",
                icon: "🐉",
                description: "Kick ennemi. Knockback + dégâts aux ennemis traversés.",
                cooldown: "90/75/60s",
                cost: "Aucun",
                damage: "175/400/625 (+200% bonus AD)",
                damageType: "physical",
                details: "Knockback: 1200 unités. Ennemis touchés: même dégâts + knock up."
            }
        }
    },
    {
        id: 72,
        name: "Leona",
        title: "L'Aube Radieuse",
        role: "support",
        icon: "☀️",
        baseStats: {
            hp: 646, hpGrowth: 109, hpRegen: 8.5, hpRegenGrowth: 0.85,
            mana: 302, manaGrowth: 40, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 60, adGrowth: 3, as: 0.625, asGrowth: 2.9,
            armor: 47, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Sunlight",
            icon: "☀️",
            description: "Sorts marquent ennemis. Attaques alliés proc dégâts bonus.",
            cooldown: "Passif",
            details: "Dégâts: 32-168 magic (selon niveau). Leona ne peut pas proc."
        },
        spells: {
            Q: {
                name: "Shield of Daybreak",
                icon: "🛡️",
                description: "Prochaine attaque stun.",
                cooldown: "5s",
                cost: "35/40/45/50/55 Mana",
                damage: "10/35/60/85/110 (+30% AP)",
                damageType: "magic",
                details: "Stun: 1s."
            },
            W: {
                name: "Eclipse",
                icon: "🌙",
                description: "Gagne armor/MR puis explose.",
                cooldown: "12/11/10/9/8s",
                cost: "60 Mana",
                damage: "45/80/115/150/185 (+40% AP)",
                damageType: "magic",
                details: "+20-40 (+20% armor)(+20% MR) pendant 3s. Explosion après 2.5s."
            },
            E: {
                name: "Zenith Blade",
                icon: "⚔️",
                description: "Projection épée. Dash vers dernier champion touché.",
                cooldown: "12/10.5/9/7.5/6s",
                cost: "60 Mana",
                damage: "50/90/130/170/210 (+40% AP)",
                damageType: "magic",
                details: "Root: 0.5s à l'arrivée."
            },
            R: {
                name: "Solar Flare",
                icon: "💥",
                description: "Rayon solaire. Centre = stun. Extérieur = slow.",
                cooldown: "90/75/60s",
                cost: "100 Mana",
                damage: "150/225/300 (+80% AP)",
                damageType: "magic",
                details: "Centre: stun 1.5s. Extérieur: slow 80%."
            }
        }
    },
    {
        id: 73,
        name: "Lillia",
        title: "La Fleur Timide",
        role: "fighter",
        icon: "🦌",
        baseStats: {
            hp: 625, hpGrowth: 104, hpRegen: 9, hpRegenGrowth: 0.75,
            mana: 410, manaGrowth: 50, manaRegen: 11.5, manaRegenGrowth: 0.4,
            ad: 61, adGrowth: 3.1, as: 0.625, asGrowth: 2.7,
            armor: 25, armorGrowth: 4.7, mr: 32, mrGrowth: 1.3,
            ms: 330, range: 325
        },
        resource: "Mana",
        passive: {
            name: "Dream-Laden Bough",
            icon: "🌸",
            description: "Sorts appliquent Dream Dust: dégâts sur temps.",
            cooldown: "Passif",
            details: "Dream Dust: 5% AP + 1.5% PV max sur 3s (max 40 vs monstres)."
        },
        spells: {
            Q: {
                name: "Blooming Blows",
                icon: "💫",
                description: "Swing bâton. Bord externe = dégâts vrais.",
                cooldown: "4s",
                cost: "45 Mana",
                damage: "35/45/55/65/75 (+35% AP)",
                damageType: "magic",
                details: "Bord: 35/50/65/80/95 (+45% AP) true damage. Stack MS: 3-9% (×5)."
            },
            W: {
                name: "Watch Out! Eep!",
                icon: "💥",
                description: "Slam zone. Centre = dégâts bonus.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Mana",
                damage: "70/85/100/115/130 (+35% AP)",
                damageType: "magic",
                details: "Centre: +200% dégâts (210/255/300/345/390 +105% AP)."
            },
            E: {
                name: "Swirlseed",
                icon: "🌰",
                description: "Lance graine qui roule et slow.",
                cooldown: "16s",
                cost: "70 Mana",
                damage: "70/95/120/145/170 (+45% AP)",
                damageType: "magic",
                details: "Slow: 40%. Accélère en descendant. Révèle."
            },
            R: {
                name: "Lilting Lullaby",
                icon: "💤",
                description: "Endort tous les champions marqués par Dream Dust.",
                cooldown: "130/110/90s",
                cost: "50 Mana",
                damage: "100/150/200 (+40% AP) au réveil",
                damageType: "magic",
                details: "Sleep: 1.5-2.5s (selon durée Dream Dust)."
            }
        }
    },
    {
        id: 74,
        name: "Lissandra",
        title: "La Sorcière de Glace",
        role: "mage",
        icon: "❄️",
        baseStats: {
            hp: 620, hpGrowth: 104, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 475, manaGrowth: 30, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 2.7, as: 0.656, asGrowth: 1.36,
            armor: 22, armorGrowth: 4.9, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Iceborn Subjugation",
            icon: "👻",
            description: "Ennemis qui meurent near deviennent Frozen Thralls.",
            cooldown: "Passif",
            details: "Thrall: slow puis explose 120-520 (+50% AP)."
        },
        spells: {
            Q: {
                name: "Ice Shard",
                icon: "❄️",
                description: "Lance glace qui éclate et continue.",
                cooldown: "8/7/6/5/4s",
                cost: "55/60/65/70/75 Mana",
                damage: "80/110/140/170/200 (+80% AP)",
                damageType: "magic",
                details: "Slow: 16-28% 1.5s. Éclate au premier hit."
            },
            W: {
                name: "Ring of Frost",
                icon: "⭕",
                description: "Zone autour qui root.",
                cooldown: "12/11/10/9/8s",
                cost: "40 Mana",
                damage: "70/105/140/175/210 (+70% AP)",
                damageType: "magic",
                details: "Root: 1.1-1.5s."
            },
            E: {
                name: "Glacial Path",
                icon: "🧊",
                description: "Envoie griffe de glace. Peut se TP dessus.",
                cooldown: "24/21/18/15/12s",
                cost: "80/85/90/95/100 Mana",
                damage: "70/105/140/175/210 (+60% AP)",
                damageType: "magic",
                details: "Recast: TP vers griffe."
            },
            R: {
                name: "Frozen Tomb",
                icon: "🪦",
                description: "Self-cast: invulnérable. Ennemi: stun.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/250/350 (+75% AP)",
                damageType: "magic",
                details: "Self: heal 100-300. Duration: 2.5s. Zone slow 30%."
            }
        }
    },
    {
        id: 75,
        name: "Lucian",
        title: "Le Purificateur",
        role: "marksman",
        icon: "🔫",
        baseStats: {
            hp: 641, hpGrowth: 100, hpRegen: 3.75, hpRegenGrowth: 0.65,
            mana: 320, manaGrowth: 43, manaRegen: 8.18, manaRegenGrowth: 0.7,
            ad: 60, adGrowth: 2.9, as: 0.638, asGrowth: 3.3,
            armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Lightslinger",
            icon: "✨",
            description: "Après sort, prochaine attaque tire 2 fois.",
            cooldown: "Passif",
            details: "2ème tir: 50-60% AD. Applique effets on-hit."
        },
        spells: {
            Q: {
                name: "Piercing Light",
                icon: "💥",
                description: "Tir en ligne à travers cible.",
                cooldown: "9/8/7/6/5s",
                cost: "50/55/60/65/70 Mana",
                damage: "95/125/155/185/215 (+60-100% AD)",
                damageType: "physical",
                details: "Range étendue: 900 derrière cible."
            },
            W: {
                name: "Ardent Blaze",
                icon: "✨",
                description: "Croix lumineuse. Toucher marqué = MS bonus.",
                cooldown: "14/13/12/11/10s",
                cost: "70 Mana",
                damage: "75/110/145/180/215 (+90% AP)",
                damageType: "magic",
                details: "Marque: 6s. MS: +60-100."
            },
            E: {
                name: "Relentless Pursuit",
                icon: "💨",
                description: "Dash. CD reset si Lightslinger tue ou touche champion.",
                cooldown: "22/20/18/16/14s",
                cost: "40/35/30/25/20 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "CD -1s par Lightslinger. Reset complet si kill."
            },
            R: {
                name: "The Culling",
                icon: "🔫",
                description: "Tire en rafale devant. Peut bouger.",
                cooldown: "110/100/90s",
                cost: "100 Mana",
                damage: "20/40/60 (+25% AD)(+15% AP) × 22/28/34",
                damageType: "physical",
                details: "Canal: 3s. Peut dash. Crits pour 25% bonus."
            }
        }
    },
    {
        id: 76,
        name: "Lulu",
        title: "La Fée Sorcière",
        role: "support",
        icon: "🧚",
        baseStats: {
            hp: 595, hpGrowth: 88, hpRegen: 6, hpRegenGrowth: 0.6,
            mana: 350, manaGrowth: 55, manaRegen: 11, manaRegenGrowth: 0.6,
            ad: 47, adGrowth: 2.6, as: 0.625, asGrowth: 2.25,
            armor: 29, armorGrowth: 4.9, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Pix, Faerie Companion",
            icon: "✨",
            description: "Pix aide attaques. Tire bolts.",
            cooldown: "Passif",
            details: "3 bolts par attaque: 5-47 (+10% AP) chacun. Peut être bloqué."
        },
        spells: {
            Q: {
                name: "Glitterlance",
                icon: "✨",
                description: "Lulu et Pix tirent projectiles qui slow.",
                cooldown: "7s",
                cost: "50/55/60/65/70 Mana",
                damage: "70/105/140/175/210 (+50% AP)",
                damageType: "magic",
                details: "Slow: 80% décroissant 2s."
            },
            W: {
                name: "Whimsy",
                icon: "🐿️",
                description: "Allié: MS + AS. Ennemi: polymorph.",
                cooldown: "16/15/14/13/12s",
                cost: "65 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Allié: +25% MS, +20-40% AS 3-5s. Ennemi: polymorph 1.2-2s."
            },
            E: {
                name: "Help, Pix!",
                icon: "🧚",
                description: "Allié: bouclier + Pix. Ennemi: dégâts + vision.",
                cooldown: "10s",
                cost: "60/65/70/75/80 Mana",
                damage: "Bouclier: 75/110/145/180/215 (+55% AP) | Dégâts: 80/120/160/200/240 (+40% AP)",
                damageType: "magic",
                details: "Pix suit cible 5s."
            },
            R: {
                name: "Wild Growth",
                icon: "🌿",
                description: "Agrandi allié: bonus HP + knock up ennemis proches.",
                cooldown: "110/95/80s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Bonus HP: 300/450/600 (+50% AP). Knock up: 0.75s. Slow zone: 30-50%."
            }
        }
    },
    {
        id: 77,
        name: "Lux",
        title: "La Dame Lumineuse",
        role: "mage",
        icon: "✨",
        baseStats: {
            hp: 580, hpGrowth: 99, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 480, manaGrowth: 23.5, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 54, adGrowth: 3.3, as: 0.669, asGrowth: 1,
            armor: 19, armorGrowth: 4.95, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Illumination",
            icon: "💡",
            description: "Sorts marquent. Attaque/R proc dégâts bonus.",
            cooldown: "Passif",
            details: "Dégâts: 20-190 (+20% AP)."
        },
        spells: {
            Q: {
                name: "Light Binding",
                icon: "⛓️",
                description: "Projectile qui root 2 cibles.",
                cooldown: "11/10.5/10/9.5/9s",
                cost: "50/55/60/65/70 Mana",
                damage: "80/120/160/200/240 (+60% AP)",
                damageType: "magic",
                details: "Root: 2s (1ère), 1s (2ème)."
            },
            W: {
                name: "Prismatic Barrier",
                icon: "🛡️",
                description: "Lance bâton qui bouclier alliés touchés 2×.",
                cooldown: "14/13/12/11/10s",
                cost: "60/65/70/75/80 Mana",
                damage: "Bouclier: 40/55/70/85/100 (+35% AP) × 2",
                damageType: "utility",
                details: "Aller + retour = 2 boucliers."
            },
            E: {
                name: "Lucent Singularity",
                icon: "💫",
                description: "Zone lumineuse qui slow puis explose.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "70/80/90/100/110 Mana",
                damage: "65/115/165/215/265 (+65% AP)",
                damageType: "magic",
                details: "Slow: 25-45%. Zone: 5s max. Révèle."
            },
            R: {
                name: "Final Spark",
                icon: "🌈",
                description: "Laser géant en ligne.",
                cooldown: "60/50/40s",
                cost: "100 Mana",
                damage: "300/400/500 (+100% AP)",
                damageType: "magic",
                details: "Range: 3340. Proc passive. Refresh passive."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_L;
}
