const LEVELS = [
    {},
    {
        title: "It's a cruel summer",
        text: _ => `
            <p>Taylor Swift is on her Eras Tour, and she's making a surprise stop in Tacoma just in time for Mathcamp! The crowd goes wild as she sings,</p>
            <p>"Got a long list of ex-lovers, they'll tell&mdash;" </p>
            <p>All of a sudden, the lights go out. Scooter Braun appears on stage, and proclaims, "There is nothing I do better than revenge... mwa ha ha ha!" He kidnapped her!</p>

            <p>The venue spontaneously combusts into nothing but a sea of blank space, fog as far as the eye can see. And it's your job to save Taylor from her predicament!</p>
            
            <p>Whitespace is an esoteric programming language that only uses <span class='tab'>&nbsp;tab&nbsp;</span>, <span class='space'>&nbsp;space&nbsp;</span>, and <span class='lf'>&nbsp;new&nbsp;line&nbsp;</span> as meaningful characters. All other characters are ignored and may be used for comments, and the commands pane will automatically insert some helpful comments, though you are welcome (and encouraged) to add more. If you have trouble differentiating the colors on this page, feel free to pick your own in the upper-right corner.</p>

            <p>First, you need to push yourself out of the crowd. Using the tools you have, figure out a way to output an exclamation point.</p>
            
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
        title: "And I'll write your name",
        text: _ => `
            <p>You run out past the crowds with your mighty exclamation point, and behind all the blank fog, you make out what seems to be a tall building with blank walls. Taylor's inside.</p>
            <p>Shout across the wall to tell Taylor what your name is. Feel free to pick any name you like, but this choice will be irreversible!</p>
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
        title: "And they said speak now",
        text: data => `
            <p>The wall is thick and you can barely make out Taylor's muffled reply. "${data.player_name}," she says, "I..." The voice is almost inaudible behind all the commotion of the concert. But don't panic. You realize that you can make a hearing aid from the blank fog!</p>
            <p>Listen to each character that Taylor says, then repeat it back to her.</p>
            <p>The <em>heap</em> is where you can store things. You need to specify an <em>address</em> for every item you store, which can just be any number you like.</p>
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
        title: "I'm only 17, I don't know anything",
        text: data => `
            <p>"${data.player_name}, can you tell me your age first?" The words clear up, now that you have your hearing aid. Taylor says that she really appreciates your generosity, but that really young kids might cause more trouble than help.</p>
            <p>She will ask, "Are you <em>x</em> years old?" by just saying the number <em>x</em>. Since people who are 17 "don't know anything" (<em>betty</em>) but you "know everything at 18" (<em>Nothing New</em>), feign being 18 whether you really are or not, and reply "y" for yes and "n" for no.</p>
            <p>A <em>label</em> can be any number. These are points in your code that you can jump to from elsewhere. </p>
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
    // {
    //     title: "Are you ready for it?",
    //     text: _ => `
    //         <p>"Okay, I guess 17 is fine. Here's the plan," she says. "We'll count down together and then on zero, we'll both punch this wall as hard as we can." Apparently, the wall is made of plywood and it's fairly easy to break.</p>
    //         <p>After Taylor says the starting number, begin counting down with her.</p>
    //     `,
    //     examples: [
    //         {
    //             input: "5",
    //             output: "43210",
    //         },
    //     ],
    //     tests: [],
    // },
    {
        title: "A blank space",
        text: _ => `
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