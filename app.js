// État de l'application
let state = {
    selectedChampion: CHAMPIONS_DATA[0],
    championLevel: 18,
    build: {},
    selectedSlot: null,
    categoryFilter: 'all',
    searchTerm: '',
    // Runes
    primaryTree: null,
    secondaryTree: null,
    selectedRunes: {
        keystone: null,
        primary: [null, null, null],
        secondary: [null, null],
    },
    selectedShards: {
        offense: null,
        flex: null,
        defense: null,
    },
    activeTab: 'items',
};

// Éléments DOM
const elements = {
    // Header
    selectedChampion: document.getElementById('selectedChampion'),
    championIcon: document.getElementById('championIcon'),
    championEmoji: document.getElementById('championEmoji'),
    championName: document.getElementById('championName'),
    championRole: document.getElementById('championRole'),
    levelSlider: document.getElementById('levelSlider'),
    levelValue: document.getElementById('levelValue'),
    totalGold: document.getElementById('totalGold'),
    
    // Modal
    championModal: document.getElementById('championModal'),
    championSearch: document.getElementById('championSearch'),
    championsGrid: document.getElementById('championsGrid'),
    
    // Shop
    itemSearch: document.getElementById('itemSearch'),
    categoryFilters: document.getElementById('categoryFilters'),
    itemsGrid: document.getElementById('itemsGrid'),
    itemCount: document.getElementById('itemCount'),
    
    // Build
    clearBuild: document.getElementById('clearBuild'),
    champStatsIcon: document.getElementById('champStatsIcon'),
    champStatsName: document.getElementById('champStatsName'),
    champStatsLevel: document.getElementById('champStatsLevel'),
    baseHp: document.getElementById('baseHp'),
    baseAd: document.getElementById('baseAd'),
    baseArmor: document.getElementById('baseArmor'),
    baseMr: document.getElementById('baseMr'),
    baseAs: document.getElementById('baseAs'),
    baseMs: document.getElementById('baseMs'),
    passivesList: document.getElementById('passivesList'),
    
    // Tabs
    itemsTab: document.getElementById('itemsTab'),
    runesTab: document.getElementById('runesTab'),
    
    // Runes
    primaryTreeSelector: document.getElementById('primaryTreeSelector'),
    secondaryTreeSelector: document.getElementById('secondaryTreeSelector'),
    primaryRunesContainer: document.getElementById('primaryRunesContainer'),
    secondaryRunesContainer: document.getElementById('secondaryRunesContainer'),
    shardsContainer: document.getElementById('shardsContainer'),
    
    // Stats
    finalAd: document.getElementById('finalAd'),
    finalAp: document.getElementById('finalAp'),
    finalAs: document.getElementById('finalAs'),
    finalAsPercent: document.getElementById('finalAsPercent'),
    finalCrit: document.getElementById('finalCrit'),
    finalAh: document.getElementById('finalAh'),
    finalDps: document.getElementById('finalDps'),
    dpsDetail: document.getElementById('dpsDetail'),
    finalHp: document.getElementById('finalHp'),
    finalArmor: document.getElementById('finalArmor'),
    finalMr: document.getElementById('finalMr'),
    finalPhysRed: document.getElementById('finalPhysRed'),
    finalMagRed: document.getElementById('finalMagRed'),
    ehpPhys: document.getElementById('ehpPhys'),
    ehpMag: document.getElementById('ehpMag'),
    finalLethality: document.getElementById('finalLethality'),
    finalArmorPen: document.getElementById('finalArmorPen'),
    finalMpen: document.getElementById('finalMpen'),
    finalLifesteal: document.getElementById('finalLifesteal'),
    finalOmnivamp: document.getElementById('finalOmnivamp'),
    finalTenacity: document.getElementById('finalTenacity'),
    finalMs: document.getElementById('finalMs'),
    finalRange: document.getElementById('finalRange'),
    
    // Tooltip
    tooltip: document.getElementById('tooltip'),
};

// Initialisation
function init() {
    renderChampionsGrid();
    renderItems();
    renderTreeSelectors();
    renderShards();
    updateChampionDisplay();
    updateChampionStats();
    updateFinalStats();
    setupEventListeners();
}

