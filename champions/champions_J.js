// ========================================
// CHAMPIONS - LETTRE J
// ========================================

const CHAMPIONS_J = [
    {
        id: 50,
        name: "Janna",
        title: "La Fureur de la Tempête",
        role: "support",
        icon: "🌪️",
        baseStats: {
            hp: 560, hpGrowth: 90, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 350, manaGrowth: 64, manaRegen: 11.5, manaRegenGrowth: 0.4,
            ad: 46, adGrowth: 1.5, as: 0.625, asGrowth: 2.61,
            armor: 28, armorGrowth: 4.4, mr: 30, mrGrowth: 1.3,
            ms: 315, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Tailwind",
            icon: "💨",
            description: "Se déplace plus vite vers alliés. Attaques magiques + bonus MS.",
            cooldown: "Passif",
            details: "+8% MS vers alliés. Attaques: 15-46 (+20% AP) + bonus."
        },
        spells: {
            Q: {
                name: "Howling Gale",
                icon: "🌪️",
                description: "Tornade qui charge. Plus longue = plus de dégâts et knock up.",
                cooldown: "12s",
                cost: "60/70/80/90/100 Mana",
                damage: "60/85/110/135/160 (+35% AP) à ×3",
                damageType: "magic",
                details: "Charge: jusqu'à 3s. Knock up: 0.5-1.25s."
            },
            W: {
                name: "Zephyr",
                icon: "🍃",
                description: "Passif: MS et traverse unités. Actif: dégâts + slow.",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "50/55/60/65/70 Mana",
                damage: "70/100/130/160/190 (+50% AP)",
                damageType: "magic",
                details: "Passif: 6-10% MS (perdu pendant CD). Slow: 24-40% 2s."
            },
            E: {
                name: "Eye of the Storm",
                icon: "🛡️",
                description: "Bouclier sur allié ou tour + AD bonus.",
                cooldown: "15/13.5/12/10.5/9s",
                cost: "70/80/90/100/110 Mana",
                damage: "Bouclier: 65/90/115/140/165 (+55% AP)",
                damageType: "utility",
                details: "Bouclier: 5s. Bonus AD: 10/17.5/25/32.5/40."
            },
            R: {
                name: "Monsoon",
                icon: "🌀",
                description: "Repousse ennemis et soigne alliés pendant canal.",
                cooldown: "150/135/120s",
                cost: "100 Mana",
                damage: "Heal: 100/150/200 (+40% AP)/s × 3s",
                damageType: "utility",
                details: "Knockback initial. Canal: jusqu'à 3s."
            }
        }
    },
    {
        id: 51,
        name: "Jarvan IV",
        title: "L'Exemple de Demacia",
        role: "fighter",
        icon: "👑",
        baseStats: {
            hp: 640, hpGrowth: 99, hpRegen: 8, hpRegenGrowth: 0.7,
            mana: 300, manaGrowth: 55, manaRegen: 6.5, manaRegenGrowth: 0.45,
            ad: 64, adGrowth: 3.4, as: 0.658, asGrowth: 2.5,
            armor: 36, armorGrowth: 4.8, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Martial Cadence",
            icon: "🗡️",
            description: "Première attaque sur champion = % PV actuel bonus.",
            cooldown: "6s par cible",
            details: "Dégâts: 6% PV actuel (min 20). Cap 400 vs monstres."
        },
        spells: {
            Q: {
                name: "Dragon Strike",
                icon: "🐉",
                description: "Coup de lance. Si touche E = pull vers drapeau.",
                cooldown: "10/9/8/7/6s",
                cost: "45/50/55/60/65 Mana",
                damage: "90/130/170/210/250 (+140% bonus AD)",
                damageType: "physical",
                details: "Réduit armor: 10-26% 3s. Combo E-Q = knock up."
            },
            W: {
                name: "Golden Aegis",
                icon: "🛡️",
                description: "Bouclier + slow autour.",
                cooldown: "9s",
                cost: "30 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Bouclier: 60-160 (+80% bonus AD) + 2-3.2% PV max/ennemi. Slow: 15-35%."
            },
            E: {
                name: "Demacian Standard",
                icon: "🚩",
                description: "Plante drapeau. Zone AS bonus. Q peut pull vers.",
                cooldown: "12s",
                cost: "55/60/65/70/75 Mana",
                damage: "80/120/160/200/240 (+80% AP)",
                damageType: "magic",
                details: "Drapeau: 8s. Aura: 15/17.5/20/22.5/25% AS."
            },
            R: {
                name: "Cataclysm",
                icon: "⭕",
                description: "Saute sur champion, crée arène de terrain.",
                cooldown: "120/105/90s",
                cost: "100 Mana",
                damage: "200/325/450 (+170% bonus AD)",
                damageType: "physical",
                details: "Arène: 3.5s. Peut réactiver pour annuler."
            }
        }
    },
    {
        id: 52,
        name: "Jax",
        title: "Le Grand Maître d'Armes",
        role: "fighter",
        icon: "🏮",
        baseStats: {
            hp: 665, hpGrowth: 100, hpRegen: 8.5, hpRegenGrowth: 0.55,
            mana: 339, manaGrowth: 52, manaRegen: 7.6, manaRegenGrowth: 0.7,
            ad: 68, adGrowth: 3.4, as: 0.666, asGrowth: 3.4,
            armor: 36, armorGrowth: 4.3, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Relentless Assault",
            icon: "⚡",
            description: "Attaques successives donnent AS bonus.",
            cooldown: "Passif",
            details: "+3.5-11% AS par stack (max 8). Plein: +28-88% AS."
        },
        spells: {
            Q: {
                name: "Leap Strike",
                icon: "💨",
                description: "Saute vers cible (alliée ou ennemie).",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "65 Mana",
                damage: "65/105/145/185/225 (+100% bonus AD)",
                damageType: "physical",
                details: "Peut cibler alliés/wards."
            },
            W: {
                name: "Empower",
                icon: "✨",
                description: "Prochaine attaque = dégâts magiques bonus.",
                cooldown: "7/6/5/4/3s",
                cost: "30 Mana",
                damage: "50/85/120/155/190 (+60% AP)",
                damageType: "magic",
                details: "Reset auto-attack."
            },
            E: {
                name: "Counter Strike",
                icon: "🛡️",
                description: "Esquive attaques puis stun zone.",
                cooldown: "14/12.5/11/9.5/8s",
                cost: "50/60/70/80/90 Mana",
                damage: "55/85/115/145/175 (+50% bonus AD)",
                damageType: "physical",
                details: "Durée: 2s. Stun: 1s. +20% dégâts par attaque esquivée."
            },
            R: {
                name: "Grandmaster's Might",
                icon: "👊",
                description: "Passif: chaque 3ème attaque = dégâts bonus. Actif: armor/MR.",
                cooldown: "80s",
                cost: "100 Mana",
                damage: "Passif: 100/140/180 (+70% AP)",
                damageType: "magic",
                details: "Armor: 30/50/70 (+50% bonus AD). MR: 30/50/70 (+20% AP). Durée: 8s."
            }
        }
    },
    {
        id: 53,
        name: "Jayce",
        title: "Le Défenseur de Demain",
        role: "fighter",
        icon: "⚡",
        baseStats: {
            hp: 590, hpGrowth: 95, hpRegen: 6, hpRegenGrowth: 0.6,
            mana: 375, manaGrowth: 45, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 57, adGrowth: 3.5, as: 0.658, asGrowth: 3,
            armor: 27, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Hextech Capacitor",
            icon: "⚡",
            description: "Changer de forme = MS bonus + traverse unités.",
            cooldown: "Passif",
            details: "+40 MS décroissant 1.25s. Ghosting."
        },
        spells: {
            Q: {
                name: "To The Skies! / Shock Blast",
                icon: "🔨",
                description: "Hammer: saute et slam. Cannon: projectile (accéléré par E).",
                cooldown: "16/14/12/10/8s",
                cost: "40/45/50/55/60 Mana",
                damage: "Hammer: 55-215 (+120% bonus AD) | Cannon: 55-255 (+120% bonus AD)",
                damageType: "physical",
                details: "Hammer: slow 30-50%. Cannon via gate: +40% dégâts/vitesse."
            },
            W: {
                name: "Lightning Field / Hyper Charge",
                icon: "⚡",
                description: "Hammer: aura dégâts. Cannon: 3 attaques rapides.",
                cooldown: "10s",
                cost: "40 Mana",
                damage: "Hammer: 100-300 (+100% AP) zone | Cannon: 70-130% AD × 3",
                damageType: "magic/physical",
                details: "Hammer: 4s durée. Cannon: AS max."
            },
            E: {
                name: "Thundering Blow / Acceleration Gate",
                icon: "🚀",
                description: "Hammer: knockback. Cannon: portail qui accélère.",
                cooldown: "Hammer: 20-12s | Cannon: 16s",
                cost: "40/50/60/70/80 | 50 Mana",
                damage: "Hammer: 8-20% PV max (+100% bonus AD)",
                damageType: "magic",
                details: "Gate: +30-50% MS 3s. Accélère Q."
            },
            R: {
                name: "Mercury Cannon / Mercury Hammer",
                icon: "🔄",
                description: "Change de forme. Chaque forme a bonus.",
                cooldown: "6s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Cannon: -5-25 armor/MR sur hit. Hammer: +5-35 armor/MR."
            }
        }
    },
    {
        id: 54,
        name: "Jhin",
        title: "Le Virtuose",
        role: "marksman",
        icon: "🎭",
        baseStats: {
            hp: 655, hpGrowth: 107, hpRegen: 3.75, hpRegenGrowth: 0.55,
            mana: 300, manaGrowth: 50, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 59, adGrowth: 4.7, as: 0.625, asGrowth: 0,
            armor: 24, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Whisper",
            icon: "🔫",
            description: "4 balles. 4ème = crit garanti + execute. AS → AD. Crits = MS.",
            cooldown: "Passif",
            details: "4ème balle: +15-25% PV manquants. AS convertie en AD. Crits: +10-30% MS."
        },
        spells: {
            Q: {
                name: "Dancing Grenade",
                icon: "💀",
                description: "Grenade qui rebondit 4 fois. +35% dégâts si tue.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "40/45/50/55/60 Mana",
                damage: "45/70/95/120/145 (+40/47.5/55/62.5/70% AD)(+60% AP)",
                damageType: "physical",
                details: "+35% par kill. Max ×2.3 dégâts base."
            },
            W: {
                name: "Deadly Flourish",
                icon: "🎯",
                description: "Tir longue portée. Root si cible récemment touchée.",
                cooldown: "12s",
                cost: "50/60/70/80/90 Mana",
                damage: "60/95/130/165/200 (+50% AD)",
                damageType: "physical",
                details: "Root: 0.75-1.75s si marked. 75% réduit vs sbires."
            },
            E: {
                name: "Captive Audience",
                icon: "🪤",
                description: "Place piège invisible. Slow puis explosion.",
                cooldown: "Recharge: 28-12s",
                cost: "30/35/40/45/50 Mana",
                damage: "20/80/140/200/260 (+100% AD)(+100% AP)",
                damageType: "magic",
                details: "2 charges. Slow: 35%. Bloom on kill crée piège."
            },
            R: {
                name: "Curtain Call",
                icon: "🎭",
                description: "4 tirs longue portée en cône. 4ème = dégâts doublés.",
                cooldown: "120/105/90s",
                cost: "100 Mana",
                damage: "64/154/244 (+25% AD) × 4 (4ème: ×2)",
                damageType: "physical",
                details: "Slow: 80%. Crit possible. Portée: 2500-3500."
            }
        }
    },
    {
        id: 55,
        name: "Jinx",
        title: "La Déglinguée",
        role: "marksman",
        icon: "💥",
        baseStats: {
            hp: 630, hpGrowth: 105, hpRegen: 3.75, hpRegenGrowth: 0.5,
            mana: 245, manaGrowth: 45, manaRegen: 6.7, manaRegenGrowth: 1,
            ad: 59, adGrowth: 3.4, as: 0.625, asGrowth: 1,
            armor: 26, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Get Excited!",
            icon: "🎉",
            description: "Takedown sur champion/structure/épique = MS + AS.",
            cooldown: "Passif",
            details: "+175% MS décroissant 6s. +25% AS total."
        },
        spells: {
            Q: {
                name: "Switcheroo!",
                icon: "🔫",
                description: "Bascule entre Pow-Pow (AS) et Fishbones (range + splash).",
                cooldown: "0.9s",
                cost: "16-4 Mana/attaque (Fishbones)",
                damage: "Fishbones: +10% AD splash",
                damageType: "physical",
                details: "Pow-Pow: +0-30% AS stack (×3). Fishbones: +75-175 range, splash, crits."
            },
            W: {
                name: "Zap!",
                icon: "⚡",
                description: "Tir électrique qui révèle et slow.",
                cooldown: "8/7/6/5/4s",
                cost: "50/60/70/80/90 Mana",
                damage: "10/60/110/160/210 (+160% AD)",
                damageType: "physical",
                details: "Slow: 30-70% 2s. Révèle cible."
            },
            E: {
                name: "Flame Chompers!",
                icon: "🔥",
                description: "Lance 3 pièges qui root après armer.",
                cooldown: "24/20.5/17/13.5/10s",
                cost: "70 Mana",
                damage: "70/120/170/220/270 (+100% AP)",
                damageType: "magic",
                details: "Arm: 0.7s. Root: 1.5s."
            },
            R: {
                name: "Super Mega Death Rocket!",
                icon: "🚀",
                description: "Rocket globale. Dégâts selon PV manquants cible.",
                cooldown: "90/75/60s",
                cost: "100 Mana",
                damage: "250/400/550 (+150% bonus AD) + 25/30/35% PV manquants",
                damageType: "physical",
                details: "Dégâts: 10-100% selon distance. Splash: 80%."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_J;
}
