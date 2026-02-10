async function loadDB() {
    const panels = document.querySelector('.boxes');

    try {
        const response = await fetch('./db/db.archivepedia');
        if (!response.ok) throw new Error("Failed to fetch DB file");

        const text = await response.text();

        const lines = text.split('\n').filter(line => line.trim().length > 0);

        for (const line of lines) {
            const matches = line.match(/"([^"]*)"/g);
            if (matches && matches.length === 4) {
                const [img, title, desc, url] = matches.map(s => s.replace(/"/g, ''));
                const box = createBox(img, title, desc, url);
                panels.append(box);
            } else {
                console.warn("Invalid DB row format:", line);
            }
        }
    } catch (err) {
        console.error("Error loading DB:", err);
    }
}