// Configuration des événements
function setupEventListeners() {
    // Champion selector
    elements.selectedChampion.addEventListener('click', () => {
        elements.championModal.classList.add('active');
    });
    
    elements.championModal.addEventListener('click', (e) => {
        if (e.target === elements.championModal) {
            elements.championModal.classList.remove('active');
        }
    });
    
    elements.championSearch.addEventListener('input', (e) => {
        renderChampionsGrid(e.target.value);
    });
    
    // Level slider
    elements.levelSlider.addEventListener('input', (e) => {
        state.championLevel = parseInt(e.target.value);
        elements.levelValue.textContent = state.championLevel;
        updateChampionStats();
        updateFinalStats();
    });
    
    // Item search
    elements.itemSearch.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        renderItems();
    });
    
    // Category filters
    elements.categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            state.categoryFilter = e.target.dataset.category;
            renderItems();
        }
    });
    
    // Clear build
    elements.clearBuild.addEventListener('click', () => {
        state.build = {};
        state.selectedSlot = null;
        // Reset runes
        state.primaryTree = null;
        state.secondaryTree = null;
        state.selectedRunes = {
            keystone: null,
            primary: [null, null, null],
            secondary: [null, null],
        };
        state.selectedShards = {
            offense: null,
            flex: null,
            defense: null,
        };
        renderSlots();
        renderPassives();
        renderTreeSelectors();
        renderPrimaryRunes();
        renderSecondaryRunes();
        renderShards();
        updateFinalStats();
        updateTotalGold();
    });
    
    // Tabs
    document.querySelectorAll('.build-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            state.activeTab = tabName;
            
            document.querySelectorAll('.build-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });
    
    // Slots
    document.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', (e) => {
            const slotName = slot.dataset.slot;
            
            // Si on clique sur le bouton remove
            if (e.target.classList.contains('remove-btn')) {
                delete state.build[slotName];
                renderSlots();
                renderPassives();
                updateFinalStats();
                updateTotalGold();
                return;
            }
            
            // Toggle selection
            if (state.selectedSlot === slotName) {
                state.selectedSlot = null;
            } else {
                state.selectedSlot = slotName;
            }
            renderSlots();
            
            // Si c'est le slot boots, filtrer les bottes
            if (state.selectedSlot === 'boots') {
                state.categoryFilter = 'boots';
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.category === 'boots');
                });
                renderItems();
            }
        });
    });
    
    // Tooltip
    document.addEventListener('mousemove', (e) => {
        if (elements.tooltip.classList.contains('active')) {
            elements.tooltip.style.left = Math.min(e.clientX + 10, window.innerWidth - 280) + 'px';
            elements.tooltip.style.top = (e.clientY + 10) + 'px';
        }
    });
}

// Rendu de la grille des champions
function renderChampionsGrid(search = '') {
    const filtered = CHAMPIONS_DATA.filter(champ => 
        champ.name.toLowerCase().includes(search.toLowerCase())
    );
    
    elements.championsGrid.innerHTML = filtered.map(champ => `
        <div class="champ-card ${state.selectedChampion.id === champ.id ? 'selected' : ''}" 
             data-id="${champ.id}"
             style="border-color: ${CATEGORY_CONFIG[champ.role]?.color || '#c8aa6e'}">
            <span class="champ-card-icon">${champ.icon}</span>
            <span class="champ-card-name">${champ.name}</span>
        </div>
    `).join('');
    
    // Event listeners pour les cartes
    document.querySelectorAll('.champ-card').forEach(card => {
        card.addEventListener('click', () => {
            const champId = parseInt(card.dataset.id);
            state.selectedChampion = CHAMPIONS_DATA.find(c => c.id === champId);
            elements.championModal.classList.remove('active');
            updateChampionDisplay();
            updateChampionStats();
            updateFinalStats();
            renderChampionsGrid();
        });
    });
}

