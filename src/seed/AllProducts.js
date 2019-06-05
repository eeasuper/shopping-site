const AllProducts = [
  {
    name: 'Pillow Soft® Silicone Putty Ear Plugs',
    price: 5000,
    picture: 'images/ear-silicone.jpg',
    id: 1,
    description:'The ultimate in earplug comfort, Mack’s® silicone putty molds to the unique contours of any ear',
    description_ul: ['Provides a better, more comfortable fit and seal than custom ear plugs','Great for sleeping, swimming, studying, bathing, travel, loud events, flying discomfort, etc.','Noise Reduction Rating (NRR) – 22 decibels']
  },
  {
    name: 'Flightguard™ Airplane Pressure Relief Ear Plugs',
    price: 14000,
    picture: 'images/ear-flightguard.jpg',
    id: 2,
    description: 'THE COMFORTABLE EARPLUGS FOR FLYING!TM – earplugs that do not hurt your ears',
    description_ul:['AERO FILTER regulates ear pressure to ease altitude changes','Cabin and engine noise is reduced by 26 decibels']
  },
  {
    name: 'Hear Plugs® High Fidelity Earplugs',
    price: 15000,
    picture: 'images/ear-hear.jpg',
    id: 3,
    description: 'Unique open-air filter reduces sound levels evenly so music and speech are clear and natural, not muffled',
    description_ul: ['Great for concerts, jam sessions, nightclubs, loud events, shop work and motorcycles','Noise Reduction Rating (NRR) – 12 decibels']
  },
  {
    name: 'Earammo® Earplugs for Men',
    price: 5000,
    picture: 'images/ear-ammos.jpg',
    id: 4,
    description: 'Step-down design results in one of our most comfortable ear plugs ever',
    description_ul: ['Fun, unique ammunition shape','Noise Reduction Rating (NRR) – 30 decibels','Great for loud events, power tools, shooting sports, motor sports, travel, sleeping, etc.']
  },
  {
    name: 'Dreamweaver™ Contoured Sleep Mask',
    price: 15000,
    picture: 'images/ear-dreamweaver-mask.jpg',
    id: 5,
    description: 'The most comfortable sleep mask on the planet',
    description_ul: ['Contoured design prevents mask from pressing against eyelids and eyelashes while keeping the wearer comfortable inside a curtain of darkness','Includes 1 pair of Mack’s® Soft Foam Earplugs and storage pouch']
  },
  {
    name: 'Macks® Ear Dryer',
    price: 70000,
    picture: 'images/ear-dryer.jpg',
    id: 6,
    description: 'Dry your ears naturally with warm, soothing air',
    description_ul: ['Dries water from swimmers’ ears in about one minute','Removes moisture buildup behind hearing aids, providing a more secure fit']
  },
  {
    name: 'Maximum Protection Soft Foam Earplugs',
    price: 5000,
    picture: 'images/ear-mack-daddy.jpg',
    id: 7,
    description: 'Finally, a standard-sized foam earplug with a Maximum Noise Reduction Rating of 33 dB! (highest NRR available)',
    description_ul: ['The “Mack Daddy” of Earplugs™','Great for loud concerts, motor sports, sleep, shooting sports, power tools, etc.']
  },
  {
    name: 'Ear Seals® Dual Purpose Earplugs',
    price: 5000,
    picture: 'images/ear-seal.jpg',
    id: 8,
    description: 'Dual-purpose earplugs – reduce noise and seal out water',
    description_ul: ['Dual-durometer design provides a unique combination of super-soft seal rings for unmatched comfort and a stiffer inner core for ease of insertion','Detachable cord allows user to conveniently hang the earplugs around neck in environments where noise comes and goes','Washable and reusable']
  },
  {
    name: 'Hi Viz Shooters Earplugs Banded Foam',
    price: 6000,
    picture: 'images/ear-shooter-banded.jpg',
    id: 9,
    description: 'Banded hearing protection with ergonomically-shaped soft foam ear plugs for comfort and performance',
    description_ul: ['Great for tactical training, hunting, loud events, target practice, skeet and trap shooting, etc.','Noise Reduction Rating (NRR) – 28 dB']
  },
  {
    name: 'ThermaFit™ Soft Foam Ear Plugs',
    price: 17000,
    picture:'images/ear-thermafit.jpg',
    id: 10,
    description: 'These ear plugs start firmer to ease insertion then use body heat to conform to the unique contours of your ears',
    description_ul: ['Discreet and latex free','Ultimate comfort and performance']
  },
  {
    name: 'Dreamgirl™ Contoured Sleep Mask',
    price: 15000,
    picture:'images/ear-dreamgirl-mask.jpg',
    id: 11,
    description: 'The most comfortable sleep mask on the planetTM',
    description_ul: ['Contoured design prevents mask from pressing against eyelids and eyelashes while keeping the wearer comfortable inside a curtain of darkness','Includes 1 pair of Mack’s® Soft Foam Earplugs and storage pouch']
  },
  {
    name: 'Snoozers® Silicone Putty Earplugs',
    price: 7000,
    picture:'images/ear-snoozers.jpg',
    id: 12,
    description: 'The ultimate in earplug comfort, Mack’s® silicone putty ear plugs mold to the unique contours of any ear',
    description_ul: ['Great for snoring spouses, noisy neighbors, air travel, etc.','No pressure, cover-only design offers unsurpassed comfort']
  },
  {
    name: 'Blackout™ Soft Foam Earplugs',
    price: 7000,
    picture:'images/ear-blackout.jpg',
    id: 13,
    description: 'Rock out with Mack’s® Blackout® ear plugs!',
    description_ul: ['Fashionable, discreet color','Fully skinned and tapered, providing unmatched user comfort and hygiene']
  },
  {
    name: 'Snore Blockers™ Soft Foam Earplugs',
    price: 7000,
    picture:'images/ear-snore.jpg',
    id: 14,
    description: 'Made with super soft foam, these ear plugs are perfect for extended wear in situations where extreme comfort is paramount',
    description_ul: ['Great for blocking out snoring spouses, roommates, fishing buddies, travel partners, etc.','#1 Doctor Recommended Brand to get a good night’s sleep when sleeping with a snoring spouse']
  },
  {
    name: 'Roll-Ups™ Wallet Earplugs',
    price: 7000,
    picture:'images/ear-wallet.jpg',
    id: 15,
    description: 'Never forget your ear plugs again!',
    description_ul: ['These comfortable, silky smooth, soft foam earplugs store flat in your wallet so they’re always handy and roll up in seconds for quick, easy use','Great for loud concerts, sporting events, nightclubs, shooting sports, worksites, etc.']
  },
  {
    name: 'Acoustic Foam Earplugs',
    price: 7000,
    picture:'images/ear-acoustic.jpg',
    id: 16,
    description: 'These ear plugs’ innovative hollow-cut and grooved design provides clearer acoustics and allows for improved communication',
    description_ul: ['Noise Reduction Rating (NRR) – 20 decibels','Great for concerts, jam sessions, nightclubs, shop work, etc.']
  },
  {
    name: 'Dreamgirl™ Soft Foam Ear Plugs',
    price: 7000,
    picture:'images/ear-dreamgirl.jpg',
    id: 17,
    description: 'Soft foam ear plugs designed for women with small or sensitive ear canals',
    description_ul: ['Unique hollow and flared design maximizes comfort, especially during sleep','Ultimate comfort for women: softer, smaller, silky smooth and contoured']
  },
];

export default AllProducts;