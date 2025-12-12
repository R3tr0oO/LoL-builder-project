// ========================================
// CHAMPIONS - LETTRE K
// ========================================

const CHAMPIONS_K = [
    {
        id: 56,
        name: "Kai'Sa",
        title: "La Fille du Néant",
        role: "marksman",
        icon: "🦋",
        baseStats: {
            hp: 640, hpGrowth: 102, hpRegen: 3.5, hpRegenGrowth: 0.55,
            mana: 345, manaGrowth: 40, manaRegen: 8.2, manaRegenGrowth: 0.45,
            ad: 59, adGrowth: 2, as: 0.644, asGrowth: 1.8,
            armor: 25, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Second Skin",
            icon: "💜",
            description: "Attaques marquent. 5 stacks = rupture % PV manquants. Évolue avec stats.",
            cooldown: "Passif",
            details: "Rupture: 15% (+2.5%/100 AP) PV manquants. Évolutions: Q (100 AD), W (100 AP), E (100% AS)."
        },
        spells: {
            Q: {
                name: "Icathian Rain",
                icon: "🌧️",
                description: "Tire missiles sur ennemis proches.",
                cooldown: "10/9/8/7/6s",
                cost: "55 Mana",
                damage: "40/55/70/85/100 (+50% bonus AD)(+25% AP) × 6",
                damageType: "physical",
                details: "6 missiles (12 évolué). +25% dégâts sur même cible isolée."
            },
            W: {
                name: "Void Seeker",
                icon: "💜",
                description: "Projectile qui révèle et applique stacks.",
                cooldown: "22/20/18/16/14s",
                cost: "55/60/65/70/75 Mana",
                damage: "30/55/80/105/130 (+130% AD)(+70% AP)",
                damageType: "magic",
                details: "Applique 2 stacks (3 évolué). Évolué: refund 77% CD si touche champion."
            },
            E: {
                name: "Supercharge",
                icon: "💨",
                description: "Gagne MS puis AS.",
                cooldown: "16/15/14/13/12s",
                cost: "30 Mana",
                damage: "Aucun",
                damageType: "buff",
                details: "+55-75% MS 1.2s. +40-80% AS 4s. Évolué: invisibilité 0.5s."
            },
            R: {
                name: "Killer Instinct",
                icon: "🦋",
                description: "Dash longue portée vers champion marqué + bouclier.",
                cooldown: "130/100/70s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Range: 1500-3000. Bouclier: 70-150 (+90% AD)(+120% AP)."
            }
        }
    },
    {
        id: 57,
        name: "Kalista",
        title: "La Lance de la Vengeance",
        role: "marksman",
        icon: "👻",
        baseStats: {
            hp: 604, hpGrowth: 100, hpRegen: 3.75, hpRegenGrowth: 0.55,
            mana: 250, manaGrowth: 45, manaRegen: 6.3, manaRegenGrowth: 0.4,
            ad: 59, adGrowth: 3.5, as: 0.694, asGrowth: 4.5,
            armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Martial Poise",
            icon: "💨",
            description: "Attaques dash. Ne peut pas annuler attaque.",
            cooldown: "Passif",
            details: "Dash: direction mouvement. Dégâts auto: 90% AD."
        },
        spells: {
            Q: {
                name: "Pierce",
                icon: "🗡️",
                description: "Lance qui traverse si tue cible.",
                cooldown: "8s",
                cost: "50/55/60/65/70 Mana",
                damage: "20/85/150/215/280 (+105% AD)",
                damageType: "physical",
                details: "Transfère lances de E si tue."
            },
            W: {
                name: "Sentinel",
                icon: "👁️",
                description: "Envoie sentinel qui patrouille. Lien avec Oathsworn.",
                cooldown: "20s",
                cost: "Aucun",
                damage: "Passif: +14/15/16/17/18% AD avec Oathsworn",
                damageType: "physical",
                details: "Sentinel patrouille zone. Révèle ennemis."
            },
            E: {
                name: "Rend",
                icon: "💀",
                description: "Retire lances. Dégâts par lance. Reset si tue.",
                cooldown: "14/12.5/11/9.5/8s",
                cost: "30 Mana",
                damage: "20/30/40/50/60 (+70% AD) + 10/16/22/28/34 (+25-35% AD)/lance",
                damageType: "physical",
                details: "Slow: 10-40%. Reset CD si tue."
            },
            R: {
                name: "Fate's Call",
                icon: "🌀",
                description: "Attire Oathsworn puis le projette.",
                cooldown: "150/120/90s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Oathsworn invulnérable pendant pull. Knock up 1-1.5s au landing."
            }
        }
    },
    {
        id: 58,
        name: "Karma",
        title: "L'Âme Éclairée",
        role: "support",
        icon: "☯️",
        baseStats: {
            hp: 604, hpGrowth: 99, hpRegen: 5.5, hpRegenGrowth: 0.55,
            mana: 374, manaGrowth: 50, manaRegen: 11.5, manaRegenGrowth: 0.5,
            ad: 51, adGrowth: 3.3, as: 0.625, asGrowth: 2.3,
            armor: 28, armorGrowth: 5, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 525
        },
        resource: "Mana",
        passive: {
            name: "Gathering Fire",
            icon: "🔥",
            description: "Dégâts aux champions réduisent CD de R.",
            cooldown: "Passif",
            details: "Réduction: 2-5s par compétence, 0.5-1.5s par attaque."
        },
        spells: {
            Q: {
                name: "Inner Flame",
                icon: "🔥",
                description: "Projectile qui explose. Mantra: zone + slow.",
                cooldown: "9/8/7/6/5s",
                cost: "45 Mana",
                damage: "70/120/170/220/270 (+40% AP)",
                damageType: "magic",
                details: "Mantra (Soulflare): +35/140/245/350 (+60% AP). Zone slow 50%."
            },
            W: {
                name: "Focused Resolve",
                icon: "🔗",
                description: "Lien qui root. Mantra: soigne.",
                cooldown: "12s",
                cost: "50/55/60/65/70 Mana",
                damage: "40/65/90/115/140 (+45% AP) × 2",
                damageType: "magic",
                details: "Lien: 2s. Root: 1.4-2.2s. Mantra: heal 17-21% PV manquants."
            },
            E: {
                name: "Inspire",
                icon: "💨",
                description: "Bouclier + MS. Mantra: bouclier zone.",
                cooldown: "10/9.5/9/8.5/8s",
                cost: "50/55/60/65/70 Mana",
                damage: "Bouclier: 80/120/160/200/240 (+50% AP)",
                damageType: "utility",
                details: "+40-60% MS 1.5s. Mantra: 50% bouclier aux alliés proches."
            },
            R: {
                name: "Mantra",
                icon: "☯️",
                description: "Améliore prochaine compétence.",
                cooldown: "40/38/36/34s",
                cost: "Aucun",
                damage: "Aucun",
                damageType: "utility",
                details: "Disponible niveau 1. Empowers Q, W ou E."
            }
        }
    },
    {
        id: 59,
        name: "Karthus",
        title: "La Voix de la Mort",
        role: "mage",
        icon: "💀",
        baseStats: {
            hp: 620, hpGrowth: 101, hpRegen: 6.5, hpRegenGrowth: 0.55,
            mana: 467, manaGrowth: 35, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 46, adGrowth: 3.25, as: 0.625, asGrowth: 2.11,
            armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 450
        },
        resource: "Mana",
        passive: {
            name: "Death Defied",
            icon: "👻",
            description: "Après mort, reste actif 7s. Peut lancer sorts sans coût.",
            cooldown: "Passif",
            details: "7s de survie. Sorts gratuits. Immobile."
        },
        spells: {
            Q: {
                name: "Lay Waste",
                icon: "💀",
                description: "Explosion après délai. Double dégâts si cible isolée.",
                cooldown: "1s",
                cost: "20/25/30/35/40 Mana",
                damage: "45/62.5/80/97.5/115 (+35% AP)",
                damageType: "magic",
                details: "Délai: 0.5s. Dégâts ×2 si cible seule."
            },
            W: {
                name: "Wall of Pain",
                icon: "🧱",
                description: "Mur qui slow et réduit MR.",
                cooldown: "15s",
                cost: "70 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 5s. Slow: 40-80%. -15% MR 4s."
            },
            E: {
                name: "Defile",
                icon: "☠️",
                description: "Toggle: dégâts autour. Passif: restore mana sur kill.",
                cooldown: "0.5s",
                cost: "30/42/54/66/78 Mana/s",
                damage: "30/50/70/90/110 (+20% AP)/s",
                damageType: "magic",
                details: "Passif: +20/27/34/41/48 mana par kill."
            },
            R: {
                name: "Requiem",
                icon: "🎵",
                description: "Canal 3s puis dégâts à TOUS les ennemis.",
                cooldown: "200/180/160s",
                cost: "100 Mana",
                damage: "200/350/500 (+75% AP)",
                damageType: "magic",
                details: "Global. Canal 3s. Peut être interrompu."
            }
        }
    },
    {
        id: 60,
        name: "Kassadin",
        title: "Le Marcheur du Néant",
        role: "assassin",
        icon: "🌀",
        baseStats: {
            hp: 646, hpGrowth: 119, hpRegen: 7.5, hpRegenGrowth: 0.5,
            mana: 479, manaGrowth: 87, manaRegen: 6, manaRegenGrowth: 0.8,
            ad: 59, adGrowth: 3.9, as: 0.64, asGrowth: 3.7,
            armor: 19, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 150
        },
        resource: "Mana",
        passive: {
            name: "Void Stone",
            icon: "💜",
            description: "Ignore collision. Réduit dégâts magiques.",
            cooldown: "Passif",
            details: "-10% dégâts magiques subis."
        },
        spells: {
            Q: {
                name: "Void Sphere",
                icon: "🔮",
                description: "Projectile qui interrompt canaux.",
                cooldown: "11/10.5/10/9.5/9s",
                cost: "70/75/80/85/90 Mana",
                damage: "65/95/125/155/185 (+70% AP)",
                damageType: "magic",
                details: "Interrompt canaux. Bouclier magique: 40-160 (+30% AP)."
            },
            W: {
                name: "Nether Blade",
                icon: "🗡️",
                description: "Prochaine attaque = dégâts magiques bonus + restore mana.",
                cooldown: "7s",
                cost: "Aucun",
                damage: "50/75/100/125/150 (+80% AP)",
                damageType: "magic",
                details: "Restore: 4-6% mana manquant."
            },
            E: {
                name: "Force Pulse",
                icon: "💨",
                description: "Cône slow + dégâts. Nécessite 6 sorts lancés nearby.",
                cooldown: "5s",
                cost: "60/65/70/75/80 Mana",
                damage: "60/90/120/150/180 (+85% AP)",
                damageType: "magic",
                details: "Slow: 65-95% 1s. Requiert 6 charges."
            },
            R: {
                name: "Riftwalk",
                icon: "🌀",
                description: "Blink court. Coût et dégâts augmentent si spam.",
                cooldown: "5/3.5/2s",
                cost: "40 Mana (+40 par stack)",
                damage: "70/90/110 (+40% AP)(+2% max mana)",
                damageType: "magic",
                details: "Range: 500. Stack ×4 max. +50% dégâts par stack."
            }
        }
    },
    {
        id: 61,
        name: "Katarina",
        title: "La Lame Sinistre",
        role: "assassin",
        icon: "🗡️",
        baseStats: {
            hp: 672, hpGrowth: 108, hpRegen: 7.5, hpRegenGrowth: 0.7,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 58, adGrowth: 3.2, as: 0.658, asGrowth: 2.74,
            armor: 28, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 125
        },
        resource: "Aucun",
        passive: {
            name: "Voracity",
            icon: "💀",
            description: "Takedowns reset CDs. Dagues au sol = dégâts si ramassées.",
            cooldown: "Passif",
            details: "Takedown: -15s tous CDs. Dague: 68-240 (+65% bonus AD)(+55-100% AP)."
        },
        spells: {
            Q: {
                name: "Bouncing Blade",
                icon: "🔪",
                description: "Lance dague qui rebondit sur 2 cibles puis tombe.",
                cooldown: "11/10/9/8/7s",
                cost: "Aucun",
                damage: "80/110/140/170/200 (+35% AP)",
                damageType: "magic",
                details: "Dague tombe derrière cible initiale."
            },
            W: {
                name: "Preparation",
                icon: "💨",
                description: "Gagne MS et drop dague à position.",
                cooldown: "15/14/13/12/11s",
                cost: "Aucun",
                damage: "Aucun direct",
                damageType: "utility",
                details: "+50-90% MS 1.25s. Dague après 1.25s."
            },
            E: {
                name: "Shunpo",
                icon: "✨",
                description: "Blink vers cible/dague. Reset partiel si dague.",
                cooldown: "14/12.5/11/9.5/8s",
                cost: "Aucun",
                damage: "20/35/50/65/80 (+50% AD)(+25% AP)",
                damageType: "magic",
                details: "Reset: -78% CD si récupère dague."
            },
            R: {
                name: "Death Lotus",
                icon: "🌀",
                description: "Canal: lance dagues sur 3 champions les plus proches.",
                cooldown: "90/60/45s",
                cost: "Aucun",
                damage: "375/562.5/750 (+285% bonus AD)(+180% AP)",
                damageType: "magic",
                details: "2.5s canal. Applique Grievous Wounds."
            }
        }
    },
    {
        id: 62,
        name: "Kayle",
        title: "La Justicière",
        role: "fighter",
        icon: "⚔️",
        baseStats: {
            hp: 670, hpGrowth: 108, hpRegen: 5, hpRegenGrowth: 0.5,
            mana: 330, manaGrowth: 50, manaRegen: 8, manaRegenGrowth: 0.8,
            ad: 52, adGrowth: 2.5, as: 0.667, asGrowth: 1.5,
            armor: 28, armorGrowth: 4.7, mr: 26, mrGrowth: 1.3,
            ms: 335, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Divine Ascent",
            icon: "👼",
            description: "Gagne pouvoir selon niveau. Attaques stack.",
            cooldown: "Passif",
            details: "Niv1: stack AS. Niv6: range 525 + waves. Niv11: permanent. Niv16: waves true dmg."
        },
        spells: {
            Q: {
                name: "Radiant Blast",
                icon: "💫",
                description: "Épée projectile qui slow et réduit armor/MR.",
                cooldown: "12/11/10/9/8s",
                cost: "70/75/80/85/90 Mana",
                damage: "60/100/140/180/220 (+60% bonus AD)(+50% AP)",
                damageType: "magic",
                details: "Slow: 26-50% 2s. -15% armor/MR."
            },
            W: {
                name: "Celestial Blessing",
                icon: "💚",
                description: "Heal et MS pour elle et allié.",
                cooldown: "15s",
                cost: "90/100/110/120/130 Mana",
                damage: "Heal: 55/80/105/130/155 (+25% AP)",
                damageType: "utility",
                details: "+24-40% MS 2s. Affecte allié le plus blessé."
            },
            E: {
                name: "Starfire Spellblade",
                icon: "✨",
                description: "Passif: dégâts magiques on-hit. Actif: exécute.",
                cooldown: "8s",
                cost: "50/55/60/65/70 Mana",
                damage: "Passif: 15/20/25/30/35 (+10% bonus AD)(+20% AP)",
                damageType: "magic",
                details: "Actif: +8-12% PV manquants."
            },
            R: {
                name: "Divine Judgment",
                icon: "👼",
                description: "Rend cible invulnérable puis épées tombent.",
                cooldown: "160/120/80s",
                cost: "100 Mana",
                damage: "200/350/500 (+80% bonus AD)(+70% AP)",
                damageType: "magic",
                details: "Invulnérable: 2/2.5/3s. Auto-cast possible."
            }
        }
    },
    {
        id: 63,
        name: "Kayn",
        title: "L'Ombre de la Faux",
        role: "assassin",
        icon: "👤",
        baseStats: {
            hp: 655, hpGrowth: 109, hpRegen: 8, hpRegenGrowth: 0.75,
            mana: 410, manaGrowth: 50, manaRegen: 11.5, manaRegenGrowth: 0.95,
            ad: 68, adGrowth: 3.8, as: 0.669, asGrowth: 2.7,
            armor: 38, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 340, range: 175
        },
        resource: "Mana",
        passive: {
            name: "The Darkin Scythe",
            icon: "🔴",
            description: "Collecte orbes pour transformer. Rhaast (fighter) ou Shadow (assassin).",
            cooldown: "Passif",
            details: "Melee = Rhaast orbes. Ranged = Shadow orbes. Transform après seuil."
        },
        spells: {
            Q: {
                name: "Reaping Slash",
                icon: "🔪",
                description: "Dash + spin. Traverse murs.",
                cooldown: "7/6.5/6/5.5/5s",
                cost: "50 Mana",
                damage: "75/95/115/135/155 (+65% bonus AD) × 2",
                damageType: "physical",
                details: "Rhaast: +5% PV max. Shadow: +50% bonus AD scaling."
            },
            W: {
                name: "Blade's Reach",
                icon: "🌀",
                description: "Frappe en ligne. Rhaast knock up. Shadow slow.",
                cooldown: "13/12/11/10/9s",
                cost: "60/65/70/75/80 Mana",
                damage: "90/135/180/225/270 (+130% bonus AD)",
                damageType: "physical",
                details: "Rhaast: knock up 1s. Shadow: +200 range + slow 90%."
            },
            E: {
                name: "Shadow Step",
                icon: "🚪",
                description: "Entre dans mur. Heal et MS.",
                cooldown: "21/19/17/15/13s",
                cost: "90 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Durée: 1.5s (+7/8/9/10/11s mur). +40% MS. Heal: 100-250."
            },
            R: {
                name: "Umbral Trespass",
                icon: "👁️",
                description: "Entre dans champion marqué puis ressort avec dégâts.",
                cooldown: "120/100/80s",
                cost: "100 Mana",
                damage: "150/250/350 (+175% bonus AD)",
                damageType: "physical",
                details: "Invulnérable 2.5s. Rhaast: +15% PV max heal. Shadow: reset E."
            }
        }
    },
    {
        id: 64,
        name: "Kennen",
        title: "Le Cœur de la Tempête",
        role: "mage",
        icon: "⚡",
        baseStats: {
            hp: 611, hpGrowth: 99, hpRegen: 5.5, hpRegenGrowth: 0.65,
            mana: 200, manaGrowth: 0, manaRegen: 50, manaRegenGrowth: 0,
            ad: 48, adGrowth: 3.75, as: 0.625, asGrowth: 3.4,
            armor: 29, armorGrowth: 4.95, mr: 30, mrGrowth: 1.3,
            ms: 335, range: 550
        },
        resource: "Énergie",
        passive: {
            name: "Mark of the Storm",
            icon: "⚡",
            description: "Compétences marquent. 3 marks = stun.",
            cooldown: "Passif",
            details: "Stun: 1.25s (réduit si récent). +25 énergie par stun."
        },
        spells: {
            Q: {
                name: "Thundering Shuriken",
                icon: "⭐",
                description: "Lance shuriken en ligne.",
                cooldown: "8/7/6/5/4s",
                cost: "60/55/50/45/40 Énergie",
                damage: "75/120/165/210/255 (+75% AP)",
                damageType: "magic",
                details: "Premier ennemi touché."
            },
            W: {
                name: "Electrical Surge",
                icon: "⚡",
                description: "Passif: chaque 5ème attaque marque. Actif: dégâts aux marqués.",
                cooldown: "14/12/10/8/6s",
                cost: "40 Énergie",
                damage: "60/85/110/135/160 (+80% AP)",
                damageType: "magic",
                details: "Passif: +20-50 (+60% bonus AD)(+30% AP). Actif: cibles marquées seulement."
            },
            E: {
                name: "Lightning Rush",
                icon: "💨",
                description: "Devient éclair. MS, traverse unités, marque ennemis.",
                cooldown: "10/9/8/7/6s",
                cost: "80 Énergie",
                damage: "80/120/160/200/240 (+80% AP)",
                damageType: "magic",
                details: "+100% MS. +30-60 armor/MR. Refund 40 énergie par champion."
            },
            R: {
                name: "Slicing Maelstrom",
                icon: "🌀",
                description: "Tempête autour qui frappe ennemis multiples fois.",
                cooldown: "120s",
                cost: "Aucun",
                damage: "40/75/110 (+20% AP) par bolt (max 3 par cible)",
                damageType: "magic",
                details: "6/10/15 bolts total. Durée: 3s."
            }
        }
    },
    {
        id: 65,
        name: "Kha'Zix",
        title: "Le Prédateur du Néant",
        role: "assassin",
        icon: "🦗",
        baseStats: {
            hp: 638, hpGrowth: 99, hpRegen: 7.5, hpRegenGrowth: 0.75,
            mana: 327, manaGrowth: 40, manaRegen: 11.5, manaRegenGrowth: 0.65,
            ad: 63, adGrowth: 3.1, as: 0.668, asGrowth: 2.7,
            armor: 36, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05,
            ms: 350, range: 125
        },
        resource: "Mana",
        passive: {
            name: "Unseen Threat",
            icon: "👁️",
            description: "Après invisibilité/buisson, prochaine attaque = bonus + slow.",
            cooldown: "Passif",
            details: "Dégâts: 14-150 (+40% bonus AD) magic. Slow: 25% 2s."
        },
        spells: {
            Q: {
                name: "Taste Their Fear",
                icon: "🦷",
                description: "Coup qui fait +100% dégâts si cible isolée.",
                cooldown: "4s",
                cost: "20 Mana",
                damage: "60/85/110/135/160 (+115% bonus AD)",
                damageType: "physical",
                details: "Isolé: +100% dégâts. Évolution: +65 range + refund 45% CD."
            },
            W: {
                name: "Void Spike",
                icon: "🔺",
                description: "Tire épines qui explosent. Heal si Kha'Zix dedans.",
                cooldown: "9s",
                cost: "55/60/65/70/75 Mana",
                damage: "85/115/145/175/205 (+100% bonus AD)",
                damageType: "physical",
                details: "Slow: 60% 2s. Heal: 60-160 (+50% bonus AD). Évolué: 3 spikes + slow 80%."
            },
            E: {
                name: "Leap",
                icon: "🦘",
                description: "Saute vers zone.",
                cooldown: "20/18/16/14/12s",
                cost: "50 Mana",
                damage: "65/100/135/170/205 (+20% bonus AD)",
                damageType: "physical",
                details: "Évolué: +200 range + reset sur takedown."
            },
            R: {
                name: "Void Assault",
                icon: "👻",
                description: "Devient invisible 1.25s. 2 charges.",
                cooldown: "100/85/70s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "2 casts. +40% MS. Évolué: 3 casts + durée 2s."
            }
        }
    },
    {
        id: 66,
        name: "Kindred",
        title: "Les Chasseurs Éternels",
        role: "marksman",
        icon: "🐺",
        baseStats: {
            hp: 610, hpGrowth: 104, hpRegen: 7, hpRegenGrowth: 0.55,
            mana: 300, manaGrowth: 35, manaRegen: 6.97, manaRegenGrowth: 0.4,
            ad: 65, adGrowth: 3.25, as: 0.625, asGrowth: 3.5,
            armor: 29, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3,
            ms: 325, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Mark of the Kindred",
            icon: "🎯",
            description: "Marque camps/champions. Collecter = bonus permanent.",
            cooldown: "Passif",
            details: "Par mark: +1.5% PV actuel sur attaques. +25 range à 4 marks puis +25 toutes les 3."
        },
        spells: {
            Q: {
                name: "Dance of Arrows",
                icon: "💨",
                description: "Dash et tire 3 flèches aux ennemis proches.",
                cooldown: "9s",
                cost: "35 Mana",
                damage: "60/80/100/120/140 (+75% bonus AD) total",
                damageType: "physical",
                details: "CD réduit à 2s dans W. Dégâts par flèche."
            },
            W: {
                name: "Wolf's Frenzy",
                icon: "🐺",
                description: "Wolf attaque dans zone. Passif: mouvement charge heal.",
                cooldown: "18/17/16/15/14s",
                cost: "40 Mana",
                damage: "25/30/35/40/45 (+20% bonus AD) par Wolf",
                damageType: "physical",
                details: "Zone: 8.5s. Wolf AS = Lamb AS. Heal: 0-47% PV manquants."
            },
            E: {
                name: "Mounting Dread",
                icon: "💀",
                description: "Marque cible. 3ème attaque = dégâts % PV manquants.",
                cooldown: "14/13/12/11/10s",
                cost: "50 Mana",
                damage: "80/100/120/140/160 (+80% bonus AD) + 8% PV manquants (+0.5% par mark)",
                damageType: "physical",
                details: "Slow: 50% 1s. Peut crit."
            },
            R: {
                name: "Lamb's Respite",
                icon: "✨",
                description: "Zone où personne ne peut mourir.",
                cooldown: "180/150/120s",
                cost: "100 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "4s. Minimum 10% HP. Heal 225-375 (+150% bonus AD) à la fin."
            }
        }
    },
    {
        id: 67,
        name: "Kled",
        title: "Le Cantankéreux Cavalier",
        role: "fighter",
        icon: "🦎",
        baseStats: {
            hp: 420, hpGrowth: 95, hpRegen: 6, hpRegenGrowth: 0.75,
            mana: 0, manaGrowth: 0, manaRegen: 0, manaRegenGrowth: 0,
            ad: 65, adGrowth: 3.5, as: 0.625, asGrowth: 3.5,
            armor: 35, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 345, range: 125
        },
        resource: "Courage",
        passive: {
            name: "Skaarl the Cowardly Lizard",
            icon: "🦎",
            description: "Skaarl = second HP bar. Perd Skaarl = dismount.",
            cooldown: "Passif",
            details: "Skaarl: 400-1420 HP. Dismount: 80% tenacity. Remonte en gagnant courage."
        },
        spells: {
            Q: {
                name: "Bear Trap on a Rope / Pocket Pistol",
                icon: "🪤",
                description: "Monté: lance piège. Dismount: shotgun knockback.",
                cooldown: "9/8.5/8/7.5/7s",
                cost: "Aucun",
                damage: "Monté: 100/150/200/250/300 (+80% bonus AD) | Pistol: 30-80 (+80% bonus AD) ×5",
                damageType: "physical",
                details: "Monté: pull 1.75s si tenu. Dismount: restore 5 courage par hit."
            },
            W: {
                name: "Violent Tendencies",
                icon: "💢",
                description: "Passif: 4 attaques rapides périodiquement. 4ème = bonus.",
                cooldown: "14/12.5/11/9.5/8s",
                cost: "Aucun",
                damage: "4ème hit: 20/30/40/50/60 (+4.5/5/5.5/6/6.5% PV max)",
                damageType: "physical",
                details: "+150% AS pendant combo. Active auto."
            },
            E: {
                name: "Jousting",
                icon: "🏇",
                description: "Monté: charge. Traverse = peut recharger.",
                cooldown: "13/12/11/10/9s",
                cost: "Aucun",
                damage: "35/60/85/110/135 (+60% bonus AD)",
                damageType: "physical",
                details: "+100-180 si passe à travers. Second cast possible."
            },
            R: {
                name: "Chaaaaaaaarge!!!",
                icon: "🚩",
                description: "Charge vers direction. Alliés gagnent MS.",
                cooldown: "160/140/120s",
                cost: "Aucun",
                damage: "4/5/6% PV max (+4% par 100 bonus AD)",
                damageType: "physical",
                details: "Premier champion: knock-up. Trail: +15-45% MS alliés."
            }
        }
    },
    {
        id: 68,
        name: "Kog'Maw",
        title: "La Bouche de l'Abîme",
        role: "marksman",
        icon: "🐛",
        baseStats: {
            hp: 635, hpGrowth: 99, hpRegen: 3.75, hpRegenGrowth: 0.55,
            mana: 325, manaGrowth: 40, manaRegen: 8.75, manaRegenGrowth: 0.7,
            ad: 61, adGrowth: 3.1, as: 0.665, asGrowth: 2.65,
            armor: 24, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3,
            ms: 330, range: 500
        },
        resource: "Mana",
        passive: {
            name: "Icathian Surprise",
            icon: "💥",
            description: "À la mort, court et explose.",
            cooldown: "Passif",
            details: "4s. +40% MS. Dégâts: 140-550 true damage."
        },
        spells: {
            Q: {
                name: "Caustic Spittle",
                icon: "💧",
                description: "Crachat qui réduit armor/MR. Passif: AS.",
                cooldown: "8s",
                cost: "40 Mana",
                damage: "90/140/190/240/290 (+70% AP)",
                damageType: "magic",
                details: "-20-36% armor/MR 4s. Passif: +10-30% AS."
            },
            W: {
                name: "Bio-Arcane Barrage",
                icon: "🔬",
                description: "Attaques gagnent range + % PV max.",
                cooldown: "17s",
                cost: "40 Mana",
                damage: "3.5/4.25/5/5.75/6.5% PV max (+1% par 100 AP)",
                damageType: "magic",
                details: "Durée: 8s. +130/150/170/190/210 range."
            },
            E: {
                name: "Void Ooze",
                icon: "💚",
                description: "Crache ligne de slime qui slow.",
                cooldown: "12s",
                cost: "60/70/80/90/100 Mana",
                damage: "60/105/150/195/240 (+70% AP)",
                damageType: "magic",
                details: "Zone: slow 20-60% pendant 4s."
            },
            R: {
                name: "Living Artillery",
                icon: "🎯",
                description: "Bombarde zone. Coût augmente si spam.",
                cooldown: "2/1.5/1s",
                cost: "40 Mana (+40 par stack, max 400)",
                damage: "100/140/180 (+65% bonus AD)(+35% AP)",
                damageType: "magic",
                details: "Range: 1300-1700. +0-50% dégâts selon PV manquants."
            }
        }
    },
    {
        id: 69,
        name: "K'Sante",
        title: "Le Gardien du Seuil",
        role: "tank",
        icon: "🦁",
        baseStats: {
            hp: 625, hpGrowth: 104, hpRegen: 9.5, hpRegenGrowth: 0.85,
            mana: 320, manaGrowth: 60, manaRegen: 7.5, manaRegenGrowth: 0.9,
            ad: 60, adGrowth: 3.5, as: 0.625, asGrowth: 2.5,
            armor: 33, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05,
            ms: 330, range: 175
        },
        resource: "Mana",
        passive: {
            name: "Dauntless Instinct",
            icon: "🛡️",
            description: "Compétences marquent. Attaque sur marqué = % PV max.",
            cooldown: "Passif",
            details: "Dégâts: 2-15% PV max. All Out: bonus converti en AD."
        },
        spells: {
            Q: {
                name: "Ntofo Strikes",
                icon: "🔨",
                description: "Frappe. 3ème Q = pull.",
                cooldown: "4/3.5/3/2.5/2s",
                cost: "28/26/24/22/20 Mana",
                damage: "30/55/80/105/130 (+40% AD)(+30% bonus armor/MR)",
                damageType: "physical",
                details: "Q3: pull vers centre. All Out: projette."
            },
            W: {
                name: "Path Maker",
                icon: "🚶",
                description: "Canal: unstoppable. Relâche: dash + stun.",
                cooldown: "22/20.5/19/17.5/16s",
                cost: "45/50/55/60/65 Mana",
                damage: "50/100/150/200/250 (+50% AD)(+50% bonus HP)",
                damageType: "physical",
                details: "Canal: réduit dégâts 60-80%. Stun: 0.5-1.25s."
            },
            E: {
                name: "Footwork",
                icon: "💨",
                description: "Dash. Si vers allié: bouclier.",
                cooldown: "9/8/7/6/5s",
                cost: "40 Mana",
                damage: "Aucun",
                damageType: "utility",
                details: "Bouclier: 50-90 (+15% bonus HP). All Out: plus de range."
            },
            R: {
                name: "All Out",
                icon: "⚔️",
                description: "Pousse champion à travers mur. Devient All Out.",
                cooldown: "140/120/100s",
                cost: "Aucun",
                damage: "35/70/105 (+20% bonus AD) + distance",
                damageType: "physical",
                details: "All Out: perd 85% armor/MR bonus → AD. +20% max HP true dmg sur passif."
            }
        }
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHAMPIONS_K;
}