// Rendu des items
function renderItems() {
    let filtered = ITEMS_DATA.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchesCategory = state.categoryFilter === 'all' || item.category === state.categoryFilter;
        
        if (state.selectedSlot === 'boots') {
            return matchesSearch && item.category === 'boots';
        }
        
        return matchesSearch && matchesCategory;
    });
    
    elements.itemCount.textContent = `${filtered.length} items`;
    
    elements.itemsGrid.innerHTML = filtered.map(item => {
        const catConfig = CATEGORY_CONFIG[item.category];
        const statsHtml = Object.entries(item.stats).slice(0, 4).map(([stat, value]) => {
            const statConfig = STAT_CONFIG[stat];
            return `<span class="stat-chip">
                <span style="color: ${statConfig?.color || '#fff'}">+${value}</span>
                <span class="stat-abbr">${statConfig?.short || stat}</span>
            </span>`;
        }).join('');
        
        return `
            <div class="item-card" data-id="${item.id}" style="border-color: ${catConfig.color}">
                <div class="item-icon category-${item.category}">
                    <span class="icon-emoji">${item.icon}</span>
                </div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-meta">
                        <span class="category-tag" style="color: ${catConfig.color}; border-color: ${catConfig.color}">
                            ${catConfig.label}
                        </span>
                        <span class="item-cost">
                            <span class="gold-mini">🪙</span> ${item.cost}
                        </span>
                    </div>
                    <div class="stats-preview">${statsHtml}</div>
                </div>
                ${item.passive ? '<div class="passive-indicator">✨</div>' : ''}
            </div>
        `;
    }).join('');
    
    // Event listeners pour les items
    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', () => {
            const itemId = parseInt(card.dataset.id);
            const item = ITEMS_DATA.find(i => i.id === itemId);
            equipItem(item);
        });
        
        card.addEventListener('mouseenter', (e) => {
            const itemId = parseInt(card.dataset.id);
            const item = ITEMS_DATA.find(i => i.id === itemId);
            showTooltip(item, e);
        });
        
        card.addEventListener('mouseleave', () => {
            hideTooltip();
        });
    });
}

// Équiper un item
function equipItem(item) {
    if (item.category === 'boots') {
        state.build.boots = item;
    } else if (state.selectedSlot && state.selectedSlot !== 'boots') {
        state.build[state.selectedSlot] = item;
        state.selectedSlot = null;
    } else {
        // Trouver le premier slot libre
        const slots = ['slot1', 'slot2', 'slot3', 'slot4', 'slot5'];
        const emptySlot = slots.find(slot => !state.build[slot]);
        if (emptySlot) {
            state.build[emptySlot] = item;
        }
    }
    
    renderSlots();
    renderPassives();
    updateFinalStats();
    updateTotalGold();
}

// Rendu des slots
function renderSlots() {
    document.querySelectorAll('.slot').forEach(slotEl => {
        const slotName = slotEl.dataset.slot;
        const item = state.build[slotName];
        const isSelected = state.selectedSlot === slotName;
        
        slotEl.classList.toggle('selected', isSelected);
        slotEl.classList.toggle('filled', !!item);
        
        if (item) {
            const catConfig = CATEGORY_CONFIG[item.category];
            slotEl.style.borderColor = catConfig.color;
            slotEl.style.boxShadow = `0 0 15px ${catConfig.color}40`;
            slotEl.innerHTML = `
                <div class="slot-icon category-${item.category}">
                    <span class="slot-emoji">${item.icon}</span>
                </div>
                <span class="slot-name">${item.name}</span>
                <button class="remove-btn">✕</button>
            `;
        } else {
            slotEl.style.borderColor = isSelected ? '#c8aa6e' : 'rgba(200, 170, 110, 0.3)';
            slotEl.style.boxShadow = isSelected ? '0 0 20px rgba(200, 170, 110, 0.4), inset 0 0 20px rgba(200, 170, 110, 0.1)' : 'none';
            const isBoots = slotName === 'boots';
            slotEl.innerHTML = `
                <div class="empty-slot">${isBoots ? '👢' : '+'}</div>
                <span class="slot-label">${isBoots ? 'Bottes' : 'Slot ' + slotName.replace('slot', '')}</span>
            `;
        }
    });
}

