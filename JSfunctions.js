var quotes = ['Don&#39t stop until you&#39re proud.',
    'A new language is a new life.',
    'Will it be easy? Nope.<br/>Worth it? Absolutely.',
    'The expert in anything was once a beginner.',
    'Always do what you are afraid to do.',
    'Don&#39t lose the spark that makes you You. <br/>~ C.J. Peterson',
    'Happiness is ... when your code runs without errors.',
    'Try to be a rainbow in someone&#39s cloud. <br/>~ Maya Angelou',
    'Out of difficulties grow miracles. <br/>~ Jean de la Bruyere',
    'Never let anyone disturb your composure, <br/>deter your accomplishment, <br/>or destroy your happiness.',
    'If you are not willing to risk the usual <br/>you will have to settle for the ordinary.<br/>~ Jim Rohn',
    'You must never behave as if your life belongs to a man. <br/>Your life belongs to you and you alone.<br/> ~ Chimamanda Adichie',
    'Life goes by fast. Enjoy it. Calm down. It&#39s all funny. <br/>~ Joan Rivers',
    'how you love yourself is<br/>how you teach others<br/>to love you <br/>~ Rupi Kaur',
    'Don&#39t cry because it&#39s over, smile because it happened.<br/>~ Dr. Seuss',
    'where<br/>you are.<br/> is not <br/>who<br/>you are.<br/>~ circumstances',
    'The world is yours.',
    'Follow your most intense<br/>obsessions mercilessly.<br/>~ Frank Kafka',
    'Silence isn&#39t empty, it&#39s full<br/> of answers',
    'With the new day comes new strength and new thoughts.<br/>~ Eleanor Roosevelt',
    'Better an oops<br/> than a what if.',
    'She<br/>dreams<br/>more<br/>often<br/>than<br/>she<br/>sleeps', 
    'You only fail when you stop trying.',
    'I was quiet, but<br/>I was not blind<br/>~ Jane Austen',
    'It doesn&#39t matter where you came from. <br/>All that matters is where you are going.<br/>~ Brian Tracy',
    'We become what we think about.<br/>~ Earl Nightingale',
    'Don&#39t let yesterday take up too much of today.<br/>~ Will Rogers',
    'We may encounter many defeats<br/> but we must not be defeated.<br/>~ Maya Angelou',
    'Creativity isiIntelligence having fun.<br/>~ Albert Einstein'
];

function randomQuote(index){ //generate and set inspo quotes
  for(var i =1; i<index;i++){
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var id = "quote" + i.toString();
    document.getElementById(id).innerHTML = '<span >' + quote + '</span >';
  }
}

function uncheck(){ //hide slider
    document.getElementById("slide").checked = false;
}