// ========================================
// CHAMPIONS - LETTRE D
// ========================================

const CHAMPIONS_D = [
    {
        id: 26,
        name: "Darius",
        title: "La Main de Noxus",
        role: "fighter",
        icon: "🪓",
        baseStats: {
            hp: 652, hpGrowth: 114, hpRegen: 10, hpRegenGrowth: 0.95,
            mana: 263, manaGrowth: 57.5, manaRegen: 6.6, manaRegenGrowth: 0.35,
            ad: 64, adGrowth: 5, as: 0.625, asGrowth: 1,
            armor: 39, armorGrowth: 4.4, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Hemorrhage",
            icon: "🩸",
            description: "Dégâts physiques appliquent Bleed (5 max). À 5 = Noxian Might.",
            cooldown: "Passif",
            details: "Bleed: 13-35 (+30% bonus AD)/stack sur 5s. Noxian Might: +30-230 AD."
        },
        spells: {
            Q: {
                name: "Decimate",
                icon: "🪓",
                description: "Tournoie hache. Bord = +50% dégâts + heal.",
                cooldown: "9/8/7/6/5s",
                cost: "30/35/40/45/50 Mana",
                damage: "50/80/110/140/170 (+100-140% AD) | Bord: +50%",
                damageType: "physical",
                details: "Heal: 15-45% PV manquants (max 3 champs). Applique 1 stack."
            },
            W: {
                name: "Crippling Strike",
                icon: "💪",
                description: "Prochaine attaque slow et dégâts bonus.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "40 Mana",
                damage: "140/145/150/155/160% AD total",
                damageType: "physical",
                details: "Slow: 90% 1s. Reset si tue."
            },
            E: {
                name: "Apprehend",
                icon: "🪝",
                description: "Attrape ennemis devant. Passif: % armor pen.",
                cooldown: "24/21/18/15/12s",
                cost: "45 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Pull + slow 40% 1s. Passif: 15-35% armor pen."
            },
            R: {
                name: "Noxian Guillotine",
                icon: "⚔️",
                description: "Exécute en dégâts vrais. Reset si tue.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "125/250/375 (+75% bonus AD)",
                damageType: "true",
                details: "+20% par stack Hemorrhage (max +100%). Reset complet si tue."
            }
        }
    },
    {
        id: 27,
        name: "Diana",
        title: "Le Dédain de la Lune",
        role: "assassin",
        icon: "🌙",
        baseStats: {
            hp: 640, hpGrowth: 109, hpRegen: 6.5, hpRegenGrowth: 0.85,
            mana: 375, manaGrowth: 25, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 57, adGrowth: 3, as: 0.625, asGrowth: 2.25,
            armor: 31, armorGrowth: 4.3, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Moonsilver Blade",
            icon: "🌙",
            description: "Chaque 3ème attaque frappe en zone, dégâts magiques bonus.",
            cooldown: "Passif",
            details: "Dégâts: 20-250 (+40% AP). +15-40% AS."
        },
        spells: {
            Q: {
                name: "Crescent Strike",
                icon: "🌙",
                description: "Arc de lumière qui marque ennemis.",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "50 Mana",
                damage: "60/95/130/165/200 (+70% AP)",
                damageType: "magic",
                details: "Marque Moonlight: 3s."
            },
            W: {
                name: "Pale Cascade",
                icon: "🛡️",
                description: "Orbes qui explosent + bouclier.",
                cooldown: "15/13.5/12/10.5/9s",
                cost: "40/45/50/55/60 Mana",
                damage: "18/30/42/54/66 (+15% AP) × 3",
                damageType: "magic",
                details: "Bouclier: 30-90 (+25% AP). Refresh si 3 orbes explosent."
            },
            E: {
                name: "Lunar Rush",
                icon: "💨",
                description: "Dash vers ennemi. Reset si cible marquée.",
                cooldown: "22/20/18/16/14s",
                cost: "40/45/50/55/60 Mana",
                damage: "50/70/90/110/130 (+50% AP)",
                damageType: "magic",
                details: "Reset CD si cible marquée."
            },
            R: {
                name: "Moonfall",
                icon: "🌑",
                description: "Tire ennemis vers elle puis frappe avec la lune.",
                cooldown: "100/90/80s",
                cost: "100 Mana",
                damage: "200/300/400 (+60% AP)",
                damageType: "magic",
                details: "Pull: 225. Slow: 40-60%. +35%/champion supplémentaire."
            }
        }
    },
    {
        id: 28,
        name: "Dr. Mundo",
        title: "Le Fou de Zaun",
        role: "tank",
        icon: "💉",
        baseStats: {
            hp: 653, hpGrowth: 103, hpRegen: 6.5, hpRegenGrowth: 0.55,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 61, adGrowth: 4.2, as: 0.67, asGrowth: 2.8,
            armor: 36, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Health",
        passive: {
            name: "Goes Where He Pleases",
            icon: "💪",
            description: "Regen PV + repousse premier CC immobilisant.",
            cooldown: "60-15s",
            details: "Récupère 7% PV perdus. CC rejeté = perd PV + récupère canister (8% PV max)."
        },
        spells: {
            Q: {
                name: "Infected Bonesaw",
                icon: "🔪",
                description: "Lance couperet, % PV et slow.",
                cooldown: "4s",
                cost: "50/55/60/65/70 PV",
                damage: "80/130/180/230/280 + 20-30% PV actuel cible",
                damageType: "magic",
                details: "Slow: 40% 2s. Heal 50% coût si touche."
            },
            W: {
                name: "Heart Zapper",
                icon: "⚡",
                description: "Stocke dégâts subis. Relâcher = dégâts + heal.",
                cooldown: "17/16.5/16/15.5/15s",
                cost: "5% PV actuel",
                damage: "5/10/15/20/25 (+7% bonus HP) + stockés",
                damageType: "magic",
                details: "Soin: 50-90% stockés si champion. Dure 4s."
            },
            E: {
                name: "Blunt Force Trauma",
                icon: "👊",
                description: "Passif: AD bonus. Actif: prochaine attaque bonus.",
                cooldown: "9/8.25/7.5/6.75/6s",
                cost: "10/15/20/25/30 PV",
                damage: "2-3% PV max + 3-5% par 100 PV manquants",
                damageType: "physical",
                details: "Passif: +15-35 AD + 25-45% AD (PV manquants)."
            },
            R: {
                name: "Maximum Dosage",
                icon: "💊",
                description: "Se soigne % PV max sur durée, AD et MS.",
                cooldown: "120s",
                cost: "25% PV actuel",
                damage: "Aucun",
                damageType: "buff",
                details: "Heal: 20/40/60% PV manquants sur 10s. +4-7% PV max en AD. +15-25% MS."
            }
        }
    },
    {
        id: 29,
        name: "Draven",
        title: "Le Glorieux Exécuteur",
        role: "marksman",
        icon: "🪓",
        baseStats: {
            hp: 675, hpGrowth: 104, hpRegen: 3.75, hpRegenGrowth: 0.7,
            mana: 361, manaGrowth: 39, manaRegen: 8.05, manaRegenGrowth: 0.65,
            ad: 62, adGrowth: 3.6, as: 0.679, asGrowth: 2.7,
            armor: 29, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "League of Draven",
            icon: "👑",
            description: "Gagne Adoration en attrapant axes/tuant. Kills = or bonus.",
            cooldown: "Passif",
            details: "Or: 50 + (2 × stacks). Perd 75% stacks à la mort."
        },
        spells: {
            Q: {
                name: "Spinning Axe",
                icon: "🪓",
                description: "Prochaine attaque = hache tournoyante. Attraper recharge.",
                cooldown: "12/11/10/9/8s",
                cost: "45 Mana",
                damage: "40/45/50/55/60 (+75-115% bonus AD)",
                damageType: "physical",
                details: "Rebondit vers zone proche. 2 axes actives max."
            },
            W: {
                name: "Blood Rush",
                icon: "💨",
                description: "Gagne MS et AS temporairement.",
                cooldown: "12s",
                cost: "40/35/30/25/20 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+40-60% AS 3s. +50-70% MS décroissant 1.5s. Reset si axe attrapée."
            },
            E: {
                name: "Stand Aside",
                icon: "↔️",
                description: "Lance haches sur côtés, knockback et slow.",
                cooldown: "18/17/16/15/14s",
                cost: "70 Mana",
                damage: "75/110/145/180/215 (+50% bonus AD)",
                damageType: "physical",
                details: "Knockback + slow 20-40% 2s."
            },
            R: {
                name: "Whirling Death",
                icon: "🌀",
                description: "Lance deux haches globales qui reviennent.",
                cooldown: "100/90/80s",
                cost: "100 Mana",
                damage: "175/275/375 (+110% bonus AD) × 2",
                damageType: "physical",
                details: "Réactivable pour retour. -8%/cible (min 40%)."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_D;
}