// Rendu des passifs
function renderPassives() {
    const passives = Object.values(state.build).filter(item => item?.passive);
    
    if (passives.length === 0) {
        elements.passivesList.innerHTML = '<p class="empty-passives">Équipez des items avec passifs</p>';
        return;
    }
    
    elements.passivesList.innerHTML = passives.map(item => `
        <div class="passive-card">
            <span class="passive-icon">${item.icon}</span>
            <div class="passive-content">
                <span class="passive-name">${item.name}</span>
                <p class="passive-text">${item.passive}</p>
            </div>
        </div>
    `).join('');
}

// Mise à jour de l'affichage du champion
function updateChampionDisplay() {
    const champ = state.selectedChampion;
    const catConfig = CATEGORY_CONFIG[champ.role];
    
    elements.championEmoji.textContent = champ.icon;
    elements.championIcon.className = `champion-icon category-${champ.role}`;
    elements.championName.textContent = champ.name;
    elements.championRole.textContent = catConfig.label;
    
    elements.champStatsIcon.textContent = champ.icon;
    elements.champStatsName.textContent = champ.name;
}

// Mise à jour des stats du champion
function updateChampionStats() {
    const champ = state.selectedChampion;
    const lvl = state.championLevel - 1;
    const base = champ.baseStats;
    
    const hp = Math.round(base.hp + base.hpGrowth * lvl);
    const ad = Math.round((base.ad + base.adGrowth * lvl) * 10) / 10;
    const armor = Math.round((base.armor + base.armorGrowth * lvl) * 10) / 10;
    const mr = Math.round((base.mr + base.mrGrowth * lvl) * 10) / 10;
    const as = Math.round((base.as * (1 + (base.asGrowth * lvl) / 100)) * 1000) / 1000;
    const ms = base.ms;
    
    elements.champStatsLevel.textContent = `Niv. ${state.championLevel}`;
    elements.baseHp.textContent = hp;
    elements.baseAd.textContent = ad;
    elements.baseArmor.textContent = armor;
    elements.baseMr.textContent = mr;
    elements.baseAs.textContent = as;
    elements.baseMs.textContent = ms;
}

// Calculer les stats des items
function getItemStats() {
    const stats = {};
    Object.values(state.build).forEach(item => {
        if (item) {
            Object.entries(item.stats).forEach(([key, value]) => {
                stats[key] = (stats[key] || 0) + value;
            });
        }
    });
    return stats;
}

// Calculer les stats du champion au niveau actuel
function getChampionStats() {
    const champ = state.selectedChampion;
    const lvl = state.championLevel - 1;
    const base = champ.baseStats;
    
    return {
        hp: Math.round(base.hp + base.hpGrowth * lvl),
        mana: Math.round(base.mana + base.manaGrowth * lvl),
        ad: Math.round((base.ad + base.adGrowth * lvl) * 10) / 10,
        armor: Math.round((base.armor + base.armorGrowth * lvl) * 10) / 10,
        mr: Math.round((base.mr + base.mrGrowth * lvl) * 10) / 10,
        as: base.as * (1 + (base.asGrowth * lvl) / 100),
        ms: base.ms,
        range: base.range,
    };
}

