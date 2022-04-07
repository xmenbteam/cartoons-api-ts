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
    img_url:
      "https://static.wikia.nocookie.net/beavisandbutthead/images/9/93/Beavis-1.png/revision/latest/scale-to-width-down/534?cb=20120108001944",
  },
  {
    name: "Butt-Head",
    cartoon_id: 16,
    img_url:
      "https://static.wikia.nocookie.net/beavisandbutthead/images/b/b1/Butt-head.png/revision/latest?cb=20120108001808",
  },
  {
    name: "The Great Cornholio",
    cartoon_id: 16,
    img_url:
      "https://static.wikia.nocookie.net/beavisandbutthead/images/8/8d/CORNHOLIO_NEED_HIS_TP.jpg/revision/latest/scale-to-width-down/500?cb=20111118231614",
  },
  {
    name: "Stewart Stevenson",
    cartoon_id: 16,
    img_url:
      "https://static.wikia.nocookie.net/beavisandbutthead/images/7/7a/Stewart.jpeg/revision/latest?cb=20110910035309",
  },
  {
    name: "David Van Driessen",
    cartoon_id: 16,
    img_url:
      "https://static.wikia.nocookie.net/beavisandbutthead/images/7/72/Beavis_he_said_anus.jpg/revision/latest?cb=20110922015543",
  },
  {
    name: "Daria Morgendorffer",
    cartoon_id: 17,
    img_url:
      "https://static.wikia.nocookie.net/daria/images/d/de/Tumblr_lmpq9bwbyP1qj0esdo1_400.jpg/revision/latest/scale-to-width-down/210?cb=20110708181748",
  },
  {
    name: "Jane Lane",
    cartoon_id: 17,
    img_url:
      "https://static.wikia.nocookie.net/daria/images/8/83/Jane_Lane_by_Namelessv1.png/revision/latest/scale-to-width-down/210?cb=20110708183549",
  },
  {
    name: "Jake Morgendorffer",
    cartoon_id: 17,
    img_url:
      "https://static.wikia.nocookie.net/daria/images/1/1a/Jake_Morgendorffer.jpg/revision/latest/scale-to-width-down/308?cb=20080629172317",
  },
  {
    name: "Helen Morgendorffer",
    cartoon_id: 17,
    img_url:
      "https://static.wikia.nocookie.net/daria/images/6/60/Helen_Morgendorffer.jpg/revision/latest/scale-to-width-down/289?cb=20080625001727",
  },
  {
    name: "Quinn Morgendorffer",
    cartoon_id: 17,
    img_url:
      "https://static.wikia.nocookie.net/daria/images/8/8a/Quinn_morgendorffer.jpeg/revision/latest/scale-to-width-down/280?cb=20210322142159",
  },
  {
    name: "Ren Höek",
    cartoon_id: 18,
    img_url:
      "https://static.wikia.nocookie.net/renandstimpy/images/d/d3/IMG_3544.PNG/revision/latest/scale-to-width-down/176?cb=20181113190559",
  },
  {
    name: "Stimpson J. Cat",
    cartoon_id: 18,
    img_url:
      "https://static.wikia.nocookie.net/renandstimpy/images/b/b0/Stimpy2.png/revision/latest/scale-to-width-down/250?cb=20210901153925",
  },
  {
    name: "George Liquor",
    cartoon_id: 18,
    img_url: "",
  },
  {
    name: "Powdered Toast Man",
    cartoon_id: 18,
    img_url:
      "https://static.wikia.nocookie.net/renandstimpy/images/b/b1/Powdered_toastman.png/revision/latest/scale-to-width-down/270?cb=20210815234811",
  },
  {
    name: "Magic Nose Goblins",
    cartoon_id: 18,
    img_url:
      "https://static.wikia.nocookie.net/renandstimpy/images/5/56/Magic_Nose_Goblins.png/revision/latest/scale-to-width-down/350?cb=20160201031120",
  },
  {
    name: "Bart",
    cartoon_id: 19,
    img_url:
      "https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest/scale-to-width-down/250?cb=20190409004756",
  },
  {
    name: "Homer",
    cartoon_id: 19,
    img_url:
      "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437",
  },
  {
    name: "Edna Krabappel",
    cartoon_id: 19,
    img_url:
      "https://static.wikia.nocookie.net/simpsons/images/7/76/Edna_Krabappel.png/revision/latest/scale-to-width-down/230?cb=20201223151255",
  },
  {
    name: "Clancy Wiggum",
    cartoon_id: 19,
    img_url:
      "https://static.wikia.nocookie.net/simpsons/images/0/0e/245px-Chief_Wiggum.png/revision/latest/scale-to-width-down/307?cb=20210701202009",
  },
  {
    name: "Charles Montgomery Burns",
    cartoon_id: 19,
    img_url:
      "https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png/revision/latest/scale-to-width-down/326?cb=20210705202408",
  },
  {
    name: "Peter Parker",
    cartoon_id: 20,
    img_url:
      "https://static.wikia.nocookie.net/spiderman-animated/images/d/d7/679879769.PNG/revision/latest/scale-to-width-down/350?cb=20151112023228",
  },
  {
    name: "Mary Jane",
    cartoon_id: 20,
    img_url:
      "https://static.wikia.nocookie.net/spiderman-animated/images/6/6f/569879789.png/revision/latest/scale-to-width-down/350?cb=20150829155235",
  },
  {
    name: "Dr Octopus",
    cartoon_id: 20,
    img_url:
      "https://static.wikia.nocookie.net/spiderman-animated/images/4/41/689768978.PNG/revision/latest/scale-to-width-down/350?cb=20150904040133",
  },
  {
    name: "Venom/Eddie Brock",
    cartoon_id: 20,
    img_url:
      "https://static.wikia.nocookie.net/spiderman-animated/images/0/09/76866732453.jpg/revision/latest/scale-to-width-down/350?cb=20150813165725",
  },
  {
    name: "Lizard/Dr Curtis Connors",
    cartoon_id: 20,
    img_url:
      "https://static.wikia.nocookie.net/spiderman-animated/images/6/6b/879909734.PNG/revision/latest/scale-to-width-down/350?cb=20160318010506",
  },
  {
    name: "Wolverine",
    cartoon_id: 21,
    img_url:
      "https://static.wikia.nocookie.net/marveldatabase/images/9/98/Wolverine_%28Logan%29_%28Earth-92131%29_X-Men_%2792_Vol_2_1_001.jpg/revision/latest/scale-to-width-down/350?cb=20160418185332",
  },
  {
    name: "Jubilee",
    cartoon_id: 21,
    img_url:
      "https://static.wikia.nocookie.net/marveldatabase/images/a/af/X-Men_%2792_Vol_1_1_Ant-Sized_Variant_%28Back_Cover%29_Textless.jpg/revision/latest/scale-to-width-down/317?cb=20160415185837",
  },
  {
    name: "Professor X",
    cartoon_id: 21,
    img_url:
      "https://static.wikia.nocookie.net/marveldatabase/images/d/df/Charles_Xavier_%28Earth-92131%29_from_X-Men_%2792_Vol_2_1_001.jpg/revision/latest/scale-to-width-down/344?cb=20160418213235",
  },
  {
    name: "Cyclops",
    cartoon_id: 21,
    img_url:
      "https://static.wikia.nocookie.net/marveldatabase/images/0/00/Scott_Summers_%28Earth-92131%29_from_X-Men_%2792_Vol_2_5_001.jpg/revision/latest/scale-to-width-down/241?cb=20160730011823",
  },
  {
    name: "Jean Grey",
    cartoon_id: 21,
    img_url:
      "https://static.wikia.nocookie.net/marveldatabase/images/f/ff/Jean_Grey_%28Earth-92131%29_from_Spider-Man_The_Animated_Series_Season_2_4_001.png/revision/latest/scale-to-width-down/350?cb=20111224122543",
  },
  {
    name: "Fry",
    cartoon_id: 22,
    img_url:
      "https://static.wikia.nocookie.net/enfuturama/images/4/48/Philip_J._Fry_-_Official_Character_Promo.jpg/revision/latest/scale-to-width-down/300?cb=20211007115655",
  },
  {
    name: "Leela",
    cartoon_id: 22,
    img_url:
      "https://static.wikia.nocookie.net/enfuturama/images/2/2f/Turanga_Leela_-_Official_Character_Promo.jpg/revision/latest/scale-to-width-down/350?cb=20211007092538",
  },
  {
    name: "Zoidberg",
    cartoon_id: 22,
    img_url:
      "https://static.wikia.nocookie.net/enfuturama/images/f/f8/Doctor_John_A._Zoidberg_-_Official_Promo.jpg/revision/latest/scale-to-width-down/350?cb=20211007100117",
  },
  {
    name: "Bender",
    cartoon_id: 22,
    img_url:
      "https://static.wikia.nocookie.net/enfuturama/images/4/49/Bender_Bending_Rodr%C3%ADguez_-_Official_Character_Promo_1.jpg/revision/latest/scale-to-width-down/333?cb=20210907212302",
  },
  {
    name: "Amy Wong",
    cartoon_id: 22,
    img_url:
      "https://static.wikia.nocookie.net/enfuturama/images/d/db/Cast_futurama_amywong.jpg/revision/latest/scale-to-width-down/350?cb=20210809014748",
  },
  {
    name: "Hank Hill",
    cartoon_id: 23,
    img_url:
      "https://static.wikia.nocookie.net/kingofthehill/images/c/c4/Hank_Hill.png/revision/latest/scale-to-width-down/336?cb=20140504043948",
  },
  {
    name: "Luanne",
    cartoon_id: 23,
    img_url:
      "https://static.wikia.nocookie.net/kingofthehill/images/d/da/Luanne_Platter_-%29.jpg/revision/latest/scale-to-width-down/210?cb=20150524012912",
  },
  {
    name: "Dale Gribble",
    cartoon_id: 23,
    img_url:
      "https://static.wikia.nocookie.net/kingofthehill/images/a/a7/Dale_Gribble.png/revision/latest/scale-to-width-down/250?cb=20131231145446",
  },
  {
    name: "Bobby Hill",
    cartoon_id: 23,
    img_url:
      "https://static.wikia.nocookie.net/kingofthehill/images/c/c7/Bobby.png/revision/latest/scale-to-width-down/219?cb=20150524012917",
  },
  {
    name: "Peggy Hill",
    cartoon_id: 23,
    img_url:
      "https://static.wikia.nocookie.net/kingofthehill/images/a/a7/Peggy-hill.jpg/revision/latest/scale-to-width-down/350?cb=20190903170103",
  },
  {
    name: "Bob Belcher",
    cartoon_id: 24,
    img_url:
      "https://static.wikia.nocookie.net/bobsburgerpedia/images/9/94/BobsBurgers_2019_KeyPoses_Bob_1.jpg/revision/latest/scale-to-width-down/240?cb=20210413150644",
  },
  {
    name: "Linda Belcher",
    cartoon_id: 24,
    img_url:
      "https://static.wikia.nocookie.net/bobsburgerpedia/images/a/a0/BobsBurgers_2019_KeyPoses_Linda_2.jpg/revision/latest/scale-to-width-down/240?cb=20210413150648",
  },
  {
    name: "Tina Belcher",
    cartoon_id: 24,
    img_url:
      "https://static.wikia.nocookie.net/bobsburgerpedia/images/7/72/BobsBurgers_2019_KeyPoses_Tina_2.jpg/revision/latest/scale-to-width-down/240?cb=20210413150655",
  },
  {
    name: "Gene Belcher",
    cartoon_id: 24,
    img_url:
      "https://static.wikia.nocookie.net/bobsburgerpedia/images/b/b6/BobsBurgers_2019_KeyPoses_Gene_1.jpg/revision/latest/scale-to-width-down/240?cb=20210413150646",
  },
  {
    name: "Louise Belcher",
    cartoon_id: 24,
    img_url:
      "https://static.wikia.nocookie.net/bobsburgerpedia/images/c/c6/BobsBurgers_2019_KeyPoses_Louise_1.jpg/revision/latest/scale-to-width-down/240?cb=20210413150651",
  },
  {
    name: "SpongeBob SquarePants",
    cartoon_id: 25,
    img_url:
      "https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest/scale-to-width-down/350?cb=20190921125147",
  },
  {
    name: "Patrick Star",
    cartoon_id: 25,
    img_url:
      "https://static.wikia.nocookie.net/spongebob/images/5/5d/Patrick_stock_art.png/revision/latest/scale-to-width-down/350?cb=20210812083708",
  },
  {
    name: "Squidward Tentacles",
    cartoon_id: 25,
    img_url:
      "https://static.wikia.nocookie.net/spongebob/images/0/05/Squidward_stock_art.png/revision/latest/scale-to-width-down/350?cb=20190921125123",
  },
  {
    name: "Eugene H. Krabs",
    cartoon_id: 25,
    img_url:
      "https://static.wikia.nocookie.net/spongebob/images/7/7b/Krabs_artwork.png/revision/latest/scale-to-width-down/350?cb=20210916065112",
  },
  {
    name: "Sheldon J. Plankton",
    cartoon_id: 25,
    img_url:
      "https://static.wikia.nocookie.net/spongebob/images/7/77/Plankton_stock_art.png/revision/latest/scale-to-width-down/350?cb=20210916065141",
  },
  {
    name: "Tommy Pickles",
    cartoon_id: 26,
    img_url:
      "https://static.wikia.nocookie.net/rugrats/images/e/e4/Tommy_Pickles.png/revision/latest/scale-to-width-down/150?cb=20180820145552",
  },
  {
    name: "Angelica Pickles",
    cartoon_id: 26,
    img_url:
      "https://static.wikia.nocookie.net/rugrats/images/1/19/Angelica_Pickles.png/revision/latest/scale-to-width-down/200?cb=20130515182442",
  },
  {
    name: "Chuckie Finster",
    cartoon_id: 26,
    img_url:
      "https://static.wikia.nocookie.net/rugrats/images/a/ad/Chuckie_Finster.png/revision/latest/scale-to-width-down/200?cb=20210620183002",
  },
  {
    name: "Susie Carmichael",
    cartoon_id: 26,
    img_url:
      "https://static.wikia.nocookie.net/rugrats/images/f/f1/Susie_Carmichael.png/revision/latest/scale-to-width-down/250?cb=20130515193955",
  },
  {
    name: "Kimi Finster",
    cartoon_id: 26,
    img_url:
      "https://static.wikia.nocookie.net/rugrats/images/d/d5/Kimi_Finster2.png/revision/latest/scale-to-width-down/150?cb=20150814063805",
  },
  {
    name: "Doug Funnie",
    cartoon_id: 27,
    img_url:
      "https://static.wikia.nocookie.net/doug/images/a/a5/Doug_Funnie2.png/revision/latest/scale-to-width-down/350?cb=20180531191407",
  },
  {
    name: "Patti Mayonnaise",
    cartoon_id: 27,
    img_url:
      "https://static.wikia.nocookie.net/doug/images/1/1e/Patti_Mayonnaise.png/revision/latest/scale-to-width-down/262?cb=20180531190606",
  },
  {
    name: "Skeeter Valentine",
    cartoon_id: 27,
    img_url:
      "https://static.wikia.nocookie.net/doug/images/5/58/Skeeter2.png/revision/latest/scale-to-width-down/136?cb=20180531190914",
  },
  {
    name: "Roger Klotz",
    cartoon_id: 27,
    img_url:
      "https://static.wikia.nocookie.net/doug/images/5/53/Roger_Klotz.png/revision/latest/scale-to-width-down/292?cb=20181031044625",
  },
  {
    name: "Judy Funnie",
    cartoon_id: 27,
    img_url:
      "https://static.wikia.nocookie.net/doug/images/1/1b/Judy_Funnie_.png/revision/latest/scale-to-width-down/230?cb=20181031044821",
  },
  {
    name: "Arnold Shortman",
    cartoon_id: 28,
    img_url:
      "https://static.wikia.nocookie.net/heyarnold/images/c/c0/Arnold2.png/revision/latest/scale-to-width-down/350?cb=20190816101509",
  },
  {
    name: "Helga G. Pataki",
    cartoon_id: 28,
    img_url:
      "https://static.wikia.nocookie.net/heyarnold/images/e/e5/Helga_Pataki.png/revision/latest/scale-to-width-down/266?cb=20210830171639",
  },
  {
    name: "Gerald Johanssen",
    cartoon_id: 28,
    img_url:
      "https://static.wikia.nocookie.net/heyarnold/images/9/9c/GeraldShow.png/revision/latest/scale-to-width-down/319?cb=20181027162223",
  },
  {
    name: "Grandpa Phil",
    cartoon_id: 28,
    img_url:
      "https://static.wikia.nocookie.net/heyarnold/images/7/79/GrandpaPhil.png/revision/latest/scale-to-width-down/300?cb=20160924030436",
  },
  {
    name: "Stella Shortman",
    cartoon_id: 28,
    img_url:
      "https://static.wikia.nocookie.net/heyarnold/images/f/fa/Stella.jpg/revision/latest/scale-to-width-down/255?cb=20101225143956",
  },
  {
    name: "Timmy Turner",
    cartoon_id: 29,
    img_url:
      "https://static.wikia.nocookie.net/fairlyoddparents/images/2/2c/New_Timmy_Stock.png/revision/latest/scale-to-width-down/200?cb=20200127001833&path-prefix=en",
  },
  {
    name: "Cosmo Julius Cosma",
    cartoon_id: 29,
    img_url:
      "https://static.wikia.nocookie.net/fairlyoddparents/images/e/ed/Cosmo_image.png/revision/latest/scale-to-width-down/230?cb=20200709204533&path-prefix=en",
  },
  {
    name: "Wanda",
    cartoon_id: 29,
    img_url:
      "https://static.wikia.nocookie.net/fairlyoddparents/images/d/d5/WandaFOP.png/revision/latest/scale-to-width-down/200?cb=20211109033400&path-prefix=en",
  },
  {
    name: "Sparky",
    cartoon_id: 29,
    img_url:
      "https://static.wikia.nocookie.net/fairlyoddparents/images/8/87/SparkyHQ.png/revision/latest/scale-to-width-down/220?cb=20191212154610&path-prefix=en",
  },
  {
    name: "The Crimson Chin",
    cartoon_id: 29,
    img_url:
      "https://static.wikia.nocookie.net/fairlyoddparents/images/a/ad/CrimsonChin.png/revision/latest/scale-to-width-down/200?cb=20191124155102&path-prefix=en",
  },
  {
    name: "Penny",
    cartoon_id: 30,
    img_url:
      "https://static.wikia.nocookie.net/p__/images/8/85/Penny_Crayon_photo.jpg/revision/latest/scale-to-width-down/180?cb=20150824023358&path-prefix=protagonist",
  },
  {
    name: "Dennis",
    cartoon_id: 30,
    img_url:
      "https://thumbs.gfycat.com/EagerOpulentAllensbigearedbat-mobile.jpg",
  },
];
