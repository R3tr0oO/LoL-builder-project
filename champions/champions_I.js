// ========================================
// CHAMPIONS - LETTRE I
// ========================================

const CHAMPIONS_I = [
    {
        id: 47,
        name: "Illaoi",
        title: "La Prêtresse du Kraken",
        role: "fighter",
        icon: "🐙",
        baseStats: {
            hp: 656, hpGrowth: 115, hpRegen: 9.5, hpRegenGrowth: 0.85,
            mana: 350, manaGrowth: 50, manaRegen: 7.5, manaRegenGrowth: 0.75,
            ad: 68, adGrowth: 5, as: 0.625, asGrowth: 2.5,
            armor: 35, armorGrowth: 4.8, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Prophet of an Elder God",
            icon: "🐙",
            description: "Invoque périodiquement un tentacule sur mur proche.",
            cooldown: "20-7.25s",
            details: "Tentacule: slam 10-180 (+120% AD) + heal 5% PV manquants."
        },
        spells: {
            Q: {
                name: "Tentacle Smash",
                icon: "🦑",
                description: "Claque devant, invoque tentacule qui slam aussi.",
                cooldown: "10/9/8/7/6s",
                cost: "40/45/50/55/60 Mana",
                damage: "10/50/90/130/170 (+120% AD)",
                damageType: "physical",
                details: "Passif: +10-30% dégâts tentacules."
            },
            W: {
                name: "Harsh Lesson",
                icon: "👊",
                description: "Prochaine attaque = dash + dégâts. Tentacules slam cible.",
                cooldown: "4s",
                cost: "30 Mana",
                damage: "3/3.5/4/4.5/5% PV max cible",
                damageType: "physical",
                details: "Dash: 225. Réinitialise auto."
            },
            E: {
                name: "Test of Spirit",
                icon: "👻",
                description: "Arrache esprit du champion. Dégâts transférés.",
                cooldown: "16/15/14/13/12s",
                cost: "35/45/55/65/75 Mana",
                damage: "Transfert: 25/30/35/40/45% +8%/100 AD",
                damageType: "physical",
                details: "Durée: 10s. Si tué: slow 80% + vessel (tentacules le poursuivent)."
            },
            R: {
                name: "Leap of Faith",
                icon: "🦑",
                description: "Invoque tentacule par champion + augmente vitesse tentacules.",
                cooldown: "120/95/70s",
                cost: "100 Mana",
                damage: "150/250/350 (+50% bonus AD) × tentacules",
                damageType: "physical",
                details: "1 tentacule/champion ennemi. +50% AS tentacules 8s."
            }
        }
    },
    {
        id: 48,
        name: "Irelia",
        title: "La Lame Dansante",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 590, hpGrowth: 110, hpRegen: 8.5, hpRegenGrowth: 0.85,
            mana: 350, manaGrowth: 50, manaRegen: 8, manaRegenGrowth: 0.65,
            ad: 65, adGrowth: 4, as: 0.656, asGrowth: 2.5,
            armor: 36, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 200
        },
        resource: "Mana",
        passive: {
            name: "Ionian Fervor",
            icon: "⚡",
            description: "Sorts donnent stacks. À 5 stacks: bonus AS + dégâts attaques.",
            cooldown: "Passif",
            details: "Par stack: +7.5-25% AS. À 5: +10-30 (+25% bonus AD) par attaque."
        },
        spells: {
            Q: {
                name: "Bladesurge",
                icon: "💨",
                description: "Dash vers ennemi. Reset si tue ou cible marquée.",
                cooldown: "11/10/9/8/7s",
                cost: "20 Mana",
                damage: "5/25/45/65/85 (+60% AD)",
                damageType: "physical",
                details: "Soigne 12% AD. +55/75/95/115/135 vs sbires."
            },
            W: {
                name: "Defiant Dance",
                icon: "🛡️",
                description: "Charge: réduit dégâts physiques. Relâche: dégâts.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "70/75/80/85/90 Mana",
                damage: "10/40/70/100/130 (+50% AD)(+45% AP) à ×2",
                damageType: "mixed",
                details: "Réduction: 50% (+7%/100 AP) physique. 20% magique. Canal max: 1.5s."
            },
            E: {
                name: "Flawless Duet",
                icon: "✨",
                description: "Place 2 lames qui convergent et stun.",
                cooldown: "16/15/14/13/12s",
                cost: "50 Mana",
                damage: "80/125/170/215/260 (+80% AP)",
                damageType: "magic",
                details: "Stun: 0.75s. Marque ennemis traversés."
            },
            R: {
                name: "Vanguard's Edge",
                icon: "⚔️",
                description: "Lance lames créant mur qui slow/damage si traversé.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "125/225/325 (+70% AP) initial",
                damageType: "magic",
                details: "Marque champions touchés. Mur: 90% slow + 125-325 dégâts si traversé."
            }
        }
    },
    {
        id: 49,
        name: "Ivern",
        title: "Le Père de la Forêt",
        role: "support",
        icon: "🌳",
        baseStats: {
            hp: 630, hpGrowth: 99, hpRegen: 7, hpRegenGrowth: 0.85,
            mana: 450, manaGrowth: 60, manaRegen: 6, manaRegenGrowth: 0.75,
            ad: 50, adGrowth: 3, as: 0.644, asGrowth: 3.4,
            armor: 27, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 330, range: 475
        },
        resource: "Mana",
        passive: {
            name: "Friend of the Forest",
            icon: "🌲",
            description: "Ne peut pas attaquer monstres mais les libère instantanément.",
            cooldown: "Passif",
            details: "Marque camp: après délai, récupère instantanément. Partage buff avec alliés."
        },
        spells: {
            Q: {
                name: "Rootcaller",
                icon: "🌿",
                description: "Lance racine qui root. Alliés peuvent dash vers cible.",
                cooldown: "14/13/12/11/10s",
                cost: "60 Mana",
                damage: "80/125/170/215/260 (+70% AP)",
                damageType: "magic",
                details: "Root: 1.2-2s. Click droit sur cible = dash pour Ivern/alliés."
            },
            W: {
                name: "Brushmaker",
                icon: "🌿",
                description: "Passif: attaques bonus dans buisson. Actif: crée buisson.",
                cooldown: "0.5s",
                cost: "30 Mana",
                damage: "Passif: 30/40/50/60/70 (+30% AP) bonus",
                damageType: "magic",
                details: "Buisson: 30s. +75 range dans buisson."
            },
            E: {
                name: "Triggerseed",
                icon: "🌱",
                description: "Bouclier sur allié qui explose, slow ennemis.",
                cooldown: "12/11/10/9/8s",
                cost: "70 Mana",
                damage: "70/95/120/145/170 (+80% AP)",
                damageType: "magic",
                details: "Bouclier: 80/115/150/185/220 (+75% AP). Slow: 50-70% 2s."
            },
            R: {
                name: "Daisy!",
                icon: "🌺",
                description: "Invoque Daisy le golem. 3ème attaque = knock up.",
                cooldown: "140/130/120s",
                cost: "100 Mana",
                damage: "Daisy: 70/100/170 (+30% AP) par attaque",
                damageType: "magic",
                details: "Daisy PV: 1250-3900. 3ème hit: knock up 1s."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_I;
}
