// Application Initialization
const app = {
    init() {
        // Initialize all modules in correct order
        tabManager.init();
        processManager.init();
        storyManager.renderStories();
        
        this._bindGlobalEvents();
        
        console.log('User Story Tool initialized successfully');
    },

    _bindGlobalEvents() {
        // Add enter key listener for main input
        document.getElementById('input-text').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                storyGenerator.createStory();
            }
        });
    }
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', app.init);
