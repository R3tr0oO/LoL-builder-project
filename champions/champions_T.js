// ========================================
// CHAMPIONS - LETTRE T
// ========================================

const CHAMPIONS_T = [
    {
        id: 131,
        name: "Tahm Kench",
        title: "Le Roi des Rivières",
        role: "support",
        icon: "🐸",
        baseStats: {
            hp: 640, hpGrowth: 103, hpRegen: 6.5, hpRegenGrowth: 0.55,
            mana: 325, manaGrowth: 50, manaRegen: 8, manaRegenGrowth: 1,
            ad: 56, adGrowth: 3.2, as: 0.658, asGrowth: 2.5,
            armor: 42, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 310, range: 175
        },
        resource: "Mana",
        passive: {
            name: "An Acquired Taste",
            icon: "👅",
            description: "Attaques et Q stack. 3 stacks = peut W.",
            cooldown: "Passif",
            details: "Dégâts bonus: 8-60 (+2.5% HP bonus). 3 stacks = devour enabled."
        },
        spells: {
            Q: {
                name: "Tongue Lash",
                icon: "👅",
                description: "Langue qui dégâts + slow. Stun si 3 stacks.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "50 Mana",
                damage: "80/130/180/230/280 (+70% AP)",
                damageType: "magic",
                details: "Slow: 40%. 3 stacks: stun 1.5s. Heal: si cible 3 stack."
            },
            W: {
                name: "Abyssal Dive",
                icon: "🌊",
                description: "Plonge puis émerge. Peut avaler allié/ennemi.",
                cooldown: "22/20/18/16/14s",
                cost: "60/75/90/105/120 Mana",
                damage: "100/135/170/205/240 (+100% AP)",
                damageType: "magic",
                details: "Knock up: 1s. Devour ennemi: 3 stacks requis. Allié: protège."
            },
            E: {
                name: "Thick Skin",
                icon: "🛡️",
                description: "Passif: stocke dégâts en grey HP. Actif: bouclier ou heal.",
                cooldown: "3s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Stocke: 13-35% dégâts. Actif: convertit en bouclier. Passif: heal grey HP."
            },
            R: {
                name: "Devour",
                icon: "😋",
                description: "Avale allié pour protéger ou ennemi pour dégâts.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "100/250/400 (+15% HP bonus)(+100% AP) + 5/7/9% max HP/s",
                damageType: "magic",
                details: "Allié: invulnérable dedans. Ennemi: suppressed."
            }
        }
    },
    {
        id: 132,
        name: "Taliyah",
        title: "La Tisseuse de Pierres",
        role: "mage",
        icon: "🪨",
        baseStats: {
            hp: 580, hpGrowth: 104, hpRegen: 7, hpRegenGrowth: 0.7,
            mana: 470, manaGrowth: 30, manaRegen: 9, manaRegenGrowth: 0.85,
            ad: 58, adGrowth: 3.3, as: 0.625, asGrowth: 1.36,
            armor: 20, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Rock Surfing",
            icon: "🏄",
            description: "Près des murs, gagne MS.",
            cooldown: "Passif",
            details: "+20-45% MS près des murs. Delay après combat: 2s."
        },
        spells: {
            Q: {
                name: "Threaded Volley",
                icon: "🪨",
                description: "Tire 5 rochers. Worked Ground = 1 seul.",
                cooldown: "7/6/5/4/3s",
                cost: "60/65/70/75/80 Mana",
                damage: "45/65/85/105/125 (+50% AP) × 5",
                damageType: "magic",
                details: "Crée Worked Ground. Worked: 1 rocher, +20% dégâts, -50% coût."
            },
            W: {
                name: "Seismic Shove",
                icon: "💨",
                description: "Zone qui knock up vers direction.",
                cooldown: "14/12.5/11/9.5/8s",
                cost: "40/45/50/55/60 Mana",
                damage: "60/80/100/120/140 (+40% AP)",
                damageType: "magic",
                details: "Knock up: 0.75s. Direction: vers où elle pointe."
            },
            E: {
                name: "Unraveled Earth",
                icon: "🪨",
                description: "Zone de rochers. Dash dedans = explosion.",
                cooldown: "16/15/14/13/12s",
                cost: "90/95/100/105/110 Mana",
                damage: "50/75/100/125/150 (+50% AP) initial + 25/45/65/85/105 (+30% AP) par rocher",
                damageType: "magic",
                details: "Slow: 20-40%. Dash = détone rochers. Max 4 explosions."
            },
            R: {
                name: "Weaver's Wall",
                icon: "🧱",
                description: "Surfe sur mur qu'elle crée.",
                cooldown: "180/150/120s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Range: 2500-6000. Durée: 4-6s. Dégâts = démonte."
            }
        }
    },
    {
        id: 133,
        name: "Talon",
        title: "L'Ombre du Couteau",
        role: "assassin",
        icon: "🗡️",
        baseStats: {
            hp: 658, hpGrowth: 99, hpRegen: 8.5, hpRegenGrowth: 0.75,
            mana: 378, manaGrowth: 37, manaRegen: 8, manaRegenGrowth: 0.7,
            ad: 68, adGrowth: 3.1, as: 0.625, asGrowth: 2.9,
            armor: 30, armorGrowth: 4.7, mr: 39, mrGrowth: 2.05,
            ms: 335, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Blade's End",
            icon: "🔪",
            description: "3 stacks de sorts = prochaine attaque = bleed.",
            cooldown: "Passif",
            details: "Bleed: 75-245 (+200% bonus AD) sur 2s."
        },
        spells: {
            Q: {
                name: "Noxian Diplomacy",
                icon: "🗡️",
                description: "Stab proche ou leap loin. Crit si close.",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "30 Mana",
                damage: "65/85/105/125/145 (+100% bonus AD)",
                damageType: "physical",
                details: "Close (<200): +50% dégâts. Loin: leap. Heal si tue."
            },
            W: {
                name: "Rake",
                icon: "🔪",
                description: "Lance lames qui reviennent. Slow.",
                cooldown: "9s",
                cost: "55/60/65/70/75 Mana",
                damage: "45/60/75/90/105 (+55% bonus AD) aller + 45/65/85/105/125 (+70% bonus AD) retour",
                damageType: "physical",
                details: "Slow: 40-60%. Applique 2 stacks passif (aller + retour)."
            },
            E: {
                name: "Assassin's Path",
                icon: "🧗",
                description: "Saute par-dessus murs. CD par mur.",
                cooldown: "2s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "CD par terrain: 160-60s. Peut traverser n'importe quel mur."
            },
            R: {
                name: "Shadow Assault",
                icon: "👤",
                description: "Invisibilité + anneau de lames. Lames reviennent.",
                cooldown: "90/80/70s",
                cost: "100 Mana",
                damage: "90/135/180 (+100% bonus AD) × 2",
                damageType: "physical",
                details: "Invisible: 2.5s. +40% MS. Attaque/Q = lames convergent."
            }
        }
    },
    {
        id: 134,
        name: "Taric",
        title: "Le Bouclier de Valoran",
        role: "support",
        icon: "💎",
        baseStats: {
            hp: 645, hpGrowth: 99, hpRegen: 6, hpRegenGrowth: 0.5,
            mana: 300, manaGrowth: 60, manaRegen: 8.5, manaRegenGrowth: 0.8,
            ad: 55, adGrowth: 3.5, as: 0.625, asGrowth: 2,
            armor: 40, armorGrowth: 4.6, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Bravado",
            icon: "💎",
            description: "Après sort, 2 attaques = bonus dégâts + CD réduction.",
            cooldown: "Passif",
            details: "Dégâts: 25-93 (+15% armor). -1s CD par attaque."
        },
        spells: {
            Q: {
                name: "Starlight's Touch",
                icon: "✨",
                description: "Heal lui + alliés proches. Charges.",
                cooldown: "3s par charge",
                cost: "60/70/80/90/100 Mana",
                damage: "Heal: 25 (+15% AP)(+1.5% max HP) par charge",
                damageType: "utility",
                details: "Max 5 charges. Cast depuis Bastion aussi."
            },
            W: {
                name: "Bastion",
                icon: "🛡️",
                description: "Lie à allié. Sorts cast depuis les deux.",
                cooldown: "15s",
                cost: "60 Mana",
                damage: "Bouclier: 8/9/10/11/12% max HP",
                damageType: "utility",
                details: "Passive: +10-20% armor aux deux. Sorts = cast des deux."
            },
            E: {
                name: "Dazzle",
                icon: "💫",
                description: "Projectile qui stun après délai.",
                cooldown: "15/14/13/12/11s",
                cost: "60/65/70/75/80 Mana",
                damage: "90/130/170/210/250 (+50% AP)(+60% armor)",
                damageType: "magic",
                details: "Stun: 1.25s. Cast depuis Bastion aussi."
            },
            R: {
                name: "Cosmic Radiance",
                icon: "🌟",
                description: "Après délai, invulnérabilité pour lui et Bastion.",
                cooldown: "180/150/120s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Delay: 2.5s. Invulnérable: 2.5s. Zone autour des deux."
            }
        }
    },
    {
        id: 135,
        name: "Teemo",
        title: "L'Éclaireur Swift",
        role: "marksman",
        icon: "🍄",
        baseStats: {
            hp: 598, hpGrowth: 94, hpRegen: 5.5, hpRegenGrowth: 0.65,
            mana: 334, manaGrowth: 25, manaRegen: 9.6, manaRegenGrowth: 0.45,
            ad: 54, adGrowth: 3, as: 0.69, asGrowth: 3.38,
            armor: 24, armorGrowth: 4.45, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Guerrilla Warfare",
            icon: "👻",
            description: "Immobile = camouflage. Sortie = AS bonus.",
            cooldown: "Passif",
            details: "Camouflage: après 1.5s immobile. Sortie: +20-60% AS."
        },
        spells: {
            Q: {
                name: "Blinding Dart",
                icon: "🎯",
                description: "Projectile qui blind.",
                cooldown: "8/7/6/5/4s",
                cost: "70/75/80/85/90 Mana",
                damage: "80/125/170/215/260 (+80% AP)",
                damageType: "magic",
                details: "Blind: 1.5/1.75/2/2.25/2.5s."
            },
            W: {
                name: "Move Quick",
                icon: "💨",
                description: "Passif: MS. Actif: double + ignore slows.",
                cooldown: "17s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "Passif: +10-26% MS. Actif: double 3s. Perdu si dégâts (passif)."
            },
            E: {
                name: "Toxic Shot",
                icon: "☠️",
                description: "Passif: attaques empoisonnent.",
                cooldown: "Passif",
                cost: "Aucun",
                damage: "10/20/30/40/50 (+30% AP) impact + 6/12/18/24/30 (+10% AP)/s",
                damageType: "magic",
                details: "Poison: 4s."
            },
            R: {
                name: "Noxious Trap",
                icon: "🍄",
                description: "Place champignon invisible. Explosion = poison + slow.",
                cooldown: "0.25s (charge: 30/25/20s)",
                cost: "75 Mana",
                damage: "200/325/450 (+55% AP) sur 4s",
                damageType: "magic",
                details: "Slow: 30-60%. Max 3-5 charges. Durée: 5min. Révèle."
            }
        }
    },
    {
        id: 136,
        name: "Thresh",
        title: "Le Geôlier des Âmes",
        role: "support",
        icon: "⛓️",
        baseStats: {
            hp: 600, hpGrowth: 106, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 274, manaGrowth: 44, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 56, adGrowth: 2.2, as: 0.625, asGrowth: 3.5,
            armor: 31, armorGrowth: 0, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 450
        },
        resource: "Mana",
        passive: {
            name: "Damnation",
            icon: "👻",
            description: "Collecte âmes. Âmes = armor + AP.",
            cooldown: "Passif",
            details: "Par âme: +1 armor, +1 AP. Pas d'armor par niveau."
        },
        spells: {
            Q: {
                name: "Death Sentence",
                icon: "🪝",
                description: "Hook qui stun + peut dash vers cible.",
                cooldown: "20/18/16/14/12s",
                cost: "70 Mana",
                damage: "100/145/190/235/280 (+70% AP)",
                damageType: "magic",
                details: "Stun: 1.5s. 2ème cast: dash vers cible."
            },
            W: {
                name: "Dark Passage",
                icon: "🛡️",
                description: "Lance lanterne. Allié clique = dash + bouclier.",
                cooldown: "22/20.5/19/17.5/16s",
                cost: "50/55/60/65/70 Mana",
                damage: "Bouclier: 60/90/120/150/180 (+2 par âme)",
                damageType: "utility",
                details: "Collecte âmes proches. Allié = dash vers Thresh."
            },
            E: {
                name: "Flay",
                icon: "⛓️",
                description: "Sweep chaîne push/pull + slow.",
                cooldown: "9s",
                cost: "60/65/70/75/80 Mana",
                damage: "75/110/145/180/215 (+60% AP)",
                damageType: "magic",
                details: "Direction: push ou pull. Slow: 20-40% 1s. Passif: +80-200% AD."
            },
            R: {
                name: "The Box",
                icon: "📦",
                description: "Crée pentagon de murs. Contact = slow + dégâts.",
                cooldown: "140/120/100s",
                cost: "100 Mana",
                damage: "250/400/550 (+100% AP)",
                damageType: "magic",
                details: "Slow: 99% 2s. Murs suivants: 50% dégâts/slow."
            }
        }
    },
    {
        id: 137,
        name: "Tristana",
        title: "L'Artilleuse Yordle",
        role: "marksman",
        icon: "💥",
        baseStats: {
            hp: 600, hpGrowth: 101, hpRegen: 3.75, hpRegenGrowth: 0.65,
            mana: 250, manaGrowth: 32, manaRegen: 7.2, manaRegenGrowth: 0.45,
            ad: 59, adGrowth: 3.3, as: 0.656, asGrowth: 1.5,
            armor: 26, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Draw a Bead",
            icon: "🎯",
            description: "Gagne range par niveau.",
            cooldown: "Passif",
            details: "+0-136 range (niveau 1-18). Max: 661."
        },
        spells: {
            Q: {
                name: "Rapid Fire",
                icon: "🔫",
                description: "Gagne AS massif.",
                cooldown: "20/19/18/17/16s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "buff",
                details: "+65-115% AS pendant 7s."
            },
            W: {
                name: "Rocket Jump",
                icon: "🚀",
                description: "Saute. Slow zone. Reset sur kill/E explosion.",
                cooldown: "22/20/18/16/14s",
                cost: "60 Mana",
                damage: "95/145/195/245/295 (+50% AP)",
                damageType: "magic",
                details: "Slow: 60% 1s. Reset si kill ou E max stacks."
            },
            E: {
                name: "Explosive Charge",
                icon: "💣",
                description: "Passif: kills explosent. Actif: bombe sur cible.",
                cooldown: "16/15/14/13/12s",
                cost: "50/55/60/65/70 Mana",
                damage: "70/80/90/100/110 (+50/65/80/95/110% bonus AD)(+50% AP)",
                damageType: "physical",
                details: "+30% par stack (4 max). Peut crit. Stacks par AA/sorts."
            },
            R: {
                name: "Buster Shot",
                icon: "💥",
                description: "Tire rocket qui knockback.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "300/400/500 (+100% AP)",
                damageType: "magic",
                details: "Knockback: 600-1000. +1 stack E."
            }
        }
    },
    {
        id: 138,
        name: "Trundle",
        title: "Le Roi des Trolls",
        role: "fighter",
        icon: "🧌",
        baseStats: {
            hp: 650, hpGrowth: 106, hpRegen: 6, hpRegenGrowth: 0.75,
            mana: 281, manaGrowth: 45, manaRegen: 7.5, manaRegenGrowth: 0.6,
            ad: 68, adGrowth: 3, as: 0.67, asGrowth: 2.9,
            armor: 37, armorGrowth: 4.4, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 175
        },
        resource: "Mana",
        passive: {
            name: "King's Tribute",
            icon: "💀",
            description: "Unités qui meurent near = heal.",
            cooldown: "Passif",
            details: "Heal: 2-7% max HP cible morte."
        },
        spells: {
            Q: {
                name: "Chomp",
                icon: "🦷",
                description: "Prochaine attaque = bonus dégâts + vol AD.",
                cooldown: "4s",
                cost: "30 Mana",
                damage: "20/40/60/80/100 (+15/25/35/45/55% AD)",
                damageType: "physical",
                details: "Vol: 10-30 AD pendant 4s."
            },
            W: {
                name: "Frozen Domain",
                icon: "❄️",
                description: "Zone qui buff lui: AS, MS, heal.",
                cooldown: "16/15/14/13/12s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+30-70% AS, +20-40% MS, +25% heal amplifié. Durée: 6s."
            },
            E: {
                name: "Pillar of Ice",
                icon: "🧊",
                description: "Crée pilier qui slow + bloque.",
                cooldown: "22/20/18/16/14s",
                cost: "40/45/50/55/60 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Slow: 30-60%. Zone: 3s. Knockback léger à création."
            },
            R: {
                name: "Subjugate",
                icon: "👑",
                description: "Vole % armor, MR, HP de la cible.",
                cooldown: "120/100/80s",
                cost: "75 Mana",
                damage: "20/27.5/35% max HP (+2% par 100 AP)",
                damageType: "magic",
                details: "Vol: 40% armor/MR sur 4s. Durée: 4s."
            }
        }
    },
    {
        id: 139,
        name: "Tryndamere",
        title: "Le Roi Barbare",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 696, hpGrowth: 115, hpRegen: 8.5, hpRegenGrowth: 0.9,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 72, adGrowth: 3.7, as: 0.67, asGrowth: 2.9,
            armor: 33, armorGrowth: 4.3, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Fury",
        passive: {
            name: "Battle Fury",
            icon: "😤",
            description: "Génère Fury. Fury = crit chance.",
            cooldown: "Passif",
            details: "+0.35% crit par Fury. Max 100 fury = 35% crit."
        },
        spells: {
            Q: {
                name: "Bloodlust",
                icon: "💉",
                description: "Passif: AD selon PV manquants. Actif: consume fury = heal.",
                cooldown: "12s",
                cost: "Aucun",
                damage: "Heal: 30/40/50/60/70 (+30% AP) + 0.5/0.95/1.4/1.85/2.3 (+1.2% AP) par fury",
                damageType: "utility",
                details: "Passif: +5-40 AD selon PV manquants."
            },
            W: {
                name: "Mocking Shout",
                icon: "😤",
                description: "Slow ennemis qui fuient + réduction AD.",
                cooldown: "14s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Slow: 30-60% si fuient. -20-80 AD pendant 4s."
            },
            E: {
                name: "Spinning Slash",
                icon: "🌀",
                description: "Dash qui dégâts. CD réduit par crits.",
                cooldown: "12/11/10/9/8s",
                cost: "Aucun",
                damage: "80/110/140/170/200 (+80% bonus AD)(+80% AP)",
                damageType: "physical",
                details: "Peut crit. -1s par crit (-2s sur champions)."
            },
            R: {
                name: "Undying Rage",
                icon: "💀",
                description: "Ne peut pas mourir pendant 5s.",
                cooldown: "110/100/90s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "buff",
                details: "5s. Min 30/50/70 HP. Génère 50/75/100 Fury."
            }
        }
    },
    {
        id: 140,
        name: "Twisted Fate",
        title: "Le Maître des Cartes",
        role: "mage",
        icon: "🃏",
        baseStats: {
            hp: 604, hpGrowth: 103, hpRegen: 5.5, hpRegenGrowth: 0.6,
            mana: 333, manaGrowth: 39, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 52, adGrowth: 3.3, as: 0.651, asGrowth: 3.22,
            armor: 21, armorGrowth: 4.65, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Loaded Dice",
            icon: "🎲",
            description: "Kills donnent or bonus (1-6 aléatoire).",
            cooldown: "Passif",
            details: "+1-6 or par kill (moyenne 3.5)."
        },
        spells: {
            Q: {
                name: "Wild Cards",
                icon: "🃏",
                description: "Lance 3 cartes en cône.",
                cooldown: "6s",
                cost: "60/70/80/90/100 Mana",
                damage: "60/100/140/180/220 (+70% AP)",
                damageType: "magic",
                details: "Passe à travers unités."
            },
            W: {
                name: "Pick A Card",
                icon: "🎴",
                description: "Cycle entre cartes. 2ème cast = lock.",
                cooldown: "8/7.5/7/6.5/6s",
                cost: "40/55/70/85/100 Mana",
                damage: "40/60/80/100/120 (+100% AD)(+90% AP)",
                damageType: "magic",
                details: "Blue: mana. Red: AOE slow. Gold: stun."
            },
            E: {
                name: "Stacked Deck",
                icon: "📚",
                description: "Passif: AS. Chaque 4ème attaque = bonus dégâts.",
                cooldown: "Passif",
                cost: "Aucun",
                damage: "65/90/115/140/165 (+50% AP)",
                damageType: "magic",
                details: "Passif: +10-30% AS."
            },
            R: {
                name: "Destiny",
                icon: "👁️",
                description: "Révèle tous ennemis. Peut TP vers location.",
                cooldown: "150/125/100s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Révèle: 6s. TP range: 5500. Canal: 1.5s."
            }
        }
    },
    {
        id: 141,
        name: "Twitch",
        title: "Le Rat des Égouts",
        role: "marksman",
        icon: "🐀",
        baseStats: {
            hp: 612, hpGrowth: 102, hpRegen: 3.75, hpRegenGrowth: 0.6,
            mana: 300, manaGrowth: 40, manaRegen: 7.25, manaRegenGrowth: 0.45,
            ad: 59, adGrowth: 3.4, as: 0.679, asGrowth: 3.38,
            armor: 27, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 550
        },
        resource: "Mana",
        passive: {
            name: "Deadly Venom",
            icon: "☠️",
            description: "Attaques appliquent poison stack.",
            cooldown: "Passif",
            details: "Poison: 1/2/3/4/5 dégâts vrais/s par stack. Max 6 stacks."
        },
        spells: {
            Q: {
                name: "Ambush",
                icon: "👻",
                description: "Camouflage après délai. Sortie = AS.",
                cooldown: "16s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "Délai: 1s. Invisible: jusqu'à 10-14s. Sortie: +40-60% AS 5s."
            },
            W: {
                name: "Venom Cask",
                icon: "🧪",
                description: "Lance fiole qui slow + applique poison.",
                cooldown: "13/12/11/10/9s",
                cost: "70 Mana",
                damage: "Aucun direct",
                damageType: "utility",
                details: "Slow: 30-50% 3s. Applique 2 stacks/s."
            },
            E: {
                name: "Contaminate",
                icon: "💀",
                description: "Explose poison sur ennemis marqués.",
                cooldown: "12/11/10/9/8s",
                cost: "50/60/70/80/90 Mana",
                damage: "20/30/40/50/60 (+35% bonus AD)(+35% AP) + 15/20/25/30/35 (+35% bonus AD) par stack",
                damageType: "physical",
                details: "Détone tous stacks de poison."
            },
            R: {
                name: "Spray and Pray",
                icon: "🔫",
                description: "Attaques traversent + bonus AD + range.",
                cooldown: "90s",
                cost: "100 Mana",
                damage: "+40/55/70 AD bonus",
                damageType: "physical",
                details: "+300 range (850 total). Durée: 6s. Bolt traverse ennemis."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_T;
}