// Mise à jour des stats finales
function updateFinalStats() {
    const champStats = getChampionStats();
    const itemStats = getItemStats();
    const runeStats = getRuneStats();
    
    // Combine item and rune stats
    const bonusStats = {};
    [itemStats, runeStats].forEach(source => {
        Object.entries(source).forEach(([key, value]) => {
            bonusStats[key] = (bonusStats[key] || 0) + value;
        });
    });
    
    // Calculs
    const totalAD = champStats.ad + (bonusStats.ad || 0);
    const totalAP = bonusStats.ap || 0;
    const totalArmor = champStats.armor + (bonusStats.armor || 0);
    const totalMR = champStats.mr + (bonusStats.mr || 0);
    const totalHP = champStats.hp + (bonusStats.hp || 0);
    
    const bonusAS = bonusStats.as || 0;
    const finalAS = Math.min(2.5, champStats.as * (1 + bonusAS / 100));
    const asPercent = Math.round((finalAS / champStats.as - 1) * 100);
    
    const bonusMSPercent = bonusStats.ms || 0;
    const finalMS = Math.round(champStats.ms * (1 + bonusMSPercent / 100));
    
    const critChance = Math.min(100, bonusStats.crit || 0);
    const hasIE = Object.values(state.build).some(i => i?.name === "Infinity Edge");
    const critMultiplier = critChance >= 60 && hasIE ? 2.15 : 1.75;
    const avgCritMultiplier = 1 + (critChance / 100) * (critMultiplier - 1);
    const dps = Math.round(totalAD * finalAS * avgCritMultiplier);
    
    const physicalReduction = Math.round((totalArmor / (100 + totalArmor)) * 1000) / 10;
    const magicReduction = Math.round((totalMR / (100 + totalMR)) * 1000) / 10;
    
    const effectiveHPPhysical = Math.round(totalHP * (1 + totalArmor / 100));
    const effectiveHPMagic = Math.round(totalHP * (1 + totalMR / 100));
    
    // Mise à jour du DOM
    elements.finalAd.textContent = Math.round(totalAD);
    elements.finalAp.textContent = totalAP;
    elements.finalAs.textContent = Math.round(finalAS * 1000) / 1000;
    elements.finalAsPercent.textContent = asPercent + '%';
    elements.finalCrit.textContent = critChance + '%';
    elements.finalAh.textContent = bonusStats.ah || 0;
    
    elements.finalDps.textContent = dps;
    elements.dpsDetail.textContent = `${Math.round(totalAD)} AD × ${(Math.round(finalAS * 100) / 100)} AS × ${critChance}% Crit`;
    
    elements.finalHp.textContent = totalHP;
    elements.finalArmor.textContent = Math.round(totalArmor);
    elements.finalMr.textContent = Math.round(totalMR);
    elements.finalPhysRed.textContent = physicalReduction + '%';
    elements.finalMagRed.textContent = magicReduction + '%';
    
    elements.ehpPhys.textContent = effectiveHPPhysical.toLocaleString();
    elements.ehpMag.textContent = effectiveHPMagic.toLocaleString();
    
    elements.finalLethality.textContent = bonusStats.lethality || 0;
    elements.finalArmorPen.textContent = (bonusStats.armorPen || 0) + '%';
    elements.finalMpen.textContent = bonusStats.mpen || 0;
    
    elements.finalLifesteal.textContent = (bonusStats.lifesteal || 0) + '%';
    elements.finalOmnivamp.textContent = (bonusStats.omnivamp || 0) + '%';
    elements.finalTenacity.textContent = (bonusStats.tenacity || 0) + '%';
    
    elements.finalMs.textContent = finalMS;
    elements.finalRange.textContent = champStats.range;
}

// Mise à jour du coût total
function updateTotalGold() {
    const total = Object.values(state.build).reduce((sum, item) => sum + (item?.cost || 0), 0);
    elements.totalGold.textContent = total.toLocaleString();
}

// Afficher le tooltip
function showTooltip(item, event) {
    const statsHtml = Object.entries(item.stats).map(([stat, value]) => {
        const statConfig = STAT_CONFIG[stat];
        return `<div class="tooltip-stat">
            <span style="color: ${statConfig?.color || '#fff'}">+${value}</span>
            <span>${statConfig?.label || stat}</span>
        </div>`;
    }).join('');
    
    elements.tooltip.innerHTML = `
        <div class="tooltip-header">
            <span class="tooltip-icon">${item.icon}</span>
            <div>
                <h4 class="tooltip-name">${item.name}</h4>
                <span class="tooltip-cost">🪙 ${item.cost}</span>
            </div>
        </div>
        <div class="tooltip-stats">${statsHtml}</div>
        ${item.passive ? `
            <div class="tooltip-passive">
                <span class="passive-tag">PASSIF</span>
                <p>${item.passive}</p>
            </div>
        ` : ''}
    `;
    
    elements.tooltip.style.left = Math.min(event.clientX + 10, window.innerWidth - 280) + 'px';
    elements.tooltip.style.top = (event.clientY + 10) + 'px';
    elements.tooltip.classList.add('active');
}

