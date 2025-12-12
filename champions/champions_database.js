// ========================================
// BASE DE DONNÉES COMPLÈTE DES CHAMPIONS - LEAGUE OF LEGENDS
// ========================================
// Mise à jour: Saison 2025
// 168 Champions avec stats, passifs et compétences

const CHAMPIONS_DATABASE = {
    // ========================================
    // RÔLES
    // ========================================
    roles: {
        fighter: { name: "Fighter", icon: "⚔️", color: "#c8aa6e" },
        tank: { name: "Tank", icon: "🛡️", color: "#3498db" },
        mage: { name: "Mage", icon: "🔮", color: "#9b59b6" },
        assassin: { name: "Assassin", icon: "🗡️", color: "#e74c3c" },
        marksman: { name: "Marksman", icon: "🏹", color: "#ff4444" },
        support: { name: "Support", icon: "💚", color: "#2ecc71" }
    },

    // ========================================
    // STATISTIQUES DE BASE
    // ========================================
    statDefinitions: {
        hp: { name: "Health Points", short: "HP" },
        hpGrowth: { name: "HP per Level", short: "HP/lvl" },
        hpRegen: { name: "HP Regen", short: "HP5" },
        hpRegenGrowth: { name: "HP Regen per Level", short: "HP5/lvl" },
        mana: { name: "Mana", short: "Mana" },
        manaGrowth: { name: "Mana per Level", short: "Mana/lvl" },
        manaRegen: { name: "Mana Regen", short: "MP5" },
        manaRegenGrowth: { name: "Mana Regen per Level", short: "MP5/lvl" },
        ad: { name: "Attack Damage", short: "AD" },
        adGrowth: { name: "AD per Level", short: "AD/lvl" },
        as: { name: "Attack Speed", short: "AS" },
        asGrowth: { name: "AS per Level", short: "AS%/lvl" },
        armor: { name: "Armor", short: "Armor" },
        armorGrowth: { name: "Armor per Level", short: "Armor/lvl" },
        mr: { name: "Magic Resist", short: "MR" },
        mrGrowth: { name: "MR per Level", short: "MR/lvl" },
        ms: { name: "Movement Speed", short: "MS" },
        range: { name: "Attack Range", short: "Range" }
    },

    // ========================================
    // CHAMPIONS DATA
    // ========================================
    champions: [
        // ===== A =====
        {
            id: 1,
            name: "Aatrox",
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
                    description: "Aatrox frappe le sol, infligeant des dégâts physiques. Peut être lancé 3 fois, chaque coup ayant une zone de sweet spot infligeant des dégâts bonus et un knock up.",
                    cooldown: "14/12/10/8/6s",
                    cost: "Aucun",
                    damage: "10/30/50/70/90 (+60/65/70/75/80% AD)",
                    damageType: "physical",
                    details: "Sweet spot: dégâts +50%, knock up 0.25s. 3ème frappe: dégâts +25%."
                },
                W: {
                    name: "Chaînes Infernales",
                    icon: "⛓️",
                    description: "Aatrox envoie une chaîne qui inflige des dégâts et ralentit le premier ennemi touché. Si la cible reste dans la zone, elle est tirée vers le centre et subit des dégâts supplémentaires.",
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
                    description: "Aatrox libère sa forme démoniaque, gagnant de l'AD, de la vitesse de déplacement et de l'auto-régénération. Les takedowns prolongent la durée.",
                    cooldown: "120/100/80s",
                    cost: "Aucun",
                    damage: "+20/25/30% AD total",
                    damageType: "buff",
                    details: "Durée: 10s (+5s par takedown). +50/65/80% soin amplifié. Peur des sbires."
                }
            }
        },
        {
            id: 2,
            name: "Ahri",
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
                description: "Ahri gagne une Essence Fragment pour chaque ennemi touché par ses sorts (3 max par sort). À 9 Fragments, son prochain sort la soigne.",
                cooldown: "Passif",
                details: "Soin: 35/50/65/80 (+25% AP) par ennemi touché. Takedowns restaurent l'essence de charge."
            },
            spells: {
                Q: {
                    name: "Orbe de Tromperie",
                    icon: "🔮",
                    description: "Ahri envoie et rappelle son orbe, infligeant des dégâts magiques à l'aller et des dégâts vrais au retour.",
                    cooldown: "7s",
                    cost: "60/70/80/90/100 Mana",
                    damage: "40/65/90/115/140 (+45% AP) aller + retour",
                    damageType: "magic/true",
                    details: "Dégâts à l'aller: magiques. Dégâts au retour: vrais."
                },
                W: {
                    name: "Feux Follets",
                    icon: "🔥",
                    description: "Ahri libère trois feux qui ciblent automatiquement les ennemis proches.",
                    cooldown: "9/8/7/6/5s",
                    cost: "25 Mana",
                    damage: "50/80/110/140/170 (+30% AP) par flamme",
                    damageType: "magic",
                    details: "3 flammes. Dégâts réduits de 30% après la première flamme sur la même cible."
                },
                E: {
                    name: "Charme",
                    icon: "💕",
                    description: "Ahri lance un baiser qui charme le premier ennemi touché, l'attirant vers elle.",
                    cooldown: "14s",
                    cost: "60 Mana",
                    damage: "80/110/140/170/200 (+60% AP)",
                    damageType: "magic",
                    details: "Charm: 1.2/1.4/1.6/1.8/2s. La cible charmée subit 20% de dégâts bonus."
                },
                R: {
                    name: "Ruée Spirituelle",
                    icon: "💨",
                    description: "Ahri dash et lance des projectiles. Peut être utilisé 3 fois. Toucher un champion réinitialise la durée du cooldown entre les casts.",
                    cooldown: "130/105/80s",
                    cost: "100 Mana",
                    damage: "60/90/120 (+35% AP) par dash",
                    damageType: "magic",
                    details: "3 dashes disponibles pendant 15s. Recharge si champion touché."
                }
            }
        },
        {
            id: 3,
            name: "Akali",
            role: "assassin",
            icon: "🥷",
            baseStats: {
                hp: 570, hpGrowth: 119, hpRegen: 9, hpRegenGrowth: 0.9,
                mana: 200, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
                ad: 62, adGrowth: 3.3, as: 0.625, asGrowth: 3.2,
                armor: 23, armorGrowth: 4.7, mr: 37, mrGrowth: 2.05,
                ms: 345, range: 125
            },
            resource: "Énergie",
            passive: {
                name: "Marque de l'Assassin",
                icon: "🔪",
                description: "Toucher un champion avec une compétence crée un cercle. Sortir du cercle renforce la prochaine attaque avec portée et dégâts bonus.",
                cooldown: "Passif",
                details: "Dégâts bonus: 29-170 (+60% bonus AD)(+55% AP). Restaure de l'énergie."
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
                    details: "Slow: 50% pendant 0.5s si la cible est touchée par la pointe."
                },
                W: {
                    name: "Linceul de Ténèbres",
                    icon: "💨",
                    description: "Akali crée un nuage d'invisibilité. Elle regagne de l'énergie et gagne de la MS à l'intérieur.",
                    cooldown: "20s",
                    cost: "Aucun",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Durée: 5/5.5/6/6.5/7s. Restaure 80 énergie sur la durée. +30/35/40/45/50% MS."
                },
                E: {
                    name: "Shuriken Flip",
                    icon: "🔄",
                    description: "Akali fait un backflip et lance un shuriken. Peut se réactiver pour dash vers une cible marquée.",
                    cooldown: "16/14.5/13/11.5/10s",
                    cost: "30 Énergie",
                    damage: "30/60/90/120/150 (+25% AD)(+36% AP) × 2",
                    damageType: "magic",
                    details: "Marque dure 3s. Second dash inflige les mêmes dégâts."
                },
                R: {
                    name: "Exécution Parfaite",
                    icon: "⚡",
                    description: "Akali dash à travers un ennemi (1er cast), puis exécute les ennemis devant elle (2ème cast).",
                    cooldown: "100/80/60s",
                    cost: "Aucun",
                    damage: "R1: 80/220/360 (+50% bonus AD)(+30% AP) | R2: 70/140/210 (+30% AP) + exécution",
                    damageType: "magic",
                    details: "R2: +0-200% dégâts selon PV manquants de la cible."
                }
            }
        },
        {
            id: 4,
            name: "Akshan",
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
                description: "Chaque 3 hit inflige des dégâts bonus. Si Akshan annule une attaque, il tire deux fois. Takedown sur Scoundrels ressuscite les alliés tués.",
                cooldown: "Passif",
                details: "3ème hit: bouclier. Double shot sur annulation. Scoundrels: derniers tueurs d'alliés."
            },
            spells: {
                Q: {
                    name: "Avengerang",
                    icon: "🪃",
                    description: "Akshan lance un boomerang qui inflige des dégâts à l'aller et au retour, révélant les ennemis touchés.",
                    cooldown: "8/7.25/6.5/5.75/5s",
                    cost: "60/65/70/75/80 Mana",
                    damage: "5/25/45/65/85 (+90% AD)",
                    damageType: "physical",
                    details: "Le boomerang étend sa portée pour chaque champion touché."
                },
                W: {
                    name: "Piste de Vengeance",
                    icon: "👁️",
                    description: "Passif: Marque les Scoundrels. Actif: Akshan devient camouflé et gagne de la MS vers les Scoundrels.",
                    cooldown: "18/14/10/6s (actif)",
                    cost: "Aucun",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Camuflage: durée infinie (2s hors combat). Mana regen pendant camuflage."
                },
                E: {
                    name: "Balançoire Héroïque",
                    icon: "🪝",
                    description: "Akshan s'accroche à un terrain et tire sur l'ennemi le plus proche. Peut être relancé pour sauter.",
                    cooldown: "18/16.5/15/13.5/12s",
                    cost: "70/75/80/85/90 Mana",
                    damage: "30/45/60/75/90 (+17.5% bonus AD) par balle",
                    damageType: "physical",
                    details: "Peut appliquer les effets d'attaque. Reset sur takedown."
                },
                R: {
                    name: "Châtiment",
                    icon: "🔫",
                    description: "Akshan verrouille un ennemi et stocke des balles. Relancer tire toutes les balles stockées. Le premier minion ou champion bloque.",
                    cooldown: "100/85/70s",
                    cost: "100 Mana",
                    damage: "20/25/30 (+10% AD) par balle × nombre de balles",
                    damageType: "physical",
                    details: "5-15 balles selon temps de charge. Chaque balle applique des effets d'attaque."
                }
            }
        },
        {
            id: 5,
            name: "Alistar",
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
                description: "Alistar charge son passif en étant proche des sbires mourants ou des dégâts aux champions. À pleine charge, soigne les alliés proches.",
                cooldown: "Passif",
                details: "Soin: 20-139 selon niveau. Charge: 7 par sbire, 1 par dégât de champion."
            },
            spells: {
                Q: {
                    name: "Destruction",
                    icon: "💥",
                    description: "Alistar frappe le sol, infligeant des dégâts et projetant en l'air les ennemis proches.",
                    cooldown: "14/13/12/11/10s",
                    cost: "55/60/65/70/75 Mana",
                    damage: "60/100/140/180/220 (+70% AP)",
                    damageType: "magic",
                    details: "Knock up: 1s."
                },
                W: {
                    name: "Coup de Tête",
                    icon: "🐂",
                    description: "Alistar charge un ennemi, le repoussant et lui infligeant des dégâts.",
                    cooldown: "14/13/12/11/10s",
                    cost: "50/55/60/65/70 Mana",
                    damage: "55/110/165/220/275 (+70% AP)",
                    damageType: "magic",
                    details: "Knockback: 700 unités."
                },
                E: {
                    name: "Piétinement",
                    icon: "🦶",
                    description: "Alistar piétine le sol pendant 5s, infligeant des dégâts par seconde. Le 5ème piétinement stun.",
                    cooldown: "12/11.5/11/10.5/10s",
                    cost: "50/55/60/65/70 Mana",
                    damage: "8/11/14/17/20 (+4% AP) × 5",
                    damageType: "magic",
                    details: "5ème tick: stun 1s."
                },
                R: {
                    name: "Volonté Inébranlable",
                    icon: "😤",
                    description: "Alistar se libère des CCs et réduit tous les dégâts subis pendant la durée.",
                    cooldown: "120/100/80s",
                    cost: "100 Mana",
                    damage: "Aucun",
                    damageType: "buff",
                    details: "Réduction: 55/65/75%. Durée: 7s. Cleanse au cast."
                }
            }
        },
        {
            id: 6,
            name: "Ambessa",
            role: "fighter",
            icon: "🗡️",
            baseStats: {
                hp: 630, hpGrowth: 110, hpRegen: 6, hpRegenGrowth: 0.75,
                mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
                ad: 67, adGrowth: 4.5, as: 0.679, asGrowth: 3,
                armor: 35, armorGrowth: 4.9, mr: 32, mrGrowth: 2.05,
                ms: 340, range: 175
            },
            resource: "Énergie",
            passive: {
                name: "Disdain",
                icon: "⚡",
                description: "Les compétences qui touchent des champions permettent un dash gratuit dans une direction. Les attaques après un dash infligent des dégâts bonus.",
                cooldown: "Passif",
                details: "Dash gratuit: 250 unités. Attaque empowered: +bonus AD."
            },
            spells: {
                Q: {
                    name: "Cunning Sweep",
                    icon: "🗡️",
                    description: "Ambessa fait un sweep avec son arme, infligeant des dégâts physiques aux ennemis touchés.",
                    cooldown: "6/5.5/5/4.5/4s",
                    cost: "40 Énergie",
                    damage: "60/95/130/165/200 (+70% bonus AD)",
                    damageType: "physical",
                    details: "Peut être cast pendant le dash du passif."
                },
                W: {
                    name: "Repudiation",
                    icon: "🛡️",
                    description: "Ambessa gagne un bouclier et renvoie les prochains dégâts sous forme de contre-attaque.",
                    cooldown: "14/13/12/11/10s",
                    cost: "50 Énergie",
                    damage: "Bouclier: 60/90/120/150/180 (+60% bonus AD)",
                    damageType: "utility",
                    details: "Contre-attaque: dégâts physiques basés sur les dégâts bloqués."
                },
                E: {
                    name: "Lacerate",
                    icon: "✖️",
                    description: "Ambessa charge dans une direction, infligeant des dégâts aux ennemis traversés et gagnant de l'armure.",
                    cooldown: "10/9/8/7/6s",
                    cost: "30 Énergie",
                    damage: "50/80/110/140/170 (+50% bonus AD)",
                    damageType: "physical",
                    details: "Armor bonus: 10/15/20/25/30 pendant 3s."
                },
                R: {
                    name: "Public Execution",
                    icon: "⚔️",
                    description: "Ambessa saute sur un ennemi, le supprimant brièvement et infligeant de lourds dégâts. Peut être relancé pour terminer l'exécution.",
                    cooldown: "100/85/70s",
                    cost: "100 Énergie",
                    damage: "150/275/400 (+100% bonus AD)",
                    damageType: "physical",
                    details: "Suppress: 1s. Second cast: dégâts d'exécution."
                }
            }
        },
        {
            id: 7,
            name: "Amumu",
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
                description: "Les dégâts magiques appliquent Cursed Touch, faisant subir des dégâts vrais bonus aux attaques de base.",
                cooldown: "Passif",
                details: "Dégâts vrais: 10% des dégâts magiques pré-mitigation."
            },
            spells: {
                Q: {
                    name: "Bandage Toss",
                    icon: "🎀",
                    description: "Amumu lance un bandage qui stun le premier ennemi touché et tire Amumu vers lui.",
                    cooldown: "3s (charges)",
                    cost: "30/35/40/45/50 Mana",
                    damage: "70/95/120/145/170 (+85% AP)",
                    damageType: "magic",
                    details: "2 charges max. Stun: 1s."
                },
                W: {
                    name: "Désespoir",
                    icon: "😭",
                    description: "Toggle: Amumu pleure, infligeant des dégâts magiques par seconde aux ennemis proches.",
                    cooldown: "1s",
                    cost: "8 Mana/s",
                    damage: "6/8/10/12/14 (+0.5/0.625/0.75/0.875/1% (+0.25% par 100 AP) PV max)/s",
                    damageType: "magic",
                    details: "Refresh le Cursed Touch."
                },
                E: {
                    name: "Tantrum",
                    icon: "💢",
                    description: "Passif: Réduit les dégâts physiques subis. Actif: Inflige des dégâts magiques aux ennemis proches.",
                    cooldown: "9/8/7/6/5s",
                    cost: "35 Mana",
                    damage: "75/100/125/150/175 (+50% AP)",
                    damageType: "magic",
                    details: "Réduction passive: 2/4/6/8/10 (+3% bonus armor)(+3% bonus MR). CD réduit quand touché."
                },
                R: {
                    name: "Curse of the Sad Mummy",
                    icon: "😿",
                    description: "Amumu emmêle les ennemis proches, les stunant et leur infligeant des dégâts magiques.",
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
                description: "À la mort, Anivia se transforme en œuf et peut renaître après quelques secondes si l'œuf n'est pas détruit.",
                cooldown: "240s",
                details: "Œuf: -40 armor/MR au niveaux 1-5, puis augmente. HP de l'œuf = HP actuel d'Anivia."
            },
            spells: {
                Q: {
                    name: "Flash Frost",
                    icon: "❄️",
                    description: "Anivia envoie un orbe de glace qui inflige des dégâts et stun. Peut être réactivé pour exploser tôt.",
                    cooldown: "11/10/9/8/7s",
                    cost: "80/85/90/95/100 Mana",
                    damage: "50/70/90/110/130 (+25% AP) × 2",
                    damageType: "magic",
                    details: "Stun: 1.1/1.2/1.3/1.4/1.5s. Double dégâts si explosé sur la cible."
                },
                W: {
                    name: "Crystallize",
                    icon: "🧊",
                    description: "Anivia crée un mur de glace qui bloque le passage.",
                    cooldown: "17s",
                    cost: "70 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Durée: 5s. Longueur: 400/500/600/700/800."
                },
                E: {
                    name: "Frostbite",
                    icon: "🥶",
                    description: "Anivia projette un éclat de glace qui inflige des dégâts bonus si la cible est Chilled.",
                    cooldown: "4s",
                    cost: "40 Mana",
                    damage: "50/80/110/140/170 (+60% AP)",
                    damageType: "magic",
                    details: "Dégâts doublés contre cibles Chilled (Q ou R)."
                },
                R: {
                    name: "Glacial Storm",
                    icon: "🌨️",
                    description: "Toggle: Anivia crée un blizzard qui grandit avec le temps, infligeant des dégâts et ralentissant.",
                    cooldown: "4s",
                    cost: "60 Mana + 35/45/55/s",
                    damage: "30/45/60 (+12.5% AP)/s (×3 à taille max)",
                    damageType: "magic",
                    details: "Slow: 30-50% selon taille. Applique Chilled."
                }
            }
        },
        {
            id: 9,
            name: "Annie",
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
                description: "Après 4 casts de sorts, le prochain sort offensif stun tous les ennemis touchés.",
                cooldown: "Passif",
                details: "Stun: 1.25/1.5/1.75s (niveaux 1/6/11)."
            },
            spells: {
                Q: {
                    name: "Désintégration",
                    icon: "🔥",
                    description: "Annie lance une boule de feu. Si elle tue la cible, le mana est remboursé et le CD est réduit.",
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
                    details: "Cône: 600 unités de portée."
                },
                E: {
                    name: "Bouclier de Molten",
                    icon: "🛡️",
                    description: "Annie gagne un bouclier et de la MS. Les ennemis qui l'attaquent subissent des dégâts.",
                    cooldown: "14/13/12/11/10s",
                    cost: "40 Mana",
                    damage: "Bouclier: 60/100/140/180/220 (+35% AP)",
                    damageType: "utility",
                    details: "Reflect: 20/30/40/50/60 (+20% AP). +30/35/40/45/50% MS pendant 1.5s."
                },
                R: {
                    name: "Invocation: Tibbers",
                    icon: "🧸",
                    description: "Annie invoque Tibbers, infligeant des dégâts à l'impact. Tibbers attaque ensuite les ennemis.",
                    cooldown: "120/100/80s",
                    cost: "100 Mana",
                    damage: "150/275/400 (+65% AP) à l'impact",
                    damageType: "magic",
                    details: "Tibbers: 1200/2100/3000 HP. Brûle: 10/15/20 (+10% AP)/s. Durée: 45s."
                }
            }
        },
        {
            id: 10,
            name: "Aphelios",
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
                description: "Aphelios possède 5 armes qui tournent. Chaque arme a une attaque et compétence unique. Le Q change selon l'arme active.",
                cooldown: "Passif",
                details: "Armes: Calibrum (portée), Severum (soin), Gravitum (slow), Infernum (zone), Crescendum (sentry)."
            },
            spells: {
                Q: {
                    name: "Compétence d'Arme",
                    icon: "🔫",
                    description: "Utilise la compétence de l'arme active. Chaque arme a une compétence unique.",
                    cooldown: "9/8.25/7.5/6.75/6s",
                    cost: "60 Mana",
                    damage: "Variable selon l'arme",
                    damageType: "physical",
                    details: "Calibrum: snipe. Severum: assault. Gravitum: root. Infernum: wave. Crescendum: sentry."
                },
                W: {
                    name: "Phase",
                    icon: "🔄",
                    description: "Aphelios change d'arme principale avec son arme secondaire.",
                    cooldown: "0.8s",
                    cost: "Aucun",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "L'arme secondaire devient principale et vice versa."
                },
                E: {
                    name: "Stat Boost (Passif)",
                    icon: "📊",
                    description: "Aphelios gagne des stats bonus selon le niveau mis dans cette compétence.",
                    cooldown: "Passif",
                    cost: "Aucun",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Bonus: AD, AS ou Lethality selon les niveaux."
                },
                R: {
                    name: "Moonlight Vigil",
                    icon: "🌑",
                    description: "Aphelios tire un projectile lunaire. L'effet additionnel dépend de l'arme active.",
                    cooldown: "120/110/100s",
                    cost: "100 Mana",
                    damage: "125/175/225 (+20% bonus AD) + effet d'arme",
                    damageType: "physical",
                    details: "Calibrum: mark. Severum: heal. Gravitum: slow++. Infernum: explosion. Crescendum: chakrams."
                }
            }
        },
        {
            id: 11,
            name: "Ashe",
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
                description: "Les attaques d'Ashe ralentissent et infligent des dégâts bonus aux cibles déjà ralenties (au lieu de critiquer).",
                cooldown: "Passif",
                details: "Slow: 20-30%. Dégâts bonus: basés sur le crit rate (mais pas de vrais crits)."
            },
            spells: {
                Q: {
                    name: "Ranger's Focus",
                    icon: "🎯",
                    description: "Passif: Les attaques génèrent du Focus. Actif: Consomme Focus pour augmenter AS et tirer des rafales.",
                    cooldown: "Aucun (toggle)",
                    cost: "50 Mana + 4 stacks",
                    damage: "Attaques × 5 flèches (25% AD chacune)",
                    damageType: "physical",
                    details: "Durée: 6s. +25/32.5/40/47.5/55% AS."
                },
                W: {
                    name: "Volley",
                    icon: "🏹",
                    description: "Ashe tire un éventail de flèches qui infligent des dégâts et appliquent Frost Shot.",
                    cooldown: "14/11.5/9/6.5/4s",
                    cost: "70 Mana",
                    damage: "20/35/50/65/80 (+100% AD)",
                    damageType: "physical",
                    details: "9 flèches. Une seule flèche peut toucher chaque ennemi."
                },
                E: {
                    name: "Hawkshot",
                    icon: "🦅",
                    description: "Ashe envoie un faucon qui révèle le terrain. Stocke des charges.",
                    cooldown: "Recharge: 90/80/70/60/50s",
                    cost: "Aucun",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "2 charges max. Révèle pendant 5s."
                },
                R: {
                    name: "Enchanted Crystal Arrow",
                    icon: "💎",
                    description: "Ashe tire une flèche de glace globale. La durée du stun augmente avec la distance.",
                    cooldown: "100/80/60s",
                    cost: "100 Mana",
                    damage: "200/400/600 (+100% AP)",
                    damageType: "magic",
                    details: "Stun: 1-3.5s selon distance. Zone de dégâts autour de l'impact."
                }
            }
        },
        {
            id: 12,
            name: "Aurelion Sol",
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
                description: "Aurelion Sol accumule de la Stardust en touchant des champions/épicéens, améliorant ses compétences permanentement.",
                cooldown: "Passif",
                details: "Stardust: améliore les dégâts et effets de Q, W, E et R."
            },
            spells: {
                Q: {
                    name: "Breath of Light",
                    icon: "✨",
                    description: "Aurelion Sol canalise un souffle de lumière stellaire. Toucher des champions génère Stardust.",
                    cooldown: "3s",
                    cost: "45/50/55/60/65 Mana/s",
                    damage: "15/25/35/45/55 (+30% AP) / tick",
                    damageType: "magic",
                    details: "Burst final si maintenu. Dégâts augmentent avec Stardust."
                },
                W: {
                    name: "Astral Flight",
                    icon: "💫",
                    description: "Aurelion Sol vole dans une direction, ignorant le terrain. Breath of Light utilisable pendant le vol.",
                    cooldown: "22/20.5/19/17.5/16s",
                    cost: "80/85/90/95/100 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Distance augmente avec Stardust. -50% CD sur takedown."
                },
                E: {
                    name: "Singularity",
                    icon: "🌀",
                    description: "Aurelion Sol crée un trou noir qui attire et inflige des dégâts. Exécute les sbires sous un seuil.",
                    cooldown: "12/11.5/11/10.5/10s",
                    cost: "80/85/90/95/100 Mana",
                    damage: "10/15/20/25/30 (+5% AP) × stacks",
                    damageType: "magic",
                    details: "Centre: exécute sous 5% HP (+2.6% par 100 AP). Taille augmente avec Stardust."
                },
                R: {
                    name: "Falling Star / The Skies Descend",
                    icon: "☄️",
                    description: "R1: Impact d'étoile qui stun. À 75 Stardust: R2 disponible - énorme impact avec knock up.",
                    cooldown: "120/110/100s",
                    cost: "100 Mana",
                    damage: "R1: 150/250/350 (+65% AP) | R2: 187.5/312.5/437.5 (+75% AP)",
                    damageType: "magic",
                    details: "R1: Stun 1s. R2: Knock up 1s, zone massive, onde de choc."
                }
            }
        },
        {
            id: 13,
            name: "Aurora",
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
                description: "Les 3 premiers hits sur un champion libèrent leur esprit. Toucher l'esprit soigne Aurora et inflige des dégâts bonus.",
                cooldown: "10s par cible",
                details: "Soin: 5-150 + 25% AP. Dégâts bonus: 20-150 + 30% AP."
            },
            spells: {
                Q: {
                    name: "Twofold Hex",
                    icon: "✖️",
                    description: "Aurora envoie un curseur qui rebondit sur les ennemis. Réactiver pour rappeler et inflige des dégâts au retour.",
                    cooldown: "9/8/7/6/5s",
                    cost: "55/60/65/70/75 Mana",
                    damage: "60/90/120/150/180 (+50% AP) × 2 passages",
                    damageType: "magic",
                    details: "Slow: 20%. Rebondit jusqu'à 3 fois."
                },
                W: {
                    name: "Across the Veil",
                    icon: "🌫️",
                    description: "Aurora entre dans le Spirit Realm, devenant intangible brièvement puis gagnant MS.",
                    cooldown: "22/20/18/16/14s",
                    cost: "60 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Intangible: 0.5s. +50% MS décroissant sur 3s."
                },
                E: {
                    name: "The Weirding",
                    icon: "🦘",
                    description: "Aurora saute et crée un portail. Peut être réactivé pour teleporter au portail.",
                    cooldown: "15/14/13/12/11s",
                    cost: "75 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Portail dure 5s. Le portail peut être traversé par les alliés."
                },
                R: {
                    name: "Between Worlds",
                    icon: "🌀",
                    description: "Aurora crée une zone spectrale qui ralentit les ennemis à l'intérieur. Les ennemis qui essaient de sortir sont repoussés au centre.",
                    cooldown: "140/120/100s",
                    cost: "100 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Durée: 4s. Slow: 50%. Repousse vers le centre si tentative de sortie."
                }
            }
        },
        {
            id: 14,
            name: "Azir",
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
                description: "Azir peut invoquer le Disc of the Sun sur une tour détruite pour créer une tourelle solaire.",
                cooldown: "180s",
                details: "Tour: dure 60s, inflige des dégâts magiques aux ennemis."
            },
            spells: {
                Q: {
                    name: "Conquering Sands",
                    icon: "🏜️",
                    description: "Azir ordonne à ses soldats de charger, infligeant des dégâts et ralentissant.",
                    cooldown: "14/12/10/8/6s",
                    cost: "55 Mana",
                    damage: "70/90/110/130/150 (+55% AP)",
                    damageType: "magic",
                    details: "Slow: 25%. Repositionne les soldats."
                },
                W: {
                    name: "Arise!",
                    icon: "⚔️",
                    description: "Azir invoque un soldat de sable. Les attaques de base commandent aux soldats d'attaquer.",
                    cooldown: "1.5s (charges)",
                    cost: "40 Mana",
                    damage: "50-170 (+55% AP) par attaque de soldat",
                    damageType: "magic",
                    details: "2 charges max. Soldiers durent 10s. Les attaques percent."
                },
                E: {
                    name: "Shifting Sands",
                    icon: "💨",
                    description: "Azir dash vers un de ses soldats. Si un ennemi est touché, gagne un bouclier.",
                    cooldown: "19/18/17/16/15s",
                    cost: "60 Mana",
                    damage: "60/90/120/150/180 (+40% AP)",
                    damageType: "magic",
                    details: "Bouclier: 70/100/130/160/190 (+60% AP) pendant 1.5s si touche un champion."
                },
                R: {
                    name: "Emperor's Divide",
                    icon: "👑",
                    description: "Azir invoque un mur de soldats qui repousse les ennemis et reste en place.",
                    cooldown: "120/105/90s",
                    cost: "100 Mana",
                    damage: "175/325/475 (+60% AP)",
                    damageType: "magic",
                    details: "Le mur dure 3s et bloque les dashes ennemis (une fois par ennemi)."
                }
            }
        },
        // ===== B =====
        {
            id: 15,
            name: "Bard",
            role: "support",
            icon: "🎵",
            baseStats: {
                hp: 630, hpGrowth: 103, hpRegen: 5.5, hpRegenGrowth: 0.55,
                mana: 350, manaGrowth: 50, manaRegen: 6, manaRegenGrowth: 0.45,
                ad: 52, adGrowth: 3, as: 0.658, asGrowth: 2,
                armor: 34, armorGrowth: 5.2, mr: 30, mrGrowth: 1.3,
                ms: 330, range: 500
            },
            resource: "Mana",
            passive: {
                name: "Traveler's Call",
                icon: "🔔",
                description: "Bard collecte des Chimes sur la carte qui restaurent du mana, accordent de la MS et améliorent ses attaques.",
                cooldown: "Passif",
                details: "Meeps: +20 dégâts par 5 chimes. Effets additionnels à certains paliers."
            },
            spells: {
                Q: {
                    name: "Cosmic Binding",
                    icon: "⭐",
                    description: "Bard tire un projectile qui stun si touche 2 cibles ou 1 cible + mur.",
                    cooldown: "11/10/9/8/7s",
                    cost: "60 Mana",
                    damage: "80/125/170/215/260 (+65% AP)",
                    damageType: "magic",
                    details: "Stun: 1/1.2/1.4/1.6/1.8s. Slow: 60% si une seule cible."
                },
                W: {
                    name: "Caretaker's Shrine",
                    icon: "💚",
                    description: "Bard place un sanctuaire qui charge sur 10s. Les alliés qui marchent dessus sont soignés.",
                    cooldown: "14s",
                    cost: "70 Mana",
                    damage: "Soin: 30/60/90/120/150 (+60% AP) à pleine charge",
                    damageType: "utility",
                    details: "+30% MS pendant 1.5s. 3 sanctuaires max. Les ennemis peuvent les détruire."
                },
                E: {
                    name: "Magical Journey",
                    icon: "🚪",
                    description: "Bard ouvre un portail à travers le terrain. Alliés et ennemis peuvent l'emprunter.",
                    cooldown: "22/20/18/16/14s",
                    cost: "30 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Les alliés traversent plus vite que les ennemis. Dure 10s."
                },
                R: {
                    name: "Tempered Fate",
                    icon: "⏸️",
                    description: "Bard met en stase tous les champions, sbires, monstres et tourelles dans une zone.",
                    cooldown: "110/95/80s",
                    cost: "100 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Stase: 2.5s. Invulnérabilité et impossibilité d'agir."
                }
            }
        },
        {
            id: 16,
            name: "Bel'Veth",
            role: "fighter",
            icon: "🦑",
            baseStats: {
                hp: 610, hpGrowth: 99, hpRegen: 6, hpRegenGrowth: 0.5,
                mana: 60, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
                ad: 60, adGrowth: 1.5, as: 0.85, asGrowth: 0,
                armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
                ms: 340, range: 175
            },
            resource: "Aucun",
            passive: {
                name: "Death in Lavender",
                icon: "👁️",
                description: "Bel'Veth gagne de l'AS permanente en tuant des monstres/champions. Pas de cap d'AS.",
                cooldown: "Passif",
                details: "Large monsters: +0.25% AS. Champions/Rift Herald/Baron: +1% AS. Aucune limite max d'AS."
            },
            spells: {
                Q: {
                    name: "Void Surge",
                    icon: "💨",
                    description: "Bel'Veth dash dans 4 directions (un dash par direction). Reset partiel sur les champions.",
                    cooldown: "16/15/14/13/12s par direction",
                    cost: "Aucun",
                    damage: "10/15/20/25/30 (+110% AD)",
                    damageType: "physical",
                    details: "4 dashes disponibles: haut, bas, gauche, droite. Traverser un champion : -40% CD."
                },
                W: {
                    name: "Above and Below",
                    icon: "⬆️",
                    description: "Bel'Veth plonge puis frappe, knock up et ralentissant les ennemis.",
                    cooldown: "12/11/10/9/8s",
                    cost: "Aucun",
                    damage: "70/110/150/190/230 (+125% bonus AD)(+100% AP)",
                    damageType: "physical",
                    details: "Knock up: 0.75s. Slow: 25/30/35/40/45% pendant 1.5s."
                },
                E: {
                    name: "Royal Maelstrom",
                    icon: "🌀",
                    description: "Bel'Veth canalise, infligeant des dégâts et réduisant les dégâts subis. Le plus faible ennemi subit le plus de dégâts.",
                    cooldown: "22/20/18/16/14s",
                    cost: "Aucun",
                    damage: "8/9.5/11/12.5/14 (+6% bonus AD) × 6 ticks",
                    damageType: "physical",
                    details: "Réduction des dégâts: 20/22.5/25/27.5/30%. Lifesteal complet. Slow les ennemis."
                },
                R: {
                    name: "Endless Banquet",
                    icon: "👑",
                    description: "Passif: les champions/épiques morts génèrent un Void Coral. Actif: consomme le Coral pour se transformer.",
                    cooldown: "2s (consommation)",
                    cost: "Aucun",
                    damage: "Vraie forme: bonus HP, portée, Q reset, explosion lors de kills",
                    damageType: "buff",
                    details: "Transformation: +25/50/75 HP, +50 range. Durée: 60s (infini si de Rift Herald/Baron)."
                }
            }
        },
        {
            id: 17,
            name: "Blitzcrank",
            role: "support",
            icon: "🤖",
            baseStats: {
                hp: 633, hpGrowth: 109, hpRegen: 7.5, hpRegenGrowth: 0.75,
                mana: 267, manaGrowth: 40, manaRegen: 8.5, manaRegenGrowth: 0.8,
                ad: 62, adGrowth: 3.5, as: 0.65, asGrowth: 1.13,
                armor: 40, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
                ms: 325, range: 125
            },
            resource: "Mana",
            passive: {
                name: "Mana Barrier",
                icon: "🛡️",
                description: "Quand Blitzcrank tombe bas en PV, il gagne un bouclier basé sur son mana.",
                cooldown: "90s",
                details: "Bouclier: 30% du mana actuel. Durée: 10s."
            },
            spells: {
                Q: {
                    name: "Rocket Grab",
                    icon: "🦾",
                    description: "Blitzcrank lance son poing pour attraper le premier ennemi touché et le ramener à lui.",
                    cooldown: "20/19/18/17/16s",
                    cost: "100 Mana",
                    damage: "105/155/205/255/305 (+120% AP)",
                    damageType: "magic",
                    details: "Portée: 1115 unités. Stun bref à l'arrivée."
                },
                W: {
                    name: "Overdrive",
                    icon: "⚡",
                    description: "Blitzcrank s'accélère temporairement puis subit un ralentissement.",
                    cooldown: "15s",
                    cost: "75 Mana",
                    damage: "Aucun",
                    damageType: "buff",
                    details: "+70/75/80/85/90% MS et +30-62% AS pendant 5s. Self-slow 30% pendant 1.5s après."
                },
                E: {
                    name: "Power Fist",
                    icon: "👊",
                    description: "La prochaine attaque projette l'ennemi en l'air et inflige des dégâts bonus.",
                    cooldown: "9/8/7/6/5s",
                    cost: "25 Mana",
                    damage: "+175/225/275/325/375% AD total",
                    damageType: "physical",
                    details: "Knock up: 1s. Reset l'attaque auto."
                },
                R: {
                    name: "Static Field",
                    icon: "⚡",
                    description: "Passif: Éclairs périodiques. Actif: Explose en dégâts de zone et silence.",
                    cooldown: "60/40/20s",
                    cost: "100 Mana",
                    damage: "275/400/525 (+100% AP)",
                    damageType: "magic",
                    details: "Passif: 100/200/300 (+30% AP) dégâts toutes les 2.5s. Silence: 0.5s."
                }
            }
        },
        {
            id: 18,
            name: "Brand",
            role: "mage",
            icon: "🔥",
            baseStats: {
                hp: 570, hpGrowth: 104, hpRegen: 5.5, hpRegenGrowth: 0.55,
                mana: 469, manaGrowth: 21, manaRegen: 10.7, manaRegenGrowth: 0.4,
                ad: 57, adGrowth: 3, as: 0.681, asGrowth: 1.36,
                armor: 22, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
                ms: 340, range: 550
            },
            resource: "Mana",
            passive: {
                name: "Blaze",
                icon: "🌡️",
                description: "Les sorts appliquent Blaze (3 stacks = explosion). Les ennemis brûlent pour des dégâts sur 4s.",
                cooldown: "Passif",
                details: "Stack: 3% PV max sur 4s. Explosion (3 stacks): 10-14% PV max autour de la cible."
            },
            spells: {
                Q: {
                    name: "Sear",
                    icon: "🔥",
                    description: "Brand lance une boule de feu. Stun si la cible est déjà Blazed.",
                    cooldown: "8/7.5/7/6.5/6s",
                    cost: "50 Mana",
                    damage: "80/110/140/170/200 (+55% AP)",
                    damageType: "magic",
                    details: "Stun: 1.5s si cible Blazed."
                },
                W: {
                    name: "Pillar of Flame",
                    icon: "🏛️",
                    description: "Brand crée un pilier de feu après un délai. Dégâts bonus sur cibles Blazed.",
                    cooldown: "10/9.5/9/8.5/8s",
                    cost: "60/70/80/90/100 Mana",
                    damage: "75/120/165/210/255 (+60% AP)",
                    damageType: "magic",
                    details: "+25% dégâts sur cibles Blazed."
                },
                E: {
                    name: "Conflagration",
                    icon: "💥",
                    description: "Brand enflamme un ennemi. Se propage aux ennemis proches si la cible est Blazed.",
                    cooldown: "12/11/10/9/8s",
                    cost: "70/75/80/85/90 Mana",
                    damage: "70/95/120/145/170 (+45% AP)",
                    damageType: "magic",
                    details: "Propagation: tous les ennemis dans 375 unités si cible Blazed."
                },
                R: {
                    name: "Pyroclasm",
                    icon: "☄️",
                    description: "Brand lance une boule de feu qui rebondit entre les ennemis, priorisant les champions Blazed.",
                    cooldown: "105/90/75s",
                    cost: "100 Mana",
                    damage: "100/200/300 (+25% AP) par rebond",
                    damageType: "magic",
                    details: "5 rebonds. Slow: 30/40/50% sur champions Blazed."
                }
            }
        },
        {
            id: 19,
            name: "Braum",
            role: "support",
            icon: "🛡️",
            baseStats: {
                hp: 610, hpGrowth: 112, hpRegen: 8.5, hpRegenGrowth: 1,
                mana: 311, manaGrowth: 45, manaRegen: 6, manaRegenGrowth: 0.8,
                ad: 55, adGrowth: 3.2, as: 0.644, asGrowth: 3.5,
                armor: 47, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
                ms: 335, range: 125
            },
            resource: "Mana",
            passive: {
                name: "Concussive Blows",
                icon: "💥",
                description: "Les attaques de Braum appliquent des stacks. À 4 stacks, la cible est stunned.",
                cooldown: "8s par cible après stun",
                details: "Les alliés peuvent aussi appliquer des stacks (mais une seule). Stun: 1.25-1.75s."
            },
            spells: {
                Q: {
                    name: "Winter's Bite",
                    icon: "❄️",
                    description: "Braum lance de la glace qui slow et inflige des dégâts. Applique une stack.",
                    cooldown: "10/9/8/7/6s",
                    cost: "55/60/65/70/75 Mana",
                    damage: "75/125/175/225/275 (+2.5% Braum max HP)",
                    damageType: "magic",
                    details: "Slow: 70% pendant 2s."
                },
                W: {
                    name: "Stand Behind Me",
                    icon: "🛡️",
                    description: "Braum saute vers un allié, lui accordant de l'armor et MR.",
                    cooldown: "12/11/10/9/8s",
                    cost: "40 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Bonus armor/MR: 20/25/30/35/40 (+12% bonus armor/MR) pendant 3s."
                },
                E: {
                    name: "Unbreakable",
                    icon: "🚧",
                    description: "Braum lève son bouclier, interceptant tous les projectiles et réduisant les dégâts.",
                    cooldown: "18/16/14/12/10s",
                    cost: "30/35/40/45/50 Mana",
                    damage: "Aucun",
                    damageType: "utility",
                    details: "Première instance: bloquée. Autres: réduction 30/32.5/35/37.5/40%. +10% MS."
                },
                R: {
                    name: "Glacial Fissure",
                    icon: "🌊",
                    description: "Braum frappe le sol, créant une fissure qui knock up le premier champion et slow les autres.",
                    cooldown: "120/100/80s",
                    cost: "100 Mana",
                    damage: "150/300/450 (+60% AP)",
                    damageType: "magic",
                    details: "Premier champion: knock up 1-1.5s. Autres: slow 40/50/60%. Zone: slow 60%."
                }
            }
        },
        {
            id: 20,
            name: "Briar",
            role: "fighter",
            icon: "🩸",
            baseStats: {
                hp: 610, hpGrowth: 100, hpRegen: 0, hpRegenGrowth: 0,
                mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
                ad: 60, adGrowth: 3, as: 0.644, asGrowth: 2.5,
                armor: 30, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
                ms: 340, range: 125
            },
            resource: "Aucun",
            passive: {
                name: "Crimson Curse",
                icon: "🩸",
                description: "Briar n'a pas de regen HP. Elle se soigne via ses dégâts. Les soins excessifs deviennent un bouclier gris.",
                cooldown: "Passif",
                details: "Heal: 25% des dégâts infligés aux champions (50% pour sbires, capped). Le bouclier gris décroit rapidement."
            },
            spells: {
                Q: {
                    name: "Head Rush",
                    icon: "💥",
                    description: "Briar saute sur un ennemi, l'étourdissant et infligeant des dégâts.",
                    cooldown: "13/12/11/10/9s",
                    cost: "Aucun",
                    damage: "60/90/120/150/180 (+60% bonus AD)",
                    damageType: "physical",
                    details: "Stun: 0.85s. Armor reduction: 10/13/16/19/22% pendant 5s."
                },
                W: {
                    name: "Blood Frenzy / Snack Attack",
                    icon: "😈",
                    description: "Briar entre en frénésie, attaquant automatiquement l'ennemi le plus proche. Réactivable pour une morsure.",
                    cooldown: "16/15/14/13/12s",
                    cost: "Aucun",
                    damage: "Attaque enhanced + bonus AS/MS",
                    damageType: "physical",
                    details: "Frenzy: +50/60/70/80/90% AS, +25/30/35/40/45% MS. Morsure: heal + dégâts manquants."
                },
                E: {
                    name: "Chilling Scream",
                    icon: "😱",
                    description: "Briar charge un cri. Relacher inflige des dégâts et slow. Stoppe Blood Frenzy.",
                    cooldown: "14s",
                    cost: "Aucun",
                    damage: "20/50/80/110/140 (+100% bonus AD)",
                    damageType: "physical",
                    details: "Charge complete: knock back + slow 80%. Stoppe W immédiatement."
                },
                R: {
                    name: "Certain Death",
                    icon: "☠️",
                    description: "Briar se lance de manière incontrôlable vers une cible n'importe où sur la carte.",
                    cooldown: "120/100/80s",
                    cost: "Aucun",
                    damage: "150/300/450 (+75% bonus AD) à l'impact",
                    damageType: "physical",
                    details: "Portée globale. Frenzy améliorée: +10/15/20% lifesteal, armor/MR bonus. Dure jusqu'à mort de la cible ou Briar."
                }
            }
        }
    ]
};

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_DATABASE;
}
