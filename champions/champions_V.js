// ========================================
// CHAMPIONS - LETTRE V
// ========================================

const CHAMPIONS_V = [
    {
        id: 144,
        name: "Varus",
        title: "La Flèche de la Vengeance",
        role: "marksman",
        icon: "🏹",
        baseStats: {
            hp: 600, hpGrowth: 95, hpRegen: 3.5, hpRegenGrowth: 0.55,
            mana: 360, manaGrowth: 40, manaRegen: 7.34, manaRegenGrowth: 0.8,
            ad: 59, adGrowth: 3.4, as: 0.658, asGrowth: 4,
            armor: 27, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 575
        },
        resource: "Mana",
        passive: {
            name: "Living Vengeance",
            icon: "💀",
            description: "Kills donnent AS.",
            cooldown: "Passif",
            details: "Kill minion: +10-40% AS 5s. Kill champion: double."
        },
        spells: {
            Q: {
                name: "Piercing Arrow",
                icon: "🏹",
                description: "Charge flèche. Plus long = plus de dégâts.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "70/75/80/85/90 Mana",
                damage: "10/46.67/83.33/120/156.67 → 50/85/120/155/190 (+100-150% AD)",
                damageType: "physical",
                details: "Charge: 1.25s max. Perce unités. -15% par unité traversée."
            },
            W: {
                name: "Blighted Quiver",
                icon: "☠️",
                description: "Passif: attaques stack blight. Actif: prochain Q détone blight.",
                cooldown: "40s",
                cost: "Aucun",
                damage: "Passif: 7/10.5/14/17.5/21 (+30% AP). Blight: 3/3.5/4/4.5/5% (+2% par 100 AP) max HP/stack",
                damageType: "magic",
                details: "Max 3 stacks. Détonés par sorts. Actif: Q applique bonus magie."
            },
            E: {
                name: "Hail of Arrows",
                icon: "🌧️",
                description: "Zone qui slow + Grievous Wounds.",
                cooldown: "18/16/14/12/10s",
                cost: "80 Mana",
                damage: "60/100/140/180/220 (+90% bonus AD)",
                damageType: "physical",
                details: "Slow: 30-50%. Grievous: 40%. Désécretion: -25% heal. Durée: 4s."
            },
            R: {
                name: "Chain of Corruption",
                icon: "⛓️",
                description: "Flèche qui root + spread aux ennemis proches.",
                cooldown: "100/80/60s",
                cost: "100 Mana",
                damage: "150/200/250 (+100% AP)",
                damageType: "magic",
                details: "Root: 2s. Spread: après 2s, racines cherchent ennemis proches."
            }
        }
    },
    {
        id: 145,
        name: "Vayne",
        title: "La Chasseuse de la Nuit",
        role: "marksman",
        icon: "🦇",
        baseStats: {
            hp: 550, hpGrowth: 103, hpRegen: 3.5, hpRegenGrowth: 0.55,
            mana: 232, manaGrowth: 35, manaRegen: 7, manaRegenGrowth: 0.4,
            ad: 60, adGrowth: 2.35, as: 0.658, asGrowth: 3.3,
            armor: 23, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Night Hunter",
            icon: "🌙",
            description: "MS bonus vers champions ennemis.",
            cooldown: "Passif",
            details: "+30 MS vers champions visibles."
        },
        spells: {
            Q: {
                name: "Tumble",
                icon: "💨",
                description: "Roll + prochaine attaque dégâts bonus.",
                cooldown: "4/3.5/3/2.5/2s",
                cost: "30 Mana",
                damage: "+60/65/70/75/80% AD bonus",
                damageType: "physical",
                details: "Reset auto. Peut crit."
            },
            W: {
                name: "Silver Bolts",
                icon: "✨",
                description: "Chaque 3ème attaque sur même cible = % max HP true.",
                cooldown: "Passif",
                cost: "Aucun",
                damage: "50/65/80/95/110 + 4/6/8/10/12% max HP",
                damageType: "true",
                details: "3ème hit proc. Change de cible = reset stacks."
            },
            E: {
                name: "Condemn",
                icon: "⬅️",
                description: "Knockback. Si mur = stun.",
                cooldown: "20/18/16/14/12s",
                cost: "90 Mana",
                damage: "50/85/120/155/190 (+50% bonus AD)",
                damageType: "physical",
                details: "Mur: stun 1.5s + dégâts doublés. Applique W stack."
            },
            R: {
                name: "Final Hour",
                icon: "🦇",
                description: "Bonus AD + tumble = invisibilité.",
                cooldown: "100/85/70s",
                cost: "80 Mana",
                damage: "Aucun direct",
                damageType: "buff",
                details: "+25/40/55 AD. Passif ×3. Q = invis 1s. Durée: 8/10/12s."
            }
        }
    },
    {
        id: 146,
        name: "Veigar",
        title: "Le Minuscule Maître du Mal",
        role: "mage",
        icon: "🧙",
        baseStats: {
            hp: 580, hpGrowth: 109, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 490, manaGrowth: 26, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 52, adGrowth: 2.8, as: 0.625, asGrowth: 2.24,
            armor: 23, armorGrowth: 4.7, mr: 32, mrGrowth: 1.3,
            ms: 340, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Phenomenal Evil Power",
            icon: "💜",
            description: "Gagne AP permanent en touchant champions avec sorts.",
            cooldown: "Passif",
            details: "+1 AP par hit champion. +5 AP par kill/assist. +1 AP par minion Q kill."
        },
        spells: {
            Q: {
                name: "Baleful Strike",
                icon: "💀",
                description: "2 projectiles en ligne. Kill = AP permanent.",
                cooldown: "6/5.5/5/4.5/4s",
                cost: "30/35/40/45/50 Mana",
                damage: "80/120/160/200/240 (+45% AP)",
                damageType: "magic",
                details: "Traverse. Kill = +1 AP."
            },
            W: {
                name: "Dark Matter",
                icon: "☄️",
                description: "Météore qui tombe après délai.",
                cooldown: "8s",
                cost: "60/65/70/75/80 Mana",
                damage: "85/140/195/250/305 (+70% AP)",
                damageType: "magic",
                details: "Délai: 1s. CD réduit par AP stacks."
            },
            E: {
                name: "Event Horizon",
                icon: "⬜",
                description: "Cage qui stun si touchée.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "70 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 3s. Stun: 1.5-2.5s."
            },
            R: {
                name: "Primordial Burst",
                icon: "💥",
                description: "Nuke single target. Bonus selon AP cible manquant.",
                cooldown: "100/80/60s",
                cost: "100 Mana",
                damage: "175/250/325 (+75% AP) + 1.5% per 1% missing HP",
                damageType: "magic",
                details: "×2 dégâts si cible <33% HP."
            }
        }
    },
    {
        id: 147,
        name: "Vel'Koz",
        title: "L'Œil du Néant",
        role: "mage",
        icon: "👁️",
        baseStats: {
            hp: 590, hpGrowth: 94, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 469, manaGrowth: 21, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3.14, as: 0.625, asGrowth: 1.36,
            armor: 22, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 340, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Organic Deconstruction",
            icon: "🔬",
            description: "Sorts stack. 3 stacks = true damage burst.",
            cooldown: "Passif",
            details: "3 stacks: 35-180 (+50% AP) true damage. Consumed on proc."
        },
        spells: {
            Q: {
                name: "Plasma Fission",
                icon: "⚡",
                description: "Projectile qui split perpendiculairement.",
                cooldown: "7s",
                cost: "40/45/50/55/60 Mana",
                damage: "80/120/160/200/240 (+90% AP)",
                damageType: "magic",
                details: "Recast: split. Slow: 70% 0.75s."
            },
            W: {
                name: "Void Rift",
                icon: "🌀",
                description: "2 lignes qui explosent après délai.",
                cooldown: "1.5s (recharge)",
                cost: "50/55/60/65/70 Mana",
                damage: "30/50/70/90/110 (+15% AP) initial + 45/75/105/135/165 (+25% AP) detonation",
                damageType: "magic",
                details: "2 charges. Explosion après 0.8s."
            },
            E: {
                name: "Tectonic Disruption",
                icon: "💥",
                description: "Zone qui knock up.",
                cooldown: "16/15/14/13/12s",
                cost: "50/55/60/65/70 Mana",
                damage: "70/100/130/160/190 (+30% AP)",
                damageType: "magic",
                details: "Knock up: 0.75s."
            },
            R: {
                name: "Lifeform Disintegration Ray",
                icon: "🔦",
                description: "Canal laser qui balaye.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "500/725/950 (+125% AP) total",
                damageType: "magic",
                details: "2.5s canal. Peut pivoter. 10 stacks passif si full."
            }
        }
    },
    {
        id: 148,
        name: "Vex",
        title: "La Gloomiste",
        role: "mage",
        icon: "😒",
        baseStats: {
            hp: 590, hpGrowth: 106, hpRegen: 6.5, hpRegenGrowth: 0.6,
            mana: 490, manaGrowth: 32, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 54, adGrowth: 2.75, as: 0.669, asGrowth: 1,
            armor: 23, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Doom 'n' Gloom",
            icon: "😈",
            description: "Gloom: sorts marquent. Doom: périodiquement, sorts fear.",
            cooldown: "25-16s Doom",
            details: "Gloom: +30-180 (+25% AP) si attaque/sort. Doom: fear 0.5-1.5s."
        },
        spells: {
            Q: {
                name: "Mistral Bolt",
                icon: "💨",
                description: "Projectile qui accélère et traverse.",
                cooldown: "8/7/6/5/4s",
                cost: "45/50/55/60/65 Mana",
                damage: "60/110/160/210/260 (+70% AP)",
                damageType: "magic",
                details: "Accélère. Traverse minions."
            },
            W: {
                name: "Personal Space",
                icon: "🛡️",
                description: "Zone autour = dégâts + bouclier.",
                cooldown: "20/18/16/14/12s",
                cost: "75 Mana",
                damage: "80/120/160/200/240 (+30% AP)",
                damageType: "magic",
                details: "Bouclier: 50/80/110/140/170 (+80% AP)."
            },
            E: {
                name: "Looming Darkness",
                icon: "🌑",
                description: "Zone qui slow + applique Gloom.",
                cooldown: "13s",
                cost: "70 Mana",
                damage: "50/70/90/110/130 (+40% AP)",
                damageType: "magic",
                details: "Slow: 30-50%. Applique Gloom."
            },
            R: {
                name: "Shadow Surge",
                icon: "👤",
                description: "Projectile. Touche = marque + peut dash vers.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "75/125/175 (+20% AP) initial + 150/250/350 (+50% AP) dash",
                damageType: "magic",
                details: "Dash: reset si tue cible marquée."
            }
        }
    },
    {
        id: 149,
        name: "Vi",
        title: "La Démolisseuse de Piltover",
        role: "fighter",
        icon: "👊",
        baseStats: {
            hp: 655, hpGrowth: 99, hpRegen: 10, hpRegenGrowth: 1,
            mana: 295, manaGrowth: 65, manaRegen: 8, manaRegenGrowth: 0.65,
            ad: 63, adGrowth: 3, as: 0.644, asGrowth: 2.5,
            armor: 30, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Blast Shield",
            icon: "🛡️",
            description: "Toucher ennemi avec sort = bouclier.",
            cooldown: "12-8s",
            details: "Bouclier: 12% max HP. Déclenché par sort."
        },
        spells: {
            Q: {
                name: "Vault Breaker",
                icon: "👊",
                description: "Charge dash. Plus long = plus de dégâts.",
                cooldown: "12/10.5/9/7.5/6s",
                cost: "50/60/70/80/90 Mana",
                damage: "55/80/105/130/155 → 110/160/210/260/310 (+80% bonus AD)",
                damageType: "physical",
                details: "Knock back. Applique Denting Blows stack."
            },
            W: {
                name: "Denting Blows",
                icon: "💥",
                description: "Chaque 3ème hit = % max HP + armor réduit + AS.",
                cooldown: "Passif",
                cost: "Aucun",
                damage: "4/5.5/7/8.5/10% max HP",
                damageType: "physical",
                details: "-20% armor 4s. +30-50% AS après proc."
            },
            E: {
                name: "Relentless Force",
                icon: "👊",
                description: "Prochaine attaque = AOE cone + dégâts bonus.",
                cooldown: "1s (recharge: 14/12.5/11/9.5/8s)",
                cost: "25/30/35/40/45 Mana",
                damage: "10/30/50/70/90 (+110% AD)(+90% AP)",
                damageType: "physical",
                details: "2 charges. Cone dégâts derrière cible."
            },
            R: {
                name: "Cease and Desist",
                icon: "🚔",
                description: "Dash vers champion. Knock up + knock aside ennemis traversés.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/275/400 (+110% bonus AD)",
                damageType: "physical",
                details: "Unstoppable. Knock up: 1.4s. Knock aside traversés."
            }
        }
    },
    {
        id: 150,
        name: "Viego",
        title: "Le Roi Déchu",
        role: "assassin",
        icon: "👑",
        baseStats: {
            hp: 630, hpGrowth: 109, hpRegen: 7, hpRegenGrowth: 0.7,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 57, adGrowth: 3.5, as: 0.658, asGrowth: 2.5,
            armor: 30, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 225
        },
        resource: "Aucun",
        passive: {
            name: "Sovereign's Domination",
            icon: "👻",
            description: "Peut posséder corps ennemis. Gagne leurs sorts.",
            cooldown: "Passif",
            details: "Kill = possède 10s. Gagne sorts non-ultime. Free R cast après."
        },
        spells: {
            Q: {
                name: "Blade of the Ruined King",
                icon: "⚔️",
                description: "Stab. Passif: attaques = % current HP.",
                cooldown: "5/4.5/4/3.5/3s",
                cost: "Aucun",
                damage: "25/40/55/70/85 (+60% AD)",
                damageType: "physical",
                details: "Passif: +2-4% current HP. Double hit sur Q (50% dégâts)."
            },
            W: {
                name: "Spectral Maw",
                icon: "💨",
                description: "Charge puis dash stun.",
                cooldown: "8s",
                cost: "Aucun",
                damage: "80/135/190/245/300 (+100% AP)",
                damageType: "magic",
                details: "Stun: 0.25-1.25s selon charge. Peut traverser murs."
            },
            E: {
                name: "Harrowed Path",
                icon: "🌫️",
                description: "Mist qui camoufle et donne AS/MS.",
                cooldown: "14/12/10/8/6s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "buff",
                details: "Camouflage + 20-30% AS + MS. Suit murs."
            },
            R: {
                name: "Heartbreaker",
                icon: "💔",
                description: "Blink puis AoE. Reset si touche low HP.",
                cooldown: "120/100/80s",
                cost: "Aucun",
                damage: "12/16/20% missing HP (min 150/275/400)",
                damageType: "physical",
                details: "Slow: 99% 0.5s. +15% crit damage. Free cast après possession."
            }
        }
    },
    {
        id: 151,
        name: "Viktor",
        title: "L'Héraut des Machines",
        role: "mage",
        icon: "🤖",
        baseStats: {
            hp: 600, hpGrowth: 104, hpRegen: 8, hpRegenGrowth: 0.65,
            mana: 405, manaGrowth: 25, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 53, adGrowth: 3, as: 0.658, asGrowth: 2.11,
            armor: 23, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Glorious Evolution",
            icon: "⬆️",
            description: "Hex Core: upgrade sorts. Gagne via CS et takedowns.",
            cooldown: "Passif",
            details: "100 Hex Fragments par upgrade (3 total). Fragments par CS/kills."
        },
        spells: {
            Q: {
                name: "Siphon Power",
                icon: "⚡",
                description: "Projectile + bouclier. Prochaine attaque empowered.",
                cooldown: "9/8/7/6/5s",
                cost: "45/50/55/60/65 Mana",
                damage: "60/80/100/120/140 (+40% AP)",
                damageType: "magic",
                details: "Bouclier: 27-105 (+15% AP). Empowered auto: +20/45/70/95/120 (+60% AP)."
            },
            W: {
                name: "Gravity Field",
                icon: "🧲",
                description: "Zone qui slow et stun après stacks.",
                cooldown: "17/16/15/14/13s",
                cost: "65 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Slow: 30-50%. 3 stacks = stun 1.5s."
            },
            E: {
                name: "Death Ray",
                icon: "🔦",
                description: "Laser en ligne que tu contrôles.",
                cooldown: "12/11/10/9/8s",
                cost: "70/80/90/100/110 Mana",
                damage: "70/110/150/190/230 (+50% AP)",
                damageType: "magic",
                details: "Upgraded: aftershock +20/50/80/110/140 (+80% AP)."
            },
            R: {
                name: "Chaos Storm",
                icon: "🌩️",
                description: "Tempête contrôlable qui suit ennemis.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "100/175/250 (+50% AP) initial + 65/105/145 (+45% AP) per tick",
                damageType: "magic",
                details: "Interrupt initial. Durée: 6.5s. Chase champions low HP."
            }
        }
    },
    {
        id: 152,
        name: "Vladimir",
        title: "Le Prince Cramoisi",
        role: "mage",
        icon: "🩸",
        baseStats: {
            hp: 607, hpGrowth: 110, hpRegen: 7, hpRegenGrowth: 0.6,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 55, adGrowth: 3, as: 0.658, asGrowth: 2,
            armor: 23, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 450
        },
        resource: "Aucun (HP)",
        passive: {
            name: "Crimson Pact",
            icon: "🩸",
            description: "AP → HP. Bonus HP → AP.",
            cooldown: "Passif",
            details: "160% bonus HP = AP. 2.5% AP = bonus HP."
        },
        spells: {
            Q: {
                name: "Transfusion",
                icon: "🩸",
                description: "Dégâts + heal. Empowered quand charged.",
                cooldown: "9/8/7/6/5s",
                cost: "Aucun",
                damage: "80/100/120/140/160 (+60% AP)",
                damageType: "magic",
                details: "Heal: 20/25/30/35/40 (+35% AP). Crimson Rush: +85% dégâts/heal."
            },
            W: {
                name: "Sanguine Pool",
                icon: "🌊",
                description: "Devient untargetable. Slow + dégâts + heal.",
                cooldown: "28/25/22/19/16s",
                cost: "20% current HP",
                damage: "20/33.75/47.5/61.25/75 (+2.5% bonus HP)",
                damageType: "magic",
                details: "Durée: 2s. Heal: 15% dégâts infligés. Slow: 40%."
            },
            E: {
                name: "Tides of Blood",
                icon: "🩸",
                description: "Charge puis explosion AOE.",
                cooldown: "13/11/9/7/5s",
                cost: "8% max HP",
                damage: "30/45/60/75/90 → 60/90/120/150/180 (+2.5-10% max HP)(+35-70% AP)",
                damageType: "magic",
                details: "Charge: 1.5s. Slow: 40-60%."
            },
            R: {
                name: "Hemoplague",
                icon: "☠️",
                description: "Marque zone. +10% dégâts. Explose après délai.",
                cooldown: "120s",
                cost: "Aucun",
                damage: "150/250/350 (+70% AP)",
                damageType: "magic",
                details: "+10% dégâts amplifiés 4s. Heal: 50% dégâts par champion."
            }
        }
    },
    {
        id: 153,
        name: "Volibear",
        title: "La Tempête Déchaînée",
        role: "fighter",
        icon: "🐻",
        baseStats: {
            hp: 650, hpGrowth: 104, hpRegen: 9, hpRegenGrowth: 0.75,
            mana: 350, manaGrowth: 40, manaRegen: 6.25, manaRegenGrowth: 0.6,
            ad: 60, adGrowth: 3.5, as: 0.625, asGrowth: 2,
            armor: 31, armorGrowth: 5.5, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 150
        },
        resource: "Mana",
        passive: {
            name: "The Relentless Storm",
            icon: "⚡",
            description: "Attaques stack lightning. Max stack = chain lightning.",
            cooldown: "Passif",
            details: "5 stacks: +11-60 (+40% AP) magic par attaque."
        },
        spells: {
            Q: {
                name: "Thundering Smash",
                icon: "🐻",
                description: "Gagne MS. Prochaine attaque = stun.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Mana",
                damage: "20/40/60/80/100 (+120% bonus AD)",
                damageType: "physical",
                details: "+8-16% MS vers champions. Stun: 1s."
            },
            W: {
                name: "Frenzied Maul",
                icon: "🦷",
                description: "Morsure. Marque cible. 2ème W = heal + bonus.",
                cooldown: "5s",
                cost: "30/35/40/45/50 Mana",
                damage: "10/35/60/85/110 (+100% AD)(+5% bonus HP)",
                damageType: "physical",
                details: "Wounded: +50% dégâts + heal 20-35 (+8-12% missing HP)."
            },
            E: {
                name: "Sky Splitter",
                icon: "⚡",
                description: "Lightning qui tombe. Bouclier si à l'intérieur.",
                cooldown: "15s",
                cost: "60 Mana",
                damage: "80/110/140/170/200 (+80% AP)(+11/12/13/14/15% max HP target)",
                damageType: "magic",
                details: "Delay: 2s. Bouclier: 15% max HP + 80/110/140/170/200 (+80% AP)."
            },
            R: {
                name: "Stormbringer",
                icon: "🌩️",
                description: "Saute et crash. Grandit + disable turrets.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "300/500/700 (+250% bonus AD)(+125% AP)",
                damageType: "physical",
                details: "+200/400/600 HP, +50 range. Turrets: disable 3s + dégâts 150-450."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_V;
}
