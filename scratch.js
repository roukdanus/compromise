'use strict';
var nlp = require('./src/index');
// nlp.verbose('tagger');
// const corpus = require('nlp-corpus');
// let text = corpus.sotu.parsed()[0];
// const fresh = require('./test/unit/lib/freshPrince.js');

// console.log(nlp('I\'m going to the shops').sentences().toFutureTense().out());
// console.log(nlp('I\'m going to the shops').sentences().toPastTense().out());
// console.log(nlp('I\'m going to the shops').sentences().toPresentTense().out());

nlp('if it is good, I am going and it will be good.').sentences();
