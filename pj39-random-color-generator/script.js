const btn = document.getElementById('btn');
const colorContainer = document.querySelector('.color-container');
const colorDiv = document.querySelector('.color');
const colorName = document.querySelector('.color-hex');

btn.addEventListener('click', async () => {
        try {
                btn.disabled = true;
                btn.innerText = "Loading...";
                colorName.innerText = "Updating..."
                const resp = await fetch("https://x-colors.yurace.pro/api/random");
                const data = await resp.json();
                btn.disabled = false;
                btn.innerText = "Get New Color";
                colorContainer.style.display = 'block';
                colorDiv.style.backgroundColor = data.hex;
                colorName.innerText = data.hex;
                console.log(data)
        } catch (err) {
                console.log(err);
                btn.disabled = true;
                btn.innerText = "Get New Color";
                colorName.innerText = "OOPS! Try again.";
                colorName.style.backgroundColor = "#dc2626";
                colorName.style.cursor = "not-allowed";
        }
})