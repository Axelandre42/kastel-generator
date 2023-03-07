let onsets = {
    units: [
        "t",
        "d",
        "k",
        "g",
        "n",
        "ɲ",
        "ŋ",
        "θ",
        "ð",
        "s",
        "z",
        "ʃ",
        "ʒ",
        "χ",
        "ʁ",
        "h",
        "l",
        "j",
        "w",
    ],
    clusters: [
        "ts",
        "tʃ",
        "tj",
        "tχ",
        "tʁ",
        "dz",
        "dʒ",
        "dʁ",
        "dj",
        "kt",
        "ks",
        "kʁ",
        "kl",
        "kj",
        "kʃ",
        "gz",
        "gʒ",
        "gl",
        "gj",
        "gʁ",
        "st",
        "sk",
        "sl",
        "sj",
        "sʁ",
        "zd",
        "zg",
        "zl",
        "zj",
        "zʁ",
        "ʃt",
        "ʃk",
        "ʃj",
        "ʃʁ",
        "ʒl",
        "ʒj",
        "ʒʁ",
        "ʁj",
        "lj",
    ],
};

let codas = {
    units: [
        "t",
        "d",
        "k",
        "g",
        "n",
        "ɲ",
        "ŋ",
        "θ",
        "ð",
        "s",
        "z",
        "ʃ",
        "ʒ",
        "χ",
        "ʁ",
        "l",
        "j",
        "w",
    ],
    clusters: [
        "ts",
        "tʃ",
        "jt",
        "tχ",
        "ʁt",
        "dz",
        "dʒ",
        "dʁ",
        "kd",
        "kt",
        "ks",
        "ʁk",
        "lk",
        "jk",
        "kʃ",
        "gz",
        "gʒ",
        "lg",
        "jg",
        "ʁg",
        "st",
        "sk",
        "ls",
        "js",
        "ʁs",
        "zd",
        "zg",
        "lz",
        "jz",
        "ʁz",
        "ʃt",
        "ʃk",
        "jʃ",
        "ʁʃ",
        "lʒ",
        "jʒ",
        "ʁʒ",
    ],
};

let vowels = ["y", "i", "ɛ", "yː", "iː", "ɛː"];
/**
 *
 * @param {string} structure
 */

export default function syl(structure) {
    let onset = "";
    let coda = "";
    let nucleus = "";
    let units = structure.split("V");

    if (units[0]) {
        if (units[0] === "C") {
            onset = onsets.units[Math.floor(Math.random() * onsets.units.length)];
        } else if (units[0] === "CC") {
            onset =
                onsets.clusters[Math.floor(Math.random() * onsets.clusters.length)];
        }
    }

    if (units[1]) {
        if (units[1] === "C") {
            coda = codas.units[Math.floor(Math.random() * codas.units.length)];
        } else if (units[1] === "CC") {
            coda = codas.clusters[Math.floor(Math.random() * codas.clusters.length)];
        }
    }

    nucleus = vowels[Math.floor(Math.random() * vowels.length)];

    return onset + nucleus + coda;
}
