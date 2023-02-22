var heroesList =[ // Table of Heroes and attributes : 3-RANGED 4-SPELLS 5-ATTACK 6-TANK 7-AGHANIM 8-UAM 9-ATTR 10-14-ROLES
["Abaddon","Resources/Heroes/Abaddon","the Lord of Avernus",
0,0,1,1,1,0,0,1,0,1,0,1,0],
["Alchemist","Resources/Heroes/Alchemist","Razzil Darkbrew",
0,0,1,1,1,0,0,1,1,0,1,0,0],
["Ancient Apparition","Resources/Heroes/Ancient_Apparition","Kaldr",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Anti-Mage","Resources/Heroes/Anti-Mage","Magina",
0,0,1,0,0,1,1,1,0,0,0,0,0],
["Arc Warden","Resources/Heroes/Arc_Warden","Zet",
1,1,1,0,0,0,1,1,0,0,0,1,0],
["Axe","Resources/Heroes/Axe","Mogul Khan",
0,0,0,1,1,0,0,0,0,1,1,0,0],
["Bane","Resources/Heroes/Bane","Atropos",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Batrider","Resources/Heroes/Batrider","Jin'zakk",
1,1,0,0,1,0,2,0,1,1,1,0,0],
["Beastmaster","Resources/Heroes/Beastmaster","Karroch",
0,1,1,0,1,0,0,0,0,1,1,0,0],
["Bloodseeker","Resources/Heroes/Bloodseeker","Strygwyr",
0,0,1,1,0,0,1,1,0,1,1,0,0],
["Bounty Hunter","Resources/Heroes/Bounty_Hunter","Gondar",
0,0,1,0,0,0,1,0,0,0,1,0,0],
["Brewmaster","Resources/Heroes/Brewmaster","Mangix",
0,1,0,1,1,0,0,0,1,1,0,0,0],
["Bristleback","Resources/Heroes/Bristleback","Rigwarl",
0,0,1,1,1,0,0,1,0,1,0,0,0],
["Broodmother","Resources/Heroes/Broodmother","Black Arachnia",
0,0,1,0,0,0,1,0,1,1,0,0,0],
["Centaur Warrunner","Resources/Heroes/Centaur_Warrunner","Bradwarden",
0,1,0,1,1,0,0,0,0,1,0,0,0],
["Chaos Knight","Resources/Heroes/Chaos_Knight","Nessaj",
0,0,1,1,0,0,0,1,0,0,0,0,0],
["Chen","Resources/Heroes/Chen","the Holy Knight",
1,1,0,0,1,0,2,0,0,1,1,0,0],
["Clinkz","Resources/Heroes/Clinkz","the Bone Fletcher",
1,0,1,0,0,0,1,1,1,0,0,0,0],
["Clockwerk","Resources/Heroes/Clockwerk","Rattletrap",
0,1,0,1,1,0,0,0,1,1,0,0,0],
["Crystal Maiden","Resources/Heroes/Crystal_Maiden","Rylai",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Dark Seer","Resources/Heroes/Dark_Seer","Ish'kafel",
0,1,0,0,1,0,2,0,0,1,0,0,0],
["Dark Willow","Resources/Heroes/Dark_Willow","Mireska Sunbreeze",
1,1,1,0,0,0,2,0,0,1,1,1,0],
["Dazzle","Resources/Heroes/Dazzle","the Shadow Priest",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Death Prophet","Resources/Heroes/Death_Prophet","Krobelus",
1,1,0,1,0,0,2,0,1,0,0,0,0],
["Disruptor","Resources/Heroes/Disruptor","the Stormcraftor",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Doom","Resources/Heroes/Doom","Lucifer",
0,1,0,1,1,0,0,1,0,0,1,0,0],
["Dragon Knight","Resources/Heroes/Dragon_Knight","Davion",
0,0,1,1,0,0,0,1,1,0,0,0,0],
["Drow Ranger","Resources/Heroes/Drow_Ranger","Traxex",
1,0,1,0,1,0,1,1,1,0,0,0,0],
["Earth Spirit","Resources/Heroes/Earth_Spirit","Kaolin",
0,1,0,0,1,0,0,0,1,1,1,0,0],
["Earthshaker","Resources/Heroes/Earthshaker","Raigor Stonehoof",
0,1,0,0,1,0,0,0,0,0,1,1,0],
["Elder Titan","Resources/Heroes/Elder_Titan","the Tauren Chieftain",
0,1,1,0,1,0,0,0,0,1,1,1,0],
["Ember Spirit","Resources/Heroes/Ember_Spirit","Xin",
0,0,1,0,0,0,1,1,1,0,0,0,0],
["Enchantress","Resources/Heroes/Enchantress","Aiushtha",
1,1,1,0,1,0,2,0,0,0,1,0,0],
["Enigma","Resources/Heroes/Enigma","Darchrow",
1,1,0,0,1,0,2,0,0,0,1,0,0],
["Faceless Void","Resources/Heroes/Faceless_Void","Darkterror",
0,0,1,0,1,0,1,1,0,1,0,0,1],
["Gyrocopter","Resources/Heroes/Gyrocopter","Aurel",
1,1,1,0,1,0,1,1,1,0,0,0,0],
["Huskar","Resources/Heroes/Huskar","the Sacred Warrior",
1,0,1,1,1,0,0,1,1,0,0,0,0],
["Invoker","Resources/Heroes/Invoker","Kael",
1,1,1,0,1,0,2,1,1,0,0,0,0],
["Io","Resources/Heroes/Io","the Guardian Wisp",
1,1,0,0,0,0,0,0,0,0,1,1,0],
["Jakiro","Resources/Heroes/Jakiro","the Twin Head Dragon",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Juggernaut","Resources/Heroes/Juggernaut","Yurnero",
0,0,1,0,1,0,1,1,0,0,0,0,0],
["Keeper of the Light","Resources/Heroes/Keeper_of_the_Light","Ezalor",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Kunkka","Resources/Heroes/Kunkka","the Admiral",
0,1,1,0,1,0,0,0,1,1,1,0,0],
["Legion Commander","Resources/Heroes/Legion_Commander","Tresdin",
0,0,1,1,1,0,0,1,0,1,1,0,0],
["Leshrac","Resources/Heroes/Leshrac","the Tormented Soul",
1,1,0,0,1,0,2,0,1,0,1,1,0],
["Lich","Resources/Heroes/Lich","Ethreain",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Lifestealer","Resources/Heroes/Lifestealer","N'aix",
0,0,1,1,1,0,0,1,0,0,1,0,0],
["Lina","Resources/Heroes/Lina","the Slayer",
1,1,1,0,1,0,2,0,1,0,1,0,0],
["Lion","Resources/Heroes/Lion","the Demon Witch",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Lone Druid","Resources/Heroes/Lone_Druid","Sylla",
0,0,1,1,0,0,1,1,0,1,1,0,0], //////////////////////////////////////////////////////////
["Luna","Resources/Heroes/Luna","the Moon Rider",
1,0,1,0,1,0,1,1,1,0,0,0,0],
["Lycan","Resources/Heroes/Lycan","Banehallow",
0,0,1,0,0,0,0,1,0,0,1,0,0],
["Magnus","Resources/Heroes/Magnus","the Magnoceros",
0,1,1,0,1,0,0,0,1,1,0,0,0],
["Medusa","Resources/Heroes/Medusa","the Gorgon",
1,0,1,1,0,0,1,1,1,0,0,0,0],
["Meepo","Resources/Heroes/Meepo","the Geomancer",
0,1,1,0,1,0,1,1,1,0,0,0,0],
["Mirana","Resources/Heroes/Mirana","the Princess of the Moon",
1,1,1,0,1,0,1,0,1,0,1,1,0],
["Monkey King","Resources/Heroes/Monkey_King","Sun Wukong",
0,0,1,0,0,0,1,1,1,0,1,1,0],
["Morphling","Resources/Heroes/Morphling","the Morphling",
1,0,1,1,1,0,1,1,1,0,1,0,0],
["Naga Siren","Resources/Heroes/Naga_Siren","Slithice",
0,1,1,0,1,0,1,1,0,0,1,1,0],
["Nature's Prophet","Resources/Heroes/Natures_Prophet","Furion",
1,1,1,0,1,0,2,0,0,1,1,0,0],
["Necrophos","Resources/Heroes/Necrophos","Rotund'jere",
1,1,0,1,1,0,2,1,1,1,0,0,0],
["Night Stalker","Resources/Heroes/Night_Stalker","Balanar",
0,0,1,1,1,0,0,0,1,1,1,0,0],
["Nyx Assassin","Resources/Heroes/Nyx_Assassin","Anub'arak",
0,1,0,0,1,0,1,0,1,1,1,0,0],
["Ogre Magi","Resources/Heroes/Ogre_Magi","Aggron Stonebreak",
0,1,0,1,1,0,2,0,0,0,1,1,0],
["Omniknight","Resources/Heroes/Omniknight","Purist Thunderwrath",
0,1,0,1,1,0,0,0,0,0,1,1,0],
["Oracle","Resources/Heroes/Oracle","Nerif",
1,1,0,0,0,0,2,0,0,0,1,1,0],
["Outworld Devourer","Resources/Heroes/Outworld_Devourer","Harbinger",
1,1,1,0,1,1,2,1,1,0,0,0,0],
["Pangolier","Resources/Heroes/Pangolier","Dont\xE9 Panlin",
0,0,1,1,0,0,1,1,0,1,0,0,0],
["Phantom Assassin","Resources/Heroes/Phantom_Assassin","Mortred",
0,0,1,0,0,0,1,1,0,0,0,0,0],
["Phantom Lancer","Resources/Heroes/Phantom_Lancer","Azwraith",
0,0,1,1,0,0,1,1,0,0,0,0,0],
["Phoenix","Resources/Heroes/Phoenix","Icarus",
1,1,0,0,1,0,0,0,0,1,1,0,0],
["Puck","Resources/Heroes/Puck","the Faerie Dragon",
1,1,0,0,1,0,2,0,1,1,0,0,0],
["Pudge","Resources/Heroes/Pudge","the Butcher",
0,1,0,1,1,0,0,0,1,0,1,0,0],
["Pugna","Resources/Heroes/Pugna","the Oblivion",
1,1,0,0,1,0,2,0,1,0,1,1,0],
["Queen of Pain","Resources/Heroes/Queen_of_Pain","Akasha",
1,1,1,0,1,0,2,0,1,0,0,0,0],
["Razor","Resources/Heroes/Razor","the Lightning Revenant",
1,0,1,0,1,0,1,1,1,0,0,0,0],
["Riki","Resources/Heroes/Riki","the Stealth Assassin",
0,0,1,0,0,0,1,1,0,1,1,0,0],
["Rubick","Resources/Heroes/Rubick","the Grand Magus",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Sand King","Resources/Heroes/Sand_King","Crixalis",
0,1,0,0,1,1,0,0,0,0,1,0,0],
["Shadow Demon","Resources/Heroes/Shadow_Demon","Eredar",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Shadow Fiend","Resources/Heroes/Shadow_Fiend","Nevermore",
1,0,1,0,1,0,1,1,1,0,0,0,0],
["Shadow Shaman","Resources/Heroes/Shadow_Shaman","Rhasta",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Silencer","Resources/Heroes/Silencer","Nortrom",
1,1,1,0,1,0,2,1,1,0,0,1,0],
["Skywrath Mage","Resources/Heroes/Skywrath_Mage","Dragonus",
1,1,0,0,1,0,2,0,1,0,1,1,0],
["Slardar","Resources/Heroes/Slardar","the Slithereen Guard",
0,0,1,1,0,0,0,0,0,1,1,0,1],
["Slark","Resources/Heroes/Slark","the Nightcrawler",
0,0,1,0,0,0,1,1,1,0,0,0,0],
["Sniper","Resources/Heroes/Sniper","Kardel Sharpeye",
1,0,1,0,0,0,1,1,1,0,0,0,0],
["Spectre","Resources/Heroes/Spectre","Mercurial",
0,0,1,1,0,0,1,1,0,0,0,0,0],
["Spirit Breaker","Resources/Heroes/Spirit_Breaker","Barathrum",
0,0,1,1,1,0,0,0,0,1,1,0,1],
["Storm Spirit","Resources/Heroes/Storm_Spirit","Raijin Thunderkeg",
1,1,1,0,1,0,2,1,1,0,0,0,0],
["Sven","Resources/Heroes/Sven","the Rogue Knight",
0,0,1,1,1,0,0,1,0,0,1,0,0],
["Techies","Resources/Heroes/Techies","Squee, Spleen and Spoon",
1,1,0,0,1,0,2,0,0,1,1,0,0],
["Templar Assassin","Resources/Heroes/Templar_Assassin","Lanaya",
1,0,1,0,0,0,1,1,1,0,0,0,0],
["Terrorblade","Resources/Heroes/Terrorblade","the Demon Marauder",
0,0,1,0,0,0,1,1,0,0,0,0,0],
["Tidehunter","Resources/Heroes/Tidehunter","Leviathan",
0,1,0,1,1,0,0,0,0,1,1,0,0],
["Timbersaw","Resources/Heroes/Timbersaw","Rizzrack",
0,1,0,1,1,0,0,0,1,1,0,0,0],
["Tinker","Resources/Heroes/Tinker","Boush",
1,1,0,0,1,0,2,0,1,0,0,0,0],
["Tiny","Resources/Heroes/Tiny","the Stone Giant",
0,1,1,0,1,0,0,1,1,0,0,0,0],
["Treant Protector","Resources/Heroes/Treant_Protector","Rooftrellen",
0,1,0,1,1,0,0,0,0,0,0,1,0],
["Troll Warlord","Resources/Heroes/Troll_Warlord","Jah'rakal",
0,0,1,0,0,0,1,1,0,0,0,0,1],
["Tusk","Resources/Heroes/Tusk","Ymir",
0,1,1,0,1,0,0,0,0,0,1,0,0],
["Underlord","Resources/Heroes/Underlord","Vrogros",
0,1,1,1,0,0,0,1,1,1,0,1,0],
["Undying","Resources/Heroes/Undying","the Almighty Dirge",
0,1,0,1,1,0,0,0,0,1,1,0,0],
["Ursa","Resources/Heroes/Ursa","Ulfsaar",
0,0,1,1,1,0,1,1,0,0,1,0,0],
["Vengeful Spirit","Resources/Heroes/Vengeful_Spirit","Shendelzare",
1,1,1,0,1,0,1,0,0,0,1,1,0],
["Venomancer","Resources/Heroes/Venomancer","Lesale Deathbringer",
1,1,0,0,1,0,1,0,1,0,1,1,0],
["Viper","Resources/Heroes/Viper","the Netherdrake",
1,0,1,1,1,0,1,0,1,0,0,0,0],
["Visage","Resources/Heroes/Visage","Necro'lic",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Warlock","Resources/Heroes/Warlock","Demnok Lannik",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Weaver","Resources/Heroes/Weaver","Skitskurr",
1,0,1,0,1,0,1,1,0,1,0,0,0],
["Windranger","Resources/Heroes/Windranger","Lyralei",
1,1,1,0,1,0,2,1,1,1,0,0,0],
["Winter Wyvern","Resources/Heroes/Winter_Wyvern","Auroth",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Witch Doctor","Resources/Heroes/Witch_Doctor","Zharvakko",
1,1,0,0,1,0,2,0,0,0,1,1,0],
["Wraith King","Resources/Heroes/Wraith_King","Ostarion",
0,0,1,1,1,0,0,1,0,0,1,0,0],
["Zeus","Resources/Heroes/Zeus","the Lord of Heaven",
1,1,0,0,1,0,2,0,1,0,0,0,0]
];

