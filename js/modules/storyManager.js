// Story Management Module
const storyManager = {
    renderStories() {
        const container = document.getElementById('stories-container');
        const stories = dataStore.userStories;

        if (stories.length === 0) {
            container.innerHTML = this._getEmptyStateHTML();
            return;
        }

        container.innerHTML = stories.map(story => this.renderStoryCard(story)).join('');
    },

    renderStoryCard(story) {
        // Story card rendering logic...
    },

    getPriorityColor(priority) {
        const colors = {
            critical: '#dc3545',
            high: '#fd7e14',
            medium: '#ffc107',
            low: '#28a745'
        };
        return colors[priority] || '#6c757d';
    },

    editStory(id) {
        // Edit story logic...
    },

    deleteStory(id) {
        // Delete story logic...
    },

    clearAllStories() {
        // Clear all stories logic...
    },

    _getEmptyStateHTML() {
        return `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"/>
                </svg>
                <h3>No user stories yet</h3>
                <p>Create your first user story in the "Create Stories" tab</p>
            </div>
        `;
    }
};
