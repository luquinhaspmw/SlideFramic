const tbody = document.querySelector(".tbody")

const cores = {
    "alp": "#f0f8ff",
    "aqw": "#00ffff",
    "aqm": "#7fffd4",
    "azr": "#f0ffff",
    "bege": "#f5f5dc",
    "bsq": "#ffe4c4",
    "blc": "#000",
    "bal": "#ffebcd",
    "azu": "#00f",
    "bvt": "#8a2be2",
    "brw": "#a52a2a",
    "bly": "#deb887",
    "cbl": "#5f9ea0",
    "cht": "#7fff00",
    "cho": "#d2691e",
    "crl": "#ff7f50",
    "cfb": "#6495ed",
    "cyn": "#0ff",
    "dkc": "#00008b",
    "dgn": "#008b8b",
    "gry": "#808080",
    "grn": "#008000",
    "gld": "#ffd700",
    "dkg": "#a9a9a9",
    "grg": "#adff2f",
    "ivry": "#fffff0",
    "khk": "#bdb76b",
    "lav": "#e6e6fa",
    "lvs": "#fff0f5",
    "lme": "#faf0e6",
    "lwg": "#90ee90",
    "lbn": "#add8e6",
    "lvp": "#d3d3d3",
    "mgn": "#ff00ff",
    "mro": "#800000",
    "mdv": "#c71585",
    "nvy": "#000080",
    "olv": "#808000",
    "org": "#ffa500",
    "orn": "#ff4500",
    "plm": "#da70d6",
    "pdm": "#9370db",
    "pkn": "#ffc0cb",
    "pnk": "#ff69b4",
    "plp": "#dda0dd",
    "rd": "#f00",
    "ros": "#bc8f8f",
    "rpl": "#800080",
    "red": "#f00",
    "rbr": "#8b0000",
    "slm": "#20b2aa",
    "sil": "#c0c0c0",
    "sky": "#87ceeb",
    "sno": "#fffafa",
    "spr": "#00ff7f",
    "tan": "#d2b48c",
    "teal": "#008080",
    "tom": "#ff6347",
    "tur": "#40e0d0",
    "vlt": "#ee82ee",
    "wht": "#fff",
    "ylw": "#ff0"
  };

const createRow  = (classe)=>{
    const row = document.createElement("tr");
    const tdClass = document.createElement("td");
    tdClass.innerText = `${classe}`
    const tdCor = document.createElement("td");
    tdCor.classList.add(`bg-${classe}`)

    row.appendChild(tdClass)
    row.appendChild(tdCor)
    tbody.appendChild(row)
}

let keys = Object.keys(cores);
for(let k=0;k<keys.length;k++){
    let key = keys[k];
    createRow(key)
}

