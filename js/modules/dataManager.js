// Data Import/Export Module
const dataManager = {
    exportData() {
        const exportData = {
            userStories: dataStore.userStories,
            processDetails: dataStore.processDetails,
            exportedAt: new Date().toISOString(),
            version: CONFIG.VERSION
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        this._downloadFile(url, `user-stories-${new Date().toISOString().split('T')[0]}.json`);
    },

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);
                this._processImportData(importData);
            } catch (error) {
                alert('Error importing file: Invalid JSON format');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
        
        // Reset file input
        event.target.value = '';
    },

    _downloadFile(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    _processImportData(importData) {
        if (confirm('This will replace all existing data. Are you sure?')) {
            if (importData.userStories) {
                dataStore.userStories = importData.userStories;
                dataStore.saveStories();
            }
            
            if (importData.processDetails) {
                dataStore.processDetails = importData.processDetails;
                dataStore.saveProcessDetails();
            }
            
            // Refresh all views
            storyManager.renderStories();
            processManager.loadProcessDetails();
            
            alert('Data imported successfully!');
        }
    }
};