var HEROESLENGTH = heroesList.length;

var itemsList =[ // Table of Items and attributes : 2-RANGE 3-SPELLS 4-ATTACK 5-TANK 6-OFFENSIF 7-DEFENSIF 8-BOOTS 9-UAM
["Abyssal Blade","Resources/Items/Abyssal_Blade.png",
3,0,1,1,1,0,0,0],
["Aeon Disk","Resources/Items/Aeon_Disk.png",
0,0,0,1,0,1,0,0],
["Aether Lens","Resources/Items/Aether_Lens.png",
0,1,0,0,1,0,0,0],
["Aghanim's Scepter","Resources/Items/Aghanims_Scepter.png",
0,1,1,1,1,1,0,0],
["Armlet of Mordiggian","Resources/Items/Armlet_of_Mordiggian.png",
0,0,1,1,1,1,0,0],
["Assault Cuirass","Resources/Items/Assault_Cuirass.png",
0,0,1,1,1,1,0,0],
["Battle Fury","Resources/Items/Battle_Fury.png",
2,0,1,0,1,0,0,0],
["Back King Bar","Resources/Items/Black_King_Bar.png",
0,1,1,1,0,1,0,0],
["Blade Mail","Resources/Items/Blade_Mail.png",
0,0,0,1,0,1,0,0],
["Blink Dagger","Resources/Items/Blink_Dagger.png",
0,1,1,1,1,1,0,0],
["Bloodstone","Resources/Items/Bloodstone.png",
0,1,0,0,1,1,0,0],
["Bloodthorn","Resources/Items/Bloodthorn.png",
0,1,1,0,1,0,0,0],
["Boots of Travel","Resources/Items/Boots_of_Travel.png",
0,1,1,1,0,0,1,0],
["Butterfly","Resources/Items/Butterfly.png",
0,0,1,0,1,1,0,0],
["Crimson Guard","Resources/Items/Crimson_Guard.png",
3,0,0,1,0,1,0,0],
["Daedalus","Resources/Items/Daedalus.png",
0,0,1,0,1,0,0,0],
["Dagon","Resources/Items/Dagon.png",
0,1,0,0,1,0,0,0],
["Desolator","Resources/Items/Desolator.png",
0,0,1,0,1,0,0,0],
["Diffusal Blade","Resources/Items/Diffusal_Blade.png",
0,0,1,0,1,0,0,0],
["Divine Rapier","Resources/Items/Divine_Rapier.png",
0,0,1,0,1,0,0,0],
["Drum of Endurance","Resources/Items/Drum_of_Endurance.png",
0,0,1,1,1,1,0,0],
["Echo Sabre","Resources/Items/Echo_Sabre.png",
2,0,1,0,1,0,0,0],
["Ethereal Blade","Resources/Items/Ethereal_Blade.png",
0,1,1,0,1,0,0,0],
["Eul's Scepter of Divinity","Resources/Items/Euls_Scepter_of_Divinity.png",
0,1,0,0,1,1,0,0],
["Eye of Skadi","Resources/Items/Eye_of_Skadi.png",
0,0,1,0,1,1,0,0],
["Force Staff","Resources/Items/Force_Staff.png",
0,1,0,1,1,1,0,0],
["Glimmer Cape","Resources/Items/Glimmer_Cape.png",
0,1,0,0,0,1,0,0],
["Guardian Greaves","Resources/Items/Guardian_Greaves.png",
0,1,0,1,0,0,1,0],
["Hand of Midas","Resources/Items/Hand_of_Midas.png",
0,1,1,1,1,1,0,0],
["Heart of Tarrasque","Resources/Items/Heart_of_Tarrasque.png",
0,0,0,1,0,1,0,0],
["Heaven's Halberd","Resources/Items/Heavens_Halberd.png",
0,0,0,1,0,1,0,0],
["Hurricane Pike","Resources/Items/Hurricane_Pike.png",
1,1,1,0,1,1,0,0],
["Kaya","Resources/Items/Kaya.png",
0,1,0,0,1,1,0,0],
["Linken's Sphere","Resources/Items/Linkens_Sphere.png",
0,1,1,0,0,1,0,0],
["Lotus Orb","Resources/Items/Lotus_Orb.png",
0,0,0,1,0,1,0,0],
["Manta Style","Resources/Items/Manta_Style.png",
0,0,1,0,0,1,0,0],
["Mask of Madness","Resources/Items/Mask_of_Madness.png",
0,0,1,0,1,0,0,0],
["Meteor Hammer","Resources/Items/Meteor_Hammer.png",
0,1,0,0,1,0,0,0],
["Mjollnir","Resources/Items/Mjollnir.png",
0,0,1,0,1,0,0,0],
["Monkey King Bar","Resources/Items/Monkey_King_Bar.png",
0,0,1,0,1,0,0,0],
["Moon Shard","Resources/Items/Moon_Shard.png",
0,0,1,0,1,0,0,0],
["Necronomicon","Resources/Items/Necronomicon.png",
0,1,0,0,1,1,0,0],
["Nullifier","Resources/Items/Nullifier.png",
0,0,1,0,1,0,0,0],
["Octarine Core","Resources/Items/Octarine_Core.png",
0,1,0,0,1,1,0,0],
["Orchid Malevolence","Resources/Items/Orchid_Malevolence.png",
0,1,0,0,1,0,0,0],
["Phase Boots","Resources/Items/Phase_Boots.png",
0,0,1,0,0,0,1,0],
["Pipe of Insight","Resources/Items/Pipe_of_Insight.png",
0,0,0,1,0,1,0,0],
["Power Treads","Resources/Items/Power_Treads.png",
0,0,1,1,0,0,1,0],
["Radiance","Resources/Items/Radiance.png",
0,0,1,1,1,0,0,0],
["Refresher Orb","Resources/Items/Refresher_Orb.png",
0,1,0,0,1,0,0,0],
["Ring of Aquila","Resources/Items/Ring_of_Aquila.png",
0,0,1,0,1,1,0,0],
["Rod of Atos","Resources/Items/Rod_of_Atos.png",
0,1,0,0,1,0,0,0],
["Sange and Yasha","Resources/Items/Sange_and_Yasha.png",
3,0,1,1,1,1,0,0],
["Satanic","Resources/Items/Satanic.png",
0,0,1,0,0,1,0,0],
["Scythe of Vyse","Resources/Items/Scythe_of_Vyse.png",
0,1,0,0,1,1,0,0],
["Shiva's Guard","Resources/Items/Shivas_Guard.png",
0,1,0,1,1,1,0,0],
["Silver Edge","Resources/Items/Silver_Edge.png",
0,0,1,0,1,1,0,0],
["Solar Crest","Resources/Items/Solar_Crest.png",
0,1,1,1,1,1,0,0],
["Spirit Vessel","Resources/Items/Spirit_Vessel.png",
0,1,0,1,1,1,0,0],
["Tranquil Boots","Resources/Items/Tranquil_Boots.png",
0,1,0,1,0,0,1,0],
["Veil of Discord","Resources/Items/Veil_of_Discord.png",
0,1,0,0,1,0,0,0],
["Vladmir's Offering","Resources/Items/Vladmirs_Offering.png",
0,0,1,1,1,1,0,0]
];

