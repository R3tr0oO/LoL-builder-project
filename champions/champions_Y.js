// ========================================
// CHAMPIONS - LETTRE Y
// ========================================

const CHAMPIONS_Y = [
    {
        id: 159,
        name: "Yasuo",
        title: "L'Impénitent",
        role: "fighter",
        icon: "🌪️",
        baseStats: {
            hp: 590, hpGrowth: 101, hpRegen: 6.5, hpRegenGrowth: 0.9,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 60, adGrowth: 3, as: 0.697, asGrowth: 3.5,
            armor: 30, armorGrowth: 4.6, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Flow",
        passive: {
            name: "Way of the Wanderer",
            icon: "🌊",
            description: "Double crit chance. Bouclier en bougeant.",
            cooldown: "Passif",
            details: "×2 crit (mais -10% crit dmg). Flow max = bouclier 115-525."
        },
        spells: {
            Q: {
                name: "Steel Tempest",
                icon: "🗡️",
                description: "Thrust. 2 stacks = tornado knock up.",
                cooldown: "4-1.33s (scales AS)",
                cost: "Aucun",
                damage: "20/45/70/95/120 (+105% AD)",
                damageType: "physical",
                details: "Stack: 6s. 3ème Q: tornado. Peut crit. E+Q = circle."
            },
            W: {
                name: "Wind Wall",
                icon: "🧱",
                description: "Mur qui bloque tous projectiles.",
                cooldown: "30/27/24/21/18s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 4s. Bloque TOUS projectiles ennemis."
            },
            E: {
                name: "Sweeping Blade",
                icon: "💨",
                description: "Dash à travers ennemi. Stacks dégâts.",
                cooldown: "0.5-0.1s",
                cost: "Aucun",
                damage: "60/70/80/90/100 (+20% bonus AD)(+60% AP)",
                damageType: "magic",
                details: "CD par cible: 10-6s. Stacks: +25% dmg (max 50%)."
            },
            R: {
                name: "Last Breath",
                icon: "⚔️",
                description: "Blink vers airborne ennemis + suspend + armor pen.",
                cooldown: "80/55/30s",
                cost: "Aucun",
                damage: "200/350/500 (+150% bonus AD)",
                damageType: "physical",
                details: "Suspend 1s. +50% armor pen bonus 15s après. Reset shield."
            }
        }
    },
    {
        id: 160,
        name: "Yone",
        title: "L'Imprévu",
        role: "fighter",
        icon: "👹",
        baseStats: {
            hp: 620, hpGrowth: 100, hpRegen: 7.5, hpRegenGrowth: 0.75,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 60, adGrowth: 3, as: 0.625, asGrowth: 2.5,
            armor: 28, armorGrowth: 4.6, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 175
        },
        resource: "Aucun",
        passive: {
            name: "Way of the Hunter",
            icon: "⚔️",
            description: "Double crit. Attaques alternent physique/magic.",
            cooldown: "Passif",
            details: "×2 crit (-10% crit dmg). 2ème attaque: +10-20% AD magic."
        },
        spells: {
            Q: {
                name: "Mortal Steel",
                icon: "🗡️",
                description: "Thrust. 2 stacks = dash knock up.",
                cooldown: "4-1.33s (scales AS)",
                cost: "Aucun",
                damage: "20/45/70/95/120 (+105% AD)",
                damageType: "physical",
                details: "3ème Q: dash + knock up 0.75s. Peut crit."
            },
            W: {
                name: "Spirit Cleave",
                icon: "🛡️",
                description: "Sweep qui bouclier selon ennemis touchés.",
                cooldown: "14s",
                cost: "Aucun",
                damage: "10/20/30/40/50 (+10/11/12/13/14% max HP target)",
                damageType: "magic",
                details: "50% physical, 50% magic. Bouclier: 40-75 (+60% bonus AD) par champion."
            },
            E: {
                name: "Soul Unbound",
                icon: "👻",
                description: "Sort corps. Retour = % dégâts infligés.",
                cooldown: "22/19/16/13/10s",
                cost: "Aucun",
                damage: "25/27.5/30/32.5/35% dégâts infligés répétés",
                damageType: "true",
                details: "Durée: 5s. +10% MS. Retour auto après 5s."
            },
            R: {
                name: "Fate Sealed",
                icon: "💀",
                description: "Long dash qui knock up + tire ennemis.",
                cooldown: "120/100/80s",
                cost: "Aucun",
                damage: "200/400/600 (+80% AD)",
                damageType: "physical",
                details: "Unstoppable. 50% physical, 50% magic. Tire ennemis avec lui."
            }
        }
    },
    {
        id: 161,
        name: "Yorick",
        title: "Le Berger des Âmes",
        role: "fighter",
        icon: "⚰️",
        baseStats: {
            hp: 650, hpGrowth: 100, hpRegen: 8, hpRegenGrowth: 0.8,
            mana: 300, manaGrowth: 40, manaRegen: 7.5, manaRegenGrowth: 0.75,
            ad: 62, adGrowth: 5, as: 0.625, asGrowth: 2,
            armor: 39, armorGrowth: 4.5, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Shepherd of Souls",
            icon: "💀",
            description: "Minions/champions qui meurent laissent tombes. Q invoque ghouls.",
            cooldown: "Passif",
            details: "Max 4 tombes. Q avec 3+ tombes = invoque 3 ghouls."
        },
        spells: {
            Q: {
                name: "Last Rites",
                icon: "⚰️",
                description: "Prochaine attaque = bonus dégâts + heal. Invoque si tombes.",
                cooldown: "7/6.25/5.5/4.75/4s",
                cost: "25 Mana",
                damage: "30/55/80/105/130 (+40% AD)",
                damageType: "physical",
                details: "Heal: 10-68 (+25% AD). Invoque ghouls si 3+ tombes."
            },
            W: {
                name: "Dark Procession",
                icon: "🧱",
                description: "Crée cercle de murs autour zone.",
                cooldown: "20/18/16/14/12s",
                cost: "70 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 4s. Peut être attaqué (2-4 HP)."
            },
            E: {
                name: "Mourning Mist",
                icon: "🌫️",
                description: "Projectile qui slow + marque. Ghouls focus marqués.",
                cooldown: "12/11/10/9/8s",
                cost: "50/55/60/65/70 Mana",
                damage: "70/105/140/175/210 (+70% AP) + 12% current HP",
                damageType: "magic",
                details: "Slow: 30%. Marque 4s. Ghouls: +25% MS + leap vers marqués."
            },
            R: {
                name: "Eulogy of the Isles",
                icon: "👰",
                description: "Invoque Maiden. Elle invoque ghouls + dégâts.",
                cooldown: "160/130/100s",
                cost: "100 Mana",
                damage: "Maiden: 0/10/40 (+50% AD) + 3/6/9% max HP",
                damageType: "magic",
                details: "Maiden: permanente jusqu'à mort. Suit ou push. Invoque ghouls."
            }
        }
    },
    {
        id: 162,
        name: "Yuumi",
        title: "La Chatte Magique",
        role: "support",
        icon: "🐱",
        baseStats: {
            hp: 500, hpGrowth: 69, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 400, manaGrowth: 45, manaRegen: 10, manaRegenGrowth: 0.4,
            ad: 49, adGrowth: 3.1, as: 0.625, asGrowth: 1,
            armor: 25, armorGrowth: 4.2, mr: 25, mrGrowth: 1.1,
            ms: 330, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Bop 'n' Block",
            icon: "🛡️",
            description: "Attaque donne bouclier + restore mana.",
            cooldown: "14-6s",
            details: "Bouclier: 45-300. Restore: 50-160 mana."
        },
        spells: {
            Q: {
                name: "Prowling Projectile",
                icon: "🎯",
                description: "Projectile guidable qui slow.",
                cooldown: "7.5/7.25/7/6.75/6.5s",
                cost: "50 Mana",
                damage: "60/90/120/150/180/210 (+30% AP)",
                damageType: "magic",
                details: "Empowered si voyage longtemps: +50/85/120/155/190/225 (+40% AP) + slow 20%."
            },
            W: {
                name: "You and Me!",
                icon: "💕",
                description: "S'attache à allié. Partage stats.",
                cooldown: "0.25s (10s si CC)",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Attached: untargetable. Donne +5-17 (+4-16% AP) AD/AP à l'allié."
            },
            E: {
                name: "Zoomies",
                icon: "💨",
                description: "Heal + MS pour attaché ou self.",
                cooldown: "12/11/10/9/8s",
                cost: "60/80/100/120/140 Mana",
                damage: "Heal: 70/100/130/160/190 (+35% AP)",
                damageType: "utility",
                details: "+20-30% MS 2s."
            },
            R: {
                name: "Final Chapter",
                icon: "📖",
                description: "7 vagues qui root après plusieurs hits.",
                cooldown: "130/110/90s",
                cost: "100 Mana",
                damage: "60/100/140 (+20% AP) par vague",
                damageType: "magic",
                details: "3 hits = root 1.25-1.75s. Heal alliés touchés."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_Y;
}
