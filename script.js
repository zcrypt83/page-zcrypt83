document.addEventListener('DOMContentLoaded', () => {
    const devBtn = document.getElementById('devBtn');
    const cyberBtn = document.getElementById('cyberBtn');
    const profileContainer = document.getElementById('profileContainer');

    /**
     * Basic Markdown to HTML converter.
     * Handles:
     * - Headings (#, ##, ###)
     * - Unordered lists (* or -)
     * - Links ([text](url))
     * - Bold text (**text**)
     * - Italic text (*text* or _text_)
     * - Paragraphs (separated by blank lines)
     * @param {string} markdownText - The Markdown text to convert.
     * @returns {string} - The HTML representation.
     */
    function basicMarkdownToHtml(markdownText) {
        if (!markdownText) return '';

        let html = markdownText
            // Handle Headings (e.g., # Title, ## Subtitle)
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')

            // Handle Unordered Lists (lines starting with * or -)
            // Process lists line by line to group them correctly
            .split('\n').map(line => {
                if (line.match(/^(\*|-) (.*)/)) {
                    return `<li>${line.substring(2)}</li>`;
                }
                return line; // Return non-list lines as they are for now
            })
            .join('\n') // Re-join lines to process paragraphs next

            // Wrap list items in <ul> tags. This is a simplified approach.
            // A more robust parser would group consecutive <li> items.
            .replace(/<li>.*<\/li>/g, match => `<ul>${match}</ul>`) // Wrap single lines for now
            // Attempt to group multiple <li> under one <ul>
            // This regex finds blocks of <li> and wraps them.
            // It might need refinement for complex cases.
            .replace(/(<ul><li>.*?<\/li><\/ul>\s*)+/g, (match) => {
                const items = match.match(/<li>.*?<\/li>/g).join('');
                return `<ul>${items}</ul>`;
            })


            // Handle Links: [text](url)
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')

            // Handle Bold text: **text**
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

            // Handle Italic text: *text* or _text_ (ensure not to conflict with lists)
            // Using a more specific regex for italics to avoid list item markers
            .replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, '<em>$1</em>') // Single asterisks for italics
            .replace(/_(.+?)_/g, '<em>$1</em>') // Underscores for italics


            // Handle Paragraphs (split by one or more newlines, then wrap non-empty lines)
            // Filter out empty strings that might result from multiple newlines
            .split(/\n\s*\n/) // Split by blank lines
            .map(paragraph => {
                paragraph = paragraph.trim();
                if (paragraph.length === 0) return '';
                // Avoid wrapping existing HTML tags (like <ul> or <h1>) in <p> tags
                if (paragraph.startsWith('<h') || paragraph.startsWith('<ul')) {
                    return paragraph;
                }
                return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`; // Convert single newlines within a paragraph to <br>
            })
            .join('');

        return html;
    }

    /**
     * Fetches a profile from the given path and displays it in the profileContainer.
     * @param {string} profilePath - The path to the Markdown profile file.
     */
    async function fetchAndDisplayProfile(profilePath) {
        if (!profileContainer) {
            console.error('Error: profileContainer element not found.');
            return;
        }
        profileContainer.innerHTML = '<p>Loading profile...</p>'; // Show loading message

        try {
            const response = await fetch(profilePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}. Could not fetch '${profilePath}'.`);
            }
            const markdownText = await response.text();
            const htmlContent = basicMarkdownToHtml(markdownText);
            profileContainer.innerHTML = htmlContent;
        } catch (error) {
            console.error('Error fetching or parsing profile:', error);
            profileContainer.innerHTML = `<p style="color: red;">Error loading profile: ${error.message}</p>`;
        }
    }

    // Add event listeners to the buttons
    if (devBtn) {
        devBtn.addEventListener('click', () => fetchAndDisplayProfile('developer_profile.md'));
    } else {
        console.error('Developer profile button (devBtn) not found.');
    }

    if (cyberBtn) {
        cyberBtn.addEventListener('click', () => fetchAndDisplayProfile('cybersecurity_profile.md'));
    } else {
        console.error('Cybersecurity profile button (cyberBtn) not found.');
    }

    // Optionally, load the developer profile by default when the page loads
    if (devBtn) { // Ensure devBtn exists before trying to load default
        fetchAndDisplayProfile('developer_profile.md');
    }
});