var ITEMSLENGTH = itemsList.length;

var choice = [
[-1,1,1,1,1,1,1,1,1],
[-1,1,1,1,1,1,1,1,1],
[-1,1,1,1,1,1,1,1,1],
[-1,1,1,1,1,1,1,1,1],
[-1,1,1,1,1,1,1,1,1]
];

var generated = [
[0,0,0,0,0,0,0,""],
[0,0,0,0,0,0,0,""],
[0,0,0,0,0,0,0,""],
[0,0,0,0,0,0,0,""],
[0,0,0,0,0,0,0,""],
[0,0,0,0,0,0,0,""] //LoneDruid
];
// HEROES 3-RANGED 4-SPELLS 5-ATTACK 6-TANK 7-AGHANIM 8-UAM 9-ATTR 10-14-ROLES 15-BASH
// ITEMS 2-RANGE 3-SPELLS 4-ATTACK 5-TANK 6-OFFENSIF 7-DEFENSIF 8-BOOTS 9-UAM

function generateBuild() {
	generated = [[0,0,0,0,0,0,0,""],[0,0,0,0,0,0,0,""],[0,0,0,0,0,0,0,""],[0,0,0,0,0,0,0,""],[0,0,0,0,0,0,0,""],[0,0,0,0,0,0,0,""]];
	var numberPlayers, heroId, itemId;
	var radioStandard = document.getElementById("radioStandard").checked;
	var radioAdapted = document.getElementById("radioAdapted").checked;
	for (i = 0; i < 5; i++) {
		if (document.getElementsByName("numberPlayers")[i].checked) {
			numberPlayers = i + 1;
		}
	}
	
	for  (heroNumber = 0; heroNumber < numberPlayers; heroNumber++) {
		if (choice[heroNumber][0] == -1) {
			heroLoop:while (true) {
				heroId = Math.floor(Math.random() * HEROESLENGTH);
				for (i = 0; i < 3; i++) {
					if (choice[heroNumber][i+1] && heroesList[heroId][9] == i) {break;}
					if (i == 2) {continue heroLoop;}
				}
				for (i = 0; i < 5; i++) {
					if (choice[heroNumber][i+4] && heroesList[heroId][i+10]) {break;}
					if (i == 4) {continue heroLoop;}
				}
				for (i = 0; i < 5; i++) {
					if (heroId == generated[i][0]) {continue heroLoop;}
				}
				break heroLoop;
			}
		} else {
			heroId = choice[heroNumber][0];
		}
		generated[heroNumber][0] = heroId;
		
		for (itemNumber = 1; itemNumber < 7; itemNumber++) {
			itemLoop:while (true) {
				itemId = Math.floor(Math.random() * ITEMSLENGTH);
				if (itemsList[itemId][0] == "Aghanim's Scepter" && !heroesList[heroId][7]) {continue itemLoop;}
				if (itemsList[itemId][0] == "Diffusal Blade" && heroesList[heroId][0] == "Anti-Mage") {continue itemLoop;}
				if (itemsList[itemId][2] == 1 && !heroesList[heroId][3]) {continue itemLoop;}
				if (itemsList[itemId][2] == 2 && heroesList[heroId][3]) {continue itemLoop;}
				for (i = 1; i < itemNumber; i++) {
					if (itemId == generated[heroNumber][i]) {continue itemLoop;}
					if (itemsList[itemId][9] && itemsList[generated[heroNumber][i]][9]) {continue itemLoop;}
					if (itemsList[itemId][0] == "Orchid Malevolence" && itemsList[generated[heroNumber][i]][0] == "Bloodthorn") {continue itemLoop;}
					if (itemsList[itemId][0] == "Bloodthorn" && itemsList[generated[heroNumber][i]][0] == "Orchid Malevolence") {continue itemLoop;}
					if (itemsList[itemId][0] == "Force Staff" && itemsList[generated[heroNumber][i]][0] == "Hurricane Pike") {continue itemLoop;}
					if (itemsList[itemId][0] == "Hurricane Pike" && itemsList[generated[heroNumber][i]][0] == "Force Staff") {continue itemLoop;}
				}
				if (itemsList[itemId][9] && heroesList[heroId][8]) {continue itemLoop;}
				if (itemsList[itemId][0] == "Abyssal Blade" && heroesList[heroId][15]) {continue itemLoop;}
				if (radioStandard || radioAdapted) {
					switch (itemNumber) {
						case 1:
							if (!itemsList[itemId][8]) {continue itemLoop;} break;
						case 2:
							if (!itemsList[itemId][6]) {continue itemLoop;} break;
						case 3:
							if (!itemsList[itemId][6]) {continue itemLoop;} break;
						case 4:
							if (!itemsList[itemId][6] || !itemsList[itemId][7]) {continue itemLoop;} break;
						case 5:
							if (!itemsList[itemId][6] && !itemsList[itemId][7]) {continue itemLoop;} break;
						case 6:
							if (!itemsList[itemId][7]) {continue itemLoop;} break;
					}
				}
				if (radioAdapted) {
					if (itemsList[itemId][2] == 3 && heroesList[heroId][3]) {continue itemLoop;}
					
					for (i = 0; i < 3; i++) {
						if (itemsList[itemId][3+i] && heroesList[heroId][4+i]) {break itemLoop;}
						if (i == 2) {continue itemLoop;}
					}
				}
				break itemLoop;
			}
			generated[heroNumber][itemNumber] = itemId;
		}
	}
	showGenerated();
}

