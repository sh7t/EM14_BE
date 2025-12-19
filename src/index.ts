import promptSync from 'prompt-sync';
import bands from './bandsDiff.json'


type MusicBand = {
    name: string;
    genre: string;
    originCountry: string;
    foundedYear: number;
    isStillActive: boolean;
    trackCount: number;
    albumCount: number;
    members: BandMember[];
    albums: Album[];
};

type BandMember = {
    name: string;
    instrument: string;
    birthYear: number;
    joinedYear: number;
    leftYear?: number;
};

type Album = {
    id: number;
    title: string;
    releaseYear: number;
    tracks: Track[];
};

type Track = {
    id: number;
    title: string;
    durationInSeconds: number;
    releaseYear: number;
};


function isLengthSmallerThanNum(str: string, num: number) {
    return str.trim().length < num;

}

// 1.
class Car {
    private readonly id: number;
    public brand: string;
    public year: number;
    private mileage: number;
    private gasolineCapacity: number;
    private readonly fuelConsumption: number;

    constructor(brand: string, year: number, fuelConsumption: number) {
        if (isLengthSmallerThanNum(brand, 3))
            throw new Error("Brand name can't be that short.");

        if (year > new Date().getFullYear())
            throw new Error("Year has to be a real year.");

        if (fuelConsumption < 0)
            throw new Error("FuelConsumption has to be a positive number.");

        this.brand = brand.trim();
        this.year = year;
        this.mileage = 0;
        this.gasolineCapacity = 0;
        this.fuelConsumption = fuelConsumption;
    }
    get getId() {
        return this.id;
    }
    get getMileage() {
        return this.mileage;
    }
    get getGas() {
        return this.gasolineCapacity;
    }
    set setGas(value: number) {
        if (value < 0) {
            return;
        }
        this.gasolineCapacity = value;
    }

    drive(km: number) {
        if (km < 0)
            throw new Error("Wrong kilometers value.");
        return km * this.fuelConsumption;
    }
}

// 2.
class Comment {
    private readonly id: number;
    private author: string;
    private text: string;
    private advantages: string[];
    private disadvantages: string[];
    private createdAt: Date;
    private grade: number;
    private likes: number;
    private dislikes: number;

    constructor(author: string, text: string, grade: number, advantages?: string[], disadvantages?: string[]) {
        if (isLengthSmallerThanNum(author, 2))
            throw new Error("Invalid name.");
        if (isLengthSmallerThanNum(text, 20))
            throw new Error("Invalid comment text.");
        if (grade < 0 || grade > 5)
            throw new Error("Invalid grade.");


        this.author = author.trim();
        this.text = text.trim();
        this.advantages = advantages;
        this.disadvantages = disadvantages;
        this.createdAt = new Date();
        this.grade = grade;
    }

    // гетери-сетери...
    // ...
    // ...
}
const COMMENT_TEXT: string = "Чудовий подарунок, як для дитини, так і для дорослого. Приємним бонусом було, що це не лише" +
    "конструктор, а і світильник. Прийшло вчасно та з усіма деталями";
const COMMENT_AUTHOR: string = "Валентина Омельчук"

let comment: Comment = new Comment(COMMENT_AUTHOR, COMMENT_TEXT, 5, ["Приємна ціна", "Цікавий варіант подарунку"]);


// 3.
enum RoomTypes {
    Single,
    Double,
    Suite
}

class Room {
    private readonly _id: number;
    private _roomType: RoomTypes;
    private _pricePerNight: number;
    private _availability: boolean;
    private _floor: number;

    constructor(roomType: RoomTypes, floor: number, pricePerNight: number) {
        if (pricePerNight < 0)
            throw new Error("Invalid price per night.");
        if (floor < 0)
            throw new Error("Invalid floor.");

        this._floor = floor;
        this._roomType = roomType;
        this._pricePerNight = pricePerNight;
        this._availability = true;
    }

    get id() {
        return this._id;
    }
    get roomType() {
        return this._roomType;
    }
    get pricePerNight() {
        return this._pricePerNight;
    }
    set pricePerNight(pricePerNight: number) {
        if (pricePerNight < 0)
            throw new Error("Invalid price per night.");
        this._pricePerNight = pricePerNight;
    }
    get availability() {
        return this._availability;
    }
    changeAvailability() {
        this._availability = !this._availability;
    }
    get floor() {
        return this._floor;
    }
}
class Hotel {
    private readonly _id: number;
    private _name: string;
    private _rating: number;
    private _rooms: Room[]

    constructor(name: string, rating: number, rooms: Room[]) {
        if (rooms.length === 0)
            throw new Error("No rooms in hotel.");

        this.name = name.trim();
        this.rating = rating;
        this._rooms = rooms;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
        if (isLengthSmallerThanNum(name, 2))
            throw new Error("Invalid name.");
        this._name = name;
    }
    get rating() {
        return this._rating;
    }
    set rating(rating: number) {
        if (rating < 0 )
            throw new Error("Invalid rating.")
        this._rating = rating;
    }
    book(roomType: RoomTypes, floor?: number) {
        let room: Room;

        if (floor) {
            room = this._rooms.find((room: Room) => room.floor === floor && room.roomType === roomType);
        } else {
            room = this._rooms.find((room: Room) => room.roomType === roomType);
        }

        if (room === undefined)
            throw new Error("No room with such parameters found.");
        return room;
    }
}
