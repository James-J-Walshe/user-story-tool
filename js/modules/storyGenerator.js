// User Story Generator Module
const storyGenerator = {
    createStory() {
        const inputText = document.getElementById('input-text').value.trim();
        const userRole = document.getElementById('user-role').value.trim();
        const priority = document.getElementById('priority').value;

        if (!inputText) {
            alert('Please enter a requirement description.');
            return;
        }

        const story = this.generateStructuredStory(inputText, userRole, priority);
        dataStore.addStory(story);
        storyManager.renderStories();
        
        // Switch to stories tab
        tabManager.switchTab('stories');
        
        // Clear form
        this._clearForm();
    },

    generateStructuredStory(inputText, userRole, priority) {
        const id = utils.generateId();
        const parsedStory = this.parseInputToStory(inputText, userRole);
        const improvementPrompts = this.generateImprovementPrompts(parsedStory);

        return {
            id,
            originalInput: inputText,
            userRole: parsedStory.user || userRole || 'user',
            want: parsedStory.want,
            benefit: parsedStory.benefit,
            priority,
            createdAt: new Date().toISOString(),
            improvementPrompts,
            isComplete: false
        };
    },

    parseInputToStory(inputText, defaultRole) {
        // Parsing logic here...
    },

    generateImprovementPrompts(story) {
        // Improvement prompts logic here...
    },

    _clearForm() {
        document.getElementById('input-text').value = '';
        document.getElementById('user-role').value = '';
        document.getElementById('priority').value = 'medium';
    }
};