function showGenerated() {
	var numberPlayers;
	for (i = 0; i < 5; i++) {
		if (document.getElementsByName("numberPlayers")[i].checked) {
			numberPlayers = i + 1;
		}
	}
	
	for (heroNumber = numberPlayers; heroNumber < 5; heroNumber++) {
		document.getElementsByClassName("generated")[heroNumber].style.display = "none";
	}
	
	for (heroNumber = 0; heroNumber < numberPlayers; heroNumber++) {
		document.getElementsByClassName("generated")[heroNumber].style.display = "block";
		document.getElementsByClassName("heroPortrait")[heroNumber].style.backgroundImage = "url('" + heroesList[generated[heroNumber][0]][1] + ".png')"
		document.getElementsByClassName("nameLayer")[heroNumber].innerHTML = heroesList[generated[heroNumber][0]][0];
		document.getElementsByClassName("akaLayer")[heroNumber].innerHTML = '"' + heroesList[generated[heroNumber][0]][2] + '"';
		
		generated[heroNumber][7] = heroesList[generated[heroNumber][0]][0] + " with : ";
		for (itemNumber = 0; itemNumber < 6; itemNumber++) {
			document.getElementsByClassName("itemPicture")[heroNumber*6 + itemNumber].style.backgroundImage = 
			"url('" + itemsList[generated[heroNumber][itemNumber+1]][1] + "')";
			
			generated[heroNumber][7] += itemsList[generated[heroNumber][itemNumber+1]][0];
			if (itemNumber != 5) {
				generated[heroNumber][7] += " - ";
			}
		}
		document.getElementsByClassName("textArea")[heroNumber].innerHTML = generated[heroNumber][7];
		
	}
}

