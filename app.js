// ========================================
// APP.JS - Application principale
// ========================================

// État de l'application
let state = {
    selectedChampion: null,
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
    exportBuild: document.getElementById('exportBuild'),
    importBuild: document.getElementById('importBuild'),
    importFile: document.getElementById('importFile'),
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
    
    // Abilities
    abilitiesToggle: document.getElementById('abilitiesToggle'),
    abilitiesContainer: document.getElementById('abilitiesContainer'),
    passiveSlot: document.getElementById('passiveSlot'),
    qSlot: document.getElementById('qSlot'),
    wSlot: document.getElementById('wSlot'),
    eSlot: document.getElementById('eSlot'),
    rSlot: document.getElementById('rSlot'),
    passiveName: document.getElementById('passiveName'),
    qName: document.getElementById('qName'),
    wName: document.getElementById('wName'),
    eName: document.getElementById('eName'),
    rName: document.getElementById('rName'),
    
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
    // Attendre que les données soient chargées
    if (CHAMPIONS_DATA.length === 0 || ITEMS_DATA.length === 0) {
        console.log("⏳ Attente du chargement des données...");
        setTimeout(init, 100);
        return;
    }
    
    // Sélectionner le premier champion
    state.selectedChampion = CHAMPIONS_DATA[0];
    
    console.log("🎮 Application initialisée");
    console.log(`   - ${CHAMPIONS_DATA.length} champions disponibles`);
    console.log(`   - ${ITEMS_DATA.length} items disponibles`);
    
    renderChampionsGrid();
    renderItems();
    renderTreeSelectors();
    renderShards();
    renderAbilities();
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
        renderItems(); // Re-render pour mettre à jour la surbrillance
        renderPassives();
        renderTreeSelectors();
        renderPrimaryRunes();
        renderSecondaryRunes();
        renderShards();
        updateFinalStats();
        updateTotalGold();
    });
    
    // Export build
    elements.exportBuild.addEventListener('click', () => {
        exportBuildToJSON();
    });
    
    // Import build
    elements.importBuild.addEventListener('click', () => {
        elements.importFile.click();
    });
    
    elements.importFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importBuildFromJSON(file);
            e.target.value = ''; // Reset pour permettre de réimporter le même fichier
        }
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
    
    // Abilities toggle
    elements.abilitiesToggle.addEventListener('click', () => {
        elements.abilitiesToggle.classList.toggle('collapsed');
        elements.abilitiesContainer.classList.toggle('collapsed');
    });
    
    // Abilities tooltips
    setupAbilityTooltips();
    
    // Slots
    document.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', (e) => {
            const slotName = slot.dataset.slot;
            
            // Si on clique sur le bouton remove
            if (e.target.classList.contains('remove-btn')) {
                delete state.build[slotName];
                renderSlots();
                renderItems(); // Re-render pour mettre à jour la surbrillance
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

// Vérifier si un item est déjà équipé dans le build
function isItemEquipped(itemId) {
    return Object.values(state.build).some(item => item && item.id === itemId);
}

// Vérifier si on a déjà des bottes équipées
function hasBootsEquipped() {
    return state.build.boots !== undefined && state.build.boots !== null;
}

// Obtenir les IDs de tous les items équipés
function getEquippedItemIds() {
    return Object.values(state.build)
        .filter(item => item !== null && item !== undefined)
        .map(item => item.id);
}

// Rendu de la grille des champions
function renderChampionsGrid(search = '') {
    const filtered = CHAMPIONS_DATA.filter(champ => 
        champ.name.toLowerCase().includes(search.toLowerCase())
    );
    
    elements.championsGrid.innerHTML = filtered.map(champ => `
        <div class="champ-card ${state.selectedChampion?.id === champ.id ? 'selected' : ''}" 
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
    
    // Obtenir les IDs des items équipés
    const equippedIds = getEquippedItemIds();
    
    elements.itemCount.textContent = `${filtered.length} items`;
    
    elements.itemsGrid.innerHTML = filtered.map(item => {
        const catConfig = CATEGORY_CONFIG[item.category];
        const isEquipped = equippedIds.includes(item.id);
        const statsHtml = Object.entries(item.stats).slice(0, 4).map(([stat, value]) => {
            const statConfig = STAT_CONFIG[stat];
            return `<span class="stat-chip">
                <span style="color: ${statConfig?.color || '#fff'}">+${value}</span>
                <span class="stat-abbr">${statConfig?.short || stat}</span>
            </span>`;
        }).join('');
        
        return `
            <div class="item-card ${isEquipped ? 'equipped' : ''}" 
                 data-id="${item.id}" 
                 data-equipped="${isEquipped}"
                 style="border-color: ${catConfig?.color || '#c8aa6e'}">
                <div class="item-icon category-${item.category}">
                    <span class="icon-emoji">${item.icon}</span>
                </div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-meta">
                        <span class="category-tag" style="color: ${catConfig?.color || '#c8aa6e'}; border-color: ${catConfig?.color || '#c8aa6e'}">
                            ${catConfig?.label || item.category}
                        </span>
                        <span class="item-cost">
                            <span class="gold-mini">🪙</span> ${item.cost}
                        </span>
                    </div>
                    <div class="stats-preview">${statsHtml}</div>
                </div>
                ${isEquipped ? '<div class="equipped-indicator">✓</div>' : ''}
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
    // Vérifier si l'item est déjà équipé (pas de doublons)
    if (isItemEquipped(item.id)) {
        showNotification(`${item.name} est déjà équipé !`, 'warning');
        return;
    }
    
    if (item.category === 'boots') {
        // Vérifier si on a déjà des bottes
        if (hasBootsEquipped()) {
            showNotification('Vous avez déjà des bottes équipées !', 'warning');
            return;
        }
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
        } else {
            showNotification('Tous les slots sont pleins !', 'warning');
            return;
        }
    }
    
    renderSlots();
    renderItems(); // Re-render pour mettre à jour la surbrillance
    renderPassives();
    updateFinalStats();
    updateTotalGold();
}

// Afficher une notification
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Supprimer après 2.5 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// ============================================
// IMPORT / EXPORT BUILD
// ============================================

// Exporter le build en JSON
function exportBuildToJSON() {
    // Vérifier si le build est vide
    const hasItems = Object.values(state.build).some(item => item !== null && item !== undefined);
    const hasRunes = state.primaryTree !== null || state.selectedRunes.keystone !== null;
    
    if (!hasItems && !hasRunes) {
        showNotification('Aucun build à exporter !', 'warning');
        return;
    }
    
    // Créer l'objet de build
    const buildData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        champion: {
            id: state.selectedChampion.id,
            name: state.selectedChampion.name
        },
        level: state.championLevel,
        items: {
            slot1: state.build.slot1 ? { id: state.build.slot1.id, name: state.build.slot1.name } : null,
            slot2: state.build.slot2 ? { id: state.build.slot2.id, name: state.build.slot2.name } : null,
            slot3: state.build.slot3 ? { id: state.build.slot3.id, name: state.build.slot3.name } : null,
            slot4: state.build.slot4 ? { id: state.build.slot4.id, name: state.build.slot4.name } : null,
            slot5: state.build.slot5 ? { id: state.build.slot5.id, name: state.build.slot5.name } : null,
            boots: state.build.boots ? { id: state.build.boots.id, name: state.build.boots.name } : null
        },
        runes: {
            primaryTree: state.primaryTree,
            secondaryTree: state.secondaryTree,
            keystone: state.selectedRunes.keystone,
            primary: state.selectedRunes.primary,
            secondary: state.selectedRunes.secondary
        },
        shards: state.selectedShards
    };
    
    // Créer le fichier JSON
    const jsonString = JSON.stringify(buildData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Créer le nom du fichier
    const champName = state.selectedChampion.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const date = new Date().toISOString().slice(0, 10);
    const filename = `build_${champName}_${date}.json`;
    
    // Télécharger le fichier
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('Build exporté avec succès !', 'info');
}

// Importer un build depuis un fichier JSON
function importBuildFromJSON(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const buildData = JSON.parse(e.target.result);
            
            // Valider le format
            if (!buildData.version || !buildData.champion) {
                throw new Error('Format de fichier invalide');
            }
            
            // Restaurer le champion
            const champion = CHAMPIONS_DATA.find(c => c.id === buildData.champion.id);
            if (champion) {
                state.selectedChampion = champion;
            } else {
                showNotification(`Champion "${buildData.champion.name}" non trouvé`, 'warning');
            }
            
            // Restaurer le niveau
            if (buildData.level >= 1 && buildData.level <= 18) {
                state.championLevel = buildData.level;
                elements.levelSlider.value = buildData.level;
                elements.levelValue.textContent = buildData.level;
            }
            
            // Restaurer les items
            state.build = {};
            if (buildData.items) {
                ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'boots'].forEach(slot => {
                    if (buildData.items[slot] && buildData.items[slot].id) {
                        const item = ITEMS_DATA.find(i => i.id === buildData.items[slot].id);
                        if (item) {
                            state.build[slot] = item;
                        }
                    }
                });
            }
            
            // Restaurer les runes
            if (buildData.runes) {
                state.primaryTree = buildData.runes.primaryTree || null;
                state.secondaryTree = buildData.runes.secondaryTree || null;
                state.selectedRunes = {
                    keystone: buildData.runes.keystone || null,
                    primary: buildData.runes.primary || [null, null, null],
                    secondary: buildData.runes.secondary || [null, null]
                };
            }
            
            // Restaurer les shards
            if (buildData.shards) {
                state.selectedShards = {
                    offense: buildData.shards.offense || null,
                    flex: buildData.shards.flex || null,
                    defense: buildData.shards.defense || null
                };
            }
            
            // Mettre à jour l'affichage
            updateChampionDisplay();
            updateChampionStats();
            renderSlots();
            renderItems();
            renderPassives();
            renderTreeSelectors();
            renderPrimaryRunes();
            renderSecondaryRunes();
            renderShards();
            updateFinalStats();
            updateTotalGold();
            
            showNotification(`Build de ${buildData.champion.name} importé !`, 'info');
            
        } catch (error) {
            console.error('Erreur import:', error);
            showNotification('Erreur: fichier invalide', 'warning');
        }
    };
    
    reader.onerror = () => {
        showNotification('Erreur de lecture du fichier', 'warning');
    };
    
    reader.readAsText(file);
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
            slotEl.style.borderColor = catConfig?.color || '#c8aa6e';
            slotEl.style.boxShadow = `0 0 15px ${catConfig?.color || '#c8aa6e'}40`;
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
                <span class="passive-name">${item.passiveName || item.name}</span>
                <p class="passive-text">${item.passive}</p>
            </div>
        </div>
    `).join('');
}

// Mise à jour de l'affichage du champion
function updateChampionDisplay() {
    const champ = state.selectedChampion;
    if (!champ) return;
    
    const catConfig = CATEGORY_CONFIG[champ.role];
    
    elements.championEmoji.textContent = champ.icon;
    elements.championIcon.className = `champion-icon category-${champ.role}`;
    elements.championName.textContent = champ.name;
    elements.championRole.textContent = catConfig?.label || champ.role;
    
    elements.champStatsIcon.textContent = champ.icon;
    elements.champStatsName.textContent = champ.name;
    
    // Update abilities
    renderAbilities();
}

// Mise à jour des stats du champion
function updateChampionStats() {
    const champ = state.selectedChampion;
    if (!champ) return;
    
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
    if (!champ) return {
        hp: 0, mana: 0, ad: 0, armor: 0, mr: 0, as: 0.625, ms: 0, range: 0
    };
    
    const lvl = state.championLevel - 1;
    const base = champ.baseStats;
    
    return {
        hp: Math.round(base.hp + base.hpGrowth * lvl),
        mana: Math.round((base.mana || 0) + (base.manaGrowth || 0) * lvl),
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
    elements.finalMpen.textContent = bonusStats.magicPen || 0;
    
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
                <span class="passive-tag">PASSIF${item.passiveName ? ' - ' + item.passiveName : ''}</span>
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

// ============================================
// CHAMPION ABILITIES FUNCTIONS
// ============================================

// Rendu des compétences du champion
function renderAbilities() {
    const champ = state.selectedChampion;
    
    // Check if champion has abilities data
    if (!champ || !champ.passive || !champ.spells) {
        elements.passiveName.textContent = 'N/A';
        elements.qName.textContent = 'N/A';
        elements.wName.textContent = 'N/A';
        elements.eName.textContent = 'N/A';
        elements.rName.textContent = 'N/A';
        return;
    }
    
    // Update ability names
    elements.passiveName.textContent = champ.passive.name;
    elements.qName.textContent = champ.spells.Q.name;
    elements.wName.textContent = champ.spells.W.name;
    elements.eName.textContent = champ.spells.E.name;
    elements.rName.textContent = champ.spells.R.name;
    
    // Update icons with champion-specific icons
    const passiveIcon = elements.passiveSlot.querySelector('.ability-icon');
    const qIcon = elements.qSlot.querySelector('.ability-icon');
    const wIcon = elements.wSlot.querySelector('.ability-icon');
    const eIcon = elements.eSlot.querySelector('.ability-icon');
    const rIcon = elements.rSlot.querySelector('.ability-icon');
    
    passiveIcon.textContent = champ.passive.icon;
    qIcon.textContent = champ.spells.Q.icon;
    wIcon.textContent = champ.spells.W.icon;
    eIcon.textContent = champ.spells.E.icon;
    rIcon.textContent = champ.spells.R.icon;
}

// Setup des tooltips pour les compétences
function setupAbilityTooltips() {
    const slots = [
        { element: elements.passiveSlot, type: 'passive' },
        { element: elements.qSlot, type: 'Q' },
        { element: elements.wSlot, type: 'W' },
        { element: elements.eSlot, type: 'E' },
        { element: elements.rSlot, type: 'R' },
    ];
    
    slots.forEach(({ element, type }) => {
        element.addEventListener('mouseenter', (e) => {
            showAbilityTooltip(type, e);
        });
        
        element.addEventListener('mouseleave', () => {
            hideAbilityTooltip();
        });
        
        element.addEventListener('mousemove', (e) => {
            if (elements.tooltip.classList.contains('active')) {
                positionTooltip(e);
            }
        });
    });
}

// Afficher le tooltip d'une compétence
function showAbilityTooltip(type, event) {
    const champ = state.selectedChampion;
    
    if (!champ || !champ.passive || !champ.spells) return;
    
    let ability, keyLabel, iconClass;
    
    if (type === 'passive') {
        ability = champ.passive;
        keyLabel = 'PASSIF';
        iconClass = 'passive';
    } else {
        ability = champ.spells[type];
        keyLabel = type;
        iconClass = type === 'R' ? 'ultimate' : '';
    }
    
    if (!ability) return;
    
    // Build stats HTML
    let statsHtml = '';
    
    if (type === 'passive') {
        statsHtml = `
            <div class="ability-stat-row">
                <span class="ability-stat-label">Cooldown</span>
                <span class="ability-stat-value cooldown">${ability.cooldown || 'Passif'}</span>
            </div>
        `;
    } else {
        statsHtml = `
            <div class="ability-stat-row">
                <span class="ability-stat-label">Cooldown</span>
                <span class="ability-stat-value cooldown">${ability.cooldown || 'N/A'}</span>
            </div>
            <div class="ability-stat-row">
                <span class="ability-stat-label">Coût</span>
                <span class="ability-stat-value cost">${ability.cost || 'Aucun'}</span>
            </div>
            <div class="ability-stat-row">
                <span class="ability-stat-label">Dégâts</span>
                <span class="ability-stat-value damage">${ability.damage || 'Aucun'}</span>
            </div>
        `;
    }
    
    // Damage type badge
    let damageTypeBadge = '';
    if (ability.damageType && ability.damageType !== 'passive') {
        const typeLabels = {
            physical: 'Physique',
            magic: 'Magique',
            true: 'Vrais',
            utility: 'Utilitaire',
            buff: 'Buff',
            defensive: 'Défensif'
        };
        damageTypeBadge = `<span class="ability-damage-type ${ability.damageType}">${typeLabels[ability.damageType] || ability.damageType}</span>`;
    }
    
    elements.tooltip.innerHTML = `
        <div class="ability-tooltip-header">
            <div class="ability-tooltip-icon ${iconClass}">${ability.icon}</div>
            <div class="ability-tooltip-title">
                <span class="ability-tooltip-name">${ability.name}</span>
                <span class="ability-tooltip-key">${keyLabel}</span>
            </div>
        </div>
        <p class="ability-tooltip-desc">${ability.description}</p>
        <div class="ability-tooltip-stats">
            ${statsHtml}
        </div>
        ${damageTypeBadge}
    `;
    
    elements.tooltip.style.borderColor = getAbilityBorderColor(type, ability.damageType);
    positionTooltip(event);
    elements.tooltip.classList.add('active');
}

// Obtenir la couleur de bordure selon le type de compétence
function getAbilityBorderColor(keyType, damageType) {
    if (keyType === 'passive') return '#6b4c9a';
    if (keyType === 'R') return '#ffd700';
    
    const colors = {
        physical: '#ef4444',
        magic: '#8b5cf6',
        true: '#eab308',
        utility: '#22c55e',
        buff: '#06b6d4',
        defensive: '#64748b'
    };
    
    return colors[damageType] || '#c8aa6e';
}

// Positionner le tooltip
function positionTooltip(event) {
    const tooltipWidth = 300;
    const tooltipHeight = elements.tooltip.offsetHeight || 200;
    
    let x = event.clientX + 15;
    let y = event.clientY + 15;
    
    // Adjust if tooltip goes off screen
    if (x + tooltipWidth > window.innerWidth) {
        x = event.clientX - tooltipWidth - 15;
    }
    if (y + tooltipHeight > window.innerHeight) {
        y = window.innerHeight - tooltipHeight - 10;
    }
    
    elements.tooltip.style.left = x + 'px';
    elements.tooltip.style.top = y + 'px';
}

// Cacher le tooltip de compétence
function hideAbilityTooltip() {
    elements.tooltip.classList.remove('active');
}

// Lancer l'application
document.addEventListener('DOMContentLoaded', init);
