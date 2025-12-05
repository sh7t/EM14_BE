import promptSync from 'prompt-sync';
import bands from './bands.json'

const prompt = promptSync();
const bandsList: MusicBand[] = bands;

type MusicBand = {
    name: string;
    genre: string;
    members: BandMember[];
    originCountry: string;
    foundedYear: number;
    trackCount: number;
}

interface BandMember {
    name: string;
    instrument: string;
}

// 1.
const onlyNames = bandsList.map((band) => {
    return {
        name: band.name
    }
});

// 2.
type threeFieldsObject = {
    name: string,
    genre: string,
    trackCount: number
};
const threeFieldsObjects = bandsList.map((band: threeFieldsObject) => {
    return {
        name: band.name,
        genre: band.genre,
        trackCount: band.trackCount
    }
});

// 3.
const youngerThanZeroes: MusicBand[]  = bandsList.filter(band => band.foundedYear > 2000);

// 4.
const moreTracksThanHunid: MusicBand[]  = bandsList.filter(band => band.trackCount > 100);

// 5.
const RockNRolls: MusicBand[]  = bandsList.filter(band => band.genre === "Rock");

// 6.
const olderThanEighties: MusicBand[]  = bandsList.filter(band => band.foundedYear < 1980);

// 7.
const fromStates: MusicBand[] = bandsList.filter(band => band.originCountry === "USA");

// 8.
const allTracks: number = bandsList.reduce((accumulator, band) => {
    return accumulator + band.trackCount;
},0);

// 9.
const allMembers: number = bandsList.reduce((accumulator, band) => {
    return accumulator + band.members.length;
},0);

// 10.
let moreTracks: MusicBand = {
    name: "",
    genre: "",
    members: [
        {
            name: "",
            instrument: ""
        }
    ],
    originCountry: "",
    foundedYear: 0,
    trackCount: 0,
}

bandsList.forEach(band => {
    if (band.trackCount > moreTracks.trackCount)
        moreTracks = band;
});

// 11.
const rockNAlts: MusicBand[] = bandsList.filter(band => band.genre === "Rock" || band.genre === "Alternative Rock");

// 12.
let longestName: BandMember = {
    name: "",
    instrument: ""
};
bandsList.forEach(band => {
    band.members.forEach(member => {
        if (member.name.trim().length > longestName.name.trim().length)
            longestName = member;
    })
});

// 13.
bandsList.forEach(band => {
    console.log(`${band.name} - ${band.foundedYear}`);
})

// 14.
bandsList.forEach(band => {
    if (band.members.length > 3)
        console.log(`${band.name} has more than ${band.members.length} members`);
})

// 15.
let uniqueGenres: string[] = [];
bandsList.forEach(band => {
    if (!uniqueGenres.includes(band.genre))
        uniqueGenres.push(band.genre);
})

// 16.
interface ICountryTracks {
    [country: string]: number;
}

const countryTracks: ICountryTracks = bands.reduce((accumulator, band) => {
    accumulator[band.originCountry] = (accumulator[band.originCountry] || 0) + band.trackCount;
    return accumulator;
}, {});

// 17.
let instruments = bandsList.map(band => {
    return band.members.map(member => {
        return member.instrument;
    })
})

// 18.
let uniqueInstruments: string[] = [];
bandsList.forEach(band => {
    band.members.forEach(member => {
        if (!uniqueInstruments.includes(member.instrument)) {
            uniqueInstruments.push(member.instrument);
        }
    })
})

// 19.
interface ITitleAndNameLength {
    [name: string]: number;
}

const titleAndNameLength: ITitleAndNameLength = bands.reduce((accumulator, band) => {
    accumulator[band.name] = (accumulator[band.name] || 0) + band.members.reduce((accumulator, member) => {
        return accumulator + member.name.trim().length;
    }, 0);
    return accumulator;
}, {});