// Cacher le tooltip
function hideTooltip() {
    elements.tooltip.classList.remove('active');
}

// ============================================
// RUNES FUNCTIONS
// ============================================

// Rendu des sélecteurs d'arbre
function renderTreeSelectors() {
    // Primary tree selector
    elements.primaryTreeSelector.innerHTML = Object.entries(RUNE_TREES).map(([key, tree]) => {
        const isActive = state.primaryTree === key;
        return `
            <button class="tree-btn ${isActive ? 'active' : ''}" 
                    data-tree="${key}" 
                    data-type="primary"
                    style="--tree-color: ${tree.color}; --tree-color-glow: ${tree.color}40">
                <span class="tree-btn-icon">${tree.icon}</span>
                <span class="tree-btn-name">${tree.name}</span>
            </button>
        `;
    }).join('');
    
    // Secondary tree selector
    elements.secondaryTreeSelector.innerHTML = Object.entries(RUNE_TREES).map(([key, tree]) => {
        const isActive = state.secondaryTree === key;
        const isDisabled = state.primaryTree === key;
        return `
            <button class="tree-btn ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}" 
                    data-tree="${key}" 
                    data-type="secondary"
                    ${isDisabled ? 'disabled' : ''}
                    style="--tree-color: ${tree.color}; --tree-color-glow: ${tree.color}40">
                <span class="tree-btn-icon">${tree.icon}</span>
                <span class="tree-btn-name">${tree.name}</span>
            </button>
        `;
    }).join('');
    
    // Event listeners
    document.querySelectorAll('.tree-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            const treeKey = btn.dataset.tree;
            const type = btn.dataset.type;
            
            if (type === 'primary') {
                state.primaryTree = treeKey;
                state.selectedRunes.keystone = null;
                state.selectedRunes.primary = [null, null, null];
                // Reset secondary if same tree
                if (state.secondaryTree === treeKey) {
                    state.secondaryTree = null;
                    state.selectedRunes.secondary = [null, null];
                }
            } else {
                state.secondaryTree = treeKey;
                state.selectedRunes.secondary = [null, null];
            }
            
            renderTreeSelectors();
            renderPrimaryRunes();
            renderSecondaryRunes();
            updateFinalStats();
        });
    });
}

// Rendu des runes principales
function renderPrimaryRunes() {
    if (!state.primaryTree) {
        elements.primaryRunesContainer.innerHTML = '<p class="empty-runes">Sélectionnez un arbre principal</p>';
        return;
    }
    
    const tree = RUNE_TREES[state.primaryTree];
    
    let html = '';
    
    // Keystones
    html += `<div class="rune-row keystone-row" style="--tree-color: ${tree.color}; --tree-color-glow: ${tree.color}40">`;
    tree.keystones.forEach(keystone => {
        const isSelected = state.selectedRunes.keystone === keystone.id;
        html += `
            <div class="rune-slot keystone ${isSelected ? 'selected' : ''}" 
                 data-rune-id="${keystone.id}" 
                 data-rune-type="keystone"
                 style="--tree-color: ${tree.color}">
                <span class="rune-slot-icon">${keystone.icon}</span>
                <span class="rune-slot-name">${keystone.name}</span>
            </div>
        `;
    });
    html += '</div>';
    
    // Minor runes
    tree.slots.forEach((slot, slotIndex) => {
        html += `<div class="rune-row" style="--tree-color: ${tree.color}">`;
        slot.forEach(rune => {
            const isSelected = state.selectedRunes.primary[slotIndex] === rune.id;
            html += `
                <div class="rune-slot ${isSelected ? 'selected' : ''}" 
                     data-rune-id="${rune.id}" 
                     data-rune-type="primary"
                     data-slot-index="${slotIndex}"
                     style="--tree-color: ${tree.color}">
                    <span class="rune-slot-icon">${rune.icon}</span>
                    <span class="rune-slot-name">${rune.name}</span>
                </div>
            `;
        });
        html += '</div>';
    });
    
    elements.primaryRunesContainer.innerHTML = html;
    
    // Event listeners
    elements.primaryRunesContainer.querySelectorAll('.rune-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const runeId = slot.dataset.runeId;
            const type = slot.dataset.runeType;
            
            if (type === 'keystone') {
                state.selectedRunes.keystone = runeId;
            } else {
                const slotIndex = parseInt(slot.dataset.slotIndex);
                state.selectedRunes.primary[slotIndex] = runeId;
            }
            
            renderPrimaryRunes();
            updateFinalStats();
        });
        
        slot.addEventListener('mouseenter', (e) => {
            const runeId = slot.dataset.runeId;
            const type = slot.dataset.runeType;
            let rune;
            
            if (type === 'keystone') {
                rune = tree.keystones.find(k => k.id === runeId);
            } else {
                const slotIndex = parseInt(slot.dataset.slotIndex);
                rune = tree.slots[slotIndex].find(r => r.id === runeId);
            }
            
            if (rune) showRuneTooltip(rune, tree.color, e);
        });
        
        slot.addEventListener('mouseleave', hideRuneTooltip);
    });
}

