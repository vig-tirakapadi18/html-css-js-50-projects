const formEl = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const loadMoreBtn = document.getElementById("more-btn");
const imagesContainerEl = document.getElementById("imgs-container");
const imageItemEl = document.querySelector(".img-item");
const loaderEl = document.querySelector(".loader");

let inputData = "";
let page = 1;

const searchImages = async () => {
        inputData = searchInput.value;
        const apiKey = "XphPCmsIvcDTSUiX6aKJ87PrH6cfKrJ8SEfPL2uKf7E";
        const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        // loaderEl.style.display = "block";

        if (page === 1) {
                imagesContainerEl.innerHTML = "";
                loadMoreBtn.style.display = "none";
        }

        const results = data.results;

        console.log(results)
        results.map(result => {
                const imgsWrapper = document.createElement("div");
                imgsWrapper.classList.add("img-item");
                const img = document.createElement("img");
                img.src = result.urls.small;
                img.alt = result.alt_description;
                img.classList.add("img");
                const imgLink = document.createElement("a");
                imgLink.href = result.urls.full;
                imgLink.target = "_blank";
                imgLink.innerText = result.alt_description;

                const breakTag = document.createElement("br");

                imgsWrapper.appendChild(img);
                imgsWrapper.appendChild(breakTag);
                imgsWrapper.appendChild(imgLink);
                imagesContainerEl.appendChild(imgsWrapper);
        })

        page++;

        if (page > 1) {
                loadMoreBtn.style.display = "block";
                loadMoreBtn.style.textAlign = "center";
        }
};

formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        imagesContainerEl.innerHTML = "";
        searchImages();
});

loadMoreBtn.addEventListener("click", () => {
        searchImages();
});