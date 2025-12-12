// ========================================
// CHAMPIONS - LETTRE U
// ========================================

const CHAMPIONS_U = [
    {
        id: 142,
        name: "Udyr",
        title: "Le Gardien Spirituel",
        role: "fighter",
        icon: "🐻",
        baseStats: {
            hp: 664, hpGrowth: 92, hpRegen: 6, hpRegenGrowth: 0.75,
            mana: 271, manaGrowth: 50, manaRegen: 7.5, manaRegenGrowth: 0.8,
            ad: 64, adGrowth: 4.2, as: 0.65, asGrowth: 2.67,
            armor: 34, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Bridge Between",
            icon: "🔷",
            description: "Awaken sort pour effet bonus. Alterne entre stances.",
            cooldown: "50-30s Awaken",
            details: "Stance: +30% AS empilant. Awaken: renforce prochaine stance."
        },
        spells: {
            Q: {
                name: "Wilding Claw",
                icon: "🐻",
                description: "Stance: attaques lightning. Awaken: burst.",
                cooldown: "6s",
                cost: "45/40/35/30/25 Mana",
                damage: "3/4/5/6/7% + 1% par 100 AD max HP lightning",
                damageType: "physical",
                details: "Awaken: +40/75/110/145/180 (+70% bonus AD) burst sur 2 hits."
            },
            W: {
                name: "Iron Mantle",
                icon: "🛡️",
                description: "Stance: bouclier + lifesteal. Awaken: gros bouclier.",
                cooldown: "6s",
                cost: "45/40/35/30/25 Mana",
                damage: "Bouclier: 60/95/130/165/200 (+45% AP)",
                damageType: "utility",
                details: "+15% lifesteal. Awaken: bouclier ×3 + heal burst."
            },
            E: {
                name: "Blazing Stampede",
                icon: "🔥",
                description: "Stance: MS + immune slow. Awaken: stun premier.",
                cooldown: "6s",
                cost: "45/40/35/30/25 Mana",
                damage: "Aucun direct",
                damageType: "utility",
                details: "+30-60% MS 4s. Awaken: premier ennemi stunné 0.75-1.25s."
            },
            R: {
                name: "Wingborne Storm",
                icon: "🌩️",
                description: "Stance: aura tempête. Awaken: slow + range.",
                cooldown: "6s",
                cost: "45/40/35/30/25 Mana",
                damage: "20/38/56/74/92 (+40% AP) par seconde",
                damageType: "magic",
                details: "Awaken: +slow 40% + range étendue + dégâts augmentés."
            }
        }
    },
    {
        id: 143,
        name: "Urgot",
        title: "Le Bourreau de Dreadnought",
        role: "fighter",
        icon: "🦀",
        baseStats: {
            hp: 655, hpGrowth: 101, hpRegen: 7.5, hpRegenGrowth: 0.7,
            mana: 340, manaGrowth: 55, manaRegen: 7.25, manaRegenGrowth: 0.8,
            ad: 63, adGrowth: 4, as: 0.625, asGrowth: 3.75,
            armor: 36, armorGrowth: 4.25, mr: 32, mrGrowth: 2.05,
            ms: 330, range: 350
        },
        resource: "Mana",
        passive: {
            name: "Echoing Flames",
            icon: "🔥",
            description: "6 jambes tirent individuellement. CD par jambe.",
            cooldown: "30-2.5s par jambe",
            details: "Dégâts: 2-6% (+2-4% par 100 AD) max HP. Prochaine attaque de ce côté tire."
        },
        spells: {
            Q: {
                name: "Corrosive Charge",
                icon: "💥",
                description: "Tire bombe qui slow.",
                cooldown: "12/11/10/9/8s",
                cost: "80 Mana",
                damage: "25/70/115/160/205 (+70% AD)",
                damageType: "physical",
                details: "Slow: 45-65% 1s."
            },
            W: {
                name: "Purge",
                icon: "🔫",
                description: "Toggle: tire rapidement, MS réduit.",
                cooldown: "12/9/6/3/0s",
                cost: "40/30/20/10/0 Mana par seconde",
                damage: "12 (+20-36% AD) par tir",
                damageType: "physical",
                details: "-125 MS. 3.0 AS. Target le plus proche. Peut trigger jambes."
            },
            E: {
                name: "Disdain",
                icon: "💨",
                description: "Dash + flip ennemi par-dessus.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Mana",
                damage: "90/120/150/180/210 (+100% bonus AD)",
                damageType: "physical",
                details: "Flip: stun 0.75s. Shield: 60/80/100/120/140 (+150% bonus AD)(+15% HP bonus)."
            },
            R: {
                name: "Fear Beyond Death",
                icon: "⚙️",
                description: "Drill qui slow. Recast sur low HP = exécute + fear.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "100/225/350 (+50% bonus AD)",
                damageType: "physical",
                details: "Slow: 75%. <25% HP: recast tire et exécute. Fear AOE si tue."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_U;
}
