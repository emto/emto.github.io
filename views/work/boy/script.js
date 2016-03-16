var response = ["Last night I looked up at the stars and named a reason why I love you for each one. I was doing great—until I ran out of stars.",

"Life without you is like a broken pencil: pointless.",

"You’re so pretty I forgot what I was going say.",

"You are my best friend, my shoulder to lean on, the one person I know I can count on; you’re the love of my life, you’re my one and only, you’re my everything.",

"Whatever our souls are made of, yours and mine are the same.",

"I put a tear in the ocean; when you find it, I’ll stop loving you.",

"I love you babe, and everytime I see you, I want to hold you in my arms and never let go. You’re the girl that fills all the little dark places in my heart.",

"You deserve the world, and I know I can’t give that to you. So I’ll give you the next best thing: my world.",

"I fall in love with you everytime I look into your beautiful eyes.",

"Are you Google? Cause you’ve got everything I’ve been searching for.",

"I miss you when I’m not with you. When I’m not with you, all I do is think about you. When I think about you, I just want to be with you. When I’m with you it’s like all of my dreams have come true.",

"You are my North, my South, my East and West, my working week and my Sunday rest.",

"If I had to choose between breathing and loving you, I would use my last breath to say, I love you.",

"I sent an angel to look over you at night. The angel came back a minute later, and I asked why. It told me angels don’t watch other angels.",

"Grow old along with me! The best is yet to be.",

"When I am with you, the only place I want to be is closer.",

"Your absence is stronger to me than the presence of thousands of other people.",

"Before I met you, I never knew what it was like to smile for no reason.",

"You are so amazingly…wonderfully…beautifully…awesomely…most definitely the most precious of all precious things.",

"I can forget my very existence in a deep kiss with you.",

"God was showing off when he created you.",

"Your parents are thieves  because they stole all the stars in the sky and put them in your eyes.",

"I could walk forever and a mile with you.",

"Every atom of your flesh is as dear to me as my own: in pain and sickness it would still be dear.",

"I could conquer the world with just one hand, as long as you were holding the other.",

"If I died and God asked me what I’d like to come back as, I’d say a tear; so I can be born in your eyes, roll down your cheek, and die on your lips.",

"You are my religion. I would die for you.",

"Being in love used to seem like such an exaggeration, but not since the day I fell for you. When I say that you’re my everything and that I’d do anything for you, I’m definitely not exaggerating.",

"I didn’t think it was possible for a girl to look better than you did the last time I saw you, but you pulled it off today.",

"I love you more than yesterday but less than tomorrow.",

"I wrote your name in the sand but it washed away…I wrote your name in the clouds but it blew away….I wrote your name in my heart and there it will always stay.",

"My love for you is like a circle—it has no beginning and will know of no end.",

"YOU WILL DO WELL ON YOUR MCAT",

"YOU WILL BE A DOCTOR",

"HELLO DR. JAMI WANG"];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(".name").on('keydown', function(ev) {
    if(ev.which === 13) {
        $(this).val('');
        var line = response[getRandomArbitrary(0,35)];
        $(".response").text(line);
        return false;
    }
});
