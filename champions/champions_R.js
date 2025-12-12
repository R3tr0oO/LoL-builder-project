// ========================================
// CHAMPIONS - LETTRE R
// ========================================

const CHAMPIONS_R = [
    {
        id: 103,
        name: "Rakan",
        title: "Le Charmeur",
        role: "support",
        icon: "🪶",
        baseStats: {
            hp: 590, hpGrowth: 99, hpRegen: 5, hpRegenGrowth: 0.5,
            mana: 315, manaGrowth: 50, manaRegen: 8.75, manaRegenGrowth: 0.5,
            ad: 62, adGrowth: 3.5, as: 0.635, asGrowth: 3,
            armor: 32, armorGrowth: 5, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 300
        },
        resource: "Mana",
        passive: {
            name: "Fey Feathers",
            icon: "🛡️",
            description: "Gagne bouclier périodiquement. Xayah nearby = bonus.",
            cooldown: "40-14s",
            details: "Bouclier: 33-254 (+90% AP). Toucher ennemi accélère recharge."
        },
        spells: {
            Q: {
                name: "Gleaming Quill",
                icon: "🪶",
                description: "Projectile qui heal si retourne à allié ou Rakan.",
                cooldown: "12/11/10/9/8s",
                cost: "60 Mana",
                damage: "70/115/160/205/250 (+60% AP)",
                damageType: "magic",
                details: "Heal: 18-120 (+70% AP) si touche champion et retourne."
            },
            W: {
                name: "Grand Entrance",
                icon: "💨",
                description: "Dash + knock up zone.",
                cooldown: "18/16.5/15/13.5/12s",
                cost: "50/60/70/80/90 Mana",
                damage: "70/125/180/235/290 (+70% AP)",
                damageType: "magic",
                details: "Knock up: 1s."
            },
            E: {
                name: "Battle Dance",
                icon: "💃",
                description: "Dash vers allié + bouclier. Range étendue vers Xayah.",
                cooldown: "20/18/16/14/12s",
                cost: "60/70/80/90/100 Mana",
                damage: "Bouclier: 40/65/90/115/140 (+80% AP)",
                damageType: "utility",
                details: "Peut recast vers autre allié. Xayah: +300 range."
            },
            R: {
                name: "The Quickness",
                icon: "✨",
                description: "Gagne MS + charme ennemis touchés.",
                cooldown: "130/110/90s",
                cost: "100 Mana",
                damage: "100/200/300 (+50% AP)",
                damageType: "magic",
                details: "+75% MS 4s. Charme: 1/1.25/1.5s. Premier = extended W."
            }
        }
    },
    {
        id: 104,
        name: "Rammus",
        title: "L'Armordillo",
        role: "tank",
        icon: "🐢",
        baseStats: {
            hp: 634, hpGrowth: 95, hpRegen: 7.5, hpRegenGrowth: 0.55,
            mana: 311, manaGrowth: 33, manaRegen: 8, manaRegenGrowth: 0.5,
            ad: 56, adGrowth: 3.5, as: 0.625, asGrowth: 2.5,
            armor: 40, armorGrowth: 5.5, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Spiked Shell",
            icon: "🔨",
            description: "Attaques de base infligent bonus selon armor.",
            cooldown: "Passif",
            details: "Dégâts bonus: 10% armor."
        },
        spells: {
            Q: {
                name: "Powerball",
                icon: "⚫",
                description: "Roule en boule. Collision = slow + dégâts.",
                cooldown: "16/13.5/11/8.5/6s",
                cost: "60 Mana",
                damage: "100/130/160/190/220 (+100% AP)",
                damageType: "magic",
                details: "+25-35% MS. Collision: slow 40-80% 1s. Airborne."
            },
            W: {
                name: "Defensive Ball Curl",
                icon: "🛡️",
                description: "Gagne armor + MR. Reflète dégâts. Self-slow.",
                cooldown: "6s",
                cost: "40 Mana",
                damage: "Réflexion: 15 (+10% armor)",
                damageType: "magic",
                details: "+30 armor, +10 MR. Self: -30% MS. Toggle off possible."
            },
            E: {
                name: "Frenzying Taunt",
                icon: "😤",
                description: "Taunt ennemi + AS boost.",
                cooldown: "12/11.5/11/10.5/10s",
                cost: "50 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Taunt: 1.2-2s. +20-60% AS pendant durée."
            },
            R: {
                name: "Soaring Slam",
                icon: "💥",
                description: "Saute et atterrit. Zone qui tremble.",
                cooldown: "90s",
                cost: "100 Mana",
                damage: "100/175/250 (+60% AP) + 30/60/90 (+10% AP)/s tremblement",
                damageType: "magic",
                details: "Slow: 15%. Zone: 3.5s. Plus de dégâts si plus loin."
            }
        }
    },
    {
        id: 105,
        name: "Rek'Sai",
        title: "La Terreur du Néant",
        role: "fighter",
        icon: "🦈",
        baseStats: {
            hp: 640, hpGrowth: 85, hpRegen: 7.5, hpRegenGrowth: 0.65,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 64, adGrowth: 3.35, as: 0.667, asGrowth: 2,
            armor: 36, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 175
        },
        resource: "Fury",
        passive: {
            name: "Fury of the Xer'Sai",
            icon: "😤",
            description: "Surface: génère Fury. Sous terre: Fury = heal.",
            cooldown: "Passif",
            details: "Sous terre: 20 heal + 2-20 par Fury/s (niveau)."
        },
        spells: {
            Q: {
                name: "Queen's Wrath / Prey Seeker",
                icon: "👊",
                description: "Surface: 3 attaques bonus. Sous terre: projectile.",
                cooldown: "4s",
                cost: "Aucun",
                damage: "Surface: 21/27/33/39/45 (+50% bonus AD) ×3 | Sous terre: 60/90/120/150/180 (+50% bonus AD)(+70% AP)",
                damageType: "physical",
                details: "Surface: fury gen. Sous terre: révèle ennemis."
            },
            W: {
                name: "Burrow / Unburrow",
                icon: "🕳️",
                description: "Toggle: surface ↔ sous terre.",
                cooldown: "1s",
                cost: "Aucun",
                damage: "Unburrow: 50/65/80/95/110 (+80% bonus AD)",
                damageType: "physical",
                details: "Sous terre: MS +15-40, vision tremblement. Unburrow: knock up."
            },
            E: {
                name: "Furious Bite / Tunnel",
                icon: "🦷",
                description: "Surface: morsure (true si 100 fury). Sous terre: créer tunnel.",
                cooldown: "Surface: 12s | Tunnel: 26-14s",
                cost: "Fury / Aucun",
                damage: "55/60/65/70/75% AD (+max 100 fury = true dmg)",
                damageType: "physical",
                details: "100 Fury: true damage. Tunnels: persistent, utilisables par R."
            },
            R: {
                name: "Void Rush",
                icon: "💨",
                description: "Marque ennemi par dégâts. R = dash vers marqué.",
                cooldown: "100/90/80s",
                cost: "Aucun",
                damage: "100/250/400 (+175% bonus AD)(+20/25/30% missing HP)",
                damageType: "physical",
                details: "Marque: passif par dégâts. Unstoppable. Peut utiliser tunnels."
            }
        }
    },
    {
        id: 106,
        name: "Rell",
        title: "La Dame de Fer",
        role: "support",
        icon: "🛡️",
        baseStats: {
            hp: 610, hpGrowth: 104, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 350, manaGrowth: 45, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3, as: 0.55, asGrowth: 2,
            armor: 39, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 335, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Break the Mold",
            icon: "🔨",
            description: "Attaques volent armor/MR.",
            cooldown: "8s par cible",
            details: "Vol: 2-5% armor/MR. Gagne pour elle-même."
        },
        spells: {
            Q: {
                name: "Shattering Strike",
                icon: "⚔️",
                description: "Stab qui break shields + heal si allié bound.",
                cooldown: "11/10.5/10/9.5/9s",
                cost: "50 Mana",
                damage: "70/110/150/190/230 (+60% AP)",
                damageType: "magic",
                details: "Break shields. Si E lié: heal."
            },
            W: {
                name: "Ferromancy: Crash Down / Mount Up",
                icon: "🐎",
                description: "Alterne: crash = knock up. Mount = charge stun.",
                cooldown: "13s",
                cost: "Aucun",
                damage: "70/105/140/175/210 (+60% AP)",
                damageType: "magic",
                details: "Crash: knock up 1s, -15% MS ensuite. Mount: +25% MS, stun premier touché."
            },
            E: {
                name: "Full Tilt",
                icon: "🔗",
                description: "Lie à allié. Q/W avec lien = effets bonus.",
                cooldown: "3s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Gagne ramping MS en chargeant. Lie à allié pour synergies Q/R."
            },
            R: {
                name: "Magnet Storm",
                icon: "🧲",
                description: "Pull tous ennemis vers elle.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "120/200/280 (+110% AP)",
                damageType: "magic",
                details: "Pull: 2s. Stun si E lié."
            }
        }
    },
    {
        id: 107,
        name: "Renata Glasc",
        title: "La Baronne des Produits Chimiques",
        role: "support",
        icon: "💜",
        baseStats: {
            hp: 545, hpGrowth: 94, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 350, manaGrowth: 50, manaRegen: 11.5, manaRegenGrowth: 0.5,
            ad: 51, adGrowth: 3, as: 0.625, asGrowth: 2.1,
            armor: 27, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Leverage",
            icon: "💫",
            description: "Attaques marquent. Alliés procent = dégâts bonus.",
            cooldown: "Passif",
            details: "Marque: dégâts bonus = 1-2% max HP (+1% par 100 AP)."
        },
        spells: {
            Q: {
                name: "Handshake",
                icon: "🤝",
                description: "Projectile qui root puis lance vers direction.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "80 Mana",
                damage: "80/125/170/215/260 (+80% AP)",
                damageType: "magic",
                details: "Root: 1s. Recast: lance vers direction. Stun si collision."
            },
            W: {
                name: "Bailout",
                icon: "💚",
                description: "Buff allié: AS + MS. Si meurt = revive brièvement.",
                cooldown: "28/26/24/22/20s",
                cost: "80 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+10-30% AS, +10-20% MS 5s. Mort: revit 3s, full vie si takedown."
            },
            E: {
                name: "Loyalty Program",
                icon: "🛡️",
                description: "Envoie missiles. Alliés = bouclier. Ennemis = dégâts.",
                cooldown: "14/13/12/11/10s",
                cost: "70/80/90/100/110 Mana",
                damage: "65/95/125/155/185 (+55% AP)",
                damageType: "magic",
                details: "Bouclier: 50/70/90/110/130 (+50% AP). Slow: 30%."
            },
            R: {
                name: "Hostile Takeover",
                icon: "😈",
                description: "Vague qui fait attaquer ennemis leurs alliés.",
                cooldown: "150/130/110s",
                cost: "100 Mana",
                damage: "Aucun direct",
                damageType: "utility",
                details: "Berserk: 1.25-2.25s. Attaquent alliés. +100% AS."
            }
        }
    },
    {
        id: 108,
        name: "Renekton",
        title: "Le Boucher des Sables",
        role: "fighter",
        icon: "🐊",
        baseStats: {
            hp: 660, hpGrowth: 92, hpRegen: 8, hpRegenGrowth: 0.75,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 69, adGrowth: 3.75, as: 0.665, asGrowth: 2.65,
            armor: 35, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Fury",
        passive: {
            name: "Reign of Anger",
            icon: "😤",
            description: "Génère Fury. 50 Fury = sorts empowered.",
            cooldown: "Passif",
            details: "Combat: +2.5 fury/auto. 50+ fury: sort enhanced."
        },
        spells: {
            Q: {
                name: "Cull the Meek",
                icon: "🔪",
                description: "Spin qui heal. Empowered = bonus.",
                cooldown: "8s",
                cost: "50 Fury",
                damage: "65/100/135/170/205 (+80% bonus AD)",
                damageType: "physical",
                details: "Heal: 3-12 per enemy. Empowered: +50% dégâts/heal."
            },
            W: {
                name: "Ruthless Predator",
                icon: "💥",
                description: "Prochaine attaque stun + frappe 2×.",
                cooldown: "13/12/11/10/9s",
                cost: "50 Fury",
                damage: "10/30/50/70/90 (+150% AD) ×2",
                damageType: "physical",
                details: "Stun: 0.75s. Empowered: 3 hits + destroy shields + stun 1.5s."
            },
            E: {
                name: "Slice and Dice",
                icon: "💨",
                description: "Dash. Toucher ennemi = 2ème dash.",
                cooldown: "16/14.5/13/11.5/10s",
                cost: "50 Fury (2ème dash)",
                damage: "40/70/100/130/160 (+90% bonus AD)",
                damageType: "physical",
                details: "2ème dash si touche ennemi. Empowered 2ème: armor shred 25-35%."
            },
            R: {
                name: "Dominus",
                icon: "🐊",
                description: "Grandit. HP bonus + fury gen + dégâts aura.",
                cooldown: "120s",
                cost: "Aucun",
                damage: "40/80/120 (+10% AP) par seconde",
                damageType: "magic",
                details: "+250/500/750 HP. +20 fury/s. Durée: 15s."
            }
        }
    },
    {
        id: 109,
        name: "Rengar",
        title: "Le Chasseur Suprême",
        role: "assassin",
        icon: "🦁",
        baseStats: {
            hp: 620, hpGrowth: 99, hpRegen: 7, hpRegenGrowth: 0.5,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 68, adGrowth: 3, as: 0.667, asGrowth: 3,
            armor: 34, armorGrowth: 4.5, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Ferocity",
        passive: {
            name: "Unseen Predator",
            icon: "🌿",
            description: "Depuis buisson: leap. 4 Ferocity = sort empowered.",
            cooldown: "Passif",
            details: "Leap range: 600-825. Trophées: AD bonus par trophée unique."
        },
        spells: {
            Q: {
                name: "Savagery",
                icon: "🗡️",
                description: "Prochaines 2 attaques + bonus dégâts. Empowered: AS aussi.",
                cooldown: "6/5.5/5/4.5/4s",
                cost: "1 Ferocity",
                damage: "30/60/90/120/150 (+0-30% AD)",
                damageType: "physical",
                details: "2 attaques. Empowered: +40-101 + bonus AS."
            },
            W: {
                name: "Battle Roar",
                icon: "🦁",
                description: "Rugit = dégâts + heal grey HP. Empowered: cleanse + heal.",
                cooldown: "16/14/12/10/8s",
                cost: "1 Ferocity",
                damage: "50/80/110/140/170 (+80% AP)",
                damageType: "magic",
                details: "Heal: 50% dégâts récents. Empowered: remove CC + full grey HP."
            },
            E: {
                name: "Bola Strike",
                icon: "🎯",
                description: "Lance bola qui slow. Empowered: root.",
                cooldown: "10s",
                cost: "1 Ferocity",
                damage: "55/100/145/190/235 (+80% bonus AD)",
                damageType: "physical",
                details: "Slow: 30-70% 1.75s. Empowered: root 1.75s."
            },
            R: {
                name: "Thrill of the Hunt",
                icon: "👁️",
                description: "Camouflage + true sight sur nearest enemy. Leap = crit.",
                cooldown: "110/90/70s",
                cost: "Aucun",
                damage: "Aucun direct",
                damageType: "utility",
                details: "Camouflage. Révèle nearest. Leap: +25-45% MS, crit bonus."
            }
        }
    },
    {
        id: 110,
        name: "Riven",
        title: "L'Exilée",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 630, hpGrowth: 100, hpRegen: 8.5, hpRegenGrowth: 0.5,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 64, adGrowth: 3, as: 0.625, asGrowth: 3.5,
            armor: 33, armorGrowth: 4.4, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Aucun",
        passive: {
            name: "Runic Blade",
            icon: "⚔️",
            description: "Sorts chargent lame. Attaques consomment = bonus.",
            cooldown: "Passif",
            details: "Stacks: max 3. Bonus: 25-50% AD par stack."
        },
        spells: {
            Q: {
                name: "Broken Wings",
                icon: "💨",
                description: "3 slashes. 3ème = knock up.",
                cooldown: "12s (after 3rd)",
                cost: "Aucun",
                damage: "15/35/55/75/95 (+45-55% AD) par slash",
                damageType: "physical",
                details: "3 casts. 3ème: knock up."
            },
            W: {
                name: "Ki Burst",
                icon: "💥",
                description: "Stun autour.",
                cooldown: "11/10/9/8/7s",
                cost: "Aucun",
                damage: "55/85/115/145/175 (+100% bonus AD)",
                damageType: "physical",
                details: "Stun: 0.75s."
            },
            E: {
                name: "Valor",
                icon: "🛡️",
                description: "Dash + bouclier.",
                cooldown: "10/9/8/7/6s",
                cost: "Aucun",
                damage: "Bouclier: 80/105/130/155/180 (+100% bonus AD)",
                damageType: "utility",
                details: "Bouclier: 1.5s."
            },
            R: {
                name: "Blade of the Exile",
                icon: "⚔️",
                description: "Répare lame: +AD + range. Recast: Wind Slash execute.",
                cooldown: "75/60/45s",
                cost: "Aucun",
                damage: "Wind Slash: 100/150/200 (+60% bonus AD) → ×3 si low HP",
                damageType: "physical",
                details: "+20% AD, +75 range. Durée: 15s. R2: execute wave."
            }
        }
    },
    {
        id: 111,
        name: "Rumble",
        title: "La Menace Mécanique",
        role: "mage",
        icon: "🤖",
        baseStats: {
            hp: 659, hpGrowth: 90, hpRegen: 8, hpRegenGrowth: 0.6,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 61, adGrowth: 3.2, as: 0.644, asGrowth: 1.85,
            armor: 31, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Heat",
        passive: {
            name: "Junkyard Titan",
            icon: "🔥",
            description: "Sorts = Heat. 50+ = Danger Zone (bonus). 100 = Overheat (silence + AA bonus).",
            cooldown: "Passif",
            details: "50-99 Heat: +50% effet sorts. 100: silenced 6s mais AA bonus."
        },
        spells: {
            Q: {
                name: "Flamespitter",
                icon: "🔥",
                description: "Crache flammes devant.",
                cooldown: "6s",
                cost: "20 Heat",
                damage: "175/210/245/280/315 (+110% AP) total",
                damageType: "magic",
                details: "3s durée. -50% vs minions."
            },
            W: {
                name: "Scrap Shield",
                icon: "🛡️",
                description: "Bouclier + MS.",
                cooldown: "6s",
                cost: "20 Heat",
                damage: "Bouclier: 60/90/120/150/180 (+50% AP)",
                damageType: "utility",
                details: "+10-20% MS 1.5s."
            },
            E: {
                name: "Electro Harpoon",
                icon: "🎯",
                description: "Tire harpon qui slow. 2 charges.",
                cooldown: "0.5s (Recharge: 6s)",
                cost: "10 Heat",
                damage: "60/90/120/150/180 (+40% AP)",
                damageType: "magic",
                details: "Slow: 15-35%. Stacks. 2 charges max."
            },
            R: {
                name: "The Equalizer",
                icon: "🚀",
                description: "Lance missiles ligne qui zone burning.",
                cooldown: "100/85/70s",
                cost: "Aucun",
                damage: "70/105/140 (+17.5% AP) initial + 130/185/240 (+35% AP)/s",
                damageType: "magic",
                details: "Zone: 5s. Slow: 35%. Line targeting."
            }
        }
    },
    {
        id: 112,
        name: "Ryze",
        title: "Le Mage Runique",
        role: "mage",
        icon: "📜",
        baseStats: {
            hp: 645, hpGrowth: 124, hpRegen: 8, hpRegenGrowth: 0.8,
            mana: 300, manaGrowth: 70, manaRegen: 8, manaRegenGrowth: 1,
            ad: 58, adGrowth: 3, as: 0.625, asGrowth: 2.11,
            armor: 22, armorGrowth: 4.2, mr: 36, mrGrowth: 1.3,
            ms: 340, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Arcane Mastery",
            icon: "📘",
            description: "Mana bonus = AP bonus.",
            cooldown: "Passif",
            details: "+5% AP par 100 mana bonus."
        },
        spells: {
            Q: {
                name: "Overload",
                icon: "⚡",
                description: "Projectile. Si E/W avant, bonus + MS.",
                cooldown: "6s",
                cost: "40/38/36/34/32 Mana",
                damage: "75/100/125/150/175 (+50% AP)(+3% bonus mana)",
                damageType: "magic",
                details: "Si E/W récent: +10-40% bonus + MS."
            },
            W: {
                name: "Rune Prison",
                icon: "⛓️",
                description: "Root cible.",
                cooldown: "13/12/11/10/9s",
                cost: "40/55/70/85/100 Mana",
                damage: "80/110/140/170/200 (+60% AP)(+4% bonus mana)",
                damageType: "magic",
                details: "Root: 1.5s."
            },
            E: {
                name: "Spell Flux",
                icon: "💜",
                description: "Marque cible. Q spread si tue.",
                cooldown: "3.25/3/2.75/2.5/2.25s",
                cost: "35/45/55/65/75 Mana",
                damage: "60/80/100/120/140 (+30% AP)(+2% bonus mana)",
                damageType: "magic",
                details: "Marque: Q bounce. Kill: spread flux."
            },
            R: {
                name: "Realm Warp",
                icon: "🌀",
                description: "Téléporte alliés dans zone vers destination.",
                cooldown: "210/180/150s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Canal: 2s. Range: 1750-3000. Tous alliés dans cercle."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_R;
}
