function main() {
    loadDB();
}

function createBox(img, title, desc, link) {
    const box = document.createElement('div');
    box.classList.add('box');

    const image = document.createElement('img');
    image.src = img;
    image.alt = title; 

    const titleEl = document.createElement('h2');
    titleEl.textContent = title;

    const description = document.createElement('p');
    description.textContent = desc;
    description.classList.add('box-desc');

    box.append(
        image,
        titleEl,
        description
    );

    box.addEventListener("click", () => {
        window.open(link, "_blank");
    });

    return box;
}