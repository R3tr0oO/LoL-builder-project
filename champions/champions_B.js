// ========================================
// CHAMPIONS - LETTRE B
// ========================================

const CHAMPIONS_B = [
    {
        id: 15,
        name: "Bard",
        title: "Le Gardien Errant",
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
            description: "Bard collecte des Chimes sur la carte qui restaurent mana, MS et améliorent ses attaques.",
            cooldown: "Passif",
            details: "Meeps: +20 dégâts par 5 chimes. Effets additionnels à certains paliers."
        },
        spells: {
            Q: {
                name: "Cosmic Binding",
                icon: "⭐",
                description: "Projectile qui stun si touche 2 cibles ou 1 cible + mur.",
                cooldown: "11/10/9/8/7s",
                cost: "60 Mana",
                damage: "80/125/170/215/260 (+65% AP)",
                damageType: "magic",
                details: "Stun: 1-1.8s. Slow 60% si une cible."
            },
            W: {
                name: "Caretaker's Shrine",
                icon: "💚",
                description: "Place sanctuaire qui charge. Alliés sont soignés.",
                cooldown: "14s",
                cost: "70 Mana",
                damage: "Soin: 30/60/90/120/150 (+60% AP)",
                damageType: "utility",
                details: "+30% MS 1.5s. 3 max. Ennemis peuvent détruire."
            },
            E: {
                name: "Magical Journey",
                icon: "🚪",
                description: "Ouvre portail à travers terrain.",
                cooldown: "22/20/18/16/14s",
                cost: "30 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Alliés traversent plus vite. Dure 10s."
            },
            R: {
                name: "Tempered Fate",
                icon: "⏸️",
                description: "Met en stase tout dans une zone.",
                cooldown: "110/95/80s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Stase: 2.5s. Invulnérabilité totale."
            }
        }
    },
    {
        id: 16,
        name: "Bel'Veth",
        title: "L'Impératrice du Néant",
        role: "fighter",
        icon: "🦑",
        baseStats: {
            hp: 610, hpGrowth: 99, hpRegen: 6, hpRegenGrowth: 0.5,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 60, adGrowth: 1.5, as: 0.85, asGrowth: 0,
            armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Aucun",
        passive: {
            name: "Death in Lavender",
            icon: "👁️",
            description: "Gagne AS permanente en tuant. Pas de cap d'AS.",
            cooldown: "Passif",
            details: "Monstres: +0.25% AS. Champions/Herald/Baron: +1% AS. Aucune limite."
        },
        spells: {
            Q: {
                name: "Void Surge",
                icon: "💨",
                description: "Dash dans 4 directions (un par direction).",
                cooldown: "16/15/14/13/12s par direction",
                cost: "Aucun",
                damage: "10/15/20/25/30 (+110% AD)",
                damageType: "physical",
                details: "4 dashes: haut, bas, gauche, droite. -40% CD si traverse champion."
            },
            W: {
                name: "Above and Below",
                icon: "⬆️",
                description: "Plonge puis frappe, knock up et slow.",
                cooldown: "12/11/10/9/8s",
                cost: "Aucun",
                damage: "70/110/150/190/230 (+125% bonus AD)(+100% AP)",
                damageType: "physical",
                details: "Knock up: 0.75s. Slow: 25-45%."
            },
            E: {
                name: "Royal Maelstrom",
                icon: "🌀",
                description: "Canalise dégâts et réduit dégâts subis.",
                cooldown: "22/20/18/16/14s",
                cost: "Aucun",
                damage: "8/9.5/11/12.5/14 (+6% bonus AD) × 6",
                damageType: "physical",
                details: "Réduction: 20-30%. Lifesteal complet."
            },
            R: {
                name: "Endless Banquet",
                icon: "👑",
                description: "Consomme Void Coral pour se transformer.",
                cooldown: "2s",
                cost: "Aucun",
                damage: "Vraie forme: bonus stats",
                damageType: "buff",
                details: "Transform: +25-75 HP, +50 range. 60s (infini si Herald/Baron)."
            }
        }
    },
    {
        id: 17,
        name: "Blitzcrank",
        title: "Le Grand Golem de Vapeur",
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
            description: "Quand bas en PV, gagne bouclier basé sur mana.",
            cooldown: "90s",
            details: "Bouclier: 30% mana actuel. Durée: 10s."
        },
        spells: {
            Q: {
                name: "Rocket Grab",
                icon: "🦾",
                description: "Lance son poing pour attraper le premier ennemi.",
                cooldown: "20/19/18/17/16s",
                cost: "100 Mana",
                damage: "105/155/205/255/305 (+120% AP)",
                damageType: "magic",
                details: "Portée: 1115. Stun bref à l'arrivée."
            },
            W: {
                name: "Overdrive",
                icon: "⚡",
                description: "S'accélère temporairement puis self-slow.",
                cooldown: "15s",
                cost: "75 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+70-90% MS, +30-62% AS 5s. Self-slow 30% après."
            },
            E: {
                name: "Power Fist",
                icon: "👊",
                description: "Prochaine attaque knock up et dégâts bonus.",
                cooldown: "9/8/7/6/5s",
                cost: "25 Mana",
                damage: "+175/225/275/325/375% AD",
                damageType: "physical",
                details: "Knock up: 1s. Reset auto."
            },
            R: {
                name: "Static Field",
                icon: "⚡",
                description: "Passif: éclairs périodiques. Actif: explosion + silence.",
                cooldown: "60/40/20s",
                cost: "100 Mana",
                damage: "275/400/525 (+100% AP)",
                damageType: "magic",
                details: "Passif: 100-300 (+30% AP)/2.5s. Silence: 0.5s."
            }
        }
    },
    {
        id: 18,
        name: "Brand",
        title: "La Vengeance Ardente",
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
            description: "Sorts appliquent Blaze. 3 stacks = explosion.",
            cooldown: "Passif",
            details: "Stack: 3% PV max/4s. Explosion: 10-14% PV max zone."
        },
        spells: {
            Q: {
                name: "Sear",
                icon: "🔥",
                description: "Boule de feu. Stun si cible Blazed.",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "50 Mana",
                damage: "80/110/140/170/200 (+55% AP)",
                damageType: "magic",
                details: "Stun: 1.5s si Blazed."
            },
            W: {
                name: "Pillar of Flame",
                icon: "🏛️",
                description: "Pilier de feu après délai. Bonus sur Blazed.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "60/70/80/90/100 Mana",
                damage: "75/120/165/210/255 (+60% AP)",
                damageType: "magic",
                details: "+25% dégâts sur Blazed."
            },
            E: {
                name: "Conflagration",
                icon: "💥",
                description: "Enflamme ennemi. Propage si Blazed.",
                cooldown: "12/11/10/9/8s",
                cost: "70/75/80/85/90 Mana",
                damage: "70/95/120/145/170 (+45% AP)",
                damageType: "magic",
                details: "Propagation: 375 unités si Blazed."
            },
            R: {
                name: "Pyroclasm",
                icon: "☄️",
                description: "Boule de feu qui rebondit, priorise Blazed.",
                cooldown: "105/90/75s",
                cost: "100 Mana",
                damage: "100/200/300 (+25% AP) × 5",
                damageType: "magic",
                details: "5 rebonds. Slow 30-50% sur Blazed."
            }
        }
    },
    {
        id: 19,
        name: "Braum",
        title: "Le Cœur de Freljord",
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
            description: "Attaques appliquent stacks. 4 stacks = stun.",
            cooldown: "8s par cible après stun",
            details: "Alliés appliquent 1 stack. Stun: 1.25-1.75s."
        },
        spells: {
            Q: {
                name: "Winter's Bite",
                icon: "❄️",
                description: "Lance glace qui slow et applique stack.",
                cooldown: "10/9/8/7/6s",
                cost: "55/60/65/70/75 Mana",
                damage: "75/125/175/225/275 (+2.5% max HP)",
                damageType: "magic",
                details: "Slow: 70% 2s."
            },
            W: {
                name: "Stand Behind Me",
                icon: "🛡️",
                description: "Saute vers allié, bonus armor/MR.",
                cooldown: "12/11/10/9/8s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Bonus: 20-40 (+12% bonus) armor/MR 3s."
            },
            E: {
                name: "Unbreakable",
                icon: "🚧",
                description: "Lève bouclier, intercepte projectiles.",
                cooldown: "18/16/14/12/10s",
                cost: "30/35/40/45/50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "1ère instance bloquée. Autres: -30-40%. +10% MS."
            },
            R: {
                name: "Glacial Fissure",
                icon: "🌊",
                description: "Frappe sol, knock up premier champion, slow autres.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/300/450 (+60% AP)",
                damageType: "magic",
                details: "Premier: knock up 1-1.5s. Autres: slow 40-60%."
            }
        }
    },
    {
        id: 20,
        name: "Briar",
        title: "La Faim Affamée",
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
            description: "Pas de regen. Se soigne via dégâts. Soin excédent = bouclier gris.",
            cooldown: "Passif",
            details: "Heal: 25% dégâts vs champions. Bouclier décroît vite."
        },
        spells: {
            Q: {
                name: "Head Rush",
                icon: "💥",
                description: "Saute sur ennemi, stun et dégâts.",
                cooldown: "13/12/11/10/9s",
                cost: "Aucun",
                damage: "60/90/120/150/180 (+60% bonus AD)",
                damageType: "physical",
                details: "Stun: 0.85s. Armor reduction: 10-22% 5s."
            },
            W: {
                name: "Blood Frenzy / Snack Attack",
                icon: "😈",
                description: "Frénésie auto-attaque. Réactivable pour morsure.",
                cooldown: "16/15/14/13/12s",
                cost: "Aucun",
                damage: "Attaque enhanced",
                damageType: "physical",
                details: "+50-90% AS, +25-45% MS. Morsure: heal + dégâts manquants."
            },
            E: {
                name: "Chilling Scream",
                icon: "😱",
                description: "Charge un cri. Relâcher = dégâts et slow.",
                cooldown: "14s",
                cost: "Aucun",
                damage: "20/50/80/110/140 (+100% bonus AD)",
                damageType: "physical",
                details: "Charge complète: knock back + slow 80%. Stoppe W."
            },
            R: {
                name: "Certain Death",
                icon: "☠️",
                description: "Se lance de manière incontrôlable vers cible globale.",
                cooldown: "120/100/80s",
                cost: "Aucun",
                damage: "150/300/450 (+75% bonus AD)",
                damageType: "physical",
                details: "Portée globale. Frenzy améliorée: +10-20% lifesteal."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_B;
}
