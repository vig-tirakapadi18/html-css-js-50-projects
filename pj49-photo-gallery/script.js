const btn = document.getElementById("btn");
const photosContainerEl = document.getElementById("photos-container");
const loaderEl = document.getElementById("loader");

const fetchPhotos = async () => {
        const inputVal = document.getElementById("count-input").value;
        const errorMessageEl = document.getElementById("error-msg");
        let photos = "";

        if (inputVal < 1 || inputVal > 10) {
                errorMessageEl.style.display = "block";
                return;
        }

        try {
                loaderEl.style.display = "block";
                photosContainerEl.style.display = "none";
                const apiKey = "loWwhHQp0zlilfgEhDC0u7Yu-5GfAZfPvjQE2kr5v9g";
                const apiUrl = `https://api.unsplash.com/photos?per_page=${inputVal}&page=${Math.round(Math.random() * 1000)}&client_id=${apiKey}`;

                const result = await fetch(apiUrl).then(resp => resp.json());

                result.forEach(pic => {
                        photos += `
                        <a href=${pic.urls.regular} class="img-link" target="_blank">
                                <img src=${pic.urls.regular} alt=${pic.alt_discription} />
                        </a>`;
                        photosContainerEl.innerHTML = photos;
                });

                errorMessageEl.style.display = "none";
                loaderEl.style.display = "none";
        } catch (error) {
                console.log(error.message);
                btn.classList.add("error-btn");
        }
}

btn.addEventListener("click", fetchPhotos);