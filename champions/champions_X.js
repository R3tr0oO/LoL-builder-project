// ========================================
// CHAMPIONS - LETTRE X
// ========================================

const CHAMPIONS_X = [
    {
        id: 156,
        name: "Xayah",
        title: "La Rebelle",
        role: "marksman",
        icon: "🪶",
        baseStats: {
            hp: 630, hpGrowth: 102, hpRegen: 3.25, hpRegenGrowth: 0.55,
            mana: 340, manaGrowth: 40, manaRegen: 8.25, manaRegenGrowth: 0.75,
            ad: 60, adGrowth: 3.5, as: 0.625, asGrowth: 3.3,
            armor: 25, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Clean Cuts",
            icon: "🪶",
            description: "Après sort, attaques lancent plumes qui restent au sol.",
            cooldown: "Passif",
            details: "Plumes: jusqu'à 5 par sort. Restent 6s. E rappelle."
        },
        spells: {
            Q: {
                name: "Double Daggers",
                icon: "🗡️",
                description: "Lance 2 dagues qui laissent plumes.",
                cooldown: "10/9/8/7/6s",
                cost: "50 Mana",
                damage: "50/75/100/125/150 (+50% bonus AD) par dague",
                damageType: "physical",
                details: "Traverse. 2 plumes. Peut crit."
            },
            W: {
                name: "Deadly Plumage",
                icon: "💨",
                description: "Gagne AS + MS. Si Rakan nearby, lui aussi.",
                cooldown: "20/19/18/17/16s",
                cost: "60/65/70/75/80 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+35-55% AS, +30% MS 4s. Attacks: +20% dégâts."
            },
            E: {
                name: "Bladecaller",
                icon: "🪶",
                description: "Rappelle toutes plumes. Dégâts par plume.",
                cooldown: "12/11/10/9/8s",
                cost: "40 Mana",
                damage: "55/65/75/85/95 (+60% bonus AD) par plume",
                damageType: "physical",
                details: "3+ plumes = root 1.25s. -5% dégâts par plume supplémentaire (min 50%)."
            },
            R: {
                name: "Featherstorm",
                icon: "🌪️",
                description: "Saute, untargetable, puis lance plumes en cône.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "200/300/400 (+100% bonus AD)",
                damageType: "physical",
                details: "Untargetable: 1.5s. Laisse 5 plumes."
            }
        }
    },
    {
        id: 157,
        name: "Xerath",
        title: "Le Magus Ascendant",
        role: "mage",
        icon: "⚡",
        baseStats: {
            hp: 586, hpGrowth: 106, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 459, manaGrowth: 22, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3, as: 0.625, asGrowth: 1.36,
            armor: 22, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Mana Surge",
            icon: "💧",
            description: "Attaques sur champions restore mana.",
            cooldown: "12s",
            details: "Restore: 30-195 mana."
        },
        spells: {
            Q: {
                name: "Arcanopulse",
                icon: "⚡",
                description: "Charge ligne. Plus long = plus de range.",
                cooldown: "9/8/7/6/5s",
                cost: "80/90/100/110/120 Mana",
                damage: "70/110/150/190/230 (+85% AP)",
                damageType: "magic",
                details: "Range: 735-1450. Slow self pendant charge."
            },
            W: {
                name: "Eye of Destruction",
                icon: "👁️",
                description: "Zone qui slow. Centre = bonus dégâts.",
                cooldown: "14/13/12/11/10s",
                cost: "70/80/90/100/110 Mana",
                damage: "60/90/120/150/180 (+60% AP)",
                damageType: "magic",
                details: "Slow: 25%. Centre: +66.7% dégâts, +50% slow."
            },
            E: {
                name: "Shocking Orb",
                icon: "💫",
                description: "Projectile qui stun. Durée selon distance.",
                cooldown: "13/12.5/12/11.5/11s",
                cost: "60/65/70/75/80 Mana",
                damage: "80/110/140/170/200 (+45% AP)",
                damageType: "magic",
                details: "Stun: 0.5-2s selon distance parcourue."
            },
            R: {
                name: "Rite of the Arcane",
                icon: "🔮",
                description: "3-5 artillery shots à longue portée.",
                cooldown: "130/115/100s",
                cost: "100 Mana",
                damage: "200/250/300 (+45% AP) par shot",
                damageType: "magic",
                details: "3/4/5 shots. Range: 5000. Canal: 10s max."
            }
        }
    },
    {
        id: 158,
        name: "Xin Zhao",
        title: "Le Sénéchal de Demacia",
        role: "fighter",
        icon: "🗡️",
        baseStats: {
            hp: 640, hpGrowth: 106, hpRegen: 8, hpRegenGrowth: 0.7,
            mana: 274, manaGrowth: 55, manaRegen: 7.25, manaRegenGrowth: 0.45,
            ad: 63, adGrowth: 3, as: 0.645, asGrowth: 3.5,
            armor: 35, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Determination",
            icon: "⚔️",
            description: "Chaque 3ème attaque = heal.",
            cooldown: "Passif",
            details: "Heal: 6-74 (+10% AD)(+55% AP)."
        },
        spells: {
            Q: {
                name: "Three Talon Strike",
                icon: "🗡️",
                description: "3 attaques bonus. 3ème = knock up.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "30 Mana",
                damage: "17/28/39/50/61 (+40% bonus AD) par hit",
                damageType: "physical",
                details: "3ème hit: knock up 0.75s. -1s CD par attaque."
            },
            W: {
                name: "Wind Becomes Lightning",
                icon: "⚡",
                description: "Slash puis thrust. Thrust = slow.",
                cooldown: "12/11/10/9/8s",
                cost: "45 Mana",
                damage: "Slash: 50/75/100/125/150 (+80% AD) | Thrust: 40/75/110/145/180 (+80% AP)(+100% AD)",
                damageType: "physical",
                details: "Thrust slow: 50%. Challenge: augmente dégâts W."
            },
            E: {
                name: "Audacious Charge",
                icon: "💨",
                description: "Dash vers ennemi + slow.",
                cooldown: "12s",
                cost: "50 Mana",
                damage: "50/75/100/125/150 (+60% AP)",
                damageType: "magic",
                details: "Slow: 30%. Challenge cible: +25-85% AS."
            },
            R: {
                name: "Crescent Guard",
                icon: "🌙",
                description: "Sweep + invulnérable aux ennemis loin.",
                cooldown: "120/110/100s",
                cost: "100 Mana",
                damage: "75/175/275 (+100% bonus AD)(+110% AP)",
                damageType: "physical",
                details: "Knockback. 3s: invulnérable hors zone. Extend par attacks/W."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_X;
}
