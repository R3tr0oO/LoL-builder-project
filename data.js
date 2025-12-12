// Champions avec stats de base et croissance par niveau
const CHAMPIONS_DATA = [
    { 
        id: 1, name: "Aatrox", role: "fighter", icon: "⚔️", 
        baseStats: { hp: 650, hpGrowth: 114, mana: 0, manaGrowth: 0, ad: 60, adGrowth: 5, armor: 38, armorGrowth: 4.45, mr: 32, mrGrowth: 2.05, as: 0.651, asGrowth: 2.5, ms: 345, range: 175 },
        passive: { name: "Puits Infernal", icon: "🩸", description: "Périodiquement, la prochaine attaque de base d'Aatrox inflige des dégâts bonus et le soigne.", cooldown: "24-12s", scaling: "4-10% PV max cible" },
        spells: {
            Q: { name: "L'Épée des Darkin", icon: "⚔️", description: "Aatrox frappe le sol, infligeant des dégâts. Peut être lancé 3 fois, chaque frappe étant plus puissante.", cooldown: "14/12/10/8/6s", cost: "Aucun", damage: "10/30/50/70/90 (+60/65/70/75/80% AD)", type: "physical" },
            W: { name: "Chaînes Infernales", icon: "⛓️", description: "Aatrox envoie une chaîne qui ralentit le premier ennemi touché et le ramène vers le centre.", cooldown: "20/18.5/17/15.5/14s", cost: "Aucun", damage: "30/40/50/60/70 (+40% AD)", type: "physical" },
            E: { name: "Ruée Obscure", icon: "💨", description: "Aatrox se propulse dans une direction. Gagne de la régénération de vie bonus.", cooldown: "9/8/7/6/5s", cost: "Aucun", damage: "Aucun", type: "utility" },
            R: { name: "Massacre Mondial", icon: "😈", description: "Aatrox libère sa forme démoniaque, gagnant AD, MS et régénération. Les takedowns prolongent la durée.", cooldown: "120/100/80s", cost: "Aucun", damage: "+20/25/30% AD, +60/80/100% régén.", type: "buff" }
        }
    },
    { 
        id: 2, name: "Ahri", role: "mage", icon: "🦊", 
        baseStats: { hp: 590, hpGrowth: 96, mana: 418, manaGrowth: 25, ad: 53, adGrowth: 3, armor: 21, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.668, asGrowth: 2, ms: 330, range: 550 },
        passive: { name: "Essence Volée", icon: "💫", description: "Quand Ahri touche un ennemi avec un sort, elle gagne de l'Essence. À 9 stacks, son prochain sort soigne.", cooldown: "Passif", scaling: "40-120 (+25% AP)" },
        spells: {
            Q: { name: "Orbe de Tromperie", icon: "🔮", description: "Ahri lance un orbe qui inflige des dégâts magiques à l'aller et des dégâts vrais au retour.", cooldown: "7s", cost: "55/65/75/85/95 Mana", damage: "40/65/90/115/140 (+45% AP) x2", type: "magic" },
            W: { name: "Feux Follets", icon: "🔥", description: "Ahri libère 3 flammes qui ciblent les ennemis proches.", cooldown: "9/8/7/6/5s", cost: "25 Mana", damage: "60/85/110/135/160 (+30% AP)", type: "magic" },
            E: { name: "Charme", icon: "💕", description: "Ahri envoie un baiser qui charme le premier ennemi touché et augmente les dégâts qu'il subit.", cooldown: "14s", cost: "50 Mana", damage: "80/110/140/170/200 (+60% AP)", type: "magic" },
            R: { name: "Feu Spirituel", icon: "🦊", description: "Ahri se propulse et lance des projectiles sur les ennemis proches. Peut être utilisé 3 fois.", cooldown: "130/105/80s", cost: "100 Mana", damage: "60/90/120 (+35% AP) par dash", type: "magic" }
        }
    },
    { 
        id: 3, name: "Akali", role: "assassin", icon: "🗡️", 
        baseStats: { hp: 570, hpGrowth: 119, mana: 200, manaGrowth: 0, ad: 62, adGrowth: 3.3, armor: 23, armorGrowth: 4.7, mr: 37, mrGrowth: 2.05, as: 0.625, asGrowth: 3.2, ms: 345, range: 125 },
        passive: { name: "Marque de l'Assassin", icon: "🎯", description: "Après avoir touché un ennemi avec un sort, l'attaque de base d'Akali gagne en portée et dégâts.", cooldown: "Passif", scaling: "35-182 (+55% bonus AD)(+60% AP)" },
        spells: {
            Q: { name: "Lancer de Kunai", icon: "🗡️", description: "Akali lance des kunais dans un arc, infligeant des dégâts et ralentissant.", cooldown: "1.5s", cost: "110/100/90/80/70 Énergie", damage: "45/70/95/120/145 (+65% AD)(+60% AP)", type: "magic" },
            W: { name: "Linceul de Crépuscule", icon: "💨", description: "Akali crée un nuage de fumée qui la rend invisible et restaure son énergie.", cooldown: "20s", cost: "Aucun", damage: "Aucun", type: "utility" },
            E: { name: "Shuriken Retourné", icon: "✴️", description: "Akali fait une roulade arrière et lance un shuriken. Réactivation pour dash vers le shuriken.", cooldown: "16/14.5/13/11.5/10s", cost: "30 Énergie", damage: "30/56/82/108/134 (+36% AD)(+42% AP)", type: "physical" },
            R: { name: "Exécution Parfaite", icon: "⚡", description: "Akali dash vers un ennemi puis peut réactiver pour exécuter. Les dégâts augmentent selon les PV manquants.", cooldown: "100/80/60s", cost: "Aucun", damage: "80/220/360 (+50% bonus AD)(+30% AP) + exécution", type: "magic" }
        }
    },
    { 
        id: 4, name: "Ashe", role: "marksman", icon: "🏹", 
        baseStats: { hp: 640, hpGrowth: 101, mana: 280, manaGrowth: 35, ad: 59, adGrowth: 2.95, armor: 26, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3, as: 0.658, asGrowth: 3.33, ms: 325, range: 600 },
        passive: { name: "Tir Givrant", icon: "❄️", description: "Les attaques d'Ashe ralentissent et les cibles ralenties subissent des dégâts bonus.", cooldown: "Passif", scaling: "115% AD (critiques)" },
        spells: {
            Q: { name: "Concentration du Ranger", icon: "🎯", description: "Les attaques d'Ashe génèrent du Focus. À 4 stacks, active une rafale rapide.", cooldown: "Passif/Actif", cost: "50 Mana + Focus", damage: "105/110/115/120/125% AD par flèche", type: "physical" },
            W: { name: "Volée", icon: "🏹", description: "Ashe tire une volée de flèches dans un cône, infligeant des dégâts et appliquant Givre.", cooldown: "14/11.5/9/6.5/4s", cost: "70 Mana", damage: "20/35/50/65/80 (+100% AD)", type: "physical" },
            E: { name: "Oeil du Faucon", icon: "🦅", description: "Ashe envoie un esprit faucon qui révèle le terrain sur son passage.", cooldown: "90/80/70/60/50s", cost: "Aucun", damage: "Aucun", type: "utility" },
            R: { name: "Flèche de Cristal Enchantée", icon: "💎", description: "Ashe tire une flèche magique globale qui stun le premier champion touché.", cooldown: "100/80/60s", cost: "100 Mana", damage: "200/400/600 (+120% AP)", type: "magic" }
        }
    },
    { 
        id: 5, name: "Caitlyn", role: "marksman", icon: "🎯", 
        baseStats: { hp: 580, hpGrowth: 107, mana: 315, manaGrowth: 40, ad: 60, adGrowth: 3.3, armor: 27, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.681, asGrowth: 4, ms: 325, range: 650 },
        passive: { name: "Headshot", icon: "🎯", description: "Toutes les quelques attaques, Caitlyn tire un Headshot infligeant des dégâts bonus.", cooldown: "6 attaques", scaling: "60-160% AD bonus" },
        spells: {
            Q: { name: "Piltover Peacemaker", icon: "🔫", description: "Caitlyn charge et tire un tir perçant qui traverse les ennemis.", cooldown: "10/9/8/7/6s", cost: "50/60/70/80/90 Mana", damage: "50/90/130/170/210 (+130/140/150/160/170% AD)", type: "physical" },
            W: { name: "Piège de Yordle", icon: "🪤", description: "Caitlyn place un piège. Les ennemis piégés sont révélés et prennent des dégâts bonus.", cooldown: "30/24/19/15/12s", cost: "20 Mana", damage: "60/105/150/195/240 (+60% bonus AD)", type: "physical" },
            E: { name: "Filet Calibre 90", icon: "🕸️", description: "Caitlyn tire un filet qui la propulse en arrière et ralentit l'ennemi touché.", cooldown: "16/14/12/10/8s", cost: "75 Mana", damage: "70/110/150/190/230 (+80% AP)", type: "magic" },
            R: { name: "Ace in the Hole", icon: "💀", description: "Caitlyn verrouille un champion et tire un tir dévastateur. Peut être bloqué.", cooldown: "90/75/60s", cost: "100 Mana", damage: "300/525/750 (+200% bonus AD)", type: "physical" }
        }
    },
    { 
        id: 6, name: "Darius", role: "fighter", icon: "🪓", 
        baseStats: { hp: 652, hpGrowth: 114, mana: 263, manaGrowth: 57.5, ad: 64, adGrowth: 5, armor: 39, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 1, ms: 340, range: 175 },
        passive: { name: "Hémorragie", icon: "🩸", description: "Les attaques de Darius font saigner les ennemis. À 5 stacks, gagne Noxian Might.", cooldown: "Passif", scaling: "13-35 (+30% bonus AD) par stack" },
        spells: {
            Q: { name: "Décimation", icon: "🪓", description: "Darius fait tournoyer sa hache. Les ennemis au bord subissent plus de dégâts et soignent Darius.", cooldown: "9/8/7/6/5s", cost: "30/35/40/45/50 Mana", damage: "50/80/110/140/170 (+100/110/120/130/140% AD)", type: "physical" },
            W: { name: "Estropier", icon: "💪", description: "La prochaine attaque de Darius ralentit et inflige des dégâts bonus.", cooldown: "7/6.5/6/5.5/5s", cost: "40 Mana", damage: "140/145/150/155/160% AD", type: "physical" },
            E: { name: "Appréhension", icon: "🪝", description: "Darius attrape tous les ennemis devant lui et les tire vers lui.", cooldown: "24/21/18/15/12s", cost: "45 Mana", damage: "Aucun", type: "utility" },
            R: { name: "Guillotine Noxienne", icon: "⚔️", description: "Darius saute sur un ennemi et l'exécute. Reset si tue. Dégâts vrais.", cooldown: "120/100/80s", cost: "100 Mana", damage: "125/250/375 (+75% bonus AD) dégâts vrais", type: "true" }
        }
    },
    { 
        id: 7, name: "Draven", role: "marksman", icon: "🪓", 
        baseStats: { hp: 675, hpGrowth: 104, mana: 361, manaGrowth: 39, ad: 62, adGrowth: 3.6, armor: 29, armorGrowth: 4.5, mr: 30, mrGrowth: 1.3, as: 0.679, asGrowth: 2.7, ms: 330, range: 550 },
        passive: { name: "Ligue des Draven", icon: "🏆", description: "Draven gagne des Adorations en attrapant des haches et tue des minions. Les takedowns convertissent en or.", cooldown: "Passif", scaling: "25-50 or + 2 or/stack" },
        spells: {
            Q: { name: "Hache Tournoyante", icon: "🪓", description: "La prochaine attaque de Draven inflige des dégâts bonus. La hache rebondit et peut être rattrapée.", cooldown: "12/11/10/9/8s", cost: "45 Mana", damage: "40/45/50/55/60 (+75/85/95/105/115% bonus AD)", type: "physical" },
            W: { name: "Hémorragie Sanguinaire", icon: "💨", description: "Draven gagne de la vitesse de mouvement et d'attaque.", cooldown: "12s", cost: "40/35/30/25/20 Mana", damage: "Aucun", type: "buff" },
            E: { name: "Opposition", icon: "🔙", description: "Draven lance ses haches qui knock back et ralentissent les ennemis.", cooldown: "18/17/16/15/14s", cost: "70 Mana", damage: "75/110/145/180/215 (+50% bonus AD)", type: "physical" },
            R: { name: "Tourbillon de la Mort", icon: "🌀", description: "Draven lance deux haches géantes qui traversent la carte et reviennent.", cooldown: "100/90/80s", cost: "100 Mana", damage: "175/275/375 (+110% bonus AD) x2", type: "physical" }
        }
    },
    { 
        id: 8, name: "Ezreal", role: "marksman", icon: "✨", 
        baseStats: { hp: 600, hpGrowth: 102, mana: 375, manaGrowth: 70, ad: 60, adGrowth: 2.75, armor: 24, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 2.5, ms: 325, range: 550 },
        passive: { name: "Flux Ascendant", icon: "⚡", description: "Toucher un ennemi avec un sort augmente la vitesse d'attaque d'Ezreal.", cooldown: "Passif", scaling: "10% AS par stack (max 5)" },
        spells: {
            Q: { name: "Tir Mystique", icon: "🔵", description: "Ezreal tire un projectile qui inflige des dégâts physiques et réduit tous les cooldowns.", cooldown: "5.5/5.25/5/4.75/4.5s", cost: "30/35/40/45/50 Mana", damage: "20/45/70/95/120 (+130% AD)(+15% AP)", type: "physical" },
            W: { name: "Flux d'Essence", icon: "💠", description: "Ezreal lance un orbe qui se fixe sur un ennemi ou structure. Exploser avec un sort/attaque.", cooldown: "12s", cost: "50 Mana", damage: "80/135/190/245/300 (+60% bonus AD)(+70/75/80/85/90% AP)", type: "magic" },
            E: { name: "Transfert Arcanique", icon: "✨", description: "Ezreal se téléporte et tire un projectile sur l'ennemi le plus proche.", cooldown: "28/25/22/19/16s", cost: "90 Mana", damage: "80/130/180/230/280 (+50% bonus AD)(+75% AP)", type: "magic" },
            R: { name: "Déluge d'Essence", icon: "🌟", description: "Ezreal canalise et tire un projectile massif qui traverse toute la carte.", cooldown: "120s", cost: "100 Mana", damage: "350/500/650 (+100% bonus AD)(+90% AP)", type: "magic" }
        }
    },
    { 
        id: 9, name: "Garen", role: "fighter", icon: "⚔️", 
        baseStats: { hp: 690, hpGrowth: 98, mana: 0, manaGrowth: 0, ad: 66, adGrowth: 4.5, armor: 36, armorGrowth: 4.2, mr: 32, mrGrowth: 1.55, as: 0.625, asGrowth: 3.65, ms: 340, range: 175 },
        passive: { name: "Persévérance", icon: "💚", description: "Garen régénère rapidement ses PV s'il n'a pas subi de dégâts récemment.", cooldown: "7s hors combat", scaling: "1.5-10.1% PV max/sec" },
        spells: {
            Q: { name: "Frappe Décisive", icon: "⚔️", description: "Garen gagne de la vitesse, supprime les ralentissements et sa prochaine attaque inflige des dégâts bonus.", cooldown: "8s", cost: "Aucun", damage: "30/60/90/120/150 (+50% AD)", type: "physical" },
            W: { name: "Courage", icon: "🛡️", description: "Garen obtient un bouclier et une réduction de dégâts. Gagne aussi de l'armure/RM passif.", cooldown: "23/21/19/17/15s", cost: "Aucun", damage: "Aucun", type: "defensive" },
            E: { name: "Jugement", icon: "🌀", description: "Garen tourne sur lui-même, infligeant des dégâts aux ennemis proches.", cooldown: "9s", cost: "Aucun", damage: "4/8/12/16/20 (+32-40% AD) par spin", type: "physical" },
            R: { name: "Justice Demacienne", icon: "⚔️", description: "Garen invoque une épée géante qui inflige des dégâts vrais massifs. Exécution.", cooldown: "120/100/80s", cost: "Aucun", damage: "150/300/450 (+25/30/35% PV manquants)", type: "true" }
        }
    },
    { 
        id: 10, name: "Jinx", role: "marksman", icon: "💥", 
        baseStats: { hp: 630, hpGrowth: 100, mana: 245, manaGrowth: 45, ad: 59, adGrowth: 3.4, armor: 26, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 1, ms: 325, range: 525 },
        passive: { name: "Déjantée!", icon: "😜", description: "Les takedowns et destructions de structures donnent un boost massif de MS.", cooldown: "Passif", scaling: "+175% MS décroissant" },
        spells: {
            Q: { name: "Changement d'Arme!", icon: "🔫", description: "Jinx alterne entre Pow-Pow (mitrailleuse, AS) et Fishbones (lance-roquettes, range+dégâts).", cooldown: "0.9s", cost: "0/20 Mana par tir", damage: "+10% AD en zone (Fishbones)", type: "physical" },
            W: { name: "Zap!", icon: "⚡", description: "Jinx tire un laser qui révèle et ralentit le premier ennemi touché.", cooldown: "8/7/6/5/4s", cost: "50/60/70/80/90 Mana", damage: "10/60/110/160/210 (+160% AD)", type: "physical" },
            E: { name: "Croquez!", icon: "🦷", description: "Jinx lance des pièges à mâchoires qui root les ennemis qui marchent dessus.", cooldown: "24/20.5/17/13.5/10s", cost: "70 Mana", damage: "70/120/170/220/270 (+100% AP)", type: "magic" },
            R: { name: "Super Méga Roquette de la Mort!", icon: "🚀", description: "Jinx tire une roquette géante globale qui inflige des dégâts en zone à l'impact.", cooldown: "90/75/60s", cost: "100 Mana", damage: "250/400/550 (+150% bonus AD) +25-35% PV manquants", type: "physical" }
        }
    },
    { 
        id: 11, name: "Katarina", role: "assassin", icon: "🗡️", 
        baseStats: { hp: 672, hpGrowth: 108, mana: 0, manaGrowth: 0, ad: 58, adGrowth: 3.2, armor: 28, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05, as: 0.658, asGrowth: 2.74, ms: 340, range: 125 },
        passive: { name: "Voracité", icon: "🗡️", description: "Les takedowns réduisent tous les cooldowns. Ramasser une dague inflige des dégâts en zone.", cooldown: "Passif", scaling: "68-240 (+65% bonus AD)(+55/70/85/100% AP)" },
        spells: {
            Q: { name: "Lame Bondissante", icon: "🗡️", description: "Katarina lance une dague qui rebondit sur plusieurs ennemis puis tombe au sol.", cooldown: "11/10/9/8/7s", cost: "Aucun", damage: "80/110/140/170/200 (+35% AP)", type: "magic" },
            W: { name: "Préparation", icon: "💨", description: "Katarina lance une dague en l'air et gagne brièvement de la vitesse de mouvement.", cooldown: "15/14/13/12/11s", cost: "Aucun", damage: "Dégâts via passif", type: "utility" },
            E: { name: "Shunpo", icon: "✨", description: "Katarina se téléporte vers une cible et inflige des dégâts.", cooldown: "14/12.5/11/9.5/8s", cost: "Aucun", damage: "20/35/50/65/80 (+40% AD)(+25% AP)", type: "magic" },
            R: { name: "Lotus de la Mort", icon: "🌸", description: "Katarina canalise et lance des dagues autour d'elle, infligeant des dégâts massifs.", cooldown: "90/60/45s", cost: "Aucun", damage: "375/562.5/750 (+285% bonus AD)(+180% AP) total", type: "magic" }
        }
    },
    { 
        id: 12, name: "Lee Sin", role: "fighter", icon: "👊", 
        baseStats: { hp: 645, hpGrowth: 99, mana: 200, manaGrowth: 0, ad: 66, adGrowth: 3.7, armor: 36, armorGrowth: 5, mr: 32, mrGrowth: 2.05, as: 0.651, asGrowth: 3, ms: 345, range: 125 },
        passive: { name: "Fureur", icon: "⚡", description: "Après un sort, les 2 prochaines attaques gagnent de l'AS et restaurent de l'énergie.", cooldown: "Passif", scaling: "+40% AS, +20/10 énergie" },
        spells: {
            Q: { name: "Onde Sonique / Écho Résonnant", icon: "👊", description: "Lee Sin lance une onde sonore. Réactivation pour dash vers la cible touchée.", cooldown: "10/9/8/7/6s", cost: "50 Énergie", damage: "55/80/105/130/155 (+110% bonus AD) + 55/80/105/130/155 (+110% bonus AD)", type: "physical" },
            W: { name: "Sauvegarde / Volonté de Fer", icon: "🛡️", description: "Lee Sin dash vers un allié/ward. Réactivation pour bouclier et vol de vie.", cooldown: "12s", cost: "50 Énergie", damage: "Aucun", type: "utility" },
            E: { name: "Tempête / Paralysie", icon: "🌀", description: "Lee Sin frappe le sol, révélant et infligeant des dégâts. Réactivation pour ralentir.", cooldown: "9s", cost: "50 Énergie", damage: "100/130/160/190/220 (+100% bonus AD)", type: "magic" },
            R: { name: "Rage du Dragon", icon: "🐉", description: "Lee Sin frappe un champion, l'envoyant voler et infligeant des dégâts aux ennemis touchés.", cooldown: "110/85/60s", cost: "Aucun", damage: "175/400/625 (+200% bonus AD)", type: "physical" }
        }
    },
    { 
        id: 13, name: "Leona", role: "support", icon: "☀️", 
        baseStats: { hp: 646, hpGrowth: 109, mana: 302, manaGrowth: 40, ad: 60, adGrowth: 3, armor: 47, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 2.9, ms: 335, range: 125 },
        passive: { name: "Lumière du Soleil", icon: "☀️", description: "Les sorts de Leona marquent les ennemis. Les alliés qui attaquent consomment la marque pour des dégâts bonus.", cooldown: "Passif", scaling: "32-168 dégâts bonus" },
        spells: {
            Q: { name: "Bouclier de l'Aurore", icon: "🛡️", description: "La prochaine attaque de Leona stun l'ennemi et inflige des dégâts bonus.", cooldown: "5s", cost: "35/40/45/50/55 Mana", damage: "10/35/60/85/110 (+30% AP)", type: "magic" },
            W: { name: "Éclipse", icon: "🔆", description: "Leona gagne de l'armure et de la RM, puis explose pour infliger des dégâts.", cooldown: "14/13/12/11/10s", cost: "60 Mana", damage: "45/80/115/150/185 (+40% AP)", type: "magic" },
            E: { name: "Lame du Zénith", icon: "⚔️", description: "Leona projette une image de son épée qui la tire vers le dernier champion touché.", cooldown: "12/10.5/9/7.5/6s", cost: "60 Mana", damage: "50/90/130/170/210 (+40% AP)", type: "magic" },
            R: { name: "Éruption Solaire", icon: "💥", description: "Leona invoque un rayon solaire qui stun/slow les ennemis en zone.", cooldown: "90/75/60s", cost: "100 Mana", damage: "150/225/300 (+80% AP)", type: "magic" }
        }
    },
    { 
        id: 14, name: "Lux", role: "mage", icon: "✨", 
        baseStats: { hp: 580, hpGrowth: 99, mana: 480, manaGrowth: 23.5, ad: 54, adGrowth: 3.3, armor: 19, armorGrowth: 4.7, mr: 30, mrGrowth: 1.3, as: 0.669, asGrowth: 1, ms: 330, range: 550 },
        passive: { name: "Illumination", icon: "✨", description: "Les sorts de Lux marquent les ennemis. Ses attaques consomment la marque pour des dégâts bonus.", cooldown: "Passif", scaling: "20-200 (+20% AP)" },
        spells: {
            Q: { name: "Entrave Lumineuse", icon: "🔗", description: "Lux lance une sphère de lumière qui root jusqu'à 2 ennemis.", cooldown: "11/10.5/10/9.5/9s", cost: "50 Mana", damage: "80/125/170/215/260 (+60% AP)", type: "magic" },
            W: { name: "Barrière Prismatique", icon: "🛡️", description: "Lux lance son bâton qui protège les alliés touchés avec un bouclier.", cooldown: "14/13/12/11/10s", cost: "60/65/70/75/80 Mana", damage: "45/65/85/105/125 (+35% AP) bouclier x2", type: "utility" },
            E: { name: "Singularité Lucente", icon: "💡", description: "Lux lance une anomalie lumineuse qui slow puis explose.", cooldown: "10/9.5/9/8.5/8s", cost: "70/80/90/100/110 Mana", damage: "70/120/170/220/270 (+80% AP)", type: "magic" },
            R: { name: "Étincelle Finale", icon: "🌟", description: "Lux tire un rayon de lumière dévastateur dans une ligne.", cooldown: "60/50/40s", cost: "100 Mana", damage: "300/400/500 (+120% AP)", type: "magic" }
        }
    },
    { 
        id: 15, name: "Malphite", role: "tank", icon: "🗿", 
        baseStats: { hp: 644, hpGrowth: 104, mana: 280, manaGrowth: 60, ad: 62, adGrowth: 4, armor: 37, armorGrowth: 4.95, mr: 28, mrGrowth: 2.05, as: 0.638, asGrowth: 3.4, ms: 335, range: 125 },
        passive: { name: "Bouclier de Granit", icon: "🛡️", description: "Malphite gagne un bouclier basé sur ses PV max quand il n'a pas subi de dégâts.", cooldown: "8/7/6s", scaling: "10% PV max" },
        spells: {
            Q: { name: "Éclat Sismique", icon: "🪨", description: "Malphite lance un rocher qui vole de la vitesse de mouvement à l'ennemi.", cooldown: "8s", cost: "70/75/80/85/90 Mana", damage: "70/120/170/220/270 (+60% AP)", type: "magic" },
            W: { name: "Tonnerre", icon: "⚡", description: "Passif: Les attaques infligent des dégâts en zone. Actif: Augmente l'armure et les dégâts des attaques.", cooldown: "12s", cost: "25 Mana", damage: "15/25/35/45/55 (+20% AP)(+15% Armure)", type: "physical" },
            E: { name: "Coup de Terre", icon: "💥", description: "Malphite frappe le sol, infligeant des dégâts et réduisant l'AS des ennemis.", cooldown: "7s", cost: "50/55/60/65/70 Mana", damage: "70/110/150/190/230 (+60% AP)(+40% Armure)", type: "magic" },
            R: { name: "Force Imparable", icon: "🚀", description: "Malphite se propulse vers une zone, knock up et infligeant des dégâts massifs.", cooldown: "130/105/80s", cost: "100 Mana", damage: "200/300/400 (+90% AP)", type: "magic" }
        }
    },
    { 
        id: 16, name: "Miss Fortune", role: "marksman", icon: "🔫", 
        baseStats: { hp: 640, hpGrowth: 103, mana: 300, manaGrowth: 35, ad: 52, adGrowth: 2.7, armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3, as: 0.656, asGrowth: 3, ms: 325, range: 550 },
        passive: { name: "Love Tap", icon: "💋", description: "Les attaques de MF infligent des dégâts bonus si elles changent de cible.", cooldown: "Passif", scaling: "50-100% AD" },
        spells: {
            Q: { name: "Double Up", icon: "🔫", description: "MF tire sur une cible, la balle rebondit sur un ennemi derrière.", cooldown: "7/6/5/4/3s", cost: "43/46/49/52/55 Mana", damage: "20/45/70/95/120 (+100% AD)(+35% AP)", type: "physical" },
            W: { name: "Strut", icon: "💃", description: "Passif: MF gagne de la MS. Actif: Gagne un boost d'AS massif.", cooldown: "12s", cost: "30 Mana", damage: "Aucun", type: "buff" },
            E: { name: "Make it Rain", icon: "🌧️", description: "MF fait pleuvoir des balles dans une zone, ralentissant et infligeant des dégâts.", cooldown: "18/16/14/12/10s", cost: "80 Mana", damage: "70/100/130/160/190 (+100% AP)", type: "magic" },
            R: { name: "Bullet Time", icon: "🎯", description: "MF canalise et tire une pluie de balles en cône devant elle.", cooldown: "120/110/100s", cost: "100 Mana", damage: "75% AD (+20% AP) par vague (12-18 vagues)", type: "physical" }
        }
    },
    { 
        id: 17, name: "Mordekaiser", role: "fighter", icon: "👑", 
        baseStats: { hp: 645, hpGrowth: 104, mana: 0, manaGrowth: 0, ad: 61, adGrowth: 4, armor: 37, armorGrowth: 4.2, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 1, ms: 335, range: 175 },
        passive: { name: "Ténèbres Grandissantes", icon: "💀", description: "Après 3 attaques/sorts, Morde gagne une aura qui inflige des dégâts magiques autour de lui.", cooldown: "Passif", scaling: "5-15 (+30% AP)(+1-5% PV max cible)/sec" },
        spells: {
            Q: { name: "Oblitération", icon: "🔨", description: "Morde frappe devant lui. Les dégâts sont augmentés si un seul ennemi est touché.", cooldown: "9/7.75/6.5/5.25/4s", cost: "Aucun", damage: "75/95/115/135/155 (+60% AP)(+5-139 AD)", type: "magic" },
            W: { name: "Inexorable", icon: "🛡️", description: "Morde stocke les dégâts subis en bouclier. Réactivation pour consommer le bouclier et soigner.", cooldown: "12/11/10/9/8s", cost: "Aucun", damage: "Aucun", type: "defensive" },
            E: { name: "Poigne de la Mort", icon: "✊", description: "Morde tire les ennemis dans une zone vers lui.", cooldown: "18/16/14/12/10s", cost: "Aucun", damage: "80/95/110/125/140 (+60% AP)", type: "magic" },
            R: { name: "Royaume de la Mort", icon: "💀", description: "Morde bannit un champion dans son royaume et vole ses stats.", cooldown: "140/120/100s", cost: "Aucun", damage: "Vole 10% de stats", type: "utility" }
        }
    },
    { 
        id: 18, name: "Morgana", role: "support", icon: "😈", 
        baseStats: { hp: 630, hpGrowth: 104, mana: 340, manaGrowth: 60, ad: 56, adGrowth: 3.5, armor: 25, armorGrowth: 5, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 1.53, ms: 335, range: 450 },
        passive: { name: "Récupération d'Âme", icon: "💜", description: "Morgana se soigne quand elle inflige des dégâts aux champions, grands monstres et minions.", cooldown: "Passif", scaling: "20% des dégâts de sorts" },
        spells: {
            Q: { name: "Entrave Sombre", icon: "⛓️", description: "Morgana lance un projectile qui root le premier ennemi touché.", cooldown: "10s", cost: "50/55/60/65/70 Mana", damage: "80/135/190/245/300 (+90% AP)", type: "magic" },
            W: { name: "Sol Maudit", icon: "🔥", description: "Morgana crée une zone qui inflige des dégâts et réduit la RM des ennemis.", cooldown: "12s", cost: "70/85/100/115/130 Mana", damage: "12/22/32/42/52 (+14% AP)/sec", type: "magic" },
            E: { name: "Bouclier Noir", icon: "🛡️", description: "Morgana protège un allié avec un bouclier qui absorbe les dégâts magiques et les CC.", cooldown: "24/22/20/18/16s", cost: "80 Mana", damage: "80/135/190/245/300 (+70% AP) bouclier", type: "utility" },
            R: { name: "Chaînes d'Âmes", icon: "⛓️", description: "Morgana enchaîne les champions proches. Après 3s, ils sont stun si toujours liés.", cooldown: "120/100/80s", cost: "100 Mana", damage: "150/225/300 (+70% AP) x2", type: "magic" }
        }
    },
    { 
        id: 19, name: "Nautilus", role: "support", icon: "⚓", 
        baseStats: { hp: 646, hpGrowth: 100, mana: 400, manaGrowth: 47, ad: 61, adGrowth: 4, armor: 39, armorGrowth: 4.95, mr: 32, mrGrowth: 2.05, as: 0.706, asGrowth: 1, ms: 325, range: 175 },
        passive: { name: "Fureur des Profondeurs", icon: "⚓", description: "La première attaque sur un champion le root et inflige des dégâts bonus.", cooldown: "6s par cible", scaling: "8-110 dégâts physiques" },
        spells: {
            Q: { name: "Ancrage Ravageur", icon: "⚓", description: "Nautilus lance son ancre qui le tire vers le terrain ou l'ennemi touché.", cooldown: "14/13/12/11/10s", cost: "60 Mana", damage: "70/115/160/205/250 (+90% AP)", type: "magic" },
            W: { name: "Colère des Titans", icon: "🛡️", description: "Nautilus gagne un bouclier et ses attaques infligent des dégâts bonus.", cooldown: "12s", cost: "60 Mana", damage: "30/40/50/60/70 (+40% AP) DoT", type: "magic" },
            E: { name: "Faille", icon: "💥", description: "Nautilus crée des explosions autour de lui qui ralentissent.", cooldown: "7/6.5/6/5.5/5s", cost: "50/60/70/80/90 Mana", damage: "55/85/115/145/175 (+30% AP)", type: "magic" },
            R: { name: "Briseur de Profondeur", icon: "🌊", description: "Nautilus envoie une onde qui knock up la cible et tous les ennemis sur le passage.", cooldown: "120/100/80s", cost: "100 Mana", damage: "150/275/400 (+80% AP)", type: "magic" }
        }
    },
    { 
        id: 20, name: "Riven", role: "fighter", icon: "🗡️", 
        baseStats: { hp: 630, hpGrowth: 100, mana: 0, manaGrowth: 0, ad: 64, adGrowth: 3, armor: 33, armorGrowth: 4.4, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 3.5, ms: 340, range: 125 },
        passive: { name: "Lame Runique", icon: "⚔️", description: "Les sorts de Riven chargent son épée. Ses attaques consomment les charges pour des dégâts bonus.", cooldown: "Passif", scaling: "30-60% AD bonus" },
        spells: {
            Q: { name: "Ailes Brisées", icon: "💨", description: "Riven effectue 3 slashs. Le 3ème knock up les ennemis.", cooldown: "12s", cost: "Aucun", damage: "15/35/55/75/95 (+45/50/55/60/65% AD) x3", type: "physical" },
            W: { name: "Ki Burst", icon: "💥", description: "Riven émet une onde de ki qui stun les ennemis proches.", cooldown: "11/10/9/8/7s", cost: "Aucun", damage: "65/95/125/155/185 (+100% bonus AD)", type: "physical" },
            E: { name: "Vaillance", icon: "🛡️", description: "Riven dash et gagne un bouclier.", cooldown: "10/9/8/7/6s", cost: "Aucun", damage: "85/115/145/175/205 (+120% bonus AD) bouclier", type: "utility" },
            R: { name: "Lame de l'Exilée", icon: "⚔️", description: "Riven libère sa lame, gagnant AD et range. Réactivation pour tirer Wind Slash.", cooldown: "75/60/45s", cost: "Aucun", damage: "+20% AD, Wind Slash: 100/150/200 (+60% bonus AD)", type: "physical" }
        }
    },
    { id: 21, name: "Syndra", role: "mage", icon: "🔮", baseStats: { hp: 593, hpGrowth: 104, mana: 480, manaGrowth: 40, ad: 54, adGrowth: 2.9, armor: 25, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 2, ms: 330, range: 550 },
        passive: { name: "Transcendance", icon: "💜", description: "Les sorts de Syndra gagnent des effets bonus quand ils atteignent certains niveaux.", cooldown: "Passif", scaling: "Bonus variés par sort" },
        spells: {
            Q: { name: "Sphère Obscure", icon: "🔮", description: "Syndra invoque une sphère qui inflige des dégâts magiques.", cooldown: "4s", cost: "40/50/60/70/80 Mana", damage: "70/105/140/175/210 (+65% AP)", type: "magic" },
            W: { name: "Force de Volonté", icon: "✋", description: "Syndra attrape une sphère ou minion et le lance pour infliger des dégâts et ralentir.", cooldown: "12/11/10/9/8s", cost: "60/70/80/90/100 Mana", damage: "70/110/150/190/230 (+70% AP)", type: "magic" },
            E: { name: "Dispersion des Faibles", icon: "💨", description: "Syndra repousse les ennemis et sphères. Les sphères repoussées stun.", cooldown: "18/17/16/15/14s", cost: "50 Mana", damage: "75/115/155/195/235 (+50% AP)", type: "magic" },
            R: { name: "Éclats Libérés", icon: "💥", description: "Syndra lance toutes ses sphères sur un champion, infligeant des dégâts massifs.", cooldown: "120/100/80s", cost: "100 Mana", damage: "90/140/190 (+17% AP) par sphère", type: "magic" }
        }
    },
    { id: 22, name: "Thresh", role: "support", icon: "⛓️", baseStats: { hp: 600, hpGrowth: 106, mana: 274, manaGrowth: 44, ad: 56, adGrowth: 2.2, armor: 31, armorGrowth: 0, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 3.5, ms: 330, range: 450 },
        passive: { name: "Damnation", icon: "👻", description: "Thresh collecte les âmes des ennemis morts, gagnant de l'armure et de l'AP.", cooldown: "Passif", scaling: "+1 Armure/AP par âme" },
        spells: {
            Q: { name: "Sentence Mortelle", icon: "⛓️", description: "Thresh lance sa faux qui hook et tire le premier champion touché.", cooldown: "20/18/16/14/12s", cost: "70 Mana", damage: "100/150/200/250/300 (+50% AP)", type: "magic" },
            W: { name: "Passage Sombre", icon: "🏮", description: "Thresh lance sa lanterne. Un allié peut cliquer dessus pour être tiré vers Thresh.", cooldown: "22/19.5/17/14.5/12s", cost: "50/55/60/65/70 Mana", damage: "60/100/140/180/220 (+1 par âme) bouclier", type: "utility" },
            E: { name: "Fléau", icon: "💨", description: "Thresh balaie avec sa chaîne, repoussant ou tirant les ennemis.", cooldown: "11/10.5/10/9.5/9s", cost: "60/65/70/75/80 Mana", damage: "75/115/155/195/235 (+40% AP)", type: "magic" },
            R: { name: "La Boîte", icon: "⬜", description: "Thresh crée une prison de murs. Les ennemis qui touchent un mur sont slow.", cooldown: "140/120/100s", cost: "100 Mana", damage: "250/400/550 (+100% AP)", type: "magic" }
        }
    },
    { id: 23, name: "Vayne", role: "marksman", icon: "🏹", baseStats: { hp: 550, hpGrowth: 103, mana: 232, manaGrowth: 35, ad: 60, adGrowth: 2.35, armor: 23, armorGrowth: 4.6, mr: 30, mrGrowth: 1.3, as: 0.658, asGrowth: 3.3, ms: 330, range: 550 },
        passive: { name: "Traque Nocturne", icon: "👁️", description: "Vayne gagne de la MS quand elle se déplace vers un champion ennemi visible.", cooldown: "Passif", scaling: "+30 MS" },
        spells: {
            Q: { name: "Roulade", icon: "💨", description: "Vayne fait une roulade et sa prochaine attaque inflige des dégâts bonus.", cooldown: "4/3.5/3/2.5/2s", cost: "30 Mana", damage: "60/65/70/75/80% AD bonus", type: "physical" },
            W: { name: "Carreaux d'Argent", icon: "🔘", description: "Chaque 3ème attaque sur la même cible inflige des dégâts vrais basés sur les PV max.", cooldown: "Passif", cost: "Aucun", damage: "50/65/80/95/110 (+4/6.5/9/11.5/14% PV max)", type: "true" },
            E: { name: "Condamnation", icon: "🏹", description: "Vayne tire un carreau qui repousse l'ennemi. S'il touche un mur, il est stun.", cooldown: "20/18/16/14/12s", cost: "90 Mana", damage: "50/85/120/155/190 (+50% bonus AD)", type: "physical" },
            R: { name: "Heure Finale", icon: "🌙", description: "Vayne gagne AD et triple le bonus de son passif. Roulade rend invisible.", cooldown: "100/85/70s", cost: "80 Mana", damage: "+25/40/55 AD bonus", type: "buff" }
        }
    },
    { id: 24, name: "Yasuo", role: "fighter", icon: "🌪️", baseStats: { hp: 590, hpGrowth: 101, mana: 0, manaGrowth: 0, ad: 60, adGrowth: 3.5, armor: 30, armorGrowth: 4.6, mr: 32, mrGrowth: 2.05, as: 0.697, asGrowth: 3.5, ms: 345, range: 175 },
        passive: { name: "Voie du Vagabond", icon: "🌀", description: "Yasuo double sa chance de critique mais réduit ses dégâts critiques. Gagne un bouclier en se déplaçant.", cooldown: "Passif", scaling: "2x Crit, -10% dégâts crit, bouclier 115-525" },
        spells: {
            Q: { name: "Tempête d'Acier", icon: "⚔️", description: "Yasuo frappe devant lui. Au 3ème coup, lance un tourbillon qui knock up.", cooldown: "4s (réduit par AS)", cost: "Aucun", damage: "20/45/70/95/120 (+105% AD)", type: "physical" },
            W: { name: "Mur de Vent", icon: "🌬️", description: "Yasuo crée un mur qui bloque tous les projectiles ennemis.", cooldown: "30/27/24/21/18s", cost: "Aucun", damage: "Aucun", type: "utility" },
            E: { name: "Lame Dansante", icon: "💨", description: "Yasuo dash à travers un ennemi, infligeant des dégâts. Ne peut pas cibler le même ennemi.", cooldown: "0.5/0.4/0.3/0.2/0.1s", cost: "Aucun", damage: "60/70/80/90/100 (+20% bonus AD)(+60% AP)", type: "magic" },
            R: { name: "Dernier Souffle", icon: "🌪️", description: "Yasuo téléporte vers un ennemi knock up et le suspend. Gagne pénétration d'armure.", cooldown: "80/55/30s", cost: "Aucun", damage: "200/350/500 (+150% bonus AD)", type: "physical" }
        }
    },
    { id: 25, name: "Yone", role: "fighter", icon: "⚔️", baseStats: { hp: 620, hpGrowth: 110, mana: 0, manaGrowth: 0, ad: 60, adGrowth: 3, armor: 28, armorGrowth: 5, mr: 32, mrGrowth: 2.05, as: 0.625, asGrowth: 2.5, ms: 345, range: 175 },
        passive: { name: "Voie du Chasseur", icon: "⚔️", description: "Yone manie 2 lames. Ses attaques alternent entre dégâts physiques et magiques.", cooldown: "Passif", scaling: "50% physiques, 50% magiques" },
        spells: {
            Q: { name: "Acier Mortel", icon: "⚔️", description: "Yone frappe devant lui. Au 3ème coup, dash et knock up.", cooldown: "4s (réduit par AS)", cost: "Aucun", damage: "20/40/60/80/100 (+105% AD)", type: "physical" },
            W: { name: "Frappe Spirituelle", icon: "👻", description: "Yone frappe les ennemis devant lui et gagne un bouclier basé sur les champions touchés.", cooldown: "14s", cost: "Aucun", damage: "10/20/30/40/50 (+10/11/12/13/14% PV max cible)", type: "magic" },
            E: { name: "Délivrance de l'Âme", icon: "💨", description: "Yone sépare son esprit de son corps, gagnant MS. Réactivation pour retourner.", cooldown: "22/19/16/13/10s", cost: "Aucun", damage: "Répète 25/27.5/30/32.5/35% des dégâts infligés", type: "true" },
            R: { name: "Sceau du Destin", icon: "🌙", description: "Yone dash sur une grande distance, knock up tous les ennemis touchés.", cooldown: "120/90/60s", cost: "Aucun", damage: "200/350/500 (+80% AD)", type: "physical" }
        }
    },
    { id: 26, name: "Zed", role: "assassin", icon: "🥷", baseStats: { hp: 654, hpGrowth: 99, mana: 200, manaGrowth: 0, ad: 63, adGrowth: 3.4, armor: 32, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05, as: 0.651, asGrowth: 3.3, ms: 345, range: 125 },
        passive: { name: "Contempt for the Weak", icon: "💀", description: "Les attaques contre les cibles sous 50% PV infligent des dégâts bonus magiques.", cooldown: "10s par cible", scaling: "6-10% PV max cible" },
        spells: {
            Q: { name: "Shuriken Rasoir", icon: "✴️", description: "Zed et ses ombres lancent des shurikens dans une ligne.", cooldown: "6s", cost: "75/70/65/60/55 Énergie", damage: "80/115/150/185/220 (+110% bonus AD)", type: "physical" },
            W: { name: "Ombre Vivante", icon: "👤", description: "Zed projette une ombre. Réactivation pour échanger de place. L'ombre imite ses sorts.", cooldown: "20/18.5/17/15.5/14s", cost: "40/35/30/25/20 Énergie", damage: "Aucun", type: "utility" },
            E: { name: "Tranchant de l'Ombre", icon: "🌀", description: "Zed et ses ombres créent un slash circulaire autour d'eux.", cooldown: "5/4.5/4/3.5/3s", cost: "50 Énergie", damage: "70/90/110/130/150 (+80% bonus AD)", type: "physical" },
            R: { name: "Marque de la Mort", icon: "💀", description: "Zed devient invulnérable et marque un champion. Après 3s, la marque explose.", cooldown: "120/90/60s", cost: "Aucun", damage: "100% AD + 25/40/55% des dégâts infligés", type: "physical" }
        }
    },
    { id: 27, name: "Zeri", role: "marksman", icon: "⚡", baseStats: { hp: 630, hpGrowth: 110, mana: 250, manaGrowth: 45, ad: 53, adGrowth: 1.5, armor: 24, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3, as: 0.658, asGrowth: 1.5, ms: 330, range: 500 },
        passive: { name: "Batterie Vivante", icon: "🔋", description: "Zeri absorbe les boucliers ennemis et gagne un bouclier. Ses attaques chargent sa batterie.", cooldown: "Passif", scaling: "60% du bouclier absorbé" },
        spells: {
            Q: { name: "Rafale", icon: "⚡", description: "Zeri tire une rafale d'électricité qui s'applique comme une attaque.", cooldown: "Basé sur AS", cost: "Aucun", damage: "15/18/21/24/27 (+104-110% AD)", type: "physical" },
            W: { name: "Laser Ultrashock", icon: "🔫", description: "Zeri tire un laser qui peut traverser les murs pour infliger plus de dégâts et slow.", cooldown: "13/12/11/10/9s", cost: "50/60/70/80/90 Mana", damage: "20/55/90/125/160 (+100% AD)(+60% AP)", type: "magic" },
            E: { name: "Étincelle", icon: "💨", description: "Zeri dash et électrise sa prochaine rafale qui traverse les ennemis.", cooldown: "24/22.5/21/19.5/18s", cost: "80 Mana", damage: "Rafale perce et critiques garanties", type: "physical" },
            R: { name: "Foudre Écrasante", icon: "⚡", description: "Zeri libère sa pleine puissance, gagnant MS, AS et dégâts en chaîne.", cooldown: "100/90/80s", cost: "100 Mana", damage: "175/275/375 (+85% bonus AD)(+110% AP)", type: "magic" }
        }
    },
    { id: 28, name: "Viego", role: "fighter", icon: "👑", baseStats: { hp: 630, hpGrowth: 109, mana: 0, manaGrowth: 0, ad: 57, adGrowth: 3.5, armor: 34, armorGrowth: 5.2, mr: 32, mrGrowth: 2.05, as: 0.658, asGrowth: 2.5, ms: 345, range: 200 },
        passive: { name: "Souverain Ruiné", icon: "👻", description: "Viego peut posséder les champions ennemis qu'il a aidé à tuer, utilisant leurs sorts.", cooldown: "Passif", scaling: "Soigne 3% PV max cible + dure 10s" },
        spells: {
            Q: { name: "Lame du Roi Déchu", icon: "⚔️", description: "Passif: Les attaques infligent des dégâts bonus. Actif: Frappe perçante devant.", cooldown: "5/4.5/4/3.5/3s", cost: "Aucun", damage: "25/40/55/70/85 (+60% AD)", type: "physical" },
            W: { name: "Brume Spectrale", icon: "💨", description: "Viego charge puis dash, stun le premier champion touché.", cooldown: "7s", cost: "Aucun", damage: "80/135/190/245/300 (+100% AP)", type: "magic" },
            E: { name: "Sentier Funeste", icon: "🌫️", description: "Viego crée une zone de brume qui le camoufle et lui donne de l'AS.", cooldown: "14/12/10/8/6s", cost: "Aucun", damage: "Aucun", type: "utility" },
            R: { name: "Cœur Brisé", icon: "💔", description: "Viego téléporte et frappe, infligeant des dégâts bonus aux cibles basse vie.", cooldown: "120/100/80s", cost: "Aucun", damage: "120% AD (+3% PV manquants cible)", type: "physical" }
        }
    },
    { id: 29, name: "Vi", role: "fighter", icon: "👊", baseStats: { hp: 655, hpGrowth: 99, mana: 295, manaGrowth: 65, ad: 63, adGrowth: 3, armor: 30, armorGrowth: 4.7, mr: 32, mrGrowth: 2.05, as: 0.644, asGrowth: 2, ms: 340, range: 125 },
        passive: { name: "Frappe Explosive", icon: "💥", description: "Vi charge un bouclier quand elle touche un ennemi avec un sort.", cooldown: "12-8s", scaling: "15% PV max" },
        spells: {
            Q: { name: "Coup de Poing Dévastateur", icon: "👊", description: "Vi charge un coup de poing qui la propulse et knock back les ennemis.", cooldown: "12/10.5/9/7.5/6s", cost: "50/60/70/80/90 Mana", damage: "55/80/105/130/155 (+80% bonus AD)", type: "physical" },
            W: { name: "Coups de Boutoir", icon: "💪", description: "Chaque 3ème attaque sur la même cible inflige des dégâts bonus et réduit l'armure.", cooldown: "Passif", cost: "Aucun", damage: "4/5.5/7/8.5/10% PV max cible", type: "physical" },
            E: { name: "Force Excessive", icon: "🔥", description: "La prochaine attaque de Vi frappe en zone et inflige des dégâts bonus.", cooldown: "1s (2 charges)", cost: "25/30/35/40/45 Mana", damage: "10/30/50/70/90 (+120% AD)(+90% AP)", type: "physical" },
            R: { name: "Assaut Dévastateur", icon: "🚀", description: "Vi charge et knock up un champion, repoussant tous les ennemis sur le passage.", cooldown: "120/100/80s", cost: "100 Mana", damage: "150/325/500 (+110% bonus AD)", type: "physical" }
        }
    },
    { id: 30, name: "Senna", role: "support", icon: "🔫", baseStats: { hp: 530, hpGrowth: 90, mana: 350, manaGrowth: 45, ad: 50, adGrowth: 0, armor: 28, armorGrowth: 4.2, mr: 30, mrGrowth: 1.3, as: 0.625, asGrowth: 4, ms: 330, range: 600 },
        passive: { name: "Absolution", icon: "💀", description: "Senna collecte la Brume des âmes, gagnant AD, portée et critiques.", cooldown: "Passif", scaling: "+0.75 AD par âme" },
        spells: {
            Q: { name: "Ténèbres Perçantes", icon: "🔫", description: "Senna tire un rayon qui soigne les alliés et inflige des dégâts aux ennemis.", cooldown: "15/14/13/12/11s", cost: "70/80/90/100/110 Mana", damage: "40/70/100/130/160 (+50% bonus AD)(+50% AP)", type: "physical" },
            W: { name: "Dernière Étreinte", icon: "⛓️", description: "Senna lance une zone de Brume qui root les ennemis après un délai.", cooldown: "11s", cost: "55/60/65/70/75 Mana", damage: "70/115/160/205/250 (+70% bonus AD)", type: "physical" },
            E: { name: "Malédiction de la Brume Noire", icon: "🌫️", description: "Senna se dissout dans la Brume avec ses alliés, les rendant invisibles et plus rapides.", cooldown: "26/24.5/23/21.5/20s", cost: "70 Mana", damage: "Aucun", type: "utility" },
            R: { name: "Éclipse de l'Aube", icon: "🌅", description: "Senna tire un rayon global qui inflige des dégâts et protège les alliés.", cooldown: "160/140/120s", cost: "100 Mana", damage: "250/400/550 (+115% bonus AD)(+70% AP)", type: "physical" }
        }
    },
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

// Arbres de runes
const RUNE_TREES = {
    precision: {
        name: "Précision",
        icon: "⚔️",
        color: "#c8aa6e",
        description: "Attaques améliorées et DPS soutenu",
        keystones: [
            { id: "pta", name: "Press the Attack", icon: "🎯", description: "Toucher 3 fois un champion lui applique un debuff augmentant les dégâts subis de 8-12%", stats: { bonusDmg: 10 } },
            { id: "lethal", name: "Lethal Tempo", icon: "⚡", description: "Gagne jusqu'à 90% de vitesse d'attaque bonus en combat (max 6 stacks)", stats: { as: 90 } },
            { id: "fleet", name: "Fleet Footwork", icon: "💨", description: "Les attaques énergisées soignent et donnent de la vitesse de déplacement", stats: { heal: 10, ms: 20 } },
            { id: "conqueror", name: "Conqueror", icon: "👑", description: "Gagne de l'AD/AP adaptatif par stack en combat (max 12). À max, soigne pour 8% des dégâts", stats: { ad: 36, omnivamp: 8 } },
        ],
        slots: [
            [
                { id: "overheal", name: "Overheal", icon: "💚", description: "Le surplus de soin se convertit en bouclier (max 10% PV)", stats: {} },
                { id: "triumph", name: "Triumph", icon: "🏆", description: "Les takedowns restaurent 10% des PV manquants et donnent 20 or", stats: {} },
                { id: "pom", name: "Presence of Mind", icon: "💠", description: "Les takedowns restaurent 15% du mana max", stats: {} },
            ],
            [
                { id: "alacrity", name: "Legend: Alacrity", icon: "⚡", description: "Gagne jusqu'à 18% de vitesse d'attaque", stats: { as: 18 } },
                { id: "bloodline", name: "Legend: Bloodline", icon: "🩸", description: "Gagne jusqu'à 6% de vol de vie", stats: { lifesteal: 6 } },
                { id: "haste", name: "Legend: Haste", icon: "⏱️", description: "Gagne jusqu'à 15 accélération de compétence", stats: { ah: 15 } },
            ],
            [
                { id: "cdg", name: "Coup de Grace", icon: "💀", description: "+8% dégâts aux cibles sous 40% PV", stats: { bonusDmg: 8 } },
                { id: "cutdown", name: "Cut Down", icon: "📉", description: "+5-15% dégâts aux cibles avec plus de PV max", stats: { bonusDmg: 10 } },
                { id: "laststand", name: "Last Stand", icon: "🔥", description: "+5-11% dégâts quand vous êtes sous 60% PV", stats: { bonusDmg: 8 } },
            ],
        ]
    },
    domination: {
        name: "Domination",
        icon: "🗡️",
        color: "#dc3545",
        description: "Burst et élimination de cibles",
        keystones: [
            { id: "electro", name: "Electrocute", icon: "⚡", description: "Toucher 3 fois un champion inflige des dégâts bonus adaptatifs", stats: { bonusDmg: 180 } },
            { id: "predator", name: "Predator", icon: "👟", description: "Active les bottes pour +45% MS et dégâts bonus au prochain sort", stats: { ms: 45, bonusDmg: 180 } },
            { id: "dh", name: "Dark Harvest", icon: "🌙", description: "Les champions sous 50% PV subissent des dégâts bonus qui scale infiniment", stats: { bonusDmg: 40 } },
            { id: "hob", name: "Hail of Blades", icon: "🔪", description: "Les 3 premières attaques sur un champion ont +110% AS", stats: { as: 110 } },
        ],
        slots: [
            [
                { id: "cheapshot", name: "Cheap Shot", icon: "🎯", description: "Inflige des dégâts bonus aux cibles avec mouvement réduit", stats: { bonusDmg: 10 } },
                { id: "taste", name: "Taste of Blood", icon: "🩸", description: "Soigne en touchant un champion (cooldown)", stats: { heal: 18 } },
                { id: "sudden", name: "Sudden Impact", icon: "💥", description: "Après un dash/blink, gagne létalité et pén. magique", stats: { lethality: 7, mpen: 6 } },
            ],
            [
                { id: "zombie", name: "Zombie Ward", icon: "👁️", description: "Les wards détruits deviennent des wards alliés", stats: {} },
                { id: "ghost", name: "Ghost Poro", icon: "👻", description: "Un poro fantôme donne de la vision et de l'AD/AP adaptative", stats: { ad: 10 } },
                { id: "eyeball", name: "Eyeball Collection", icon: "👀", description: "Gagne de l'AD/AP par takedown (max 10 stacks)", stats: { ad: 18 } },
            ],
            [
                { id: "treasure", name: "Treasure Hunter", icon: "💰", description: "Gagne de l'or bonus pour chaque premier takedown unique", stats: {} },
                { id: "ingenious", name: "Ingenious Hunter", icon: "🔧", description: "Réduit le cooldown des items actifs et de trinket", stats: { ah: 50 } },
                { id: "relentless", name: "Relentless Hunter", icon: "🏃", description: "Gagne de la vitesse de déplacement hors combat", stats: { ms: 18 } },
                { id: "ultimate", name: "Ultimate Hunter", icon: "💎", description: "Réduit le cooldown de l'ultime", stats: { ah: 26 } },
            ],
        ]
    },
    sorcery: {
        name: "Sorcellerie",
        icon: "✨",
        color: "#6f42c1",
        description: "Sorts amplifiés et manipulation des ressources",
        keystones: [
            { id: "comet", name: "Arcane Comet", icon: "☄️", description: "Toucher un champion avec une compétence lance une comète", stats: { bonusDmg: 100 } },
            { id: "aery", name: "Summon Aery", icon: "🦋", description: "Les sorts offensifs envoient Aery infliger des dégâts, les soins/boucliers l'envoient protéger", stats: { bonusDmg: 50 } },
            { id: "phaserush", name: "Phase Rush", icon: "💨", description: "Toucher 3 fois un champion donne 40-60% MS pendant 3s", stats: { ms: 50 } },
        ],
        slots: [
            [
                { id: "null", name: "Nullifying Orb", icon: "🔮", description: "Gagne un bouclier magique quand vous tombez sous 30% PV", stats: {} },
                { id: "manaflow", name: "Manaflow Band", icon: "💠", description: "Toucher un champion augmente le mana max de 25 (max 250)", stats: { mana: 250 } },
                { id: "nimbus", name: "Nimbus Cloak", icon: "☁️", description: "Utiliser un sort d'invocateur donne de la vitesse de mouvement", stats: { ms: 35 } },
            ],
            [
                { id: "transcendence", name: "Transcendence", icon: "⏱️", description: "Gagne 10 accélération au niveau 5 et 8. Les takedowns réduisent les cooldowns au niveau 11", stats: { ah: 20 } },
                { id: "celerity", name: "Celerity", icon: "💨", description: "+7% de tous les bonus de vitesse de mouvement", stats: { ms: 7 } },
                { id: "absolute", name: "Absolute Focus", icon: "🎯", description: "Gagne de l'AD/AP adaptative quand au-dessus de 70% PV", stats: { ad: 18 } },
            ],
            [
                { id: "scorch", name: "Scorch", icon: "🔥", description: "Les sorts infligent des dégâts brûlants bonus", stats: { bonusDmg: 20 } },
                { id: "waterwalking", name: "Waterwalking", icon: "🌊", description: "Gagne MS et AD/AP adaptative dans la rivière", stats: { ms: 25, ad: 18 } },
                { id: "gathering", name: "Gathering Storm", icon: "🌪️", description: "Gagne de l'AD/AP toutes les 10 minutes (sans limite)", stats: { ad: 48 } },
            ],
        ]
    },
    resolve: {
        name: "Volonté",
        icon: "🛡️",
        color: "#28a745",
        description: "Durabilité et contrôle de foule",
        keystones: [
            { id: "grasp", name: "Grasp of the Undying", icon: "✊", description: "Toutes les 4s en combat, votre prochaine attaque vole des PV", stats: { bonusDmg: 4, heal: 2 } },
            { id: "aftershock", name: "Aftershock", icon: "💥", description: "Après avoir immobilisé un champion, gagne armure/RM puis explose", stats: { armor: 35, mr: 35, bonusDmg: 120 } },
            { id: "guardian", name: "Guardian", icon: "🛡️", description: "Protège un allié proche avec un bouclier quand vous subissez des dégâts", stats: {} },
        ],
        slots: [
            [
                { id: "demolish", name: "Demolish", icon: "🔨", description: "Charge une attaque contre les tourelles pour des dégâts bonus", stats: { bonusDmg: 100 } },
                { id: "fontoflife", name: "Font of Life", icon: "💧", description: "Les ennemis ralentis/immobilisés soignent les alliés qui les attaquent", stats: {} },
                { id: "shield", name: "Shield Bash", icon: "🛡️", description: "Après avoir gagné un bouclier, la prochaine attaque fait des dégâts bonus", stats: { bonusDmg: 10 } },
            ],
            [
                { id: "conditioning", name: "Conditioning", icon: "💪", description: "Après 12min, gagne +8 armure et +8 RM, +3% de chaque", stats: { armor: 8, mr: 8 } },
                { id: "secondwind", name: "Second Wind", icon: "💨", description: "Après avoir subi des dégâts d'un champion, régénère des PV", stats: { hpRegen: 40 } },
                { id: "boneplating", name: "Bone Plating", icon: "🦴", description: "Les 3 prochaines compétences/attaques ennemies font moins de dégâts", stats: {} },
            ],
            [
                { id: "overgrowth", name: "Overgrowth", icon: "🌱", description: "Gagne +3 PV max par 8 minions morts proches. +3.5% PV max à 120 minions", stats: { hp: 180 } },
                { id: "revitalize", name: "Revitalize", icon: "💚", description: "+5% soins et boucliers. +10% sur cibles sous 40% PV", stats: { healShield: 10 } },
                { id: "unflinching", name: "Unflinching", icon: "⚓", description: "Gagne tenacité et slow resist basé sur les PV manquants", stats: { tenacity: 20 } },
            ],
        ]
    },
    inspiration: {
        name: "Inspiration",
        icon: "💡",
        color: "#17a2b8",
        description: "Utilitaire et contournement des règles",
        keystones: [
            { id: "glacial", name: "Glacial Augment", icon: "❄️", description: "Immobiliser un champion crée une zone de ralentissement", stats: {} },
            { id: "spellbook", name: "Unsealed Spellbook", icon: "📖", description: "Permet de changer de sorts d'invocateur en jeu", stats: {} },
            { id: "footwork", name: "First Strike", icon: "💰", description: "Attaquer en premier donne de l'or bonus et 9% dégâts supplémentaires pendant 3s", stats: { bonusDmg: 9 } },
        ],
        slots: [
            [
                { id: "hexflash", name: "Hextech Flashtraption", icon: "⚡", description: "En combat, le flash peut être canalisé depuis les buissons/FoW", stats: {} },
                { id: "magicfoot", name: "Magical Footwear", icon: "👟", description: "Gagne des bottes gratuites à 12min (+45s par takedown plus tôt)", stats: { ms: 10 } },
                { id: "cash", name: "Cash Back", icon: "💸", description: "Récupère 8% du coût des items légendaires achetés", stats: {} },
            ],
            [
                { id: "triple", name: "Triple Tonic", icon: "🧪", description: "Les potions et biscuits donnent aussi MS, mais durent moins", stats: { ms: 5 } },
                { id: "future", name: "Future's Market", icon: "🏦", description: "Permet d'acheter en dette (frais de 50 or)", stats: {} },
                { id: "minion", name: "Minion Dematerializer", icon: "💥", description: "3 utilisations pour tuer un minion et faire +6% de dégâts à ce type", stats: {} },
            ],
            [
                { id: "cosmic", name: "Cosmic Insight", icon: "🌌", description: "+18 accélération de sort d'invocateur, +10 accélération d'item", stats: { ah: 10 } },
                { id: "approach", name: "Approach Velocity", icon: "🏃", description: "+7.5% MS vers les champions alliés CC ou ennemis immobilisés", stats: { ms: 7 } },
                { id: "jack", name: "Jack of All Trades", icon: "🃏", description: "Gagne des stats bonus pour chaque type de stat possédé", stats: { ah: 10 } },
            ],
        ]
    }
};

// Shards de stats
const STAT_SHARDS = {
    offense: [
        { id: "as", name: "+10% Vitesse d'attaque", icon: "⚡", stats: { as: 10 } },
        { id: "adaptive", name: "+9 Force adaptative", icon: "⚔️", stats: { ad: 5.4, ap: 9 } },
        { id: "ah", name: "+8 Accélération", icon: "⏱️", stats: { ah: 8 } },
    ],
    flex: [
        { id: "adaptive2", name: "+9 Force adaptative", icon: "⚔️", stats: { ad: 5.4, ap: 9 } },
        { id: "ms", name: "+2% Vitesse de mouvement", icon: "💨", stats: { ms: 2 } },
        { id: "hp", name: "+10-180 PV (par niveau)", icon: "💚", stats: { hp: 90 } },
    ],
    defense: [
        { id: "hp2", name: "+10-180 PV (par niveau)", icon: "💚", stats: { hp: 90 } },
        { id: "tenacity", name: "+10% Tenacité et Slow Resist", icon: "⚓", stats: { tenacity: 10 } },
        { id: "hpflat", name: "+65 PV", icon: "❤️", stats: { hp: 65 } },
    ]
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
