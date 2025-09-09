// Utility Module
const utils = {
    generateId() {
        return CONFIG.ID_PREFIX + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    formatDate(date) {
        return new Date(date).toLocaleDateString();
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};