function showHeroes(heroNumber) {
	if (choice[heroNumber][0] == -1) {
		for (i=0; i < 8; i++) {
			if (choice[heroNumber][i+1] == 1) {
				document.getElementsByClassName("randomCheckbox")[i].checked = true;
			} else {
				document.getElementsByClassName("randomCheckbox")[i].checked = false;
			}
		}
	} else {
		for (i=0; i < 8; i++) {
			document.getElementsByClassName("randomCheckbox")[i].checked = true;
		}
	}

	document.getElementById("heroesModal").style.display = "block";
	var string = "";
	var mouchard = 0;
	for (i = 0; i < 3; i++) {
		string = "";
		var n = 0;
		for (heroId = 0; heroId < HEROESLENGTH; heroId++) {
			if (heroesList[heroId][9] == i) {
				for (k = 0; k < 5; k++) {
					if (k != heroNumber && choice[k][0] == heroId) {
						string += "<div class='heroSel disabled' style='background-image:url(" + heroesList[heroId][1] + "_sel.png" + ")' " + "></div>";
						mouchard++;
					}
				}
				if (mouchard == 0) {
					string += "<div class='heroSel enabled' style='background-image:url(" + heroesList[heroId][1] + "_sel.png" + ")' " + "onclick='setHeroChosen(" + heroNumber + "," + heroId + ")'></div>";
				}
				n++;
				mouchard = 0;

				if (n%21 == 0) {
					string += "<br />";
				}
			}
		}
		document.getElementsByClassName("categoryGrid")[i].innerHTML = string;
	}
	document.getElementById("randomSel").onclick = function() {setHeroChosen(heroNumber,-1);}
}

