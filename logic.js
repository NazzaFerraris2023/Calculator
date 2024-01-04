// llamado de div del html:
const docsContainer = document.getElementById("document-container");
// creando los elementos dinamicos:
const mainContainer = document.createElement("main");
docsContainer.append(mainContainer);

const calculatorTitle = document.createElement("h1");
calculatorTitle.classList.add("titulo-calculadora");
calculatorTitle.innerText = "Calculadora";
mainContainer.append(calculatorTitle);

const seccionCalculadora = document.createElement("section");
docsContainer.append(seccionCalculadora);

const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("contenedor-calculadora");
seccionCalculadora.append(calculatorContainer);

const display = document.createElement("div");
display.classList.add("display");
calculatorContainer.append(display);

const displayElement = document.createElement("p");
displayElement.classList.add("display-element");
displayElement.innerText = "0";
display.append(displayElement);

const contenedorBtnsClear = document.createElement("div");
contenedorBtnsClear.classList.add("contenedor-btn-clear");
calculatorContainer.append(contenedorBtnsClear);

const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-btn");
clearBtn.innerText = "clear";
contenedorBtnsClear.append(clearBtn);

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete-btn");
deleteBtn.innerText = "delete";
contenedorBtnsClear.append(deleteBtn);

const keyContainer = document.createElement("div");
keyContainer.classList.add("key-container");
calculatorContainer.append(keyContainer);

const deleteBTN = [];
deleteBTN.push(clearBtn, deleteBtn);
console.log(deleteBTN);

const keyNumbers = [];

for (let i = 0; i < 16; i++) {
    const keys = document.createElement("button");
    keys.classList.add("key-number");
    keys.innerText = i;
    keyContainer.append(keys);

    if (keys.textContent == 3) {
        keys.innerText = "/";
    } else if (keys.textContent == 7) {
        keys.innerText = "*";
    } else if (keys.textContent == 11) {
        keys.innerText = "-";
    } else if (keys.textContent == 15) {
        keys.innerText = "+";
    } else if (keys.textContent == 0) {
        keys.innerText = "7";
    } else if (keys.textContent == 1) {
        keys.innerText = "8";
    } else if (keys.textContent == 2) {
        keys.innerText = "9";
    } else if (keys.textContent == 8) {
        keys.innerText = "1";
    } else if (keys.textContent == 9) {
        keys.innerText = "2";
    } else if (keys.textContent == 10) {
        keys.innerText = "3";
    } else if (keys.textContent == 12) {
        keys.innerText = ".";
    } else if (keys.textContent == 13) {
        keys.innerText = 0;
    } else if (keys.textContent == 14) {
        keys.innerText = "=";
        keys.setAttribute("id", "igual");
    }

    keyNumbers.push(keys);
}

// LOGICA:

// evento del array de los botones para borrar contenido

deleteBTN.forEach((btn) => {
    btn.addEventListener("click", () => {
        let botonApretado = btn.textContent;

        // boton deleate

        if (botonApretado === deleteBtn.textContent) {
            if (display.textContent.length === 1) {
                display.textContent = "0";
                return;
            } else {
                display.textContent = display.textContent.slice(0, -1);
                return;
            }
        }

        // boton clear
        if (botonApretado === clearBtn.textContent) {
            display.textContent = "0";
            return;
        }
        // teclas numericas

        if (display.textContent === "0") {
            display.textContent = botonApretado;
        } else {
            display.textContent += botonApretado;
        }
    });
});

// evento del array de las teclas numericas

keyNumbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        let botonApretado = btn.textContent;

        // condicional de las teclas numericas
        if (display.textContent === "0") {
            display.textContent = botonApretado;
        } else {
            display.textContent += botonApretado;
        }

        if (btn.id === "igual") {
            try {
                let expression = display.textContent.replace(/=/g, "");
                display.textContent = eval(expression);
            } catch (error) {
                console.error("Invalid expression:", display.textContent);
                display.textContent = "Error!";
            }
            return;
        }
    });
});
