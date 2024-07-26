const LEVELS = [
    {},
    {
        title: "It's a cruel summer",
        text: `
            <p>Taylor Swift is on her Eras Tour, and she's making a surprise stop in Tacoma just in time for Mathcamp! The crowd goes wild as she sings,</p>
            <p>"Got a long list of ex-lovers, they'll tell&mdash;" </p>
            <p>All of a sudden, the lights go out. Scooter Braun appears on stage, and proclaims, "There is nothing I do better than revenge... mwa ha ha ha!" He kidnapped her!</p>

            <p>The venue spontaneously combusts into nothing but a sea of blank space. And it's your job to save Taylor from her predicament!</p>
            
            <p>Whitespace is an esoteric programming language that only uses <span class='tab'>&nbsp;tab&nbsp;</span>, <span class='space'>&nbsp;space&nbsp;</span>, and <span class='lf'>&nbsp;new&nbsp;line&nbsp;</span> as meaningful characters. All other characters are ignored and may be used to leave yourself comments. If you have trouble differentiating the colors on this page, feel free to pick your own in the upper-right corner.</p>

            <p>First, you need to push yourself out of the crowd. Using the tools you have, figure out a way to output an exclamation point.</p>
            
            <p>Click "Run" to test your code at any time, and "Submit" when you're confident in your solution.</p>
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
        title: "And I'll write your name",
        text: `
            <p>You run out past the crowds with your mighty exclamation point, and behind all the blank fog, you make out what seems to be a tall building with blank walls. Taylor's inside.</p>
            <p>Shout across the wall to tell Taylor what your name is. Feel free to pick any name you like, but this choice will be irreversible!</p>
            <p>By the way, the <em>stack</em> is like a stack of paper. The last thing that you put on the stack will be the first thing you pick up. </p>
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
        title: "A blank space",
        text: `
            <p>Congratulations! You've saved Taylor Swift from Scooter Braun and also learned Whitespace along the way.</p>
            <p>Though Taylor is saved, the blank world that Scooter created is still around, so you're still stuck programming with tabs, spaces, and new lines. But at least you now have the freedom to make whatever you like! Have fun!</p>
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