window.onclick = function(event) {
    if (event.target == heroesModal) {
        heroesModal.style.display = "none";
    }
}

function setHeroChosen(heroNumber, heroId) {
	
	if (heroId == -1) {
		
		if (!((document.getElementsByClassName("randomCheckbox")[0].checked || document.getElementsByClassName("randomCheckbox")[1].checked || document.getElementsByClassName("randomCheckbox")[2].checked) && (document.getElementsByClassName("randomCheckbox")[3].checked || document.getElementsByClassName("randomCheckbox")[4].checked || document.getElementsByClassName("randomCheckbox")[5].checked || document.getElementsByClassName("randomCheckbox")[6].checked || document.getElementsByClassName("randomCheckbox")[7].checked))) {
			alert("Chose at least one attribute and one role");
			return;
		}
	
		choice[heroNumber][0] = -1;
		var string = "";
		for(i=0; i < 8; i++) {
			if (document.getElementsByClassName("randomCheckbox")[i].checked) {
				choice[heroNumber][i+1] = 1;
				switch (i){
					case 0 : string += "<img src='Resources/Heroes/pip_str.png' alt='Strength icon' />" ; break;
					case 1 : string += "<img src='Resources/Heroes/pip_agi.png' alt='Agility icon' />" ; break;
					case 2 : string += "<img src='Resources/Heroes/pip_int.png' alt='Intelligence icon' />" ; break;
					case 3 : string += "<span class='roleGraphic'>1</span>"; break;
					case 4 : string += "<span class='roleGraphic'>2</span>"; break;
					case 5 : string += "<span class='roleGraphic'>3</span>"; break;
					case 6 : string += "<span class='roleGraphic'>4</span>"; break;
					case 7 : string += "<span class='roleGraphic'>5</span>";
				}
			} else {
				choice[heroNumber][i+1] = 0;
			}
			if (i == 2) {string += "<br>Random Hero<br>";}
		}

		
		document.getElementsByClassName("heroChoicePortrait")[heroNumber].src = "Resources/Heroes/Random_sel.png";
		document.getElementsByClassName("heroChoicePortrait")[heroNumber].alt = "Random hero";
		document.getElementsByClassName("heroChoiceName")[heroNumber].innerHTML = string;
	} else {
		choice[heroNumber][0] = heroId;
		
		document.getElementsByClassName("heroChoicePortrait")[heroNumber].src = heroesList[heroId][1] + "_sel.png";
		document.getElementsByClassName("heroChoicePortrait")[heroNumber].alt = heroesList[heroId][0];
		document.getElementsByClassName("heroChoiceName")[heroNumber].innerHTML = heroesList[heroId][0] + '<br><span class="heroChoiceAka">"' + heroesList[heroId][2] + '"</span>';
	}
	heroesModal.style.display = "none";
}

