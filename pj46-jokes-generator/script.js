const newJokeBtn = document.querySelector(".new-joke-btn");
const jokeTextEl = document.querySelector(".joke");
const loaderEl = document.querySelector(".loader");

const apiKey = "un5G0YvZy0zl+f27eqgdXg==CM6P5pSTBjP4cKaG";
const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

const options = {
        method: "GET",
        headers: {
                "X-Api-Key": apiKey
        }
}

const getNewJoke = async () => {
        try {
                loaderEl.style.display = "block";
                jokeTextEl.innerText = "";

                const result = await fetch(apiUrl, options).then(resp => resp.json());

                jokeTextEl.innerText = result[0].joke;
                loaderEl.style.display = "none";
        } catch (error) {
                newJokeBtn.innerText = "Error! Please try again later."
                newJokeBtn.classList.add("error");
        }

};

getNewJoke();

newJokeBtn.addEventListener("click", getNewJoke);