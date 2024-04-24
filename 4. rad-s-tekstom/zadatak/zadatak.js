var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu.
var textLength = text.length;
console.log(textLength);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.
var rijec = "sit";
console.log(rijec);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.
console.log(text.replace("amet", "elit"));

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaj = text + ", consectetur adipiscing elit";
console.log(dodaj);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
console.log(text.toUpperCase());

// 6. Maknite počenu prazninu u stringu
var noSpaces = text.trim();
console.log(noSpaces);

// 7. Nađite slovo na poziciji 12
console.log(text.charAt(11));
