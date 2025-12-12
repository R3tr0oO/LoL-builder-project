// ========================================
// CHAMPIONS - LETTRE C
// ========================================

const CHAMPIONS_C = [
    {
        id: 21,
        name: "Caitlyn",
        title: "La Shérif de Piltover",
        role: "marksman",
        icon: "🔫",
        baseStats: {
            hp: 580, hpGrowth: 107, hpRegen: 3.5, hpRegenGrowth: 0.55,
            mana: 315, manaGrowth: 35, manaRegen: 7.4, manaRegenGrowth: 0.55,
            ad: 60, adGrowth: 3.3, as: 0.681, asGrowth: 4,
            armor: 27, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 650
        },
        resource: "Mana",
        passive: {
            name: "Headshot",
            icon: "🎯",
            description: "Chaque quelques attaques = Headshot dégâts bonus. Buisson compte double.",
            cooldown: "Passif",
            details: "Headshot: +60-160% AD. ×2 sur piégés/ralentis par E."
        },
        spells: {
            Q: {
                name: "Piltover Peacemaker",
                icon: "💥",
                description: "Tir perforant. Cibles après première = moins de dégâts.",
                cooldown: "10/9/8/7/6s",
                cost: "50/60/70/80/90 Mana",
                damage: "50/90/130/170/210 (+130-170% AD)",
                damageType: "physical",
                details: "-50% dégâts après première cible."
            },
            W: {
                name: "Yordle Snap Trap",
                icon: "🪤",
                description: "Place piège qui root et révèle. Headshot garanti.",
                cooldown: "0.5s",
                cost: "20 Mana",
                damage: "60/105/150/195/240 (+40-100% bonus AD)",
                damageType: "physical",
                details: "Root: 1.5s. 5 pièges max."
            },
            E: {
                name: "90 Caliber Net",
                icon: "🕸️",
                description: "Tire filet, propulse en arrière, slow ennemi.",
                cooldown: "16/14/12/10/8s",
                cost: "75 Mana",
                damage: "70/110/150/190/230 (+80% AP)",
                damageType: "magic",
                details: "Slow: 50%. Headshot garanti."
            },
            R: {
                name: "Ace in the Hole",
                icon: "🎯",
                description: "Vise champion, tir dévastateur. Peut être bloqué.",
                cooldown: "90/75/60s",
                cost: "100 Mana",
                damage: "300/525/750 (+200% bonus AD)",
                damageType: "physical",
                details: "Canal: 1s. Bloquable."
            }
        }
    },
    {
        id: 22,
        name: "Camille",
        title: "L'Ombre d'Acier",
        role: "fighter",
        icon: "🦿",
        baseStats: {
            hp: 646, hpGrowth: 99, hpRegen: 8.5, hpRegenGrowth: 0.8,
            mana: 339, manaGrowth: 52, manaRegen: 8.2, manaRegenGrowth: 1,
            ad: 68, adGrowth: 3.8, as: 0.644, asGrowth: 2.5,
            armor: 35, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Adaptive Defenses",
            icon: "🛡️",
            description: "Attaques sur champions = bouclier selon type dégâts de la cible.",
            cooldown: "20-10s",
            details: "Bouclier: 20% PV max. Armor ou MR selon cible."
        },
        spells: {
            Q: {
                name: "Precision Protocol",
                icon: "⚔️",
                description: "Renforce attaque. Q2 = dégâts vrais.",
                cooldown: "9/8.25/7.5/6.75/6s",
                cost: "25 Mana",
                damage: "Q1: 20-40% AD bonus | Q2: même + 40-100% vrais",
                damageType: "physical/true",
                details: "Q2 après 1.5s. 100% dégâts bonus en vrais."
            },
            W: {
                name: "Tactical Sweep",
                icon: "🔪",
                description: "Balaye devant. Bord = % PV max + slow + heal.",
                cooldown: "17/15.5/14/12.5/11s",
                cost: "50/55/60/65/70 Mana",
                damage: "Intérieur: 65-185 (+60% bonus AD) | Bord: +6-10% PV max",
                damageType: "physical",
                details: "Bord: slow 80%, heal 100% dégâts bonus."
            },
            E: {
                name: "Hookshot",
                icon: "🪝",
                description: "S'accroche au mur puis dash. Stun et AS si champion.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "70 Mana",
                damage: "60/95/130/165/200 (+75% bonus AD)",
                damageType: "physical",
                details: "Stun: 0.75s. +40-80% AS 5s."
            },
            R: {
                name: "The Hextech Ultimatum",
                icon: "⬡",
                description: "Emprisonne champion dans zone hexagonale.",
                cooldown: "140/115/90s",
                cost: "100 Mana",
                damage: "5/10/15 (+4% bonus AD)% PV actuel",
                damageType: "magic",
                details: "Durée: 2.5-4s. Intouchable pendant dash."
            }
        }
    },
    {
        id: 23,
        name: "Cassiopeia",
        title: "L'Étreinte du Serpent",
        role: "mage",
        icon: "🐍",
        baseStats: {
            hp: 630, hpGrowth: 104, hpRegen: 5.5, hpRegenGrowth: 0.5,
            mana: 350, manaGrowth: 60, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 3, as: 0.647, asGrowth: 1.5,
            armor: 18, armorGrowth: 4.7, mr: 32, mrGrowth: 1.3,
            ms: 328, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Serpentine Grace",
            icon: "👢",
            description: "Ne peut pas acheter bottes mais gagne MS par niveau.",
            cooldown: "Passif",
            details: "+4 MS par niveau. Total: +4-72 MS."
        },
        spells: {
            Q: {
                name: "Noxious Blast",
                icon: "☠️",
                description: "Crache poison après délai. MS si touche champion.",
                cooldown: "3.5s",
                cost: "50/55/60/65/70 Mana",
                damage: "75/110/145/180/215 (+90% AP) sur 3s",
                damageType: "magic",
                details: "+30-50% MS 3s si champion."
            },
            W: {
                name: "Miasma",
                icon: "🌫️",
                description: "Nuage de poison, grounded et slow.",
                cooldown: "24/22/20/18/16s",
                cost: "70/80/90/100/110 Mana",
                damage: "20/25/30/35/40 (+15% AP)/s",
                damageType: "magic",
                details: "Durée: 5s. Grounded. Slow: 40-80%."
            },
            E: {
                name: "Twin Fang",
                icon: "🐍",
                description: "Mord ennemi. Si empoisonné = reset CD + bonus + heal.",
                cooldown: "0.75s",
                cost: "50 Mana (-10 si empoisonné)",
                damage: "52-116 (+10% AP) | +20-48 (+15% AP) si empoisonné",
                damageType: "magic",
                details: "Soin: 75% dégâts bonus vs champions empoisonnés."
            },
            R: {
                name: "Petrifying Gaze",
                icon: "👁️",
                description: "Pétrifie (stun) ceux face à elle, slow ceux de dos.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/250/350 (+50% AP)",
                damageType: "magic",
                details: "Face: stun 2s. Dos: slow 40% 2s."
            }
        }
    },
    {
        id: 24,
        name: "Cho'Gath",
        title: "La Terreur du Néant",
        role: "tank",
        icon: "👾",
        baseStats: {
            hp: 644, hpGrowth: 94, hpRegen: 9, hpRegenGrowth: 0.85,
            mana: 270, manaGrowth: 60, manaRegen: 7.2, manaRegenGrowth: 0.45,
            ad: 69, adGrowth: 4.2, as: 0.625, asGrowth: 1.44,
            armor: 38, armorGrowth: 5, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Carnivore",
            icon: "🍖",
            description: "Tuer unité restaure PV et mana.",
            cooldown: "Passif",
            details: "Heal: 20-71 + 3.5% PV max. Mana: 5 + 1% max."
        },
        spells: {
            Q: {
                name: "Rupture",
                icon: "🌋",
                description: "Explosion du sol après délai, knock up et slow.",
                cooldown: "6s",
                cost: "60 Mana",
                damage: "80/135/190/245/300 (+100% AP)",
                damageType: "magic",
                details: "Knock up: 1s. Slow: 60% 1.5s."
            },
            W: {
                name: "Feral Scream",
                icon: "📢",
                description: "Cri qui inflige dégâts et silence.",
                cooldown: "13/12/11/10/9s",
                cost: "70/75/80/85/90 Mana",
                damage: "80/140/200/260/320 (+70% AP)",
                damageType: "magic",
                details: "Silence: 1.6-2s."
            },
            E: {
                name: "Vorpal Spikes",
                icon: "🦔",
                description: "Attaques lancent épines zone + slow.",
                cooldown: "8/7/6/5/4s",
                cost: "30 Mana",
                damage: "22/34/46/58/70 (+3% (+0.5%/stack Feast) PV max)",
                damageType: "magic",
                details: "Slow: 30-50% 1.5s. 3 attaques empowered."
            },
            R: {
                name: "Feast",
                icon: "😋",
                description: "Dévore ennemi, dégâts vrais. Si tue = PV permanents.",
                cooldown: "80s",
                cost: "100 Mana",
                damage: "300/475/650 (+50% AP)(+10% bonus HP)",
                damageType: "true",
                details: "+80/120/160 PV permanents. 6 max sur non-champs, illimité sur champs."
            }
        }
    },
    {
        id: 25,
        name: "Corki",
        title: "Le Pilote Audacieux",
        role: "marksman",
        icon: "✈️",
        baseStats: {
            hp: 610, hpGrowth: 100, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 350, manaGrowth: 54, manaRegen: 7.4, manaRegenGrowth: 0.55,
            ad: 52, adGrowth: 2.5, as: 0.644, asGrowth: 2.3,
            armor: 28, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Hextech Munitions",
            icon: "🔥",
            description: "Attaques: 80% magiques + 20% physiques. Package disponible.",
            cooldown: "Package: 240s",
            details: "Package: à 8 min puis toutes 4 min. Mega-dash + dégâts + zone brûlure."
        },
        spells: {
            Q: {
                name: "Phosphorus Bomb",
                icon: "💣",
                description: "Lance bombe qui révèle zone.",
                cooldown: "8s",
                cost: "60/70/80/90/100 Mana",
                damage: "75/120/165/210/255 (+50% bonus AD)(+70% AP)",
                damageType: "magic",
                details: "Révèle 6s."
            },
            W: {
                name: "Valkyrie",
                icon: "💨",
                description: "Vole en laissant traînée de feu.",
                cooldown: "26/23/20/17/14s",
                cost: "100 Mana",
                damage: "60/90/120/150/180 (+40% AP) total",
                damageType: "magic",
                details: "Dash: 600. Package: 1800, knock aside, traînée massive."
            },
            E: {
                name: "Gatling Gun",
                icon: "🔫",
                description: "Tire devant 4s, réduit armor/MR.",
                cooldown: "16s",
                cost: "50 Mana",
                damage: "7.5/10.5/13.5/16.5/19.5 (+10% bonus AD) × 8",
                damageType: "mixed",
                details: "Réduction: 1-3 × 8 (max 8-24)."
            },
            R: {
                name: "Missile Barrage",
                icon: "🚀",
                description: "Tire missile. Chaque 3ème = Big One.",
                cooldown: "2s (recharge)",
                cost: "20 Mana",
                damage: "90/125/160 (+15-75% AD)(+20% AP) | Big One: ×3",
                damageType: "magic",
                details: "7 charges. Recharge: 12-10s."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_C;
}
