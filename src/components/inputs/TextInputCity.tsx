import PencilGrey from "../../assets/images/pencil-solid.png";
export const TextInputCity = () => {
    return (
        <div className="inline-flex items-center flex-col">
            <div className="w-full relative">
                <div className="relative">
                    <input 
                        className="appearance-none bg-transparent border-b-2 border-b-icon-color w-full text-text-primary-color text-center text-base md:text-3xl py-1 px-10 leading-tight focus:outline-none" 
                        placeholder="Lorem Ipsum" 
                    />
                    <img 
                        src={PencilGrey} 
                        alt="Pencil icon" 
                        className="absolute right-0 top-0 bottom-0 my-auto mr-3 h-4"
                    />
                </div>
            </div>
            <div>
                <p className="text-sm md:text-2xl font-medium text-text-primary-color">Ciudad</p>
            </div>
        </div>
    )
}
