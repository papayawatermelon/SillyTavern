// Ban bracket generation, plus defaults
const badWordsList = [
    [3], [49356], [1431], [31715], [34387], [20765], [30702], [10691], [49333], [1266], 
    [19438], [43145], [26523], [41471], [2936], [85, 85], [49332], [7286], [1115]
]

const hypeBotBadWordsList = [
    [58], [60], [90], [92], [685], [1391], [1782], [2361], [3693], [4083], [4357], [4895],
    [5512], [5974], [7131], [8183], [8351], [8762], [8964], [8973], [9063], [11208],
    [11709], [11907], [11919], [12878], [12962], [13018], [13412], [14631], [14692],
    [14980], [15090], [15437], [16151], [16410], [16589], [17241], [17414], [17635],
    [17816], [17912], [18083], [18161], [18477], [19629], [19779], [19953], [20520],
    [20598], [20662], [20740], [21476], [21737], [22133], [22241], [22345], [22935],
    [23330], [23785], [23834], [23884], [25295], [25597], [25719], [25787], [25915],
    [26076], [26358], [26398], [26894], [26933], [27007], [27422], [28013], [29164],
    [29225], [29342], [29565], [29795], [30072], [30109], [30138], [30866], [31161],
    [31478], [32092], [32239], [32509], [33116], [33250], [33761], [34171], [34758],
    [34949], [35944], [36338], [36463], [36563], [36786], [36796], [36937], [37250],
    [37913], [37981], [38165], [38362], [38381], [38430], [38892], [39850], [39893],
    [41832], [41888], [42535], [42669], [42785], [42924], [43839], [44438], [44587],
    [44926], [45144], [45297], [46110], [46570], [46581], [46956], [47175], [47182],
    [47527], [47715], [48600], [48683], [48688], [48874], [48999], [49074], [49082],
    [49146], [49946], [10221], [4841], [1427], [2602, 834], [29343], [37405], [35780], [2602], [50256]
];

// Used for phrase repetition penalty
const repPenaltyAllowList = [
    [49256, 49264, 49231, 49230, 49287, 85, 49255, 49399, 49262, 336, 333, 432, 363, 468, 492, 745, 401, 426, 623, 794,
        1096, 2919, 2072, 7379, 1259, 2110, 620, 526, 487, 16562, 603, 805, 761, 2681, 942, 8917, 653, 3513, 506, 5301,
        562, 5010, 614, 10942, 539, 2976, 462, 5189, 567, 2032, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 588,
        803, 1040, 49209, 4, 5, 6, 7, 8, 9, 10, 11, 12]
]

// Ban the dinkus and asterism
const logitBiasExp = [
    { "sequence": [23], "bias": -0.08, "ensure_sequence_finish": false, "generate_once": false },
    { "sequence": [21], "bias": -0.08, "ensure_sequence_finish": false, "generate_once": false }
]

const hypeBotLogitBiasExp = [
    { "sequence": [8162], "bias": -0.12, "ensure_sequence_finish": false, "generate_once": false},
    { "sequence": [46256, 224], "bias": -0.12, "ensure_sequence_finish": false, "generate_once": false }
];

function getBadWordsList(model) {
    let list = []

    if (model.includes('hypebot')) {
        list = hypeBotBadWordsList;
    }

    if (model.includes('clio') || model.includes('kayra')) {
        list = badWordsList;
    }

    // Clone the list so we don't modify the original
    return list.slice();
}

module.exports = {
    badWordsList,
    repPenaltyAllowList,
    logitBiasExp,
    hypeBotBadWordsList,
    hypeBotLogitBiasExp,
    getBadWordsList,
};
