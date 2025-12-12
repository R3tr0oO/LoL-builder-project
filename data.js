// Champions avec stats de base et croissance par niveau
const CHAMPIONS_DATA = [
    { id: 1, name: "Aatrox", role: "fighter", icon: "⚔️", baseStats: { hp: 650, hpGrowth: 114, mana: 0, manaGrowth: 0, ad: 60, adGrowth: 5, armor: 38, armorGrowth: 4.45, mr: 32, mrGrowth: 2.05, as: 0.651, asGrowth: 2.5, ms: 345, range: 175 }},
    { id: 2, name: "Ahri", role: "mage", icon: "🦊", baseStats: { hp: 590, hpGrowth: 96, mana: 418, manaGrowth: 25, ad: 53, adGrowth: 3, armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.668, asGrowth: 2, ms: 330, range: 550 }},
    { id: 3, name: "Akali", role: "assassin", icon: "🗡️", baseStats: { hp: 570, hpGrowth: 119, mana: 200, manaGrowth: 0, ad: 62, adGrowth: 3.3, armor: 23, armorGrowth: 4.7, mr: 37, mrGrowth: 2.05, as: 0.625, asGrowth: 3.2, ms: 345, range: 125 }},
    { id: 4, name: "Ashe", role: "marksman", icon: "🏹", baseStats: { hp: 640, hpGrowth: 101, mana: 280, manaGrowth: 35, ad: 59, adGrowth: 2.95, armor: 26, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3, as: 0.658, asGrowth: 3.33, ms: 325, range: 600 }},
    { id: 5, name: "Caitlyn", role: "marksman", icon: "🎯", baseStats: { hp: 580, hpGrowth: 107, mana: 315, manaGrowth: 40, ad: 60, adGrowth: 3.3, armor: 27, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.681, asGrowth: 4, ms: 325, range: 650 }},
    { id: 6, name: "Darius", role: "fighter", icon: "🪓", baseStats: { hp: 652, hpGrowth: 114, mana: 263, manaGrowth: 57.5, ad: 64, adGrowth: 5, armor: 39, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 1, ms: 340, range: 175 }},
    { id: 7, name: "Draven", role: "marksman", icon: "🪓", baseStats: { hp: 675, hpGrowth: 104, mana: 361, manaGrowth: 39, ad: 62, adGrowth: 3.6, armor: 29, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3, as: 0.679, asGrowth: 2.7, ms: 330, range: 550 }},
    { id: 8, name: "Ezreal", role: "marksman", icon: "✨", baseStats: { hp: 600, hpGrowth: 102, mana: 375, manaGrowth: 70, ad: 60, adGrowth: 2.75, armor: 24, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 2.5, ms: 325, range: 550 }},
    { id: 9, name: "Garen", role: "fighter", icon: "⚔️", baseStats: { hp: 690, hpGrowth: 98, mana: 0, manaGrowth: 0, ad: 66, adGrowth: 4.5, armor: 36, armorGrowth: 4.2, mr: 32, mrGrowth: 1.55, as: 0.625, asGrowth: 3.65, ms: 340, range: 175 }},
    { id: 10, name: "Jinx", role: "marksman", icon: "💥", baseStats: { hp: 630, hpGrowth: 100, mana: 245, manaGrowth: 45, ad: 59, adGrowth: 3.4, armor: 26, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 1, ms: 325, range: 525 }},
    { id: 11, name: "Katarina", role: "assassin", icon: "🗡️", baseStats: { hp: 672, hpGrowth: 108, mana: 0, manaGrowth: 0, ad: 58, adGrowth: 3.2, armor: 28, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05, as: 0.658, asGrowth: 2.74, ms: 340, range: 125 }},
    { id: 12, name: "Lee Sin", role: "fighter", icon: "👊", baseStats: { hp: 645, hpGrowth: 99, mana: 200, manaGrowth: 0, ad: 66, adGrowth: 3.7, armor: 36, armorGrowth: 5, mr: 32, mrGrowth: 2.05, as: 0.651, asGrowth: 3, ms: 345, range: 125 }},
    { id: 13, name: "Leona", role: "support", icon: "☀️", baseStats: { hp: 646, hpGrowth: 109, mana: 302, manaGrowth: 40, ad: 60, adGrowth: 3, armor: 47, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 2.9, ms: 335, range: 125 }},
    { id: 14, name: "Lux", role: "mage", icon: "✨", baseStats: { hp: 580, hpGrowth: 99, mana: 480, manaGrowth: 23.5, ad: 54, adGrowth: 3.3, armor: 19, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.669, asGrowth: 1, ms: 330, range: 550 }},
    { id: 15, name: "Malphite", role: "tank", icon: "🗿", baseStats: { hp: 644, hpGrowth: 104, mana: 280, manaGrowth: 60, ad: 62, adGrowth: 4, armor: 37, armorGrowth: 4.95, mr: 28, mrGrowth: 2.05, as: 0.638, asGrowth: 3.4, ms: 335, range: 125 }},
    { id: 16, name: "Miss Fortune", role: "marksman", icon: "🔫", baseStats: { hp: 640, hpGrowth: 103, mana: 300, manaGrowth: 35, ad: 52, adGrowth: 2.7, armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3, as: 0.656, asGrowth: 3, ms: 325, range: 550 }},
    { id: 17, name: "Mordekaiser", role: "fighter", icon: "👑", baseStats: { hp: 645, hpGrowth: 104, mana: 0, manaGrowth: 0, ad: 61, adGrowth: 4, armor: 37, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 1, ms: 335, range: 175 }},
    { id: 18, name: "Morgana", role: "support", icon: "😈", baseStats: { hp: 630, hpGrowth: 104, mana: 340, manaGrowth: 60, ad: 56, adGrowth: 3.5, armor: 25, armorGrowth: 5, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 1.53, ms: 335, range: 450 }},
    { id: 19, name: "Nautilus", role: "support", icon: "⚓", baseStats: { hp: 646, hpGrowth: 100, mana: 400, manaGrowth: 47, ad: 61, adGrowth: 4, armor: 39, armorGrowth: 4.95, mr: 32, mrGrowth: 2.05, as: 0.706, asGrowth: 1, ms: 325, range: 175 }},
    { id: 20, name: "Riven", role: "fighter", icon: "🗡️", baseStats: { hp: 630, hpGrowth: 100, mana: 0, manaGrowth: 0, ad: 64, adGrowth: 3, armor: 33, armorGrowth: 4.4, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 3.5, ms: 340, range: 125 }},
    { id: 21, name: "Syndra", role: "mage", icon: "🔮", baseStats: { hp: 593, hpGrowth: 104, mana: 480, manaGrowth: 40, ad: 54, adGrowth: 2.9, armor: 25, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 2, ms: 330, range: 550 }},
    { id: 22, name: "Thresh", role: "support", icon: "⛓️", baseStats: { hp: 600, hpGrowth: 106, mana: 274, manaGrowth: 44, ad: 56, adGrowth: 2.2, armor: 31, armorGrowth: 0, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 3.5, ms: 330, range: 450 }},
    { id: 23, name: "Vayne", role: "marksman", icon: "🏹", baseStats: { hp: 550, hpGrowth: 103, mana: 232, manaGrowth: 35, ad: 60, adGrowth: 2.35, armor: 23, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3, as: 0.658, asGrowth: 3.3, ms: 330, range: 550 }},
    { id: 24, name: "Yasuo", role: "fighter", icon: "🌪️", baseStats: { hp: 590, hpGrowth: 101, mana: 0, manaGrowth: 0, ad: 60, adGrowth: 3.5, armor: 30, armorGrowth: 4.6, mr: 32, mrGrowth: 2.05, as: 0.697, asGrowth: 3.5, ms: 345, range: 175 }},
    { id: 25, name: "Yone", role: "fighter", icon: "⚔️", baseStats: { hp: 620, hpGrowth: 110, mana: 0, manaGrowth: 0, ad: 60, adGrowth: 3, armor: 28, armorGrowth: 5, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 2.5, ms: 345, range: 175 }},
    { id: 26, name: "Zed", role: "assassin", icon: "🥷", baseStats: { hp: 654, hpGrowth: 99, mana: 200, manaGrowth: 0, ad: 63, adGrowth: 3.4, armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05, as: 0.651, asGrowth: 3.3, ms: 345, range: 125 }},
    { id: 27, name: "Zeri", role: "marksman", icon: "⚡", baseStats: { hp: 630, hpGrowth: 110, mana: 250, manaGrowth: 45, ad: 53, adGrowth: 1.5, armor: 24, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3, as: 0.658, asGrowth: 1.5, ms: 330, range: 500 }},
    { id: 28, name: "Viego", role: "fighter", icon: "👑", baseStats: { hp: 630, hpGrowth: 109, mana: 0, manaGrowth: 0, ad: 57, adGrowth: 3.5, armor: 34, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05, as: 0.658, asGrowth: 2.5, ms: 345, range: 200 }},
    { id: 29, name: "Vi", role: "fighter", icon: "👊", baseStats: { hp: 655, hpGrowth: 99, mana: 295, manaGrowth: 65, ad: 63, adGrowth: 3, armor: 30, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05, as: 0.644, asGrowth: 2, ms: 340, range: 125 }},
    { id: 30, name: "Senna", role: "support", icon: "🔫", baseStats: { hp: 530, hpGrowth: 90, mana: 350, manaGrowth: 45, ad: 50, adGrowth: 0, armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 4, ms: 330, range: 600 }},
];

