const characters = [
  {
    name: "Dexter",
    cartoon_id: 1,
    img_url:
      "https://static.wikia.nocookie.net/dexterslab/images/f/f9/DexterS1-2.png/revision/latest/scale-to-width-down/430?cb=20210813225110",
  },
  {
    name: "Dee Dee",
    cartoon_id: 1,
    img_url:
      "https://static.wikia.nocookie.net/dexterslab/images/9/9c/Dex_deedee_174x252.png/revision/latest/scale-to-width-down/174?cb=20120504110916",
  },
  {
    name: "Mandark",
    cartoon_id: 1,
    img_url:
      "https://static.wikia.nocookie.net/dexterslab/images/0/09/Dex_mandark_174x252.png/revision/latest/scale-to-width-down/174?cb=20120504111005",
  },
  {
    name: "Mom (Dexter's Lab)",
    cartoon_id: 1,
    img_url:
      "https://static.wikia.nocookie.net/dexterslab/images/7/72/Dex_mom_174x252.png/revision/latest?cb=20120504110948",
  },
  {
    name: "Dad (Dexter's Lab)",
    cartoon_id: 1,
    img_url:
      "https://static.wikia.nocookie.net/dexterslab/images/7/72/Dex_mom_174x252.png/revision/latest?cb=20120504110948",
  },
  {
    name: "Cow",
    cartoon_id: 2,
    img_url:
      "https://static.wikia.nocookie.net/cowandchicken/images/e/e2/Cow_300-1-.gif/revision/latest/scale-to-width-down/200?cb=20110331122902",
  },
  {
    name: "Chicken",
    cartoon_id: 2,
    img_url:
      "https://static.wikia.nocookie.net/cowandchicken/images/6/6a/Chicken_300-1-.gif/revision/latest/scale-to-width-down/160?cb=20110331122813",
  },
  {
    name: "Red Guy",
    cartoon_id: 2,
    img_url:
      "https://static.wikia.nocookie.net/cowandchicken/images/7/7a/Red_Guy_300-1-.gif/revision/latest/scale-to-width-down/428?cb=20110331122558",
  },
  {
    name: "I. M. Weasel",
    cartoon_id: 2,
    img_url:
      "https://static.wikia.nocookie.net/cowandchicken/images/2/29/IAW.png/revision/latest/scale-to-width-down/300?cb=20130829084838",
  },
  {
    name: "I. R. Baboon",
    cartoon_id: 2,
    img_url:
      "https://static.wikia.nocookie.net/cowandchicken/images/1/1a/I.R._Baboon_301-1-.gif/revision/latest?cb=20130907093842",
  },
  {
    name: "Buttercup",
    cartoon_id: 3,
    img_url:
      "https://static.wikia.nocookie.net/powerpuff/images/1/14/Buttercup-pic.png/revision/latest/scale-to-width-down/299?cb=20190329151511",
  },
  {
    name: "Bubbles",
    cartoon_id: 3,
    img_url:
      "https://static.wikia.nocookie.net/powerpuff/images/7/7b/Bubbles-pic.png/revision/latest/scale-to-width-down/300?cb=20190329151545",
  },
  {
    name: "Blossom",
    cartoon_id: 3,
    img_url:
      "https://static.wikia.nocookie.net/powerpuff/images/2/23/Blossom-pic.png/revision/latest?cb=20190329151816",
  },
  {
    name: "Mojo Jojo",
    cartoon_id: 3,
    img_url:
      "https://static.wikia.nocookie.net/powerpuff/images/3/34/Mojo_Jojo.png/revision/latest/scale-to-width-down/491?cb=20080723224208",
  },
  {
    name: "Professor Utonium",
    cartoon_id: 3,
    img_url:
      "https://static.wikia.nocookie.net/powerpuff/images/3/34/Mojo_Jojo.png/revision/latest/scale-to-width-down/491?cb=20080723224208",
  },
  {
    name: "Courage",
    cartoon_id: 4,
    img_url:
      "https://static.wikia.nocookie.net/courage/images/4/46/New_Courage.png/revision/latest/scale-to-width-down/1000?cb=20200912151506",
  },
  {
    name: "Muriel Bagge",
    cartoon_id: 4,
    img_url:
      "https://static.wikia.nocookie.net/courage/images/d/d9/Muriel_Bagge.png/revision/latest?cb=20181025053335",
  },
  {
    name: "Eustace Bagge",
    cartoon_id: 4,
    img_url:
      "https://static.wikia.nocookie.net/courage/images/a/ac/Eustace_Bagge.png/revision/latest?cb=20181025053335",
  },
  {
    name: "Mattress Demon",
    cartoon_id: 4,
    img_url:
      "https://static.wikia.nocookie.net/courage/images/4/4d/Mattress_Demon.png/revision/latest/scale-to-width-down/580?cb=20180213021122",
  },
  {
    name: "Jean Bon",
    cartoon_id: 4,
    img_url:
      "https://static.wikia.nocookie.net/courage/images/2/2b/Jean_bon.png/revision/latest/scale-to-width-down/515?cb=20130722160723",
  },
  {
    name: "Ed",
    cartoon_id: 5,
    img_url:
      "https://static.wikia.nocookie.net/edwikia/images/7/7c/Ed.1.png/revision/latest?cb=20220205144239",
  },
  {
    name: "Edd",
    cartoon_id: 5,
    img_url:
      "https://static.wikia.nocookie.net/edwikia/images/7/72/Edd.1.png/revision/latest/scale-to-width-down/501?cb=20220205143227",
  },
  {
    name: "Eddy",
    cartoon_id: 5,
    img_url:
      "https://static.wikia.nocookie.net/edwikia/images/c/cd/Eddy.png/revision/latest/scale-to-width-down/565?cb=20220205143725",
  },
  {
    name: "Nazz",
    cartoon_id: 5,
    img_url:
      "https://static.wikia.nocookie.net/edwikia/images/a/af/Nazz.1.png/revision/latest/scale-to-width-down/1000?cb=20200903171325",
  },
  {
    name: "Jonny 2x4",
    cartoon_id: 5,
    img_url:
      "https://static.wikia.nocookie.net/edwikia/images/9/9a/Jonny2x4.png/revision/latest/scale-to-width-down/1000?cb=20200903170743",
  },
  {
    name: "Fred",
    cartoon_id: 6,
    img_url:
      "https://static.wikia.nocookie.net/flinstones/images/e/ee/The_Flintstones_-_Character_Profile_Image_-_Fred_Flintstone.png/revision/latest/scale-to-width-down/517?cb=20200128031714",
  },
  {
    name: "Wilma",
    cartoon_id: 6,
    img_url:
      "https://static.wikia.nocookie.net/flinstones/images/9/97/Wilma_Flintstone.png/revision/latest?cb=20200128032331",
  },
  {
    name: "Barney",
    cartoon_id: 6,
    img_url:
      "https://static.wikia.nocookie.net/flinstones/images/e/e2/Barney_Rubble.png/revision/latest?cb=20200122235857",
  },
  {
    name: "Bambam",
    cartoon_id: 6,
    img_url:
      "https://static.wikia.nocookie.net/flinstones/images/6/64/The_Flintstones_-_Character_Profile_Image_-_Bamm-Bamm_Rubble.png/revision/latest?cb=20200722212035",
  },
  {
    name: "Pebbles",
    cartoon_id: 6,
    img_url:
      "https://static.wikia.nocookie.net/flinstones/images/f/ff/The_Flintstones_-_Character_Profile_Image_-_Pebbles_Flintstone.png/revision/latest/scale-to-width-down/678?cb=20200722213215",
  },
  {
    name: "Yogi",
    cartoon_id: 7,
    img_url:
      "https://static.wikia.nocookie.net/hanna-barbera/images/1/19/Yogi_Bear.jpg/revision/latest/scale-to-width-down/626?cb=20180801231319",
  },
  {
    name: "Boo-Boo",
    cartoon_id: 7,
    img_url:
      "https://static.wikia.nocookie.net/hanna-barbera/images/6/60/BooBoo.jpg/revision/latest/scale-to-width-down/171?cb=20090503073354",
  },
  {
    name: "Yakky Doodle",
    cartoon_id: 7,
    img_url:
      "https://static.wikia.nocookie.net/hanna-barbera/images/b/ba/Yakky_Doodle_2.png/revision/latest/scale-to-width-down/170?cb=20201026134808",
  },
  {
    name: "Chopper",
    cartoon_id: 7,
    img_url:
      "https://static.wikia.nocookie.net/hanna-barbera/images/0/01/16066987828898893654793975366664.jpg/revision/latest/scale-to-width-down/701?cb=20201130011342",
  },
  {
    name: "Snagglepuss",
    cartoon_id: 7,
    img_url:
      "https://static.wikia.nocookie.net/hanna-barbera/images/5/51/Snagglepuss_1-0.jpg/revision/latest/scale-to-width-down/1000?cb=20150711150858",
  },
  {
    name: "Dick Dastardley",
    cartoon_id: 8,
    img_url:
      "https://static.wikia.nocookie.net/wackyraces/images/a/a8/WW_1.gif/revision/latest/scale-to-width-down/160?cb=20080606085924",
  },
  {
    name: "Muttley",
    cartoon_id: 8,
    img_url:
      "https://static.wikia.nocookie.net/wackyraces/images/1/18/Muttley.jpg/revision/latest/scale-to-width-down/310?cb=20130221221245",
  },
  {
    name: "Penelope Pitstop",
    cartoon_id: 8,
    img_url:
      "https://static.wikia.nocookie.net/wackyraces/images/b/b9/Wr_penelope_8_ape.jpg/revision/latest/scale-to-width-down/1000?cb=20180513162016",
  },
  {
    name: "The Slag Brothers",
    cartoon_id: 8,
    img_url:
      "https://static.wikia.nocookie.net/wackyraces/images/a/ae/Wr_slag_10_free.jpg/revision/latest/scale-to-width-down/1000?cb=20180516172933",
  },
  {
    name: "The Ant Hill Mob",
    cartoon_id: 8,
    img_url:
      "https://static.wikia.nocookie.net/wackyraces/images/e/e9/Wr_ant_10_free.jpg/revision/latest/scale-to-width-down/1000?cb=20180516170309",
  },
  {
    name: "Scooby Doo",
    cartoon_id: 9,
    img_url:
      "https://static.wikia.nocookie.net/scoobydoo/images/5/53/Scooby-Doo.png/revision/latest/scale-to-width-down/1000?cb=20211222210718",
  },
  {
    name: "Daphne",
    cartoon_id: 9,
    img_url:
      "https://static.wikia.nocookie.net/scoobydoo/images/3/37/Daphne-1.jpg/revision/latest/scale-to-width-down/347?cb=20100723063039",
  },
  {
    name: "Shaggy",
    cartoon_id: 9,
    img_url:
      "https://static.wikia.nocookie.net/scoobydoo/images/8/82/Shaggy_Rogers.png/revision/latest/scale-to-width-down/1000?cb=20210426154343",
  },
  {
    name: "Fred",
    cartoon_id: 9,
    img_url:
      "https://static.wikia.nocookie.net/scoobydoo/images/4/47/Fred_Jones.png/revision/latest/scale-to-width-down/1000?cb=20201229021548",
  },
  {
    name: "Velma",
    cartoon_id: 9,
    img_url:
      "https://static.wikia.nocookie.net/scoobydoo/images/1/11/Velma1.jpg/revision/latest/scale-to-width-down/294?cb=20130407022201",
  },
  {
    name: "Papa Smurf",
    cartoon_id: 10,
    img_url:
      "https://static.wikia.nocookie.net/smurfs/images/b/bd/Papa_Smurf123.png/revision/latest/scale-to-width-down/751?cb=20130805130238",
  },
  {
    name: "Smurfette",
    cartoon_id: 10,
    img_url:
      "https://static.wikia.nocookie.net/smurfs/images/b/b7/Smurfette_old.jpg/revision/latest?cb=20090610000054",
  },
  {
    name: "Gargamel",
    cartoon_id: 10,
    img_url:
      "https://static.wikia.nocookie.net/smurfs/images/e/ee/Gargamel_Comic_Book.jpg/revision/latest/scale-to-width-down/274?cb=20111101140813",
  },
  {
    name: "Brainy Smurf",
    cartoon_id: 10,
    img_url:
      "https://static.wikia.nocookie.net/smurfs/images/e/e8/Brainy.jpg/revision/latest?cb=20090609234412",
  },
  {
    name: "Clumsy Smurf",
    cartoon_id: 10,
    img_url:
      "https://static.wikia.nocookie.net/smurfs/images/9/95/Clumsy_1.png/revision/latest/scale-to-width-down/416?cb=20141120070054",
  },
  {
    name: "Kyle Broflovski",
    cartoon_id: 11,
    img_url:
      "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest/scale-to-width-down/753?cb=20190411033301",
  },
  {
    name: "Stan Marsh",
    cartoon_id: 11,
    img_url:
      "https://static.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png/revision/latest?cb=20210107202918",
  },
  {
    name: "Eric Cartman",
    cartoon_id: 11,
    img_url:
      "https://static.wikia.nocookie.net/southpark/images/4/4d/GrandMaster-WizardCartman.transparent.png/revision/latest/scale-to-width-down/433?cb=20170530013757",
  },
  {
    name: "Kenny McCormick",
    cartoon_id: 11,
    img_url:
      "https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest/scale-to-width-down/667?cb=20160409020502",
  },
  {
    name: "Mr Hankey",
    cartoon_id: 11,
    img_url:
      "https://static.wikia.nocookie.net/southpark/images/b/b4/Mr._Hankey_transparent.png/revision/latest?cb=20200812183604",
  },
  {
    name: "Kim Possible",
    cartoon_id: 12,
    img_url:
      "https://static.wikia.nocookie.net/kimpossible/images/4/49/Kim_Possible_Mugshot.png/revision/latest/scale-to-width-down/200?cb=20150728134300",
  },
  {
    name: "Ron Stoppable",
    cartoon_id: 12,
    img_url:
      "https://static.wikia.nocookie.net/kimpossible/images/b/b2/Ron_Stoppable_Mugshot.png/revision/latest/scale-to-width-down/200?cb=20120416162613",
  },
  {
    name: "Shego",
    cartoon_id: 12,
    img_url:
      "https://static.wikia.nocookie.net/kimpossible/images/8/80/Shego_Standing.png/revision/latest/scale-to-width-down/200?cb=20200808202335",
  },
  {
    name: "Dr Drakken",
    cartoon_id: 12,
    img_url:
      "https://static.wikia.nocookie.net/kimpossible/images/d/d3/Dr.Drakken.png/revision/latest/scale-to-width-down/200?cb=20200208094132",
  },
  {
    name: "Rufus",
    cartoon_id: 12,
    img_url:
      "https://static.wikia.nocookie.net/kimpossible/images/6/68/Rufus_Mugshot.png/revision/latest/scale-to-width-down/200?cb=20120415234620",
  },
  {
    name: "Phineas Flynn",
    cartoon_id: 13,
    img_url:
      "https://static.wikia.nocookie.net/phineasandferb/images/e/ea/Profile_-_Phineas_Flynn.PNG/revision/latest/scale-to-width-down/690?cb=20200401182458",
  },
  {
    name: "Ferb Fletcher",
    cartoon_id: 13,
    img_url:
      "https://static.wikia.nocookie.net/phineasandferb/images/c/ca/Profile_-_Ferb_Fletcher.PNG/revision/latest/scale-to-width-down/848?cb=20200401182236",
  },
  {
    name: "Candace Flynn",
    cartoon_id: 13,
    img_url:
      "https://static.wikia.nocookie.net/phineasandferb/images/1/18/Profile_-_Candace_Flynn.png/revision/latest/scale-to-width-down/350?cb=20200401181755",
  },
  {
    name: "Perry the Platypus",
    cartoon_id: 13,
    img_url:
      "https://static.wikia.nocookie.net/phineasandferb/images/6/66/Profile_-_Perry_the_Platypus.PNG/revision/latest/scale-to-width-down/350?cb=20200401182751",
  },
  {
    name: "Dr Heinz Doofenshmirtz",
    cartoon_id: 13,
    img_url:
      "https://static.wikia.nocookie.net/phineasandferb/images/5/5d/Doofenshmirtz_Portrait.jpg/revision/latest/scale-to-width-down/350?cb=20120604014520",
  },
  {
    name: "Huey",
    cartoon_id: 14,
    img_url:
      "https://static.wikia.nocookie.net/scroogemcduck/images/8/82/Huey_Duck_2017.svg/revision/latest/scale-to-width-down/235?cb=20201217181407",
  },
  {
    name: "Dewey",
    cartoon_id: 14,
    img_url:
      "https://static.wikia.nocookie.net/scroogemcduck/images/5/55/Dewey_Duck_2017.svg/revision/latest/scale-to-width-down/305?cb=20201217185237",
  },
  {
    name: "Louie",
    cartoon_id: 14,
    img_url:
      "https://static.wikia.nocookie.net/scroogemcduck/images/2/22/Louie_Duck_2017.svg/revision/latest/scale-to-width-down/330?cb=20201217191057",
  },
  {
    name: "Scrooge McDuck",
    cartoon_id: 14,
    img_url:
      "https://static.wikia.nocookie.net/scroogemcduck/images/1/1e/Scrooge_McDuck_2017.svg/revision/latest/scale-to-width-down/345?cb=20201217172508",
  },
  {
    name: "Webby Vanderquack",
    cartoon_id: 14,
    img_url:
      "https://static.wikia.nocookie.net/scroogemcduck/images/4/4a/Webby_Vanderquack_2017.svg/revision/latest/scale-to-width-down/315?cb=20201218134606",
  },
  {
    name: "Ezra Bridger",
    cartoon_id: 15,
    img_url:
      "https://static.wikia.nocookie.net/starwars/images/3/30/Ezra_HS.png/revision/latest/scale-to-width-down/795?cb=20180829054733",
  },
  {
    name: "Sabine Wren",
    cartoon_id: 15,
    img_url:
      "https://static.wikia.nocookie.net/starwars/images/1/1b/SWR_Sabine_Rebels_Finale.png/revision/latest/scale-to-width-down/917?cb=20180414045912",
  },
  {
    name: "Kanan Jarrus",
    cartoon_id: 15,
    img_url:
      "https://static.wikia.nocookie.net/starwars/images/1/1b/KananJediNight.jpg/revision/latest/scale-to-width-down/500?cb=20180301042558",
  },
  {
    name: "Garazeb 'Zeb' Orrelios",
    cartoon_id: 15,
    img_url:
      "https://static.wikia.nocookie.net/starwars/images/6/6a/ZebOrrelios.png/revision/latest/scale-to-width-down/350?cb=20141103040015",
  },
  {
    name: "Hera Syndulla",
    cartoon_id: 15,
    img_url:
      "https://static.wikia.nocookie.net/starwars/images/d/df/HeraSyndulla-SWS.png/revision/latest/scale-to-width-down/1000?cb=20210321050819",
  },
  {
    name: "Beavis",
    cartoon_id: 16,
    img_url: "",
  },
  {
    name: "Butt-Head",
    cartoon_id: 16,
    img_url: "",
  },
  {
    name: "Mr Manners",
    cartoon_id: 16,
    img_url: "",
  },
  {
    name: "Stewart Stevenson",
    cartoon_id: 16,
    img_url: "",
  },
  {
    name: "Coach Buzzcut",
    cartoon_id: 16,
    img_url: "",
  },
  {
    name: "Daria",
    cartoon_id: 17,
    img_url: "",
  },
  {
    name: "Jane Lane",
    cartoon_id: 17,
    img_url: "",
  },
  {
    name: "Helen",
    cartoon_id: 17,
    img_url: "",
  },
  {
    name: "Jake",
    cartoon_id: 17,
    img_url: "",
  },
  {
    name: "Quinn",
    cartoon_id: 17,
    img_url: "",
  },
  {
    name: "Ren Höek",
    cartoon_id: 18,
    img_url: "",
  },
  {
    name: "Stimpson J. Cat",
    cartoon_id: 18,
    img_url: "",
  },
  {
    name: "George Liquor",
    cartoon_id: 18,
    img_url: "",
  },
  {
    name: "Powdered Toast Man",
    cartoon_id: 18,
    img_url: "",
  },
  {
    name: "Sammy Mantis",
    cartoon_id: 18,
    img_url: "",
  },
  {
    name: "Bart",
    cartoon_id: 19,
    img_url: "",
  },
  {
    name: "Homer",
    cartoon_id: 19,
    img_url: "",
  },
  {
    name: "Bleeding Gums Murphy",
    cartoon_id: 19,
    img_url: "",
  },
  {
    name: "Chief Wiggum",
    cartoon_id: 19,
    img_url: "",
  },
  {
    name: "Mr Burns",
    cartoon_id: 19,
    img_url: "",
  },
  {
    name: "Peter Parker",
    cartoon_id: 20,
    img_url: "",
  },
  {
    name: "Mary Jane",
    cartoon_id: 20,
    img_url: "",
  },
  {
    name: "Dr Octopus",
    cartoon_id: 20,
    img_url: "",
  },
  {
    name: "Eddie Brock",
    cartoon_id: 20,
    img_url: "",
  },
  {
    name: "Dr Connors",
    cartoon_id: 20,
    img_url: "",
  },
  {
    name: "Wolverine",
    cartoon_id: 21,
    img_url: "",
  },
  {
    name: "Jubilee",
    cartoon_id: 21,
    img_url: "",
  },
  {
    name: "Professor X",
    cartoon_id: 21,
    img_url: "",
  },
  {
    name: "Cyclops",
    cartoon_id: 21,
    img_url: "",
  },
  {
    name: "Jean Grey",
    cartoon_id: 21,
    img_url: "",
  },
  { name: "Fry", cartoon_id: 22, img_url: "" },
  {
    name: "Leila",
    cartoon_id: 22,
    img_url: "",
  },
  {
    name: "Zoidberg",
    cartoon_id: 22,
    img_url: "",
  },
  {
    name: "Bender",
    cartoon_id: 22,
    img_url: "",
  },
  {
    name: "Amy Wong",
    cartoon_id: 22,
    img_url: "",
  },
  {
    name: "Hank Hill",
    cartoon_id: 23,
    img_url: "",
  },
  {
    name: "Luanne",
    cartoon_id: 23,
    img_url: "",
  },
  {
    name: "Dale Gribble",
    cartoon_id: 23,
    img_url: "",
  },
  {
    name: "Bobby Hill",
    cartoon_id: 23,
    img_url: "",
  },
  {
    name: "Peggy Hill",
    cartoon_id: 23,
    img_url: "",
  },
  { name: "Bob", cartoon_id: 24, img_url: "" },
  {
    name: "Linda",
    cartoon_id: 24,
    img_url: "",
  },
  {
    name: "Tina",
    cartoon_id: 24,
    img_url: "",
  },
  {
    name: "Gene",
    cartoon_id: 24,
    img_url: "",
  },
  {
    name: "Louise",
    cartoon_id: 24,
    img_url: "",
  },
  {
    name: "Spongebob",
    cartoon_id: 25,
    img_url: "",
  },
  {
    name: "Patrick",
    cartoon_id: 25,
    img_url: "",
  },
  {
    name: "Squidward",
    cartoon_id: 25,
    img_url: "",
  },
  {
    name: "Mr. Krabs",
    cartoon_id: 25,
    img_url: "",
  },
  {
    name: "Plankton",
    cartoon_id: 25,
    img_url: "",
  },
  {
    name: "Tommy",
    cartoon_id: 26,
    img_url: "",
  },
  {
    name: "Angelica",
    cartoon_id: 26,
    img_url: "",
  },
  {
    name: "Chuckie",
    cartoon_id: 26,
    img_url: "",
  },
  {
    name: "Susie",
    cartoon_id: 26,
    img_url: "",
  },
  { name: "Lil", cartoon_id: 26, img_url: "" },
  {
    name: "Doug",
    cartoon_id: 27,
    img_url: "",
  },
  {
    name: "Patti",
    cartoon_id: 27,
    img_url: "",
  },
  {
    name: "Skeeter",
    cartoon_id: 27,
    img_url: "",
  },
  {
    name: "Roger",
    cartoon_id: 27,
    img_url: "",
  },
  {
    name: "Theda",
    cartoon_id: 27,
    img_url: "",
  },
  {
    name: "Arnold",
    cartoon_id: 28,
    img_url: "",
  },
  {
    name: "Helga",
    cartoon_id: 28,
    img_url: "",
  },
  {
    name: "Gerald",
    cartoon_id: 28,
    img_url: "",
  },
  {
    name: "Phil",
    cartoon_id: 28,
    img_url: "",
  },
  {
    name: "Gertrude",
    cartoon_id: 28,
    img_url: "",
  },
  {
    name: "Trommy Turner",
    cartoon_id: 29,
    img_url: "",
  },
  {
    name: "Trixie",
    cartoon_id: 29,
    img_url: "",
  },
  {
    name: "Mr Crocker",
    cartoon_id: 29,
    img_url: "",
  },
  {
    name: "Vicky",
    cartoon_id: 29,
    img_url: "",
  },
  {
    name: "The Crimson Chin",
    cartoon_id: 29,
    img_url: "",
  },
  {
    name: "Penny",
    cartoon_id: 30,
    img_url: "",
  },
  {
    name: "Dennis",
    cartoon_id: 30,
    img_url: "",
  },
  {
    name: "Cousin Tara",
    cartoon_id: 30,
    img_url: "",
  },
];
