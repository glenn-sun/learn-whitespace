const LEVELS = [
    {},
    {
        title: "It's a cruel summer",
        text: _ => `
            <p>Taylor Swift is on her Eras Tour, and she's making a surprise stop in Tacoma just in time for week 5 at Mathcamp! <span class="lyric"><span class="song">Long Live</span>The crowds in stands went wild</span> as she sang,
            <p>"Got a long list of ex-lovers, they'll tell&mdash;" </p>
            <p>All of a sudden, <span class="lyric"><span class="song">Sparks Fly</span>the lights go down</span>. Scooter Braun appears on stage, and proclaims, "<span class="lyric"><span class="song">Better Than Revenge</span>There is nothing I do better than revenge</span>... mwa ha ha ha!" He kidnapped her!</p>

            <p>The venue spontaneously combusts into nothing but a sea of blank space, fog as far as the eye can see. And it's your job to save Taylor from this <em>Treacherous</em> predicament!</p>
            
            <p>Whitespace is an esoteric programming language that only uses <span class='tab'>&nbsp;tab&nbsp;</span>, <span class='space'>&nbsp;space&nbsp;</span>, and <span class='lf'>&nbsp;new&nbsp;line&nbsp;</span> as meaningful characters. <b>All other characters are ignored and may be used for comments,</b> and the commands pane will automatically insert some helpful comments, though you are welcome (and encouraged) to add more. If you have trouble differentiating the colors on this page, feel free to pick your own in the upper-right corner.</p>

            <p>To save Taylor, first you need to push yourself out of the crowd. Using the tools you have, figure out a way to output an exclamation point.</p>
            
            <p>By the way, "pop" means to remove the top item. Click "Run" to test your code at any time, and "Submit" when you're confident in your solution.</p>

        `,
        examples: [
            {
                input: "(empty)",
                output: "!",
            }
        ],
        tests: [
            {
                input: "",
                output: "!",
            }
        ],
    },
    {
        title: "Like a million little stars spellin' out your name",
        text: _ => `
            <p>You <em>fearlessly</em> <span class="lyric"><span class="song">Love Story</span>make your way through the crowd and say,</span> "Hey!" <span class="lyric"><span class="song">The Very First Night</span>as you chase Scooter and Taylor down through the hallway</span>. Scooter is momentarily distracted&mdash;he's making a phone call to his partner in crime, Scott Borchetta&mdash;and Taylor calls out, asking for your name. </p>
            <p> Spell out your name to Taylor. Feel free to pick any name you like, but this choice will be irreversible!</p>
            <p>Remember that the <em>stack</em> is like a stack of paper. The last thing that you put on the stack will be the first thing you pick up. </p>
        `,
        examples: [
            {
                input: "(empty)",
                output: "Travis",
            }
        ],
        tests: [
            {
                input: "",
                check: o => {
                    player_name = o;
                    return o !== "";
                },
            }
        ],
    },
    {
        title: "I'm sorry, the old Taylor can't come to the phone right now...",
        text: data => `
            <p>Why? Cause she's kidnapped! Unfortunately, Scooter had a <em>Getaway Car</em> waiting for him, so he managed to get away with Taylor (oh no!). Thankfully, you managed to slip Taylor your phone number during the commotion. Pretty soon, <span class="lyric"><span class="song">Suburban Legends</span>you get a call from an unmarked number</span>&mdash;<span class="lyric"><span class="song">Sparks Fly</span>drop everything now</span>, it's Taylor!</p>

            <p> "${data.player_name}," she says, "I..." The voice is almost inaudible behind all the commotion of the concert. To make sure you are hearing Taylor correctly, listen to what Taylor says, then repeat it back to her.</p>
            <p>One character will be given as input. (Feel free to choose your own inputs when you test your code.) Your goal is to output the exact same character.</p>
            <p>The <em>heap</em> is where you can store things. You need to specify an <em>location</em> for every item you store, which can just be any number you like.</p>

        `,
        examples: [
            {
                input: "A",
                output: "A",
            },
            {
                input: ".",
                output: ".",
            }
        ],
        tests: [
            {
                input: "e",
                output: "e",
            },
            {
                input: "6",
                output: "6",
            },
            {
                input: "+",
                output: "+",
            },
        ],
    },
    {
        title: "Standing here, hoping it gets to you",
        text: _ => `
            <p><span class="lyric"><span class="song">Glitch</span>I think there's been a glitch…</span> It sounds like Taylor is trying to tell you her location, but it's as if sending a <span class="lyric"><span class="song">Message In a Bottle</span>message in a bottle is all she can do</span>. That is to say, her message is coming through really jumbled! Can you unscramble what she is trying to say, and decipher her location? </p>

            <p>Taylor will say a three-letter word to you. Your job is to output the characters of the word in reverse order.</p>
        `,
        examples: [
            {
                input: "aes",
                output: "sea",
            }
        ],
        tests: [
            {
                input: "abc",
                output: "cba",
            },
            {
                input: "aes",
                output: "sea",
            },
            {
                input: "aab",
                output: "baa",
            }
        ]
    },
    {
        title: "Robbers to the east, clowns to the west",
        text: _ => `
            <p>Not only can she <em>do it with a broken heart</em>, she can also do it while kidnapped! While on the phone, after telling you her location, Taylor has given you an important task to do first, so <span class="lyric"><span class="song">I Can See You</span>it's best that you move fast</span>. She was planning on announcing the release date of Reputation (Taylor's Version) tonight, and now she needs your help to do it. She doesn't have access to her plans anymore, and <em> Sad (Beautiful) Tragic,</em> she cannot remember the release date off the top of her head.</p> 

            <p>No fear, you know there are exactly 112 days between the start of the Eras Tour to the release of Speak Now (Taylor's Version), and exactly 112 days between the release of Speak Now (Taylor's Version) and 1989 (Taylor's Version). You ask her if her planned release date for Reputation (Taylor's Version) is 112 days after 1989 (Taylor's Version). Amazingly, Taylor confirms your theory, and now you have a way to figure out the release date, so you can help her announce this to everyone!</p>

            <p>Let's make sure Taylor's timeline stays <em>All Too Well</em>…</p>

            <p>Taylor will give you a number as input. Output this number plus 112.</p>
        `,
        examples: [
            {
                input: "0",
                output: "112",
            },
            {
                input: "1989",
                output: "2101",
            }
        ],
        tests: [
            {
                input: "30",
                output: "142",
            },
            {
                input: "12",
                output: "124",
            }
        ]
        
    },
    {
        title: "I'm only 17, I don't know anything",
        text: _ => `
            <p>Now that you have helped Taylor get her announcement plans ready, you start running to her location, which you deciphered earlier. You run into a building where she is presumably being held. However, the building security stops you. Since people who are 17 <span class="lyric"><span class="song">Betty</span>don't know anything</span> but you <span class="lyric"><span class="song">Nothing New</span>know everything at 18</span>, pretend you are exactly 18 years old. </p> 

            <p>The security guard will ask you, "Are you <em>x</em> years old?" by just saying the number <em>x</em>. When the input is exactly the number "18", reply "y" for yes, otherwise reply "n" for no.</p>

            <p>A <em>label</em> can be any number. These are points in your code that you can jump to from elsewhere. Remember that the computer will parse your program character-by-character in order, except when you explicitly tell it to jump.</p>
        `,
        examples: [
            {
                input: "6",
                output: "n",
            },
            {
                input: "18",
                output: "y",
            },
            {
                input: "28",
                output: "n",
            }
        ],
        tests: [
            {
                input: "17",
                output: "n",
            },
            {
                input: "18",
                output: "y",
            },
            {
                input: "19",
                output: "n",
            },
            {
                input: "80",
                output: "n",
            },
            {
                input: "1",
                output: "n",
            }
        ],
    },
    {
        title: "Castles Crumbling",
        text: _ => `
            <p>You have successfully entered the building <span class="lyric"><span class="song">Fearless</span>head first, fearless</span>. <em>…Ready for it?</em> Now you need to find which floor Taylor is on. You aren't sure exactly which floor she is on, but you know she is on an odd floor. Even worse, it seems Scooter has implemented some extra security measures &mdash; the elevator jumps to a floor at random every time you get in it. To save time, you decide to only get off and search the odd floors, but you need a way to take in a random floor number and decide if you will get off or not. </p>

            <p>Given a number as input, output "e" if it is even or "o" if it is odd. </p>
        `,
        examples: [
            {
                input: "13",
                output: "o"
            },
            {
                input: "2",
                output: "e",
            }
        ],
        tests: [
            {
                input: "1",
                output: "o",
            },
            {
                input: "14",
                output: "e"
            }
        ]
    },
    {
        title: "One, Two, Three, Four",
        text: _ => `
        <p>Once you get to floor 13, <span class="lyric"><span class="song">You Belong With Me</span>you find that what you've been looking for has been here the whole time</span>. You must be <em>The Lucky One</em>, because it seems you and Taylor <span class="lyric"><span class="song">Out of the Woods</span>were built to fall back together</span>.  The two of you plan an escape route, which will involve splitting up. Therefore, it needs to be timed like a <span class="lyric"><span class="song">Holy Ground</span>perfect rhyme</span>.</p>

        <p>Given a number as input, output a countdown from that number to 0, inclusive. You do not have to output spaces between the numbers.</p>
        `,
        examples: [
            {
                input: "3",
                output: "3210",
            },
            {
                input: "10",
                output: "109876543210",
            },
        ],
        tests: [
            {
                input: "12",
                output: "1211109876543210",
            },
            {
                input: "2",
                output: "210",
            }
        ]
    },
    {
        title: "Jump Then (Don't) Fall",
        text: _ => `
            <p>You <span class="lyric"><span class="song">Only the Young</span>run, and run, and run</span> across the building and come to an open space consisting of tiered platforms. <span class="lyric"><span class="song">The Last Time</span>This is the last time</span> you need to clear an obstacle until you are <em>Fresh Out of the Slammer.</em> In order to get across, you need to jump from one platform to another, going up and down until you eventually reach the ground floor on <em> The Other Side (of the Door).</em> </p>

            <p>The input will be a sequence of positive integers ending with 0 (the ground level). These numbers describe the height of the platforms in the room. When the height of the platform changes, output "^" to jump. When the height of the platforms stays the same, output ">" to run forward. Always jump onto the first platform. </p>

            <p>Note: When the input numbers are separated by spaces, the "read an input number" instruction will get the next number as you expect, and you do not need to deal with the spaces.</p>
        `,
        examples: [
            {
                input: "1 2 2 2 1 4 4 0",
                output: "^^>>^^>^",
            },
            {
                input: "2 2 10 8 8 0",
                output: "^>^^>^",
            }
        ],
        tests: [
            {
                input: "3 3 3 3 0",
                output: "^>>>^",
            },
            {
                input: "3 4 5 3 3 1 0",
                output: "^^^^>^^",
            },
            {
                input: "1 1 20 20 0",
                output: "^>^>^",
            }
        ]
    },
    {
        title: "Getaway Car",
        text: data => `
            <p>Success! You have navigated out of the building and <span class="lyric"><span class="song">Run</span>brought your car back around</span> to your rendezvous point with Taylor! <span class="lyric"><span class="song">August</span>You pull up and say, "Get in the car"</span>; now <span class="lyric"><span class="song">Love Story</span>all there's left to do is run</span>. In order to <em>Shake (it) Off</em> Scooter, you need to find the street with the maximum speed limit &mdash; so this is how it <span class="lyric"><span class="song">The Bolter</span>ends up, with a town car speeding, out the drive one evening</span>.</p>

            <p>Taylor <span class="lyric"><span class="song">Thank You Aimee</span>screamed, "Thank you, ${data.player_name}" to the night sky</span>, and it's time to speed your way back to safety.</p>

            <p>The input will be a sequence of positive integers ending with 0. Output the largest value in the sequence.</p>
        `,
        examples: [
            {
                input: "3 22 7 0",
                output: "22",
            },
        ],
        tests: [
            {
                input: "1 3 7 0",
                output: "7",
            },
            {
                input: "8 6 5 0",
                output: "8",
            },
            {
                input: "33 0",
                output: "33",
            }
        ]
    },
    {
        title: "Blank Space",
        text: _ => `
            <p>Congratulations! You've saved Taylor Swift from Scooter Braun and also learned Whitespace along the way.</p>
            <p>Though Taylor is saved, the blank world that Scooter created is still around, so you're still stuck programming with tabs, spaces, and new lines. But at least you now have the freedom to make whatever you like! Have fun!</p>
            <p>There is one last new feature that you can use! It is called <em>subroutines</em>. They're like labels (and you use labels to mark them), but when you jump to them, the computer will automatically remember where you came from, and will automatically jump back once the subroutine is over.</p>
        `,
        examples: [
            {
                input: "<3",
                output: "<3",
            }
        ],
        tests: [],
    },
];