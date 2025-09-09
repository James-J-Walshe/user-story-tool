// Data Storage Module
const dataStore = {
    userStories: JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USER_STORIES) || '[]'),
    processDetails: JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.PROCESS_DETAILS) || '{}'),

    saveStories() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER_STORIES, JSON.stringify(this.userStories));
    },

    saveProcessDetails() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.PROCESS_DETAILS, JSON.stringify(this.processDetails));
    },

    addStory(story) {
        this.userStories.push(story);
        this.saveStories();
    },

    updateStory(id, updates) {
        const index = this.userStories.findIndex(story => story.id === id);
        if (index !== -1) {
            this.userStories[index] = { ...this.userStories[index], ...updates };
            this.saveStories();
        }
    },

    deleteStory(id) {
        this.userStories = this.userStories.filter(story => story.id !== id);
        this.saveStories();
    },

    clearAll() {
        this.userStories = [];
        this.saveStories();
    }
};
