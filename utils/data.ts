import { Product } from "../typings";

// fake data for dev
const data: { products: Product[] } = {
  products: [
    {
      id: 1,
      title: "Rick Sanchez",
      description:
        "Rick Sanchez of Dimension C-137, commonly referred to as Rick C-137, is the titular main protagonist of the Rick and Morty franchise, serving as the titular central antagonist of Rick and Morty and a mentioned character in the spin-off prequel miniseries, Vindiocators 2: Lost Stand Between Earth and Doom.",
      price: 5.99,
      img: "rick.svg",
      slug: "rick-sanchez",
      categories: ["Rick & Morty"],
    },
    {
      id: 2,
      title: "Morty Smith",
      description:
        'Mortimer "Morty" Smith Sr. of the Prime Universe/Cronenberged Dimension is the titular deuteragonist of Rick and Morty. He is also one of the five main characters of Rick and Morty.',
      price: 5.99,
      img: "morty.svg",
      slug: "morty-smith",
      categories: ["Rick & Morty"],
    },
    {
      id: 3,
      title: "Finn",
      description:
        "Finn Mertens (also called Finn the Human, Pen in the original short, and identified as P-G-8-7 Mertens) is the main protagonist in Adventure Time.",
      price: 5.99,
      img: "finn.svg",
      slug: "finn",
      categories: ["Adventure Time"],
    },
    {
      id: 4,
      title: "Ice King",
      description:
        "Simon Petrikov, formerly known as the Ice King, is a major character in Adventure Time.",
      price: 5.99,
      img: "ice-king.svg",
      slug: "ice-king",
      categories: ["Adventure Time"],
    },
    {
      id: 5,
      title: "Lumpy",
      description:
        "Lumpy Space Princess (possibly known as Lumpy Space Queen and often referred to by her initials, LSP) is the queen of Lumpy Space. ",
      price: 5.99,
      img: "lumpy-space-princess.svg",
      slug: "lumpy-space-princess",
      categories: ["Adventure Time"],
    },
    {
      id: 6,
      title: "Jake",
      description:
        'Jake (full title: Jake the Dog) is the deuteragonist of Adventure Time. He is a dog/shape-shifter hybrid, referred to by others as a "magical dog" and Finn\'s constant companion, best friend, and adoptive brother.',
      price: 5.99,
      img: "jake.svg",
      slug: "jake",
      categories: ["Adventure Time"],
    },
    {
      id: 7,
      title: "Marceline",
      description:
        "Marceline Abadeer (full title: Marceline the Vampire Queen) is one of the main characters in Adventure Time and the main protagonist of the miniseries Stakes.",
      price: 5.99,
      img: "marceline.svg",
      slug: "marceline",
      categories: ["Adventure Time"],
    },
    {
      id: 8,
      title: "Princess Bubblegum",
      description:
        'Princess Bonnibel "Bonnie" Bubblegum (often called PB and occasionally Peebles, Bub-Bubs, or P-Bubs) is one of the main characters of the series Adventure Time and first appeared in the animated short.',
      price: 5.99,
      img: "princess-bubblegum.svg",
      slug: "princess-bubblegum",
      categories: ["Adventure Time"],
    },
    {
      id: 9,
      title: "Bill Cipher",
      description:
        "Bill Cipher was a triangular inter-dimensional demon, formerly existent only in the mindscape before succeeding in gaining access to the real world. He had been running amok in Gravity Falls, Oregon since being summoned by Stanford Pines over thirty years ago, and was also known for his mysterious demeanor and sadistic humor.",
      price: 5.99,
      img: "bill-cipher.svg",
      slug: "bill-cipher",
      categories: ["Gravity Falls"],
    },
    {
      id: 10,
      title: "Brave",
      description:
        "Brave is a 2012 American 3D CGI computer-animated adventure fantasy film Pixar Animation Studios produced, which was distributed by Walt Disney Pictures.",
      price: 5.99,
      img: "brave.svg",
      slug: "brave",
      categories: ["Brave", "Pixar", "Disney"],
    },
    {
      id: 11,
      title: "Brutus",
      description:
        "Brutus is a character that first appeared in the Popeye the Sailor TV series from 1960, an enemy of Popeye.",
      price: 5.99,
      img: "brutus.svg",
      slug: "brutus",
      categories: ["Popeye"],
    },
    {
      id: 12,
      title: "Cheburashka",
      description:
        "Cheburashka, also known as Topple in earlier English translations, is a character in children's literature, from a 1965 story by the Russian writer Eduard Uspensky.",
      price: 5.99,
      img: "cheburashka.svg",
      slug: "cheburashka",
      categories: ["Cheburashka"],
    },
    {
      id: 13,
      title: "Genie",
      description:
        'The Genie is the tritagonist of Disney\'s 1992 animated feature film, Aladdin. He is a comedic, larger-than-life spirit (a "jinni") who acts as a servant to whomever holds ownership of the magic lamp in which he resides. ',
      price: 5.99,
      img: "genie.svg",
      slug: "genie",
      categories: ["Aladdin", "Disney"],
    },
    {
      id: 14,
      title: "Ariel",
      description:
        "Ariel is the protagonist of Disney's 1989 animated feature film, The Little Mermaid. She is the seventh and youngest daughter of King Triton and Queen Athena, rulers of the undersea kingdom of Atlantica. Ariel lived through much of her young life with a passionate - yet forbidden - admiration of the human world, and longed to someday experience life on the surface.",
      price: 5.99,
      img: "ariel.svg",
      slug: "ariel",
      categories: ["The Little Mermaid", "Disney"],
    },
    {
      id: 15,
      title: "Ninja Turtle",
      description:
        "Ninja Turtles are a team of four teenage turtles and their allies, who were trained by their sensei in the art of ninjitsu and named after four Renaissance artists. From their home in the storm sewers of New York City, they battle petty criminals, evil overlords, the Foot Clan, and Kraang alien invaders, all while remaining isolated from society (for the most part) to make sure that they don't become experimental fugitives.",
      price: 5.99,
      img: "ninja-turtle.svg",
      slug: "ninja-turtle",
      categories: ["Teenage Mutant Ninja Turtles"],
    },
    {
      id: 16,
      title: "Olive Oyl",
      description:
        "Olive Oyl is the love interest of both Popeye the Sailor and Bluto (mainly Popeye though).",
      price: 5.99,
      img: "olive-oyl.svg",
      slug: "olive-oyl",
      categories: ["Popeye"],
    },
    {
      id: 17,
      title: "Popeye",
      description:
        "Popeye is the main protagonist of the Popeye franchise, a sailor character created in 1929 by Elzie Crisler Segar for his Thimble Theatre comic strip (subsequently renamed after Popeye himself). ",
      price: 5.99,
      img: "popeye.svg",
      slug: "popeye",
      categories: ["Popeye"],
    },
    {
      id: 18,
      title: "Sailor Moon",
      description:
        "Usagi Tsukino is the Sailor Guardian of love and justice: Sailor Moon (セーラームーン, Seeraa Muun). She is the reincarnation of Princess Serenity (プリンセス・セレニティ;Purinsesu Sereniti) and the titular character of the Pretty Guardian Sailor Moon manga.",
      price: 5.99,
      img: "sailor-moon.svg",
      slug: "sailor-moon",
      categories: ["Sailer Moon", "Manga", "Anime"],
    },
    {
      id: 19,
      title: "Son Goku",
      description:
        "Son Goku is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. Originally sent to Earth as an infant, Kakarot would be adopted by Grandpa Gohan who named him Son Goku. A head injury at an early age alters Goku's memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth's greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
      price: 5.99,
      img: "goku.svg",
      slug: "goku",
      categories: ["Dragon Ball", "Manga", "Anime"],
    },
    {
      id: 20,
      title: "Stitch",
      description:
        "Stitch, also known as Experiment 626, is one of the titular protagonists of the Lilo & Stitch franchise. He is an illegal genetic experiment created by Jumba Jookiba, whose primary function is to destroy everything he touches. He is designed to be abnormally strong, virtually indestructible, super-intelligent, and very mischievous. His one true place is with Lilo and her ohana.",
      price: 5.99,
      img: "stitch.svg",
      slug: "stitch",
      categories: ["Lilo & Stitch", "Disney"],
    },
    {
      id: 21,
      title: "Woody Woodpecker",
      description:
        "Woody Woodpecker is an animated cartoon character, an anthropomorphic red-headed woodpecker who appeared in theatrical short films produced by the Walter Lantz animation studio and distributed by Universal Studios. Though not the first of the screwball characters that became popular in the 1940s, Woody is perhaps the most indicative of the type.",
      price: 5.99,
      img: "woody-woodpecker.svg",
      slug: "woody-woodpecker",
      categories: ["Woody Woodpecker"],
    },
    {
      id: 22,
      title: "Luxo Jr",
      description:
        "Luxo Jr. is Pixar's mascot and the star of the 1986 short film of the same name. He is a small, light gray desk lamp (although he has sometimes looked more white than light gray) who loves to play with bouncy balls.",
      price: 5.99,
      img: "luxo-jr.svg",
      slug: "luxo-jr",
      categories: ["Pixar", "Disney"],
    },
    {
      id: 23,
      title: "Batman",
      description:
        'Batman is a superhero published by DC Comics. Operating in Gotham City, he serves as its protector, using the symbol of a bat to strike fear into the hearts of criminals. Unlike other superheroes, Batman is often depicted to lack any "superpowers", instead using lifelong training and equipment to fight crime. ',
      price: 5.99,
      img: "batman.svg",
      slug: "batman",
      categories: ["Batman", "DC"],
    },
    {
      id: 24,
      title: "The Joker",
      description:
        "The Joker is a supervillain and the archenemy of Batman. First introduced in Batman #1 (Spring 1940), he was originally a criminal mastermind with a devious sense of humor.",
      price: 5.99,
      img: "the-joker.svg",
      slug: "the-joker",
      categories: ["Batman", "DC"],
    },
    {
      id: 25,
      title: "The Flash",
      description:
        "Barry Allen is the fastest man alive, and the second speedster to be called the Flash. Using his super-speed powers, he taps into the Speed Force and becomes a costumed crime-fighter. He is a founding member of the Justice League.",
      price: 5.99,
      img: "the-flash.svg",
      slug: "the-flash",
      categories: ["Flash", "DC"],
    },
    {
      id: 26,
      title: "Sonic the Hedgehog",
      description:
        "Sonic the Hedgehog is an anthropomorphic hedgehog born with the ability to run faster than the speed of sound, hence his name, and possesses lightning-fast reflexes to match his speed. As his species implies, Sonic can also roll up into a concussive ball, primarily to attack enemies.",
      price: 5.99,
      img: "sonic.svg",
      slug: "sonic",
      categories: ["Sonic the Hedgehog", "Sega"],
    },
    {
      id: 27,
      title: "Mario",
      description:
        "Mario is the overall protagonist of the long-running and highly successful Nintendo video game franchise series with the same name. He is a mustached Italian plumber who lives in the Mushroom Kingdom.",
      price: 5.99,
      img: "mario.svg",
      slug: "mario",
      categories: ["Mario", "Nintendo"],
    },
    {
      id: 28,
      title: "Beast",
      description:
        "Beast is a mutant that has the ability to transform into a blue skinned creature with fangs and claws. He was one of Charles Xavier's students and was also a teacher in the Xavier Institute.",
      price: 5.99,
      img: "beast.svg",
      slug: "beast",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 29,
      title: "Black Panther",
      description:
        "The Black Panther, King T'Challa was the King of Wakanda and the eldest child of T'Chaka and Ramonda who was chosen to be the holder of the Black Panther mantle.",
      price: 5.99,
      img: "black-panther.svg",
      slug: "black-panther",
      categories: ["Black Panther", "Marvel"],
    },
    {
      id: 30,
      title: "Captain America",
      description:
        "Captain America was rejected by the U.S. Army during World War II due to numerous health problems. He ultimately volunteered for Project Rebirth where he received the Super-Soldier Serum developed by Dr. Abraham Erskine. The serum greatly enhanced his frail body to the peak of human physicality.",
      price: 5.99,
      img: "captain-america.svg",
      slug: "captain-america",
      categories: ["Captain America", "Marvel"],
    },
    {
      id: 31,
      title: "Cyclops",
      description:
        "Cyclops is a mutant with the ability to fire destructive optic beams from his eyes.As the first X-Man Cyclops, he has ascended from super hero field leader to a mutant revolutionary icon. The firstborn son of Major Chris Summers, Scott and his brother Alex witnessed the apparent murder of their parents by the Shi'ar Emperor D'ken. As an introspective orphan and in the clutches of the nefarious Mister Sinister, his mutant abilities first manifested. After escaping Sinister's orphanage, Summers was rescued by Professor Xavier, a fellow mutant who ran a school aimed at helping mutants to control their uncanny abilities.",
      price: 5.99,
      img: "cyclops.svg",
      slug: "cyclops",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 32,
      title: "Deadpool",
      description:
        "Deadpool is very comedic, although this appears to be caused in part by his mental illness. He is quick to act without thinking and is very impulsive. Deadpool used to present a morally grey personality, with no problem of disregarding other people.",
      price: 5.99,
      img: "deadpool.svg",
      slug: "deadpool",
      categories: ["Deadpool", "Marvel"],
    },
    {
      id: 33,
      title: "Gambit",
      description:
        "Remy LeBeau has a reputation as the charming thief Gambit with the mutant ability to charge inanimate objects and cause them to explode. Born in the Thieves Guild, Gambit's dark path led him to become a secret agent for the atrocious Mister Sinister. After befriending fellow mutant thief, Storm, he was invited to the X-Men, and had the opportunity to redeem himself.",
      price: 5.99,
      img: "gambit.svg",
      slug: "gambit",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 34,
      title: "Groot",
      description:
        "Groot is a Flora colossus and the accomplice of Rocket Raccoon. Together, the pair had traveled the galaxy picking up bounties until they met Star-Lord and Gamora just before the four of them were captured and put into the Kyln, where they also met Drax the Destroyer.",
      price: 5.99,
      img: "groot.svg",
      slug: "groot",
      categories: ["Guardians of the Galaxy", "Marvel"],
    },
    {
      id: 35,
      title: "Hulk",
      description:
        'Hulk is an American theoretical physicist, famed for his work into the studies of nuclear physics and gamma radiation.He was recruited by General Thaddeus "Thunderbolt" Ross and the US Army to develop the first Gamma Bomb. During its first live test he was bombarded with a massive dose of gamma rays while saving Rick Jones, a kid who was out on the test site. He was mutated into a green behemoth, the living personification of rage, fueled by pure physical strength and would come to be known as the near mindless "Incredible Hulk".',
      price: 5.99,
      img: "hulk.svg",
      slug: "hulk",
      categories: ["Hulk", "Marvel"],
    },
    {
      id: 36,
      title: "Human Torch",
      description:
        "The Human Torch is an American superpowered adventurer. He was a high school student[19] before he was exposed to high levels of cosmic radiation when his older sister Sue Storm's boyfriend, scientist Dr. Reed Richards, took them and pilot Ben Grimm into space in the stolen rocket Marvel-1. The radiation mutated the group, transforming Johnny's entire body into a fiery, plasma-like state. Together they became the Fantastic Four, a team of adventurers who explored space, time and alternate dimensions and saved the world along the way from science-based threats.",
      price: 5.99,
      img: "human-torch.svg",
      slug: "human-torch",
      categories: ["Fantastic Four", "Marvel"],
    },
    {
      id: 37,
      title: "Iron Man",
      description:
        "The Human Torch is an American superpowered adventurer. He was a high school student before he was exposed to high levels of cosmic radiation when his older sister Sue Storm's boyfriend, scientist Dr. Reed Richards, took them and pilot Ben Grimm into space in the stolen rocket Marvel-1. The radiation mutated the group, transforming Johnny's entire body into a fiery, plasma-like state. Together they became the Fantastic Four, a team of adventurers who explored space, time and alternate dimensions and saved the world along the way from science-based threats.",
      price: 5.99,
      img: "iron-man.svg",
      slug: "iron-man",
      categories: ["Iron Man", "Marvel"],
    },
    {
      id: 38,
      title: "Jean Grey",
      description:
        "Jean Elaine Grey is an evolved mutant with powerful telekinetic and telepathic abilities, further enhanced by the cosmic energies of the Phoenix Force. She studied at Xavier's School for Gifted Youngsters and trained as a second-generation member of the X-Men under the tutelage of Professor X.",
      price: 5.99,
      img: "jean-grey.svg",
      slug: "jean-grey",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 39,
      title: "Magneto",
      description:
        "Magneto is a mutant with the ability to manipulate magnetic fields to his will and control metallic objects. He was a founding member of the X-Men, but left the group to form the Brotherhood of Mutants, which became a rival organization to the X-Men.",
      price: 5.99,
      img: "magneto.svg",
      slug: "magneto",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 39,
      title: "Mystique",
      description:
        "Mystique was a mutant with the ability to shapeshift into anyone.",
      price: 5.99,
      img: "mystique.svg",
      slug: "mystique",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 40,
      title: "Professor X",
      description:
        "Professor X is a mutant, the leader and creator of the X-Men and the founder of the Xavier School for Gifted Youngsters and one of the most powerful telepaths in the world. His dream of a peaceful coexistence between mutants and humanity has long been the driving force for the X-Men.",
      price: 5.99,
      img: "professor-x.svg",
      slug: "professor-x",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 41,
      title: "Punisher",
      description:
        "Punisher is a former United States Marine-turned-vigilante.",
      price: 5.99,
      img: "punisher.svg",
      slug: "punisher",
      categories: ["Punisher", "Marvel"],
    },
    {
      id: 42,
      title: "Spider Man",
      description:
        "Spider Man is a superhero who has appeared in all forms of Spider-Man media, and many comic book series published by Marvel Comics.",
      price: 5.99,
      img: "spider-man.svg",
      slug: "spider-man",
      categories: ["Spider-Man", "Marvel"],
    },
    {
      id: 43,
      title: "Storm",
      description:
        "Ororo Munroe is a powerful mutant with weather-manipulating abilities, prestigiously known as the windriding Storm.",
      price: 5.99,
      img: "storm.svg",
      slug: "storm",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 43,
      title: "Thor",
      description:
        "Thor Odinson is the Asgardian God of Thunder, the former king of both Asgard and New Asgard, a founding member of the Avengers, and a former member of the Guardians of the Galaxy.",
      price: 5.99,
      img: "thor.svg",
      slug: "thor",
      categories: ["Thor", "Marvel"],
    },
    {
      id: 44,
      title: "Venom",
      description:
        "The symbiote that would be later known as the Venom Symbiote was spawned at some point during the reign of the dark elder god Knull.",
      price: 5.99,
      img: "venom.svg",
      slug: "venom",
      categories: ["Spider-Man", "Marvel"],
    },
    {
      id: 45,
      title: "Wolverine",
      description:
        "Cursed with a berserker fury, the violent mutant known as Wolverine has a reputation of both as an outstanding super hero and as a lethal killer. ",
      price: 5.99,
      img: "wolverine.svg",
      slug: "wolverine",
      categories: ["X-Men", "Marvel"],
    },
    {
      id: 46,
      title: "Harry Potter",
      description:
        "Harry Potter  was an English half-blood wizard, and one of the most famous wizards of modern times.",
      price: 5.99,
      img: "harry-potter.svg",
      slug: "harry-potter",
      categories: ["Harry Potter"],
    },
    {
      id: 47,
      title: "Chucky",
      description:
        "Chucky is a killer Good Guy doll, that had his soul transferred into the doll by using voodoo. Despite his small size, Chucky has the strength of a full grown man.",
      price: 5.99,
      img: "chucky.svg",
      slug: "chucky",
      categories: ["Child's Play"],
    },
    {
      id: 48,
      title: "Jason Voorhees",
      description:
        "Jason Voorhees was an almost completely silent, undead and seemingly unstoppable killing machine. Jason was an iconic madman who haunts Camp Crystal Lake and the surrounding area, driven to slaughter anyone he encounters by a burning need to avenge the death of his beloved mother, Pamela Voorhees.",
      price: 5.99,
      img: "jason-voorhees.svg",
      slug: "jason-voorhees",
      categories: ["Friday the 13th"],
    },
    {
      id: 49,
      title: "Pennywise",
      description:
        "Pennywise is the secondary antagonist of the Stephen King multiverse.",
      price: 5.99,
      img: "pennywise.svg",
      slug: "pennywise",
      categories: ["IT"],
    },
    {
      id: 50,
      title: "Scream",
      description:
        "Scream is a 1996 horror film directed by Wes Craven and written by Kevin Williamson. The film revitalized the slasher film genre in the mid 1990s, similar to the impact Halloween (1978) had on horror in the late 70s and 80s.",
      price: 5.99,
      img: "scream.svg",
      slug: "scream",
      categories: ["Scream"],
    },
    {
      id: 51,
      title: "Walter White",
      description:
        "Walter Hartwell \"Walt\" White Sr., also known by his clandestine pseudonym and business moniker Heisenberg and also frequently referred to as Mr. White, is a former chemist and major narcotics distributor from Albuquerque, New Mexico, whose drug empire became the largest meth operation in American history, surpassing both Gustavo Fring's drug empire and the Cartel's.",
      price: 5.99,
      img: "walter-white.svg",
      slug: "walter-white",
      categories: ["Breaking bad"],
    },
    {
      id: 52,
      title: "Naruto",
      description:
        "Naruto Uzumaki is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood.",
      price: 5.99,
      img: "naruto.svg",
      slug: "naruto",
      categories: ["Naruto"],
    },
    {
      id: 53,
      title: "Baby Yoda",
      description:
        "Grogu was a male Force-sensitive Mandalorian belonging to the same mysterious species as the legendary Grand Master Yoda.",
      price: 5.99,
      img: "baby-yoda.svg",
      slug: "baby-yoda",
      categories: ["Star Wars"],
    },
    {
      id: 54,
      title: "C-3PO",
      description:
        "C-3PO (See-Threepio) was a 3PO-series protocol droid designed to interact with organics, programmed primarily for etiquette and protocol.",
      price: 5.99,
      img: "c-3po.svg",
      slug: "c-3po",
      categories: ["Star Wars"],
    },
    {
      id: 55,
      title: "Darth Vader",
      description:
        "Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era.",
      price: 5.99,
      img: "darth-vader.svg",
      slug: "darth-vader",
      categories: ["Star Wars"],
    },
    {
      id: 56,
      title: "R2-D2",
      description:
        "R2-D2, pronounced Artoo-Detoo and often referred to as R2 (Artoo), was an R2-series astromech droid manufactured by Industrial Automaton with masculine programming.",
      price: 5.99,
      img: "r2-d2.svg",
      slug: "r2-d2",
      categories: ["Star Wars"],
    },
    {
      id: 57,
      title: "Stormtrooper",
      description:
        'Stormtroopers (STs)—known as Imperial stormtroopers or TK stormtroopers, and colloquially referred to as "bucketheads"—were the elite shock troops of the Galactic Empire and were part of the Stormtrooper Corps, an independent paramilitary branch operating under the Imperial Army.',
      price: 5.99,
      img: "stormtrooper.svg",
      slug: "stormtrooper",
      categories: ["Star Wars"],
    },
    {
      id: 58,
      title: "Neo",
      description:
        "Neo is a former bluepill rescued by Morpheus together with the crew of the Nebuchadnezzar. As a redpill, he was prophesied by The Oracle to be The One and was set out on a course to free humanity from the Matrix and to ultimately end the centuries-long Machine War.",
      price: 5.99,
      img: "neo.svg",
      slug: "neo",
      categories: ["Matrix"],
    },
    {
      id: 59,
      title: "Bart Simpson",
      description:
        'Bartholomew Simpson is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.',
      price: 5.99,
      img: "bart-simpson.svg",
      slug: "bart-simpson",
      categories: ["The Simpsons"],
    },
    {
      id: 60,
      title: "Homer Simpson",
      description:
        "Homer Jay Simpson is the main protagonist of The Simpsons series. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight, lazy, and often ignorant to the world around him.",
      price: 5.99,
      img: "homer-simpson.svg",
      slug: "homer-simpson",
      categories: ["The Simpsons"],
    },
  ],
};

export default data;
