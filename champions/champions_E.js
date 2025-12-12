// ========================================
// CHAMPIONS - LETTRE E
// ========================================

const CHAMPIONS_E = [
    {
        id: 30,
        name: "Ekko",
        title: "Le Garçon qui Brisait le Temps",
        role: "assassin",
        icon: "⏰",
        baseStats: {
            hp: 655, hpGrowth: 99, hpRegen: 9, hpRegenGrowth: 0.9,
            mana: 280, manaGrowth: 70, manaRegen: 7, manaRegenGrowth: 0.8,
            ad: 58, adGrowth: 3, as: 0.688, asGrowth: 3.3,
            armor: 32, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Z-Drive Resonance",
            icon: "⚡",
            description: "3ème hit sur même cible = dégâts magiques bonus + MS.",
            cooldown: "5s par cible",
            details: "Dégâts: 30-140 (+80% AP). +50-80% MS 2-3s."
        },
        spells: {
            Q: {
                name: "Timewinder",
                icon: "💠",
                description: "Dispositif qui slow à l'aller, plus de dégâts au retour.",
                cooldown: "11/10/9/8/7s",
                cost: "40/45/50/55/60 Mana",
                damage: "Aller: 60-120 (+30% AP) | Retour: 40-140 (+60% AP)",
                damageType: "magic",
                details: "Slow: 32-60% 1.5-2.5s."
            },
            W: {
                name: "Parallel Convergence",
                icon: "🌀",
                description: "Crée zone qui stun et bouclier si Ekko entre.",
                cooldown: "22/20/18/16/14s",
                cost: "30/35/40/45/50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Délai: 3s. Stun: 2.25s. Bouclier: 70-150 (+150% AP)."
            },
            E: {
                name: "Phase Dive",
                icon: "💨",
                description: "Dash puis blink vers ennemi avec attaque.",
                cooldown: "9/8.5/8/7.5/7s",
                cost: "40/45/50/55/60 Mana",
                damage: "50/75/100/125/150 (+50% AP)",
                damageType: "magic",
                details: "Dash: 325. Blink: 300."
            },
            R: {
                name: "Chronobreak",
                icon: "⏰",
                description: "Revient à position de 4s avant, se soigne et inflige dégâts.",
                cooldown: "110/90/70s",
                cost: "Aucun",
                damage: "200/350/500 (+175% AP)",
                damageType: "magic",
                details: "Heal: 100-200 (+60% AP) + 3%/1% PV perdus. Untargetable pendant cast."
            }
        }
    },
    {
        id: 31,
        name: "Elise",
        title: "La Reine des Araignées",
        role: "assassin",
        icon: "🕷️",
        baseStats: {
            hp: 650, hpGrowth: 107, hpRegen: 5.5, hpRegenGrowth: 0.6,
            mana: 324, manaGrowth: 50, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3, as: 0.625, asGrowth: 1.75,
            armor: 30, armorGrowth: 5.2, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Spider Queen",
            icon: "🕷️",
            description: "Sorts humain marquent. Araignée = spiderlings attaquent.",
            cooldown: "Passif",
            details: "Spiderlings: 2/3/4/5 max selon R."
        },
        spells: {
            Q: {
                name: "Neurotoxin / Venomous Bite",
                icon: "☠️",
                description: "Humain: % PV actuel. Araignée: % PV manquants.",
                cooldown: "6s",
                cost: "80-100 Mana / Aucun",
                damage: "40-180 (+4% (+3%/100 AP) PV)",
                damageType: "magic",
                details: "Araignée: se rapproche."
            },
            W: {
                name: "Volatile Spiderling / Skittering Frenzy",
                icon: "🕸️",
                description: "Humain: araignée explosive. Araignée: AS bonus + heal.",
                cooldown: "12s",
                cost: "60-100 Mana / Aucun",
                damage: "Humain: 60-240 (+95% AP)",
                damageType: "magic",
                details: "Araignée: +60-140% AS. Heal: 4-12 (+10% AP)/attaque."
            },
            E: {
                name: "Cocoon / Rappel",
                icon: "🎯",
                description: "Humain: stun skillshot. Araignée: monte puis descend.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Mana / Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Stun: 1.6-2s. Rappel: untargetable 2s."
            },
            R: {
                name: "Spider Form",
                icon: "🕷️",
                description: "Bascule entre forme humaine et araignée.",
                cooldown: "4s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Araignée: melee, +25 MS, spiderlings. Unlock niveau 1."
            }
        }
    },
    {
        id: 32,
        name: "Evelynn",
        title: "L'Étreinte de l'Agonie",
        role: "assassin",
        icon: "💜",
        baseStats: {
            hp: 642, hpGrowth: 98, hpRegen: 8.5, hpRegenGrowth: 0.75,
            mana: 315, manaGrowth: 42, manaRegen: 8.1, manaRegenGrowth: 0.6,
            ad: 61, adGrowth: 3, as: 0.667, asGrowth: 2.1,
            armor: 37, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Demon Shade",
            icon: "👁️",
            description: "Après niveau 6, camouflage hors combat. Regen PV quand bas.",
            cooldown: "4s hors combat",
            details: "Camouflage: invisibilité sauf courte portée. Heal: 15-150 PV."
        },
        spells: {
            Q: {
                name: "Hate Spike",
                icon: "💜",
                description: "Lance épines. Toucher champion = 3 spikes supplémentaires.",
                cooldown: "4s",
                cost: "30/35/40/45/50 Mana",
                damage: "Initial: 25-45 (+30% AP) | Spikes: 25-45 (+25% AP) × 3",
                damageType: "magic",
                details: "Refund 60% CD si monstre."
            },
            W: {
                name: "Allure",
                icon: "💕",
                description: "Maudit ennemi. Après 2.5s, sorts = charm + MR reduction.",
                cooldown: "15/14/13/12/11s",
                cost: "60/70/80/90/100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Charm: 1-2s. MR reduction: 25-35%."
            },
            E: {
                name: "Whiplash",
                icon: "💨",
                description: "Whip vers ennemi. Depuis camouflage = dash.",
                cooldown: "8s",
                cost: "40/45/50/55/60 Mana",
                damage: "55-115 (+3% (+1.5%/100 AP) PV max)",
                damageType: "magic",
                details: "Empowered: 75-175 (+4% (+2.5%/100 AP) PV max)."
            },
            R: {
                name: "Last Caress",
                icon: "💋",
                description: "Exécute ennemis devant puis teleporte en arrière.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "125/250/375 (+75% AP)",
                damageType: "magic",
                details: "+140% dégâts sous 30% PV. Blink: 700 arrière."
            }
        }
    },
    {
        id: 33,
        name: "Ezreal",
        title: "L'Explorateur Prodige",
        role: "marksman",
        icon: "🔮",
        baseStats: {
            hp: 600, hpGrowth: 102, hpRegen: 4, hpRegenGrowth: 0.55,
            mana: 375, manaGrowth: 70, manaRegen: 8.5, manaRegenGrowth: 1,
            ad: 60, adGrowth: 2.75, as: 0.625, asGrowth: 2.5,
            armor: 24, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Rising Spell Force",
            icon: "⚡",
            description: "Toucher avec compétence = stack AS. Max 5.",
            cooldown: "Passif",
            details: "+10/12/14% AS par stack. Durée: 6s. Max +50-70% AS."
        },
        spells: {
            Q: {
                name: "Mystic Shot",
                icon: "✨",
                description: "Projectile. Toucher = -1.5s tous CD + effets d'attaque.",
                cooldown: "5.5/5.25/5/4.75/4.5s",
                cost: "28/31/34/37/40 Mana",
                damage: "20/45/70/95/120 (+130% AD)(+15% AP)",
                damageType: "physical",
                details: "Applique effets d'attaque."
            },
            W: {
                name: "Essence Flux",
                icon: "🌊",
                description: "Orbe qui colle aux champions/structures. Détonation = dégâts + mana.",
                cooldown: "12s",
                cost: "50 Mana",
                damage: "80/135/190/245/300 (+70% bonus AD)(+80% AP)",
                damageType: "magic",
                details: "Marque 4s. Détoner = 60 + 15-35% mana."
            },
            E: {
                name: "Arcane Shift",
                icon: "💨",
                description: "Téléporte et tire projectile sur ennemi proche.",
                cooldown: "26/23/20/17/14s",
                cost: "90 Mana",
                damage: "80/130/180/230/280 (+50% bonus AD)(+75% AP)",
                damageType: "magic",
                details: "Blink: 475. Priorise W."
            },
            R: {
                name: "Trueshot Barrage",
                icon: "🌈",
                description: "Barrage d'énergie qui traverse la carte.",
                cooldown: "120s",
                cost: "100 Mana",
                damage: "350/500/650 (+100% bonus AD)(+90% AP)",
                damageType: "magic",
                details: "-10%/ennemi (min 30%)."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_E;
}