function changeColor(i) {
	for (k = 0; k < 3; k++) {
		if (k == i) {
			document.getElementsByClassName("detailMode")[k].style.opacity = 1;
			document.getElementsByClassName("detailMode")[k].style.zIndex = 1;
		} else {
			document.getElementsByClassName("detailMode")[k].style.opacity = 0;
			document.getElementsByClassName("detailMode")[k].style.zIndex = 0;
		}
		document.getElementsByClassName("mainFrameContent")[0].style.backgroundColor = "hsla(" + (360 - 120*i) + ",100%,50%,0.7)";
	}
}

function changeHeroChoiceButtonsLayout(i) {
	for (l = 0; l < i+1; l++) {
		document.getElementsByClassName("heroChoiceButton")[l].style.display = "block";
	}
	for (k = i+1; k < 5; k++) {
		document.getElementsByClassName("heroChoiceButton")[k].style.display = "none";
		for (l = 0; l < 8; l++) {
			document.getElementsByClassName("randomCheckbox")[l].checked = true;
		}
		setHeroChosen(k, -1);
	}
	if (i > 2) {
		document.getElementById("breakFlex").style.display = "block";
	} else {
		document.getElementById("breakFlex").style.display = "none";
	}
}


function copypasta() {
	document.getElementsByClassName("goButton")[0].addEventListener('click', function(event) {
		var range = document.createRange();
		range.selectNode(document.getElementsByClassName("textArea")[0]);  
		window.getSelection().addRange(range);  
		document.execCommand('copy');  
		window.getSelection().removeAllRanges();
	});
	
	document.getElementsByClassName("copyButton")[0].addEventListener('click', function(event) {   
		var range0 = document.createRange();
		range0.selectNode(document.getElementsByClassName("textArea")[0]);  
		window.getSelection().addRange(range0);  
		document.execCommand('copy');  
		window.getSelection().removeAllRanges();   
	});
	document.getElementsByClassName("copyButton")[1].addEventListener('click', function(event) {   
		var range1 = document.createRange();
		range1.selectNode(document.getElementsByClassName("textArea")[1]);  
		window.getSelection().addRange(range1);  
		document.execCommand('copy');  
		window.getSelection().removeAllRanges();  
	});
	document.getElementsByClassName("copyButton")[2].addEventListener('click', function(event) {   
		var range2 = document.createRange();
		range2.selectNode(document.getElementsByClassName("textArea")[2]);  
		window.getSelection().addRange(range2);  
		document.execCommand('copy');  
		window.getSelection().removeAllRanges();  
	});
	document.getElementsByClassName("copyButton")[3].addEventListener('click', function(event) {   
		var range3 = document.createRange();
		range3.selectNode(document.getElementsByClassName("textArea")[3]);  
		window.getSelection().addRange(range3);  
		document.execCommand('copy');  
		window.getSelection().removeAllRanges();  
	});
	document.getElementsByClassName("copyButton")[4].addEventListener('click', function(event) {   
		var range4 = document.createRange();
		range4.selectNode(document.getElementsByClassName("textArea")[4]);  
		window.getSelection().addRange(range4);  
		document.execCommand('copy');  
		window.getSelection().removeAllRanges();  
	});
}

