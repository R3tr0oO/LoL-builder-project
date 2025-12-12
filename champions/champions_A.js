// ========================================
// CHAMPIONS - LETTRE A
// ========================================

const CHAMPIONS_A = [
    {
        id: 1,
        name: "Aatrox",
        title: "L'Épée des Darkin",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 650, hpGrowth: 114, hpRegen: 3, hpRegenGrowth: 1,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 60, adGrowth: 5, as: 0.651, asGrowth: 2.5,
            armor: 38, armorGrowth: 4.45, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Aucun",
        passive: {
            name: "Puits Infernal",
            icon: "🩸",
            description: "Périodiquement, la prochaine attaque de base d'Aatrox inflige des dégâts bonus et le soigne pour un pourcentage des PV max de la cible.",
            cooldown: "24-12s (selon niveau)",
            details: "Dégâts: 4-10% PV max cible. Soin: 80% des dégâts infligés."
        },
        spells: {
            Q: {
                name: "L'Épée des Darkin",
                icon: "⚔️",
                description: "Aatrox frappe le sol, infligeant des dégâts physiques. Peut être lancé 3 fois, chaque coup ayant une zone de sweet spot.",
                cooldown: "14/12/10/8/6s",
                cost: "Aucun",
                damage: "10/30/50/70/90 (+60/65/70/75/80% AD)",
                damageType: "physical",
                details: "Sweet spot: dégâts +50%, knock up 0.25s. 3ème frappe: dégâts +25%."
            },
            W: {
                name: "Chaînes Infernales",
                icon: "⛓️",
                description: "Aatrox envoie une chaîne qui inflige des dégâts et ralentit. Si la cible reste dans la zone, elle est tirée vers le centre.",
                cooldown: "20/18.5/17/15.5/14s",
                cost: "Aucun",
                damage: "30/40/50/60/70 (+40% AD)",
                damageType: "physical",
                details: "Slow: 25%. Pull après 1.5s."
            },
            E: {
                name: "Ruée Obscure",
                icon: "💨",
                description: "Aatrox se propulse dans une direction. Gagne de l'omnivamp bonus passivement.",
                cooldown: "9/8/7/6/5s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Passif: 18/19.5/21/22.5/24% omnivamp sur les champions."
            },
            R: {
                name: "Massacre Mondial",
                icon: "😈",
                description: "Aatrox libère sa forme démoniaque, gagnant de l'AD, de la vitesse de déplacement et de l'auto-régénération.",
                cooldown: "120/100/80s",
                cost: "Aucun",
                damage: "+20/25/30% AD total",
                damageType: "buff",
                details: "Durée: 10s (+5s par takedown). +50/65/80% soin amplifié."
            }
        }
    },
    {
        id: 2,
        name: "Ahri",
        title: "La Renarde à Neuf Queues",
        role: "mage",
        icon: "🦊",
        baseStats: {
            hp: 590, hpGrowth: 104, hpRegen: 5.5, hpRegenGrowth: 0.6,
            mana: 418, manaGrowth: 25, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 3, as: 0.668, asGrowth: 2,
            armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Essence Theft",
            icon: "💜",
            description: "Ahri gagne une Essence Fragment pour chaque ennemi touché par ses sorts. À 9 Fragments, son prochain sort la soigne.",
            cooldown: "Passif",
            details: "Soin: 35/50/65/80 (+25% AP) par ennemi touché."
        },
        spells: {
            Q: {
                name: "Orbe de Tromperie",
                icon: "🔮",
                description: "Ahri envoie et rappelle son orbe, infligeant des dégâts magiques à l'aller et des dégâts vrais au retour.",
                cooldown: "7s",
                cost: "60/70/80/90/100 Mana",
                damage: "40/65/90/115/140 (+45% AP) × 2",
                damageType: "magic/true",
                details: "Aller: dégâts magiques. Retour: dégâts vrais."
            },
            W: {
                name: "Feux Follets",
                icon: "🔥",
                description: "Ahri libère trois feux qui ciblent automatiquement les ennemis proches.",
                cooldown: "9/8/7/6/5s",
                cost: "25 Mana",
                damage: "50/80/110/140/170 (+30% AP) par flamme",
                damageType: "magic",
                details: "3 flammes. -30% dégâts après première sur même cible."
            },
            E: {
                name: "Charme",
                icon: "💕",
                description: "Ahri lance un baiser qui charme le premier ennemi touché.",
                cooldown: "14s",
                cost: "60 Mana",
                damage: "80/110/140/170/200 (+60% AP)",
                damageType: "magic",
                details: "Charm: 1.2/1.4/1.6/1.8/2s. +20% dégâts bonus."
            },
            R: {
                name: "Ruée Spirituelle",
                icon: "💨",
                description: "Ahri dash et lance des projectiles. Peut être utilisé 3 fois.",
                cooldown: "130/105/80s",
                cost: "100 Mana",
                damage: "60/90/120 (+35% AP) par dash",
                damageType: "magic",
                details: "3 dashes pendant 15s. Recharge si champion touché."
            }
        }
    },
    {
        id: 3,
        name: "Akali",
        title: "L'Assassin Rogue",
        role: "assassin",
        icon: "🥷",
        baseStats: {
            hp: 570, hpGrowth: 119, hpRegen: 9, hpRegenGrowth: 0.9,
            mana: 200, manaGrowth: 0, manaRegen: 50, manaRegenGrowth: 0,
            ad: 62, adGrowth: 3.3, as: 0.625, asGrowth: 3.2,
            armor: 23, armorGrowth: 4.7, mr: 37, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Énergie",
        passive: {
            name: "Marque de l'Assassin",
            icon: "🔪",
            description: "Toucher un champion avec une compétence crée un cercle. Sortir du cercle renforce la prochaine attaque.",
            cooldown: "Passif",
            details: "Dégâts bonus: 29-170 (+60% bonus AD)(+55% AP). Restaure énergie."
        },
        spells: {
            Q: {
                name: "Cinq Points de Frappe",
                icon: "✋",
                description: "Akali lance des kunais en éventail, infligeant des dégâts et ralentissant.",
                cooldown: "1.5s",
                cost: "110/100/90/80/70 Énergie",
                damage: "45/70/95/120/145 (+65% AD)(+60% AP)",
                damageType: "magic",
                details: "Slow: 50% pendant 0.5s si pointe touche."
            },
            W: {
                name: "Linceul de Ténèbres",
                icon: "💨",
                description: "Akali crée un nuage d'invisibilité.",
                cooldown: "20s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 5/5.5/6/6.5/7s. Restaure 80 énergie. +30/35/40/45/50% MS."
            },
            E: {
                name: "Shuriken Flip",
                icon: "🔄",
                description: "Akali fait un backflip et lance un shuriken. Réactivable pour dash vers cible marquée.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "30 Énergie",
                damage: "30/60/90/120/150 (+25% AD)(+36% AP) × 2",
                damageType: "magic",
                details: "Marque 3s. Second dash mêmes dégâts."
            },
            R: {
                name: "Exécution Parfaite",
                icon: "⚡",
                description: "Akali dash à travers un ennemi (1er cast), puis exécute (2ème cast).",
                cooldown: "100/80/60s",
                cost: "Aucun",
                damage: "R1: 80/220/360 (+50% bonus AD)(+30% AP) | R2: 70/140/210 (+30% AP)",
                damageType: "magic",
                details: "R2: +0-200% dégâts selon PV manquants cible."
            }
        }
    },
    {
        id: 4,
        name: "Akshan",
        title: "Le Sentinelle Rebelle",
        role: "marksman",
        icon: "🪝",
        baseStats: {
            hp: 630, hpGrowth: 107, hpRegen: 3.75, hpRegenGrowth: 0.65,
            mana: 350, manaGrowth: 40, manaRegen: 8.2, manaRegenGrowth: 0.7,
            ad: 52, adGrowth: 3, as: 0.638, asGrowth: 4,
            armor: 26, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Sale Coup",
            icon: "🔫",
            description: "Chaque 3 hit inflige des dégâts bonus. Annuler une attaque = double shot. Takedown sur Scoundrels ressuscite alliés.",
            cooldown: "Passif",
            details: "3ème hit: bouclier. Double shot sur annulation."
        },
        spells: {
            Q: {
                name: "Avengerang",
                icon: "🪃",
                description: "Akshan lance un boomerang qui inflige des dégâts aller-retour.",
                cooldown: "8/7.25/6.5/5.75/5s",
                cost: "60/65/70/75/80 Mana",
                damage: "5/25/45/65/85 (+90% AD)",
                damageType: "physical",
                details: "Portée s'étend par champion touché."
            },
            W: {
                name: "Piste de Vengeance",
                icon: "👁️",
                description: "Passif: Marque Scoundrels. Actif: camouflage et MS vers Scoundrels.",
                cooldown: "18/14/10/6s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Camouflage infini. Mana regen pendant camouflage."
            },
            E: {
                name: "Balançoire Héroïque",
                icon: "🪝",
                description: "Akshan s'accroche au terrain et tire sur l'ennemi le plus proche.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "70/75/80/85/90 Mana",
                damage: "30/45/60/75/90 (+17.5% bonus AD) par balle",
                damageType: "physical",
                details: "Applique effets d'attaque. Reset sur takedown."
            },
            R: {
                name: "Châtiment",
                icon: "🔫",
                description: "Akshan verrouille un ennemi et stocke des balles puis tire.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "20/25/30 (+10% AD) × balles",
                damageType: "physical",
                details: "5-15 balles selon temps de charge."
            }
        }
    },
    {
        id: 5,
        name: "Alistar",
        title: "Le Minotaure",
        role: "support",
        icon: "🐂",
        baseStats: {
            hp: 685, hpGrowth: 120, hpRegen: 8.5, hpRegenGrowth: 0.85,
            mana: 350, manaGrowth: 40, manaRegen: 8.5, manaRegenGrowth: 0.8,
            ad: 62, adGrowth: 3.75, as: 0.625, asGrowth: 2.125,
            armor: 44, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 330, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Piétinement Triomphant",
            icon: "🐾",
            description: "Alistar charge son passif en étant proche des sbires mourants. À pleine charge, soigne alliés proches.",
            cooldown: "Passif",
            details: "Soin: 20-139 selon niveau."
        },
        spells: {
            Q: {
                name: "Destruction",
                icon: "💥",
                description: "Alistar frappe le sol, knock up les ennemis proches.",
                cooldown: "14/13/12/11/10s",
                cost: "55/60/65/70/75 Mana",
                damage: "60/100/140/180/220 (+70% AP)",
                damageType: "magic",
                details: "Knock up: 1s."
            },
            W: {
                name: "Coup de Tête",
                icon: "🐂",
                description: "Alistar charge un ennemi et le repousse.",
                cooldown: "14/13/12/11/10s",
                cost: "50/55/60/65/70 Mana",
                damage: "55/110/165/220/275 (+70% AP)",
                damageType: "magic",
                details: "Knockback: 700 unités."
            },
            E: {
                name: "Piétinement",
                icon: "🦶",
                description: "Alistar piétine pendant 5s, le 5ème tick stun.",
                cooldown: "12/11.5/11/10.5/10s",
                cost: "50/55/60/65/70 Mana",
                damage: "8/11/14/17/20 (+4% AP) × 5",
                damageType: "magic",
                details: "5ème tick: stun 1s."
            },
            R: {
                name: "Volonté Inébranlable",
                icon: "😤",
                description: "Alistar se libère des CCs et réduit les dégâts subis.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "Réduction: 55/65/75%. Durée: 7s. Cleanse."
            }
        }
    },
    {
        id: 6,
        name: "Ambessa",
        title: "La Matriarche de Guerre",
        role: "fighter",
        icon: "🗡️",
        baseStats: {
            hp: 630, hpGrowth: 110, hpRegen: 6, hpRegenGrowth: 0.75,
            mana: 0, manaGrowth: 0, manaRegen: 50, manaRegenGrowth: 0,
            ad: 67, adGrowth: 4.5, as: 0.679, asGrowth: 3,
            armor: 35, armorGrowth: 4.9, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Énergie",
        passive: {
            name: "Disdain",
            icon: "⚡",
            description: "Les compétences touchant champions permettent un dash gratuit. Attaques après dash = dégâts bonus.",
            cooldown: "Passif",
            details: "Dash: 250 unités. Attaque empowered: +bonus AD."
        },
        spells: {
            Q: {
                name: "Cunning Sweep",
                icon: "🗡️",
                description: "Ambessa fait un sweep avec son arme.",
                cooldown: "6/5.5/5/4.5/4s",
                cost: "40 Énergie",
                damage: "60/95/130/165/200 (+70% bonus AD)",
                damageType: "physical",
                details: "Peut cast pendant dash du passif."
            },
            W: {
                name: "Repudiation",
                icon: "🛡️",
                description: "Ambessa gagne un bouclier et contre-attaque.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Énergie",
                damage: "Bouclier: 60/90/120/150/180 (+60% bonus AD)",
                damageType: "utility",
                details: "Contre-attaque basée sur dégâts bloqués."
            },
            E: {
                name: "Lacerate",
                icon: "✖️",
                description: "Ambessa charge, inflige dégâts et gagne armor.",
                cooldown: "10/9/8/7/6s",
                cost: "30 Énergie",
                damage: "50/80/110/140/170 (+50% bonus AD)",
                damageType: "physical",
                details: "Armor: 10/15/20/25/30 pendant 3s."
            },
            R: {
                name: "Public Execution",
                icon: "⚔️",
                description: "Ambessa saute sur ennemi, suppress et inflige dégâts.",
                cooldown: "100/85/70s",
                cost: "100 Énergie",
                damage: "150/275/400 (+100% bonus AD)",
                damageType: "physical",
                details: "Suppress: 1s. Second cast: exécution."
            }
        }
    },
    {
        id: 7,
        name: "Amumu",
        title: "La Momie Triste",
        role: "tank",
        icon: "🧟",
        baseStats: {
            hp: 685, hpGrowth: 94, hpRegen: 9, hpRegenGrowth: 0.85,
            mana: 285, manaGrowth: 40, manaRegen: 7.4, manaRegenGrowth: 0.55,
            ad: 53, adGrowth: 3.8, as: 0.736, asGrowth: 2.18,
            armor: 33, armorGrowth: 4, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Toucher Maudit",
            icon: "😢",
            description: "Les dégâts magiques appliquent Cursed Touch: attaques = dégâts vrais bonus.",
            cooldown: "Passif",
            details: "Dégâts vrais: 10% des dégâts magiques pré-mitigation."
        },
        spells: {
            Q: {
                name: "Bandage Toss",
                icon: "🎀",
                description: "Amumu lance un bandage qui stun et tire vers l'ennemi.",
                cooldown: "3s (charges)",
                cost: "30/35/40/45/50 Mana",
                damage: "70/95/120/145/170 (+85% AP)",
                damageType: "magic",
                details: "2 charges. Stun: 1s."
            },
            W: {
                name: "Désespoir",
                icon: "😭",
                description: "Toggle: Amumu pleure, dégâts magiques/s aux ennemis proches.",
                cooldown: "1s",
                cost: "8 Mana/s",
                damage: "6/8/10/12/14 (+0.5-1% PV max)/s",
                damageType: "magic",
                details: "Refresh Cursed Touch."
            },
            E: {
                name: "Tantrum",
                icon: "💢",
                description: "Passif: réduit dégâts physiques. Actif: dégâts en zone.",
                cooldown: "9/8/7/6/5s",
                cost: "35 Mana",
                damage: "75/100/125/150/175 (+50% AP)",
                damageType: "magic",
                details: "Réduction: 2/4/6/8/10 (+3% bonus armor/MR)."
            },
            R: {
                name: "Curse of the Sad Mummy",
                icon: "😿",
                description: "Amumu stun tous les ennemis proches.",
                cooldown: "130/115/100s",
                cost: "100/150/200 Mana",
                damage: "200/300/400 (+80% AP)",
                damageType: "magic",
                details: "Stun: 1.5s."
            }
        }
    },
    {
        id: 8,
        name: "Anivia",
        title: "La Cryophénix",
        role: "mage",
        icon: "🐦",
        baseStats: {
            hp: 550, hpGrowth: 92, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 495, manaGrowth: 45, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 51, adGrowth: 3.2, as: 0.658, asGrowth: 1.68,
            armor: 21, armorGrowth: 4.9, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 600
        },
        resource: "Mana",
        passive: {
            name: "Renaissance",
            icon: "🥚",
            description: "À la mort, Anivia se transforme en œuf et peut renaître.",
            cooldown: "240s",
            details: "Œuf: -40 armor/MR niveau 1-5. HP œuf = HP actuel."
        },
        spells: {
            Q: {
                name: "Flash Frost",
                icon: "❄️",
                description: "Orbe de glace qui stun. Réactivable pour exploser tôt.",
                cooldown: "11/10/9/8/7s",
                cost: "80/85/90/95/100 Mana",
                damage: "50/70/90/110/130 (+25% AP) × 2",
                damageType: "magic",
                details: "Stun: 1.1-1.5s. Double dégâts si explosé sur cible."
            },
            W: {
                name: "Crystallize",
                icon: "🧊",
                description: "Anivia crée un mur de glace.",
                cooldown: "17s",
                cost: "70 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 5s. Longueur: 400-800."
            },
            E: {
                name: "Frostbite",
                icon: "🥶",
                description: "Éclat de glace. Dégâts bonus si cible Chilled.",
                cooldown: "4s",
                cost: "40 Mana",
                damage: "50/80/110/140/170 (+60% AP)",
                damageType: "magic",
                details: "×2 dégâts si cible Chilled (Q ou R)."
            },
            R: {
                name: "Glacial Storm",
                icon: "🌨️",
                description: "Toggle: blizzard qui grandit, dégâts et slow.",
                cooldown: "4s",
                cost: "60 + 35/45/55/s Mana",
                damage: "30/45/60 (+12.5% AP)/s (×3 max)",
                damageType: "magic",
                details: "Slow: 30-50%. Applique Chilled."
            }
        }
    },
    {
        id: 9,
        name: "Annie",
        title: "L'Enfant des Ténèbres",
        role: "mage",
        icon: "🔥",
        baseStats: {
            hp: 560, hpGrowth: 102, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 418, manaGrowth: 25, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 50, adGrowth: 2.65, as: 0.579, asGrowth: 1.36,
            armor: 19, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 625
        },
        resource: "Mana",
        passive: {
            name: "Pyromanie",
            icon: "✨",
            description: "Après 4 casts, le prochain sort offensif stun.",
            cooldown: "Passif",
            details: "Stun: 1.25/1.5/1.75s (niveaux 1/6/11)."
        },
        spells: {
            Q: {
                name: "Désintégration",
                icon: "🔥",
                description: "Boule de feu. Kill = remboursement mana et CD réduit.",
                cooldown: "4s",
                cost: "60/65/70/75/80 Mana",
                damage: "80/115/150/185/220 (+75% AP)",
                damageType: "magic",
                details: "Remboursement complet sur kill."
            },
            W: {
                name: "Incinération",
                icon: "🌋",
                description: "Annie projette un cône de flammes.",
                cooldown: "8s",
                cost: "70/80/90/100/110 Mana",
                damage: "70/115/160/205/250 (+85% AP)",
                damageType: "magic",
                details: "Cône: 600 unités."
            },
            E: {
                name: "Bouclier de Molten",
                icon: "🛡️",
                description: "Annie gagne bouclier et MS. Reflect dégâts sur attaquants.",
                cooldown: "14/13/12/11/10s",
                cost: "40 Mana",
                damage: "Bouclier: 60/100/140/180/220 (+35% AP)",
                damageType: "utility",
                details: "Reflect: 20/30/40/50/60 (+20% AP). +30-50% MS."
            },
            R: {
                name: "Invocation: Tibbers",
                icon: "🧸",
                description: "Annie invoque Tibbers qui attaque les ennemis.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/275/400 (+65% AP) impact",
                damageType: "magic",
                details: "Tibbers: 1200-3000 HP. Brûle: 10-20 (+10% AP)/s."
            }
        }
    },
    {
        id: 10,
        name: "Aphelios",
        title: "L'Arme des Fidèles",
        role: "marksman",
        icon: "🌙",
        baseStats: {
            hp: 600, hpGrowth: 102, hpRegen: 3.25, hpRegenGrowth: 0.55,
            mana: 348, manaGrowth: 42, manaRegen: 6.5, manaRegenGrowth: 0.4,
            ad: 55, adGrowth: 2.4, as: 0.64, asGrowth: 2.1,
            armor: 26, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana/Moonlight",
        passive: {
            name: "The Hitman and the Seer",
            icon: "🔫",
            description: "Aphelios possède 5 armes qui tournent avec compétences uniques.",
            cooldown: "Passif",
            details: "Calibrum (portée), Severum (soin), Gravitum (slow), Infernum (zone), Crescendum (sentry)."
        },
        spells: {
            Q: {
                name: "Compétence d'Arme",
                icon: "🔫",
                description: "Utilise la compétence de l'arme active.",
                cooldown: "9/8.25/7.5/6.75/6s",
                cost: "60 Mana",
                damage: "Variable selon arme",
                damageType: "physical",
                details: "Calibrum: snipe. Severum: assault. Gravitum: root. Infernum: wave. Crescendum: sentry."
            },
            W: {
                name: "Phase",
                icon: "🔄",
                description: "Change d'arme principale.",
                cooldown: "0.8s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Swap arme principale/secondaire."
            },
            E: {
                name: "Stat Boost",
                icon: "📊",
                description: "Passif: stats bonus selon niveau.",
                cooldown: "Passif",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Bonus: AD, AS ou Lethality."
            },
            R: {
                name: "Moonlight Vigil",
                icon: "🌑",
                description: "Projectile lunaire avec effet selon arme active.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "125/175/225 (+20% bonus AD)",
                damageType: "physical",
                details: "Effet additionnel selon arme."
            }
        }
    },
    {
        id: 11,
        name: "Ashe",
        title: "L'Archère de Givre",
        role: "marksman",
        icon: "❄️",
        baseStats: {
            hp: 640, hpGrowth: 101, hpRegen: 3.5, hpRegenGrowth: 0.55,
            mana: 280, manaGrowth: 32, manaRegen: 6.97, manaRegenGrowth: 0.4,
            ad: 59, adGrowth: 2.95, as: 0.658, asGrowth: 3.33,
            armor: 26, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 600
        },
        resource: "Mana",
        passive: {
            name: "Frost Shot",
            icon: "❄️",
            description: "Les attaques slow et infligent dégâts bonus sur cibles ralenties.",
            cooldown: "Passif",
            details: "Slow: 20-30%. Dégâts bonus basés sur crit rate."
        },
        spells: {
            Q: {
                name: "Ranger's Focus",
                icon: "🎯",
                description: "Consomme Focus pour AS et rafales de flèches.",
                cooldown: "Toggle",
                cost: "50 Mana + 4 stacks",
                damage: "×5 flèches (25% AD chaque)",
                damageType: "physical",
                details: "Durée: 6s. +25-55% AS."
            },
            W: {
                name: "Volley",
                icon: "🏹",
                description: "Éventail de flèches qui slow.",
                cooldown: "14/11.5/9/6.5/4s",
                cost: "70 Mana",
                damage: "20/35/50/65/80 (+100% AD)",
                damageType: "physical",
                details: "9 flèches. Une par ennemi."
            },
            E: {
                name: "Hawkshot",
                icon: "🦅",
                description: "Envoie un faucon qui révèle le terrain.",
                cooldown: "Recharge: 90-50s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "2 charges. Révèle 5s."
            },
            R: {
                name: "Enchanted Crystal Arrow",
                icon: "💎",
                description: "Flèche de glace globale. Stun augmente avec distance.",
                cooldown: "100/80/60s",
                cost: "100 Mana",
                damage: "200/400/600 (+100% AP)",
                damageType: "magic",
                details: "Stun: 1-3.5s selon distance."
            }
        }
    },
    {
        id: 12,
        name: "Aurelion Sol",
        title: "Le Forgeur d'Étoiles",
        role: "mage",
        icon: "🐉",
        baseStats: {
            hp: 620, hpGrowth: 100, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 530, manaGrowth: 40, manaRegen: 8, manaRegenGrowth: 0.75,
            ad: 55, adGrowth: 3.2, as: 0.625, asGrowth: 1.5,
            armor: 22, armorGrowth: 4.3, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Cosmic Creator",
            icon: "⭐",
            description: "Accumule Stardust en touchant champions, améliore compétences.",
            cooldown: "Passif",
            details: "Stardust améliore dégâts et effets Q, W, E, R."
        },
        spells: {
            Q: {
                name: "Breath of Light",
                icon: "✨",
                description: "Canalise souffle stellaire. Génère Stardust sur champions.",
                cooldown: "3s",
                cost: "45-65 Mana/s",
                damage: "15/25/35/45/55 (+30% AP)/tick",
                damageType: "magic",
                details: "Burst final si maintenu."
            },
            W: {
                name: "Astral Flight",
                icon: "💫",
                description: "Vole dans une direction, ignore terrain.",
                cooldown: "22/20.5/19/17.5/16s",
                cost: "80/85/90/95/100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Distance augmente avec Stardust. -50% CD sur takedown."
            },
            E: {
                name: "Singularity",
                icon: "🌀",
                description: "Trou noir qui attire et inflige dégâts.",
                cooldown: "12/11.5/11/10.5/10s",
                cost: "80-100 Mana",
                damage: "10/15/20/25/30 (+5% AP) × stacks",
                damageType: "magic",
                details: "Execute sbires sous 5%. Taille scale avec Stardust."
            },
            R: {
                name: "Falling Star / The Skies Descend",
                icon: "☄️",
                description: "R1: Impact stun. À 75 Stardust: R2 énorme knock up.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "R1: 150/250/350 (+65% AP) | R2: +25% dégâts",
                damageType: "magic",
                details: "R1: Stun 1s. R2: Knock up 1s, zone massive."
            }
        }
    },
    {
        id: 13,
        name: "Aurora",
        title: "La Sorcière du Voile",
        role: "mage",
        icon: "🌌",
        baseStats: {
            hp: 604, hpGrowth: 98, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 480, manaGrowth: 30, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 3, as: 0.625, asGrowth: 2,
            armor: 23, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Spirit Abjuration",
            icon: "👻",
            description: "3 hits sur champion libèrent esprit. Toucher l'esprit = soin + dégâts.",
            cooldown: "10s par cible",
            details: "Soin: 5-150 +25% AP. Dégâts: 20-150 +30% AP."
        },
        spells: {
            Q: {
                name: "Twofold Hex",
                icon: "✖️",
                description: "Curseur qui rebondit. Réactiver pour rappeler.",
                cooldown: "9/8/7/6/5s",
                cost: "55/60/65/70/75 Mana",
                damage: "60/90/120/150/180 (+50% AP) × 2",
                damageType: "magic",
                details: "Slow: 20%. Rebondit 3 fois."
            },
            W: {
                name: "Across the Veil",
                icon: "🌫️",
                description: "Entre dans Spirit Realm, intangible puis MS bonus.",
                cooldown: "22/20/18/16/14s",
                cost: "60 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Intangible: 0.5s. +50% MS décroissant."
            },
            E: {
                name: "The Weirding",
                icon: "🦘",
                description: "Saute et crée portail. Réactivable pour teleport.",
                cooldown: "15/14/13/12/11s",
                cost: "75 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Portail 5s. Alliés peuvent traverser."
            },
            R: {
                name: "Between Worlds",
                icon: "🌀",
                description: "Zone spectrale qui slow et repousse ceux qui sortent.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 4s. Slow: 50%."
            }
        }
    },
    {
        id: 14,
        name: "Azir",
        title: "L'Empereur des Sables",
        role: "mage",
        icon: "☀️",
        baseStats: {
            hp: 550, hpGrowth: 119, hpRegen: 5, hpRegenGrowth: 0.75,
            mana: 320, manaGrowth: 40, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 52, adGrowth: 3.5, as: 0.625, asGrowth: 5,
            armor: 22, armorGrowth: 4.9, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Shurima's Legacy",
            icon: "🏛️",
            description: "Peut invoquer tourelle solaire sur tours détruites.",
            cooldown: "180s",
            details: "Tour dure 60s, inflige dégâts magiques."
        },
        spells: {
            Q: {
                name: "Conquering Sands",
                icon: "🏜️",
                description: "Ordonne aux soldats de charger, dégâts et slow.",
                cooldown: "14/12/10/8/6s",
                cost: "55 Mana",
                damage: "70/90/110/130/150 (+55% AP)",
                damageType: "magic",
                details: "Slow: 25%."
            },
            W: {
                name: "Arise!",
                icon: "⚔️",
                description: "Invoque un soldat de sable. Attaques commandent soldats.",
                cooldown: "1.5s (charges)",
                cost: "40 Mana",
                damage: "50-170 (+55% AP) par attaque",
                damageType: "magic",
                details: "2 charges. Soldats 10s. Attaques percent."
            },
            E: {
                name: "Shifting Sands",
                icon: "💨",
                description: "Dash vers un soldat. Bouclier si touche ennemi.",
                cooldown: "19/18/17/16/15s",
                cost: "60 Mana",
                damage: "60/90/120/150/180 (+40% AP)",
                damageType: "magic",
                details: "Bouclier: 70-190 (+60% AP) si champion touché."
            },
            R: {
                name: "Emperor's Divide",
                icon: "👑",
                description: "Mur de soldats qui repousse et bloque dashes.",
                cooldown: "120/105/90s",
                cost: "100 Mana",
                damage: "175/325/475 (+60% AP)",
                damageType: "magic",
                details: "Mur 3s. Bloque dashes une fois par ennemi."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_A;
}
