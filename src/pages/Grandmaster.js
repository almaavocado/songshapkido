import songAir from '../assets/mastersong/song-air.png';
import songFlip from '../assets/mastersong/song-flip.png';
import songMarine from '../assets/mastersong/song-marine.jpeg';
import grandMaster from '../assets/mastersong/song-weapon.png';

const facts = [
    { name: '1970 - 1982', description: 'Grandmaster Song also served with the United Nations Command Headquarters for the United States Forces in Korea, Eighth Army.' },
    { name: 'Over 60 Years of Martial Arts Experience', description: '9th Dan Hapkido, 5th Dan Tae Kwon Do, Black Belt Kumdo ( Way of the Sword)' },
    { name: '1983 ', description: 'Opened his first studio in Southern California' },
    { name: 'Founder', description: 'Dohyun International Hapkido Federation' },
]

export default function Grandmaster() {
    return (

            <div className="bg-gray-100 pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">Grandmaster</h1>

                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">Grandmaster Ho Jin Song</h2>
                        <p className="mt-4 text-gray-900 text-md">
                            With over 60 years of martial arts experience, Grandmaster Song is a highly accomplished martial artist and instructor. He is the founder of the Dohyun International Hapkido Federation and has played various roles as a hand-to-hand combat expert.
                            Grandmaster Song holds significant black belt ranks in multiple martial arts disciplines, including 9th Dan Hapkido, 5th Dan Tae Kwon Do, and expertise in Kumdo (Way of the Sword). Additionally, he is skilled in Taekyon and holds a degree in Acupuncture.
                            His lifelong dedication to martial arts led him to open his first studio in Southern California in 1983.
                        </p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {facts.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-md text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src={grandMaster}
                            alt="Master Song"
                            className="rounded-lg bg-gray-100 w-full h-96 object-cover"
                        />
                        <img
                            src={songAir}
                            alt="song-air"
                            className="rounded-lg bg-gray-100 w-full h-96 object-cover"
                        />
                        <img
                            src={songFlip}
                            alt="song-flip"
                            className="rounded-lg bg-gray-100 w-full h-96 object-cover"
                        />
                        <img
                            src={songMarine}
                            alt="song-marine"
                            className="rounded-lg bg-gray-100 w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        
    )
}
