// ========================================
// CHAMPIONS - LETTRE N
// ========================================

const CHAMPIONS_N = [
    {
        id: 86,
        name: "Naafiri",
        title: "La Dague du Temps Passé",
        role: "assassin",
        icon: "🐕",
        baseStats: {
            hp: 620, hpGrowth: 94, hpRegen: 8.5, hpRegenGrowth: 0.75,
            mana: 350, manaGrowth: 55, manaRegen: 8.5, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3.5, as: 0.663, asGrowth: 2.5,
            armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Mana",
        passive: {
            name: "We Are More",
            icon: "🐺",
            description: "Packmates spawn et attaquent avec Naafiri.",
            cooldown: "30-15s par packmate",
            details: "Packmates: 2-5. Heal Naafiri 20-90% AD. Spawn sur champions/grands monstres."
        },
        spells: {
            Q: {
                name: "Darkin Daggers",
                icon: "🗡️",
                description: "Lance dagues. 2ème hit = bleed.",
                cooldown: "10/9/8/7/6s",
                cost: "45/50/55/60/65 Mana",
                damage: "30/50/70/90/110 (+40% bonus AD)",
                damageType: "physical",
                details: "Bleed: 30/50/70/90/110 (+80% bonus AD) sur 4s. Missing HP bonus."
            },
            W: {
                name: "Hounds' Pursuit",
                icon: "💨",
                description: "Packmates dash puis Naafiri peut dash.",
                cooldown: "22/20/18/16/14s",
                cost: "70/75/80/85/90 Mana",
                damage: "35/65/95/125/155 (+90% bonus AD)",
                damageType: "physical",
                details: "Range: 700. Collision = dégâts."
            },
            E: {
                name: "Eviscerate",
                icon: "🌀",
                description: "Dash + dégâts AOE.",
                cooldown: "8/7/6/5/4s",
                cost: "35/40/45/50/55 Mana",
                damage: "65/100/135/170/205 (+80% bonus AD)",
                damageType: "physical",
                details: "Traversée terrain courte."
            },
            R: {
                name: "The Call of the Pack",
                icon: "🐺",
                description: "Spawn tous packmates + stats. First champion hit = dash.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "Aucun direct",
                damageType: "buff",
                details: "Vision ennemis 45%- PV. +25-45% MS. Durée: 6s."
            }
        }
    },
    {
        id: 87,
        name: "Nami",
        title: "L'Invocatrice des Marées",
        role: "support",
        icon: "🧜",
        baseStats: {
            hp: 560, hpGrowth: 88, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 365, manaGrowth: 43, manaRegen: 11.5, manaRegenGrowth: 0.4,
            ad: 51, adGrowth: 3.1, as: 0.644, asGrowth: 2.61,
            armor: 29, armorGrowth: 4.9, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Surging Tides",
            icon: "🌊",
            description: "Compétences sur alliés donnent MS.",
            cooldown: "Passif",
            details: "+45 (+20% AP) MS décroissant 1.5s."
        },
        spells: {
            Q: {
                name: "Aqua Prison",
                icon: "💧",
                description: "Bulle qui stun zone.",
                cooldown: "12/11/10/9/8s",
                cost: "60 Mana",
                damage: "75/130/185/240/295 (+50% AP)",
                damageType: "magic",
                details: "Stun: 1.5s. Suspend en l'air."
            },
            W: {
                name: "Ebb and Flow",
                icon: "🌀",
                description: "Rebondit 3× entre alliés (heal) et ennemis (dégâts).",
                cooldown: "10s",
                cost: "70/85/100/115/130 Mana",
                damage: "60/100/140/180/220 (+55% AP) | Heal: 60/95/130/165/200 (+30% AP)",
                damageType: "magic",
                details: "-15% efficacité par rebond (ou +7.5% vers champions)."
            },
            E: {
                name: "Tidecaller's Blessing",
                icon: "✨",
                description: "Enchante attaques allié: dégâts magic + slow.",
                cooldown: "11/10.5/10/9.5/9s",
                cost: "55/60/65/70/75 Mana",
                damage: "25/40/55/70/85 (+20% AP) × 3 attaques",
                damageType: "magic",
                details: "Slow: 15-35% 1s."
            },
            R: {
                name: "Tidal Wave",
                icon: "🌊",
                description: "Vague géante qui knock up et slow.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "150/250/350 (+60% AP)",
                damageType: "magic",
                details: "Knock up: 0.5s. Slow: 50-70% 2-4s selon distance."
            }
        }
    },
    {
        id: 88,
        name: "Nasus",
        title: "Le Conservateur du Cycle",
        role: "fighter",
        icon: "🐕",
        baseStats: {
            hp: 631, hpGrowth: 104, hpRegen: 9, hpRegenGrowth: 0.9,
            mana: 326, manaGrowth: 42, manaRegen: 7.44, manaRegenGrowth: 0.5,
            ad: 67, adGrowth: 3.5, as: 0.638, asGrowth: 3.48,
            armor: 34, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Soul Eater",
            icon: "💜",
            description: "Lifesteal passif.",
            cooldown: "Passif",
            details: "10-22% lifesteal selon niveau."
        },
        spells: {
            Q: {
                name: "Siphoning Strike",
                icon: "🔨",
                description: "Prochaine attaque = dégâts bonus. Stack permanent sur kill.",
                cooldown: "8/7/6/5/4s",
                cost: "20 Mana",
                damage: "30/50/70/90/110 (+Stacks)",
                damageType: "physical",
                details: "+3 stacks (kill), +12 (champion/large). Pas de cap."
            },
            W: {
                name: "Wither",
                icon: "🦴",
                description: "Cripple ennemi: slow + AS reduction.",
                cooldown: "15/14/13/12/11s",
                cost: "80 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Slow: 35% → 47-75%. AS slow: 50% du slow. Durée: 5s."
            },
            E: {
                name: "Spirit Fire",
                icon: "🔥",
                description: "Zone qui réduit armor + DoT.",
                cooldown: "12s",
                cost: "70/85/100/115/130 Mana",
                damage: "55/95/135/175/215 (+60% AP) initial + 11/19/27/35/43 (+12% AP)/s",
                damageType: "magic",
                details: "-25-45% armor. Durée: 5s."
            },
            R: {
                name: "Fury of the Sands",
                icon: "⚡",
                description: "Grandit: bonus HP, armor, MR + aura dégâts.",
                cooldown: "120s",
                cost: "100 Mana",
                damage: "3/4/5% PV max/s autour",
                damageType: "magic",
                details: "+300/450/600 HP, +40/55/70 armor/MR. 15s. -50% CD Q pendant."
            }
        }
    },
    {
        id: 89,
        name: "Nautilus",
        title: "Le Titan des Profondeurs",
        role: "support",
        icon: "⚓",
        baseStats: {
            hp: 646, hpGrowth: 100, hpRegen: 8.5, hpRegenGrowth: 0.55,
            mana: 400, manaGrowth: 47, manaRegen: 8.63, manaRegenGrowth: 0.5,
            ad: 61, adGrowth: 3.3, as: 0.706, asGrowth: 1,
            armor: 39, armorGrowth: 4.95, mr: 32, mrGrowth: 2.05,
            ms: 325, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Staggering Blow",
            icon: "⚓",
            description: "Première attaque sur cible root.",
            cooldown: "6s par cible",
            details: "Root: 0.75-1.5s. Dégâts: 14-116 bonus physical."
        },
        spells: {
            Q: {
                name: "Dredge Line",
                icon: "🪝",
                description: "Ancre qui pull ennemi ou pull vers terrain.",
                cooldown: "14/13/12/11/10s",
                cost: "60 Mana",
                damage: "70/115/160/205/250 (+90% AP)",
                damageType: "magic",
                details: "Terrain: pull Nautilus vers. Champion: les deux se rapprochent."
            },
            W: {
                name: "Titan's Wrath",
                icon: "🛡️",
                description: "Bouclier + attaques DoT.",
                cooldown: "12s",
                cost: "60 Mana",
                damage: "30/40/50/60/70 (+40% AP) DoT sur 2s",
                damageType: "magic",
                details: "Bouclier: 50/60/70/80/90 (+8-16% max HP). Durée: 6s."
            },
            E: {
                name: "Riptide",
                icon: "🌊",
                description: "Vagues autour qui slow.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "50/60/70/80/90 Mana",
                damage: "55/85/115/145/175 (+30% AP)",
                damageType: "magic",
                details: "3 vagues. Slow: 30-50% 1.5s."
            },
            R: {
                name: "Depth Charge",
                icon: "💥",
                description: "Projectile qui chase et knock up. Knock up ennemis traversés.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/275/400 (+80% AP)",
                damageType: "magic",
                details: "Cible: knock up 1s. Traversés: knock up + 125/175/225 dégâts."
            }
        }
    },
    {
        id: 90,
        name: "Neeko",
        title: "La Curieuse Caméléon",
        role: "mage",
        icon: "🦎",
        baseStats: {
            hp: 610, hpGrowth: 99, hpRegen: 7.5, hpRegenGrowth: 0.75,
            mana: 450, manaGrowth: 30, manaRegen: 7, manaRegenGrowth: 0.85,
            ad: 48, adGrowth: 2.5, as: 0.645, asGrowth: 3.5,
            armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Inherent Glamour",
            icon: "🎭",
            description: "Peut prendre l'apparence d'un allié.",
            cooldown: "25-10s",
            details: "Dégâts subis break disguise. Clone: W passive."
        },
        spells: {
            Q: {
                name: "Blooming Burst",
                icon: "🌸",
                description: "Projectile qui blooms. Secondary blooms si touche.",
                cooldown: "7s",
                cost: "50/60/70/80/90 Mana",
                damage: "70/115/160/205/250 (+50% AP)",
                damageType: "magic",
                details: "Secondary bloom: 40/65/90/115/140 (+25% AP). Max 2 extra."
            },
            W: {
                name: "Shapesplitter",
                icon: "👻",
                description: "Passif: chaque 3ème attaque = dégâts bonus. Actif: invisible + clone.",
                cooldown: "16/14/12/10/8s",
                cost: "75 Mana",
                damage: "50/80/110/140/170 (+60% AP) on-hit",
                damageType: "magic",
                details: "Invisible: 0.5s. Clone: court et meurt."
            },
            E: {
                name: "Tangle-Barbs",
                icon: "🌿",
                description: "Ligne qui root. Durée augmente par ennemi traversé.",
                cooldown: "12/11/10/9/8s",
                cost: "60/65/70/75/80 Mana",
                damage: "80/115/150/185/220 (+65% AP)",
                damageType: "magic",
                details: "Root: 0.7-1.3s + 0.3s par champion traversé."
            },
            R: {
                name: "Pop Blossom",
                icon: "💥",
                description: "Saute et stun zone après canal.",
                cooldown: "90s",
                cost: "100 Mana",
                damage: "200/425/650 (+130% AP)",
                damageType: "magic",
                details: "Canal: 1.25s. Bouclier: 75/100/125 (+75% AP) + 40/60/80 par champion."
            }
        }
    },
    {
        id: 91,
        name: "Nidalee",
        title: "La Chasseuse Bestiale",
        role: "assassin",
        icon: "🐆",
        baseStats: {
            hp: 610, hpGrowth: 102, hpRegen: 6, hpRegenGrowth: 0.6,
            mana: 295, manaGrowth: 45, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 61, adGrowth: 3.5, as: 0.638, asGrowth: 3.22,
            armor: 28, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Prowl",
            icon: "🐾",
            description: "MS en brush. Marquer ennemi = forme cougar bonus.",
            cooldown: "Passif",
            details: "+10% MS brush. Hunt: +30% MS vers marqué, cougar bonus."
        },
        spells: {
            Q: {
                name: "Javelin Toss / Takedown",
                icon: "🗡️",
                description: "Humain: lance javelin (dégâts distance). Cougar: exécute.",
                cooldown: "6s / 5s",
                cost: "50/55/60/65/70 Mana / Aucun",
                damage: "70/90/110/130/150 (+50% AP) à ×2.5 | Cougar: 5-30 (+75% AD)(+40% AP)",
                damageType: "magic",
                details: "Javelin: +2.5% par 7.5 unités. Cougar: +1% par 1% PV manquants."
            },
            W: {
                name: "Bushwhack / Pounce",
                icon: "🪤",
                description: "Humain: piège révèle + marque. Cougar: saut.",
                cooldown: "15-9s / 5s",
                cost: "30/35/40/45/50 Mana / Aucun",
                damage: "40/80/120/160/200 (+20% AP) | Cougar: 60/110/160/210 (+30% AP)",
                damageType: "magic",
                details: "Piège: 2min. Pounce: +225 range vers Hunted."
            },
            E: {
                name: "Primal Surge / Swipe",
                icon: "💚",
                description: "Humain: heal + AS. Cougar: AOE devant.",
                cooldown: "12s / 5s",
                cost: "50/55/60/65/70 Mana / Aucun",
                damage: "Heal: 35/50/65/80/95 (+32.5% AP)(+6% PV manquants) | Swipe: 80/140/200/260 (+45% AP)",
                damageType: "magic",
                details: "+20-60% AS 7s."
            },
            R: {
                name: "Aspect of the Cougar",
                icon: "🐆",
                description: "Change de forme. Cougar = melee.",
                cooldown: "3s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Cougar: melee, 20 armor/MR. Disponible niveau 1."
            }
        }
    },
    {
        id: 92,
        name: "Nilah",
        title: "La Joie Infinie",
        role: "marksman",
        icon: "💧",
        baseStats: {
            hp: 570, hpGrowth: 101, hpRegen: 4, hpRegenGrowth: 0.55,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 58, adGrowth: 2.5, as: 0.697, asGrowth: 3,
            armor: 27, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 225
        },
        resource: "Aucun (XP partagé)",
        passive: {
            name: "Joy Unending",
            icon: "✨",
            description: "Partage XP bonus quand alliés soignent/bouclier near. Bonus heal/shield.",
            cooldown: "Passif",
            details: "Partage: +50% XP du heal/shield. +5-25% heal/shield reçus."
        },
        spells: {
            Q: {
                name: "Formless Blade",
                icon: "🗡️",
                description: "Coup de fouet qui donne range étendue après.",
                cooldown: "4s",
                cost: "Aucun",
                damage: "5/10/15/20/25 (+90-130% AD)",
                damageType: "physical",
                details: "Passive: Q heal 6-16% dégâts infligés. Armor pen et lifesteal améliorés."
            },
            W: {
                name: "Jubilant Veil",
                icon: "💨",
                description: "Dodge attaques + MS. Touche allié = partage.",
                cooldown: "24/21.5/19/16.5/14s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 2.5s. Dodge AAs. +15-35% MS."
            },
            E: {
                name: "Slipstream",
                icon: "💨",
                description: "Dash à travers unité. Stock 2 charges.",
                cooldown: "Recharge: 23/21/19/17/15s",
                cost: "Aucun",
                damage: "Aucun direct",
                damageType: "utility",
                details: "2 charges. Dash: vers alliés aussi."
            },
            R: {
                name: "Apotheosis",
                icon: "🌊",
                description: "Tourbillon qui pull puis explose.",
                cooldown: "110/95/80s",
                cost: "Aucun",
                damage: "60/120/180 (+130% bonus AD) puis 125/225/325 (+120% bonus AD)",
                damageType: "physical",
                details: "Pull center. Heal: based on crits + missing HP."
            }
        }
    },
    {
        id: 93,
        name: "Nocturne",
        title: "Le Cauchemar Éternel",
        role: "assassin",
        icon: "👁️",
        baseStats: {
            hp: 655, hpGrowth: 100, hpRegen: 7, hpRegenGrowth: 0.75,
            mana: 275, manaGrowth: 35, manaRegen: 6.75, manaRegenGrowth: 0.45,
            ad: 62, adGrowth: 3.1, as: 0.668, asGrowth: 2.7,
            armor: 38, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Umbra Blades",
            icon: "🗡️",
            description: "Périodiquement, attaque frappe cibles proches + heal.",
            cooldown: "14-6s",
            details: "AOE: 120% AD. Heal: 15-40 par cible."
        },
        spells: {
            Q: {
                name: "Duskbringer",
                icon: "🌑",
                description: "Projectile laissant traînée. Traînée = AD + MS.",
                cooldown: "10s",
                cost: "60/65/70/75/80 Mana",
                damage: "65/110/155/200/245 (+85% bonus AD)",
                damageType: "physical",
                details: "+20-40 AD, +15-35% MS sur traînée. Durée: 5s."
            },
            W: {
                name: "Shroud of Darkness",
                icon: "🛡️",
                description: "Passif: AS. Actif: spell shield qui donne AS si proc.",
                cooldown: "20/18/16/14/12s",
                cost: "50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Passif: +20-40% AS. Shield: 1.5s. Si bloque: +45-65% AS 5s."
            },
            E: {
                name: "Unspeakable Horror",
                icon: "😱",
                description: "Lien fear si maintenu.",
                cooldown: "15/14/13/12/11s",
                cost: "60/65/70/75/80 Mana",
                damage: "80/125/170/215/260 (+100% AP)",
                damageType: "magic",
                details: "Fear: 1.25-2.25s après 2s."
            },
            R: {
                name: "Paranoia",
                icon: "👁️",
                description: "Réduit vision ennemie puis peut dash sur champion.",
                cooldown: "140/115/90s",
                cost: "100 Mana",
                damage: "150/275/400 (+120% bonus AD)",
                damageType: "physical",
                details: "Nearsight: 6s. Dash: 2500/3250/4000 range."
            }
        }
    },
    {
        id: 94,
        name: "Nunu & Willump",
        title: "Le Garçon et son Yéti",
        role: "tank",
        icon: "⛄",
        baseStats: {
            hp: 610, hpGrowth: 90, hpRegen: 5, hpRegenGrowth: 0.8,
            mana: 280, manaGrowth: 42, manaRegen: 7, manaRegenGrowth: 0.5,
            ad: 61, adGrowth: 3, as: 0.625, asGrowth: 2.25,
            armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Call of the Freljord",
            icon: "❄️",
            description: "Attaque ennemi = buff allié le plus proche AS + MS.",
            cooldown: "Passif",
            details: "+20% AS, +10% MS pendant 4s. Willump: dégâts magic bonus."
        },
        spells: {
            Q: {
                name: "Consume",
                icon: "😋",
                description: "Mord ennemi. Heal + bonus vs monstres.",
                cooldown: "12/11/10/9/8s",
                cost: "60 Mana",
                damage: "60/100/140/180/220 (+65% AP)(+5% bonus HP)",
                damageType: "magic",
                details: "Heal: 75-355 (+70% AP)(+10% bonus HP). True dmg vs monstres."
            },
            W: {
                name: "Biggest Snowball Ever!",
                icon: "⛄",
                description: "Roule boule de neige grandissante.",
                cooldown: "14s",
                cost: "50/55/60/65/70 Mana",
                damage: "36/45/54/63/72 → 180/225/270/315/360 (+150% AP)",
                damageType: "magic",
                details: "Durée max: 10s. Knock up: 0.5-1s selon taille."
            },
            E: {
                name: "Snowball Barrage",
                icon: "❄️",
                description: "Lance boules de neige. Root si 3 touchent.",
                cooldown: "14s",
                cost: "50/55/60/65/70 Mana",
                damage: "16/24/32/40/48 (+6% AP) par snowball × 9",
                damageType: "magic",
                details: "Root: 0.5-1.5s. Recast: Willump clap."
            },
            R: {
                name: "Absolute Zero",
                icon: "🥶",
                description: "Canal: zone de slow massive puis burst.",
                cooldown: "110/100/90s",
                cost: "100 Mana",
                damage: "625/950/1275 (+250% AP) max",
                damageType: "magic",
                details: "Canal: 3s. Slow: 0-95%. Shield pendant canal."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_N;
}