// Items LoL avec stats réelles
const ITEMS_DATA = [
    // Fighter Items
    { id: 1, name: "Trinity Force", category: "fighter", cost: 3333, stats: { ad: 40, as: 30, ah: 20, hp: 300, ms: 5 }, passive: "Spellblade: Après un sort, le prochain AA inflige +200% AD de base", icon: "⚔️" },
    { id: 2, name: "Black Cleaver", category: "fighter", cost: 3100, stats: { ad: 55, ah: 25, hp: 400 }, passive: "Carve: Réduit l'armure de la cible de 6% par stack (max 30%)", icon: "🪓" },
    { id: 3, name: "Sterak's Gage", category: "fighter", cost: 3200, stats: { ad: 50, hp: 400 }, passive: "Lifeline: Bouclier de 75% HP bonus après avoir subi du burst", icon: "🛡️" },
    { id: 4, name: "Death's Dance", category: "fighter", cost: 3300, stats: { ad: 55, ah: 15, armor: 45 }, passive: "Ignore Pain: 30% des dégâts subis sont convertis en saignement", icon: "💀" },
    { id: 5, name: "Ravenous Hydra", category: "fighter", cost: 3400, stats: { ad: 70, ah: 20, omnivamp: 10 }, passive: "Cleave: Les AA infligent des dégâts en zone", icon: "🐉" },
    { id: 6, name: "Sundered Sky", category: "fighter", cost: 3100, stats: { ad: 55, ah: 15, hp: 300 }, passive: "Lightshield Strike: Premier AA sur un champion soigne", icon: "☀️" },
    
    // Mage Items
    { id: 10, name: "Rabadon's Deathcap", category: "mage", cost: 3600, stats: { ap: 130 }, passive: "Magical Opus: +35% Puissance Magique totale", icon: "🎩" },
    { id: 11, name: "Void Staff", category: "mage", cost: 2800, stats: { ap: 95, mpen: 40 }, passive: "40% Pénétration magique", icon: "🔮" },
    { id: 12, name: "Zhonya's Hourglass", category: "mage", cost: 3000, stats: { ap: 80, armor: 50, ah: 15 }, passive: "Stasis: Invulnérabilité pendant 2.5s", icon: "⏳" },
    { id: 13, name: "Luden's Companion", category: "mage", cost: 2900, stats: { ap: 90, mana: 600, ah: 20, mpen: 10 }, passive: "Fire: Echo magique qui inflige des dégâts supplémentaires", icon: "🔥" },
    { id: 14, name: "Shadowflame", category: "mage", cost: 2900, stats: { ap: 100, hp: 200, mpen: 12 }, passive: "Cinderbloom: Dégâts bonus sur cibles avec bouclier", icon: "🌑" },
    { id: 15, name: "Stormsurge", category: "mage", cost: 2900, stats: { ap: 90, ms: 5, mpen: 15 }, passive: "Squall: Explosion électrique après burst de dégâts", icon: "⚡" },
    { id: 16, name: "Riftmaker", category: "mage", cost: 3000, stats: { ap: 70, hp: 350, ah: 15, omnivamp: 8 }, passive: "Void Corruption: Dégâts bonus en combat prolongé", icon: "🌀" },
    { id: 17, name: "Cryptbloom", category: "mage", cost: 2850, stats: { ap: 70, ah: 20, mpen: 30 }, passive: "Life from Death: Soigne les alliés proches à la mort d'un ennemi", icon: "🌸" },
    { id: 18, name: "Bloodletter's Curse", category: "mage", cost: 2900, stats: { ap: 60, ah: 15, hp: 350 }, passive: "Vile Decay: Réduit la RM des cibles de 5% par stack", icon: "🩸" },

    // Tank Items
    { id: 20, name: "Heartsteel", category: "tank", cost: 3000, stats: { hp: 800, ah: 10, hpRegen: 200 }, passive: "Colossal: Gagne des PV permanents en touchant les champions", icon: "💚" },
    { id: 21, name: "Sunfire Aegis", category: "tank", cost: 2700, stats: { hp: 350, armor: 50, mr: 50 }, passive: "Immolate: Inflige des dégâts magiques autour de vous", icon: "🔥" },
    { id: 22, name: "Thornmail", category: "tank", cost: 2450, stats: { hp: 350, armor: 60 }, passive: "Thorns: Renvoie 10 + 20% armure bonus en dégâts", icon: "🌵" },
    { id: 23, name: "Randuin's Omen", category: "tank", cost: 2700, stats: { hp: 400, armor: 55 }, passive: "Rock Solid: Réduit les dégâts des AA critiques", icon: "❄️" },
    { id: 24, name: "Spirit Visage", category: "tank", cost: 2800, stats: { hp: 450, mr: 60, ah: 10, hpRegen: 100 }, passive: "+25% de soins et boucliers reçus", icon: "👻" },
    { id: 25, name: "Force of Nature", category: "tank", cost: 2800, stats: { hp: 400, mr: 70, ms: 5 }, passive: "Absorb: Réduit les dégâts magiques après stacks", icon: "🌪️" },
    { id: 26, name: "Warmog's Armor", category: "tank", cost: 3000, stats: { hp: 800, hpRegen: 200, ah: 10 }, passive: "Warmog's Heart: Régénère 5% PV/sec hors combat", icon: "🫀" },
    { id: 27, name: "Unending Despair", category: "tank", cost: 2800, stats: { hp: 400, armor: 25, mr: 25 }, passive: "Anguish: Draine la vie des ennemis proches", icon: "😈" },

    // Marksman Items
    { id: 30, name: "Infinity Edge", category: "marksman", cost: 3400, stats: { ad: 70, crit: 25 }, passive: "Perfection: +40% dégâts critiques (60% crit requis)", icon: "♾️" },
    { id: 31, name: "Kraken Slayer", category: "marksman", cost: 3100, stats: { ad: 45, as: 35, crit: 25 }, passive: "Bring It Down: Chaque 3ème AA inflige des dégâts bonus", icon: "🐙" },
    { id: 32, name: "Bloodthirster", category: "marksman", cost: 3400, stats: { ad: 80, crit: 20, lifesteal: 15 }, passive: "Ichorshield: Bouclier de surguérison", icon: "🗡️" },
    { id: 33, name: "Lord Dominik's Regards", category: "marksman", cost: 3000, stats: { ad: 40, crit: 25, armorPen: 35 }, passive: "35% Pénétration d'armure", icon: "👑" },
    { id: 34, name: "Rapid Firecannon", category: "marksman", cost: 2800, stats: { as: 30, crit: 25, ms: 4 }, passive: "Sharpshooter: Portée bonus et dégâts magiques", icon: "🔫" },
    { id: 35, name: "Phantom Dancer", category: "marksman", cost: 2800, stats: { as: 40, crit: 25, ms: 7 }, passive: "Spectral Waltz: Traverse les unités", icon: "💃" },
    { id: 36, name: "Navori Flickerblade", category: "marksman", cost: 3400, stats: { ad: 60, ah: 20, crit: 25 }, passive: "Transcendence: Les critiques réduisent les cooldowns", icon: "⚔️" },
    { id: 37, name: "Runaan's Hurricane", category: "marksman", cost: 2800, stats: { as: 40, crit: 25, ms: 4 }, passive: "Wind's Fury: Les AA touchent 2 cibles supplémentaires", icon: "🌀" },

    // Assassin Items
    { id: 40, name: "Duskblade of Draktharr", category: "assassin", cost: 2900, stats: { ad: 60, lethality: 18, ah: 18 }, passive: "Nightstalker: Premier AA inflige des dégâts bonus depuis l'ombre", icon: "🗡️" },
    { id: 41, name: "Edge of Night", category: "assassin", cost: 2800, stats: { ad: 55, lethality: 15, hp: 250 }, passive: "Spell Shield: Bouclier anti-sort", icon: "🌙" },
    { id: 42, name: "Youmuu's Ghostblade", category: "assassin", cost: 2800, stats: { ad: 55, lethality: 18, ah: 15 }, passive: "Wraith Step: +20% MS hors combat", icon: "👻" },
    { id: 43, name: "Serpent's Fang", category: "assassin", cost: 2600, stats: { ad: 55, lethality: 15, ah: 10 }, passive: "Shield Reaver: Réduit les boucliers infligés", icon: "🐍" },
    { id: 44, name: "Umbral Glaive", category: "assassin", cost: 2400, stats: { ad: 50, lethality: 15, ah: 15 }, passive: "Blackout: Révèle et détruit les wards", icon: "🔦" },
    { id: 45, name: "Opportunity", category: "assassin", cost: 2700, stats: { ad: 55, lethality: 18, ms: 4 }, passive: "Preparation: Bonus de dégâts après approche de la cible", icon: "🎯" },
    { id: 46, name: "Hubris", category: "assassin", cost: 3000, stats: { ad: 60, lethality: 18, ah: 15 }, passive: "Eminence: Gagne de l'AD après les takedowns", icon: "😤" },
    { id: 47, name: "Eclipse", category: "assassin", cost: 2800, stats: { ad: 55, lethality: 18, omnivamp: 10 }, passive: "Ever Rising Moon: Bouclier et MS après combo", icon: "🌑" },

    // Support Items
    { id: 50, name: "Locket of the Iron Solari", category: "support", cost: 2500, stats: { hp: 300, armor: 35, mr: 35, ah: 15 }, passive: "Devotion: Active un bouclier pour les alliés proches", icon: "☀️" },
    { id: 51, name: "Redemption", category: "support", cost: 2300, stats: { hp: 200, mana: 100, ah: 20, healShield: 16 }, passive: "Active: Zone de soin pour les alliés", icon: "✝️" },
    { id: 52, name: "Mikael's Blessing", category: "support", cost: 2300, stats: { mana: 250, ah: 20, mr: 50, healShield: 16 }, passive: "Purify: Retire les CC d'un allié", icon: "🕊️" },
    { id: 53, name: "Knight's Vow", category: "support", cost: 2300, stats: { hp: 400, ah: 15, armor: 25 }, passive: "Pledge: Redirige les dégâts de l'allié lié vers vous", icon: "⚜️" },
    { id: 54, name: "Staff of Flowing Water", category: "support", cost: 2300, stats: { ap: 60, mana: 250, ah: 20, healShield: 8 }, passive: "Rapids: Donne AP et AH après soin/bouclier", icon: "🌊" },
    { id: 55, name: "Ardent Censer", category: "support", cost: 2300, stats: { ap: 55, mana: 250, ah: 15, healShield: 10 }, passive: "Sanctify: Donne AS aux alliés soignés", icon: "🕯️" },
    { id: 56, name: "Shurelya's Battlesong", category: "support", cost: 2500, stats: { hp: 250, ap: 50, ah: 25, ms: 5 }, passive: "Motivate: Active un boost de MS pour l'équipe", icon: "🎵" },
    
    // Boots
    { id: 60, name: "Berserker's Greaves", category: "boots", cost: 1100, stats: { as: 30, ms: 45 }, passive: null, icon: "👟" },
    { id: 61, name: "Sorcerer's Shoes", category: "boots", cost: 1100, stats: { mpen: 15, ms: 45 }, passive: null, icon: "🥿" },
    { id: 62, name: "Plated Steelcaps", category: "boots", cost: 1100, stats: { armor: 25, ms: 45 }, passive: "Réduit les dégâts des AA de 12%", icon: "🥾" },
    { id: 63, name: "Mercury's Treads", category: "boots", cost: 1100, stats: { mr: 20, tenacity: 30, ms: 45 }, passive: "+30% Tenacité", icon: "👢" },
    { id: 64, name: "Ionian Boots of Lucidity", category: "boots", cost: 900, stats: { ah: 20, ms: 45, summonerHaste: 12 }, passive: "+12 Summoner Spell Haste", icon: "🩴" },
    { id: 65, name: "Boots of Swiftness", category: "boots", cost: 900, stats: { ms: 60, slowRes: 25 }, passive: "Réduit les ralentissements de 25%", icon: "🦶" },
];

