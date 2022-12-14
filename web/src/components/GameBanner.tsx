interface GameBannerProps {
    bannerURL: string;
    title: string;
    adsCounnt: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <>
            <div className='relative rounded-lg overflow-hidden'>
                <img src={props.bannerURL} className='w-[12rem] h-[16rem]'/>

                <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
                    <strong className='font-bold text-white block'>{props.title}</strong>
                    <span className='text-zinc-300 text-sm block'>{props.adsCounnt} Anúncio(s)</span>
                </div>

            </div>
        </>
    );
}