// ========================================
// CHAMPIONS - LETTRE S
// ========================================

const CHAMPIONS_S = [
    {
        id: 113,
        name: "Samira",
        title: "La Rose du Désert",
        role: "marksman",
        icon: "🌹",
        baseStats: {
            hp: 600, hpGrowth: 94, hpRegen: 3.25, hpRegenGrowth: 0.55,
            mana: 349, manaGrowth: 38, manaRegen: 8.2, manaRegenGrowth: 0.7,
            ad: 57, adGrowth: 3.3, as: 0.658, asGrowth: 3.3,
            armor: 26, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Daredevil Impulse",
            icon: "💫",
            description: "Combo unique = Style grade (E→S). S = peut R. Melee range bonus.",
            cooldown: "Passif",
            details: "Melee: dans 200 range. Knock up = juggle + bonus magic dmg."
        },
        spells: {
            Q: {
                name: "Flair",
                icon: "🔫",
                description: "Tir ou slash selon distance.",
                cooldown: "6/5/4/3/2s",
                cost: "30 Mana",
                damage: "0/5/10/15/20 (+85-115% AD)",
                damageType: "physical",
                details: "Peut crit. Melee: +50% AS après."
            },
            W: {
                name: "Blade Whirl",
                icon: "🌀",
                description: "Spin épées: détruit projectiles + dégâts.",
                cooldown: "30/28/26/24/22s",
                cost: "60 Mana",
                damage: "20/35/50/65/80 (+80% bonus AD) × 2",
                damageType: "physical",
                details: "Durée: 0.75s. Destroy tous projectiles."
            },
            E: {
                name: "Wild Rush",
                icon: "💨",
                description: "Dash à travers ennemi + AS. Reset sur takedown.",
                cooldown: "20/18/16/14/12s",
                cost: "40 Mana",
                damage: "50/60/70/80/90 (+20% bonus AD)",
                damageType: "magic",
                details: "+30% AS 3s. Reset complet sur kill."
            },
            R: {
                name: "Inferno Trigger",
                icon: "🔥",
                description: "Tire en cercle. Requiert Style S.",
                cooldown: "3s",
                cost: "100/50/0 Mana",
                damage: "10/20/30 (+50% AD) × 10 par seconde",
                damageType: "physical",
                details: "2s. Lifesteal full. Peut crit. Peut bouger."
            }
        }
    },
    {
        id: 114,
        name: "Sejuani",
        title: "La Fureur du Nord",
        role: "tank",
        icon: "🐗",
        baseStats: {
            hp: 650, hpGrowth: 114, hpRegen: 8.5, hpRegenGrowth: 0.85,
            mana: 400, manaGrowth: 40, manaRegen: 7, manaRegenGrowth: 0.7,
            ad: 66, adGrowth: 4, as: 0.688, asGrowth: 3,
            armor: 34, armorGrowth: 5, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Fury of the North",
            icon: "❄️",
            description: "Gagne résistances après immobilité. Slow immunity.",
            cooldown: "12s après dégâts",
            details: "+20 armor, +20 MR, slow immune après pas de dégâts 12s."
        },
        spells: {
            Q: {
                name: "Arctic Assault",
                icon: "💨",
                description: "Charge qui knock up premier champion.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "70/75/80/85/90 Mana",
                damage: "90/140/190/240/290 (+60% AP)",
                damageType: "magic",
                details: "Knock up: 0.5s. Stoppe au premier champion."
            },
            W: {
                name: "Winter's Wrath",
                icon: "❄️",
                description: "2 swings. 2ème = slow + dégâts.",
                cooldown: "9/8/7/6/5s",
                cost: "65 Mana",
                damage: "20/25/30/35/40 (+20% AP) + 30/70/110/150/190 (+60% AP)(+6% max HP)",
                damageType: "physical",
                details: "1er: dégâts. 2ème: slow 30% + knockback."
            },
            E: {
                name: "Permafrost",
                icon: "🥶",
                description: "Passif: attaques stack Frost. Actif: stun Frosted.",
                cooldown: "1.5s",
                cost: "20 Mana",
                damage: "40/80/120/160/200 (+60% AP)",
                damageType: "magic",
                details: "4 stacks = Frosted. Stun: 1-1.5s. Melee alliés appliquent."
            },
            R: {
                name: "Glacial Prison",
                icon: "💎",
                description: "Lance bola qui stun + tempête.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "125/150/175 (+40% AP) + 200/300/400 (+80% AP) tempête",
                damageType: "magic",
                details: "Stun: 1-1.5s selon distance. Tempête: slow 30% → 80%."
            }
        }
    },
    {
        id: 115,
        name: "Senna",
        title: "La Rédemptrice",
        role: "support",
        icon: "🔫",
        baseStats: {
            hp: 530, hpGrowth: 85, hpRegen: 3.5, hpRegenGrowth: 0.55,
            mana: 350, manaGrowth: 45, manaRegen: 11, manaRegenGrowth: 0.4,
            ad: 50, adGrowth: 0, as: 0.625, asGrowth: 4,
            armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 600
        },
        resource: "Mana",
        passive: {
            name: "Absolution",
            icon: "👻",
            description: "Collecte Mist. Mist = AD + range + crit.",
            cooldown: "Passif",
            details: "Par 20 Mist: +25 range. Par Mist: +0.75 AD. Crit = 35% AD bonus."
        },
        spells: {
            Q: {
                name: "Piercing Darkness",
                icon: "✨",
                description: "Laser qui heal alliés et dégâts ennemis.",
                cooldown: "15/14/13/12/11s",
                cost: "70/80/90/100/110 Mana",
                damage: "40/70/100/130/160 (+40% bonus AD)",
                damageType: "physical",
                details: "Heal: 40/60/80/100/120 (+25% bonus AD)(+40% AP). -1s CD par attaque."
            },
            W: {
                name: "Last Embrace",
                icon: "🖐️",
                description: "Projectile qui root après délai. Root spread si tue.",
                cooldown: "11/10/9/8/7s",
                cost: "55/60/65/70/75 Mana",
                damage: "70/115/160/205/250 (+70% bonus AD)",
                damageType: "physical",
                details: "Root: 1.25-2.25s après 1s. Spread si tue."
            },
            E: {
                name: "Curse of the Black Mist",
                icon: "🌫️",
                description: "Camouflage zone pour elle et alliés.",
                cooldown: "26/24.5/23/21.5/20s",
                cost: "70 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 6-7s. Alliés = Wraiths (camouflage + MS)."
            },
            R: {
                name: "Dawning Shadow",
                icon: "🌅",
                description: "Laser global. Dégâts centre, bouclier alliés.",
                cooldown: "160/140/120s",
                cost: "100 Mana",
                damage: "250/400/550 (+115% bonus AD)(+70% AP)",
                damageType: "physical",
                details: "Global. Centre: full dégâts. Côtés: bouclier 120/160/200 (+40% AP)."
            }
        }
    },
    {
        id: 116,
        name: "Seraphine",
        title: "La Chanteuse des Rêves",
        role: "support",
        icon: "🎤",
        baseStats: {
            hp: 570, hpGrowth: 90, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 440, manaGrowth: 40, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3, as: 0.669, asGrowth: 1,
            armor: 19, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Stage Presence",
            icon: "🎵",
            description: "Chaque 3ème sort cast 2×. Notes = bonus attaque.",
            cooldown: "Passif",
            details: "Echo: 3ème sort double. Notes: attaque bonus magic (4 max)."
        },
        spells: {
            Q: {
                name: "High Note",
                icon: "🎶",
                description: "Projectile qui dégâts plus si cible low HP.",
                cooldown: "10/8.75/7.5/6.25/5s",
                cost: "65/70/75/80/85 Mana",
                damage: "55/70/85/100/115 (+45/50/55/60/65% AP)",
                damageType: "magic",
                details: "+0-50% selon PV manquants cible."
            },
            W: {
                name: "Surround Sound",
                icon: "🛡️",
                description: "Bouclier + MS. Si déjà shield = heal.",
                cooldown: "22/20/18/16/14s",
                cost: "50/70/90/110/130 Mana",
                damage: "Bouclier: 50/70/90/110/130 (+25% AP)",
                damageType: "utility",
                details: "+20% MS 2.5s. Heal: 5/5.5/6/6.5/7% PV manquants si shielded."
            },
            E: {
                name: "Beat Drop",
                icon: "💫",
                description: "Zone slow. Si slowed = root. Si rooted = stun.",
                cooldown: "11/10.5/10/9.5/9s",
                cost: "60/70/80/90/100 Mana",
                damage: "60/80/100/120/140 (+35% AP)",
                damageType: "magic",
                details: "Slow: 99% 1s. Rooted: root 1s. Immobile: stun 1s."
            },
            R: {
                name: "Encore",
                icon: "✨",
                description: "Ligne qui charm. Extend si touche champion.",
                cooldown: "160/130/100s",
                cost: "100 Mana",
                damage: "150/200/250 (+60% AP)",
                damageType: "magic",
                details: "Charm: 1.25-1.75s. Range s'étend par champion allié/ennemi touché."
            }
        }
    },
    {
        id: 117,
        name: "Sett",
        title: "Le Boss",
        role: "fighter",
        icon: "👊",
        baseStats: {
            hp: 670, hpGrowth: 114, hpRegen: 7, hpRegenGrowth: 0.5,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 60, adGrowth: 4, as: 0.625, asGrowth: 1.75,
            armor: 37, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Grit",
        passive: {
            name: "Pit Grit",
            icon: "👊",
            description: "Attaques alternent gauche/droite. Droite = bonus + reset.",
            cooldown: "Passif",
            details: "Droite: +50% AS, +5-90 dégâts. HP regen amélioré selon PV manquants."
        },
        spells: {
            Q: {
                name: "Knuckle Down",
                icon: "👊",
                description: "Gagne MS + 2 attaques bonus.",
                cooldown: "9/8/7/6/5s",
                cost: "Aucun",
                damage: "10/20/30/40/50 (+1-3% PV max cible)(+10% AD bonus)",
                damageType: "physical",
                details: "+30% MS vers champions. Reset auto timer."
            },
            W: {
                name: "Haymaker",
                icon: "💥",
                description: "Charge Grit avec dégâts subis. Relâche = AOE + bouclier.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "Aucun",
                damage: "80/100/120/140/160 (+25% Grit bonus AD) → centre true dmg",
                damageType: "physical",
                details: "Stocke 100% dégâts récents en Grit. Bouclier: 100% Grit."
            },
            E: {
                name: "Facebreaker",
                icon: "🤜",
                description: "Pull ennemis des deux côtés. Si collision = stun.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "Aucun",
                damage: "50/70/90/110/130 (+60% AD)",
                damageType: "physical",
                details: "Slow: 50% si un côté. Stun: 1s si deux côtés."
            },
            R: {
                name: "The Show Stopper",
                icon: "💪",
                description: "Grab ennemi + suplex. Zone dégâts selon bonus HP cible.",
                cooldown: "120/100/80s",
                cost: "Aucun",
                damage: "200/300/400 (+120% bonus AD)(+40/50/60% HP bonus cible)",
                damageType: "physical",
                details: "Supprime la cible. Zone: slow 99%."
            }
        }
    },
    {
        id: 118,
        name: "Shaco",
        title: "Le Bouffon Démoniaque",
        role: "assassin",
        icon: "🃏",
        baseStats: {
            hp: 630, hpGrowth: 99, hpRegen: 8.5, hpRegenGrowth: 0.55,
            mana: 297, manaGrowth: 40, manaRegen: 7.15, manaRegenGrowth: 0.45,
            ad: 63, adGrowth: 3, as: 0.694, asGrowth: 3,
            armor: 30, armorGrowth: 4, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Backstab",
            icon: "🔪",
            description: "Attaques de dos = dégâts bonus + crit garanti.",
            cooldown: "Passif",
            details: "+20-35% dégâts de dos. Crit de dos: +40% crit dmg."
        },
        spells: {
            Q: {
                name: "Deceive",
                icon: "💨",
                description: "Blink + invisibilité. Prochaine attaque = crit.",
                cooldown: "12/11.5/11/10.5/10s",
                cost: "40 Mana",
                damage: "+25/35/45/55/65 (+50% bonus AD) si crit",
                damageType: "physical",
                details: "Invisible: 2.5-3.5s. Crit garanti après sortie."
            },
            W: {
                name: "Jack In The Box",
                icon: "📦",
                description: "Place boîte invisible qui fear + attaque.",
                cooldown: "15s",
                cost: "50/55/60/65/70 Mana",
                damage: "15/20/25/30/35 (+12% AP) par tir",
                damageType: "magic",
                details: "Fear: 0.5-1.5s. Durée box: 40s. 5 tirs."
            },
            E: {
                name: "Two-Shiv Poison",
                icon: "🗡️",
                description: "Passif: attaques slow. Actif: lance shiv slow + execute.",
                cooldown: "8s",
                cost: "65 Mana",
                damage: "70/95/120/145/170 (+80% bonus AD)(+60% AP)",
                damageType: "magic",
                details: "Slow: 20-40%. Execute: +50% si cible <30% HP."
            },
            R: {
                name: "Hallucinate",
                icon: "👯",
                description: "Crée clone contrôlable. Explose à la mort.",
                cooldown: "100/90/80s",
                cost: "100 Mana",
                damage: "Explosion: 150/225/300 (+70% AP)",
                damageType: "magic",
                details: "Clone: 18s. 60% dégâts. Mini boxes à la mort."
            }
        }
    },
    {
        id: 119,
        name: "Shen",
        title: "L'Oeil du Crépuscule",
        role: "tank",
        icon: "⚔️",
        baseStats: {
            hp: 610, hpGrowth: 99, hpRegen: 8.5, hpRegenGrowth: 0.75,
            mana: 400, manaGrowth: 0, manaRegen: 50, manaRegenGrowth: 0,
            ad: 60, adGrowth: 3, as: 0.751, asGrowth: 2,
            armor: 34, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Énergie",
        passive: {
            name: "Ki Barrier",
            icon: "🛡️",
            description: "Sorts donnent bouclier. CD réduit si affecte champion.",
            cooldown: "10s",
            details: "Bouclier: 70-121 (+14% HP bonus). -4-7.5s si affecte champion."
        },
        spells: {
            Q: {
                name: "Spirit Blade",
                icon: "🗡️",
                description: "Rappelle lame. Traverse = attaques améliorées.",
                cooldown: "8/7.25/6.5/5.75/5s",
                cost: "Aucun",
                damage: "5/5.5/6/6.5/7% (+1.5-2.5% par 100 AP) PV max",
                damageType: "magic",
                details: "Lame traverse: 3 attaques +15-20% PV max. Slow si lame touche."
            },
            W: {
                name: "Spirit's Refuge",
                icon: "🛡️",
                description: "Zone qui bloque attaques autour de lame.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "40 Énergie",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 1.75s. Bloque toutes auto-attaques dans zone."
            },
            E: {
                name: "Shadow Dash",
                icon: "💨",
                description: "Dash qui taunt ennemis traversés.",
                cooldown: "18/16/14/12/10s",
                cost: "150 Énergie",
                damage: "60/85/110/135/160 (+15% HP bonus)",
                damageType: "physical",
                details: "Taunt: 1.5s. Restore 30-40 énergie par champion."
            },
            R: {
                name: "Stand United",
                icon: "🌐",
                description: "Canal: bouclier allié + TP vers lui.",
                cooldown: "180/150/120s",
                cost: "Aucun",
                damage: "Bouclier: 175/350/525 (+135% AP)",
                damageType: "utility",
                details: "Canal: 3s. Global. Peut être interrompu."
            }
        }
    },
    {
        id: 120,
        name: "Shyvana",
        title: "La Demi-Dragon",
        role: "fighter",
        icon: "🐉",
        baseStats: {
            hp: 650, hpGrowth: 110, hpRegen: 8.5, hpRegenGrowth: 0.8,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 66, adGrowth: 3.4, as: 0.658, asGrowth: 2.5,
            armor: 38, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Fury",
        passive: {
            name: "Fury of the Dragonborn",
            icon: "🐉",
            description: "Gagne stats par dragon team tue. Dégâts aux dragons.",
            cooldown: "Passif",
            details: "+5 armor/MR par dragon. +20% dégâts aux dragons."
        },
        spells: {
            Q: {
                name: "Twin Bite",
                icon: "🦷",
                description: "Prochaine attaque frappe 2×. Reset auto.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "Aucun",
                damage: "20/35/50/65/80 (+40% AD)(+25% AP)",
                damageType: "physical",
                details: "2ème hit: 40/55/70/85/100% AD. -0.5s CD par attaque."
            },
            W: {
                name: "Burnout",
                icon: "🔥",
                description: "Aura de feu + MS. Attaques prolongent.",
                cooldown: "12s",
                cost: "Aucun",
                damage: "25/30/35/40/45 (+20% bonus AD) par seconde",
                damageType: "magic",
                details: "+30-50% MS décroissant. 3s + prolongé par attaques."
            },
            E: {
                name: "Flame Breath",
                icon: "🔥",
                description: "Projectile qui marque. Attaque marqué = % HP.",
                cooldown: "12/11/10/9/8s",
                cost: "Aucun",
                damage: "60/100/140/180/220 (+30% AD)(+70% AP)",
                damageType: "magic",
                details: "Marque 5s: attaques infligent +3.5% PV max."
            },
            R: {
                name: "Dragon's Descent",
                icon: "🐉",
                description: "Devient dragon. Dash + zone. Améliore sorts.",
                cooldown: "Fury dépendant",
                cost: "100 Fury",
                damage: "150/250/350 (+100% AP)",
                damageType: "magic",
                details: "Génère fury en combat. Dragon: +150 range, sorts améliorés."
            }
        }
    },
    {
        id: 121,
        name: "Singed",
        title: "Le Chimiste Dément",
        role: "tank",
        icon: "🧪",
        baseStats: {
            hp: 650, hpGrowth: 99, hpRegen: 9.5, hpRegenGrowth: 0.55,
            mana: 330, manaGrowth: 45, manaRegen: 7.5, manaRegenGrowth: 0.55,
            ad: 63, adGrowth: 3.38, as: 0.613, asGrowth: 1.9,
            armor: 34, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Noxious Slipstream",
            icon: "💨",
            description: "Passer près de champions donne MS.",
            cooldown: "10s par unité",
            details: "+25% MS 2s quand passe près champion."
        },
        spells: {
            Q: {
                name: "Poison Trail",
                icon: "☠️",
                description: "Toggle: laisse poison derrière.",
                cooldown: "Toggle",
                cost: "13 Mana par seconde",
                damage: "22/34/46/58/70 (+30% AP) par seconde",
                damageType: "magic",
                details: "Poison: 2s. Trail suit mouvements."
            },
            W: {
                name: "Mega Adhesive",
                icon: "🟡",
                description: "Zone de colle: slow + ground.",
                cooldown: "17/16/15/14/13s",
                cost: "60/70/80/90/100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Slow: 50-70%. Ground. Durée: 3s."
            },
            E: {
                name: "Fling",
                icon: "🤾",
                description: "Lance ennemi derrière + dégâts.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "60/70/80/90/100 Mana",
                damage: "50/60/70/80/90 (+6% PV max cible)(+60% AP)",
                damageType: "magic",
                details: "Si landing dans W: root 1-2s."
            },
            R: {
                name: "Insanity Potion",
                icon: "🧪",
                description: "Boit potion: stats massifs.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+30/60/90 AP, armor, MR, MS, HP regen, MP regen. 25s."
            }
        }
    },
    {
        id: 122,
        name: "Sion",
        title: "Le Colosse Mort-Vivant",
        role: "tank",
        icon: "💀",
        baseStats: {
            hp: 655, hpGrowth: 87, hpRegen: 7.5, hpRegenGrowth: 0.8,
            mana: 330, manaGrowth: 42, manaRegen: 8, manaRegenGrowth: 0.6,
            ad: 68, adGrowth: 4, as: 0.679, asGrowth: 1.3,
            armor: 32, armorGrowth: 4.45, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Glory in Death",
            icon: "💀",
            description: "À la mort, revient zombie qui meurt graduellement.",
            cooldown: "Passif",
            details: "Zombie: attaques = 10% PV max cible. -2.3-19% PV/s. Bonus MS."
        },
        spells: {
            Q: {
                name: "Decimating Smash",
                icon: "🔨",
                description: "Charge swing. Plus long = plus de dégâts + knock up.",
                cooldown: "10/9/8/7/6s",
                cost: "45 Mana",
                damage: "40/60/80/100/120 → 80/120/160/200/240 (+45-90% AD)",
                damageType: "physical",
                details: "Charge: 2s. Min: slow. Max: knock up 1.25s."
            },
            W: {
                name: "Soul Furnace",
                icon: "🛡️",
                description: "Passif: permanent HP par kill. Actif: bouclier + explosion.",
                cooldown: "13/12/11/10/9s",
                cost: "65/70/75/80/85 Mana",
                damage: "40/65/90/115/140 (+40% AP)(+8-13% HP bonus)",
                damageType: "magic",
                details: "Passif: +4 HP par kill (15 grands). Bouclier: 60-180 (+10% HP max)."
            },
            E: {
                name: "Roar of the Slayer",
                icon: "😱",
                description: "Cri qui slow + armor réduit. Pousse minions.",
                cooldown: "12/11/10/9/8s",
                cost: "35/40/45/50/55 Mana",
                damage: "65/100/135/170/205 (+55% AP)",
                damageType: "magic",
                details: "-20% armor 4s. Slow: 40-60%. Knockback minions."
            },
            R: {
                name: "Unstoppable Onslaught",
                icon: "💨",
                description: "Charge unstoppable. Collision = dégâts + stun.",
                cooldown: "140/100/60s",
                cost: "100 Mana",
                damage: "150/300/450 → 400/800/1200 (+40-80% bonus AD)",
                damageType: "physical",
                details: "Charge: max 8s. Peut tourner. Stun: 0.5-1.75s selon distance."
            }
        }
    },
    {
        id: 123,
        name: "Sivir",
        title: "La Maîtresse de Bataille",
        role: "marksman",
        icon: "⭕",
        baseStats: {
            hp: 600, hpGrowth: 104, hpRegen: 3.25, hpRegenGrowth: 0.55,
            mana: 340, manaGrowth: 40, manaRegen: 8, manaRegenGrowth: 0.9,
            ad: 58, adGrowth: 2.8, as: 0.625, asGrowth: 1.6,
            armor: 30, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Fleet of Foot",
            icon: "💨",
            description: "Attaques et sorts sur champions donnent MS.",
            cooldown: "Passif",
            details: "+55-70 MS 1.5s."
        },
        spells: {
            Q: {
                name: "Boomerang Blade",
                icon: "⭕",
                description: "Lance boomerang qui revient.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "55/60/65/70/75 Mana",
                damage: "25/40/55/70/85 (+70/85/100/115/130% AD)(+50% AP) par passage",
                damageType: "physical",
                details: "Peut crit. -15% dégâts par unité (min 40%)."
            },
            W: {
                name: "Ricochet",
                icon: "🔄",
                description: "Prochaines attaques rebondissent.",
                cooldown: "12s",
                cost: "60 Mana",
                damage: "30/35/40/45/50% AD par rebond",
                damageType: "physical",
                details: "3 attaques. Rebondit sur 7 cibles. Peut crit."
            },
            E: {
                name: "Spell Shield",
                icon: "🛡️",
                description: "Bouclier anti-sort. Restore mana si bloque.",
                cooldown: "22/20/18/16/14s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 1.5s. Restore: 60/65/70/75/80 + 40% mana max."
            },
            R: {
                name: "On The Hunt",
                icon: "📯",
                description: "Buff aura MS pour elle et alliés.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+20-40% MS initial. Décroît à 15-25%. Durée: 8s."
            }
        }
    },
    {
        id: 124,
        name: "Skarner",
        title: "Le Gardien de Cristal",
        role: "tank",
        icon: "🦂",
        baseStats: {
            hp: 650, hpGrowth: 109, hpRegen: 9, hpRegenGrowth: 0.85,
            mana: 320, manaGrowth: 45, manaRegen: 7.2, manaRegenGrowth: 0.45,
            ad: 65, adGrowth: 4.5, as: 0.625, asGrowth: 2,
            armor: 38, armorGrowth: 5, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Threads of Vibration",
            icon: "🔮",
            description: "Attaques + Q stack. 3 stacks = proc dégâts.",
            cooldown: "Passif",
            details: "Proc: 10-92 (+5% bonus HP) dégâts physiques."
        },
        spells: {
            Q: {
                name: "Shattered Earth / Upheaval",
                icon: "🪨",
                description: "Q1: frappe + charge rock. Q2: lance rock stun.",
                cooldown: "4/3.5/3/2.5/2s",
                cost: "30/35/40/45/50 Mana",
                damage: "Q1: 10/15/20/25/30 (+35% bonus AD) | Q2: 60/90/120/150/180 (+80% bonus AD)(+6% bonus HP)",
                damageType: "physical",
                details: "Q2: stun 1-1.5s selon distance. Slow zone 2s."
            },
            W: {
                name: "Seismic Bastion",
                icon: "🛡️",
                description: "Bouclier + next Q is empowered.",
                cooldown: "13/12.5/12/11.5/11s",
                cost: "55/60/65/70/75 Mana",
                damage: "Bouclier: 12/13/14/15/16% max HP (+15% bonus HP)",
                damageType: "utility",
                details: "Durée: 3.5s. Empower Q: zone + dégâts."
            },
            E: {
                name: "Ixtal's Impact",
                icon: "💨",
                description: "Charge puis ram. Si mur = stun.",
                cooldown: "14/13.5/13/12.5/12s",
                cost: "70/75/80/85/90 Mana",
                damage: "60/100/140/180/220 (+80% bonus AD) | Mur: +50%",
                damageType: "physical",
                details: "Unstoppable pendant charge. Mur stun: 1-1.5s."
            },
            R: {
                name: "Impale",
                icon: "🦂",
                description: "Suppress ennemi et tire. Dégâts à la fin.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "60/80/100 (+60% AD) + 60/80/100 (+60% AD)(+6% max HP) à la fin",
                damageType: "physical",
                details: "Suppress: 1.5s. Tire ennemi. Stun 0.25s fin."
            }
        }
    },
    {
        id: 125,
        name: "Smolder",
        title: "Le Brûleur de Cœurs",
        role: "marksman",
        icon: "🔥",
        baseStats: {
            hp: 545, hpGrowth: 93, hpRegen: 2.75, hpRegenGrowth: 0.55,
            mana: 350, manaGrowth: 40, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 60, adGrowth: 2.8, as: 0.669, asGrowth: 3.5,
            armor: 24, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Dragon Practice",
            icon: "📚",
            description: "Q hits stack. Stacks améliorent Q + milestones.",
            cooldown: "Passif",
            details: "25: +execute. 125: +explosion. 225: burn + true damage."
        },
        spells: {
            Q: {
                name: "Super Scorcher Breath",
                icon: "🔥",
                description: "Crache feu. Applique attaque effets. Scale avec stacks.",
                cooldown: "5.5/5/4.5/4/3.5s",
                cost: "25/30/35/40/45 Mana",
                damage: "15/25/35/45/55 (+100% AD)(+stacks)",
                damageType: "physical",
                details: "Peut crit. Stack sur hit."
            },
            W: {
                name: "Achooo!",
                icon: "🤧",
                description: "Éternue feu qui explose au premier champion.",
                cooldown: "14/13/12/11/10s",
                cost: "75/80/85/90/95 Mana",
                damage: "50/70/90/110/130 (+25% AD)(+50% AP)",
                damageType: "magic",
                details: "Slow: 50% 2s. Zone: +50% dégâts si centre."
            },
            E: {
                name: "Flap, Flap, Flap",
                icon: "🦋",
                description: "Vole sur terrain. Ignore collisions + MS.",
                cooldown: "22/21/20/19/18s",
                cost: "65 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "MS: +75-100%. Durée: 1.25s. Reset AA."
            },
            R: {
                name: "MMOOOMMMM!",
                icon: "🐉",
                description: "Appelle maman dragon. Laser massif.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "150/250/350 (+110% bonus AD)(+90% AP)",
                damageType: "magic",
                details: "Global range. Heal: 75/100/125 (+50% AP) en volant."
            }
        }
    },
    {
        id: 126,
        name: "Sona",
        title: "La Virtuose des Cordes",
        role: "support",
        icon: "🎹",
        baseStats: {
            hp: 550, hpGrowth: 91, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 340, manaGrowth: 45, manaRegen: 11.5, manaRegenGrowth: 0.4,
            ad: 49, adGrowth: 3, as: 0.644, asGrowth: 2.3,
            armor: 26, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Power Chord",
            icon: "🎵",
            description: "Chaque 3 sorts = prochaine attaque empowered selon dernier sort.",
            cooldown: "Passif",
            details: "Q: +dégâts. W: -dégâts cible. E: slow."
        },
        spells: {
            Q: {
                name: "Hymn of Valor",
                icon: "🎶",
                description: "Projectiles sur 2 ennemis + aura dégâts alliés.",
                cooldown: "8s",
                cost: "50/55/60/65/70 Mana",
                damage: "50/70/90/110/130 (+40% AP)",
                damageType: "magic",
                details: "Aura: +10-30 (+20% AP) bonus sur prochaine attaque."
            },
            W: {
                name: "Aria of Perseverance",
                icon: "💚",
                description: "Heal elle + allié blessé + aura bouclier.",
                cooldown: "10s",
                cost: "80/85/90/95/100 Mana",
                damage: "Heal: 30/45/60/75/90 (+20% AP)",
                damageType: "utility",
                details: "Aura bouclier: 25/50/75/100/125 (+25% AP)."
            },
            E: {
                name: "Song of Celerity",
                icon: "💨",
                description: "MS pour elle + aura MS alliés.",
                cooldown: "14s",
                cost: "65 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+20-28% MS self. Aura: +10-14% (+2% par 100 AP)."
            },
            R: {
                name: "Crescendo",
                icon: "🎹",
                description: "Vague qui stun tous ennemis.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "150/250/350 (+50% AP)",
                damageType: "magic",
                details: "Stun: 1.5s. Passif: réduit CD basic par R points."
            }
        }
    },
    {
        id: 127,
        name: "Soraka",
        title: "L'Enfant des Étoiles",
        role: "support",
        icon: "⭐",
        baseStats: {
            hp: 535, hpGrowth: 88, hpRegen: 2.5, hpRegenGrowth: 0.5,
            mana: 425, manaGrowth: 40, manaRegen: 11.5, manaRegenGrowth: 0.4,
            ad: 50, adGrowth: 3, as: 0.625, asGrowth: 2.14,
            armor: 32, armorGrowth: 4.9, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Salvation",
            icon: "✨",
            description: "MS vers alliés low HP.",
            cooldown: "Passif",
            details: "+70% MS vers alliés <40% HP."
        },
        spells: {
            Q: {
                name: "Starcall",
                icon: "⭐",
                description: "Zone qui slow + heal over time Soraka.",
                cooldown: "8/7/6/5/4s",
                cost: "45/50/55/60/65 Mana",
                damage: "85/120/155/190/225 (+35% AP)",
                damageType: "magic",
                details: "Slow: 30-50%. Si hit: Rejuvenation heal Soraka."
            },
            W: {
                name: "Astral Infusion",
                icon: "💚",
                description: "Heal allié. Coûte % HP Soraka.",
                cooldown: "6/5/4/3/2s",
                cost: "10% max HP + 40/45/50/55/60 Mana",
                damage: "Heal: 90/110/130/150/170 (+50% AP)",
                damageType: "utility",
                details: "Si Rejuvenation active: heal +50%, pas de coût HP."
            },
            E: {
                name: "Equinox",
                icon: "🌙",
                description: "Zone silence puis root.",
                cooldown: "20/19/18/17/16s",
                cost: "70/75/80/85/90 Mana",
                damage: "70/95/120/145/170 (+40% AP)",
                damageType: "magic",
                details: "Silence zone: 1.5s. Root après: 1-2s."
            },
            R: {
                name: "Wish",
                icon: "🌟",
                description: "Heal tous alliés globalement. Bonus si low HP.",
                cooldown: "150/135/120s",
                cost: "100 Mana",
                damage: "Heal: 150/250/350 (+50% AP)",
                damageType: "utility",
                details: "Global. +50% heal sur alliés <40% HP."
            }
        }
    },
    {
        id: 128,
        name: "Swain",
        title: "Le Grand Général de Noxus",
        role: "mage",
        icon: "🦅",
        baseStats: {
            hp: 595, hpGrowth: 115, hpRegen: 7.5, hpRegenGrowth: 0.65,
            mana: 468, manaGrowth: 28.5, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 58, adGrowth: 2.7, as: 0.625, asGrowth: 2.11,
            armor: 26, armorGrowth: 5.2, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Ravenous Flock",
            icon: "🦅",
            description: "Pull âmes des immobilisés. Âmes = HP permanent.",
            cooldown: "12s par champion",
            details: "Pull: heal 4-7% max HP. Stacks: +12 HP permanent par fragment."
        },
        spells: {
            Q: {
                name: "Death's Hand",
                icon: "✋",
                description: "Projectiles en arc. Plus de hits = plus de dégâts.",
                cooldown: "7/6/5/4/3s",
                cost: "45/50/55/60/65 Mana",
                damage: "60/80/100/120/140 (+40% AP) par bolt",
                damageType: "magic",
                details: "+12-36% dégâts par bolt supplémentaire (max 5)."
            },
            W: {
                name: "Vision of Empire",
                icon: "👁️",
                description: "Zone longue distance qui révèle + slow + dégâts.",
                cooldown: "22/21/20/19/18s",
                cost: "60/65/70/75/80 Mana",
                damage: "80/120/160/200/240 (+55% AP)",
                damageType: "magic",
                details: "Delay: 1.5s. Slow: 25-45%. +25% si centre. Révèle."
            },
            E: {
                name: "Nevermove",
                icon: "⛓️",
                description: "Vague qui revient et root.",
                cooldown: "10s",
                cost: "50 Mana",
                damage: "35/45/55/65/75 (+25% AP) aller + 35/70/105/140/175 (+25% AP) retour",
                damageType: "magic",
                details: "Root: 1.5s sur retour."
            },
            R: {
                name: "Demonic Ascension",
                icon: "😈",
                description: "Forme démoniaque: drain autour, puis explosion.",
                cooldown: "100/80/60s",
                cost: "Aucun",
                damage: "20/45/70 (+10% AP) drain/s + 150/225/300 (+60% AP) explosion",
                damageType: "magic",
                details: "Heal: 15/25/35 (+12% AP)/s. Durée: 12s. R2: explosion."
            }
        }
    },
    {
        id: 129,
        name: "Sylas",
        title: "Le Briseur de Chaînes",
        role: "mage",
        icon: "⛓️",
        baseStats: {
            hp: 595, hpGrowth: 115, hpRegen: 9, hpRegenGrowth: 0.9,
            mana: 310, manaGrowth: 55, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 61, adGrowth: 3, as: 0.645, asGrowth: 3.5,
            armor: 27, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Petricite Burst",
            icon: "⛓️",
            description: "Après sort, attaque frappe en AOE.",
            cooldown: "Passif",
            details: "Dégâts: 9-60 (+25% AP)(+100% AD). 3 attaques par sort."
        },
        spells: {
            Q: {
                name: "Chain Lash",
                icon: "⛓️",
                description: "Fouette chaînes. Intersection = explosion.",
                cooldown: "9/8/7/6/5s",
                cost: "55/60/65/70/75 Mana",
                damage: "40/60/80/100/120 (+40% AP) + 50/85/120/155/190 (+60% AP) detonation",
                damageType: "magic",
                details: "Slow: 15-35%."
            },
            W: {
                name: "Kingslayer",
                icon: "👑",
                description: "Dash vers ennemi + dégâts + heal. Augmenté si low HP.",
                cooldown: "13/11.5/10/8.5/7s",
                cost: "50/55/60/65/70 Mana",
                damage: "70/105/140/175/210 (+90% AP)",
                damageType: "magic",
                details: "+50% dégâts/heal si cible <40% HP. Heal: 25-50 (+35% AP)."
            },
            E: {
                name: "Abscond / Abduct",
                icon: "💨",
                description: "E1: Dash + bouclier. E2: Relance chaîne qui pull.",
                cooldown: "13/12/11/10/9s",
                cost: "60 Mana",
                damage: "80/130/180/230/280 (+100% AP)",
                damageType: "magic",
                details: "Bouclier: 80-200 (+100% AP). Pull vers cible si touche."
            },
            R: {
                name: "Hijack",
                icon: "🔮",
                description: "Vole ultime d'un champion ennemi.",
                cooldown: "80/55/30s",
                cost: "75 Mana",
                damage: "Variable (R volé)",
                damageType: "magic",
                details: "CD par cible: 200% leur R CD. Scale avec stats Sylas."
            }
        }
    },
    {
        id: 130,
        name: "Syndra",
        title: "La Souveraine Obscure",
        role: "mage",
        icon: "🔮",
        baseStats: {
            hp: 593, hpGrowth: 104, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 480, manaGrowth: 40, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 54, adGrowth: 2.9, as: 0.625, asGrowth: 2,
            armor: 25, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Transcendent",
            icon: "💜",
            description: "Gagne Splinters. 120 = améliore sorts + burst R.",
            cooldown: "Passif",
            details: "Splinters: par level + minion/champion. Améliorations: 40/60/80/100/120."
        },
        spells: {
            Q: {
                name: "Dark Sphere",
                icon: "🔮",
                description: "Crée sphère qui dégâts. Base de son kit.",
                cooldown: "7s",
                cost: "40/50/60/70/80 Mana",
                damage: "70/105/140/175/210 (+65% AP)",
                damageType: "magic",
                details: "Sphères: 6s durée. Transcendent: +15% dégâts vs champions."
            },
            W: {
                name: "Force of Will",
                icon: "✋",
                description: "Grab sphère/minion. Relance: lance + slow.",
                cooldown: "12/11/10/9/8s",
                cost: "60/65/70/75/80 Mana",
                damage: "70/110/150/190/230 (+70% AP)",
                damageType: "magic",
                details: "Slow: 25-45% 1.5s. Transcendent: +20% slow."
            },
            E: {
                name: "Scatter the Weak",
                icon: "💨",
                description: "Pousse sphères + stun si touché par sphère.",
                cooldown: "18/17/16/15/14s",
                cost: "50 Mana",
                damage: "75/110/145/180/215 (+45% AP)",
                damageType: "magic",
                details: "Stun: 1.5s si sphère touche. Transcendent: range +200."
            },
            R: {
                name: "Unleashed Power",
                icon: "💥",
                description: "Lance toutes sphères actives sur cible.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "90/130/170 (+17% AP) par sphère (min 3)",
                damageType: "magic",
                details: "Min 3 sphères. Transcendent: +10% true dmg execute <15% HP."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_S;
}
