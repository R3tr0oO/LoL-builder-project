// ========================================
// CHAMPIONS - LETTRE O
// ========================================

const CHAMPIONS_O = [
    {
        id: 95,
        name: "Olaf",
        title: "Le Berserker",
        role: "fighter",
        icon: "🪓",
        baseStats: {
            hp: 645, hpGrowth: 119, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 316, manaGrowth: 42, manaRegen: 7.47, manaRegenGrowth: 0.575,
            ad: 68, adGrowth: 4.7, as: 0.694, asGrowth: 2.7,
            armor: 35, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Berserker Rage",
            icon: "💢",
            description: "Plus de AS quand PV bas.",
            cooldown: "Passif",
            details: "+40-100% AS selon PV manquants."
        },
        spells: {
            Q: {
                name: "Undertow",
                icon: "🪓",
                description: "Lance hache. Ramasser réduit CD.",
                cooldown: "7s",
                cost: "40/45/50/55/60 Mana",
                damage: "70/120/170/220/270 (+100% bonus AD)",
                damageType: "physical",
                details: "Slow: 25-45% 2s. Ramasser: -4.5s CD."
            },
            W: {
                name: "Tough It Out",
                icon: "🛡️",
                description: "Gagne bouclier + lifesteal/spellvamp.",
                cooldown: "16/15/14/13/12s",
                cost: "30 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "Bouclier: 15/20/25/30/35% PV manquants. +8-22% lifesteal 5s."
            },
            E: {
                name: "Reckless Swing",
                icon: "⚔️",
                description: "Attaque qui coûte HP. Dégâts vrais.",
                cooldown: "11/10/9/8/7s",
                cost: "21/38/55/72/89 HP",
                damage: "70/115/160/205/250 (+50% AD)",
                damageType: "true",
                details: "Refund coût si tue. -1s CD par attaque."
            },
            R: {
                name: "Ragnarok",
                icon: "😤",
                description: "Immune aux CC. Bonus AD. S'étend si combat.",
                cooldown: "100/90/80s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "buff",
                details: "+10/20/30 AD. Durée: 3s base, +2.5s si touche champion. Max: 8s."
            }
        }
    },
    {
        id: 96,
        name: "Orianna",
        title: "La Dame Mécanique",
        role: "mage",
        icon: "⚙️",
        baseStats: {
            hp: 600, hpGrowth: 110, hpRegen: 6.5, hpRegenGrowth: 0.55,
            mana: 418, manaGrowth: 25, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 44, adGrowth: 2.6, as: 0.658, asGrowth: 3.5,
            armor: 20, armorGrowth: 4.2, mr: 26, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Clockwork Windup",
            icon: "⚙️",
            description: "Attaques infligent dégâts magic bonus. Stack.",
            cooldown: "Passif",
            details: "10-50 (+15% AP) par attaque. +20% par stack (max 2)."
        },
        spells: {
            Q: {
                name: "Command: Attack",
                icon: "🎯",
                description: "Envoie balle vers position. Dégâts traversée.",
                cooldown: "6/5.25/4.5/3.75/3s",
                cost: "30/35/40/45/50 Mana",
                damage: "60/90/120/150/180 (+50% AP)",
                damageType: "magic",
                details: "-10% dégâts par unité traversée (min 40%)."
            },
            W: {
                name: "Command: Dissonance",
                icon: "💫",
                description: "Balle crée zone: dégâts + zone MS/slow.",
                cooldown: "7s",
                cost: "70/75/80/85/90 Mana",
                damage: "70/120/170/220/270 (+80% AP)",
                damageType: "magic",
                details: "+30-50% MS alliés, 30-50% slow ennemis. 3s."
            },
            E: {
                name: "Command: Protect",
                icon: "🛡️",
                description: "Balle vers allié. Dégâts traversée + bouclier.",
                cooldown: "9s",
                cost: "60/65/70/75/80 Mana",
                damage: "60/100/140/180/220 (+30% AP)",
                damageType: "magic",
                details: "Bouclier: 55/90/125/160/195 (+50% AP). +6/12/18/24/30 armor/MR porteur."
            },
            R: {
                name: "Command: Shockwave",
                icon: "🌀",
                description: "Balle pull tous ennemis vers centre.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "250/350/450 (+90% AP)",
                damageType: "magic",
                details: "Pull vers centre de la balle."
            }
        }
    },
    {
        id: 97,
        name: "Ornn",
        title: "Le Bélier de Feu des Forges",
        role: "tank",
        icon: "🐏",
        baseStats: {
            hp: 660, hpGrowth: 109, hpRegen: 9, hpRegenGrowth: 0.9,
            mana: 341, manaGrowth: 65, manaRegen: 8.5, manaRegenGrowth: 0.6,
            ad: 69, adGrowth: 3.5, as: 0.625, asGrowth: 2,
            armor: 36, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Living Forge",
            icon: "🔨",
            description: "Peut forger items n'importe où. Upgrade items alliés.",
            cooldown: "Passif",
            details: "+10-30% armor/MR bonus. Masterwork items niveau 13+ pour alliés."
        },
        spells: {
            Q: {
                name: "Volcanic Rupture",
                icon: "🌋",
                description: "Fissure qui slow puis crée pilier.",
                cooldown: "9/8.5/8/7.5/7s",
                cost: "45 Mana",
                damage: "20/45/70/95/120 (+110% AD)",
                damageType: "physical",
                details: "Slow: 40-60% 2s. Pilier: 4s, bloque passage."
            },
            W: {
                name: "Bellows Breath",
                icon: "🔥",
                description: "Souffle feu en marchant. Unstoppable. Dernière tick Brittle.",
                cooldown: "12/11/10/9/8s",
                cost: "45/50/55/60/65 Mana",
                damage: "15/17.5/20/22.5/25% PV max cible",
                damageType: "magic",
                details: "Brittle: 6s. CC sur Brittle = +30% durée + dégâts bonus."
            },
            E: {
                name: "Searing Charge",
                icon: "🐏",
                description: "Charge. Si touche terrain/pilier = dégâts + knockup.",
                cooldown: "16/15/14/13/12s",
                cost: "35/40/45/50/55 Mana",
                damage: "80/125/170/215/260 (+40% armor)(+40% MR)",
                damageType: "magic",
                details: "Seul: mini-knockback. Avec terrain: knock up 1s. Détruit pilier."
            },
            R: {
                name: "Call of the Forge God",
                icon: "🐏",
                description: "Bélier de feu. Réactivation: headbutt pour knock up.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "125/175/225 (+20% AP) + 125/175/225 (+20% AP)",
                damageType: "magic",
                details: "1ère: slow 40-60%. 2ème: knock up + Brittle. Global range."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_O;
}