// Rendu des runes secondaires
function renderSecondaryRunes() {
    if (!state.secondaryTree) {
        elements.secondaryRunesContainer.innerHTML = '<p class="empty-runes">Sélectionnez un arbre secondaire</p>';
        return;
    }
    
    const tree = RUNE_TREES[state.secondaryTree];
    
    let html = '<div class="secondary-slots">';
    
    // All minor runes from secondary tree (flatten all slots)
    const allRunes = [];
    tree.slots.forEach((slot, slotIndex) => {
        slot.forEach(rune => {
            allRunes.push({ ...rune, slotIndex });
        });
    });
    
    allRunes.forEach(rune => {
        const isSelected = state.selectedRunes.secondary.includes(rune.id);
        html += `
            <div class="rune-slot secondary-slot ${isSelected ? 'selected' : ''}" 
                 data-rune-id="${rune.id}" 
                 data-slot-index="${rune.slotIndex}"
                 style="--tree-color: ${tree.color}">
                <span class="rune-slot-icon">${rune.icon}</span>
                <span class="rune-slot-name">${rune.name}</span>
            </div>
        `;
    });
    
    html += '</div>';
    elements.secondaryRunesContainer.innerHTML = html;
    
    // Event listeners
    elements.secondaryRunesContainer.querySelectorAll('.rune-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const runeId = slot.dataset.runeId;
            const slotIndex = parseInt(slot.dataset.slotIndex);
            
            // Check if already selected
            const currentIndex = state.selectedRunes.secondary.indexOf(runeId);
            if (currentIndex !== -1) {
                // Deselect
                state.selectedRunes.secondary[currentIndex] = null;
            } else {
                // Check if same slot already has a selection
                const sameSlotRune = tree.slots[slotIndex].map(r => r.id);
                const existingFromSameSlot = state.selectedRunes.secondary.findIndex(id => 
                    id && sameSlotRune.includes(id)
                );
                
                if (existingFromSameSlot !== -1) {
                    // Replace same-slot selection
                    state.selectedRunes.secondary[existingFromSameSlot] = runeId;
                } else {
                    // Find empty spot
                    const emptyIndex = state.selectedRunes.secondary.indexOf(null);
                    if (emptyIndex !== -1) {
                        state.selectedRunes.secondary[emptyIndex] = runeId;
                    } else {
                        // Replace oldest
                        state.selectedRunes.secondary[0] = state.selectedRunes.secondary[1];
                        state.selectedRunes.secondary[1] = runeId;
                    }
                }
            }
            
            renderSecondaryRunes();
            updateFinalStats();
        });
        
        slot.addEventListener('mouseenter', (e) => {
            const runeId = slot.dataset.runeId;
            const slotIndex = parseInt(slot.dataset.slotIndex);
            const rune = tree.slots[slotIndex].find(r => r.id === runeId);
            if (rune) showRuneTooltip(rune, tree.color, e);
        });
        
        slot.addEventListener('mouseleave', hideRuneTooltip);
    });
}

