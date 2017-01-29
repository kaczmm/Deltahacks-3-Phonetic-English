var elements = document.getElementsByTagName('*');

// List of English words and their PE translations (DEMO ONLY)
var trans = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'haVe', 'i', 'it',
 'foR', 'not', 'on', 'With', 'he', 'aS', 'You', 'do', 'at', 'thiS', 'but', 'hiS',
 'bY', 'fRoM', 'theY', 'We', 'SaY', 'heR', 'She', 'oR', 'an', 'WiLL', 'MY', 'one',
 'aLL', 'WouLd', 'theRe', 'theiR', 'What', 'So', 'uP', 'out', 'if', 'about', 'Who',
 'Get', 'Which', 'Go', 'Me', 'When', 'MaKe', 'can', 'LiKe', 'tiMe', 'no', 'JuSt',
 'hiM', 'KnoW', 'taKe', 'PeoPLe', 'into', 'YeaR', 'YouR', 'Good', 'SoMe', 'couLd',
 'theM', 'See', 'otheR', 'than', 'then', 'noW', 'LooK', 'onLY', 'coMe', 'itS',
 'oVeR', 'thinK', 'aLSo', 'bacK', 'afteR', 'uSe', 'tWo', 'hoW', 'ouR', 'WoRK',
 'fiRSt', 'WeLL', 'WaY', 'eVen', 'neW', 'Want', 'becauSe', 'anY', 'theSe', 'GiVe',
 'daY', 'MoSt', 'uS', 'Ði', 'BI', 'Tu', 'uV', 'aND', 'A', 'iN', 'ÐaT', 'HaV', 'I',
 'iT', 'FOR', 'NoT', 'oN', 'WiÐ', 'HI', 'az', 'Yu', 'Du', 'aT', 'ÐiS', 'BuT', 'Hiz',
 'BI', 'FRuM', 'ÐA', 'WI', 'SA', 'HeR', 'ʃE', 'OR', 'aN', 'WiL', 'MI', 'WuN', 'OL',
 'WФD', 'ÐeR', 'ÐeR', 'WuT', 'SO', 'uP', 'aФT', 'iF', 'aBaФT', 'Hu', 'GeT', 'WiЧ',
 'GO', 'MI', 'WeN', 'MAK', 'KaN', 'LIK', 'TIM', 'NO', 'JuST', 'HiM', 'NO', 'TAK',
 'PIPaL', 'iNTu', 'YiR', 'YФaR', 'GФD', 'SuM', 'KФD', 'ÐeM', 'SI', 'uÐaR', 'ÐaN',
 'ÐeN', 'NaФ', 'LФK', 'ONLI', 'KuM', 'iTS', 'OVaR', 'θiNK', 'aLSO', 'BaK', 'aFTaR',
 'Yuz', 'Tu', 'HaФ', 'aФaR', 'WeRK', 'FeRST', 'WeL', 'WA', 'IViN', 'Nu', 'WoNT',
 'BiKOz', 'eNI', 'ÐIz', 'GiV', 'DA', 'MOST', 'uS'];

// List of non-letter characters
var invalids = ['`', '!', '1', '@', '2', '#', '3', '$', '4', '%', '5', '^', '6', '&',
 '7', '*', '8', '(', '9', ')', '0', '_', '-', '+', '=', '{', '[', '}', ']', ':', ';',
 '"', "'", '|', '\'', '<', ',', '>', '.', '?', '/'];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var newText = text.toLowerCase(); // text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');
            
            for (var w = 0; w < parseInt(trans.length/2); w++) {
                replaceText = trans[w].toLowerCase();
                overrideText = trans[w + parseInt(trans.length/2)];
                var regex = new RegExp('\\b' + replaceText + '\\b', "g")
                newText = newText.replace(regex, overrideText);
            }

            if (newText !== text) {
                element.replaceChild(document.createTextNode(newText), node);
            }
        }
    }
}