// Configuration des catégories
const CATEGORY_CONFIG = {
    fighter: { label: "Fighter", color: "#f97316" },
    mage: { label: "Mage", color: "#8b5cf6" },
    tank: { label: "Tank", color: "#22c55e" },
    marksman: { label: "Marksman", color: "#ef4444" },
    assassin: { label: "Assassin", color: "#6366f1" },
    support: { label: "Support", color: "#06b6d4" },
    boots: { label: "Bottes", color: "#eab308" },
};

// Configuration des stats
const STAT_CONFIG = {
    ad: { label: "Dégâts d'attaque", short: "AD", color: "#f97316" },
    ap: { label: "Puissance magique", short: "AP", color: "#8b5cf6" },
    hp: { label: "Points de vie", short: "PV", color: "#22c55e" },
    mana: { label: "Mana", short: "Mana", color: "#3b82f6" },
    armor: { label: "Armure", short: "Armure", color: "#eab308" },
    mr: { label: "Résist. magique", short: "RM", color: "#a855f7" },
    as: { label: "Vitesse d'attaque", short: "AS%", color: "#facc15" },
    crit: { label: "Chance critique", short: "Crit%", color: "#f43f5e" },
    ah: { label: "Accélération", short: "AH", color: "#ec4899" },
    lethality: { label: "Létalité", short: "Lét.", color: "#6366f1" },
    armorPen: { label: "Pén. armure", short: "%Pén.Arm", color: "#f59e0b" },
    mpen: { label: "Pén. magique", short: "Pén.Mag", color: "#c084fc" },
    ms: { label: "Vitesse dépla.", short: "MS", color: "#14b8a6" },
    lifesteal: { label: "Vol de vie", short: "VdV%", color: "#ef4444" },
    omnivamp: { label: "Omnivamp", short: "Omni%", color: "#be123c" },
    healShield: { label: "Soins/Boucliers", short: "S&B%", color: "#4ade80" },
    hpRegen: { label: "Régén. PV", short: "Régén", color: "#86efac" },
    tenacity: { label: "Tenacité", short: "Ten%", color: "#d946ef" },
    summonerHaste: { label: "Invoc. Haste", short: "SH", color: "#f472b6" },
    slowRes: { label: "Rés. ralent.", short: "SlowR%", color: "#67e8f9" },
};