// Rendu des shards
function renderShards() {
    const rows = ['offense', 'flex', 'defense'];
    
    let html = '';
    rows.forEach(rowName => {
        html += '<div class="shard-row">';
        STAT_SHARDS[rowName].forEach(shard => {
            const isSelected = state.selectedShards[rowName] === shard.id;
            html += `
                <div class="shard-slot ${isSelected ? 'selected' : ''}" 
                     data-shard-id="${shard.id}" 
                     data-shard-row="${rowName}">
                    <span class="shard-slot-icon">${shard.icon}</span>
                    <span class="shard-slot-name">${shard.name}</span>
                </div>
            `;
        });
        html += '</div>';
    });
    
    elements.shardsContainer.innerHTML = html;
    
    // Event listeners
    elements.shardsContainer.querySelectorAll('.shard-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const shardId = slot.dataset.shardId;
            const row = slot.dataset.shardRow;
            
            if (state.selectedShards[row] === shardId) {
                state.selectedShards[row] = null;
            } else {
                state.selectedShards[row] = shardId;
            }
            
            renderShards();
            updateFinalStats();
        });
    });
}

// Calculer les stats des runes
function getRuneStats() {
    const stats = {};
    
    // Keystone
    if (state.primaryTree && state.selectedRunes.keystone) {
        const tree = RUNE_TREES[state.primaryTree];
        const keystone = tree.keystones.find(k => k.id === state.selectedRunes.keystone);
        if (keystone?.stats) {
            Object.entries(keystone.stats).forEach(([key, value]) => {
                stats[key] = (stats[key] || 0) + value;
            });
        }
    }
    
    // Primary runes
    if (state.primaryTree) {
        const tree = RUNE_TREES[state.primaryTree];
        state.selectedRunes.primary.forEach((runeId, slotIndex) => {
            if (runeId) {
                const rune = tree.slots[slotIndex].find(r => r.id === runeId);
                if (rune?.stats) {
                    Object.entries(rune.stats).forEach(([key, value]) => {
                        stats[key] = (stats[key] || 0) + value;
                    });
                }
            }
        });
    }
    
    // Secondary runes
    if (state.secondaryTree) {
        const tree = RUNE_TREES[state.secondaryTree];
        state.selectedRunes.secondary.forEach(runeId => {
            if (runeId) {
                for (const slot of tree.slots) {
                    const rune = slot.find(r => r.id === runeId);
                    if (rune?.stats) {
                        Object.entries(rune.stats).forEach(([key, value]) => {
                            stats[key] = (stats[key] || 0) + value;
                        });
                        break;
                    }
                }
            }
        });
    }
    
    // Shards
    Object.entries(state.selectedShards).forEach(([row, shardId]) => {
        if (shardId) {
            const shard = STAT_SHARDS[row].find(s => s.id === shardId);
            if (shard?.stats) {
                Object.entries(shard.stats).forEach(([key, value]) => {
                    stats[key] = (stats[key] || 0) + value;
                });
            }
        }
    });
    
    return stats;
}

// Tooltip pour les runes
function showRuneTooltip(rune, color, event) {
    elements.tooltip.innerHTML = `
        <div class="tooltip-header" style="border-bottom-color: ${color}40">
            <span class="tooltip-icon">${rune.icon}</span>
            <div>
                <h4 class="tooltip-name" style="color: ${color}">${rune.name}</h4>
            </div>
        </div>
        <p class="rune-tooltip-desc">${rune.description}</p>
    `;
    elements.tooltip.style.borderColor = color;
    elements.tooltip.style.left = Math.min(event.clientX + 10, window.innerWidth - 240) + 'px';
    elements.tooltip.style.top = (event.clientY + 10) + 'px';
    elements.tooltip.classList.add('active');
}

function hideRuneTooltip() {
    elements.tooltip.classList.remove('active');
}

// Lancer l'application
document.addEventListener('DOMContentLoaded', init);
