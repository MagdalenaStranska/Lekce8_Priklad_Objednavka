// Objednavka
// Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

// 1. Založte HTML stránku s jedním tlačítkem
// <button id="button-order">Objednat</button>
// 2. Doplňte do stránky JavaScriptový program, který zařídí, že po stisknutí tlačítka se do stránky za tlačítko vypíše odstavec:
// <p>Objednáno</p>
// 3. Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.

const btn = document.querySelector('#button-order')
console.log(btn)

const msg = document.querySelector('#message')
console.log(msg)

// const msg1 = document.querySelectorAll('p')
// console.log(msg1) /jen pro ukazku jak vypsat vsechny stejne prvky

// btn.addEventListener("click", () => {
//     msg.textContent = 'Objednáno'
// })

btn.addEventListener('click', () => {
    btn.textContent = 'Objednáno'
})


// Kontrola dosupnosti
// Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

// 1. Zařiďte úpravou přímo v HTML souboru, aby při načtení stránky tlačítko obsahovalo zprávu Kontroluji dostupnost…
// 2. Přidejte do stránky zpoždění pomocí funkce setTimeout, která zařídí, že 8 vteřin po načtení stránky se zpráva na tlačítku změní na Objednat.
// 3. Tlačítka mají speciální HTML atribut s názvem disabled. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné/neklikatelné. Až po uplynutí časovače jej zpřístupněte nastavením vlastnosti disabled v JavaScriptu na false.

setTimeout(() => {
    btn.textContent = 'Objednat'
    btn.disabled = false
}, 8000)


