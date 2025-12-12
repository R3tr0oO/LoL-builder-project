// ========================================
// CHAMPIONS - LETTRE G
// ========================================

const CHAMPIONS_G = [
    {
        id: 37,
        name: "Galio",
        title: "Le Colosse",
        role: "tank",
        icon: "🗿",
        baseStats: {
            hp: 632, hpGrowth: 126, hpRegen: 8, hpRegenGrowth: 0.8,
            mana: 500, manaGrowth: 40, manaRegen: 9.5, manaRegenGrowth: 0.7,
            ad: 59, adGrowth: 3.5, as: 0.625, asGrowth: 1.5,
            armor: 24, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Colossal Smash",
            icon: "👊",
            description: "Périodiquement, attaque = dégâts magiques zone.",
            cooldown: "5s (réduit par AH)",
            details: "Dégâts: 15-200 (+100% AD)(+50% AP)(+60% bonus MR)."
        },
        spells: {
            Q: {
                name: "Winds of War",
                icon: "🌪️",
                description: "Tornades convergent et créent zone % PV.",
                cooldown: "12/10.5/9/7.5/6s",
                cost: "70/75/80/85/90 Mana",
                damage: "70-230 (+75% AP) | Zone: 6% (+3%/100 AP) PV max",
                damageType: "magic",
                details: "Zone: jusqu'à 8% PV max total."
            },
            W: {
                name: "Shield of Durand",
                icon: "🛡️",
                description: "Passif: bouclier anti-magie. Actif: charge taunt.",
                cooldown: "18/17.5/17/16.5/16s",
                cost: "50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Passif: bouclier 8-23% PV max. Taunt: 0.5-1.5s. Réduction: 20-40%."
            },
            E: {
                name: "Justice Punch",
                icon: "💨",
                description: "Dash arrière puis charge, knock up premier champion.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Mana",
                damage: "90/130/170/210/250 (+90% AP)",
                damageType: "magic",
                details: "Knock up: 0.75s."
            },
            R: {
                name: "Hero's Entrance",
                icon: "🦸",
                description: "Saute vers allié n'importe où, knock up à l'atterrissage.",
                cooldown: "180/160/140s",
                cost: "100 Mana",
                damage: "150/250/350 (+70% AP)",
                damageType: "magic",
                details: "Canal: 1.25s. Bouclier allié: 20-30% PV max. Knock up: 0.75s."
            }
        }
    },
    {
        id: 38,
        name: "Gangplank",
        title: "Le Roi des Pirates",
        role: "fighter",
        icon: "🏴‍☠️",
        baseStats: {
            hp: 600, hpGrowth: 114, hpRegen: 6, hpRegenGrowth: 0.6,
            mana: 280, manaGrowth: 60, manaRegen: 7.5, manaRegenGrowth: 0.7,
            ad: 64, adGrowth: 3.7, as: 0.658, asGrowth: 3.2,
            armor: 31, armorGrowth: 4.4, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Trial by Fire",
            icon: "🔥",
            description: "Périodiquement, prochaine attaque brûle + MS.",
            cooldown: "15s (reset barrel)",
            details: "Burn: 55-310 (+100% bonus AD) 2.5s. +15-30% MS."
        },
        spells: {
            Q: {
                name: "Parrrley",
                icon: "🔫",
                description: "Tire pistolet. Tue = or bonus. Effets d'attaque.",
                cooldown: "5s",
                cost: "60/55/50/45/40 Mana",
                damage: "10/40/70/100/130 (+100% AD)",
                damageType: "physical",
                details: "Or bonus: 3-7/kill. +50% Silver Serpents."
            },
            W: {
                name: "Remove Scurvy",
                icon: "🍊",
                description: "Mange orange, heal et retire tous CCs.",
                cooldown: "22/20/18/16/14s",
                cost: "80/90/100/110/120 Mana",
                damage: "Heal: 50-150 (+90% AP)(+15% PV manquants)",
                damageType: "utility",
                details: "Cleanse tous CCs."
            },
            E: {
                name: "Powder Keg",
                icon: "🛢️",
                description: "Place baril explosif. Q ou attaque = explosion chaîne.",
                cooldown: "Recharge: 18/17/16/15/14s",
                cost: "Aucun",
                damage: "80/105/130/155/180 + attaque",
                damageType: "physical",
                details: "Ignore 40% armor. Slow: 40-80%. 3 charges."
            },
            R: {
                name: "Cannon Barrage",
                icon: "☠️",
                description: "Bombardement global.",
                cooldown: "170/150/130s",
                cost: "100 Mana",
                damage: "40/70/100 (+10% AD) × 12",
                damageType: "magic",
                details: "Slow: 30%. Upgrades: Death's Daughter, Raise Morale, Fire at Will."
            }
        }
    },
    {
        id: 39,
        name: "Garen",
        title: "La Puissance de Demacia",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 690, hpGrowth: 98, hpRegen: 8, hpRegenGrowth: 0.5,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 66, adGrowth: 4.5, as: 0.625, asGrowth: 3.65,
            armor: 36, armorGrowth: 4.2, mr: 32, mrGrowth: 1.55,
            ms: 340, range: 175
        },
        resource: "Aucun",
        passive: {
            name: "Perseverance",
            icon: "💚",
            description: "Regen % PV max/s si pas de dégâts récents.",
            cooldown: "Passif",
            details: "Regen: 1.5-10.1% PV max/5s. Délai: 7s (1s après 11)."
        },
        spells: {
            Q: {
                name: "Decisive Strike",
                icon: "⚔️",
                description: "Gagne MS, prochaine attaque silence + dégâts bonus.",
                cooldown: "8s",
                cost: "Aucun",
                damage: "30/60/90/120/150 (+50% AD)",
                damageType: "physical",
                details: "+35% MS 1-3.65s. Silence: 1.5s. Reset auto."
            },
            W: {
                name: "Courage",
                icon: "🛡️",
                description: "Passif: kills = armor/MR. Actif: bouclier + tenacity.",
                cooldown: "23/21/19/17/15s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Passif: +0.2 armor/MR/kill (max +30). Actif: bouclier, 60% tenacity 0.75s, 30% réduction 2-5s."
            },
            E: {
                name: "Judgment",
                icon: "🌀",
                description: "Tournoie épée 3s, dégâts multiples.",
                cooldown: "9s",
                cost: "Aucun",
                damage: "4/8/12/16/20 (+0-8)(+32-40% AD) × 7-10",
                damageType: "physical",
                details: "+1 spin/25% AS. +25% si une cible. Peut crit (+50%)."
            },
            R: {
                name: "Demacian Justice",
                icon: "⚔️",
                description: "Épée de Demacia exécute ennemi.",
                cooldown: "120/100/80s",
                cost: "Aucun",
                damage: "150/300/450 (+25/30/35% PV manquants)",
                damageType: "magic (true si Villain)",
                details: "Villain: plus de kills récents = dégâts vrais + 1% PV max/attaque."
            }
        }
    },
    {
        id: 40,
        name: "Gnar",
        title: "Le Chaînon Manquant",
        role: "fighter",
        icon: "🐾",
        baseStats: {
            hp: 540, hpGrowth: 79, hpRegen: 4.5, hpRegenGrowth: 1.25,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 57, adGrowth: 3, as: 0.625, asGrowth: 6,
            armor: 32, armorGrowth: 2.8, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 175
        },
        resource: "Rage",
        passive: {
            name: "Rage Gene",
            icon: "😤",
            description: "Génère Rage en combat. À 100 = Mega Gnar.",
            cooldown: "Passif",
            details: "Mini: ranged, rapide, faible. Mega: melee, lent, tanky. 15s puis 15s CD."
        },
        spells: {
            Q: {
                name: "Boomerang / Boulder Toss",
                icon: "🪃",
                description: "Mini: boomerang. Mega: rocher.",
                cooldown: "20/17.5/15/12.5/10s",
                cost: "Aucun",
                damage: "Mini: 5-165 (+115% AD) | Mega: 25-205 (+140% AD)",
                damageType: "physical",
                details: "Mini: attraper -45% CD. Mega: slow 20-60%."
            },
            W: {
                name: "Hyper / Wallop",
                icon: "⚡",
                description: "Mini: 3ème hit = % PV max. Mega: stun ligne.",
                cooldown: "Passif / 15/13/11/9/7s",
                cost: "Aucun",
                damage: "Mini: 0-40 (+100% AP) + 6-14% PV max | Mega: 25-105 (+100% AD)",
                damageType: "magic/physical",
                details: "Mini: +20-40% MS. Mega: stun 1.25s."
            },
            E: {
                name: "Hop / Crunch",
                icon: "💨",
                description: "Mini: rebondit sur unité. Mega: saut avec dégâts.",
                cooldown: "22/19.5/17/14.5/12s",
                cost: "Aucun",
                damage: "Mini: 50-190 (+6% max HP) | Mega: 80-220 (+6% max HP)",
                damageType: "physical",
                details: "Mini: rebondit plus loin. Mega: slow 80%."
            },
            R: {
                name: "GNAR!",
                icon: "😡",
                description: "Mega seulement. Projette ennemis dans direction.",
                cooldown: "90/60/30s",
                cost: "Aucun",
                damage: "200/300/400 (+50% bonus AD)(+100% AP)",
                damageType: "physical",
                details: "Stun: 1.25-1.75s si mur. Knockback sinon."
            }
        }
    },
    {
        id: 41,
        name: "Gragas",
        title: "Le Buveur de Rabble",
        role: "tank",
        icon: "🍺",
        baseStats: {
            hp: 670, hpGrowth: 115, hpRegen: 5.5, hpRegenGrowth: 0.5,
            mana: 400, manaGrowth: 47, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 64, adGrowth: 3.5, as: 0.625, asGrowth: 2.05,
            armor: 38, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 330, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Happy Hour",
            icon: "🍺",
            description: "Utiliser compétence = heal.",
            cooldown: "8s",
            details: "Heal: 6.5% PV max."
        },
        spells: {
            Q: {
                name: "Barrel Roll",
                icon: "🛢️",
                description: "Lance tonneau qui fermente (plus de dégâts). Explose au signal.",
                cooldown: "10/9/8/7/6s",
                cost: "60/65/70/75/80 Mana",
                damage: "80/120/160/200/240 (+70% AP)",
                damageType: "magic",
                details: "+50% dégâts après fermentation 2s. Slow: 40/45/50/55/60%."
            },
            W: {
                name: "Drunken Rage",
                icon: "🍻",
                description: "Canal réduit dégâts. Prochaine attaque = dégâts bonus.",
                cooldown: "5s",
                cost: "30 Mana",
                damage: "20/50/80/110/140 (+7% cible max HP)(+70% AP)",
                damageType: "magic",
                details: "Canal: réduit dégâts 10-18% (+4%/100 AP)."
            },
            E: {
                name: "Body Slam",
                icon: "💨",
                description: "Charge, stun premier ennemi.",
                cooldown: "14/13.5/13/12.5/12s",
                cost: "50 Mana",
                damage: "80/125/170/215/260 (+60% AP)",
                damageType: "magic",
                details: "Stun: 1s. Knockback léger autres."
            },
            R: {
                name: "Explosive Cask",
                icon: "💥",
                description: "Lance tonneau explosif qui knockback.",
                cooldown: "100/90/80s",
                cost: "100 Mana",
                damage: "200/300/400 (+80% AP)",
                damageType: "magic",
                details: "Knockback: direction opposée à l'impact."
            }
        }
    },
    {
        id: 42,
        name: "Graves",
        title: "L'Hors-la-loi",
        role: "marksman",
        icon: "🔫",
        baseStats: {
            hp: 625, hpGrowth: 106, hpRegen: 8, hpRegenGrowth: 0.7,
            mana: 325, manaGrowth: 40, manaRegen: 7.9, manaRegenGrowth: 0.7,
            ad: 66, adGrowth: 3, as: 0.475, asGrowth: 2.6,
            armor: 33, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 425
        },
        resource: "Mana",
        passive: {
            name: "New Destiny",
            icon: "🔫",
            description: "Shotgun tire 2 balles. Recharge unique. Ne peut pas critiquer normalement.",
            cooldown: "Passif",
            details: "2 balles par tir. Dégâts réduits après première cible."
        },
        spells: {
            Q: {
                name: "End of the Line",
                icon: "💥",
                description: "Projectile qui rebondit et explose.",
                cooldown: "12/11/10/9/8s",
                cost: "60/65/70/75/80 Mana",
                damage: "45/60/75/90/105 (+80% bonus AD) × 2",
                damageType: "physical",
                details: "Explosion après rebond ou 2s."
            },
            W: {
                name: "Smoke Screen",
                icon: "💨",
                description: "Zone qui aveugle et slow.",
                cooldown: "22/20/18/16/14s",
                cost: "70/75/80/85/90 Mana",
                damage: "60/110/160/210/260 (+60% AP)",
                damageType: "magic",
                details: "Nearsight + slow 50%."
            },
            E: {
                name: "Quickdraw",
                icon: "💨",
                description: "Dash qui recharge une balle et donne armor stack.",
                cooldown: "16/14/12/10/8s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "+4/7/10/13/16 armor par stack (max 8). Reset partiel si touche."
            },
            R: {
                name: "Collateral Damage",
                icon: "💣",
                description: "Tir explosif qui repousse Graves et explose.",
                cooldown: "100/80/60s",
                cost: "100 Mana",
                damage: "250/400/550 (+150% bonus AD)",
                damageType: "physical",
                details: "Explosion en cône derrière cible."
            }
        }
    },
    {
        id: 43,
        name: "Gwen",
        title: "La Couturière Sanctifiée",
        role: "fighter",
        icon: "✂️",
        baseStats: {
            hp: 620, hpGrowth: 115, hpRegen: 7, hpRegenGrowth: 0.9,
            mana: 330, manaGrowth: 40, manaRegen: 7.5, manaRegenGrowth: 0.75,
            ad: 63, adGrowth: 3, as: 0.69, asGrowth: 2.25,
            armor: 39, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Thousand Cuts",
            icon: "✂️",
            description: "Attaques infligent % PV max et soignent.",
            cooldown: "Passif",
            details: "Dégâts: 1% (+0.6%/100 AP) PV max. Heal: 50% dégâts bonus."
        },
        spells: {
            Q: {
                name: "Snip Snip!",
                icon: "✂️",
                description: "Coupe 2-6 fois selon attaques récentes.",
                cooldown: "6.5/5.75/5/4.25/3.5s",
                cost: "40 Mana",
                damage: "10/15/20/25/30 (+5% AP) × coupes",
                damageType: "magic",
                details: "Centre: dégâts vrais. +1 coupe par attaque (max 4 bonus)."
            },
            W: {
                name: "Hallowed Mist",
                icon: "🌫️",
                description: "Zone qui rend intouchable depuis l'extérieur.",
                cooldown: "22/20/18/16/14s",
                cost: "60 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 4s. Se recentre sur Gwen une fois. +20-40 armor/MR dedans."
            },
            E: {
                name: "Skip 'n Slash",
                icon: "💨",
                description: "Dash avec bonus AS et range.",
                cooldown: "13/12/11/10/9s",
                cost: "35 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "+20/35/50/65/80% AS 4s. +50 range 4s. Refund sur champion."
            },
            R: {
                name: "Needlework",
                icon: "🧵",
                description: "Tire aiguilles (3 casts).",
                cooldown: "100/90/80s",
                cost: "100 Mana",
                damage: "35/65/95 (+10% AP) par aiguille (1+3+5 = 9)",
                damageType: "magic",
                details: "Cast 1: 1 aiguille. Cast 2: 3. Cast 3: 5. Slow + applique passif."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_G;
}
