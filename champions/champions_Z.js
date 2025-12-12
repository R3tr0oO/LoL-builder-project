// ========================================
// CHAMPIONS - LETTRE Z
// ========================================

const CHAMPIONS_Z = [
    {
        id: 163,
        name: "Zac",
        title: "L'Arme Secrète",
        role: "tank",
        icon: "💚",
        baseStats: {
            hp: 685, hpGrowth: 95, hpRegen: 8, hpRegenGrowth: 0.5,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 60, adGrowth: 3.375, as: 0.736, asGrowth: 1.6,
            armor: 33, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "HP",
        passive: {
            name: "Cell Division",
            icon: "💧",
            description: "Sorts créent blobs. À la mort, split en 4 bloblets.",
            cooldown: "300s resurrection",
            details: "Blobs: heal 4-7% max HP. Mort: 4 bloblets reforment si survivent."
        },
        spells: {
            Q: {
                name: "Stretching Strikes",
                icon: "👊",
                description: "Frappe. 2ème Q sur autre cible = les slam ensemble.",
                cooldown: "13/11.5/10/8.5/7s",
                cost: "8% current HP",
                damage: "40/60/80/100/120 (+30% AP)(+2.5% max HP)",
                damageType: "magic",
                details: "2ème hit: slam les 2 cibles ensemble. Stun 0.5s."
            },
            W: {
                name: "Unstable Matter",
                icon: "💥",
                description: "Explosion autour qui dégâts % max HP.",
                cooldown: "5s",
                cost: "4% current HP",
                damage: "35/50/65/80/95 (+4/5/6/7/8% + 2% par 100 AP max HP target)",
                damageType: "magic",
                details: "Ramasser blob = -1s CD."
            },
            E: {
                name: "Elastic Slingshot",
                icon: "🎯",
                description: "Charge saut. Plus long = plus de range + knock up.",
                cooldown: "22/19/16/13/10s",
                cost: "4% current HP",
                damage: "60/110/160/210/260 (+90% AP)",
                damageType: "magic",
                details: "Range: 1200-1800. Knock up: 0.5-1s."
            },
            R: {
                name: "Let's Bounce!",
                icon: "🏀",
                description: "Rebondit 4 fois. Knock up + slow.",
                cooldown: "130/115/100s",
                cost: "Aucun",
                damage: "140/210/280 (+40% AP) premier bounce + 70/105/140 (+20% AP) suivants",
                damageType: "magic",
                details: "Knock up: 1s premier. Slow: 20% suivants. Peut grab ennemis."
            }
        }
    },
    {
        id: 164,
        name: "Zed",
        title: "Le Maître des Ombres",
        role: "assassin",
        icon: "🥷",
        baseStats: {
            hp: 654, hpGrowth: 99, hpRegen: 7, hpRegenGrowth: 0.65,
            mana: 200, manaGrowth: 0, manaRegen: 50, manaRegenGrowth: 0,
            ad: 63, adGrowth: 3.4, as: 0.651, asGrowth: 3.3,
            armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Énergie",
        passive: {
            name: "Contempt for the Weak",
            icon: "💀",
            description: "Attaque contre ennemis <50% HP = bonus % max HP.",
            cooldown: "10s par cible",
            details: "+6-10% max HP magic damage."
        },
        spells: {
            Q: {
                name: "Razor Shuriken",
                icon: "⭐",
                description: "Lance shuriken. Ombres aussi lancent.",
                cooldown: "6s",
                cost: "75/70/65/60/55 Énergie",
                damage: "80/115/150/185/220 (+100% bonus AD)",
                damageType: "physical",
                details: "Shadow: mimics. -40% après premier ennemi."
            },
            W: {
                name: "Living Shadow",
                icon: "👤",
                description: "Envoie ombre. Peut swap. Ombre mimics sorts.",
                cooldown: "20/18.5/17/15.5/14s",
                cost: "40/35/30/25/20 Énergie",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 5s. Swap: recast. Restore 30-50 énergie si hit même cible."
            },
            E: {
                name: "Shadow Slash",
                icon: "🌀",
                description: "Spin slash. Ombres aussi. Slow si ombre touche.",
                cooldown: "5/4.5/4/3.5/3s",
                cost: "50 Énergie",
                damage: "70/90/110/130/150 (+80% bonus AD)",
                damageType: "physical",
                details: "Ombre: slow 20-40% 1.5s. Double hit = restore 30 énergie."
            },
            R: {
                name: "Death Mark",
                icon: "💀",
                description: "Devient untargetable + dash. Marque = % dégâts infligés.",
                cooldown: "120/90/60s",
                cost: "Aucun",
                damage: "100% AD + 25/40/55% dégâts infligés pendant marque",
                damageType: "physical",
                details: "Marque: 3s. Crée ombre à position initiale. Pop après 3s."
            }
        }
    },
    {
        id: 165,
        name: "Zeri",
        title: "L'Étincelle de Zaun",
        role: "marksman",
        icon: "⚡",
        baseStats: {
            hp: 600, hpGrowth: 110, hpRegen: 3.25, hpRegenGrowth: 0.55,
            mana: 250, manaGrowth: 45, manaRegen: 6.5, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 2, as: 0.658, asGrowth: 1.5,
            armor: 24, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Living Battery",
            icon: "🔋",
            description: "Gagne bouclier en absorbant boucliers ennemis.",
            cooldown: "Passif",
            details: "Dégâts aux boucliers: gagne 60% en bouclier. MS: +1% par 5% charge."
        },
        spells: {
            Q: {
                name: "Burst Fire",
                icon: "🔫",
                description: "Tir = attaque de base (Q). Charged = execute.",
                cooldown: "Passif rechargeable",
                cost: "Aucun (passif)",
                damage: "8/11/14/17/20 (+100-110% AD) par balle",
                damageType: "physical",
                details: "7 balles. Peut crit. Slow target = +250 range."
            },
            W: {
                name: "Ultrashock Laser",
                icon: "🔦",
                description: "Tire laser qui slow. Traverse murs = zone.",
                cooldown: "10s",
                cost: "50/55/60/65/70 Mana",
                damage: "20/55/90/125/160 (+100% AD)(+60% AP)",
                damageType: "magic",
                details: "Slow: 30-50%. Mur: devient zone AoE qui crit."
            },
            E: {
                name: "Spark Surge",
                icon: "💨",
                description: "Dash. Traverse murs si électrifié.",
                cooldown: "22/20.5/19/17.5/16s",
                cost: "80/85/90/95/100 Mana",
                damage: "Aucun direct",
                damageType: "utility",
                details: "3 prochaines Q: +25% damage. Piercing. -1s CD par champion hit."
            },
            R: {
                name: "Lightning Crash",
                icon: "⚡",
                description: "AoE + overcharged. Gagne stacks de MS.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "175/275/375 (+85% bonus AD)(+85% AP)",
                damageType: "magic",
                details: "Overcharge: 5s + prolongé par hits. +10% MS + chain lightning Q."
            }
        }
    },
    {
        id: 166,
        name: "Ziggs",
        title: "L'Expert en Hexplosifs",
        role: "mage",
        icon: "💣",
        baseStats: {
            hp: 606, hpGrowth: 106, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 480, manaGrowth: 23.5, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3.1, as: 0.656, asGrowth: 2,
            armor: 22, armorGrowth: 4.45, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Short Fuse",
            icon: "💥",
            description: "Périodiquement, attaque bonus dégâts.",
            cooldown: "12s (réduit par sorts)",
            details: "Bonus: 20-160 (+50% AP). ×2 vs structures."
        },
        spells: {
            Q: {
                name: "Bouncing Bomb",
                icon: "💣",
                description: "Bombe qui rebondit.",
                cooldown: "6/5.5/5/4.5/4s",
                cost: "50/55/60/65/70 Mana",
                damage: "85/135/185/235/285 (+65% AP)",
                damageType: "magic",
                details: "Rebondit jusqu'à 2 fois ou jusqu'à champion."
            },
            W: {
                name: "Satchel Charge",
                icon: "📦",
                description: "Place bombe. Explose = knock back + dégâts.",
                cooldown: "20/18/16/14/12s",
                cost: "65 Mana",
                damage: "70/105/140/175/210 (+50% AP)",
                damageType: "magic",
                details: "Peut détruire turrets <25% HP. Self: saut."
            },
            E: {
                name: "Hexplosive Minefield",
                icon: "💥",
                description: "Zone de mines qui slow + dégâts.",
                cooldown: "16s",
                cost: "70/80/90/100/110 Mana",
                damage: "40/75/110/145/180 (+30% AP) par mine",
                damageType: "magic",
                details: "Slow: 30-50%. Durée: 10s. -40% dégâts après première mine."
            },
            R: {
                name: "Mega Inferno Bomb",
                icon: "☢️",
                description: "Lance méga bombe à longue portée.",
                cooldown: "120/105/90s",
                cost: "100 Mana",
                damage: "200/300/400 (+73% AP) → centre: +50%",
                damageType: "magic",
                details: "Global range. Zone large. Centre: dégâts max."
            }
        }
    },
    {
        id: 167,
        name: "Zilean",
        title: "Le Gardien du Temps",
        role: "support",
        icon: "⏰",
        baseStats: {
            hp: 574, hpGrowth: 96, hpRegen: 5.5, hpRegenGrowth: 0.5,
            mana: 452, manaGrowth: 30, manaRegen: 11.35, manaRegenGrowth: 0.8,
            ad: 52, adGrowth: 3, as: 0.625, asGrowth: 2.13,
            armor: 24, armorGrowth: 5, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Time in a Bottle",
            icon: "🍾",
            description: "Stocke XP. Peut donner niveau à allié.",
            cooldown: "120s stockage",
            details: "Click allié: donne XP pour level up si assez."
        },
        spells: {
            Q: {
                name: "Time Bomb",
                icon: "💣",
                description: "Bombe sur cible. Explose après 3s. 2 bombes = stun.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "60/65/70/75/80 Mana",
                damage: "75/115/165/230/300 (+90% AP)",
                damageType: "magic",
                details: "2 bombes même cible: stun 1.1-1.5s + détone immédiatement."
            },
            W: {
                name: "Rewind",
                icon: "⏪",
                description: "Réduit CD de Q et E.",
                cooldown: "14/12/10/8/6s",
                cost: "35 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Reset: -10s sur Q et E."
            },
            E: {
                name: "Time Warp",
                icon: "⏩",
                description: "Accélère allié ou slow ennemi.",
                cooldown: "15s",
                cost: "50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Allié: +40-60% MS. Ennemi: -40-60% MS. Durée: 2.5s."
            },
            R: {
                name: "Chronoshift",
                icon: "⏰",
                description: "Si allié meurt dans 5s, ressuscite.",
                cooldown: "120/90/60s",
                cost: "125/150/175 Mana",
                damage: "Resurrection: 600/850/1100 (+200% AP) HP",
                damageType: "utility",
                details: "Durée: 5s. Ressuscite à même position."
            }
        }
    },
    {
        id: 168,
        name: "Zoe",
        title: "L'Aspect du Crépuscule",
        role: "mage",
        icon: "✨",
        baseStats: {
            hp: 630, hpGrowth: 106, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 425, manaGrowth: 25, manaRegen: 8, manaRegenGrowth: 0.65,
            ad: 58, adGrowth: 3.3, as: 0.625, asGrowth: 2.5,
            armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 550
        },
        resource: "Mana",
        passive: {
            name: "More Sparkles!",
            icon: "✨",
            description: "Après un sort, prochaine attaque = bonus magic.",
            cooldown: "Passif",
            details: "Bonus: 16-130 (+20% AP)."
        },
        spells: {
            Q: {
                name: "Paddle Star",
                icon: "⭐",
                description: "Lance étoile. Recast = redirect. Distance = dégâts.",
                cooldown: "8.5/8/7.5/7/6.5s",
                cost: "40/45/50/55/60 Mana",
                damage: "50/80/110/140/170 (+60% AP) → max 150/240/330/420/510 (+180% AP)",
                damageType: "magic",
                details: "Dégâts: scale avec distance totale parcourue."
            },
            W: {
                name: "Spell Thief",
                icon: "🎁",
                description: "Ramasse sorts/actifs. Utilise pour dégâts + MS.",
                cooldown: "0.25s",
                cost: "Aucun",
                damage: "75/105/145/195/255 (+40% AP) par orbe",
                damageType: "magic",
                details: "Ramasse summoner spells et actifs. 3 orbes si cast."
            },
            E: {
                name: "Sleepy Trouble Bubble",
                icon: "💤",
                description: "Bulle qui drowsy puis sleep. Bonus dégâts au wake.",
                cooldown: "16/15/14/13/12s",
                cost: "80 Mana",
                damage: "60/100/140/180/220 (+40% AP)",
                damageType: "magic",
                details: "Drowsy: 1.4s slow. Sleep: 2s. Wake damage: true dmg bonus."
            },
            R: {
                name: "Portal Jump",
                icon: "🌀",
                description: "Blink vers location. Retourne après 1s.",
                cooldown: "11/8/5s",
                cost: "50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Portée: 575. Revient forcément après 1s. Pour repositionner Q."
            }
        }
    },
    {
        id: 169,
        name: "Zyra",
        title: "La Furie des Ronces",
        role: "mage",
        icon: "🌹",
        baseStats: {
            hp: 574, hpGrowth: 93, hpRegen: 5.5, hpRegenGrowth: 0.5,
            mana: 418, manaGrowth: 25, manaRegen: 8.5, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 3.2, as: 0.625, asGrowth: 2.11,
            armor: 29, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 575
        },
        resource: "Mana",
        passive: {
            name: "Garden of Thorns",
            icon: "🌱",
            description: "Spawn graines périodiquement. Sorts activent plantes.",
            cooldown: "13-8.5s",
            details: "Graines: jusqu'à 8. Q/E les activent en plantes."
        },
        spells: {
            Q: {
                name: "Deadly Spines",
                icon: "🌿",
                description: "Zone de ronces. Active graines = Thorn Spitters.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "55 Mana",
                damage: "60/95/130/165/200 (+60% AP)",
                damageType: "magic",
                details: "Plante: ranged, tire ennemis. Plant dmg: 20-100 (+18% AP)."
            },
            W: {
                name: "Rampant Growth",
                icon: "🌱",
                description: "Place graine. Passif: CDR sur plantes.",
                cooldown: "Recharge: 18/16/14/12/10s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Max 2 charges. Passif: +10-20% CDR sur plantes."
            },
            E: {
                name: "Grasping Roots",
                icon: "🌿",
                description: "Ligne qui root. Active graines = Vine Lashers.",
                cooldown: "12s",
                cost: "70/75/80/85/90 Mana",
                damage: "60/95/130/165/200 (+50% AP)",
                damageType: "magic",
                details: "Root: 1-1.75s. Plante: melee, slow."
            },
            R: {
                name: "Stranglethorns",
                icon: "🌹",
                description: "Zone qui knock up + enrage plantes.",
                cooldown: "110/100/90s",
                cost: "100 Mana",
                damage: "180/265/350 (+70% AP)",
                damageType: "magic",
                details: "Knock up: 1s après 2s. Plantes: +50% HP, enraged."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_Z;
}
