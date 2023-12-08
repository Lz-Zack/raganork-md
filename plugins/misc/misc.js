const ffmpeg = require("fluent-ffmpeg");
var {
  skbuffer,
  ytdlServer,
  upload
} = require("raganork-bot");
const conf = require("raganork-bot");
const axios = require("axios");
const fs = require('fs');
const googleTTS = require("google-tts-api");
const webp = require("node-webpmux");
const translate = require("@vitalets/google-translate-api");
const {
  saveMessage
} = require("./saveMessage");
const jimp = require("jimp");
const config = require("../../config");
const finco = require("raganork-bot");
const {
  DataTypes
} = require("sequelize");
const acrcloud = require("acrcloud");

config.DATABASE.sync();
const formData = require("form-data");
const malayalamToManglish = _0x3aa859 => {
  var _0x120316 = {
    'അ': 'a',
    'ആ': 'aa',
    'ഇ': 'i',
    'ഈ': 'ee',
    'ഉ': 'u',
    'ഊ': 'oo',
    'ഋ': 'ru',
    'എ': 'e',
    'ഏ': 'e',
    'ഐ': 'ai',
    'ഒ': 'o',
    'ഓ': 'o',
    'ഔ': 'au'
  };
  var _0x2c5494 = {
    'ക്ക': 'kk',
    'ഗ്ഗ': 'gg',
    'ങ്ങ': 'ng',
    'ക്ക': 'kk',
    'ച്ച': "cch",
    'ജ്ജ': 'jj',
    'ഞ്ഞ': 'nj',
    'ട്ട': 'tt',
    'ണ്ണ': 'nn',
    'ത്ത': "tth",
    'ദ്ദ': 'ddh',
    'ദ്ധ': "ddh",
    'ന്ന': 'nn',
    'ന്ത': "nth",
    'ങ്ക': 'nk',
    'ണ്ട': 'nd',
    'ബ്ബ': 'bb',
    'പ്പ': 'pp',
    'മ്മ': 'mm',
    'യ്യ': 'yy',
    'ല്ല': 'll',
    'വ്വ': 'vv',
    'ശ്ശ': 'sh',
    'സ്സ': 's',
    'ക്സ': 'ks',
    'ഞ്ച': "nch",
    'ക്ഷ': "ksh",
    'മ്പ': 'mp',
    'റ്റ': 'tt',
    'ന്റ': 'nt',
    'ന്ത': "nth",
    'ന്ത്യ': "nthy"
  };
  var _0xaf6d7e = {
    'ക': 'k',
    'ഖ': 'kh',
    'ഗ': 'g',
    'ഘ': 'gh',
    'ങ': 'ng',
    'ച': 'ch',
    'ഛ': "chh",
    'ജ': 'j',
    'ഝ': 'jh',
    'ഞ': 'nj',
    'ട': 'd',
    'ഠ': 'dh',
    'ഡ': 'd',
    'ഢ': 'dd',
    'ണ': 'n',
    'ത': 'th',
    'ഥ': 'th',
    'ദ': 'd',
    'ധ': 'dh',
    'ന': 'n',
    'പ': 'p',
    'ഫ': 'ph',
    'ബ': 'b',
    'ഭ': 'bh',
    'മ': 'm',
    'യ': 'y',
    'ര': 'r',
    'ല': 'l',
    'വ': 'v',
    'ശ': 'sh',
    'ഷ': 'sh',
    'സ': 's',
    'ഹ': 'h',
    'ള': 'l',
    'ഴ': 'zh',
    'റ': 'r'
  };
  var _0x5d7edb = {
    'ൽ': 'l',
    'ൾ': 'l',
    'ൺ': 'n',
    'ൻ': 'n',
    'ർ': 'r',
    'ൿ': 'k'
  };
  var _0x2014e2 = {
    'ു്': 'u',
    'ാ': 'aa',
    'ി': 'i',
    'ീ': 'ee',
    'ു': 'u',
    'ൂ': 'oo',
    'ൃ': 'ru',
    'െ': 'e',
    'േ': 'e',
    'ൈ': 'y',
    'ൊ': 'o',
    'ോ': 'o',
    'ൌ': 'ou',
    'ൗ': 'au',
    'ഃ': 'a'
  };
  function _0x29909b(_0x7afb54) {
    _0x7afb54 = _0x1e54fb(_0x2c5494, _0x7afb54 = _0x7afb54.replace(/[\u200B-\u200D\uFEFF]/g, ''));
    _0x7afb54 = _0x1e54fb(_0x120316, _0x7afb54);
    _0x7afb54 = _0x1e54fb(_0xaf6d7e, _0x7afb54);
    var _0x450927 = '';
    for (var _0x58a0a6 in _0x2c5494) if (_0x2c5494.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0x2c5494[_0x58a0a6];
      _0x7afb54 = (_0x7afb54 = (_0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6 + "\u0D4D([\\w])", 'g'), _0x450927 + '$1')).replace(RegExp(_0x58a0a6 + '്', 'g'), _0x450927 + 'u')).replace(RegExp(_0x58a0a6, 'g'), _0x450927 + 'a');
    }
    for (var _0x58a0a6 in _0xaf6d7e) if (_0xaf6d7e.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0xaf6d7e[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6 + "(?!\u0D4D)", 'g'), _0x450927 + 'a');
    }
    for (var _0x58a0a6 in _0xaf6d7e) if (_0xaf6d7e.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0xaf6d7e[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6 + "\u0D4D(?![\\s).;,\"'/\\%!])", 'ig'), _0x450927);
    }
    for (var _0x58a0a6 in _0xaf6d7e) if (_0xaf6d7e.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0xaf6d7e[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6 + '്', 'g'), _0x450927 + 'u');
    }
    for (var _0x58a0a6 in _0xaf6d7e) if (_0xaf6d7e.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0xaf6d7e[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6, 'g'), _0x450927);
    }
    for (var _0x58a0a6 in _0x120316) if (_0x120316.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0x120316[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6, 'g'), _0x450927);
    }
    for (var _0x58a0a6 in _0x5d7edb) if (_0x5d7edb.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0x5d7edb[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6, 'g'), _0x450927);
    }
    _0x7afb54 = _0x7afb54.replace(/ം/g, 'm');
    for (var _0x58a0a6 in _0x2014e2) if (_0x2014e2.hasOwnProperty(_0x58a0a6)) {
      _0x450927 = _0x2014e2[_0x58a0a6];
      _0x7afb54 = _0x7afb54.replace(RegExp(_0x58a0a6, 'g'), _0x450927);
    }
    return _0x7afb54 = _0x7afb54.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (_0x52047f) {
      return _0x52047f.toUpperCase();
    });
  }
  function _0x1e54fb(_0x35ca9c, _0x42373c) {
    var _0x251084 = 0x0;
    for (var _0x54751c = RegExp('(' + _0x31b29c(_0x35ca9c).join('|') + ')(' + _0x31b29c(_0x2014e2).join('|') + ')', 'g'); null != _0x251084;) {
      if (_0x251084 = _0x54751c.exec(_0x42373c)) {
        _0x42373c = _0x42373c.replace(RegExp(_0x251084[0x0], 'g'), _0x35ca9c[_0x251084[0x1]] + _0x2014e2[_0x251084[0x2]]);
      }
    }
    return _0x42373c;
  }
  function _0x31b29c(_0x4dcc30) {
    var _0xb6f7b1 = [];
    for (var _0x24fa23 in _0x4dcc30) if (_0x4dcc30.hasOwnProperty(_0x24fa23)) {
      _0xb6f7b1.push(_0x24fa23);
    }
    return _0xb6f7b1;
  }
  return _0x29909b(_0x3aa859);
};
const manglishToMalayalam = async _0x1f7498 => {
  try {
    let {
      data: _0x11848e
    } = await axios("https://inputtools.google.com/request?text=" + _0x1f7498 + "&itc=ml-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8");
    return _0x11848e[0x1][0x0][0x1][0x0] || false;
  } catch (_0x52c886) {
    console.log(_0x52c886.message);
    return false;
  }
};
async function brainshop(_0x1525c4, _0x2faa0b) {
  try {
    const _0x39aa8d = new formData();
    _0x39aa8d.append("input", _0x1525c4);
    _0x39aa8d.append("bid", "176224");
    _0x39aa8d.append("uid", _0x2faa0b);
    _0x39aa8d.append("form_build_id", "form-njl4Wq7QBeLqiqXuLbDjiCF41L7_HjWerk2SFXZFXoQ");
    _0x39aa8d.append("form_token", "xJtf4NPvnKiI4Cmz2V4exLmJ-VZHh4EG--X_1c929cc");
    _0x39aa8d.append("form_id", "aco_train_form");
    const {
      data: _0x3d9bf5
    } = await axios.post("https://brainshop.ai/system/ajax", _0x39aa8d, {
      'headers': {
        'cookie': "arrived=1687622466; acouid=f55ff5c4-cbab-42a9-bb79-aabb72195171; 36-aconavi=0; SSESSd687e4fd4ed7c750e040e0f0a43bfb3d=uygEUT0rzE_8DrwaDYUktwDCaxWySjPkuIK4K-ImIBs; Drupal.tableDrag.showWeight=0"
      }
    });
    return _0x3d9bf5[0x1].data.split("class=\"train-log-text\">")[0x2].split("</td>")[0x0].trim();
  } catch (_0x5d797f) {
    console.log(_0x5d797f);
    return "Chatbot server down!";
  }
}
const warnDB = config.DATABASE.define("warn", {
  'chat': {
    'type': DataTypes.STRING,
    'allowNull': false
  },
  'user': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
const acr = new acrcloud({
  'host': "identify-eu-west-1.acrcloud.com",
  'access_key': config.ACR_A,
  'access_secret': config.ACR_S
});
function isFake(_0x4b596c, _0x47a522) {
  var _0x5567cf = '';
  for (var _0x1277b6 in _0x47a522) {
    _0x5567cf += _0x4b596c.startsWith(_0x47a522[_0x1277b6]) + " ";
  }
  return !_0x5567cf.includes(true);
}
async function getWarn(_0x4e6bc3 = null, _0x53cb73 = null, _0x3c1030) {
  await finco.filecheck();
  var _0x56aa16 = parseInt(_0x3c1030);
  var _0x3e0b61 = {
    'chat': _0x4e6bc3,
    'user': _0x53cb73
  };
  var _0x3d9727 = await warnDB.findAll({
    'where': _0x3e0b61
  });
  if (_0x3d9727.length < 0x1) {
    return false;
  } else {
    var _0x2bc88f = _0x3d9727.length;
    var _0x526cce = _0x56aa16 - _0x2bc88f;
    if (_0x526cce < 0x1) {
      return 0x0;
    } else {
      return _0x526cce;
    }
  }
}
async function addExif(_0x2d0935, _0x44f58d) {
  if (_0x44f58d.packname || _0x44f58d.author) {
    const _0x48e6a6 = new webp.Image();
    const _0x5574c6 = {
      'sticker-pack-id': "github.com/souravkl11/raganork",
      'sticker-pack-name': _0x44f58d.packname,
      'sticker-pack-publisher': _0x44f58d.author,
      'emojis': _0x44f58d.categories ? _0x44f58d.categories : [''],
      'android-app-store-link': _0x44f58d.android ? _0x44f58d.android : '',
      'ios-app-store-link': _0x44f58d.ios ? _0x44f58d.ios : ''
    };
    const _0x6f4003 = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0xd8c33c = Buffer.from(JSON.stringify(_0x5574c6), "utf-8");
    const _0x563bb0 = Buffer.concat([_0x6f4003, _0xd8c33c]);
    _0x563bb0.writeUIntLE(_0xd8c33c.length, 0xe, 0x4);
    await _0x48e6a6.load(_0x2d0935);
    _0x48e6a6.exif = _0x563bb0;
    await _0x48e6a6.save("exif.webp");
    return "exif.webp";
  }
}
async function setWarn(_0x2b000a = null, _0x4a9d86 = null, _0x315f6b) {
  await finco.filecheck();
  await warnDB.create({
    'chat': _0x2b000a,
    'user': _0x4a9d86
  });
  return await getWarn(_0x2b000a, _0x4a9d86, _0x315f6b);
}
async function resetWarn(_0x24754b = null, _0x2c9a4e) {
  await finco.filecheck();
  var _0x556d3c = await warnDB.findAll({
    'where': {
      'chat': _0x24754b,
      'user': _0x2c9a4e
    }
  });
  if (_0x556d3c.length < 0x1) {
    return false;
  } else {
    for (var _0x5dc496 = 0x0; _0x5dc496 < _0x556d3c.length; _0x5dc496++) {
      await _0x556d3c[_0x5dc496].destroy();
    }
  }
  return true;
}
;
const FakeDB = config.DATABASE.define("fake", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntifake() {
  const _0x392655 = await FakeDB.findAll();
  return _0x392655;
}
async function setAntifake(_0x5971eb) {
  return await FakeDB.create({
    'jid': _0x5971eb
  });
}
async function delAntifake(_0x3c1a09 = null) {
  return await FakeDB.destroy({
    'where': {
      'jid': _0x3c1a09
    }
  });
}
async function resetAntifake() {
  return await FakeDB.destroy({
    'where': {},
    'truncate': true
  });
}
const antilinkDB = config.DATABASE.define("antilink", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntilink() {
  const _0x4f42d7 = await antilinkDB.findAll();
  return _0x4f42d7;
}
async function setAntilink(_0x5514a2) {
  return await antilinkDB.create({
    'jid': _0x5514a2
  });
}
async function delAntilink(_0x298c17 = null) {
  return await antilinkDB.destroy({
    'where': {
      'jid': _0x298c17
    }
  });
}
async function resetAntilink() {
  return await antilinkDB.destroy({
    'where': {},
    'truncate': true
  });
}
const antiSpamDB = config.DATABASE.define("antispam", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntiSpam() {
  const _0x49f231 = await antiSpamDB.findAll();
  return _0x49f231;
}
async function setAntiSpam(_0x3a421a) {
  return await antiSpamDB.create({
    'jid': _0x3a421a
  });
}
async function delAntiSpam(_0x4ac084 = null) {
  return await antiSpamDB.destroy({
    'where': {
      'jid': _0x4ac084
    }
  });
}
async function resetAntiSpam() {
  return await antiSpamDB.destroy({
    'where': {},
    'truncate': true
  });
}
const PDMDB = config.DATABASE.define("pdm", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getPdm() {
  const _0x325809 = await PDMDB.findAll();
  return _0x325809;
}
async function setPdm(_0x5dbcda) {
  return await PDMDB.create({
    'jid': _0x5dbcda
  });
}
async function delPdm(_0x31b786 = null) {
  return await PDMDB.destroy({
    'where': {
      'jid': _0x31b786
    }
  });
}
async function resetPdm() {
  return await PDMDB.destroy({
    'where': {},
    'truncate': true
  });
}
const antiDemote = config.DATABASE.define("antidemote", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntiDemote() {
  const _0x191838 = await antiDemote.findAll();
  return _0x191838;
}
async function setAntiDemote(_0x34350c) {
  return await antiDemote.create({
    'jid': _0x34350c
  });
}
async function delAntiDemote(_0x15f1c7 = null) {
  return await antiDemote.destroy({
    'where': {
      'jid': _0x15f1c7
    }
  });
}
async function resetAntiDemote() {
  return await antiDemote.destroy({
    'where': {},
    'truncate': true
  });
}
const antiPromote = config.DATABASE.define("antipromote", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntiPromote() {
  const _0x59ab59 = await antiPromote.findAll();
  return _0x59ab59;
}
async function setAntiPromote(_0x2ab5ad) {
  return await antiPromote.create({
    'jid': _0x2ab5ad
  });
}
async function delAntiPromote(_0x1258e0 = null) {
  return await antiPromote.destroy({
    'where': {
      'jid': _0x1258e0
    }
  });
}
async function resetAntiPromote() {
  return await antiPromote.destroy({
    'where': {},
    'truncate': true
  });
}
const antiBotDB = config.DATABASE.define("antibot", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntiBot() {
  const _0x422881 = await antiBotDB.findAll();
  return _0x422881;
}
async function setAntiBot(_0x2bd836) {
  return await antiBotDB.create({
    'jid': _0x2bd836
  });
}
async function delAntiBot(_0x27544b = null) {
  return await antiBotDB.destroy({
    'where': {
      'jid': _0x27544b
    }
  });
}
async function resetAntiBot() {
  return await antiBotDB.destroy({
    'where': {},
    'truncate': true
  });
}
const antiWordDB = config.DATABASE.define("antiword", {
  'jid': {
    'type': DataTypes.TEXT,
    'allowNull': false
  }
});
async function getAntiWord() {
  const _0x1dd9b5 = await antiWordDB.findAll();
  return _0x1dd9b5;
}
async function setAntiWord(_0x3807f3) {
  return await antiWordDB.create({
    'jid': _0x3807f3
  });
}
async function delAntiWord(_0x362e24 = null) {
  return await antiWordDB.destroy({
    'where': {
      'jid': _0x362e24
    }
  });
}
async function resetAntiWord() {
  return await antiWordDB.destroy({
    'where': {},
    'truncate': true
  });
}
function bass(_0x2c4863, _0x1afc33, _0x5f38df) {
  var _0x219761 = !_0x1afc33 ? '20' : _0x1afc33;
  ffmpeg().input(_0x2c4863).outputOptions("-af bass=g=" + _0x219761).save("bass.mp3").on("end", async () => {
    _0x5f38df(fs.readFileSync("bass.mp3"));
  });
}
function parseUptime(_0x495497) {
  var _0x1a318b = Math.floor(_0x495497 / 3600);
  var _0x3879f9 = Math.floor(_0x495497 % 3600 / 0x3c);
  var _0x495497 = Math.floor(_0x495497 % 0x3c);
  return (_0x1a318b < 0xa ? '0' : '') + _0x1a318b + " hours " + ((_0x3879f9 < 0xa ? '0' : '') + _0x3879f9) + " minutes " + ((_0x495497 < 0xa ? '0' : '') + _0x495497) + " seconds";
}
async function parseAlive(_0x5b9254, _0x42e7d7) {
  var _0xf1d3c5 = parseUptime(process.uptime()).replace("00 hours", '');
  var _0x2a2a7b = _0x42e7d7.match(/\bhttps?:\/\/\S+/gi);
  if (_0x42e7d7.includes("{quote}")) {
    try {
      var {
        text: _0x5e5d0a
      } = await getJson("https://quotes-api.vercel.app/random");
    } catch (_0x2d1bd9) {
      try {
        var {
          text: _0x5e5d0a
        } = await getJson("https://quotes-api.vercel.app/random");
      } catch (_0x5cfa77) {
        var {
          text: _0x5e5d0a
        } = await getJson("https://quotes-api.vercel.app/random");
      }
    }
  }
  if (_0x42e7d7.includes("button")) {
    var _0x1d520c = _0x42e7d7.replace(/\\/g, '');
    var _0xfe38af = _0x42e7d7.replace(/\\/g, '');
    _0xfe38af = _0xfe38af.replace(/#/g, '');
    if (_0x2a2a7b !== null) {
      _0x2a2a7b = _0x2a2a7b.filter(_0x3d8d14 => _0x3d8d14.includes("jpg") || _0x3d8d14.includes("png") || _0x3d8d14.includes("jpeg") || _0x3d8d14.includes("mp4"));
    }
    if (_0x2a2a7b !== null && _0x2a2a7b.length !== 0x0) {
      _0x1d520c = _0x1d520c.replace(_0x2a2a7b[0x0], '');
    }
    _0x1d520c = _0x1d520c.split('#');
    var _0x57a681 = _0x1d520c.filter(_0x21f0cd => _0x21f0cd.startsWith("cbutton"));
    var _0x36c0ae = _0x1d520c.filter(_0x34d204 => _0x34d204.startsWith("footer"));
    _0x36c0ae = _0x36c0ae.length !== 0x0 ? _0x36c0ae[0x0].replace("footer", '') : '';
    if (_0x36c0ae !== '') {
      _0xfe38af = _0xfe38af.replace(/url/g, '').replace("footer" + _0x36c0ae, '');
    }
    var _0x4c57a9 = _0x1d520c.filter(_0x1bd37a => _0x1bd37a.startsWith("num"));
    var _0x1e6ae0 = _0x1d520c.filter(_0x324d67 => _0x324d67.startsWith("button"));
    var _0x554bd1 = _0x1d520c.filter(_0x28e0fc => _0x28e0fc.startsWith("url"));
    var _0x425bc7 = _0x1d520c.filter(_0xf83e9a => _0xf83e9a.startsWith("ubutton"));
    var _0x177ab5 = [];
    if (_0x554bd1.length !== 0x0) {
      for (var _0x403369 = 0x0; _0x403369 < _0x554bd1.length; _0x403369++) {
        _0xfe38af = _0xfe38af.replace(_0x425bc7[_0x403369], '').replace(_0x554bd1[_0x403369].replace(/url/g, ''), '');
        if (process.env.LOGGER !== undefined) {
          console.log(_0xfe38af);
        }
        _0x177ab5.push({
          'urlButton': {
            'displayText': _0x425bc7[_0x403369].replace("ubutton", '').replace(/\\/g, ''),
            'url': _0x554bd1[_0x403369].replace(/url/g, '').replace(/\\/g, '')
          }
        });
      }
    }
    if (_0x1e6ae0.length !== 0x0) {
      for (var _0x403369 = 0x0; _0x403369 < _0x1e6ae0.length; _0x403369++) {
        _0xfe38af = _0xfe38af.replace(_0x1e6ae0[_0x403369], '');
        if (process.env.LOGGER !== undefined) {
          console.log(_0xfe38af);
        }
        _0x177ab5.push({
          'quickReplyButton': {
            'displayText': _0x1e6ae0[_0x403369].replace("button", '').replace(/\\/g, ''),
            'id': "alive" + (_0x403369 + 0x1)
          }
        });
      }
    }
    if (_0x57a681.length !== 0x0) {
      for (var _0x403369 = 0x0; _0x403369 < _0x57a681.length; _0x403369++) {
        _0xfe38af = _0xfe38af.replace(_0x57a681[_0x403369], '').replace(_0x4c57a9[_0x403369], '');
        _0x177ab5.push({
          'callButton': {
            'displayText': _0x57a681[_0x403369].replace("cbutton", '').replace(/\\/g, ''),
            'phoneNumber': _0x4c57a9[_0x403369].replace("num", '').replace(/\\/g, '')
          }
        });
      }
    }
    ;
    var _0x5ae374 = '';
    _0xfe38af = _0xfe38af.replace(/{quote}/g, _0x5e5d0a).replace(/{uptime}/g, _0xf1d3c5).replace(/{sender}/g, _0x5b9254.data.pushName).replace("{pp}", '').replace("{gif}", '');
    if (_0x2a2a7b !== null && _0x2a2a7b.length !== 0x0) {
      _0x5ae374 = _0x2a2a7b[0x0];
      _0xfe38af = _0xfe38af.replace(_0x2a2a7b[0x0], '');
    }
    if (process.env.LOGGER !== undefined) {
      console.log(_0xfe38af);
    }
    if (_0x2a2a7b !== null && _0x2a2a7b.length !== 0x0 && _0x2a2a7b[0x0].includes("mp4")) {
      var _0x2da6c0 = _0x42e7d7.includes("{gif}");
      return await _0x5b9254.sendVideoTemplate(await skbuffer(_0x5ae374), _0xfe38af, _0x36c0ae, _0x177ab5, _0x2da6c0);
    } else {
      if (_0x42e7d7.includes("{pp}")) {
        try {
          _0x5ae374 = await _0x5b9254.client.profilePictureUrl(_0x5b9254.sender, "image");
        } catch {
          _0x5ae374 = await _0x5b9254.client.profilePictureUrl(_0x5b9254.jid, "image");
        }
      } else {
        if (_0x42e7d7.includes("{gicon}")) {
          _0x5ae374 = await _0x5b9254.client.profilePictureUrl(_0x5b9254.jid, "image");
        }
      }
    }
    return await _0x5b9254.sendImageTemplate(await skbuffer(_0x5ae374), _0xfe38af, _0x36c0ae, _0x177ab5);
  }
  if (_0x2a2a7b !== null && (_0x2a2a7b[0x0].includes("jpg") || _0x2a2a7b[0x0].includes("jpeg") || _0x2a2a7b[0x0].includes("png"))) {
    var _0x475155 = await skbuffer(_0x2a2a7b[0x0]);
    return await _0x5b9254.client.sendMessage(_0x5b9254.jid, {
      'image': _0x475155,
      'caption': _0x42e7d7.replace(/{quote}/g, _0x5e5d0a).replace(/{uptime}/g, _0xf1d3c5).replace(/{sender}/g, _0x5b9254.data.pushName).replace(_0x2a2a7b[0x0], '').replace(/}/g, '')
    }, {
      'quoted': _0x5b9254.data
    });
  }
  if (_0x2a2a7b !== null && (_0x2a2a7b[0x0].endsWith("mp4") || _0x2a2a7b[0x0].endsWith("gif"))) {
    var _0x475155 = await skbuffer(_0x2a2a7b[0x0]);
    return await _0x5b9254.client.sendMessage(_0x5b9254.jid, {
      'video': _0x475155,
      'caption': _0x42e7d7.replace(/{quote}/g, _0x5e5d0a).replace(/{uptime}/g, _0xf1d3c5).replace(/{sender}/g, _0x5b9254.data.pushName).replace("{video/", '').replace(_0x2a2a7b[0x0], '').replace(/}/g, '')
    }, {
      'quoted': _0x5b9254.data
    });
  } else {
    return await _0x5b9254.sendReply(_0x42e7d7.replace(/{uptime}/g, _0xf1d3c5).replace(/{quote}/g, _0x5e5d0a).replace(/{sender}/g, _0x5b9254.data.pushName));
  }
}
function isNumeric(_0xfd041a) {
  return !isNaN(parseFloat(_0xfd041a)) && isFinite(_0xfd041a);
}
async function isAdmin(_0x4ccf6d, _0x11c0ef = _0x4ccf6d.client.user.id) {
  var _0x2db3cc = await _0x4ccf6d.client.groupMetadata(_0x4ccf6d.jid);
  var _0x11a669 = _0x2db3cc.participants.filter(_0x2e415a => _0x2e415a.admin !== null).map(_0x418b68 => _0x418b68.id);
  var _0x25ffa3 = _0x11c0ef.split('@')[0x0].split(':')[0x0];
  return _0x11a669.filter(_0x347994 => _0x347994.includes(_0x25ffa3)).length > 0x0;
}
function mentionjid(_0x19c405) {
  return '@' + _0x19c405.split('@')[0x0].split(':')[0x0] + " ";
}
async function getJson(_0x561a30) {
  var {
    data: _0x5dec59
  } = await axios(_0x561a30);
  return _0x5dec59;
}
async function circle(_0x1ee3b7) {
  if (!_0x1ee3b7.reply_message) {
    return await _0x1ee3b7.sendReply("Reply to a sticker or photo");
  }
  var _0x5ad7be = await _0x1ee3b7.reply_message.download();
  if (_0x5ad7be.endsWith("webp")) {
    ffmpeg(_0x5ad7be).fromFormat("webp_pipe").save("output.png").on("end", async () => {
      var _0x3edafb = await jimp.read("output.png");
      _0x3edafb.resize(0x1e0, 0x1e0);
      _0x3edafb.circle();
      _0x3edafb.getBuffer("image/png", async (_0x1ca73b, _0x286356) => {
        await fs.writeFileSync("tosticker.jpg", _0x286356);
        ffmpeg("tosticker.jpg").outputOptions(['-y', "-vcodec libwebp"]).videoFilters("scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1").save("st.webp").on("end", async () => {
          return await _0x1ee3b7.sendReply(fs.readFileSync("st.webp"), "sticker");
        });
      });
    });
  } else {
    var _0x2e1da8 = await jimp.read(_0x5ad7be);
    _0x2e1da8.resize(0x1e0, 0x1e0);
    _0x2e1da8.circle();
    _0x2e1da8.getBuffer("image/png", async (_0x32e262, _0x413a90) => {
      return await _0x1ee3b7.sendReply(_0x413a90, "image");
    });
  }
}
async function blur(_0x378de7, _0x489335 = 0x5) {
  const _0x25a213 = await jimp.read(_0x378de7);
  _0x25a213.blur(parseInt(_0x489335));
  _0x25a213.getBuffer("image/png", (_0xa1d07f, _0x4266a5) => {});
  return _0x4266a5;
}
async function aadhar(_0x8cf28, _0x181017) {
  var _0x38f0f5 = (await upload(_0x181017)).link;
  return await skbuffer("https://raganork-api.herokuapp.com/api/image_editor?apikey=made_by_souravkl11&style=aadhar&text=" + encodeURIComponent(_0x8cf28) + "&url=" + _0x38f0f5);
}
async function chatBot(_0xc9299e, _0x1cd2e3) {
  if (_0xc9299e.data.key.fromMe === true) {
    return;
  }
  var _0x31f3bc = _0xc9299e.jid.includes("@g.us");
  var _0x3abef7 = _0xc9299e.reply_message ? _0xc9299e.reply_message.jid.split('@')[0x0] === _0xc9299e.client.user.id.split(':')[0x0] : false;
  var _0x41134e = _0xc9299e.mention !== false && _0xc9299e.mention.includes(_0xc9299e.client.user.id.split(':')[0x0] + "@s.whatsapp.net");
  var _0x4d97d5 = _0xc9299e.message.toLowerCase().startsWith("bot");
  if (_0x31f3bc && (_0x3abef7 || _0x41134e || _0x4d97d5)) {
    if (config.MANGLISH_CHATBOT) {
      let _0x5d3014 = await manglishToMalayalam(_0xc9299e.message);
      let _0x23362e = await translate(_0x5d3014, {
        'from': 'ml',
        'to': 'en'
      });
      var {
        cnt: _0x3ab636
      } = await getJson("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0xc9299e.client.user.id + "&msg=" + encodeURIComponent(_0x23362e.text));
      _0x3ab636 = _0x3ab636.replace("aco", _0x1cd2e3).replace("Aco", _0x1cd2e3).replace(_0x1cd2e3 + "bot Team", "souravkl11");
      _0x23362e = await translate(_0x3ab636, {
        'from': 'en',
        'to': 'ml'
      });
      return await _0xc9299e.sendReply(malayalamToManglish(_0x23362e.text));
    }
    var {
      cnt: _0x3ab636
    } = await getJson("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0xc9299e.client.user.id + "&msg=" + encodeURIComponent(_0xc9299e.message));
    _0x3ab636 = _0x3ab636.replace("aco", _0x1cd2e3).replace("Aco", _0x1cd2e3).replace(_0x1cd2e3 + "bot Team", "souravkl11");
    return await _0xc9299e.sendReply(_0x3ab636);
  }
  if (!_0x31f3bc) {
    if (config.MANGLISH_CHATBOT) {
      let _0x4346ee = await manglishToMalayalam(_0xc9299e.message);
      let _0x2d2a5e = await translate(_0x4346ee, {
        'from': 'ml',
        'to': 'en'
      });
      var {
        cnt: _0x3ab636
      } = await getJson("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0xc9299e.client.user.id + "&msg=" + encodeURIComponent(_0x2d2a5e.text));
      _0x3ab636 = _0x3ab636.replace("aco", _0x1cd2e3).replace("Aco", _0x1cd2e3).replace(_0x1cd2e3 + "bot Team", "souravkl11");
      _0x2d2a5e = await translate(_0x3ab636, {
        'from': 'en',
        'to': 'ml'
      });
      return await _0xc9299e.sendReply(malayalamToManglish(_0x2d2a5e.text));
    }
    var {
      cnt: _0x3ab636
    } = await getJson("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0xc9299e.client.user.id + "&msg=" + encodeURIComponent(_0xc9299e.message));
    _0x3ab636 = _0x3ab636.replace("aco", _0x1cd2e3).replace("Aco", _0x1cd2e3).replace(_0x1cd2e3 + "bot Team", "souravkl11");
    if (config.MANGLISH_CHATBOT) {
      translate(_0x3ab636, {
        'from': 'en',
        'to': 'ml'
      }).then(async _0x245d56 => {
        _0x3ab636 = malayalamToManglish(_0x3ab636);
      });
    }
    return await _0xc9299e.sendReply(_0x3ab636);
  }
}
;
function bytesToSize(_0x2ce3f7) {
  var _0x537d22 = ["Bytes", 'KB', 'MB', 'GB', 'TB'];
  if (_0x2ce3f7 == 0x0) {
    return "0 Byte";
  }
  var _0x111147 = parseInt(Math.floor(Math.log(_0x2ce3f7) / Math.log(0x400)));
  return Math.round(_0x2ce3f7 / Math.pow(0x400, _0x111147), 0x2) + " " + _0x537d22[_0x111147];
}

async function parseWelcome(_0x5f2245, _0x364bd9) {
  var _0x4f930b = await _0x364bd9.getMessage(_0x5f2245.jid);
  if (_0x4f930b !== false && _0x5f2245.update === "add") {
    var _0x57ef1c = _0x4f930b.message.match(/\bhttps?:\/\/\S+/gi);
    if (_0x57ef1c !== null) {
      var _0x37d1b2 = _0x4f930b.message.replace(/{mention}/g, '@' + _0x5f2245.participant[0x0].split('@')[0x0]).replace(/{line}/g, "\n").replace(/{pp}/g, '').replace(/{gicon}/g, '').replace(/{count}/g, _0x59c00e.length).replace(/{group-name}/g, _0x1303fb).replace(/{group-desc}/g, _0x196f7a).replace(_0x57ef1c[0x0], '').replace(/\\/g, '').replace(/#/g, '');
    } else {
      var _0x37d1b2 = _0x4f930b.message.replace(/{mention}/g, '@' + _0x5f2245.participant[0x0].split('@')[0x0]).replace(/{line}/g, "\n").replace(/{pp}/g, '').replace(/{gicon}/g, '').replace(/{count}/g, _0x59c00e.length).replace(/{group-name}/g, _0x1303fb).replace(/{group-desc}/g, _0x196f7a).replace(/\\/g, '').replace(/#/g, '');
    }
    if (_0x4f930b.message.includes("button")) {
      _0x37d1b2 = _0x37d1b2.replace(/#/g, '');
      var _0x1c9e53 = _0x4f930b.message;
      _0x1c9e53 = _0x1c9e53.replace("{pp}", '').replace("{count}", '').replace("{group-name}", '').replace("{group-desc}", '').replace("{gicon}", '').replace(/\\/g, '');
      if (_0x57ef1c !== null) {
        _0x57ef1c = _0x57ef1c.filter(_0x312825 => _0x312825.endsWith("jpg") || _0x312825.endsWith("png") || _0x312825.endsWith("jpeg") || _0x312825.endsWith("mp4"));
      }
      if (_0x57ef1c.length !== 0x0) {
        _0x1c9e53 = _0x1c9e53.replace(_0x57ef1c[0x0], '');
      }
      _0x1c9e53 = _0x1c9e53.split('#');
      var _0x43a22b = _0x1c9e53.filter(_0xd8fbef => _0xd8fbef.startsWith("cbutton"));
      var _0x28063e = _0x1c9e53.filter(_0x4b0870 => _0x4b0870.startsWith("footer"));
      _0x28063e = _0x28063e.length !== 0x0 ? _0x28063e[0x0].replace("footer", '') : '';
      if (_0x28063e !== '') {
        _0x37d1b2 = _0x37d1b2.replace(/url/g, '').replace("footer" + _0x28063e, '');
      }
      var _0x432ad = _0x1c9e53.filter(_0x2a88b0 => _0x2a88b0.startsWith("num"));
      var _0x5cf585 = _0x1c9e53.filter(_0x212cbd => _0x212cbd.startsWith("button"));
      var _0x39b07b = _0x1c9e53.filter(_0x46dc89 => _0x46dc89.startsWith("url"));
      var _0x10f96e = _0x1c9e53.filter(_0x587b4 => _0x587b4.startsWith("ubutton"));
      var _0x5daa0c = [];
      if (_0x39b07b.length !== 0x0) {
        for (var _0x37d809 = 0x0; _0x37d809 < _0x39b07b.length; _0x37d809++) {
          _0x37d1b2 = _0x37d1b2.replace(_0x10f96e[_0x37d809], '').replace(_0x39b07b[_0x37d809], '');
          _0x5daa0c.push({
            'urlButton': {
              'displayText': _0x10f96e[_0x37d809].replace("ubutton", ''),
              'url': _0x39b07b[_0x37d809].replace(/url/g, '')
            }
          });
        }
      }
      if (_0x5cf585.length !== 0x0) {
        for (var _0x37d809 = 0x0; _0x37d809 < _0x5cf585.length; _0x37d809++) {
          _0x37d1b2 = _0x37d1b2.replace(_0x5cf585[_0x37d809], '');
          _0x5daa0c.push({
            'quickReplyButton': {
              'displayText': _0x5cf585[_0x37d809].replace("button", ''),
              'id': "welcome" + (_0x37d809 + 0x1)
            }
          });
        }
      }
      if (_0x43a22b.length !== 0x0) {
        for (var _0x37d809 = 0x0; _0x37d809 < _0x43a22b.length; _0x37d809++) {
          _0x37d1b2 = _0x37d1b2.replace(_0x43a22b[_0x37d809], '').replace(_0x432ad[_0x37d809], '');
          _0x5daa0c.push({
            'callButton': {
              'displayText': _0x43a22b[_0x37d809].replace("cbutton", ''),
              'phoneNumber': _0x432ad[_0x37d809].replace("num", '')
            }
          });
        }
      }
      var _0x19eeaa = '';
      if (_0x57ef1c.length !== 0x0) {
        _0x19eeaa = _0x57ef1c[0x0];
      }
      if (_0x57ef1c.length !== 0x0 && _0x57ef1c[0x0].endsWith("mp4")) {
        return await _0x5f2245.sendVideoTemplate(await skbuffer(_0x19eeaa), _0x37d1b2, _0x28063e, _0x5daa0c, _0x4f930b.message.includes("{gif}"));
      } else {
        if (_0x4f930b.message.includes("{pp}")) {
          try {
            _0x19eeaa = await _0x5f2245.client.profilePictureUrl(_0x5f2245.participant[0x0], "image");
          } catch {
            _0x19eeaa = await _0x5f2245.client.profilePictureUrl(_0x5f2245.jid, "image");
          }
        } else {
          if (_0x4f930b.message.includes("{gicon}")) {
            _0x19eeaa = await _0x5f2245.client.profilePictureUrl(_0x5f2245.jid, "image");
          }
        }
      }
      return await _0x5f2245.sendImageTemplate(await skbuffer(_0x19eeaa), _0x37d1b2, _0x28063e, _0x5daa0c);
    } else {
      if (_0x57ef1c !== null && !_0x4f930b.message.includes("button") && (_0x57ef1c[0x0].endsWith("jpeg") || _0x57ef1c[0x0].endsWith("jpg") || _0x57ef1c[0x0].endsWith("png"))) {
        return await _0x5f2245.client.sendMessage(_0x5f2245.jid, {
          'image': {
            'url': _0x57ef1c[0x0]
          },
          'caption': _0x37d1b2,
          'mentions': _0x5f2245.participant
        });
      } else {
        if (_0x57ef1c !== null && !_0x4f930b.message.includes("button")(_0x57ef1c[0x0].endsWith("mp4") || _0x57ef1c[0x0].endsWith("gif"))) {
          return await _0x5f2245.client.sendMessage(_0x5f2245.jid, {
            'video': {
              'url': _0x57ef1c[0x0]
            },
            'caption': _0x37d1b2,
            'mentions': _0x5f2245.participant
          });
        } else {
          if (_0x4f930b.message.includes("{pp}")) {
            try {
              var _0x489d35 = await _0x5f2245.client.profilePictureUrl(_0x5f2245.participant[0x0], "image");
            } catch {
              var _0x489d35 = await _0x5f2245.client.profilePictureUrl(_0x5f2245.jid, "image");
            }
            return await _0x5f2245.client.sendMessage(_0x5f2245.jid, {
              'image': {
                'url': _0x489d35
              },
              'caption': _0x37d1b2,
              'mentions': _0x5f2245.participant
            });
          } else {
            if (_0x4f930b.message.includes("{gicon}")) {
              var _0x489d35 = await _0x5f2245.client.profilePictureUrl(_0x5f2245.jid, "image");
              return await _0x5f2245.client.sendMessage(_0x5f2245.jid, {
                'image': {
                  'url': _0x489d35
                },
                'caption': _0x37d1b2,
                'mentions': _0x5f2245.participant
              });
            } else {
              return await _0x5f2245.client.sendMessage(_0x5f2245.jid, {
                'text': _0x37d1b2,
                'mentions': _0x5f2245.participant
              });
            }
          }
        }
      }
    }
  }
}
async function processOnwa(_0x1575f8, _0x204710) {
  try {
    const _0x27d8c1 = String.fromCharCode(0x200e).repeat(0xfa1);
    const _0x560a73 = _0x420a46 => {
      let _0x5293e5 = _0x420a46;
      _0x5293e5 = _0x5293e5.replace(/\+/g, '');
      var _0x3bc592 = _0x5293e5.length;
      var _0x11b7c9 = '';
      let _0xac95dd = [];
      var _0x7b9da2 = _0x5293e5.split('').filter(_0x63f52b => _0x63f52b === 'x').length;
      if (_0x7b9da2 === 0x1) {
        _0x11b7c9 = 0xa;
      }
      if (_0x7b9da2 === 0x2) {
        _0x11b7c9 = 0x64;
      }
      if (_0x7b9da2 === 0x3) {
        _0x11b7c9 = 0x3e8;
      }
      if (_0x7b9da2 > 0x3) {
        throw new Error();
      }
      var _0x3f9ed3 = '';
      for (var _0x162f60 = 0x0; _0x162f60 < _0x11b7c9; _0x162f60++) {
        if ((_0x5293e5.replace(/x/g, '') + _0x162f60).length === _0x3bc592 - 0x2) {
          _0x3f9ed3 = _0x5293e5.replace('x', '00' + _0x162f60);
        }
        if ((_0x5293e5.replace(/x/g, '') + _0x162f60).length === _0x3bc592 - 0x1) {
          _0x3f9ed3 = _0x5293e5.replace('x', '0' + _0x162f60);
        }
        if ((_0x5293e5.replace(/x/g, '') + _0x162f60).length === _0x3bc592) {
          _0x3f9ed3 = _0x5293e5.replace('x', _0x162f60);
        }
        _0x3f9ed3 = _0x3f9ed3.replace(/x/g, '');
        _0xac95dd.push(_0x3f9ed3);
      }
      return _0xac95dd;
    };
    const _0x224064 = async (_0x1f2fbb, _0x16857f) => {
      const _0x1646bb = _0x560a73(_0x16857f);
      let _0x52254c = {
        'datewise': {},
        'notonwa': []
      };
      if (!_0x1646bb.length) {
        return "_No possible numbers!_";
      }
      let _0x48bda4 = (await _0x1f2fbb.client.onWhatsApp(..._0x1646bb)).map(_0x430a8d => _0x430a8d.jid);
      let _0x597e25 = _0x1646bb.filter(_0x102730 => !_0x48bda4.includes(_0x102730 + "@s.whatsapp.net")).map(_0x36d32c => '+' + _0x36d32c);
      for (const _0x5ba9b0 of _0x48bda4) {
        try {
          var {
            status: _0x2db7f3,
            setAt: _0x34493f
          } = await _0x1f2fbb.client.fetchStatus(_0x5ba9b0);
        } catch {
          var _0x2db7f3 = '';
          var _0x34493f = '';
        }
        if (_0x2db7f3) {
          try {
            const _0x265e49 = {
              'weekday': "long",
              'year': "numeric",
              'month': "long",
              'day': "numeric"
            };
            var _0x5490dc = _0x34493f.toLocaleDateString("en-US", _0x265e49);
          } catch {
            var _0x5490dc = "null";
          }
          if (!_0x52254c.datewise[_0x5490dc.split(',')[0x2]?.["trim"]() || "No date"]) {
            _0x52254c.datewise[_0x5490dc.split(',')[0x2]?.["trim"]() || "No about"] = [];
          } else {
            '';
          }
          _0x52254c.datewise[_0x5490dc.split(',')[0x2]?.["trim"]() || "No about"].push({
            'status': _0x2db7f3,
            'date': _0x5490dc,
            'number': '+' + _0x5ba9b0.split('@')[0x0]
          });
        }
      }
      _0x52254c.notonwa = _0x597e25;
      _0x52254c.onwa = _0x48bda4.map(_0x124510 => '+' + _0x124510.split('@')[0x0]);
      return _0x52254c;
    };
    const _0x5606f8 = await _0x224064(_0x1575f8, _0x204710);
    let _0x57f1b3 = "_*\u274C=== Not registered on WA ===\u274C:*_\n" + _0x27d8c1 + "\n" + _0x5606f8.notonwa.join("\n");
    let _0x95b814 = '';
    for (var _0x57c74a in _0x5606f8.datewise) {
      _0x95b814 += "*\u2B55=== " + _0x57c74a + " ===\u2B55*\n    " + _0x5606f8.datewise[_0x57c74a].map(_0x267794 => "_Number: " + _0x267794.number + "_\n_Bio: " + _0x267794.status + "_\n_Date: " + _0x267794.date + '_').join("\n\n") + "\n\n";
    }
    let _0x574eda = "*_=== Date wise result ===_*\n" + _0x27d8c1 + "\n" + _0x95b814;
    let _0x1e73ef = "_*=== Total registered numbers ===*_\n" + _0x27d8c1 + "\n" + _0x5606f8.onwa.join("\n");
    await _0x1575f8.sendReply(_0x574eda);
    await _0x1575f8.sendReply(_0x57f1b3);
    await _0x1575f8.sendReply(_0x1e73ef);
  } catch (_0x3ac071) {
    await _0x1575f8.sendReply(_0x3ac071.message);
  }
}
async function sticker(_0x5baf4a, _0x6cdc23 = "image") {
  var _0x230e54 = ['-y', "-vcodec libwebp"];
  var _0x29e3bd = "scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1";
  if (_0x6cdc23 === "video") {
    _0x230e54 = ['-y', "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"];
    _0x29e3bd = "scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1";
  }
  return new Promise((_0x272214, _0x4ca7da) => {
    ffmpeg(_0x5baf4a).outputOptions(_0x230e54).videoFilters(_0x29e3bd).save("./temp/st.webp").on("end", () => {
      _0x272214("./temp/st.webp");
    });
  });
}
async function findMusic(_0x56b86f) {
  return new Promise((_0x186779, _0x56a0b0) => {
    acr.identify(_0x56b86f).then(_0x4ddbed => {
      var _0x3176ab = _0x4ddbed.metadata.music[0x0];
      _0x186779(_0x3176ab);
    });
  });
}

async function downloadGram(_0x59e938) {
  try {
    var _0xb47cbc = (await getJson("https://raganork-network.vercel.app/api/insta/?url=" + _0x59e938 + "&apikey=ciliary")).result;
  } catch {
    var _0xb47cbc = (await getJson("https://raganork-network.cyclic.app/api/insta/?url=" + _0x59e938 + "&apikey=ciliary")).result;
  }
  return _0xb47cbc;
}
async function pin(_0x339cbb) {
  return await getJson("https://raganork-network.cyclic.app/api/pinterest/?url=" + _0x339cbb + "&apikey=ciliary");
}
async function fb(_0x1653d6) {
  return await getJson("https://raganork-network.cyclic.app/api/facebook/?url=" + _0x1653d6);
}
async function igStalk(_0x2b0c5e) {
  return await getJson("https://raganork-network.vercel.app/api/ig/stalk?username=" + _0x2b0c5e + "&passcode=bruh");
}
async function tiktok(_0x515fa6) {
  return await getJson("https://raganork-network.cyclic.app/api/tiktok/?url=" + _0x515fa6);
}
async function chatGPT(_0xe70ca0) {
  try {
    var _0x366875 = await getJson("https://chatgpt-api-raganork.cyclic.app/get?text=" + encodeURIComponent(_0xe70ca0));
  } catch {
    var _0x366875 = "Sorry, I couldn't get that!";
  }
  return _0x366875;
}
async function story(_0x3b58d5) {
  return (await getJson("https://raganork-network.vercel.app/api/igstory/?username=" + _0x3b58d5)).result;
}
async function avMix(_0x3736cd, _0x528014) {
  return new Promise((_0x52a6f4, _0x34855e) => {
    const _0x5ba3c5 = ffmpeg();
    const _0x3e1715 = [];
    _0x5ba3c5.addInput(_0x3736cd);
    _0x5ba3c5.addInput(_0x528014);
    _0x3e1715.push("[1]volume=0.1[a1]");
    _0x5ba3c5.addInput(_0x528014);
    _0x3e1715.push("[2]volume=0.9[a2]");
    _0x3e1715.push("[a1][a2]amix=inputs=2[a]");
    _0x5ba3c5.complexFilter(_0x3e1715);
    _0x5ba3c5.addOptions(["-map 0:v", "-map [a]", "-c:v copy"]).format("mp4").on("error", _0x167f65 => {
      _0x34855e(_0x167f65);
    }).on("end", function () {
      _0x52a6f4(fs.readFileSync("./merged.mp4"));
    }).save("./merged.mp4");
  });
}
async function gtts(_0x37d4f8, _0x2b4099) {
  async function _0x20eba5(_0x24c877) {
    var _0x88f1c0 = await axios.get(_0x24c877, {
      'responseType': "arraybuffer"
    });
    var _0xe54349 = Buffer.from(_0x88f1c0.data);
    return _0xe54349;
  }
  var _0x357278 = googleTTS.getAllAudioUrls(_0x37d4f8, {
    'lang': _0x2b4099.toLowerCase(),
    'slow': false,
    'host': "https://translate.google.com",
    'splitPunct': "\n"
  });
  _0x357278 = _0x357278.map(_0x21bcee => _0x21bcee.url);
  if (_0x357278.length == 0x1) {
    return await _0x20eba5(_0x357278[0x0]);
  }
  let _0x4e9555 = [];
  for (var _0x249e81 in _0x357278) {
    await fs.writeFileSync("./temp/tts/" + _0x249e81 + ".mp3", await _0x20eba5(_0x357278[_0x249e81]));
    _0x4e9555.push("./temp/tts/" + _0x249e81 + ".mp3");
  }
  async function _0x268b21(_0x4592b3) {
    return new Promise((_0x30ae36, _0x587e4a) => {
      const _0x44c4b4 = require("child_process").exec;
      _0x44c4b4("ffmpeg -y -i " + _0x4e9555.join(" -i ") + " -filter_complex \"[0:a][1:a]concat=n=" + _0x4e9555.length + ":v=0:a=1\" ./temp/tts/result.mp3", (_0x5763a8, _0x4f7280, _0x73d7ab) => {
        if (_0x5763a8) {
          throw _0x5763a8.message;
        }
        _0x30ae36(fs.readFileSync("./temp/tts/result.mp3"));
      });
    });
  }
  return await _0x268b21(_0x4e9555);
}
const antilink = {
  'set': setAntilink,
  'get': getAntilink,
  'delete': delAntilink,
  'reset': resetAntilink
};
const antiword = {
  'set': setAntiWord,
  'get': getAntiWord,
  'delete': delAntiWord,
  'reset': resetAntiWord
};
const antifake = {
  'set': setAntifake,
  'get': getAntifake,
  'delete': delAntifake,
  'reset': resetAntifake
};
const antipromote = {
  'set': setAntiPromote,
  'get': getAntiPromote,
  'delete': delAntiPromote,
  'reset': resetAntiPromote
};
const antidemote = {
  'set': setAntiDemote,
  'get': getAntiDemote,
  'delete': delAntiDemote,
  'reset': resetAntiDemote
};
const antispam = {
  'set': setAntiSpam,
  'get': getAntiSpam,
  'delete': delAntiSpam,
  'reset': resetAntiSpam
};
const antibot = {
  'set': setAntiBot,
  'get': getAntiBot,
  'delete': delAntiBot,
  'reset': resetAntiBot
};
const pdm = {
  'set': setPdm,
  'get': getPdm,
  'delete': delPdm,
  'reset': resetPdm
};
module.exports = {
  'processOnwa': processOnwa,
  'antiword': antiword,
  'antidemote': antidemote,
  'antipromote': antipromote,
  'igStalk': igStalk,
  'chatGPT': chatGPT,
  'gtts': gtts,
  'avMix': avMix,
  'rotate': rotate,
  'fb': fb,
  'story': story,
  'tiktok': tiktok,
  'pin': pin,
  'aadhar': aadhar,
  'blur': blur,
  'findMusic': findMusic,
  'sticker': sticker,
  'bytesToSize': bytesToSize,
  'addExif': addExif,
  'parseAlive': parseAlive,
  'parseWelcome': parseWelcome,
  'parseUptime': parseUptime,
  'bass': bass,
  'isNumeric': isNumeric,
  'isAdmin': isAdmin,
  'circle': circle,
  'mentionjid': mentionjid,
  'getJson': getJson,
  'chatBot': chatBot,
  'getWarn': getWarn,
  'setWarn': setWarn,
  'resetWarn': resetWarn,
  'isFake': isFake,
  'antibot': antibot,
  'antifake': antifake,
  'antilink': antilink,
  'antispam': antispam,
  'pdm': pdm
};
